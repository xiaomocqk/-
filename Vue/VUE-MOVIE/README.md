# 改进
1. 城市CURRENT_CITY不应该每一个组件都声明一次 --> 在首页一次性声明给window作为属性，window.CURRENT_CITY
2. 电影列表滚动上拉加载
3. 下拉刷新
4. 首页第一次加载可能出现布局变大 --> 原因是reset.css加载失败
5. 组件的css文件单独提取并合并
6. 电影按评分排序
7. 返回后记住后退页面当时的滚动条位置
8. 子页面的刷新不会跳转到首页，体验更好

# 问题
1. 跳转有历史记录的下一页时，会把当前页的滚动条信息，应用在跳转后的页面上

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
