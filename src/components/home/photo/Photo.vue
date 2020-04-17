<template>
  <div class="photo">
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <!-- 设置默认激活的a标签为id=0的元素 -->
          <a
            :class="['mui-control-item',imgCategory.id === 0? 'mui-active':'']"
            v-for="imgCategory in imgCategoryList"
            :key="imgCategory.id"
            @tap.prevent="getPhotoByCateId(imgCategory.id)"
          >{{imgCategory.title}}</a>
        </div>
      </div>
    </div>
    <div class="photo-list">
      <ul>
        <router-link v-for="img in imgList" :key="img.id" :to="'/home/photoInfo/' + img.id" tag="li">
          <img v-lazy="img.url" />
          <div class="info">
            <h4 class="info-title">{{img.name}}</h4>
            <div class="info-desc">{{img.detail || '图片描述'}}</div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import mui from "@/lib/mui/js/mui.min.js";
import service from "@/utils/request";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      imgCategoryList: [],
      imgList: []
    };
  },
  created() {
    this.getPhotoByCateId(0);
    this.getAllCategory();
  },
  methods: {
    getPhotoByCateId(cateId) {
      service.get("/imgList/" + cateId).then(res => {
        if (res.data.code === 0) {
          this.imgList = res.data.results;
        }
      });
    },
    getAllCategory() {
      service
        .get("/imgCategory")
        .then(res => {
          if (res.data.code === 0) {
            this.imgCategoryList = res.data.results;
          }
        })
        .catch(err => {
          console.log(err);
          Toast({
            message: "获取图片目录失败",
            duration: 3000
          });
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

.mui-scroll {
  position: fixed;
}
ul {
  list-style: none;
  padding: 10px;
  margin: 0;
  li {
    text-align: center;
    margin-bottom: 10px;
    background-color: #ccc;
    box-shadow: 0 0 6px #999;
    position: relative;
    img {
      width: 100%;
    }
    .info {
      width: 100%;
      text-align: left;
      color: white;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.2);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-desc {
        font-size: 13px;
      }
    }
  }
}

img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>