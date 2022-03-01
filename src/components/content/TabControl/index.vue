<template>
  <div class="TabControl">
    <div  class="TabControl-item" 
          :class="{active: currentIndex === index}"
          v-for="(item, index) in titles" :key="index"
          @click='itemClick(index)'>
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
        currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      required: true,
    },
  },
  methods: {
      itemClick(index) {
          this.currentIndex = index;
          this.$emit('itemClick', index);
      }
  },
  beforeMount() {
    // this.$bus.$emit('TabControlBeforeMount')
  },
  beforeDestroy() {
    console.log('tab BeforeDestory')
  },
};
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>
