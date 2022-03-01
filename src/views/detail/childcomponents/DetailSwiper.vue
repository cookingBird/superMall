<template>
  <swiper class="detail-swiper" 
          v-if="images.length">
    <swiper-item  class="detail-swiper-item" 
                  v-for="(item, index) in images" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: "DetailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  created() {},
  data() {
    return {};
  },
  props: {
    images:{
      type:Array,
      required: true
    }
  },
  methods: {},
  updated() {
    this.$bus.$emit('scroll')
  },
};
</script>

<style lang="scss" scoped>
.detail-swiper-item {
    text-align: center;
    height: 300px;
  }
</style>