"use strict";

const connect = require("browser-sync"); // Plugin to keep multiple browsers & devices in sync when building websites, includes livereload capability.
const reload = connect.reload; // browser-sync component to reload the browser
const dotenv = require("dotenv-safe").config(); // Use .ENV files for configuration, use .env.example to check for required variables
const gulp = require("gulp-help")(require("gulp")); // Adds a default help task to gulp and provides the ability to add custom help messages to your gulp tasks
const requireDir = require("require-dir"); // Plugin to require() directories.

const src = process.env.SOURCE_ROOT;
const dest = process.env.BASE_PATH;

const page_assets = src + "*.html";

module.exports = {
	comment1: "Export Variables; Some variables are pulled from the .ENV file",
	src: src,
	page_assets: page_assets,
	dest: dest,
	port: process.env.PORT,

	comment2: "Export Modules",
	gulp: gulp,
	requireDir: requireDir,
	dotenv: dotenv,
	connect: connect,
	reload: reload
};
