<template>
    <ul class="list">
        <li>店铺: {{shopState}}</li>
        <li>商品: {{goodState}}</li>
        <li>全选: {{allState}}</li>
        <li class="block"
            v-for="(item, indexA) in products"
        >
            <div class="list-head">
                <i class="select shop-select"
                    @click="changeShopState(indexA)"
                    :class="{selected:shopState[indexA]}"
                ></i>
                <a class="shop" href="">{{ item.shopName }}</a>
                <span class="shop-edit">编辑</span>
            </div>
            <ol class="list-body">
                <li
                    v-for="(aLi, indexB) in item.lists"
                >
                    <i class="select product-select"
                        @click="changeGoodState(indexA,indexB)"
                        :class="{selected:goodState[indexA][indexB]}"
                    ></i>
                    <a class="detail"
                        :href="aLi.link"
                    >
                        <div class="product-img"><img src="" alt=""></div>
                        <div class="info">
                            <strong>
                                {{ aLi.details }}
                            </strong>
                            <span class="info-attr">
                                {{ aLi.attitude }}
                            </span>
                            <div class="price clearfix">
                                <span>¥ <em class="per">
                                    {{ aLi.price | currency }}
                                </em>&nbsp;</span>
                                <small>¥ <em>
                                    {{ aLi.originalPrice | currency }}
                                </em></small>
                                <span class="quantity">&times;<em>
                                    {{ aLi.total }}
                                </em></span>
                            </div>
                        </div>
                    </a>
                </li>
            </ol>
        </li>
    </ul>
</template>
<script>
    var data = {
        products: [{
            id: '2016',
            shopName: '雅雅旗舰店',
            lists: [{
                link: 'http://www.baidu.com',
                details: '12.14晚8点166元韩都衣舍2016女装冬装女装冬装女装新款背带休闲裤JW6684筱',
                imgUrl: '',
                attitude: '颜色:藏蓝色;尺码:S;',
                price: 139.98,
                originalPrice: 259,
                total: 1
            }, {
                link: 'http://www.qq.com',
                details: '俄罗斯果汁 石榴汁原装进口喜爱100%果汁饮料950ml多口味4盒包邮',
                imgUrl: '',
                attitude: '口味:石榴汁;',
                price: 60,
                originalPrice: 125,
                total: 4
            }]
        }, {
            id: '2017',
            shopName: '牛牛旗舰店',
            lists: [{
                link: 'http://www.sogou.com',
                details: '萍萍秋装女装小清新文艺范印花纯棉白衬衫女长袖衬衣秋季打底上衣',
                imgUrl: '',
                attitude: '颜色分类:天蓝色;尺码:M;',
                price: 299.98,
                originalPrice: 403,
                total: 1
            }]
        }, {
            id: '2018',
            shopName: '妞妞旗舰店',
            lists: [{
                link: 'http://www.sogou.com',
                details: '萍萍秋装女装小清新文艺范印花纯棉白衬衫女长袖衬衣秋季打底上衣',
                imgUrl: '',
                attitude: '颜色分类:天蓝色;尺码:M;',
                price: 599.98,
                originalPrice: 703,
                total: 2
            }, {
                link: 'http://www.qq.com',
                details: '萍萍秋装女装小清新文艺范印花纯棉白衬衫女长袖衬衣秋季打底上衣',
                imgUrl: '',
                attitude: '颜色分类:天蓝色;尺码:M;',
                price: 60.04,
                originalPrice: 125,
                total: 4
            }]
        }]
    };
    
    data.shopLength = 0; // 店铺个数
    data.goodLength = 0; // 商品条数

    data.shopState = [];    // 店铺状态
    data.goodState = [];    // 商品状态
    data.allState = false;  // 全选状态

    data.count = 0; // 选中商品的数量
    data.total = 0; // 选中商品的总价

    export default {
        data(){
            return data
        },

        methods: {
            changeShopState: function(indexA) {
                var isBoolean = !this.shopState[indexA];

                this.shopState.splice(indexA, 1, isBoolean);                // 店铺状态.在组件修改中如果要更新视图，就必须用Vue.set()方法或者是数组的原生方法

                for (var i = 0; i < this.goodState[indexA].length; i++) {
                    // this.goodState[indexA][i] = isBoolean ? true : false;    // 同步更新当前店铺下商品状态。也需要更新状态,此方法无法触发价格和总金额的重计算
                    this.goodState[indexA].splice(i,1,isBoolean ? true : false);
                };

                // 更新全选状态
                this.fn();
            },
            
            changeGoodState: function(indexA,indexB) {
                var currentGoodStateArray = this.goodState[indexA];
                var isBoolean = !currentGoodStateArray[indexB];

                currentGoodStateArray.splice(indexB,1,isBoolean);           // 商品状态更新

                for (var i = 0; i < currentGoodStateArray.length; i++) {
                    if (!currentGoodStateArray[i]) {
                        this.shopState[indexA] = false;                     // 当发现一个未勾选时赋值false并结束循环
                        break;
                    }else{
                        this.shopState[indexA] = true;
                    }
                };
                // 更新全选状态
                this.fn()
            },
            
            // 全选状态
            // 此函数不用于绑定事件,仅仅作为封装后的函数提供该组件的methods中提供调用
            fn:function(){
                for (var i = 0; i < this.shopState.length; i++) {
                    if (!this.shopState[i]) {
                        this.allState = false;
                        break
                    }else{
                        this.allState = true;
                    }
                }
            }
        }
    }
</script>
<style>
    .list .block {
        width: 100%;
        margin-bottom: .711111rem;
        background-color: #fff;
        background-color: #fff;
    }

    .list-head {
        line-height: 2.488889rem;
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        height: 2.488889rem;
        padding: 0 1.244444rem;
        border-bottom: 1px solid #ccc;
    }

    .select {
        position: relative;
        display: inline-block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 1.208889rem;
        height: 1.208889rem;
        text-align: center;
        vertical-align: middle;
        border: 1px solid #4d4d4d;
        border-radius: .604444rem;
    }

    .select::after {
        position: absolute;
        content: '';
    }

    .shop-select::after {
        top: -.711111rem;
        left: -.426667rem;
        width: 1.777778rem;
        height: 2.488889rem;
    }

    .product-select::after {
        top: -2.133333rem;
        left: -.355556rem;
        width: 1.777778rem;
        height: 5.333333rem;
    }

    .selected {
        border: none;
        background: url('../images/shopping-cart/select.png') no-repeat center;
        background-size: contain;
    }

    .shop {
        font-size: .924444rem;
        line-height: 2.133333rem;
        position: relative;
        display: inline-block;
        height: 2.133333rem;
        margin-left: .711111rem;
        padding-left: 1.422222rem;
        color: #333;
    }

    .shop:before,
    .shop:after {
        position: absolute;
        height: 100%;
        content: '';
    }

    .shop:before {
        left: 0;
        width: .888889rem;
        background: url('../images/shopping-cart/home.png') no-repeat left center;
        background-size: contain;
    }

    .shop:after {
        right: -1.422222rem;
        width: .462222rem;
        background: url('../images/shopping-cart/next.png') no-repeat right center;
        background-size: contain;
    }

    .shop-edit {
        font-size: .924444rem;
        position: absolute;
        right: 1.137778rem;
        color: #333;
    }

    .list-body {
        padding: 0 1.137778rem;
    }

    .list-body li {
        position: relative;
        height: 5.333333rem;
        padding: .711111rem 0;
        border-bottom: 1px dashed #ccc;
    }

    .list-body li:last-child {
        border: none;
    }

    .product-select {
        position: absolute;
        top: 2.773333rem;
    }

    .detail {
        position: absolute;
        left: 1.493333rem;
    }

    .product-img {
        position: absolute;
        top: 0;
        left: .711111rem;
        width: 5.333333rem;
        height: 5.333333rem;
    }

    .product-img img {
        width: 100%;
        height: 100%;
    }

    .info {
        position: absolute;
        left: 4.622222rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 16.0rem;
        margin-left: 2.133333rem;
    }

    .info strong {
        font-size: .924444rem;
        line-height: 1.5;
        display: -webkit-box;
        overflow: hidden;
        height: 2.702222rem;
        color: #333;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .info-attr {
        font-size: .853333rem;
        line-height: 1.5;
        position: absolute;
        top: 2.844444rem;
        left: 0;
        color: #4d4d4d;
    }

    .price {
        font-size: .924444rem;
        line-height: 1.5;
        position: absolute;
        top: 4.3rem;
        width: 100%;
        color: #fa3c3c;
    }

    small {
        text-decoration: line-through;
        color: #b2b2b2;
    }

    .quantity {
        float: right;
        color: #5d5d5d;
}
</style>