export default {
  hiddenClassName: 'hidden',
  noInteractionClassName: 'no-interaction',
  uiContainerID: '#ui-container',

  get(query) {
    return document.querySelector(query);
  },

  show(element, showUI = true) {
    if (typeof element === 'string') {
      element = this.get(element);
    }

    element.classList.remove(this.hiddenClassName);

    if (showUI) {
      this.showUI();
    }

    return element;
  },

  hide(element, hideUI = true) {
    if (typeof element === 'string') {
      element = this.get(element);
    };

    element.classList.add(this.hiddenClassName);

    if (hideUI) {
      this.hideUI();
    }

    return element;
  },

  getUI() {
    return this.get(this.uiContainerID);
  },

  showUI() {
    this.show(this.uiContainerID, false);
  },

  hideUI() {
    this.show(this.uiContainerID, false);
  },

  enableUIInteraction() {
    this.getUI().classList.remove(this.noInteractionClassName);
  },

  disableUIInteraction() {
    this.getUI().classList.add(this.noInteractionClassName);
  }
}