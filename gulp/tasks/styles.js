var fs = require('fs'),
	config = JSON.parse(fs.readFileSync('./gulp/config.json')),
	gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify');

gulp.task('styles', function () {
	return sass(config.srcPath + 'styles/*.scss', {
		style: 'expanded'
	})
		.on('error', function (err) {
			console.log(err.message);
			this.emit('end');
		})
		.pipe(autoprefixer("last 5 version"))
		.pipe(gulp.dest(config.distPath + 'styles'))
		.pipe(rename({suffix: '.min'}))
		.pipe(cssnano())
		.pipe(gulp.dest(config.distPath + 'styles'))
		.pipe(notify({ message: 'Styles task complete' }));
});