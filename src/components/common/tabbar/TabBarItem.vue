<template>
  <div id="tab-bar-item" @click="itemClick()">
    <div class="item-icon" v-show="!isActive">
      <slot name='icon'></slot>
    </div>
    <div class="item-active-icon" v-show="isActive">
      <slot name='active-icon'></slot>
    </div>
    <div class="text" :style="isActiveStyle">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  created() {},
  data() {
    return {
      // isActive: true,
    };
  },
  props: {
    content: String,
    link:{
      type: String,
      required:true
    },
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.link) !== -1
    },
    isActiveStyle(){
      return this.isActive ? {'color':'red'} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.link)
    }
  }
};
</script>

<style lang="css" scoped>
  #tab-bar-item{
    display: flex;
    flex: 1;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
  
  .item-icon img, .item-active-icon img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }

</style>