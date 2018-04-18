var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCSS = require("gulp-csso");
var uglifyJS = require("gulp-uglify");
var CSSPrefixer = require("gulp-autoprefixer");
var babel = require("gulp-babel");

gulp.task("css", () => {
  return gulp
    .src("./_dev/scss/*.scss")
    .pipe(sass())
    .pipe(CSSPrefixer())
    .pipe(minifyCSS())
    .pipe(gulp.dest("./content/"));
});

gulp.task("js", () => {
  return gulp
    .src("./_dev/scripts/bundle.js")
    .pipe(babel({ presets: ["env"] }))
    .pipe(uglifyJS())
    .pipe(gulp.dest("./scripts/"));
});

gulp.task("watch", function() {
  gulp.watch("./_dev/scripts/bundle.js", ["js"]);
  gulp.watch("./_dev/scss/app.scss", ["css"]);
});

gulp.task("default", ["css", "js"]);
