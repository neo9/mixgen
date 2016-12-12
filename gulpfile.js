var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');
var sass = require('gulp-sass');

require('gulp-release-tag')(gulp);

var dist = 'dist';
var assets = 'assets';

var paths = {
	less: [
		assets + '/less/commons.less'
	]
};

function handleError(err) {
	console.warn(err.message);
	this.emit('end');
}

gulp.task('less', [], function () {
	gulp.src(paths.less)
		.pipe(less().on('error', handleError))
		.pipe(gulp.dest(dist + '/less'));
});

//gulp.task('sass', [], function () {
//	gulp.src(paths.sass)
//		.pipe(sass().on('error', handleError))
//		.pipe(gulp.dest(dist + '/sass'));
//});

gulp.task('clean', function () {
	return del([
		dist
	]);
});

gulp.task('watch', [], function () {
	[
		gulp.watch(paths.less, [ 'less' ]),
		gulp.watch(paths.scss, [ 'sass' ])
	].forEach(function (watch) {
		watch.on('change', function (event) {
			console.log('File %s was %s, running tasks...', event.path, event.type);
		});
	});
});

gulp.task('default', [
	'less'
]);
