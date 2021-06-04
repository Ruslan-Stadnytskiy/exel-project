
class Dom {
  constructor(selec) {
    this.$el = typeof selec === 'string'?
        document.querySelector(selec):selec;
  }

  html(html) {
    if (typeof html ==='string') {
      this.$el.innerHTML = html;
      return this
    }
    return this.$el.outerHTML.trim()
  }
  clear() {
    this.html('');
    return this
  }
  append(node) {
    if (Element.prototype.append) {
      this.$el.append(node.$el)
    } else {
      this.$el.appendChild(node.$el)
    }
  }
}


export function $(selec) {
  return new Dom(selec);
}

$.create = (tagName, classes= '')=>{
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return el;
};
