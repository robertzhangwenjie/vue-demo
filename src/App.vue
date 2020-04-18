<template>
  <div class="div-container">
    <!-- 顶部Header -->
    <mt-header fixed title="RobertVue项目">
      <router-link to slot="left"  v-if="$route.path !== '/home'">
        <mt-button @click="$router.go(-1)" icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容区域 -->
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- 底部TabBar -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-llb" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/member">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/cart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span id="badge" class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.mint-header {
  .mint-button {
    display: flex;
    align-items: center;
  }

}

.div-container {
  margin-top: 40px;
  margin-bottom: 50px;
  overflow: hidden;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  /* 动画结束时从左边消失 */
  transform: translateX(-100%);
  /* 动画结束时不是以相对位置出来，而是固定位置 */
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.mui-bar-tab .mui-tab-item-llb.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-llb {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>