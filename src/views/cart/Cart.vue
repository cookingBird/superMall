<template>
  <div id="cart">
    <top-bar class="nav-bar"><div slot="center">购物车({{cartCount}})</div></top-bar>
    <cart-list class="cart-list" :cart-list="cartList"></cart-list>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import TopBar from 'components/content/topbar/TopBar'
  import CartList from './childComps/CartList'
  import BottomBar from './childComps/BottomBar'

	export default {
		name: "Cart",
    components: {
		  TopBar,
      CartList,
      BottomBar
    },
    computed: {
		  cartList() {
		    return this.$store.getters.cartList
      },
      cartCount() {
		    return this.$store.getters.cartCount
      }
    }
	}
</script>

<style scoped>
  #cart {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
  }
</style>
