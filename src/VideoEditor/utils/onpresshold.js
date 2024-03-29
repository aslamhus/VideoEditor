/**
 *
 * @param {HTMLElement} el - the target element
 * @param {Function} callback - the callback fired when the presshold event occurs
 * @param {Object} options - { holdDuration : <number> } in millseconds
 */
export const initPresHoldEvent = (el, callback, options = { holdDuration: 50 }) => {
  const { holdDuration } = options;
  let originalPointerEvent;
  let count = 0;
  let interval = null;

  el.addEventListener('presshold', callback, true);
  const handlePress = (event) => {
    const { target } = event;
    // do not register press if the target is not the target element or a descendant of the target element
    const isTarget = target.closest(`.${el.className}`) || target.className == el.className;
    if (!isTarget) {
      return;
    }
    originalPointerEvent = event;
    if (!interval) {
      interval = setInterval(timer, 1);
    }
    event.preventDefault();
  };

  const handleEndPress = (event) => {
    clearInterval(interval);
    interval = null;
    count = 0;
  };

  const timer = (event) => {
    if (count >= holdDuration) {
      callback(originalPointerEvent);
      handleEndPress();
    }
    // console.log('count', count);
    count++;
  };

  document.addEventListener('mousedown', handlePress, true);
  document.addEventListener('touchstart', handlePress, true);
  document.addEventListener('mouseup', handleEndPress, true);
  document.addEventListener('touchend', handleEndPress, false);

  const removeEventListeners = () => {
    document.removeEventListener('mousedown', handlePress, true);
    document.removeEventListener('touchstart', handlePress, true);
    document.removeEventListener('mouseup', handleEndPress, true);
    document.removeEventListener('touchend', handleEndPress, false);
  };
  return { removeEvent: removeEventListeners };
};
