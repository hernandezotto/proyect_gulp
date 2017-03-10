const gulp = require('gulp'),
pug = require ('gulp-pug');
gulp.task('pug', () =>
 gulp.src('./preproceso/pug/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./dist/'))
);
gulp.task('default', () => {
    gulp.watch('./preproceso/pug/*.pug',['pug']);
});
const gulp=reqire('gulp'),  
    sass = require('gulp-sass');
    gulp.task('sass',()=> 
    gulp.src('./prepreceso/sass/*.sass')
    .pipe(sass({
        outputStyle:'expended'
    }))
    .pipe(gulp.dest('./dist/css'))
    );
    gulp.task('default',()=>
    gulp.watch('./prepreceso/sass/*.sass',['sass'])
    );