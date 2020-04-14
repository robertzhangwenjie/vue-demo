<template>
  <div class="div-container">
      <!-- 顶部Header -->
      <mt-header fixed title="RobertVue项目"></mt-header>
	  <!-- 内容区域 -->
	  <transition mode="out-in">
		   <router-view></router-view>
	  </transition>
      <!-- 底部TabBar -->
      <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
	transition: all 0.5s ease;
}

</style>