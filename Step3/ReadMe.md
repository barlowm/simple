[Simple Web Browser Project Build It](https://mwbarlow.com/simple/buildit) | [Documentation table of contents](TOC.md) 

# Simple Web Browser Project - Build It

The last [section]() introduced a simple template based on the [HTML5 Boilerplate](). Now we go beyond a simple boilerplate and start introducing some new methodologies. 

Doing something more than a simple static page with some minor JavaScript should make use of a Build Process to do static checks of the code, unit tests, code concatenation and minification and using a local HTTP server process. There's many build tools out there but my preferred on is [gulp](). So that's what I'm introducing in this section.

There's also a [Front End Checklist](https://github.com/thedaviddias/Front-End-Checklist) that I like following that should be done before finally pushing an app into production (I like going through the checklist as I work through the app rather than at the end). 

Ans since we're talking about doing checks during the development process, one of my biggest pet peeves is accessibility, so there's a [checklist](https://webaim.org/standards/wcag/checklist) for that as well, along with a [tool](https://webaim.org/resources/webdev/) for checking the site for accessibility issues from your browser.

So let's go through the basic setup for automating tasks.

- [Node.JS](doc/NodeJS.md) 
- [Node Package Manager](doc/NPM.md) 
- [Gulp](doc/Gulp.md)

Before delving into adding new functionality to the application one of the key components we're going to be using is [Node.JS](https://nodejs.org/en/) so the first thing to do is download and install the "Recommended For Most Users" version of Node.JS from the website. It's a simple Windows .MSI install file so it's download and launch.

For the most part, that will be the only software "installation" that will need to be done. The remainder of the software installations will be done using the "Node Package Manager" or NPM (which is installed as part of the Node.JS installation)

The use of Gulp enables the creation of a process that can be used to consistently repeat any process necessary for the building and testing of an application. This is done through the use of individual "tasks".

With Gulp in place the list of available tasks can be displayed by running the "gulp" command at the command line.

```
>gulp
[11:00:48] Using gulpfile gulpfile.js
[11:00:48] Starting 'help'...

Usage
  gulp [TASK] [OPTIONS...]

Available tasks
  _test    display the config object <-- This is just for demonstration purposes
  build    Build the entire application by running individual processes [html, css]
  clean    Cleans out the ./build folder
  connect  Launches the application in a local server running in the ./build folder on a given port
  css      Combine any CSS files into a single file and move combined file into the build folder
  help     Display this help text.
  html     Copy any HTML pages into the build folder
  reload   Reloads the browsers after any changes as a result of a rebuild
  runIt    Run the application, watch for any changes in any of the assets and rebuild as necessary [connect]

[11:00:48] Finished 'help' after 5.22 ms
[11:00:48] Starting 'default'...
[11:00:48] Finished 'default' after 34 µs

>
```

Normally the individual tasks are put into a single gulpfile.js. But rather than manage one giant configuration file responsible  for creating multiple tasks, each task has been broken out into  its own file in gulp/tasks. Any files in that directory get  automatically required in the gulpfile.js

To add a new task, simply add a new task file that directory.  Based on [vigetlabs/gulp-starter repo in github ](https://github.com/vigetlabs/gulp-starter).

There's also a "help" task which is the default gulp task that lists all the individual tasks, and a description of each.