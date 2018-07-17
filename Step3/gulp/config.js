"use strict";

const connect = require("browser-sync"); // Plugin to keep multiple browsers & devices in sync when building websites, includes livereload capability.
const reload = connect.reload; // browser-sync component to reload the browser
const del = require("del"); // Deletes files and folders, has promise support
const dotenv = require("dotenv-safe").config(); // Use .ENV files for configuration, use .env.example to check for required variables
const gulp = require("gulp-help")(require("gulp")); // Adds a default help task to gulp and provides the ability to add custom help messages to your gulp tasks
const concat = require("gulp-concat"); // Combine multiple files into a single file via streams
const prettier = require("prettier"); // Opinionated code formatter. It enforces a consistent style by parsing code and re-printing.
const debug = require("gulp-debug"); // Debug Vinyl file streams to see what files are run through your Gulp pipeline
const requireDir = require("require-dir"); // Plugin to require() directories.

const src = process.env.SOURCE_ROOT;
const dest = process.env.BASE_PATH;

const scriptPath = "js/";
const stylePath = "css/";
const pagePath = "";

const pageDest = dest + "/";
const styleDest = dest + "/" + stylePath;
const scriptDest = dest + "/" + scriptPath;

const script_assets = src + scriptPath + "**.js";
const style_assets = src + stylePath + "*.css";
const page_assets = src + pagePath + "*.html";

module.exports = {
	comment1: "Export Variables; Some variables are pulled from the .ENV file",
	src: src,
	dest: dest,
	port: process.env.PORT,

	comment2: "The various assets which make up the application.",
	comment2a: "The individual assets are used in the individual build modules",
	script_assets: script_assets,
	style_assets: style_assets,
	page_assets: page_assets,

	pageDest: pageDest,
	styleDest: styleDest,
	scriptDest: scriptDest,

	assets: [page_assets, style_assets, script_assets],

	comment3: "Export Modules",
	console: console,
	gulp: gulp,
	requireDir: requireDir,
	dotenv: dotenv,
	prettier: prettier,
	del: del,
	concat: concat,
	connect: connect,
	reload: reload
};
