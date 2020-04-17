<template>
  <div class="goods-list">
    <div class="goods-item" v-for="goods in goodsList" :key="goods.id">
      <div class="img">
        <img :src="goods.img" alt />
      </div>
      <h3 class="goods-title">{{goods.title}}</h3>
      <div class="goods-info">
        <p class="price">
          <span class="now">￥{{goods.price_now}}</span>
          <span class="old">￥{{goods.price_old}}</span>
        </p>
        <p class="sell">
          <span>{{goods.status}}</span>
          <span>剩余{{goods.balance}}件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import service from '@/utils/request'
import {Toast} from 'mint-ui'
export default {
    data () {
        return {
            goodsList:[]
        }
    },
    created() {
        this.getGoodsList()
    },
    methods: {
        getGoodsList(){
            service.get('/shop/goodsList').then(
                res => {
                    if (res.data.code === 0) {
                        this.goodsList = res.data.results
                    } else {
                        Toast({
                            message: res.data.error_message
                        })
                    }
                }
            ).catch(err => {
                console.log(err)
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 1%;
  justify-content: space-between;
  .goods-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 6px #cccc;
    margin: 0.5%;
    padding: 0.5%;
    .img {
      min-height: 115.91px;
    }
    .goods-title {
      font-size: 16px;
      font-weight: bold;
    }
    .goods-info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 1%;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
      }
    }
    img {
      width: 100%;
    }
  }
}
</style>