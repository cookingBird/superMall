<template>
  <swiper class="home-swiper" ref='swiper' v-if="banners.length">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  name: "HomeSwiper",
  created() {},
  data() {
    return {};
  },
  props: {
    banners:{
      type: Array,
      required: true,
      default: []
    }
  },
  methods: {
    stopTimer(){
      this.$ref.swiper.stopTimer()
    },
    startTimer(){
      if(this.$ref.swiper){
        this.$ref.swiper.startTimer()
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
};
</script>

<style lang="css" scoped>
.home-swiper{
  width: 100%;
}
</style>