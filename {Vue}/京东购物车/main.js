

Vue.filter('currency', function(n) {
    return n.toFixed(2);
});

new Vue({
    el: "#list",
    data: {
        products: products
    },
    computed: {},
    methods: {
        add: function(index) {
            return this.products[index].total ++;
        },
        reduce: function(index) {
            var n = this.products[index].total;
            n--;
            if (n === 0) n = 1;
            return this.products[index].total = n;
        }
    }
});
new Vue({
	el:'#summary',
	data:{},
	computed:{
        summary: function() {
        	var tmp = 0;
            for (var i = 0; i < products.length; i++) {
                tmp += products[i].total * products[i].price;
            }
            return tmp;
        },
        total:function(){
        	var tmp=0;
        	for (var i = 0; i < products.length; i++) {
                tmp += products[i].total;
            }
        	return tmp;
        }
	}
})