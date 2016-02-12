var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	notify = require('gulp-notify'),
	srcPath = 'src/';

gulp.task('jshint', function() {
	return gulp.src(srcPath + 'scripts/**/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'))
		.pipe(notify({ message: 'Scripts task complete' }));
});
