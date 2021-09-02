<template>
  <div id="OriginScroll" ref="wrapper">
      <div class="scroll-content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

import { debounce } from 'common/utils.js'

BScroll.use(Pullup)

export default {
  name: "Scroll",
  data() {
    return {
        scroll: {}
    }
  },
  props:{
      data: {
        type: Array,
        default: () => {
          return []
        }
      },
      config:{
        type: Object,
        required:true
      }
  },
  provide() {
    return {
      // scroll: this.Vue.computed(() => this.scroll)
    }
  },
  methods: {
    _initScroll() {
        //初始化better-scroll
      if(this.$refs.wrapper){
        this.scroll = new BScroll("#OriginScroll", this.config)
      }
      //监听事件回调
      this.scroll.on('scroll', pos => {
          this.$emit('scroll', pos)
      })
      //监听上拉到底部
      this.scroll.on('pullingUp', () => {
          // console.log('上拉加载')
          this.$emit('pullingUp')
      })
    },
    refresh() {
      // console.log('------scroll refresh-----')
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
    },
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
    }
  },
  // beforeCreate() {
  //   console.log('[ "Scroll beforeCreate" ]', "Scroll beforeCreate")
  // },
  // created() {
  //   console.log('[ "Scroll created" ]', "Scroll created")
  // },
  // beforeMount() {
  //   console.log('[ "Scroll beforeMounte" ]', "Scroll beforeMounte")
  // },
  mounted() {
    // console.log('[ "Scroll" ]', 'Scroll mounted')
    // console.log(this.config)
    this._initScroll()
  },
  beforeUpdate() {
    //deboun函数只会返回函数本身，不会返回其原本调用的this指针（scroll对象）
    //所以在之后调用debounce的返回函数的时候，会有this指针丢失的问题
    //调用debounce的返回函数中的this实际上是指向当前VueComponents对象
    // const refresh = debounce(this.scroll.refresh)
    // this.$bus.$on('scroll', ()=>{
    //   console.log('---debounce refresh---')
    //   refresh()
    // })
  },
  updated() {
    // console.log(this.scroll)
    this.$nextTick(() => {
      this.refresh()
      // console.log('[ "updated $nextTick" ]', "updated $nextTick")
    })
  },
};
</script>

<style lang="sass" scoped>
  @import './index.scss'
</style>

