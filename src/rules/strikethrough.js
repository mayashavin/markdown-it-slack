'use strict';

const strikethroughSlack = {
    tokenize: (state, silent) => {
        const marker = state.src.charCodeAt(state.pos);
  
        if (silent || marker !== 0x7E/* ~ */) { return false; }
    
        const scanned = state.scanDelims(state.pos, true);
        const ch = String.fromCharCode(marker);
    
        // if (len < 2) { return false; }
    
        // if (len % 2) {
        // token         = state.push('text', '', 0);
        // token.content = ch;
        // len--;
        // }
    
        for (let i = 0; i < scanned.length; i++) {
            const token = state.push('text', '', 0);
            token.content = ch;
    
            state.delimiters.push({
                marker: marker,
                jump:   i,
                token:  state.tokens.length - 1,
                level:  state.level,
                end:    -1,
                open:   scanned.can_open,
                close:  scanned.can_close
            });
        }
    
        state.pos += scanned.length;
    
        return true;
    },
    postProcess: (state) => {
        const loneMarkers = [];
        const delimiters = state.delimiters;
  
        for (let i = 0; i < delimiters.length; i++) {
            const startDelim = delimiters[i];
    
            if (startDelim.marker === 0x7E && startDelim.end !== -1) {    
                const endDelim = delimiters[startDelim.end];
            
                const tokenStart         = state.tokens[startDelim.token];
                tokenStart.type    = 's_open';
                tokenStart.tag     = 's';
                tokenStart.nesting = 1;
                tokenStart.markup  = '~';
                tokenStart.content = '';
            
                const tokenEnd         = state.tokens[endDelim.token];
                tokenEnd.type    = 's_close';
                tokenEnd.tag     = 's';
                tokenEnd.nesting = -1;
                tokenEnd.markup  = '~';
                tokenEnd.content = '';
            
                if (state.tokens[endDelim.token - 1].type === 'text' &&
                    state.tokens[endDelim.token - 1].content === '~') {
            
                    loneMarkers.push(endDelim.token - 1);
                }
            }

        }
  
    // If a marker sequence has an odd number of characters, it's splitted
    // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
    // start of the sequence.
    //
    // So, we have to move all those markers after subsequent s_close tags.
    //
    // while (loneMarkers.length) {
    //   const i = loneMarkers.pop();
    //   const j = i + 1;
  
    //   while (j < state.tokens.length && state.tokens[j].type === 's_close') {
    //     j++;
    //   }
  
    //   j--;
  
    //   if (i !== j) {
    //     token = state.tokens[j];
    //     state.tokens[j] = state.tokens[i];
    //     state.tokens[i] = token;
    //   }
    // }
    }
}

export default strikethroughSlack;
