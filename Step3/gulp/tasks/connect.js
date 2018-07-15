"use strict";

const $ = require("../config.js");

const connectFnc = function() {
	$.connect({
		port: $.port,
		server: {
			baseDir: $.dest
		}
	});
};

const reloadFnc = function() {
	console.log("----------- Reloading the application --------------");
	$.connect.reload();
}

$.gulp.task("connect",
	`Launches the application in a local server running in the ${$.dest} folder on a given port`,
	[],
	connectFnc
);

$.gulp.task("reload",
	"Reloads the browsers after any changes as a result of a rebuild",
	[],
	reloadFnc
);
