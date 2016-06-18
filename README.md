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

## Show and hide

With this two directives you can easily show/hide don nodes. But how it's different from `{% if %}`? 
Then using if expression, node completely removes from document. Show/hide directives do not remove node from document, 
but only change `display` style.
     
```twig
<div :show={{ visible }}>
    ...
</div>
```

```twig
<div :hide={{ visible }}>
    ...
</div>
```

## FadeIn

This directive allow to show a little opacity animation using CSS transition on nodes what just appears in document.
For example if you want to show each item of for with fading effect.

```twig
{% for array %}
    <li :fadeIn>{{ text }}</li>
{% endfor %}
```

Each of element will be shown with fading effect. You can also specify duration in ms.

```twig
{% if visible %}
    <div :fadeIn="1000">
        ...
    </div>
{% endif %}
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