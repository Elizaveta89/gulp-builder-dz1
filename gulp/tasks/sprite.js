'use strict';

module.exports = function() {
    $.gulp.task('sprite', function () {
        var spriteData = $.gulp.src('source/images/icons/*.png')
            .pipe($.gp.spritesmith({
                imgName: 'img/sprite.png',
                cssName: 'css/sprite.css'
            }));
        return spriteData.pipe($.gulp.dest($.config.root + '/assets'));
    });
};