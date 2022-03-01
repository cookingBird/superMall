<template>
  <div id="detail">
    <detail-nav-bar @itemClick="titleClick" :current-index='currentIndex'/>
    <common-scroll  class="detail-scroll-content"
                    ref="detailScroll"
                    @scroll='contentScroll'>
      <detail-swiper ref="base" :images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop='shop' />
      <detail-goods-info :detail-info="detailInfo" />
      <detail-param-info ref="param" :paramInfo="paramInfo" />
      <detail-comment-info  ref="comment" :commentInfo="commentInfo"/>
      <detail-recommend-info ref="recommend"  :recommendList="recommendList"/>
    </common-scroll>
    <detail-bottom-bar @addToCart="addToCart()"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from './childcomponents/DetailNavBar.vue'
import CommonScroll from '../CommonScroll.vue'
import DetailSwiper from './childcomponents/DetailSwiper'
import DetailBaseInfo from './childcomponents/DetailBaseInfo'
import DetailShopInfo from './childcomponents/DetailShopInfo'
import DetailGoodsInfo from './childcomponents/DetailGoodsInfo'
import DetailParamInfo from './childcomponents/DetailParamInfo'
import DetailCommentInfo from './childcomponents/DetailCommentInfo'
import DetailRecommendInfo from './childcomponents/DetailRecommendInfo'
import DetailBottomBar from './childcomponents/DetailBottomBar'

import {  getDetail,
          getRecommend,
          Goods,
          Shop,
          GoodsParam } from "network/detail";

export default {
  name: "Detail",
  created() {},
  data() {
    return {
      iid: '',
      topImages:[],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList:[],
      currentIndex: 0,
      themeTops:[]
    }
  },
  components:{
    DetailNavBar,
    CommonScroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar
  },
  beforeCreate() {
    // console.log('[ "detail beforeCreated" ]', "detail beforeCreated")
  },
  created() {
    this.iid = this.$route.query.iid
    this._getDetailData()
    this._getRecommend()
    // console.log('[ "detal created" ]', "detal created")
  },
  beforeMount() {
    // console.log('[ "detail beforeMount" ]', "detail beforeMount")
  },
  mounted() {
    // console.log('[ "detail mounted" ]', "detail mounted")
    // this.$refs.detailScroll.refresh()
  },
  beforeUpdate() {
    // console.log('[ "detail beforeUpdated" ]', "detail beforeUpdated")
  },
  updated() {
    // console.log('[ "detail updated" ]', "detail updated")
    // 获取需要的四个offsetTop
    // this._getOffsetTops()
    this.$nextTick(() => {
      this._getOffsetTops()
    })
  },
  methods: {
    //网络请求
    _getDetailData() {
      //根据iid请求数据
      getDetail(this.iid).then((res) => {
        // 2.1.获取结果
        const data = res.result;

        // 2.2.获取顶部信息
        this.topImages = data.itemInfo.topImages;

        // 2.3.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

        // 2.4.获取店铺信息
        this.shop = new Shop(data.shopInfo);

        // 2.5.获取商品信息
        this.detailInfo = data.detailInfo

        // 2.6.保存参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

        // 2.7.保存评论信息
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
      })
    },
    _getRecommend() {
      getRecommend().then((res, error )=> {
        if (error) {}
         else this.recommendList = res.data.list
      })
    },
    //获取offsetTop
    _getOffsetTops(){
      this.themeTops = []
      this.themeTops.push(this.$refs.base.$el.offsetTop)
      this.themeTops.push(this.$refs.param.$el.offsetTop)
      this.themeTops.push(this.$refs.comment.$el.offsetTop)
      this.themeTops.push(this.$refs.recommend.$el.offsetTop)
      this.themeTops.push(Number.MAX_VALUE)
    },
    contentScroll(pos){
      // 1.监听backTop的显示
      // this.showBackTop = position.y < -BACKTOP_DISTANCE

      // 2.监听滚动到哪一个主题
      this._listenScrollTheme(-pos.y)
    },
    _listenScrollTheme(position){
      let length = this.themeTops.length;
      for (let i = 0; i < length; i++) {
        let iPos = this.themeTops[i];
        /**
         * 判断的方案:
         *  方案一:
         *    条件: (i < (length-1) && currentPos >= iPos && currentPos < this.themeTops[i+1]) || (i === (length-1) && currentPos >= iPos),
         *    优点: 不需要引入其他的内容, 通过逻辑解决
         *    缺点: 判断条件过长, 并且不容易理解
         *  方案二:
         *    条件: 给themeTops最后添加一个很大的值, 用于和最后一个主题的top进行比较.
         *    优点: 简洁明了, 便于理解
         *    缺点: 需要引入一个较大的int数字
         * 疑惑: 在第一个判断中, 为什么不能直接判断(currentPos >= iPos)即可?
         * 解答: 比如在某一个currentPos大于第0个时, 就会break, 不会判断后面的i了.
         */
        if (position >= iPos && position < this.themeTops[i+1]) {
          if (this.currentIndex !== i) {
            this.currentIndex = i;
          }
          break;
        }
      }
    },
    titleClick(index){
      this.$refs.detailScroll.scrollTo(0, -this.themeTops[index], 100)
    },
    addToCart(){
      // 1.创建对象
        const obj = {}
        // 2.对象信息
        obj.iid = this.iid;
        obj.imgURL = this.topImages[0]
        obj.title = this.goods.title
        obj.desc = this.goods.desc;
        obj.newPrice = this.goods.nowPrice;
        // 3.添加到Store中
        this.$store.commit('addToCart', obj)
    }

  },
};
</script>

<style lang="scss" scoped>
#detail{
  .detail-scroll-content{
    height: calc(100vh - 44px - 58px);
    // bottom: 60px;
  }
}
</style>