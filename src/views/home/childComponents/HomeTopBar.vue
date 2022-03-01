<template>
  <top-bar class="home-top-bar">
    <div slot='center'>
      购物街
    </div>
  </top-bar>
</template>

<script>
import TopBar from 'components/content/topbar/TopBar'

export default {
  name: "HomeTopBar",
  data() {
    return {};
  },
  props: {},
  methods: {},
  components:{
    TopBar
  },
  created() {},
};
</script>

<style lang="css" scoped>
.home-top-bar{
  position: relative;
  
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
</style>