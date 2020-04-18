<template>
  <div>
    <my-comment :id="$route.params.id" url="/shop/goods/getComment/" @post-comment="postComment"></my-comment>
  </div>
</template>

<script>
import myComment from '@/components/public/Comment.vue'
import service from '@/utils/request'
export default {
  data() {
    return {

    };
  },
  methods: {
      postComment(data) {
         service.post('/shop/goods/postCommment',{
             data
         })
      }
  },
  components: {
      'my-comment': myComment
  }
};
</script>

<style>
</style>