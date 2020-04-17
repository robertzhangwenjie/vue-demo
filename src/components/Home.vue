<template>
  <div>
    <!-- 首页轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in shideshowList" :key="item.img">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 六宫格图标 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/news">
            <!-- <span class="mui-icon mui-icon-home"></span> -->
            <img src="images/news.svg" alt="">
            <div class="mui-media-body">新闻咨询</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photoList">
            <img src="images/share.svg" alt="">
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/shop">
            <img src="images/cart.png" alt="">
            <div class="mui-media-body">购买商品</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="images/message.svg" alt="">
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="images/contact.png" alt="">
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="images/video.svg" alt="">
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
import service from "@/utils/request"

export default {
  data() {
    return {
      shideshowList: []
    };
  },
  created() {
    this.getSlideshow();
  },
  methods: {
    getSlideshow() {
      service
        .get("/getSlideshow")
        .then(res => {
          if (res.data.code === 0) {
            this.shideshowList = res.data.results;
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

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;

  .mui-table-view-cell {
    border: none;
  }

  img {
    height: 41px;
  }
}

</style>