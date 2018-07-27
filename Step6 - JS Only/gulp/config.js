"use strict";

// const connect = require("browser-sync"); // Plugin to keep multiple browsers & devices in sync when building websites, includes livereload capability.
// const reload = connect.reload; // browser-sync component to reload the browser
const browserify = require("browserify"); // lets you require('modules') in the browser by bundling up all of your JavaScript source
const del = require("del"); // Deletes files and folders, has promise support
const dotenv = require("dotenv-safe").config(); // Use .ENV files for configuration, use .env.example to check for required variables
const gulp = require("gulp-help")(require("gulp")); // Adds a default help task to gulp and provides the ability to add custom help messages to your gulp tasks
// const gdest = require("gulp-dest");
const concat = require("gulp-concat"); // A gulp plugin to combine multiple files into a single file via streams
const debug = require("gulp-debug"); // Debug Vinyl file streams to see what files are run through your Gulp pipeline
// const file_log = require("gulp-filelog");
// const prettier = require("gulp-prettier"); // Plugin for Prettier, Opinionated code formatter. It enforces a consistent style by parsing code and re-printing.
const prettier = require("gulp-prettier-plugin");
const requireDir = require("require-dir"); // Plugin to require() directories.
const source = require("vinyl-source-stream"); // Plugin to convert the readable stream from browserify into a vinyl stream for gulp
const fs = require("fs-extra");	// Module which adds file system methods that aren't included in the native node.js fs module
const eslint = require("gulp-eslint");	// A gulp plugin for processing files with ESLint
const notify = require("gulp-notify");	// A gulp plugin for sending notification messages to the console
// connst eslint-plugin-json <-- Internal package for eslint which provides a set of standard lint rules for JavaScript.

const src = process.env.SOURCE_ROOT;
const dest = process.env.BASE_PATH;
const p_dest = "./pretty";
const main_script = process.env.APP_FILE;

const script_path = "/js/";
const page_path = "/";

const script_dest = dest + script_path;
const pretty_dest = p_dest;

const main_script_assets = src + script_path + main_script;
const script_assets = src + script_path + "**/*.js"; // The **/ is used to make sure even any subdirectories are traversed
const pretty_assets = [script_assets, "./*.md", "./doc/**/*.md"];

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
	pretty_assets: pretty_assets,

	script_dest: script_dest,
	pretty_dest: pretty_dest,

	assets: [script_assets],

	comment3: "Export Modules",
	browserify: browserify,
	console: console,
	gulp: gulp,
	requireDir: requireDir,
	dotenv: dotenv,
	debug: debug,
	del: del,
	concat: concat,
	prettier: prettier,

	source: source,
	fs: fs,
	eslint: eslint,
	notify: notify
};
