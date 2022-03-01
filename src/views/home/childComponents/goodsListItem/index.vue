<template>
  <div class="goodsListItem" @click="goToDetail()">
    <img v-lazy="getImg" :key="getImg" alt="" @load="imageLoad()" />
    <div class="goods-info">
      <p>{{ goods.title }}</p>
      <span class="price">¥{{ goods.price }}</span>
      <span class="collect">{{ goods.cfav }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {
      name:'test'
    };
  },
  props: {
    goods: {
      type: Object,
      default: {},
      required: true,
    },
  },
  computed: {
    getImg() {
      return this.goods.img || this.goods.image || this.goods.show.img;
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
      // console.log(this.$bus)
    },
    goToDetail() {
      //1.获取iid
      let iid = this.goods.iid

      //2.跳转到详情页

      this.$router.push({path: '/detail', query: {iid}})
    }
  },
  // beforeCreate() {
  //     console.log('[ "item beforeCreate" ]', "item beforeCreate")
  // },
  // created() {
  //     console.log('[ "item created" ]', "item created")
  // },
  // beforeMount() {
  //     console.log('[ "item beforeMount" ]', "item beforeMount")
  // },
  mounted() {
      console.log('[ "item mounted" ]', "item mounted")
      this.$nextTick(()=>{
        this.$bus.$on(`${this.name}`, (m)=>{
          console.log(m + 'hello')
        })
        })
  },
};
</script>
