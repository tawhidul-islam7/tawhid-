const computedStyles = window.getComputedStyle($0);
const data = {
  pointerEvents: computedStyles.getPropertyValue('pointer-events'),
  modalElement: document.querySelector('.modal.show') ? { exists: true, display: window.getComputedStyle(document.querySelector('.modal.show')).getPropertyValue('display') } : { exists: false }
};