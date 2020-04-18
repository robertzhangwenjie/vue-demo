<template>
  <div class="goodsdesc-container">
      <h3 class="goodsdesc-title">{{goods.title}}</h3>
      <hr>
      <div v-html="goods.desc"></div>
  </div>
</template>

<script>
import service from '@/utils/request'
export default {
    data () {
        return {
            goods: {}
        }
    },
    created () {
      this.getGoodsDesc()  
    },
    methods: {
        getGoodsDesc() {
            service.get('/shop/getDoodsDesc/'+ this.$route.params.id).then(res => {
                if (res.data.code === 0) {
                    this.goods = res.data.results
                } else {
                    Toase({
                        message: res.data.error_message
                    })
                }
            }).catch(
                err => {
                    console.log(err)
                }
            )
        }
    }
}
</script>

<style scoped lang="scss">
.goodsdesc-container {
    .goodssec-title {
        text-align: center;
        font-size: 16px;
        font-weight: bold;
    }
}

</style>