const gulp = require("gulp");
const nunjucksMd = require("gulp-nunjucks-md");

gulp.task("default", function () {
	return gulp
		.src("src/*.{html,njk,md}")
		.pipe(
			nunjucksMd({
				path: ["src/includes/"],
			})
		)
		.pipe(gulp.dest("dist"));
});
