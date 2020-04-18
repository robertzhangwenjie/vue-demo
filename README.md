## vue开发的H5项目

### 相关技术栈

+ Vue
+ Mint-UI
+ Mui
+ Axios
+ Express

### 项目启动

```nodejs
1. npm run mock 启动mock服务
2. npm run dev 启动项目
```

### 模块介绍

- mock
  - express服务器开发的mock服务

- src 源码包
  - components	组件模块
    - home
      - 首页相关组件	
    - public
      - 公共组件
        - Comment 评论组件
          ```html
          <comment :id="id" url="/photoComment/" @post-comment="postComment"></comment>
          ```
          `id:`传父组件评论对象的`id`
          `url:`传父组件提交评论请求的`url`地址
          `post-comment:`传父组件提交请求的方法名，该方法需要请求成功后修改父组件中的`data`属性`postRes`为`true`，子组件会去取这个值然后判断是否需要重新拉取评论

          ```js
          postComment(data) { this.postRes = true}
          ```
        - Swipe 滚动图组件

  - utils 公共方法包

    - request.js
      - 封装了axios，用于在组件中发起请求

  - filter 存放自定义过滤器

  - router 存放路由

  - main 项目主入口

  