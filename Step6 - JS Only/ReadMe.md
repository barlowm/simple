[

Simple Web Browser Project Build It](https://mwbarlow.com/simple/buildit) | [Documentation table of contents](TOC.md)

# Simple Web Browser Project - Back to Something "Simpler"

Let's suppose that you don't need an entire Web application. Only something that is simple JavaScript.

Well then this template will work as well and a number of things can be eliminated (like any HTML, CSS, or Image files, and the gulp tasks and node_modules related to them).

Once again, if you're just starting with this module in a clean environment, that has Node.js already installed, then all you need to get the code working is, from the command line prompt do a

```
> npm run setup
> gulp build
> cd build\js <-- This is the Script Destination folder (ie $.script_dest)
> node main <-- This is the name of the compiled JS program
```

and the app here will be up and running in your command window

Some additional tasks that can be run and the results

```
> gulp lint
```

Run a static lint checker on the source code. Reports of issues are generated and stored in the "reports" folder as HTML documents.

```
> gulp pretty
```

Runs "prettier" an Opinionated Code Formatter that will reformat all source code and docs (.md files) into a standardized format. This will overwrite your existing code with stylistic changes.

```
> gulp clean
```

Cleans out all build files in preparation to a total rebuild of the application

```
> gulp
```

The default task will list all the tasks with help info on each task.

To build the simple Node.JS project

```
> gulp JS
```

Then to run it

```
> node build\js\main
```





