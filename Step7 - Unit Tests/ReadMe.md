[Simple Web Browser Project Build It](https://mwbarlow.com/simple/buildit) | [Documentation table of contents](TOC.md)

# Simple Web Browser Project - Just The Tests

Here we take a look at some simple Unit Tests using [Mocha](https://mochajs.org/) and [Chai](http://www.chaijs.com/).

To run through the tests, as before first perform the (one time only) setup process to install the necessary programs and node_modules, then run the test via gulp

```
> npm run setup
> gulp test
```

That's it.

Take a look at the `get_data.js` file in the src folder and the `base.js` test file in the tests folder.

This also creates a runnable Node.JS application for reading JSON data and comparing it against a known schema.

To run the app...

```
> gulp JS
> node build\main
```

The result of running the app should display a small block of JSON data and a JSON Schema that matches the data, like so:

```javascript
Our script files have been loaded - Again
We have JSON Data - {
  "Keyword": [
    {
      "id": "k1",
      "name": "SSN",
      "type": "Regex",
      "value": ".E3N1\"-\"3N1\"-\"4N.E"
    }
  ],
  "packages": {
  ... Additional data removed for simplicity ...
  }
}

We have JSON Schema - {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "",
  "type": "object",
  ... Additional schema removed for simplicity ...
  "required": [
    "Keyword",
    "packages",
    "routines"
  ]
}

The JSON Data matches the Schema
```

