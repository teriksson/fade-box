var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	notify = require('gulp-notify'),
	srcPath = 'src/',
	distPath = 'demos/';

gulp.task('images', function() {
	return gulp.src(srcPath + 'images/**/*')
		.pipe(imagemin({
			optimizationLevel: 3,
			progressive: true,
			interlaced: true,
			svgoPlugins: [{removeViewBox: false}]
		}))
		.pipe(gulp.dest(distPath + 'images'))
		.pipe(notify({ message: 'Images task complete' }));
});
