<template>
  <div id="feature-view">
    <div class="feature-item" v-for='(item, index) in feature' :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  data() {
    return {};
  },
  props: {
    feature:{
      type: Array,
      required:true
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#feature-view {
  display: flex;
  margin-top: 10px;
  font-size: 14px;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;
  background-color: #fff;

  .feature-item {
    flex: 1;
    text-align: center;

    img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
   }
  }
}
</style>