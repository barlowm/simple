[Simple Web Browser Project Build It](https://mwbarlow.com/simple/buildit) | [Documentation table of contents](TOC.md) 

# Gulp

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

