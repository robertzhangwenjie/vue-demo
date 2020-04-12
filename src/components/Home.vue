<template>
  <div>
    <!-- 首页轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in shideshowList" :key="item.img">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import service from '../utils/request'

export default {
  data () {
    return {
      shideshowList: []  
    }
  },
  created () {
    this.getSlideshow()
  },
  methods: {
    getSlideshow() {
      service
        .get("/getSlideshow")
        .then(res => {
          if (res.data.code === 0) {
            this.shideshowList = res.data.results
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped lang="scss">
// 轮播图样式
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }

    &:nth-child(2) {
      background-color: blue;
    }

    &:nth-child(3) {
      background-color: yellow;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>