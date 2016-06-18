# Monkberry directives

```bash
npm install monkberry-directives --save
```

## Usage

Import directives and pass in to render function.

```js
import Monkberry from 'monkberry';
import App from './app.monk';
import directives from 'monkberry-directives';

const view = Monkberry.render(Component, document.body, {directives});
```

## Event listeners

List of supported event listeners:

Example of usage

```twig
<form :onsubmit={{ this.handleSubmit }}>
    <input type="text" value="">
    <button type="submit">Send</button>
</form>
```

and component

```js
import Template from './template.monk';

export default class Component extends Template {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    ...    
  }
}
```

List of supported listeners

```
:onclick, :oncontextmenu, :ondblclick, :onmousedown, :onmouseenter, :onmouseleave, :onmousemove, :onmouseover, :onmouseout, :onmouseup, :onkeydown, :onkeypress, :onkeyup, :onload, :onresize, :onscroll, :onblur, :onchange, :onfocus, :onfocusin, :onfocusout, :oninput, :onreset, :onselect, :onsubmit, :ondrag, :ondragend, :ondragenter, :ondragleave, :ondragover, :ondragstart, :ondrop, :animationend, :animationiteration, :animationstart, :transitionend, :onmessage, :onopen, :onwheel
```