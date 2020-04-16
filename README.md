

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
        - Comment 组件调用方法
          ```html
          <comment :id="id" url="/photoComment/" @post-comment="postComment"></comment>
          ```
          `id:`传父组件评论对象的`id`
          `url:`传父组件提交评论请求的`url`地址
          `post-comment:`传父组件提交请求的方法名，该方法需要接收一个数据对象和一个回调函数，回调函数用来给comment组件返回请求的结果为`ture`还时`false`

          ```js
          postComment(data, callback) { callback(true)}
          ```

  - utils 公共方法包

    - request.js
      - 封装了axios，用于在组件中发起请求

  - filter 存放自定义过滤器

  - router 存放路由

  - main 项目主入口

  