# slack-markdown-it

#### 🚀 This plugin overrides default **Github style** to [**Slack style**](https://get.slack.help/hc/en-us/articles/202288908-Format-your-messages) for syntax parser of the following:

1. **Bold** (Using * bold * for strong emphasis instead of ** bold ** or __ bold __)

2. _Italic_ (Using _ italic _ for emphasis instead of * bold *)

3. ~~Strikethrough~~ (Using ~ strikethrough ~ instead of ~~ strikethrough ~~)


Demo: [https://codesandbox.io/embed/j2y24r3yq9](https://codesandbox.io/embed/j2y24r3yq9)

## How to install 🛠️

1. It's written as plugin for [Markdown](https://github.com/markdown-it/markdown-it) so it requires `markdown-it` to be installed.

```
npm install markdown-it --save
yarn add markdown-it
```


2. Install using `npm` or `yarn`

```
npm install markdown-it-slack --save
yarn add markdown-it-slack
```




## How to use 👨‍💻

### Using `import` 

```js
import Markdown from "markdown-it";
import MarkdownSlack from 'slack-markdown-it';

const md = Markdown();
md.use(MarkdownSlack);

md.renderInline(`*This is me in bold*, and he is in _italic_. Don't ~strikethrough~ me!`)
```


### Using `require`

```js
const md = require('markdown-it')();
md.use(require('slack-markdown-it'));

md.renderInline(`*This is me in bold*, and he is in _italic_. Don't ~strikethrough~ me!`)

```




## Coming soon 🏹 👩‍🔬

* Customize which syntax to override.

* Optimization for tag rendering.

* Test coverage.


## License

[MIT](https://github.com/mayashavin/markdown-it-slack/blob/master/LICENSE)
