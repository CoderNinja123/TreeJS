function getClasses(ele: Element) {
  var classes: string[] = [];
  ele.classList.forEach((className: string) => {
    classes.push(className);
  });

  return classes;
}

function addClass(ele: Element, className: string) {
  ele.classList.add(className.split(" ").join("-"));
}

function addClasses(ele: Element, classNames: string[]) {
  classNames.forEach((cl: string) => {
    addClass(ele, cl);
  });
}

function removeClass(ele: Element, className: string) {
  ele.classList.remove(className);
}

function removeClasses(ele: Element, classNames: string[]) {
  classNames.forEach((cl: string) => {
    removeClass(ele, cl);
  });
}

function toggleClass(ele: Element, className: string) {
  ele.classList.toggle(className);
}

function toggleClasses(ele: Element, classNames: string[]) {
  classNames.forEach((cl: string) => {
    toggleClass(ele, cl);
  });
}

function containsClass(ele: Element, className: string) {
  return ele.classList.contains(className);
}

function containtsClasses(ele: Element, classNames: string[]) {
  for (let i = 0; i < classNames.length; i++) {
    let cl = classNames[i];
    if (!containsClass(ele, cl)) {
      return false;
    }
  }
  return true;
}

function matches(ele: Element, selector: string) {
  return (
    ele.matches ||
    ele.matchesSelector ||
    ele.msMatchesSelector ||
    ele.mozMatchesSelector ||
    ele.webkitMatchesSelector ||
    ele.oMatchesSelector
  ).call(ele, selector);
}

// use this polyfill:
// https://polyfill.io/v3/polyfill.min.js?features=document.querySelector
function select(selector: string) {
  return document.querySelectorAll(selector) || false;
}

function inViweport(ele: Element) {
  var rect = ele.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function setId(ele: Element, id: string) {
  ele.setAttribute("id", id);
}

function setIds(ele: Element, ids: string[]) {
  setId(ele, ids[0]);
  if (ids.length > 1) addIds(ele, ids.slice(1));
}

function addId(ele: Element, id: string) {
  var ids = String(ele.id).concat(id);
  setId(ele, ids);
}

function addIds(ele: Element, ids: string[]) {
  ids.forEach((id: string) => {
    addId(ele, " ".concat(id));
  });
}

function getIds(ele: Element) {
  var ids: string[] = [];
  eval(
    `["` +
      String(ele.id).split(" ").join(`", "`) +
      `"].forEach((idName) => {ids.push(idName)})`
  );
  return ids;
}

function removeId(ele: Element, id: string) {
  var ids: string = "";
  getIds(ele).forEach((exId: string) => {
    if (exId != String(id)) {
      ids = ids.concat(exId);
    }
  });
  setId(ele, ids);
}

function removeIds(ele: Element, ids: string[]) {
  ids.forEach((id: string) => {
    removeId(ele, id);
  });
}

function containsId(ele: Element, id: string) {
  var ids: string[] = getIds(ele);
  for (let i = 0; i < ids.length; i++) {
    let exId = ids[i];
    if (id === exId) {
      return true;
    }
  }
  return false;
}

function containsIds(ele: Element, ids: string[]) {
  for (let i = 0; i < ids.length; i++) {
    let id = ids[i];
    if (!containsId(ele, id)) {
      return false;
    }
  }
  return true;
}

function toggleId(ele: Element, id: string) {
  var cId: boolean = containsId(ele, id);
  if (cId) {
    removeId(ele, id);
  } else {
    addId(ele, " ".concat(id));
  }
}

function toggleIds(ele: Element, ids: string[]) {
  ids.forEach((id: string) => {
    toggleId(ele, id);
  });
}

function setAttr(ele: Element, attr: string, val: string) {
  ele.setAttribute(attr.split(" ").join("-"), val);
}

function setAttrs(ele: Element, attrs: string[], vals: string[]) {
  for (let i = 0; i < attrs.length; i++) {
    setAttr(ele, attrs[i], vals[i]);
  }
}

function getAttr(ele: Element, attr: string) {
  return ele.getAttribute(attr) || false;
}

function removeAttr(ele: Element, attr: string) {
  ele.removeAttribute(attr);
}

function removeAttrs(ele: Element, attrs: string[]) {
  attrs.forEach((attr: string) => {
    removeAttr(ele, attr);
  });
}

function toggleAttr(ele: Element, attr: string) {
  ele.toggleAttribute(attr);
}

function toggleAttrs(ele: Element, attrs: string[]) {
  attrs.forEach((attr: string) => {
    toggleAttr(ele, attr);
  });
}

function containtsAttr(ele: Element, attr: string) {
  var attrs = getAttr(ele, attr);
  if (attrs) return true;
  else return false;
}

function containtsAttrs(ele: Element, attrs: string[]) {
  for (let i = 0; i < attrs.length; i++) {
    let attr: string = attrs[i];
    if (!containtsAttr(ele, attr)) {
      return false;
    }
  }
  return true;
}

function changeHTML(ele: Element, innerHTML: string) {
  ele.innerHTML = innerHTML;
}

function getHTML(ele: Element) {
  return ele.innerHTML;
}

function replaceEleAsChild(ele: Element, parentEle: Element) {
  document.removeChild(ele);
  parentEle.appendChild(ele);
}

function newElement(
  type: string,
  options: {
    ids?: string[];
    attrNames?: string[];
    attrVals?: string[];
    classes?: string[];
    innerHTML?: string;
    appendTo?: Element
  },
) {
  var ele = document.createElement(type);
  if (options) {
    var { ids, attrNames, attrVals, classes, innerHTML, appendTo } = options;

    if (ids) {
      setIds(ele, ids);
    }

    if (attrNames && attrVals) {
      setAttrs(ele, attrNames, attrVals);
    }

    if (classes) {
      addClasses(ele, classes);
    }

    if (innerHTML) {
      changeHTML(ele, innerHTML);
    }
  }

  if (appendTo) appendTo.appendChild(ele);
  else document.body.appendChild(ele);
}

function attachEvent(
  ele: Element,
  event: string,
  exec: VoidFunction,
  bubble: boolean = true
) {
  ele.addEventListener(event, exec, !bubble);
}

function detachEvent(
  ele: Element,
  event: string,
  functionCalled: VoidFunction,
  bubble: boolean = true
) {
  ele.removeEventListener(event, functionCalled, !bubble);
}

function addCSS(ele: Element, css: {}) {
  for (let propName in css) {
    if (css.hasOwnProperty(propName)) {
      let propVal = css[propName];
      // @ts-ignore
      ele.style[propName] = propVal;
    }
  }
}

function addSiblingAfter(ele: Element, sibling: String) {
  ele.insertAdjacentHTML("afterend", sibling.toString());
}

function addSiblingBefore(ele: Element, sibling: String) {
  ele.insertAdjacentHTML("beforebegin", sibling.toString());
}

function trigger(ele: Element, event: string) {
  if ("createEvent" in document) {
    // modern browsers, IE9+
    var e = document.createEvent("HTMLEvents");
    e.initEvent(event, false, true);
    ele.dispatchEvent(e);
  } else {
    // IE 8
    // @ts-ignore
    var e = document.createEventObject();
    // @ts-ignore
    e.eventType = event;
    // @ts-ignore
    ele.fireEvent("on" + e.eventType, e);
  }
}

function loaded() {
  console.log("TreeJS Loaded Successfully!");
}
