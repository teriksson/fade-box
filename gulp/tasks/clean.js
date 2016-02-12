var gulp = require('gulp'),
		del = require('del'),
		distPath = './demos/';

gulp.task('clean', function(cb) {
	del([
		distPath + 'styles',
		distPath + 'scripts',
		distPath + 'images',
		distPath + 'fonts'
	], cb)
});
