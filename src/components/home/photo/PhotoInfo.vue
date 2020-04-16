<template>
  <div class="photoinfo-container">
    <h3 class="title">{{photoInfo.name}}</h3>
    <p class="sub-title">
      <span>&nbsp;发表时间: {{photoInfo.ctime | dateFilter}}</span>
      <span>点击次数: {{photoInfo.click}}次&nbsp;</span>
    </p>
    <hr />

    <!-- 缩略图 -->
    <vue-preview :slides="photoSwipeList" @close="closePhotoSwipe" class="preview"></vue-preview>

    <!-- 图片内容 -->
    <div class="content" v-html="photoInfo.desc"></div>
    <hr />
    <!-- 图片评论 -->
    <comment :id="id" url="/photoComment/" @post-comment="postComment"></comment>
  </div>
</template>

<script>
import service from "@/utils/request";
import comment from "@/components/public/Comment.vue";
import { Toast } from "mint-ui";



export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {},
      postRes: false,
      photoSwipeList: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getPhotoSwipeList();
  },
  methods: {
    getPhotoSwipeList() {
      service
        .get("/photoInfo/thumbnail/" + this.id)
        .then(res => {
          if (res.data.code === 0) {
            this.photoSwipeList = res.data.results;
          } else {
            Toast({
              message: res.data.error_message
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    closePhotoSwipe() {
      console.log("close thumbnail");
    },
    getPhotoInfo() {
      service
        .get("photoInfo/" + this.id)
        .then(res => {
          this.photoInfo = res.data.results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    postComment(data) {
      let { id, comment } = data;
      service
        .post("/photo/postComment", {
          id,
          comment
        })
        .then(res => {
          if (res.data.code === 0) {
            Toast({
              message: res.data.message
            });
            this.postRes = true;
          } else {
            Toast({
              message: res.data.err_message
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    comment
  }
};
</script>

<style lang='scss' scoped>
.photoinfo-container {
  .title {
    margin: 14px 0;
    font-size: 16px;
    text-align: center;
    color: #26a2ff;
  }
  .sub-title {
    padding: 0 1em;
    display: flex;
    justify-content: space-between;
  }
  .content {
    font-size: 13px;
    line-height: 20px;
    text-indent: 2em;
  }
}
</style>