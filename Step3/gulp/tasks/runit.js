"use strict";

const $ = require("../config.js");

const watchFnc = function() {
	console.log(
		"------------------ Watching for asset changes ------------------"
	);

	$.gulp.watch($.page_assets, ["html", "reload"]);
	$.gulp.watch($.style_assets, ["css", "reload"]);
};

$.gulp.task(
	"runIt",
	"Run the application, watch for any changes in any of the assets and rebuild as necessary",
	["build", "connect"],
	watchFnc
);
