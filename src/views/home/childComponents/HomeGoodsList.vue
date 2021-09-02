<template>
  <div class="HomeGoodsList">
    <grid-layout ref="gridView">
      <goods-list-item v-for="(item, index) in goodsList" :key="index" :goods='item'>
      </goods-list-item>
    </grid-layout>
  </div>
</template>

<script>
import GoodsListItem from "./goodsListItem/index.vue"
import GridLayout from "components/common/GridLayout"
export default {
  name: "HomeGoodsList",
  components:{
    GoodsListItem,
    GridLayout
  },
  data() {
    return {};
  },
  props: {
    goodsList: {
        type: Array,
        default: []
      }
  },
  methods: {},
  // beforeCreate() {
  //   console.log('[ "GoodsList beforeCreate" ]', "GoodsList beforeCreate")
  // },
  // created() {
  //   console.log('[ "GoodsList created" ]', "GoodsList created")
  // },
  // beforeMount() {
  //   console.log('[ "GoodsList beforeMount" ]', "GoodsList beforeMount")
  // },
  // mounted() {
  //   console.log('[ "GoodsList mounted" ]', "GoodsList mounted")
  // },
  // beforeUpdate() {
  //   console.log('[ "GoodsList beforeUpdate" ]', "GoodsList beforeUpdate")
  // },
  // updated() {
  //   console.log('[ "GoodsList updated" ]', "GoodsList updated")
  // }
};
</script>

<style lang="scss" scoped></style>