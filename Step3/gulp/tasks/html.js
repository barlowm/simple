"use strict";

const $ = require("../config.js");

const htmlFnc = function() {
	console.log("------------------ Reloading Pages ------------------", $.src + "*.html");
	console.log(`Source: ${$.src + "*.html"}`);
	console.log(`Dest: ${$.dest}`);

	$.gulp.src($.src + "*.html")
		.pipe($.debug({title: "HTML Files"}))
		.pipe($.gulp.dest($.dest));
};

$.gulp.task(
	"html",
	"Check and load any HTML pages into the build folder",
	["connect"],
	htmlFnc
);
