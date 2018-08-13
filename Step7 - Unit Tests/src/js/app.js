const getTheData = require("./get_data.js");

const main = function() {
	return Promise.all([getTheData.get_data(), getTheData.get_schema(), getTheData.verify_json()])
		.then(function(values) {
			const jsonData = values[0];
			const jsonSchema = values[1];
			const validData = values[2];
			if (jsonData) {
				console.log(`We have JSON Data - ${JSON.stringify(jsonData, null, 2)}\n`);
			}
			else {
				console.log("Loading of JSON Data failed");
			}

			if (jsonSchema) {
				console.log(`We have JSON Schema - ${JSON.stringify(jsonSchema, null, 2)}\n`);
			}
			else {
				console.log("Loading of JSON Schema failed");
			}

			if (validData) {
				console.log("The JSON Data matches the Schema");
			}
			else {
				console.log("The JSON Data does NOT match the Schema");
			}
		});
};

module.exports = { main: main };

