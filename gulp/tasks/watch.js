var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	srcPath = 'src/',
	distPath = 'demos/';

gulp.task('watch', function() {

	// Watch .scss files
	gulp.watch(srcPath + 'styles/**/*.scss', ['styles']);

	// Watch .js files
	gulp.watch(srcPath + 'scripts/**/*.js', ['scripts']);

	// Watch image files
	gulp.watch(srcPath + 'images/**/*', ['images']);

	// Create LiveReload server
	livereload.listen();

	// Watch any files in demos/, reload on change
	gulp.watch([distPath + '**']).on('change', livereload.changed);
});
