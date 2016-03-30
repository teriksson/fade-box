var gulp = require('gulp');

gulp.task('default', function() {
	gulp.start('styles', 'jshint', 'scripts', 'watch');
});