<template>
  <top-bar class="detail-nav">
    <img  slot='left'
          class="back"
          @click="backClick()"
          src="~assets/img/common/back.svg" alt="">

    <div slot="center" class="title">
      <span class="title-item"
            v-for="(item, index) in titleInfos" :key="index"
            :class="{active : (index === currentIndex)}"
            @click="itemClick(index)">
        {{item}}
      </span>
    </div>
  </top-bar>
</template>

<script>
import TopBar from 'components/content/topbar/TopBar'

export default {
  name: "DetailNavBar",
  components:{
    TopBar
  },
  data() {
    return {}
  },
  props: {
    titleInfos:{
      type: Array,
      default: () => {
        return ['商品', '参数', '评论', '推荐']
      }
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    backClick(){
      this.$router.back()
    },
    itemClick(index){
      this.$emit("itemClick", index)
    }
  },
  // beforeCreate() {
  //   console.log('[ "detailNavBar beforeCreated" ]', "detailNavBar beforeCreated")
  // },
  // created() {
  //   console.log('[ "detalNavBar created" ]', "detalNavBar created")
  // },
  // beforeMount() {
  //   console.log('[ "detailNavBar beforeMount" ]', "detailNavBar beforeMount")
  // },
  // mounted() {
  //   console.log('[ "detailNavBar mounted" ]', "detailNavBar mounted")
  // },
  // beforeUpdate() {
  //   console.log('[ "detailNavBar beforeUpdated" ]', "detailNavBar beforeUpdated")
  // },
  // updated() {
  //   console.log('[ "detailNavBar updated" ]', "detailNavBar updated")
  // },
};
</script>

<style lang="scss" scoped>
  .detail-nav {
    background-color: #fff;
    font-weight: normal;

    .title {
      display: flex;
      width: 100%;
      padding: 0 20px;
      font-size: 14px;

      .title-item {
        flex: 1;
      }
      .active {
        color: var(--color-high-text);
      }
    }

    .back {
      padding: 0;
    }
  }
</style>