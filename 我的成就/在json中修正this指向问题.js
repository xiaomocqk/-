var json = {
	value: 1,
	add: function(i) {
		var helper = function(i) {
			console.log(this); // this指向window
			this.value += i;
		}
		helper(i)
	}
};
json.add(1);

// 修正this指向问题
// 方法一:
var json1 = {
	value: 1,
	helper: function(i) { // 将helper变成json1的方法
		console.log(this); // this指向json1
		this.value += i;
	},
	add: function(i) {
		this.helper(i)
	}
};
json1.add(1);

// 方法二：使用闭包
var json2 = {
	value: 1,
	add: function(i) {
		var thisnew = this; // 构建闭包
		var helper = function(i) {
			console.log(thisnew);
			thisnew.value += i
		}
		helper(i)
	}
};
json2.add(1);

// 方法三：使用方法调用模式，因为方法调用模式可以指向调用者
var json3 = {
	value: 1,
	add: function(i) {
		var helper = function(i) {
			console.log(this);
			this.value += i;
		}

		var o = json3; // 新建一个o对象等于myNumber,将helper方法赋值给该对象，
		o.fn = helper;
		o.fn(i)
	}
};
json3.add(1)

// 方法四：使用apply（call）调用模式
var json4 = {
	value: 1,
	add: function(i) {
		var helper = function(i) {
				console.log(this);
				this.value += i;
			}

		helper.call(json4, i); //call方法

		// helper.apply(json4, [i]); //apply方法
	}
};
json4.add(1);