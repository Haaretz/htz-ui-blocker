/**
 *  HTZ UI BLOCKER
 *
 * A module for blocking mouse interaction with a
 * container's content.
 *
 * @module htz-ui-blocker
 * @license MIT
 */

import dispatchEvent from 'htz-dispatch-event';

/**
 * Append a ui-blocking element to a container, which is automatically
 * removed when clicked.
 *
 * @param {HTMLElement} container - The container to block mouse interaction with.
 * @param {String} [blockingElClass] - Classes to attach to the appended blocking element.
 * @param {String}
 *    [blockingElStyle="bottom: 0; left: 0; position: absolute; right: 0; top: 0; z-index: 1;"] -
 *    Inline styles attached to the appended blocking element.
 *
 * @fires module:htz-ui-blocker~ui-blocker:block
 * @fires module:htz-ui-blocker~ui-blocker:unblock
 *
 * @returns {module:htz-ui-blocker#API}
 */
export default function blockUi(
  container,
  blockingElClass,
  blockingElStyle = 'bottom: 0;' +
    'cursor: pointer;' +
    'left: 0;' +
    'position: absolute;' +
    'right: 0;' +
    'top: 0;' +
    'z-index: 1;'
) {
  let blocked = false;

  const blockingEl = document.createElement('div');
  const isBlocked = () => blocked;

  block();

  /**
   * Block container
   *
   * @callback module:htz-ui-blocker#block
   *
   * @fires module:htz-ui-blocker~ui-blocker:block
   */
  function block() {
    if (!blocked) {
      if (blockingElClass) blockingEl.setAttribute('class', blockingElClass);

      if (blockingElStyle) blockingEl.setAttribute('style', blockingElStyle);

      blockingEl.classList.add('js-block-ui__blocking-el');

      blockingEl.addEventListener('click', unblock);

      if (
        window.getComputedStyle(container) &&
        window.getComputedStyle(container).position === 'static'
      ) {
        container.style.position = 'relative'; // eslint-disable-line no-param-reassign
      }

      container.appendChild(blockingEl);
      blocked = true;

      /**
       * An event fired whenever `container` is blocked.
       *
       * @event module:htz-ui-blocker~ui-blocker:block
       *
       * @type {Object}
       */
      dispatchEvent(container, 'ui-blocker:block');
    }
  }

  /**
   * Unblock element
   *
   * @callback module:htz-ui-blocker#unblock
   *
   * @fires module:htz-ui-blocker~ui-blocker:unblock
   */
  function unblock() {
    if (blocked) {
      container.removeChild(blockingEl);
      blocked = false;

      /**
       * An event fired whenever `container` is unblocked.
       *
       * @event module:htz-ui-blocker~ui-blocker:unblock
       *
       * @type {Object}
       */
      dispatchEvent(container, 'ui-blocker:unblock');
    }
  }

  /**
   * @typedef module:htz-ui-blocker#API
   *
   * @type {Object}
   *
   * @prop {HTMLElement} container - The blocked container.
   * @prop {module:htz-ui-blocker#block} Block container.
   * @prop {function} isBlocked - Returns `true` if `container` is currently blocked,
   *    `false` otherwise.
   * @prop {module:htz-ui-blocker#unblock} Unblock container.
   */
  return {
    block,
    container,
    isBlocked,
    unblock,
  };
}
