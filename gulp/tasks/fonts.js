var gulp = require('gulp'),
	srcPath = 'src/',
	notify = require('gulp-notify'),
	distPath = 'demos/';

gulp.task('fonts', function() {
	gulp
		.src([srcPath + 'fonts/**/*'])
		.pipe(gulp.dest(distPath + 'fonts'))
		.pipe(notify({ message: 'Fonts task complete' }));
});