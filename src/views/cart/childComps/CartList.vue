<template>
  <common-scroll class="cart-scroll"
          ref='scroll'>
    <div>
      <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
    </div>
  </common-scroll>
</template>

<script>
  import CommonScroll from 'views/CommonScroll'
  import CartListItem from './CartListItem'

	export default {
		name: "CartList",
    components: {
		  CommonScroll,
      CartListItem
    },
    props: {
		  cartList: {
		    type: Array,
        default() {
		      return []
        }
      }
    },
    updated() {
      this.$nextTick(()=>{
        this.$refs.scroll.refresh()
      })
    },
	}
</script>

<style scoped>
.cart-scroll{
  width: 100vw;
  height: calc(100vh - 137px);
  background-color: #fff;
  overflow: hidden;
}
</style>
