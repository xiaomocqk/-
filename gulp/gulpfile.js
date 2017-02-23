// 引入 gulp
var gulp = require('gulp'),
    URL = 'src/**/', //文件地址
    toURL = 'dist/'; //文件处理完成后存放的地址

// html压缩
var htmlmin = require('gulp-htmlmin');
gulp.task('html', function() {
    var options = {
        collapseWhitespace: true, //清除空格
        collapseBooleanAttributes: true, //省略布尔属性的值，比如：<input checked="checked"/>
        removeComments: true, //清除注释
        removeEmptyAttributes: true, //清除空属性
        removeScriptTypeAttributes: true, //清除所有script标签中的type="text/javascript"属性
        removeStyleLinkTypeAttributes: true, //清楚所有Link标签上的type属性
        minifyJS: true, //压缩html中的javascript代码
        minifyCSS: true //压缩html中的css代码
    };
    gulp.src(URL + '*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest(toURL));
});


// css压缩
var cssmin = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'); // 自动添加前缀

gulp.task('css', function() {
    var prefixer_options = {
        browsers: ['last 2 versions', 'Android >= 4.0'],
        cascade: true, //是否美化属性值 默认：true
        remove: true //是否去掉不必要的前缀 默认：true 
    };

    var cssmin_options = {
        advanced: true, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
        /*compatibility: 'ie7',//保留 ie7及以下 兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]*/
        keepBreaks: false, //类型：Boolean 默认：false [是否保留换行]
        keepSpecialComments: '*' //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
    };

    gulp.src(URL + '*.css')
        .pipe(autoprefixer(prefixer_options)) //先执行前缀添加
        .pipe(cssmin(cssmin_options)) //再执行css压缩
        .pipe(gulp.dest(toURL));
});

// js压缩、混淆
var uglify = require('gulp-uglify');
gulp.task('js', function() {
    gulp.src(URL + '*.js')
        .pipe(uglify({
            mangle: {
                except: ['require', 'exports', 'module', '$'] //是否修改变量名--排除混淆关键字
            },
            compress: true, //类型：Boolean 默认：true 是否完全压缩
        }))
        .pipe(gulp.dest(toURL));
});

// ...图片压缩

// ...添加版本号,清除引用缓存

// 默认任务
gulp.task('default', ['html', 'css', 'js']);