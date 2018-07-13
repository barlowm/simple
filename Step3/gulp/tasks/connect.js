"use strict";
const $ = require("../config.js");

const connectFnc = function() {
	const reload = $.connect.reload;
	$.connect({
		port: $.port,
		server: {
			baseDir: $.dest
		}
	});
	// Removed watch as it's added as a separate task.
};

$.gulp.task("connect",
	`Launches the application in a local server running as localhost in the ${$.dest} folder on port ${$.port}`,
	[],
	connectFnc
);
