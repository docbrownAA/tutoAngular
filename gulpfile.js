var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var source = "./src";
var destination = "./dist";
gulp.task('css',function(){
	return gulp.src(source + '/assets/css/styles.less')
	.pipe(plugins.less())
	.pipe(plugins.csscomb())
	.pipe(plugins.cssbeautify({indent:'  '}))
	.pipe(plugins.autoprefixer())
	.pipe(gulp.dest(destination+'/assets/css'));
});

gulp.task('minify',function(){
	return gulp.src(destination+ '/assets/css/*.css')
	.pipe(plugins.csso())
	.pipe(plugins.rename({
		suffix:'.min'
	}))
	.pipe(gulp.dest(destination+'/assets/css/'));
});