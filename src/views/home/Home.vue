<template>
  <div id="home">
    <home-top-bar />
    <tab-control  class="fixed"
                  v-show='isShowTabFixed'
                  :titles="['流行', '新款', '精选']"
                  @itemClick="tabClick">
    </tab-control>
    <common-scroll  class="home-scroll"
                    ref="scroll"
                    @loadMore="loadMore"
                    @scroll="contentScroll">
      <home-swiper  :banners="banners"
                    ref="hSwiper"> 
      </home-swiper>

      <feature-view :feature="recommends"></feature-view>
      <recommend-view></recommend-view>

      <tab-control  ref="tabControl"
                    :titles="['流行', '新款', '精选']"
                    @itemClick="tabClick">
      </tab-control>
      <home-goods-list :goodsList='goodsListShow'></home-goods-list>
    </common-scroll>
    <back-top class="back-top"
              @backTop='backTop'
              v-show='isShowBackTop'>
      <img src="~assets/img/common/top.png" alt="">
    </back-top>
    <!-- <back-top class="back-top"
              @click.native="backTop()"
              v-show='isShowBackTop'>
      <img src="~assets/img/common/top.png" alt="">
    </back-top> -->
  </div>
</template>

<script>
import HomeTopBar from "./childComponents/HomeTopBar.vue";
import CommonScroll from "../CommonScroll.vue";
import HomeSwiper from "./childComponents/HomeSwiper.vue";
import FeatureView from "./childComponents/FeatureView.vue";
import RecommendView from "./childComponents/RecommendView.vue";
import TabControl from "components/content/TabControl";
import HomeGoodsList from './childComponents/HomeGoodsList.vue';
import BackTop from 'components/content/backTop/BackTop'

import { NEW, POP, SELL, BACKTOP_DISTANCE } from "common/const.js";
import { debounce } from 'common/utils.js'

import {
  getHomeMultidata,
  getHomeData,
  BANNER,
  RECOMMEND,
} from "network/home.js";

export default {
  name: "Home",
  components: {
    HomeTopBar,
    CommonScroll,
    HomeSwiper,
    FeatureView,
    RecommendView,
    TabControl,
    HomeGoodsList,
    BackTop,
    TabControl
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: {
        'pop': { page: 1, list: [] },
        'new': { page: 1, list: [] },
        'sell': { page: 1, list: [] },
      },
      currentType: POP,
      isShowTabFixed: false,
      tabOffsetTop: 0,
      isShowBackTop: false,
      offsetTop: 0,
      func:{},
    };
  },
  props: {},
  computed: {
    goodsListShow() {
      return this.goodsList[this.currentType].list
    },
  },
  created() {
    // console.log('[ "Home Created" ]', "Home Created")
    //请求轮播数据|推荐数据
    this.getMultiData();

    //请求商品数据
    this.getHomeProducts(POP);
    this.getHomeProducts(NEW);
    this.getHomeProducts(SELL);
  },
  beforeMount() {
    // console.log("Home beforeMoute")
  },
  mounted() {
    // console.log("Home mouted")
    //监听图片加载完成之后refresh()
    this.func.refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on('itemImageLoad', ()=>{
     this.func.refresh()
    })
  },
  unmounted() {
    // console.log('home unmounted')
  },
  beforeUpdate() {
    // console.log("Home beforeUpdate")
  },
  updated() {
    // console.log("Home updated")
    this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
  },
  activated() {
    console.log('Home activated')
    this.$nextTick(()=>{
      this.$refs.scroll.refresh()
    })
  },
  deactivated() {
    // console.log('Home deactivated')
  },
  methods: {
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
    },
    loadMore(){
        this.getHomeProducts(this.currentType);
        setTimeout(() => {
          this.$refs.scroll.finishPullUp();
        },500)
      },
      backTop(){
        // console.log('click')
        this.$refs && this.$refs.scroll.scrollTo(0, 0, 300);
      },
      contentScroll(position) {
        // console.log(position.y)
        // 1.决定tabControl是否显示
        this.isShowTabFixed = -position.y >= this.tabOffsetTop
        // 2.决定backTop是否显示
        this.isShowBackTop = position.y < -BACKTOP_DISTANCE

        // this.offsetTop = position.y

        // console.log(this.offsetTop)
      },
    /////////////////////////
    //网络请求相关
    getHomeProducts(type) {
      getHomeData(type, this.goodsList[type].page).then((res) => {
        const goodsLists = res.data.list;
        this.goodsList[type].list.push(...goodsLists);
        this.goodsList[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },
    getMultiData() {
      getHomeMultidata().then((res) => {
        this.banners = res.data[BANNER].list;
        this.recommends = res.data[RECOMMEND].list;
      });
    },
  },
};
</script>

<style lang="css" scoped>
.top-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  position: fixed;
}
.home-scroll{
  height: calc(100vh - 44px - 49px);
}
.back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
}
.fixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
}
</style>