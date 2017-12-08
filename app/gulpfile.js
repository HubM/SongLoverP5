const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');



gulp.task('sass', function() {
	sass('src/sass/*.scss')
		.on('error',sass.logError)
		.pipe(gulp.dest('public/'))
});

gulp.task('js-sketch1', function(){
	return gulp.src('public/sketch1/Classes/*.js')
		.pipe(concat('sketch1/classes.js'))
		.pipe(gulp.dest('./public/'))
});

gulp.task('js-sketch2', function(){
	return gulp.src('public/sketch2/Classes/*.js')
		.pipe(concat('sketch2/classes.js'))
		.pipe(gulp.dest('./public/'))
});

gulp.task('js-sketch3', function(){
	return gulp.src('public/sketch3/Classes/*.js')
		.pipe(concat('sketch3/classes.js'))
		.pipe(gulp.dest('./public/'))
});

gulp.task('js-sketch4', function(){
	return gulp.src('public/sketch4/Classes/*.js')
		.pipe(concat('sketch4/classes.js'))
		.pipe(gulp.dest('./public/'))
});

gulp.task('js-sketch5', function(){
	return gulp.src('public/sketch5/Classes/*.js')
		.pipe(concat('sketch5/classes.js'))
		.pipe(gulp.dest('./public/'))
});


gulp.task('watch', function () {
	gulp.watch('src/sass/*.scss', ['sass']);
	gulp.watch('public/sketch1/Classes/*.js', ['js-sketch1']);
	gulp.watch('public/sketch2/Classes/*.js', ['js-sketch2']);
	gulp.watch('public/sketch3/Classes/*.js', ['js-sketch3']);
	gulp.watch('public/sketch4/Classes/*.js', ['js-sketch4']);
	gulp.watch('public/sketch5/Classes/*.js', ['js-sketch5']);
});

gulp.task('default', function() {

});
