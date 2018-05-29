const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const concat = require('gulp-concat');

gulp.task('sass', function() {
	sass('src/sass/*.scss')
		.on('error',sass.logError)
		.pipe(gulp.dest('public/'))
});

gulp.task('default-js-classes', function(){
	return gulp.src('public/defaultClasses/*.js')
		.pipe(concat('allDefaultClasses.js'))
		.pipe(gulp.dest('./public'))
});


gulp.task('js-s1', function(){
	return gulp.src('public/sketch1/Classe/*.js')
		.pipe(concat('sketch1/classes.js'))
		.pipe(gulp.dest('./public/'))
});

gulp.task('js-s2', function(){
	return gulp.src('public/sketch2/Classe/*.js')
		.pipe(concat('sketch2/classes.js'))
		.pipe(gulp.dest('./public/'))
});

gulp.task('js-s3', function(){
	return gulp.src('public/sketch3/Classe/*.js')
		.pipe(concat('sketch3/classes.js'))
		.pipe(gulp.dest('./public/'))
});

gulp.task('js-s4', function(){
	return gulp.src('public/sketch4/Classe/*.js')
		.pipe(concat('sketch4/classes.js'))
		.pipe(gulp.dest('./public/'))
});


gulp.task('watch', function () {
	gulp.watch('src/sass/*.scss', ['sass']);
        gulp.watch('public/defaultClasses/*.js', ['default-js-classes']);
	gulp.watch('public/sketch1/Classes/*.js', ['js-s1']);
	gulp.watch('public/sketch2/Classes/*.js', ['js-s2']);
	gulp.watch('public/sketch3/Classes/*.js', ['js-s3']);
	gulp.watch('public/sketch4/Classes/*.js', ['js-s4']);
});
