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
    for (var i = 0; i < classNames.length; i++) {
        var cl = classNames[i];
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
        selector = selector.split(".").join("class(");
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
function setIds(ele, ids) {
    setId(ele, ids[0]);
    if (ids.length > 1)
        addIds(ele, ids.slice(1));
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
    for (var i = 0; i < ids.length; i++) {
        var id = ids[i];
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
    for (var i = 0; i < attrs.length; i++) {
        var attr = attrs[i];
        if (!containtsAttr(ele, attr)) {
            return false;
        }
    }
    return true;
}
function changeHTML(ele, innerHTML) {
    ele.innerHTML = innerHTML;
}
function newElement(type, options, inBody) {
    if (inBody === void 0) { inBody = true; }
    var ele = document.createElement(type);
    if (options) {
        var ids = options.ids, attrNames = options.attrNames, attrVals = options.attrVals, classes = options.classes, innerHTML = options.innerHTML;
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
    if (inBody)
        document.body.appendChild(ele);
    else
        document.head.appendChild(ele);
}
function loaded() {
    console.log("TreeJS Loaded Successfully!");
}
//# sourceMappingURL=index.js.map