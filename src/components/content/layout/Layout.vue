<template>
  <div id='layout'>
    <div class="router-content"><slot name="routerContent">
      默认值：top
    </slot></div>

    <div class="bottom-tabbar"><slot name="bottomTabbar">
      默认值：bottom  
    </slot></div>
  </div>
</template>

<script>
export default {
  name: "Layout"
};
</script>

<style lang="css" scoped>
#layout{
  margin: 0;
  padding: 0;
  width: 100vw;
  height:100vh;
}

.router-content{
  margin: 0;
  padding: 0;
  width: 100vw;
  height: calc(100vh - 49px);
  background-color: #c3ee72;
}
.bottom-tabbar{
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 49px;
  background-color: #42e08c;
}
</style>