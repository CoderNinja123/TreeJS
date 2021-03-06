function getClasses(ele: Element) {
  var classes: string[] = [];
  ele.classList.forEach((className: string) => {
    classes.push(className);
  });

  return classes;
}

function addClass(ele: Element, className: string) {
  ele.classList.add(className);
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

function select(selector: string) {
  if (document.querySelectorAll) {
    return document.querySelectorAll(selector);
  } else {
    console.warn("TreeJS Warning: document.querySelectorAll not found!!");
    return false;
  }
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

function addId(ele: Element, id: string) {
  var ids = String(ele.id).concat(id);
  setId(ele, ids);
}

function addIds(ele: Element, ids: string[]) {
  ids.forEach((id: string) => {
    addId(ele, id);
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
  ele.setAttribute(attr, val);
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

function loaded() {
  console.log("TreeJS Loaded Successfully!");
}

const TreeJS = {
  getClasses,
  addClass,
  addClasses,
  removeClass,
  removeClasses,
  toggleClass,
  toggleClasses,
  containsClass,
  containtsClasses,
  matches,
  select,
  inViweport,
  addId,
  addIds,
  getIds,
  removeId,
  removeIds,
  toggleId,
  toggleIds,
  containsId,
  containsIds,
  setAttr,
  setAttrs,
  getAttr,
  removeAttr,
  removeAttrs,
  toggleAttr,
  toggleAttrs,
  containtsAttr,
  containtsAttrs,
  loaded,
};
