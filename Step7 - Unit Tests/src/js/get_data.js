require("dotenv-safe").config();
const fs = require("fs-extra");


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
	return {
		get_data,
		get_schema
	}
};

module.exports = get_JSON();
