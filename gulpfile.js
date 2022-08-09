const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cssMin = require('gulp-cssimport')
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')

function compilaSass() {
    return gulp.src('css/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('css/scss/build'))
}

function compilaCss () {
    return gulp.src('css/css/style.css')
    .pipe(cssMin())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/css/build'))
}

gulp.task('sass', compilaSass)
gulp.task('css', compilaCss)
