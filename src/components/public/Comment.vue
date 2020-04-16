<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea v-model="comment" placeholder="请输入评论内容" cols="30" rows="10"></textarea>
    <mt-button type="primary" @click="postComment" size="large">提交评论</mt-button>

    <div class="cmt-list" >
      <div class="cmt-item" v-for="(cmt,index) in commentList" :key="cmt.id">
        <div class="cmt-title">
          <span>第{{index + 1}}楼&nbsp;&nbsp;</span>
          <span>用户: {{cmt.username}} &nbsp;&nbsp;</span>
          <span>发表时间: {{cmt.ctime | dateFilter}}</span>
        </div>
        <div class="cmt-body">{{cmt.comment}}</div>
      </div>
    </div>
    <mt-button size="large" type="danger" @click="pageIndex++">加载更多</mt-button>
  </div>
  
</template>

<script>
import service from "@/utils/request";
import { Toast } from "mint-ui";
import { mergeArray } from '@/utils/arrayFunc';
export default {
  data() {
    return {
      pageIndex: 1,
      comment: "",
      commentList: []
    };
  },
  props: ["id","url"],
  created() {
    this.getCommentList();
  },
  watch: {
    pageIndex: function(newVal, oldVal){
      this.getCommentList()
    }
  },
  methods: {
    getCommentList() {
      service
        .get(this.url + this.id + '?pageIndex='+ this.pageIndex)
        .then(res => {
          if (res.data.code === 0) {
            this.commentList = res.data.results
          }
        })
        .catch(err => {
          Toast({
            message: "获取评论失败"
          });
        });
    },
    postComment() {
      let data = {
        id: this.id,
        comment: this.comment
      };
      let res = false
      // 传递一个回调函数，用于接收父组件方法执行的结果
      if (this.comment === '' || this.comment === null || this.comment === undefined) {
          Toast({
            message: '评论不能为空'
          })
          return
      }
      try {
        this.$emit("post-comment", data);
        res = this.$parent.$data.postRes
        if (res) {
          this.getCommentList()
        }
          this.comment = "";
      } catch (err) {
        console.log(err);
        Toast({
          message: "提交失败"
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.cmt-container {
  h3 {
    font-size: 16px;
    font-weight: bold;
  }
  textarea {
    font-size: 14px;
    margin: 0;
    height: 85%;
  }

  .cmt-list {
    margin-top: 5px;
    .cmt-item {
      font-size: 14px;
      .cmt-title {
          padding: 0 1em;
          display: flex;
          justify-content: space-between;
        line-height: 35px;
        background-color: #ccc;
      }
    }
    .cmt-body {
      line-height: 35px;
      text-indent: 2em;
    }
  }
}
</style>