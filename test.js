/* eslint-disable import/no-unresolved */
import blockUi from 'htz-ui-blocker';
/* eslint-enable import/no-unresolved */

const blockedEls = Array.from(document.getElementsByClassName('js-block-ui'));

blockedEls.forEach((elem) => { blockUi(elem); });

export default blockedEls;
