var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	srcPath = './src/',
	distPath = './demos/'

gulp.task('styles', function () {
	return sass(srcPath + 'styles/fade-box.scss', {
		style: 'expanded'
	})
		.on('error', function (err) {
			console.log(err.message);
			this.emit('end');
		})
		.pipe(autoprefixer("last 5 version"))
		.pipe(gulp.dest(distPath + 'styles'))
		.pipe(rename({suffix: '.min'}))
		.pipe(cssnano())
		.pipe(gulp.dest(distPath + 'styles'))
		.pipe(notify({ message: 'Styles task complete' }));
});