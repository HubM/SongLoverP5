const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');



gulp.task('sass', function() {
	sass('src/sass/*.scss')
		.on('error',sass.logError)
		.pipe(gulp.dest('public/'))
});

gulp.task('js', function(){
	return gulp.src('public/Classes/*.js')
		.pipe(concat('classes.js'))
		.pipe(gulp.dest('./public/'))
});


gulp.task('watch', function () {
	gulp.watch('src/sass/*.scss', ['sass']);
	gulp.watch('public/Classes/*.js', ['js']);
});

gulp.task('default', function() {

});
