"use strict";

const connect = require("browser-sync"); // Plugin to keep multiple browsers & devices in sync when building websites, includes livereload capability.
const reload = connect.reload; // browser-sync component to reload the browser
const browserify = require("browserify"); // lets you require('modules') in the browser by bundling up all of your JavaScript source
const del = require("del"); // Deletes files and folders, has promise support
const dotenv = require("dotenv-safe").config(); // Use .ENV files for configuration, use .env.example to check for required variables
const gulp = require("gulp-help")(require("gulp")); // Adds a default help task to gulp and provides the ability to add custom help messages to your gulp tasks
const concat = require("gulp-concat"); // Combine multiple files into a single file via streams
const debug = require("gulp-debug"); // Debug Vinyl file streams to see what files are run through your Gulp pipeline
const prettier = require("prettier"); // Opinionated code formatter. It enforces a consistent style by parsing code and re-printing.
const requireDir = require("require-dir"); // Plugin to require() directories.
const source = require("vinyl-source-stream"); // Plugin to convert the readable stream from browserify into a vinyl stream for gulp

const src = process.env.SOURCE_ROOT;
const dest = process.env.BASE_PATH;
const main_script = process.env.APP_FILE;

const script_path = "/js/";
const style_path = "/css/";
const image_path = "/imgs/";
const page_path = "/";

const page_dest = dest;
const style_dest = dest + style_path;
const script_dest = dest + script_path;
const image_dest = dest + image_path;

const main_script_assets = src + script_path + main_script;
const script_assets = src + script_path + "**/*.js"; // The **/ is used to make sure even any subdirectories are traversed
const style_assets = src + style_path + "*.css";
const page_assets = src + page_path + "*.html";
const image_assets = src + image_path + "**/*.*";

const root_assets = [
	src + page_path + "*.webmanifest",
	src + page_path + "*.ico",
	src + page_path + "*.xml"
];

module.exports = {
	comment1: "Export Variables; Some variables are pulled from the .ENV file",
	src: src,
	dest: dest,
	port: process.env.PORT,

	comment2: "The various assets which make up the application.",
	comment2a: "The individual assets are used in the individual build modules",
	main_script: main_script,
	main_script_assets: main_script_assets,
	script_assets: script_assets,
	style_assets: style_assets,
	page_assets: page_assets,
	root_assets: root_assets,
	image_assets: image_assets,

	page_dest: page_dest,
	style_dest: style_dest,
	script_dest: script_dest,
	image_dest: image_dest,

	assets: [page_assets, style_assets, script_assets, root_assets],

	comment3: "Export Modules",
	browserify: browserify,
	console: console,
	gulp: gulp,
	requireDir: requireDir,
	dotenv: dotenv,
	debug: debug,
	del: del,
	concat: concat,
	connect: connect,
	prettier: prettier,
	reload: reload,
	source: source
};
