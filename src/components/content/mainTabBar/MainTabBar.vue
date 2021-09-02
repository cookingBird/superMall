<template>
  <div id='root'>
    <tab-bar-item 
      content="首页"
      link='home'>
        <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="active-icon" src="~assets/img/tabbar/home_active.svg" alt="">
    </tab-bar-item>
      
    <tab-bar-item 
      content="分类"
      link='category'>
        <img slot="icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="active-icon" src="~assets/img/tabbar/category_active.svg" alt="">
    </tab-bar-item>
      
    <tab-bar-item 
      content="购物车"
      link='cart'>
        <img slot="icon" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="active-icon" src="~assets/img/tabbar/cart_active.svg" alt="">
    </tab-bar-item>
    <tab-bar-item 
      content="我的"
      link='detail'>
        <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="active-icon" src="~assets/img/tabbar/profile_active.svg" alt="">
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from "components/common/tabbar/TabBarItem.vue"

export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  props: {},
  methods: {},
  components:{
    TabBarItem
  },
 
};
</script>

<style lang="css" scoped>
  #root{
    display: flex;
    width: 100vw;
    height: 49px;
    justify-content: center;
    background-color: #fff;
  }
  
</style>