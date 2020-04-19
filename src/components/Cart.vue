<template>
  <div class="cart-container">
    <!-- 购物车商品列表 -->
    <div class="goods-list" v-for="goods in car" :key="goods.id">
      <div class="mui-card">
        <div class="mui-card-content">
          <mt-switch v-model="goods.selected" @change="selectedChanged(goods.id,goods.selected)"></mt-switch>
          <img src="images/cart.png" alt />
          <div class="info">
            <h5>小米手机Note1 (Mi) 红米手机 全网通双网通</h5>
            <p class="goods-operation">
              <span class="price_now">￥{{goods.price}}</span>
              <goods-number :goodsId="goods.id" @updateNum="updateGoodsCount" :goodsMax="goods.balance" :goodsNum="goods.count"></goods-number>
              <a href="#">删除</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 购物车结算 -->
    <div class="cart-account">
      <div class="mui-card">
        <div class="account">
          <div class="account-info">
            <p>总计: <span>{{count || 0}}</span>(不含运费)</p>
            <p>已勾选商: <span>{{amountSelectedGoods}}</span>件，总价: <span>{{count || 0}}</span></p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    car() {
      return this.$store.state.car;
    },
    count(){
      return this.$store.getters.goodsCount
    },
    amountSelectedGoods() {
      return this.$store.getters.amountSelectedAccount
    }
  },
  methods: {
    selectedChanged(goodsId, status) {
      this.$store.commit('updateSelectedStatus',{goodsId, status})
    },
    updateGoodsCount(goodsId, count){
      this.$store.commit('updateGoodsCount',{goodsId,count})
    }
  }
};
</script>

    
<style lang="scss" scoped>
.cart-container {
  .cart-account {
    .account {
        padding: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          color: red;
          font-size: 15px;
          font-weight: bold;
        }

        .account-info {
          p {
            margin: 5px auto;
          }
        }
      }
  }
  .goods-list {
    .mui-card {
      
      .mui-card-content {
        padding: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .info {
          .price_now {
            color: red;
          }
          .goods-operation {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
        }
        h5 {
          font-size: 15px;
          font-weight: bold;
          color: black;
        }
        img {
          height: 60px;
        }
      }
    }
  }
}
</style>
