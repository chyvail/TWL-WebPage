// Gulp and Sass imports
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Compile Sass to css
const compileSass = (done) => {
  gulp
    .src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/css"))
    .on("end", done); // Signal completion
};

// Watch Changes in file
const watchSass = () => {
  gulp.watch("src/scss/**/*.scss", compileSass);
};

// Gulp Tasks
gulp.task("sass", compileSass);
gulp.task("watch", watchSass);
