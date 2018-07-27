[Simple Web Browser Project Build It](https://mwbarlow.com/simple/buildit) | [Documentation table of contents](TOC.md) 

# Simple Web Browser Project - Build It

The last [section]() introduced a simple template based on the [HTML5 Boilerplate](). Now we go beyond a simple boilerplate and start introducing some new methodologies. 

Doing something more than a simple static page with some minor JavaScript should make use of a Build Process to do static checks of the code, unit tests, code concatenation and minification and using a local HTTP server process. There's many build tools out there but my preferred on is [gulp](). So that's what I'm introducing in this section.

There's also a [Front End Checklist](https://github.com/thedaviddias/Front-End-Checklist) that I like following that should be done before finally pushing an app into production (I like going through the checklist as I work through the app rather than at the end). 

Ans since we're talking about doing checks during the development process, one of my biggest pet peeves is accessibility, so there's a [checklist](https://webaim.org/standards/wcag/checklist) for that as well, along with a [tool](https://webaim.org/resources/webdev/) for checking the site for accessibility issues from your browser.

## Node.JS

First thing to do is to install [Node.JS](http://nodejs.org) on your local machine and test it

```
$ which node
/usr/bin/node
$ node -v
6.10.3
```

## Node Package Manager

With Node.JS installed you now have access to the basic Package Manager which provides easy access to many modules for building both Browser and Server based applications.

**[NPM](https://npmjs.com)** - the [Node Package Manager](https://www.sitepoint.com/beginners-guide-node-package-manager/) makes use of a "package.json" file that lists the various modules needed for the application. 

You can create a simple package.json file using the `npm init` command which will prompt you for all the information it needs:

```
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (simple)
version: (1.0.0)
description: A simple Web Application
entry point: (index.js)
test command:
git repository:
keywords:
license: (ISC) MIT
About to write to D:\_Code\temp\simple\package.json:

{
  "name": "simple",
  "version": "1.0.0",
  "description": "A simple Web Application",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Mike Barlow <barlowm@gmail.com> (http://mwbarlow.com)",
  "license": "MIT"
}

Is this OK? (yes)

$
```

which can then be edited by a simple text editor to customize.

The installation of Node.JS also automatically installs the basic NPM application, but there's usually a newer version that should be installed separately. So what I usually do is to add a couple of "scripts" to the basic package.json file:

```
"scripts": {
    "setup": "npm install -g npm& npm install gulp-cli --save-dev& npm install gulp --save-dev& npm audit fix --force& touch gulpfile.js",
    "ver": "npm -v& gulp -v",
    "audit": "npm audit",
    "global": "npm list -g --depth 0",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Let's go over each one of these scripts:

The first one **setup** I'm going to break down into it's individual scripts (*Note the & at the end of each command. This allows for concatenation of several scripts in a single line, so you can run them with a single command.*)

    "setup": "
        npm install -g npm& <-- Install the current version of NPM globally, so it's accessible anywhere
        npm install gulp-cli --save-dev& <-- Install the gulp-cli as a developer dependency
        npm install gulp --save-dev& <-- Install gulp as a developer dependency
        npm audit fix --force& <-- Check to see if there were any deprecated modules in the install and fix them (forcefully) 
        touch gulpfile.js", <-- Create an empty gulpfile which will hold all of our build tasks
    
The next several scripts are more straight forward and are more for instructional purposes than really needed.

    "ver": "npm -v& gulp -v", <-- Check the versions of npm and gulp
    "global": "npm list -g --depth 0", <-- List all the top level global node modules
    "local": "npm list --depth 0", <-- List all the top level node modules for the current folder
Your package.json file should now resemble something like this:

```
{
  "name": "simple.2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  	"setup": "npm install -g npm& npm install gulp-cli --save-dev& npm install gulp --save-dev& npm audit fix --force& touch gulpfile.js",
    "ver": "npm -v& gulp -v",
    "global": "npm list -g --depth 0",
    "local": "npm list --depth 0",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Mike Barlow <barlowm@gmail.com> (http://mwbarlow.com)",
  "license": "MIT"
}
```



Next, run the setup. This will install the necessary basic modules (current version of NPM and Gulp):

```
$npm run setup

> simple.2@1.0.0 setup C:\Code\simple
> npm install -g npm& npm install gulp-cli --save-dev& npm install gulp --save-dev& npm audit fix --force& touch gulpfile.js

C:\npm\npx -> C:\npm\node_modules\npm\bin\npx-cli.js
C:\npm\npm -> C:\npm\node_modules\npm\bin\npm-cli.js

- npm@6.1.0
  updated 1 package in 23.169s
  npm WARN simple.2@1.0.0 No repository field.
- gulp-cli@2.0.1
  added 236 packages from 146 contributors and audited 2957 packages in 14.597s
  found 0 vulnerabilities

npm WARN deprecated gulp-util@3.0.8: gulp-util is deprecated - replace it, following the guidelines at https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5
npm WARN deprecated graceful-fs@3.0.11: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN simple.2@1.0.0 No repository field.

- gulp@3.9.1
  added 92 packages from 49 contributors and audited 4074 packages in 10.236s
  found 5 vulnerabilities (1 low, 4 high)
  run `npm audit fix` to fix them, or `npm audit` for details
  npm WARN using --force I sure hope you know what you are doing.

> fsevents@1.2.4 install D:\_Code\simple\Simple2\node_modules\fsevents
> node install

npm WARN simple.2@1.0.0 No repository field.

- gulp@4.0.0
  added 134 packages from 82 contributors, removed 71 packages and updated 14 packages in 12.635s
  fixed 5 of 5 vulnerabilities in 4074 scanned packages
  1 package update for 5 vulns involved breaking changes
  (installed due to `--force` option)

C:\Code\simple
```

Note that we had several warnings output:

```npm WARN simple.2@1.0.0 No repository field.```

simply informs us that we don't have a repository specified for this application.

The other warnings warn of deprecated modules tell us that some modules that were installed were old modules that potentially had problems. The `npm audit fix` was able to resolve those issues by installing the current versions of the deprecated modules, so no worries there either (I could have run the `npm audit` function before the fix to see what the errors were, but I'll leave that as an exercise if you want to try it out with another version of the code.)

Now running the `ver` script we can see the versions of npm and gulp that are installed:

```
$npm run ver

> simple.2@1.0.0 ver D:\_Code\simple\Simple2
> npm -v& gulp -v

6.1.0
[15:10:43] CLI version 2.0.1
[15:10:43] Local version 4.0.0

$
```

And looking at our package.json file again we see that there's another section added:

```
  "devDependencies": {
    "gulp": "^4.0.0",
    "gulp-cli": "^2.0.1"
  }
```

Showing that the gulp and gulp-cli modules have been installed and listed as devDependencies. Once we finish building our package.json file with all the dependencies, we only have to copy the basic code over to another location and run `npm install` and all the dependent modules will be installed in their proper places and version upgraded to the current as necessary so we don't have to worry about what modules are needed for an application after it's been developed and we want to move it over to another location.

## Gulp

**[Gulp](https://gulpjs.com/)** is a tool for automating the process of "building" an application and performing any number of individual tasks automatically. So now that we have gulp installed from the previous steps let's add some functionality. 

Typically all the tasks that would need to be run for an application are created in a single gulpfile.js file, but that can make the gulpfile itself very large and cumbersome. But there's an alternative. Create a series of individual task files and then point to them from within the gulpfile itself. This is done with the  [require-dir](https://www.npmjs.com/package/require-dir) node module using an example from [vigetlabs/gulp-starter](https://github.com/vigetlabs/gulp-starter)

So first we need to install the module:

```npm install require-dir --save-dev```

Then we create our gulpfile.js file

```'use strict';
'use strict';

/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulp/tasks. Any files in that directory get
  automatically required below.

  To add a new task, simply add a new task file that directory.
  gulp/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.

  Based on: vigetlabs/gulp-starter repo in github - https://github.com/vigetlabs/gulp-starter
*/

let requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
let theDirs = requireDir('./gulp/tasks', { recurse: true });
const $ = require('./gulp/config.js');
```

Individual task files are added to the `gulp/tasks` folder and a config.js file needs to be created as well

