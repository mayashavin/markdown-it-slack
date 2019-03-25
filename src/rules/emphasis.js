'use strict';

const setEmphasisToken = (originalToken = {}, isOpen, isBold, markup) => {
    return {
        ...originalToken,
        type: isBold ? `strong_${isOpen ? 'open' : 'close'}` : `em_${isOpen ? 'open' : 'close'}`,
        tag: isBold ? 'strong' : 'em',
        nesting: isOpen? 1 : -1,
        markup: markup,
        content: '',
    }
}

const emphasisSlack = {
    tokenize: (state, silent) => {
        const marker = state.src.charCodeAt(state.pos);

        if (silent || (marker !== 0x2A && marker !== 0x5F)) { return false; }

        const scanned = state.scanDelims(state.pos, marker === 0x2A);
        console.log('#####');
        console.log(scanned.length);

        for (let i = 0; i < scanned.length; i++) {
            console.log('#####');
            const token = state.push('text', '', 0);
            token.content = String.fromCharCode(marker);

            state.delimiters.push({
                marker: marker,
                length: scanned.length,
                jump: i,
                token: state.tokens.length - 1,
                level: state.level,
                end: -1,
                open: scanned.can_open,
                close: scanned.can_close
            });
        }

        state.pos += scanned.length;

        return true;
    },
    postProcess: (state) => {
        const delimiters = state.delimiters;

        for (let i = delimiters.length - 1; i >= 0; i--) {
            const startDelim = delimiters[i];

            if ((startDelim.marker === 0x2A || startDelim.marker === 0x5F) && startDelim.end !== -1) {
                const endDelim = delimiters[startDelim.end];
                const isStrong = startDelim.marker === 0x2A;

                const ch = String.fromCharCode(startDelim.marker);

                state.tokens[startDelim.token] = setEmphasisToken(state.tokens[startDelim.token], true, isStrong, ch);
                state.tokens[endDelim.token] = setEmphasisToken(state.tokens[endDelim.token], false, isStrong, ch);
            }
        }
    }
}

export default emphasisSlack;
