// 导入各种包
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var htmlReplace = require('gulp-html-replace');
// html处理
gulp.task('html', function() {
    gulp.src(['src/**/*.html', 'index.html'])
    	.pipe(htmlReplace({
          style: gulp.src('src/html/common/style.html'),
          aside: gulp.src('src/html/common/aside.html'),
          header:gulp.src('src/html/common/header.html')
        }))
        .pipe(htmlmin({
            collapseWhitespace: true, // 去掉空白字符
            minifyJS: true,//压缩页面JS
            minifyCSS: true,//压缩页面CSS
            removeComments: true//清除HTML注释
        }))
        .pipe(gulp.dest('dist'));
});
// less处理
gulp.task('less', function() {
    gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'));
});
// 配置要打包的第三包路径
var jsLibs = [
    'node_modules/art-template/lib/template-web.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/jquery-form/dist/jquery.form.min.js',
    'node_modules/jquery.cookie/jquery.cookie.js'
];
// 合并所有的第三方包为一个js
gulp.task('jsLib', function() {
    gulp.src(jsLibs)
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('dist/js'));
});
//编写一个打包任务
var jsModules = [
	'src/js/index.js',
	'src/js/user/login.js',
	'src/js/user/repass.js',
	'src/js/user/profile.js',
	'src/js/teacher/add.js',
	'src/js/teacher/edit.js',
	'src/js/teacher/list.js',
	'src/js/course/add.js',
	'src/js/course/edit1.js',
	'src/js/course/edit2.js',
	'src/js/course/edit3.js',
	'src/js/course/list.js',
	'src/js/category/add.js',
	'src/js/category/edit.js',
	'src/js/category/list.js'
];
gulp.task('js',function(){
	jsModules.forEach(function(jsPath){
		var pathArr = jsPath.split('/');
		var jsName = pathArr.pop();
		pathArr.shift();
		browserify(jsPath).bundle()
		.pipe(source(jsName))
		.pipe(buffer())
//		.pipe(uglify())
		.pipe(gulp.dest('dist/'+ pathArr.join('/')))
	})
})


//gulp.task('js', function() {
//browserify('src/js/index.js').bundle() // 打包index.js
//    .pipe(source('index.js'))
//    .pipe(buffer())
//    // .pipe(uglify())
//    .pipe(gulp.dest('dist/js'));
//});

//编写默认任务
gulp.task('build',function(){
	gulp.run(['html','less','jsLib','js']);
})
gulp.task('default',function(){
	gulp.run('build');
	gulp.watch(['src/**/*.html', 'index.html'],function(){
		gulp.run('html');
	});
	gulp.watch(['src/**/*.js'],function(){
		gulp.run('js');
	});
	gulp.watch(['src/**/*.less'],function(){
		gulp.run('less');
	})
})
//=============================================
//var gulp = require('gulp');
//var htmlmin = require('gulp-htmlmin');
//var uglify = require('gulp-uglify');
//var less = require('gulp-less');
//var cleanCss = require('gulp-clean-css');
//var rename = require('gulp-rename');
//var concat = require('gulp-concat');
//var browserify = require('browserify');
//var source = require('vinyl-source-stream');
//var buffer = require('vinyl-buffer');
//
//gulp.task('htmlmin',function(){
//	gulp.src(['src/**/*.html','index.html'])
//		.pipe(htmlmin(
//			collapseWhitespace:true,
//			minifyJS:true,
//			minifyCSS:true,
//			removeComments: true
//		))
//})
