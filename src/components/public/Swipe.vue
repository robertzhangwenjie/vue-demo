<template>
  <div>
      <mt-swipe :auto="4000" >
          <mt-swipe-item v-for="img in imgList" :key="img.id"> 
            <img :src="img.src" alt  :class="[{'full':full}]"/>
          </mt-swipe-item>
        </mt-swipe>
  </div>
</template>

<script>
export default {
    props: {
        imgList: Array,
        full: Boolean
    }
}
</script>

<style lang="scss" scoped>
// 轮播图样式
.mint-swipe {
    //Mint-UI轮播图组件默认高度为0.需要自己设置高度
  height: 200px;
  .mint-swipe-item {
    img {
      height: 100%;
    }
  }
  
  .full {
      width: 100%;
  }
}

</style>