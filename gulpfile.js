var gulp = require('gulp'); 

var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var react = require('gulp-react');
var babel = require('gulp-babel');

gulp.task('example', function() {
  gulp.src('./src/Example.html')
    .pipe(gulp.dest('./build'));
  gulp.src('./src/Example.jsx')
    .pipe(react())
    .pipe(gulp.dest('./build'));
});

gulp.task('scripts', function() {
  gulp.src('./src/scripts/*.jsx')
  	.pipe(react())
    .pipe(concat('SimpleTable.js'))
    .pipe(stripDebug())
    .pipe(gulp.dest('./build/scripts/'));
});

gulp.task('styles', function() {
  gulp.src(['./src/styles/*.css'])
    .pipe(concat('SimpleTable.css'))
    .pipe(gulp.dest('./build/styles/'));
});

gulp.task('dependencies', function() {
   gulp.src([
   	'./node_modules/bootstrap/dist/css/bootstrap.min.css', 
   	'./node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
   	'./node_modules/react/dist/react.min.js',
   	'./node_modules/classnames/index.js'])
	.pipe(gulp.dest('./build/dependencies/'));
})

gulp.task('default', ['example', 'scripts', 'styles', 'dependencies'], function() {
});