import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Detail = () => import('views/detail/Detail')
const Profile = () => import('views/profile/Profile')

Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		redirect:'/home'
	},
	{
		path:'/home',
		component: Home
	},
	{
		path:'/category',
		component: Category
	},
	{
		path:'/detail',
		component: Detail
	},
	{
		path:'/cart',
		component: Cart
	}
]
// 3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})

// 4.导出
export default router