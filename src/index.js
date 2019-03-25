'use strict';
import emphasisSlack from './rules/emphasis';
import strikethroughSlack from './rules/strikethrough';

const markdownItSlack = (markdown) => {
    const emphasisRuleIndex = markdown.inline.ruler.__find__('emphasis');
    markdown.inline.ruler.__rules__[emphasisRuleIndex] = {
        name: 'emphasis',
        enabled: true,
        fn: emphasisSlack.tokenize,
        alt: [],
    }

    const emphasisRuleIndex2 = markdown.inline.ruler2.__find__('emphasis');
    markdown.inline.ruler2.__rules__[emphasisRuleIndex2] = {
        name: 'emphasis',
        enabled: true,
        fn: emphasisSlack.postProcess,
        alt: [],
    }

    const strikethroughRuleIndex = markdown.inline.ruler.__find__('strikethrough');
    markdown.inline.ruler.__rules__[strikethroughRuleIndex] = {
        name: 'strikethrough',
        enabled: true,
        fn: strikethroughSlack.tokenize,
        alt: [],
    }

    const strikethroughRuleIndex2 = markdown.inline.ruler2.__find__('strikethrough');
    markdown.inline.ruler2.__rules__[strikethroughRuleIndex2] = {
        name: 'strikethrough',
        enabled: true,
        fn: strikethroughSlack.postProcess,
        alt: [],
    }
}

export default markdownItSlack;
