[Simple Web Browser Project Build It](https://mwbarlow.com/simple/buildit) | [Documentation table of contents](TOC.md) 

# Simple Web Browser Project - More advanced functionality - "Require"

## [Modernizr](https://modernizr.com/)

Modernizr is only needed if you plan on looking for HTML5 and CSS3 features in the browser. If you're not using any HTML5 or CSS3 features, or you can guarantee that the browser version you're using will support the features you'll need then there's no need to include Modernizr in your code.

IF, however you DO require modernizr in your code, you can add it to your package and "require" it in your code:

```
npm install --save modernizer
```

```
const mod = require("modernizr");
```

For now we'll just eliminate the Modernizer code module.

## [Browserify](https://scotch.io/tutorials/getting-started-with-browserify)

