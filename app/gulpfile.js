const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');



gulp.task('sass', () =>
	sass('src/sass/*.scss')
		.on('error',sass.logError)
		.pipe(gulp.dest('public/'))
);

gulp.task('js', function(){
	return gulp.src('public/Classes/*.js')
		.pipe(concat('classes.js'))
		.pipe(gulp.dest('./public/'))
});

gulp.task('default', function() {
  // place code for your default task here
});
