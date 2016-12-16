// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
// var jshint = require('gulp-jshint');
// var sass = require('gulp-sass');
// var rename = require('gulp-rename');

// 检查脚本
/*gulp.task('lint', function() {
    gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});*/

// 编译Sass
/*gulp.task('sass', function() {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});*/

// 合并，压缩文件
/*gulp.task('scripts', function() {
    gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify('123.js'))
        .pipe(gulp.dest('./dist'));
});*/


// js压缩、混淆
var uglify = require('gulp-uglify');

gulp.task('js', function () {
    gulp.src('src/js/*.js')
        .pipe(uglify({
            mangle: {except: ['require' ,'exports' ,'module' ,'$']},//是否修改变量名--排除混淆关键字
            compress: true,//类型：Boolean 默认：true 是否完全压缩
        }))
        .pipe(gulp.dest('dist/js'));
});

// css压缩
var cssmin = require('gulp-minify-css');
gulp.task('css', function(){
    gulp.src('src/css/*.css')
        .pipe(cssmin({
            advanced: true,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            /*compatibility: 'ie7',//保留 ie7及以下 兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]*/
            keepBreaks: false,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'//保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest('dist/css'));
});

// 合并(只写了js)
/*var concat = require('gulp-concat');
gulp.task('concat',function () {
    gulp.src({'src/js/a.js, src/js/b.js'})
        .pipe(concat('a+b.js'))//合并后的文件名
        .pipe(gulp.dest('dist/js'));
});*/

// css自动添加前缀
var autoprefixer = require('gulp-autoprefixer');

gulp.task('auto', function(){
    gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers:['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true
            remove: true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(gulp.dest('dist/css'));
});

// 添加版本号,清除引用缓存
/**/


// 图片压缩
/*var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache'); //只压缩修改的图片，没有修改的图片直接从缓存文件读取
gulp.task('img', function(){
    gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 3, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: false, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: false, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: false //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(cache({
            optimizationLevel: 3, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: false, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: false, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: false //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/img'));
});*/

// less
var less = require('gulp-less');
    // sourcemaps = require('gulp-sourcemaps');
gulp.task('less', function () {
    gulp.src('src/less/*.less')
        // .pipe(sourcemaps.init())
        .pipe(less())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'));
});
// 实时刷新
var livereload = require('gulp-livereload'),
    webserver = require('gulp-webserver');

gulp.task('reload',function(){
    gulp.src('./') //服务器目录(./代表根目录)
        .pipe(webserver({ // 运行gulp-webserver
            livereload: true, // 启用LiveReload
            open: true // 服务器启动时自动打开网页(这里就是根目录了)
        }));
});

// 默认任务
gulp.task('default',['webserver','watch']);

/*gulp.task('default', function(){
    // gulp.run('lint', 'sass', 'scripts');

    // 监听文件变化
    gulp.watch('./js/*.js', function(){
        // gulp.run('lint', 'sass', 'scripts');
    });
});*/