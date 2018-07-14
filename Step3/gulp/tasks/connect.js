"use strict";
const $ = require("../config.js");

const connectFnc = function() {
	$.connect.init({
		port: $.port,
		server: {
			baseDir: $.dest
		}
	});
};

$.gulp.task("connect",
	`Launches the application in a local server running as localhost in the ${$.dest} folder on port ${$.port}`,
	[],
	connectFnc
);
