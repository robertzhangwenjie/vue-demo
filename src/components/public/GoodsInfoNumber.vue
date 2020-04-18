<template>
<!-- 商品数量组件，点击+-来修改所购买商品数量 -->
  <div class="mui-numbox" id="numbox" data-numbox-min='0'>
    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="num--">-</button>
    <input class="mui-input-numbox" type="number" v-model="num"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="num++">+</button>
  </div>
</template>

<script>
import mui from '@/lib/mui/js/mui.min.js'
export default {
    data () {
        return {
            num: 1
        }
    },
    watch: {
      goodsMax : function() {
        // 使用Mui api动态设置输入框的最大值
        mui('#numbox').numbox().setOption('max',this.goodsMax)
      }
    },
    mounted () {
      mui('#numbox').numbox()
    },
    props: {
      goodsMax: Number
    }
};
</script>

<style>
</style>