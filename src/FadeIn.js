export class FadeIn {
  constructor() {
    this.node = null;
  }

  bind(node) {
    this.node = node;
  }

  unbind(node) {
    this.node = null;
  }

  update(duration = 300) {
    this.node.style.opacity = 0;
    this.node.style.transition = `opacity ${duration}ms`;
    window.requestAnimationFrame(() => this.node.style.opacity = 1);
  }
}
