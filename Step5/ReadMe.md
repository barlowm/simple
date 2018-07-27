[Simple Web Browser Project Build It](https://mwbarlow.com/simple/buildit) | [Documentation table of contents](TOC.md)

# Simple Web Browser Project - Some Stylistic Enhancements (lint, prettier)

I like to do as much static checking of my code to ensure I don't make any stupid mistakes, and I also like to make sure there's a consistency in my code (meaning if I use double quotes in one place they're used EVERY place).

The [eslint](https://www.npmjs.com/package/eslint) task takes care of the static checking and the [prettier](https://www.npmjs.com/package/prettier) task takes care of the stylistic checking and changing.

They can both be run very simply

```
> gulp lint
```

Runs a static lint checker on the source code. Reports of issues are generated and stored in the "reports" folder as HTML documents.

```
> gulp pretty
```

Runs "prettier" an Opinionated Code Formatter that will reformat all source code and docs (.md files) into a standardized format. This will overwrite your existing code with stylistic changes.