<template>
  <div id='top-bar'>
    <div id="left"><slot name='left'></slot></div>
    <div id="center"><slot name='center'></slot></div>
    <div id="right"><slot name='right'></slot></div> 
  </div>
</template>

<script>
export default {
  name: "TopBar",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
   
};
</script>

<style lang="css" scoped>

  #left, #center, #right{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #top-bar{
    width: 100vw;
    height: 44px;

    display: flex;
  }

  #left{
    width: 60px;
  }
  #center{
    flex: 1;
  }
  #right{
    width: 60px;
  }
</style>