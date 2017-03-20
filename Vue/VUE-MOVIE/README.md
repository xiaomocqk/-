# 改进
√ 保存首次加载的数据，而不是都网络请求数据
√ 每一个子页面都可以刷新，而不是在子页面刷新跳回首页
√ 城市CURRENT_CITY不应该每一个组件都声明一次 --> 在main.js一次性声明给window作为属性，window.cache.CURRENT_CITY
· 电影列表滚动上拉加载
· 下拉刷新
· 组件的css文件单独提取并合并
· 电影按评分排序
· 返回后记住后退页面当时的滚动条位置
· 当ajax请求失败时可多次请求
· 新建一个base.less统一管理公共样式
· 组件按需加载
· 页面之间的过渡动画，即进场、退场
· 获取数据是在created中获取，可以改进为导航钩子beforeRouteEnter 。https://router.vuejs.org/zh-cn/advanced/data-fetching.html

# 问题
√ 首页第一次加载可能出现布局变大 --> 原因是reset.css加载失败。写入内联样式
· 跳转有历史记录的下一页时，会把当前页的滚动条信息，应用在跳转后的页面上
· 当history.go(-1)为空时，返回首页。防止第一次从子页面进来而无法返回
· head的fixed布局，导致宽度不是集成#app而是body

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
