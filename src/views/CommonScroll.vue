<template>
  <scroll ref="scrollOrigin"
          class="common-scroll"
          @pullingUp="loadMore"
          @scroll="contentScroll"
          :config="config">
    <slot> Scroll Content</slot>

  </scroll>
</template>

<script>
import Scroll from 'components/common/Scroll'

export default {
  name: "CommonScroll",
  components:{
    Scroll
  },
  data() {
    return {
      config:{
              pullUpLoad: true,
              probeType: 0,
              scrollY: true,
              click: true,
              freeScroll: true
            }
    }
  },
  props: {},
  methods: {
    finishPullUp() {
      this.$refs && this.$refs.scrollOrigin.finishPullUp()
    },
    refresh() {
      this.$refs && this.$refs.scrollOrigin.refresh()
    },
    scrollTo(x, y, time) {
      this.$refs && this.$refs.scrollOrigin.scrollTo(x, y, time)
    },
    loadMore() {
      this.$emit('loadMore')
    },
    contentScroll(pos) {
      this.$emit("scroll", pos)
    }
  },
  // beforeCreate() {
  //   console.log('[ "CommonScroll beforeCreate" ]', "CommonScroll beforeCreate")
  // },
  // created() {
  //   console.log('[ "CommonScroll created" ]', "CommonScroll created")
  // },
  // beforeMount() {
  //   console.log('[ "CommonScroll beforeMounte" ]', "CommonScroll beforeMounte")
  // },
  // mounted() {
  //   console.log('[ "CommonScroll" ]', 'CommonScroll mounted')
  // },
  // beforeUpdate() {
  //   console.log('[ "CommonScroll beforeUpdated" ]', "CommonScroll beforeUpdated")
  // },
  // updated() {
  //   console.log('[ "CommonScroll updated" ]', "CommonScroll updated")
  // },
};
</script>

<style lang="css" scoped>
.common-scroll{
  position: absolute;
  top: 44px;
}
</style>