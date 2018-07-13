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

