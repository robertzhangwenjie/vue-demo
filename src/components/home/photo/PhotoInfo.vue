<template>
  <div class="photoinfo-container">
    <h3 class="title">{{photoInfo.name}}</h3>
    <p class="sub-title">
      <span>&nbsp;发表时间: {{photoInfo.ctime | dateFilter}}</span>
      <span>点击次数: {{photoInfo.click}}次&nbsp;</span>
    </p>
    <hr />

    <!-- 缩略图 -->

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

export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {}
    };
  },
  created() {
    this.getPhotoInfo();
  },
  methods: {
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
    postComment(data, callback) {
      let { id, comment } = data;
      service
        .post("/postComment", {
          id,
          comment
        })
        .then(res => {
          Toast({
            message: res.data.message
          })
          callback(true);
        })
        .catch(err => {
          callback(false);
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