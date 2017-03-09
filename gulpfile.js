const gulp = require('gulp'),
pug = require ('gulp-pug');
gulp.task('pug', function prepros(){    
   return gulp.src('./preproceso/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./dist/'))
});
gulp.task('default', () => {
    gulp.watch('./preproceso/*.pug',['pug']);
});