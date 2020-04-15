<template>
  <div id="slider" class="mui-slider">
    <div
      id="sliderSegmentedControl"
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <router-link class="mui-control-item" :to="imgCategory.to" data-wid="tab-top-subpage-2.html" v-for="imgCategory in imgCategoryList" :key="imgCategory.id">{{imgCategory.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import mui from "@/lib/mui/js/mui.min.js";
import service from "@/utils/request";
import { Toast } from 'mint-ui'

export default {
  data() {
    return {
      imgCategoryList: []
    };
  },
  methods: {
    getAllCategory() {
      service
        .get("/imgCategory")
        .then(res => {
          if (res.data.code === 0) {
            this.imgCategoryList = res.data.results
          }
        })
        .catch(err => {
          console.log(err)
          Toast({
            message: "获取图片目录失败",
            duration: 3000
          })
        });
    }
  },
  mounted() {
    //当组件中的DOM结构被渲染好放入页面时执行该钩子函数
    let options = {
      scrollY: false, //是否竖向滚动
      scrollX: true, //是否横向滚动
      startX: 0, //初始化时滚动至x
      startY: 0, //初始化时滚动至y
      indicators: true, //是否显示滚动条
      deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
      bounce: true //是否启用回弹
    };
    mui(".mui-scroll-wrapper").scroll(options);
  }
};
</script>

<style scoped lang="scss">
// 解决滑动时报错：Unable to preventDefault inside passive event listener
// pan-x 使左右滑动更平滑
* {
  touch-action: pan-x;
}
</style>