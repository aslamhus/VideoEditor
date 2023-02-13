class HTMLElement {
  constructor() {}

  initMutationObserver(element, container) {
    const observer = new MutationObserver((mutations) => {
      const hasBeenRendered = document.contains(element);
      if (hasBeenRendered) {
        this.onRender();
        observer.disconnect();
      }
    });
    observer.observe(container, {
      attributes: false,
      childList: true,
      characterData: false,
      subtree: true,
    });
  }

  render(element, container) {
    this.initMutationObserver(element, container);
  }

  onRender() {
    // method can be overridden by children
  }
}

export default HTMLElement;
