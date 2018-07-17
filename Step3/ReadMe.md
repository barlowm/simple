[Simple Web Browser Project Build It](https://mwbarlow.com/simple/buildit) | [Documentation table of contents](TOC.md) 

# Simple Web Browser Project - Build It

In the last section we went over the basics of automating tasks within a project. Now we're going to delve a bit deeper into actually "building" an application.

Coding an app is all well and good, but there are things that can be done to optimize the running of an application in a production environment.

For example, every request for a different file from the server takes up resources. If we are using 10 CSS files and 10 JavaScript files in addition to the single HTML file that's a total of 21 hits to the server.

What if we were to take those 10 CSS files and combine them into a single CSS file and do the same thing with the 10 JavaScript files. Now we only have 3 hits to the server that needs to happen.

But in the process, we need to make sure that we don't destroy the original 21 files. So we need to do all the combining of files into a new file that exists somewhere else.

This is all done with various plugins for gulp ([gulp-concat](https://www.npmjs.com/package/gulp-concat)) and the fact that gulp can use streams. From time to time we also need to see how the gulp streams are being passed to modules such as concat, so we can use the [gulp-debug](https://www.npmjs.com/package/gulp-debug) plugin for that.

As with our previous section we need to create tasks for concatinating the CSS files as well as the JavaScript files and moving them over into a second folder and then using browser-sync from the last section to render the result to the browser. 

Also, we're adding new code to our config.js file to make handling of various folders, plugins, and variables easier when we use this application template for another project.

```
config.js    Contains all the common project configuration code.

gulp/tasks:
      _Test.js    display the config object <-- This is just for demonstration purposes
      build.js    Build the entire application by running individual processes [html, css]
      clean.js    Cleans out the ./build folder
      connect.js  Launches the application in a local server running in the ./build folder on a given port
      runit.js    Run the application, watch for any changes in any of the assets and rebuild as necessary [build, connect]
      watch.js    Watch for any changes in any of the assets. Rebuild/reload browser as needed [connect]   

gulp/tasks/src:
      css.js     Combine any CSS files into a single file and move combined file into the build folder
      html.js    Copy any HTML pages into the build folder     
```

Also, to ensure that there's consistency in the coding style I've included the [prettier](https://www.npmjs.com/package/prettier) package which is an "opinionated code formatter" which can be used to re-write your source code according to a consistent styling convention.

`npx prettier --write ./js/\*\*/*.js`

Will ensure all your JavaScript code will have a consistent coding style. (I typically run prettier before building any code modules for testing).

When you're done building and testing and you want to "trash" your resulting build prior to creating a new one, just run the "clean" task `gulp clean`.

Then to build and run your application, just call the `runIt` task (note that gulp tasks are Case Sensitive)

```gulp runIt```

Change anything in the source code and watch your task get rebuilt and re-run in the browser.