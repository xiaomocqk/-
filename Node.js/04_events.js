const events = require('events');
// 创建 eventEmitter 对象
const eventEmitter = new events.EventEmitter();

// 绑定一个叫connection自定义名称事件
eventEmitter.on('connection',function () {
    console.log("链接成功!");
    // 再绑定事件2
    eventEmitter.emit('data_received');
});

eventEmitter.on('data_received',function () {       // 自定义一个叫做data_received的事件
    console.log("数据接收成功!");
});

// 触发事件1( 所有的回调函数全部在这个之前需要定义出来 )
eventEmitter.emit('connection');

console.log("程序运行结束！");