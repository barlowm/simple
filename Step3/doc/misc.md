[Simple Web Browser Project homepage](https://mwbarlow.com/simple) | [Documentation table of contents](TOC.md) 

# Miscellaneous

* [.editorconfig](#editorconfig)
* [.gitattributes](#gitattributes)
* [.gitignore](#gitignore)
* [package.json](#package.json)
* [package-lock.json](#package-lock.json)
* [browserconfig.xml](#browserconfigxml)
* [site.webmanifest](#site.webmanifest)
* [Friendly Error Pages](#Friendly Error Pages)

--

## .editorconfig

The `.editorconfig` file is provided in order to encourage and help you and your team define and maintain consistent coding styles between different editors and IDEs.

By default, `.editorconfig` includes some basic [properties](http://editorconfig.org/#supported-properties) that reflect the coding styles from the files provided by default, but you can easily change them to better suit your needs.

In order for your editor/IDE to apply the [properties](http://editorconfig.org/#supported-properties) from the `.editorconfig` file, you may need to [install a plugin]( http://editorconfig.org/#download) (Many editors and IDE's support EditorConfig natively, my preferred editor, Sublime Text, requires a  plugin).

__N.B.__ It is recommended to configure your server to block access to `.editorconfig` files, as they can disclose sensitive information!

For more details, please refer to the [EditorConfig project](http://editorconfig.org/).


## .gitattributes

## .gitignore

Since this project is maintained in Github, it also includes a basic  `.gitignore` file. This is used to avoid certain project-level files and directories from
being kept under source control. Different development-environments will
benefit from different collections of ignores.

OS-specific and editor-specific files should be ignored using a "global
ignore" that applies to all repositories on your system.

For example, add the following to your `~/.gitconfig`, where the `.gitignore`
in your HOME directory contains the files and directories you'd like to
globally ignore:

```gitignore
[core]
    excludesfile = ~/.gitignore
```

* More on global ignores: https://help.github.com/articles/ignoring-files/
* Comprehensive set of ignores on GitHub: https://github.com/github/gitignore

## package.json

A [package.json](https://docs.npmjs.com/files/package.json) file acts as a standardized central repository for general information about the application (it acts as a manifest file if you will) as well as the modules which need to be included for both developing and testing the application as well as any modules needed for the application itself to work. The package.json file is different than the browserconfig or site.webmanifest in that it describes the applications components rather than how it should appear to the browser. There's also a good document on the [basics of package.json in node.js and npm](https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/).

A package.json shell can be created from the command line by running 

```
$ npm init
```

##package-lock.json

A [package-lock.json](A [package.json](https://docs.npmjs.com/files/package.json) file acts as a ) file acts as a manifestation of the manifest, in that it describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates. It is an automatically generated file and should be committed into Source Repositories but should not be modified by hand.


## browserconfig.xml

While not specifically needed for this project, since it's intended to be a simple project more for demonstration than a significant working application, I thought I'd retain the HTML5Boilerplate browserconfig file. The `browserconfig.xml` file was introduced in Internet Explorer 11 and lets you define advanced web applications tiles, is specific for Windows 8.1 and is used to customize the tile displayed when users pin your site to the Windows 8.1 start screen. In there you can define custom tile colors, custom images or even [live tiles](https://msdn.microsoft.com/library/dn455106.aspx#CreatingLiveTiles).

By default, the file points to 2 placeholder tile images:

* `tile.png` (558x558px): used for `Small`, `Medium` and `Large` tiles.
  This image resizes automatically when necessary.
* `tile-wide.png` (558x270px): user for `Wide` tiles.

Notice that IE11 uses the same images when adding a site to the `favorites`.

For more in-depth information about the `browserconfig.xml` file, please
see [MSDN](https://msdn.microsoft.com/library/dn320426.aspx) or this article on [browserconfig](https://danaleegibson.com/what-is-the-browserconfig-dot-xml/).



## site.webmanifest

Similar to the browserconfig file, the [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) is a simple configuration file (JSON in the case of the App Manifest as opposed to XML for the browserconfig) that tells the browser about your web application and how it should behave when 'installed' on the users mobile device or desktop. Having a manifest is required by Chrome to show the [Add to Home Screen prompt](https://developers.google.com/web/fundamentals/app-install-banners/).

One additional advantage the App Manifest has over browserconfig (aside from JSON vs XML) is that it is a proposed standard supported and defined by the W3C ([World Wide Web Consortium](https://www.w3.org/TR/appmanifest/)), so it will (eventually) be supported by more than just MS-IE 11 on Windows 8.1

A typical manifest file includes information about the app `name`, `icons` it should use, the `start_url` it should start at when launched, and more.

A bit of [history](https://www.w3.org/TR/appmanifest/) on the App Manifest can be found on the html5doctor site by the original authors of the specification and coders of the core functionality



## Friendly Error Pages

If you were to look into the [404.html](494.html) error page you might wonder why it was so large. Well, Microsoft in their "wisdom" decided that in order for IE to display a "Friendly Error" page, that page must be a minimum size. If it's not then IE will simply display it's own canned Friendly HTTP Error page instead of the server’s default response. However, should you choose to create your own error page that does not meet [Microsoft's guidelines](https://blogs.msdn.microsoft.com/ieinternals/2010/08/18/friendly-http-error-pages/), then IE will STILL display it's own Friendly HTTP Error page instead of the one you want it to display.

