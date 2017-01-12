// 引入 gulp
var gulp = require('gulp');

// html
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
    gulp.src('src/**/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/'));
});
// css压缩
var cssmin = require('gulp-minify-css');
gulp.task('css', function() {
    var options = {
        advanced: true, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
        /*compatibility: 'ie7',//保留 ie7及以下 兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]*/
        keepBreaks: false, //类型：Boolean 默认：false [是否保留换行]
        keepSpecialComments: '*' //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
    };
    gulp.src('src/**/*.css')
        .pipe(cssmin(options))
        .pipe(gulp.dest('dist/'));
});

// js压缩、混淆
var uglify = require('gulp-uglify');
gulp.task('js', function() {
    gulp.src('src/**/*.js')
        .pipe(uglify({
            mangle: {
                except: ['require', 'exports', 'module', '$'] //是否修改变量名--排除混淆关键字
            },
            compress: true, //类型：Boolean 默认：true 是否完全压缩
        }))
        .pipe(gulp.dest('dist/'));
});

// css自动添加前缀
var autoprefixer = require('gulp-autoprefixer');
gulp.task('auto', function() {
    gulp.src('src/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true
            remove: true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(gulp.dest('dist/'));
});

// less
var less = require('gulp-less');
gulp.task('less', function() {
    gulp.src('src/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/'));
});

// 实时刷新
/*var livereload = require('gulp-livereload'),
    webserver = require('gulp-webserver');

gulp.task('reload', function() {
    gulp.src('./') //服务器目录(./代表根目录)
        .pipe(webserver({ // 运行gulp-webserver
            livereload: true, // 启用LiveReload
            open: true // 服务器启动时自动打开网页(这里就是根目录了)
        }));
});*/

// ...图片压缩

// ...添加版本号,清除引用缓存

// 默认任务
// gulp.task('default', ['js', 'html', 'auto', 'css']); //似乎不能全部有效果