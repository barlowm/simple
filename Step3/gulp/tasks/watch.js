"use strict";
const $ = require("../config.js");


$.gulp.task("watch", ["connect"], function () {
    $.gulp.watch($.src, ["html"]);
});
