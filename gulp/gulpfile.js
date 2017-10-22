var gulp  = require('gulp');
var copy = require('gulp-contrib-copy');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('copydir1', function () {
	gulp.src('dir1/**')
	.pipe(copy())
	.pipe(gulp.dest('dir2/'));
})

//you can use like default task also,this will work default
gulp.task('watch', function () {
	gulp.watch('src/**/*.js', ['concat']);
})

gulp.task('concat', function () {
	return gulp.src('src/**/*.js')
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dest'));
})