"use strict";
const $ = require("../config.js");

$.gulp.task(
	"watch",
	"Watch for any changes in any of the assets. Rebuild/reload browser as needed",
	["connect"],
	function() {
		console.log("Watching for changes in - ", $.page_assets);
		$.gulp.watch($.page_assets, ["html"]);
	}
);
