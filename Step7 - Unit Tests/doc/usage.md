[Simple Web Browser Project homepage](https://mwbarlow.com/simple) | [Documentation table of contents](TOC.md)

# Usage

The most basic usage of this template is to create a static site or simple app. Once you've downloaded or cloned the project, that process looks something like this:

1.  Set up the basic structure of the site.
2.  Add some content, style, and functionality.
3.  Run your site locally to see how it looks.
4.  Deploy your site.

Cool, right? _It is_. That said, the smart defaults, baseline elements, default attribute values and various other utilities that were provided by the original HTML5 Boilerplate can serve as the foundation for whatever you're interested in building.

Even the basic use-case of a simple static site can be enhanced by manipulating the code through an automated build process (to be seen in the next version). Use what you need (toss it in a blender if you need to) and discard the rest. This app (like the original HTML5 Boilerplate) is a starting point, not a destination.

## Basic structure

A basic web application site initially looks something like this:

```
.
├── css
│   ├── main.css
│   └── normalize.css
├── doc
├── img
├── js
│   ├── main.js
│   ├── plugins.js
│   └── vendor
│       ├── jquery.min.js
│       └── modernizr.min.js
├── .editorconfig
├── 404.html
├── browserconfig.xml
├── favicon.ico
├── icon.png
├── index.html
├── site.webmanifest
├── tile.png
└── tile-wide.png
```

What follows is a general overview of each major part and how to use them.

### css

This directory should contain all your project's CSS files. It includes some initial CSS to help get you started from a solid foundation. [About the CSS](css.md).

### doc

This directory contains all the documentation for this app. You can use it as the location and basis for your own project's documentation.

### js

This directory should contain all your project's JS files. Libraries, plugins, and custom code can all be included here. It includes some initial JS to help get you started. [About the JavaScript](js.md).

### 404.html

A helpful custom 404 to get you started.

### browserconfig.xml

This file contains all settings regarding custom tiles for IE11 and Edge. For more info on this topic, please refer to [MSDN](https://msdn.microsoft.com/library/dn455106.aspx).

### .editorconfig

The `.editorconfig` file is provided in order to encourage and help you and your team to maintain consistent coding styles between different editors and IDEs. [Read more about the `.editorconfig` file](misc.md#editorconfig).

### index.html

This is the default HTML skeleton that should form the basis of all pages on your site. Make sure that you update the URLs for the referenced CSS and JavaScript if you modify the directory structure at all.

### Icons

Replace the default `favicon.ico`, `tile.png`, `tile-wide.png` and Apple Touch Icon with your own.

If you want to use different Apple Touch Icons for different resolutions please refer to the [according documentation](extend.md#apple-touch-icons).
