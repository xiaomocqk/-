# 改进
1. 城市CURRENT_CITY不应该每一个组件都声明一次
2. 电影列表滚动上拉加载
3. 下拉刷新
4. 首页第一次加载可能出现布局变大 -- 原因是reset.css加载失败
5. 组件的css文件单独提取并合并
6. 电影按评分排序

# vue-movie

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
