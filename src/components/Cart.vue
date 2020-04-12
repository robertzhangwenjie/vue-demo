<template>
    <div>
        <h1>这是登陆组件，使用vue文件定义{{msg}}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '123'
        }
    },
    methods: {
        show() {
            console.log('调用了login.vue中的show方法')
        }
    }
}
</script>

    
<style lang="scss" scoped>
    div {
        color: red;
    }

</style>
s