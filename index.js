function getClasses(ele) {
    var classes = [];
    ele.classList.forEach(function (className) {
        classes.push(className);
    });
    return classes;
}
function addClass(ele, className) {
    ele.classList.add(className);
}
function addClasses(ele, classNames) {
    classNames.forEach(function (cl) {
        addClass(ele, cl);
    });
}
function removeClass(ele, className) {
    ele.classList.remove(className);
}
function removeClasses(ele, classNames) {
    classNames.forEach(function (cl) {
        removeClass(ele, cl);
    });
}
function toggleClass(ele, className) {
    ele.classList.toggle(className);
}
function toggleClasses(ele, classNames) {
    classNames.forEach(function (cl) {
        toggleClass(ele, cl);
    });
}
function containsClass(ele, className) {
    return ele.classList.contains(className);
}
function containtsClasses(ele, classNames) {
    for (var cl in classNames) {
        if (!containsClass(ele, cl)) {
            return false;
        }
    }
    return true;
}
function matches(ele, selector) {
    return (ele.matches ||
        ele.matchesSelector ||
        ele.msMatchesSelector ||
        ele.mozMatchesSelector ||
        ele.webkitMatchesSelector ||
        ele.oMatchesSelector).call(ele, selector);
}
function select(selector) {
    if (document.querySelectorAll) {
        return document.querySelectorAll(selector);
    }
    else {
        console.warn("TreeJS Warning: document.querySelectorAll not found!!");
        return false;
    }
}
function inViweport(ele) {
    var rect = ele.getBoundingClientRect();
    return (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}
function setId(ele, id) {
    ele.setAttribute("id", id);
}
function addId(ele, id) {
    var ids = String(ele.id).concat(id);
    setId(ele, ids);
}
function addIds(ele, ids) {
    ids.forEach(function (id) {
        addId(ele, id);
    });
}
function getIds(ele) {
    var ids = [];
    eval("[\"" +
        String(ele.id).split(" ").join("\", \"") +
        "\"].forEach((idName) => {ids.push(idName)})");
    return ids;
}
function removeId(ele, id) {
    var ids = "";
    getIds(ele).forEach(function (exId) {
        if (exId != String(id)) {
            ids = ids.concat(exId);
        }
    });
    setId(ele, ids);
}
function removeIds(ele, ids) {
    ids.forEach(function (id) {
        removeId(ele, id);
    });
}
function containsId(ele, id) {
    var ids = getIds(ele);
    for (var i = 0; i < ids.length; i++) {
        var exId = ids[i];
        if (id === exId) {
            return true;
        }
    }
    return false;
}
function containsIds(ele, ids) {
    for (var id in ids) {
        if (!containsId(ele, id)) {
            return false;
        }
    }
    return true;
}
function toggleId(ele, id) {
    var cId = containsId(ele, id);
    if (cId) {
        removeId(ele, id);
    }
    else {
        addId(ele, " ".concat(id));
    }
}
function toggleIds(ele, ids) {
    ids.forEach(function (id) {
        toggleId(ele, id);
    });
}
function setAttr(ele, attr, val) {
    ele.setAttribute(attr, val);
}
function setAttrs(ele, attrs, vals) {
    for (var i = 0; i < attrs.length; i++) {
        setAttr(ele, attrs[i], vals[i]);
    }
}
function getAttr(ele, attr) {
    return ele.getAttribute(attr) || false;
}
function removeAttr(ele, attr) {
    ele.removeAttribute(attr);
}
function removeAttrs(ele, attrs) {
    attrs.forEach(function (attr) {
        removeAttr(ele, attr);
    });
}
function toggleAttr(ele, attr) {
    ele.toggleAttribute(attr);
}
function toggleAttrs(ele, attrs) {
    attrs.forEach(function (attr) {
        toggleAttr(ele, attr);
    });
}
function containtsAttr(ele, attr) {
    var attrs = getAttr(ele, attr);
    if (attrs)
        return true;
    else
        return false;
}
function containtsAttrs(ele, attrs) {
    for (var attr in attrs) {
        if (!containtsAttr(ele, attr)) {
            return false;
        }
    }
    return true;
}
function loaded() {
    console.log("TreeJS Loaded Successfully!");
}
var TreeJS = {
    getClasses: getClasses,
    addClass: addClass,
    addClasses: addClasses,
    removeClass: removeClass,
    removeClasses: removeClasses,
    toggleClass: toggleClass,
    toggleClasses: toggleClasses,
    containsClass: containsClass,
    containtsClasses: containtsClasses,
    matches: matches,
    select: select,
    inViweport: inViweport,
    addId: addId,
    addIds: addIds,
    getIds: getIds,
    removeId: removeId,
    removeIds: removeIds,
    toggleId: toggleId,
    toggleIds: toggleIds,
    containsId: containsId,
    containsIds: containsIds,
    setAttr: setAttr,
    setAttrs: setAttrs,
    getAttr: getAttr,
    removeAttr: removeAttr,
    removeAttrs: removeAttrs,
    toggleAttr: toggleAttr,
    toggleAttrs: toggleAttrs,
    containtsAttr: containtsAttr,
    containtsAttrs: containtsAttrs,
    loaded: loaded
};
