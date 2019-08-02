const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

function styleTask(){
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./.dist/css'))
        .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baseDir: './'
        }
    });
    gulp.watch('./src/sass/**/*.scss', styleTask);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = styleTask;
exports.watch = watch;