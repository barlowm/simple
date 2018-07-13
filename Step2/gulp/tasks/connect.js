"use strict";
const $ = require("../config.js");


const itschanged = function() {
	const reload = $.connect.reload;
	console.log(`${$.dest}/*.html Changed!`);
	reload();
};

const connectFnc = function() {

console.log(`Port - ${$.port}; Dest - ${$.dest}`);


	const reload = $.connect.reload;
	$.connect({
		port: $.port,
		server: {
			baseDir: $.dest
		}
	});
	$.gulp.watch(`${$.dest}/*.html`, itschanged);
};






// watch files for changes and reload
$.gulp.task("connect",
	`Launches the application in a local server running as localhost in the ${$.dest} folder on port ${$.port}`,
	[],
	connectFnc
);
