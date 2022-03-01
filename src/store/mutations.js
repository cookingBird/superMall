const mutations = {
	addToCart(state, obj){
		//一、查看是否添加过
		const oldInfo = state.cartList.find(item => item.iid === obj.iid)

		// 二、+1或者新添加
    if (oldInfo) {
      oldInfo.count += 1
    } else {
      obj.count = 1
      obj.checked = true
      state.cartList.push(obj)
    }
	}
}

export default mutations