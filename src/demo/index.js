import Markdown from "markdown-it";
import MarkdownSlack from '../index.js';

const md = Markdown();
md.use(MarkdownSlack);

var result = md.renderInline(`*_t_*t*f***(http://www.twitter.com)*f*~_~me~_~ rulezz!`);
console.log(result);
document.getElementById("app").innerHTML = result;
