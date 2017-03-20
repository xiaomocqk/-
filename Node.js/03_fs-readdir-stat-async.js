// 异步读取文件目录
const fs = require('fs');
const path = require('path');

// readdir读取的是url
const travelAsync = function(dir, callback, finish) {
    fs.readdir(dir, (err, files) => {
        if (err) 
        (function next(i) {
            if (i < files.length) {
                const pathname = path.join(dir, file[i]);

                fs.stat(pathname, (err, stats) => {
                    if (stats.isDirectory()) {
                        travelAsync(pathname, callback, () => {
                            next(i++);
                        });
                    } else {
                        callback(pathname, () => {
                            next(i++);
                        });
                    }
                });
            } else {
                finish && finish();
            }
        })(0);
    });
}

travelAsync('tmp/', (pathname) => {
    console.log(pathname)
})