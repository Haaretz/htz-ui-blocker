/**
 *  HTZ UI BLOCKER
 *
 * A module for blocking mouse interaction with a
 * container's content.
 *
 * @module htz-ui-blocker
 * @license MIT
 */

/**
 * Append a ui-blocking element to a container, which is automatically
 * removed when clicked.
 *
 * @param {HTMLElement} container - The container to block mouse interaction with.
 * @param {String} [blockingElClass] - Classes to attach to the appended blocking element.
 * @param {String}
 *    [blockingElStyle="bottom: 0; left: 0; position: absolute; right: 0; top: 0; z-index: 1;"] -
 *    Inline styles attached to the appended blocking element.
 * @returns {HTMLElement} - The blocked container.
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
  const blockingEl = document.createElement('div');

  blockingEl.setAttribute('style', blockingElStyle);
  blockingEl.addEventListener('click', (e) => {
    container.removeChild(blockingEl);
  });
  if (blockingElClass) blockingEl.setAttribute('class', blockingElClass);

  if (
    window.getComputedStyle(container) &&
    window.getComputedStyle(container).position === 'static'
  ) {
    container.style.position = 'relative'; // eslint-disable-line no-param-reassign
  }
  container.appendChild(blockingEl);

  return container;
}
