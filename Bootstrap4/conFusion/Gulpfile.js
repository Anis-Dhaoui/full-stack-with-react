'use strict';
//Loading Gulp plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cleanCss = require('gulp-clean-css'),
    flatmap = require('gulp-flatmap'),
    htmlmin = require('gulp-htmlmin'),
    browserSync = require('browser-sync');

// //**Adding sass task */
    gulp.task('sass', function () {
        return gulp.src('./css/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest('./css'));
      });

// //**Adding sass:watch task */
gulp.task('sass:watch', function () {
     gulp.watch('./css/*.scss', gulp.series('sass'));
});

// //**Adding browser-sync task */
gulp.task('browser-sync', function () {
   var files = [
      './*.html',
      './css/*.css',
      './img/*.{png,jpg,gif}',
      './js/*.js'
   ];
   browserSync.init(files, {
      server: {
         baseDir: "./"
      }
   });
});

// Default task
gulp.task('default', gulp.parallel('sass:watch', 'browser-sync'));

// //**Adding clean task (which will delelte the "dist" folder) */
gulp.task('clean', function() {
    return del(['dist']);
});

// //**Adding copyfonts task (which will copy the fonts to the folder "dist/fonts") */
gulp.task('copyfonts', function() {
   gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
   .pipe(gulp.dest('./dist/fonts'));
});

// //**Adding imagemin task (which will compress the images and send to the distination folder "dist") */
gulp.task('imagemin', function() {
    return gulp.src('img/*.{png,jpg,gif}')
      .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
      .pipe(gulp.dest('dist/img'));
  });
  
//**Adding usemin task (which will concatenate and uglify the files and remove the spaces) */
gulp.task('usemin', function() {
    return gulp.src('./*.html')
    .pipe(flatmap(function(stream, file){
        return stream
          .pipe(usemin({
              css: [ rev() ],
              html: [ function() { return htmlmin({ collapseWhitespace: true })} ]
                ,
              js: [ uglify(), rev() ],
              inlinejs: [ uglify() ],
              inlinecss: [ cleanCss(), 'concat' ]
          }))
      }))
      .pipe(gulp.dest('dist/'));
  });
  gulp.task('build',
       gulp.series('clean',
        gulp.parallel('copyfonts','imagemin','usemin')));
