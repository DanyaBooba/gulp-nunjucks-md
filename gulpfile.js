const gulp = require("gulp");
const nunjucksMd = require("gulp-nunjucks-md");

gulp.task("default", function () {
	return gulp
		.src("src/*.{html,njk,md}")
		.pipe(
			nunjucksMd({
				path: ["src/includes/"],
				data: "src/data.json",
			})
		)
		.pipe(gulp.dest("dist"));
});
