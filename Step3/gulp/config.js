"use strict";

const gulp = require("gulp-help")(require("gulp"));	// Adds a default help task to gulp and provides the ability to add custom help messages to your gulp tasks
const debug = require("gulp-debug");				// Debug Vinyl file streams to see what files are run through your Gulp pipeline
const requireDir = require("require-dir");			// Plugin to require() directories.
const dotenv = require("dotenv-safe").config();		// Use .ENV files for configuration - https://www.npmjs.com/package/dotenv-safe
const connect = require("browser-sync");			// Plugin to keep multiple browsers & devices in sync when building websites, includes livereload capability.
const reload = connect.reload;

module.exports = {
	"comment1": "Export Variables; Some variables are pulled from the .ENV file",
	"src": process.env.SOURCE_ROOT,
	"dest": process.env.BASE_PATH,
	"port": process.env.PORT,

	"comment2": "Export Modules",
	"console": console,
	"gulp": gulp,
	"debug": debug,
	"requireDir": requireDir,
	"dotenv": dotenv,
	"connect": connect,
	"reload": reload
};
