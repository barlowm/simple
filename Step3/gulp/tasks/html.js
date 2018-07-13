"use strict";

const $ = require("../config.js");

const htmlFnc = function() {
	console.log("------------------ Reloading Pages ------------------");

	$.gulp.src($.src + "/*.html")
		.pipe($.gulp.dest($.dest))
		.pipe($.connect.reload());
};

$.gulp.task(
	"html",
	"Check and load any HTML pages into the build folder",
	[],
	htmlFnc
);
