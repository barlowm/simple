require("dotenv-safe").config();
const fs = require("fs-extra");	// Module which adds file system methods that aren't included in the native node.js fs module
const tv4 = require("tv4");	// Tiny validator for JSON Schema V4

const get_JSON = function() {
	const get_data = function(packagePath) {
		if(!packagePath) {
			packagePath = process.env.PACKAGE;
		}
		return fs.readJson(packagePath)
			.then(
				function(jsonData) {
					return jsonData;
				},
				function(err) {
					console.error(`get_data() ERROR - ${err}`);
					return null;
				}
			);
	};

	const get_schema = function(schemaPath) {
		if(!schemaPath) {
			schemaPath = process.env.SCHEMA;
		}
		return fs.readJson(schemaPath)
			.then(jsonData => {
				return jsonData;
			})
			.catch(err => {
				console.error(`get_schema() ERROR - ${err}`);
				return null;
			});
	};

	const verify_json = function(schemaPath, packagePath) {
		if(!schemaPath) {
			schemaPath = process.env.SCHEMA;
		}
		if(!packagePath) {
			packagePath = process.env.PACKAGE;
		}
		return Promise.all([get_schema(), get_data()])
			.then( function(values) {
				const valid = tv4.validate(values[1], values[0]);
				if (valid) {
					return values[1];
				}
				return null;
			});
	};

	return {
		get_data,
		get_schema,
		verify_json
	}
};

module.exports = get_JSON();
