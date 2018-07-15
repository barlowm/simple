"use strict";

const $ = require("../../config.js");
const sPath = $.page_assets;
const dPath = $.pageDest;

const htmlFnc = function() {
	console.log("------------------ Building HTML ------------------");
	console.log(`Source: ${sPath}`);
	console.log(`Dest: ${dPath}`);

	$.gulp.src(sPath)
		.pipe($.gulp.dest(dPath));
};

$.gulp.task(
	"html",
	"Copy any HTML pages into the build folder",
	[],
	htmlFnc
);
