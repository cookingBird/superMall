<template>
  <div id="app">
    <layout>
      <div slot="routerContent">
        <keep-alive exclude="Detail">
          <router-view></router-view>
        </keep-alive>
      </div>
      <main-tab-bar slot="bottomTabbar"></main-tab-bar>
    </layout>
  </div>
</template>

<script>
import Layout from "components/content/layout/Layout.vue"

import MainTabBar from "components/content/mainTabBar/MainTabBar"
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    Layout,
    MainTabBar
  }
}
</script>

<style lang="css" scope>
   @import "assets/css/base.css";

  #app {
    position: relative;
  }
</style>
