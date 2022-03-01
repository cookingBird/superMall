<template>
  <div class="GridLayout" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GridLayout",
  data() {
    return {};
  },
  props: {
    cols: {
      type: Number,
      default: 2,
    },
    hMargin: {
      type: Number,
      default: 8,
    },
    vMargin: {
      type: Number,
      default: 8,
    },
    itemSpace: {
      type: Number,
      default: 8,
    },
    lineSpace: {
      type: Number,
      default: 8,
    },
  },
  methods: {
      autoLayout: function () {
        // console.log("autoLayout");
        // 1.获取gridEl和children
        // 注: 这里为什么不用document.querySelector呢?
        // 答: 因为如果在项目中, 多处都用到了grid-view, 那么这里就不确定获取的是哪一个了.
        let gridEl = this.$refs.gridView;
        // setTimeout(() => {
          let children = gridEl.children;
          // 2.设置gridEl的内边距
          gridEl.style.margin = `${this.vMargin}px ${this.hMargin}px`

          // 3.计算item的宽度
          let itemWidth = (gridEl.clientWidth - this.cols * this.itemSpace) / this.cols;
          for (let i = 0; i < children.length; i++) {
            let item = children[i];
            item.style.width = itemWidth + 'px';
            if ((i+1) % this.cols !== 0) {
              item.style.marginRight = this.itemSpace + 'px'
            }
            if (i >= this.cols) {
              item.style.marginTop = this.lineSpace + 'px'
            }
          }
        // },50)
      }
  },
  // beforeCreate() {
  //   console.log('[ "layOut beforeCreate" ]', "layOut beforeCreate")
  // },
  // created() {
  //   console.log('[ "layOut created" ]', "layOut created")
  // },
  // beforeMount() {
  //   console.log('[ "layOut beforeMount" ]',"layOut beforeMount")
  // },
  mounted() {
    // console.log('[ "layOut mounted" ]', "layOut mounted")
    // this.autoLayout();
    // console.log(this.$refs.gridView.children)
  },
  // beforeUpdate() {
  //   console.log('[ Layout beforeUpdate ]')
  //   // this.autoLayout()
  // },
  updated(){
    this.autoLayout();
    // console.log('[ "GridLayout updated" ]', "GridLayout updated")
  }
};
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
