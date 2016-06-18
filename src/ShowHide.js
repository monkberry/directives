export class Show {
  constructor() {
    this.node = null;
  }

  bind(node) {
    this.node = node;
  }

  unbind(node) {
    this.node = null;
  }

  update(value) {
    this.node.style.display = value ? '' : 'none';
  }
}

export class Hide {
  constructor() {
    this.node = null;
  }

  bind(node) {
    this.node = node;
  }

  unbind(node) {
    this.node = null;
  }

  update(value) {
    this.node.style.display = !value ? '' : 'none';
  }
}
