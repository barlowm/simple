[Simple Web Browser Project Build It](https://mwbarlow.com/simple/buildit) | [Documentation table of contents](TOC.md)

# Simple Web Browser Project - More advanced functionality - "Require"

Ok somewhat extensive redo of the code here (mostly just moving things around).

If you're not doing a overly complicated application having most of your source all in the root folder of the application isn't really a big deal.

However, I like to keep all my source files underneath a "SRC" folder hierarchy. So I've moved everything there in this version.

Also, I've added the additional functionality to copy all the "misc" files that the HTML5 Boilerplate likes to have (that's the "browserconfig", "favicon", "webmanifest") over into the build folder as well (these are the "misc assets" in the build scripts). I've also done the same thing with the images. Some of these changes will become more useful in the future when working with scripts to modify images and other misc files.

Please feel free to check out how the various gulp task scripts have been tweaked as well as the config.js in the gulps folder.

Now, with that said, let's look at some of the other changes...

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

In the world of Node.js there's something called "[CommonJS](http://www.commonjs.org/)" which allows you to include references to other JavaScript function modules by simply adding a "require()" function to your code.

For example, instead of adding a script library for jquery into your html file

```
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

You can "require" jquery directly in your script file:

```
const $ = require("jquery");
```

And use NPM to make sure the jquery library is available to your build process

```
npm install --save jquery
```

It may not seem like much at first, but when you start including dozens of different library modules in your application the results are immense. AND, when your site is moved to another location, you don't need to "carry around" all those libraries. Once you `npm install` a module (with the appropriate save option of course), a reference is kept in the package.json so that once you move the code an `npm install` is pretty much all that's needed to get the new site up and running.

So check out how the `js` gulp task has been modified to include Browserify.

Also check out how the main.js file has been modified to "require" the main application script file, which has the bulk of the applications function in it.

Now I could have just as easily combined everything into the main.js, but splitting into 2 files is a better example of how you can separate your code modules and use require to not only include Node_module libraries but local JavaScript files as well.

Once again, if you're just starting with this module in a clean environment, that has Node.js already installed, then all you need to get the code working is, from the command line prompt do a

```
> npm run setup
> gulp watch
```

and the app here will be up and running on your browser
