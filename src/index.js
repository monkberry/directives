import { Show, Hide } from './ShowHide';
import { FadeIn } from './FadeIn';
import EventListener from './EventListener';

export default {
  // Show and hide
  show: Show,
  hide: Hide,
  
  // Fade in
  fadeIn: FadeIn,

  // Event listeners

  onclick: class extends EventListener {
    constructor() {
      super('click');
    }
  },
  oncontextmenu: class extends EventListener {
    constructor() {
      super('contextmenu');
    }
  },
  ondblclick: class extends EventListener {
    constructor() {
      super('dblclick');
    }
  },
  onmousedown: class extends EventListener {
    constructor() {
      super('mousedown');
    }
  },
  onmouseenter: class extends EventListener {
    constructor() {
      super('mouseenter');
    }
  },
  onmouseleave: class extends EventListener {
    constructor() {
      super('mouseleave');
    }
  },
  onmousemove: class extends EventListener {
    constructor() {
      super('mousemove');
    }
  },
  onmouseover: class extends EventListener {
    constructor() {
      super('mouseover');
    }
  },
  onmouseout: class extends EventListener {
    constructor() {
      super('mouseout');
    }
  },
  onmouseup: class extends EventListener {
    constructor() {
      super('mouseup');
    }
  },
  onkeydown: class extends EventListener {
    constructor() {
      super('keydown');
    }
  },
  onkeypress: class extends EventListener {
    constructor() {
      super('keypress');
    }
  },
  onkeyup: class extends EventListener {
    constructor() {
      super('keyup');
    }
  },
  onload: class extends EventListener {
    constructor() {
      super('load');
    }
  },
  onresize: class extends EventListener {
    constructor() {
      super('resize');
    }
  },
  onscroll: class extends EventListener {
    constructor() {
      super('scroll');
    }
  },
  onblur: class extends EventListener {
    constructor() {
      super('blur');
    }
  },
  onchange: class extends EventListener {
    constructor() {
      super('change');
    }
  },
  onfocus: class extends EventListener {
    constructor() {
      super('focus');
    }
  },
  onfocusin: class extends EventListener {
    constructor() {
      super('focusin');
    }
  },
  onfocusout: class extends EventListener {
    constructor() {
      super('focusout');
    }
  },
  oninput: class extends EventListener {
    constructor() {
      super('input');
    }
  },
  onreset: class extends EventListener {
    constructor() {
      super('reset');
    }
  },
  onselect: class extends EventListener {
    constructor() {
      super('select');
    }
  },
  onsubmit: class extends EventListener {
    constructor() {
      super('submit');
    }
  },
  ondrag: class extends EventListener {
    constructor() {
      super('drag');
    }
  },
  ondragend: class extends EventListener {
    constructor() {
      super('dragend');
    }
  },
  ondragenter: class extends EventListener {
    constructor() {
      super('dragenter');
    }
  },
  ondragleave: class extends EventListener {
    constructor() {
      super('dragleave');
    }
  },
  ondragover: class extends EventListener {
    constructor() {
      super('dragover');
    }
  },
  ondragstart: class extends EventListener {
    constructor() {
      super('dragstart');
    }
  },
  ondrop: class extends EventListener {
    constructor() {
      super('drop');
    }
  },
  animationend: class extends EventListener {
    constructor() {
      super('animationend');
    }
  },
  animationiteration: class extends EventListener {
    constructor() {
      super('animationiteration');
    }
  },
  animationstart: class extends EventListener {
    constructor() {
      super('animationstart');
    }
  },
  transitionend: class extends EventListener {
    constructor() {
      super('webkitTransitionEnd');
    }
  },
  onmessage: class extends EventListener {
    constructor() {
      super('message');
    }
  },
  onopen: class extends EventListener {
    constructor() {
      super('open');
    }
  },
  onwheel: class extends EventListener {
    constructor() {
      super('wheel');
    }
  }
}
"use strict";
