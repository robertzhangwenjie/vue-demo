<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsInfo.title}}</h3>
    <p class="subtitle">
      <span>&nbsp;发表时间: {{newsInfo.ctime | dateFilter}}</span>
      <span>点击次数: {{newsInfo.click}}次&nbsp;</span>
    </p>
    <hr />

    <div class="news-content" v-html="newsInfo.detail"></div>
    <hr />
    <comment :id="id" url="/getComment/" @post-comment="postComment"></comment>
  </div>
</template>

<script>
import service from "@/utils/request";
import { Toast } from "mint-ui";
// 导入评论子组件
import comment from "@/components/public/Comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo: {},
      postRes: false
    };
  },
  methods: {
    getNewsInfo() {
      service
        .get("/getNewsInfo/" + this.id)
        .then(res => {
          if (res.data.code === 0) {
            this.newsInfo = res.data.results;
            return;
          }
          Toast({
            message: res.data.message,
            duration: 3000,
            position: "middle"
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    postComment(data) {
      let comment = {
        username: "robert",
        ctime: new Date(),
        comment: data.comment
      };
      service
        .post("/postComment", {
          id: data.id,
          comment
        })
        .then(res => {
          if (res.data.code === 0) {
            this.postRes = true
            Toast({
              message: "评论成功"
            })
          } else {
            Toast({
              message: "评论失败"
            })
          }
        })
        .catch(err => {
          console.log(err);
          callback(false)
        });
    }
  },
  created() {
    this.getNewsInfo();
  },
  components: {
    comment
  }
};
</script>

<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    color: red;
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
  }
  .news-content {
    font-size: 12px;
    img {
      width: 100%;
    }
  }
}
</style>