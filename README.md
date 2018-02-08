# spatest

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##Vue单页面应用
```bash
#vuex
store.js
        |---state  state状态管理数据
        |---mutations state操作方法
        |---getter state计算属性
        |---actions 异步
#Vue-router
        |---main.js 引入vue-router
        |---index.js 按需设置路由界面
