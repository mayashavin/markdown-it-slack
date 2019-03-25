# markdown-it-slack [![NPM version][npm-image]][npm-url]
---

[![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url] [![devDependency Status][devdepstat-image]][devdepstat-url]

🚀 This plugin overrides default Github style to Slack style for syntax parser of the following:

1. **Bold** (Using * bold * for strong emphasis instead of ** bold ** or __ bold __)

2. _Italic_ (Using _ italic _ for emphasis instead of * bold *)

3. ~~Strikethrough~~ (Using ~ strikethrough ~ instead of ~~ strikethrough ~~)


# How to install 🛠️
---

```
npm install markdown-it-slack --save
yarn add markdown-it-slack
```


#How to use 👨‍💻
---

###Using `import` 

```js
import Markdown from "markdown-it";
import MarkdownSlack from 'markdown-it-slack';

const md = Markdown();
md.use(MarkdownSlack);

md.renderInline(`*This is me in bold*, and he is in _italic_. Don't ~strikethrough~ me!`)
```


###Using `require`

```js
const md = require('markdown-it')();
md.use(require('markdown-it-slack'));

md.renderInline(`*This is me in bold*, and he is in _italic_. Don't ~strikethrough~ me!`)

```

#Coming soon 🏹 👩‍🔬
---

* Customize which syntax to override.

* Optimization for tag rendering.

* Test coverage.