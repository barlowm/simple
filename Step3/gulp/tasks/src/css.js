"use strict";

const $ = require("../../config.js");
const sPath = $.style_assets;
const dPath = $.styleDest;

const cssFnc = function() {
	console.log("------------------ Building CSS ------------------");
	console.log(`Source: ${sPath}`);
	console.log(`Dest: ${dPath}`);

	$.gulp
		.src(sPath)
		.pipe($.concat("common.css"))
		.pipe($.gulp.dest(dPath));
};

$.gulp.task(
	"css",
	"Combine any CSS files into a single file and move combined file into the build folder",
	[],
	cssFnc
);
