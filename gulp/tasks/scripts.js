var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	srcPath = 'src/',
	distPath = 'demos/';

gulp.task('scripts', function() {
	return gulp
		.src([
			srcPath + 'scripts/**/*.js'
		])
		.pipe(gulp.dest(distPath + 'scripts'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest(distPath + 'scripts'))
		.pipe(notify({ message: 'Scripts task complete' }))
		.on('error', function (err) {
			console.log(err.message);
			this.emit('end');
		});
});