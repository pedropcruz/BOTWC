'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
	return  gulp.src('assets/scss/main.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
	gulp.watch('assets/scss/*.scss', gulp.series('sass'));
 });
