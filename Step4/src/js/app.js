const p = require("./plugins");
const h = require("handlebars");
const r = require("ramda");
const $ = require("jquery");

var square = function square (x) {
	return x * x;
}

var squares = r.chain(square, [1, 2, 3, 4, 5]);


const main = function() {
	console.log("Squares = ", squares);
	$("#response").html("Hello World...");
	console.log("We've set a field...");
}


module.exports = {
	main: main
}
