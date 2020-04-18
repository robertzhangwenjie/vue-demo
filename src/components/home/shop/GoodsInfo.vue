<template>
  <div class="goods-info">
    <!-- 购物车动画小球 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 商品展示 -->
    <div class="mui-card">
      <my-swipe :imgList="imgList" :full="true"></my-swipe>
    </div>
    <!-- 商品购买 -->
    <div class="mui-card">
      <div class="mui-card-header">
        <h3>{{goods.title}}</h3>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            <span class="price-old">
              市场价:
              <del>￥{{goods.price_old}}</del>&nbsp;&nbsp;
            </span>
            <span class="price-now">销售价:￥{{goods.price_now}}</span>
          </p>
          <label for>
            购买数量:
            <goods-number ref="goodsNumber" :goodsMax="goods.balance"></goods-number>
          </label>

          <p>
            <mt-button size="normal" type="primary">立即购买</mt-button>
            <mt-button size="normal" type="danger" @click="addGoods">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号: {{goods.id}}</p>
          <p>库存情况: {{goods.balance}}</p>
          <p>上架时间: {{goods.ctime | dateFilter}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button size="large" type="primary" @click="toDescPage(goods.id)" plain>图文介绍</mt-button>
        <mt-button size="large" type="danger" @click="toCommentPage(goods.id)" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import service from "@/utils/request";
import {Toast} from 'mint-ui'

export default {
  data() {
    return {
      id: this.$route.params.id,
      imgList: [],
      goods: {},
      ballFlag: false //控制小球是否隐藏
    };
  },
  created() {
    this.getImgList();
    this.getGoodsDetail();
    this.getCartInfo()
  },
  methods: {
    toDescPage(id) {
      this.$router.push({ name: "goodsDesc", params: { id } });
    },
    toCommentPage(id) {
      this.$router.push({ name: "goodsComment", params: { id } });
    },
    getCartInfo() {
      service.get('/cartInfo').then(res => {
        if (res.data.code === 0) {
          console.log(document.getElementById('badge').innerText,res.data.results.length)
          document.getElementById('badge').innerText = res.data.results.length
          
        }
      }).catch(err => {
        console.log(err)
      })
    },
    addGoods() {
      this.ballFlag = true;
      let goodsNumber = this.$refs.goodsNumber.num;
      service.post('/shop/goodsInfo/addCart',{
        id: this.id, num: goodsNumber
      }).then(res => {
        if (res.data.code === 0) {
          Toast({
            message: res.data.message
          })
          this.getCartInfo()
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getGoodsDetail() {
      service
        .get("/shop/goodsDetail/" + this.id)
        .then(res => {
          if (res.data.code === 0) {
            this.goods = res.data.results;
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
    getImgList() {
      service
        .get("/shop/goodsInfo/" + this.id)
        .then(res => {
          if (res.data.code === 0) {
            this.imgList = res.data.results;
          } else {
            Toast({ message: res.data.error_message });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    beforeEnter(el) {
      //表示动画入场之前，此时动画尚未开始，可以设置元素的起始样式
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      // 小球的位置
      let ballLocation = this.$refs.ball.getBoundingClientRect();
      // 获取购物车badge的位置
      let badgeLocation = document
        .getElementById("badge")
        .getBoundingClientRect();

      // 获取小球移动到购物车badge的距离
      let x = badgeLocation.left - ballLocation.left;
      let y = badgeLocation.top - ballLocation.top;
      //实现动画效果
      el.offsetWidth;
      el.style.transform = `translate(${x}px,${y}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.44,-0.31,1,.63)";
      done();
    },
    afterEnter(el) {
      //动画完成之后
      this.ballFlag = !this.ballFlag;
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-info {
  background-color: #eee;
  overflow: hidden;
  .price-now {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card {
    img {
      width: 100%;
    }
  }
  .mui-card-footer {
    display: block;
    button {
      margin-bottom: 15px;
    }
  }

  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 370px;
    left: 140px;
  }
}
</style>