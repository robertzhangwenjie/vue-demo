<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link :to="'/home/newsinfo/' + item.id" v-for="item in newsList" :key="item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img || 'images/news.svg'" />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间: {{ item.ctime | dateFilter}}</span>
              <span>点击次数: {{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import service from "@/utils/request";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      // 新闻列表
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      service
        .get("/getNewsList")
        .then(res => {
          if (res.data.code === 0) {
            this.newsList = res.data.results;
          } else {
            Toast({
              message: "获取消息失败",
              position: "middle",
              duration: 3000
            });
          }
        })
        .catch(err => {
          console.log(err);
          Toast({
            message: "获取消息异常",
            position: "middle",
            duration: 3000
          });
        });
    }
  }
};
</script>

<style scoped lang="scss">
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      // 设置span左右对齐
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>