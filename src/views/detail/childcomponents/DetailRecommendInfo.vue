<template>
  <div class="recommend-info">
    <div class="info-header">热门推荐</div>
    <grid-layout>
      <goods-list-item v-for="(item, index) in recommendList" :key="index" :goods="item"></goods-list-item>
    </grid-layout>
  </div>
</template>

<script>
  import GridLayout from 'components/common/GridLayout'
  import GoodsListItem from 'components/content/goodsListItem'

	export default {
		name: "DetailRecommendInfo",
    components: {
		  GridLayout,
      GoodsListItem
    },
    props: {
		  recommendList: {
		    type: Array
      }
    }
	}
</script>

<style scoped>
  .recommend-info {
    padding-top: 5px;
  }

  .info-header {
    line-height: 40px;
    padding-left: 8px;
    font-size: 15px;
    color: #333;
  }
</style>
