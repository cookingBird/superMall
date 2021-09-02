<template>
    <div class="goodsListItem">
        <img v-lazy="getImg" :key="getImg" alt="" @load='imageLoad()'>
        <div class="goods-info">
            <p>{{goods.title}}</p>
            <span class="price">¥{{goods.price}}</span>
            <span class="collect">{{goods.cfav}}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import './index.scss';
</style>

<script>
import { debounce } from 'common/utils.js'

export default {
    name: 'GoodsListItem',
    data() {
        return {
            func: {}
        };
    },
    props:{
        goods:{
            type: Object,
            default: {},
            required: true
        }
    },
    computed:{
        getImg() {
            return this.goods.img || this.goods.image || this.goods.show.img
        }
    },
    methods: {
        imageLoad(){
            this.$bus.$emit('itemImageLoad')
            // console.log(this.$bus)
            // console.log(this.func.loaded)
        }
    },
    created() {
        // this.func.loaded = "created test"
    },
    mounted() {
        
    },
};
</script>
