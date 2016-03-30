var fs = require('fs'),
	config = JSON.parse(fs.readFileSync('./gulp/config.json')),
	gulp = require('gulp');

gulp.task('watch', function() {

	// Watch .scss files
	gulp.watch(config.srcPath + 'styles/**/*.scss', ['styles']);

	// Watch scripts
	gulp.watch(config.srcPath + 'scripts/**/*.js', ['jshint', 'scripts']);
	gulp.watch(config.srcPath + 'vendor/scripts/**/*.js', ['copy']);
});
