/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/istockphoto-1132644908-612x612.jpg */ "./assets/istockphoto-1132644908-612x612.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Your SCSS here. */
html {
  scroll-behavior: smooth;
}

.header {
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
}

body {
  font-family: "Zalando Sans", sans-serif;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.desc_center {
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.icons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.spacer {
  height: 150px;
  width: 100%;
}

#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  overflow: auto;
  padding: 50px 10px;
  z-index: 1000;
}

#navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 20px 16px;
  text-decoration: none;
  font-size: 26px;
}

#navbar a:hover {
  background-color: #ddd;
  color: black;
}

#navbar a.active {
  background-color: #118073;
  color: white;
}

#navbar.shrink a {
  padding: 0px 16px;
  font-size: 20px;
}

section, footer {
  width: 100%;
  padding: 60px 20px;
  text-align: center;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 60px 20px;
  text-align: center;
}

.subsection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.subsubsection {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#projects, #designs, #demo {
  background-color: #96dcca;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px 20px;
}

.icon {
  width: 5vh;
  height: 5vh;
}

.scaled-iframe {
  width: 34vw;
  min-width: 230px;
  max-width: 350px;
  aspect-ratio: 9/16;
}

img.circle {
  width: 40vw;
  height: 40vw;
  min-width: 300px;
  min-height: 300px;
  max-width: 400px;
  max-height: 400px;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
}

.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

.mySlides {
  display: none;
}

.mySlides img {
  width: 66vh;
  height: 66vh;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  background-color: rgba(0, 0, 0, 0.5);
}

.prev {
  left: 0;
  border-radius: 0 3px 3px 0;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
#demoButton {
  width: 400px;
  max-width: 90%;
  padding: 16px 0;
  font-size: 18px;
  font-weight: bold;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: block;
  margin: 20px auto;
  transition: background-color 0.3s ease;
}

#demoButton:hover {
  background-color: #0056b3;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  margin: 10% auto;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  text-align: center;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: #000;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.circle {
  width: 40vw;
  height: 40vw;
  min-width: 300px;
  min-height: 300px;
  max-width: 400px;
  max-height: 400px;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  animation: fadeIn 2s ease-in forwards;
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"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","sourcesContent":["/* Your SCSS here. */\n$myFont: Helvetica, sans-serif;\n$myColor: #96dcca;\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n.header {\n  background-color: #f1f1f1;\n  padding: 30px;\n  text-align: center;\n}\n\n\nbody {\n  font-family: \"Zalando Sans\", sans-serif;\n  background-image: url('../assets/istockphoto-1132644908-612x612.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;  \n    background-attachment: fixed; \n}\n\n.desc_center {\n    text-align: center;  \n    display: block;      \n    margin-left: auto;   \n    margin-right: auto;  \n}\n\n.icons {\n  display: flex; \n  flex-direction: row;\n  justify-content: center; \n  align-items: center; \n  gap: 20px;                \n}\n\n.spacer {\n  height: 150px;\n  width: 100%;  \n}\n\n#navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: #333;\n  overflow: auto; \n  padding: 50px 10px;\n  z-index: 1000;\n}\n\n#navbar a {\n  float: left;\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 20px 16px;\n  text-decoration: none;\n  font-size: 26px;\n}\n\n#navbar a:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n#navbar a.active {\n  background-color: #118073;\n  color: white;\n}\n\n#navbar.shrink a {\n  padding: 0px 16px;\n  font-size: 20px;\n}\n\nsection, footer {\n  width: 100%;\n  padding: 60px 20px;\n  text-align: center;\n}\n\nsection {\n  display: flex;               \n  flex-direction: column;      \n  align-items: center;         \n  justify-content: flex-start; \n  width: 100%;\n  padding: 60px 20px;\n  text-align: center;          \n}\n\n.subsection {\n  display: flex;\n  flex-wrap: wrap;           \n  justify-content: center;   \n  gap: 20px;                 \n}\n\n.subsubsection {\n  display: flex;\n  flex-direction: column;    \n  align-items: center;       \n}\n\n#projects, #designs, #demo {\n  background-color: $myColor;\n \n  min-height: 80vh;        \n  display: flex;           \n  flex-direction: column;\n  justify-content: center; \n  align-items: center;     \n  text-align: center;\n  padding: 60px 20px;      \n}\n\n.icon {\n  width: 5vh;\n  height: 5vh;\n}\n.scaled-iframe {\n  width: 34vw;             \n  min-width: 230px;        \n  max-width: 350px;        \n  aspect-ratio: 9 / 16;   \n}\n\nimg.circle {\n  width: 40vw;             \n  height: 40vw;            \n  min-width: 300px;        \n  min-height: 300px;\n  max-width: 400px;        \n  max-height: 400px;\n  object-fit: cover;       \n  border-radius: 50%;      \n  display: block;\n  margin: 0 auto;          \n}\n\n\n.slideshow-container {\n  max-width: 1000px;\n  position: relative;\n  margin: auto;\n}\n\n.mySlides {\n  display: none;\n}\n\n.mySlides img{\n  width: 66vh;\n  height: 66vh;\n}\n\n.prev, .next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%); \n  padding: 16px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  user-select: none;\n  background-color: rgba(0,0,0,0.5);\n}\n\n.prev {\n  left: 0;\n  border-radius: 0 3px 3px 0;\n}\n\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n.prev:hover, .next:hover {\n  background-color: rgba(0,0,0,0.8);\n}\n\n.text {\n  color: #f2f2f2;\n  font-size: 15px;\n  padding: 8px 12px;\n  position: absolute;\n  bottom: 8px;\n  width: 100%;\n  text-align: center;\n}\n\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.active, .dot:hover {\n  background-color: #717171;\n}\n\n.fade {\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@keyframes fade {\n  from {opacity: .4}\n  to {opacity: 1}\n}\n\n#demoButton {\n    width: 400px;               \n    max-width: 90%;             \n    padding: 16px 0;            \n    font-size: 18px;\n    font-weight: bold;\n    background-color: #007BFF; \n    color: white;\n    border: none;\n    border-radius: 6px;         \n    cursor: pointer;\n    display: block;             \n    margin: 20px auto;\n    transition: background-color 0.3s ease;\n}\n\n#demoButton:hover {\n    background-color: #0056b3;\n}\n\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1000;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0,0,0,0.5);\n}\n\n\n.modal-content {\n    background-color: #fff;\n    margin: 10% auto;\n    padding: 20px;\n    border-radius: 8px;\n    width: 80%;\n    max-width: 500px;\n    text-align: center;\n}\n\n\n.close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.close:hover {\n    color: #000;\n}\n\n@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n.circle {\n  width: 40vw;             \n  height: 40vw;            \n  min-width: 300px;        \n  min-height: 300px;\n  max-width: 400px;        \n  max-height: 400px;\n  object-fit: cover;       \n  border-radius: 50%;      \n  display: block;\n  margin: 0 auto;\n\n  animation: fadeIn 2s ease-in forwards;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/95627.png":
/*!**************************!*\
  !*** ./assets/95627.png ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAACDPAAAgzwGxSQ44AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAtBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjcMAnQAAAO90Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKistLi8wMjM0NTc4OTo7PD0+P0BBQkNERUdISUtMTU5PUFFSU1RVVldYWVpbXF1eX2BhYmNkZmdoamttbm9wcXJzdHV2d3l7fH1+f4CBgoOEhYaHiImLjY6PkpOUlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f5lbn5YAAAZW0lEQVQYGe3Bi2OV530f8K+OxEFCXFSjBcWTGTJj2InDxYQG5goNsNfhCzDGGAi76owpeGFQmGo5RsGEzDXU1CGmtUkpiBTSDbnlMjp4PIFDBsOPMcGoMggFA1bxkYSkc77/woJtzE2Xc97L83vf8z6fDxAZBaXjKuY+v3rDWzv21B88cuzkR40Xrya6uxNXLzZ+dPLYkYP1e3a8tWH183MrxpUWwMoW8dHTq9a+ve94Uxsz0NZ0fN/ba6umj47DCqfYqPJna7YeakrSlWTToa01z5aPisEKjeKKZW82tNFTbQ1vLqsohhVs8XEL1++9QN9c2Lt+4bg4rCAaveiNE100oOvEG4tGwwqQvEnLdzTTqOYdyyflwZI3dObL+xMUkdj/8syhsOTEJte8l6So5Hs1k2OwBJRUbrvMQLi8rbIElkl5j9W+n2KApN6vfSwPlhHDKne2MoBad1YOg+WzIQt2X2dgXd+9YAgs3xTOq2tnwLXXzSuE5YOC2dsTDIXE9tkFsDwVe/ydawyRa+88HoPlldLqRoZOY3UpLA/kztrTzVDq3jMrF5Y7Za+cZ4idf6UMlmMD5rybYsil3p0zAJYTxdUtzAot1cWwMjVmYxuzRtvGMbAyMXVXklkluWsqrDTlzlHMQmpOLqz+FS79NbPU2aWFsPo2tPoKs9iV6qGwele46jKz3OVVhbB6lv9iCyOg5cV8WPeKLznPiDi/JA7rTnlVjYyQxqo8WLfEFp5hxJxZGIP1lfLjjKDj5bBuKNvJiNpZBmtwbQcjq6N2MKItZ3EzI615cQ4ibEoDI69hCqJq5DZav7VtJKIod0WC1hcSK3IROeOP0vra0fGIlvx1XbRu07UuHxFSfprWXU6XIyqKNqdo3SO1uQiR8MwFWj268AyyX0kdrV7VlSDLzbpEqw+XZiGbDdpEqx+bBiFrTdC0+qUnIDvFVnbSSkPnyhiyUOl+WmnaX4qsM/cKrbRdmYvsMngLrYxsGYwsMvYUrQydGous8VQrrYy1PoXsEKtN0XIgVRtDFhheT8uh+uEIvQnnaDl2bgJCbnE7LRfaFyPM4q/Tcun1OEJrxGFarh0egZB6+GNaHvj4YYTStKu0PHF1GkJoUSctj3QuQui8RMtDLyFc4ltpeWprHCFSdICWxw4UITTKTtHy3KkyhMTEFlo+aJmIUJjaSssXrVMRAjMStHySmIHAe7KDlm86nkTAze+i5aOu+Qi0qiQtXyWrEGDLU7R8llqOwFpDy4A1CKhXaRnxKgLpVVqGvIoAWkPLmDUInOW0DFqOgKlK0TIoVYVAmZ+kZVRyPgLkyS5ahnU9icCY0UHLuI4ZCIipCVoCElMRCBNbaYlonYgAKGuhJaSlDOKKTtESc6oIwuIHaAk6EIesrbREbYWol2gJewmCFtEStwhipnXSEtc5DUIevkorAK4+DBEjPqYVCB+PgID4YVoBcTgO816nFRivw7jFtAJkMQyb0E4rQNonwKjh52gFyrnhMChWTytg6mMwp5ZW4NTCmKdStAIn9RQMGdtKK4Bax8KIwadoBdKpwTBhC62A2gID5tIKrLnwXekVWoF1pRQ+i+2nFWD7Y/DXSlqBthK+mtBJK9A6J8BHgzStgNOD4J9NtAJvE3wzi1YIzIJPSi7RCoFLJfBHHa1QqIMvnqEVEs/AB0UXaIXEhSJ4bzOt0NgMz5WnaIVGqhweyz9NK0RO58Nb62iFyjp4anwXrVDpGg8P5R6lFTJHc+GdFbRCZwU8MzJBK3QSI+GVbbRCaBs8MoVWKE2BJ3IaaIVSQw68sJhWSC2GBwY30wqp5sFwr5ZWaNXCtbIOWqHVUQa3dtIKsZ1wqZxWqJXDldhxWqF2PAY3FtIKuYVwIe8MrZA7kwfnqmiFXhUcizfSCr3GOJxaQisLLIFD+edpZYHz+XDmRVpZ4UU4UthCKyu0FMKJVTSpY+nkiHjuc5q2Cg4MvUyjri9BJMy+RuMuD0XmqmnaO4OR9XLXUUI1MlZ4hcad+hay3PC/o4grhcjUUgr4fAGy2oRzFLIUGco9SxGvD0T2qmynlLO5yMwcCmkYhSw14E8paA4yoyjlyu8jK33zHyhJISNTKSdVm4vsM+UCZU1FJnZR0oERyDYvdFLYLmRgTJKiLjyGrJL/U4pLjkH6NlJY98ocZI9/cYwBsBFpK26juL8pQraY/imDoK0Y6apmAJydgOywqpvBUI00DWhhEHT8IbLA4B0MipYBSM8cBsTWQQi7f/X/GBxzkJ53GRQnxyLcnmxlgLyLtJSlGBjX5iHEYj9IMUhSZUjHKwyS1+IIq9/5nwyYV5CG3PMMFDUS4fSdXzNozueif7MYMJ8+jjD6jwkGzyz0bw+DJvWDGMIm78cMoj3oV2k3g+fvv4Fw+cb/YiB1l6I/1QyiT6YgTL77CQOqGv2INTKQur6P8PjD6wyqxhj69jiDqm4YwmHgnzPAHkff3mFgfTQOYfDA/2GQvYM+FVxjcLX/AYKv/DcMtGsF6MtsBtqWAgTcf+lmwM1GX7Yz2H41BkFWuI2Btx19KEww4FpnI7j+5f9l8CUK0bt5DL4fD0BA/durDIN56F0dQ+B/lyKIcqpTDIU69GpIO8PgNzMQPMN2MyTah6A3CxgOyT+JIWC+fZqhsQC92c2w2FuMQPn3n9OZbpq3G70Ydp2h8Y+TERy56+lM5xJF864PQ88qGSKdyxAUxfvoTPMUKAqoRM920rCOJF3YPgSB8GgjnTl8P6AoYCd6lNdKw3TFRbrw4SMIgGfb6cymOABFAa156MljNE3jmwfpQqIS0uIb6UxHFW5QlPAYelJL0zSQW5uiC5vzIer+w3Tmk+/iC4oSatGT92maxm898SldeH80BP3rZjpzaAS+pCjhffSgJEXTNG544Ahd+OwpiFnaSWdeG4CvKEpIleBelTRO4wsDNtCN9XkQUfAXdKZ9Eb6mKKIS99pG4zS+8vRndOHQ/RBQ9ks60zgRtyiK2IZ7xC7TOI2bHjxGF1oqYNzMy3RmXzFuoyjicgx3m0zzNL42cCNd6F6dA6Ny/jhJZ36Ui9spypiMu9XQPI3bzL9GF/72Phg0pI7OJObjTooyanC392iexu0eOkEXzk2CMQ99QGfOjsNdFGW8h7sMTdI8jTsM+ilduP4CDHn6n+hM/X24m6KM5FDcaSYFaNzluTa6sG0wDIjVpujMD2O4h6KQmbjTyxSgcbfvfEgXPvgWfHdfPZ25Nhs9UBTyMu60nwI07jHkZ3Th8wXw2fizdOb0t9ETRSH7cYe8BAVo9OCF63Rh40D46T+10ZlfDEOPFIUk8nC7SZSg0ZNHz9KFo6PgmwH/nc6kanLQM0Upk3C75ZSg0aOiv6ELV34fPik5RGdaZ6E3ilKW43Y7KEGjFyu66Fzqh7nww++epzOnxqJXilJ24HbNlKDRmylNdOFACbz3/HU6s2sIeqcopRm3GU0RGr0q3ksXmn8PHsv/CZ1Jrs5BHxTFjMYtiyhCo3ex/5akc92rcuClkUfpzNUn0CdFMYtwyxsUodGXiot0YXcRvPNvLtGZE6PRN0Uxb+CWExSh0advHqQLZyfAK/+1m878VSH6oSjmBL4W76IIjb7lrk3RuY7/DE8Ubqcz3SvRL0UxXXHcNI4yNPrzxKd04S8Gwb0xJ+nMp9PRP0U543DTQsrQ6NcDR+jCyYfg1r/7jM78chTSoChnIW5aTxka/RuwgS5cmwdXcmpSdOYvC5AORTnrcdNeytBIx9Of0YXX4nCu6G/pTNdypEdRzl7cdIEyNNLy4DG68N5IOPXIGTrzm3KkSVHOBXylmEI00jNwI1349Ak48x8+pzMNDyBdioKK8aUKCtFI1/xrdC71gxgyl/cjOvSTgUiboqAKfGkZhWik7aETdOHvv4FM/bMDdKZzCTKgKGgZvvQmhWikb9BP6cL5qcjMpH+kM81TkAlFQW/iSw0UopGJ59roXNf3kYmqDjpz+H5kRFFQA74Qa6MQjYx850O6UDcM6Yr/GR3aFEdmFAW1xXDDKErRyMyQn9GFM+ORnn+u6ExHFTKlKGkUbiinFI1MvXCdzrX/AdLxey105pPvImOKkspxw7OUopGxR8/ShS0F6NfyLjpzaAQypyjpWdxQQykamSv6OV341Rj0bdDbdOi1AXBAUVINbthKKRpOrOiic61z0JcHf0Vn2hfBEUVJW3HDIUrRcOR7TXThxwPQqyeu0JnGiXBGUdIh3NBEKRrOFO+lC4dL0bOcNUk6s68YDilKasJvxZOUouFQzpoknbs0Az0Z+nM69KNcOKUoKRkHMJpiNByruEjnkn8Swz2+9SGdScyHc4qiRgOYTjEazpUcpAv1xbjL7Gt05uw4uKAoajqAKorRcCF3bYrONf0ubpe7jg7V3wc3FEVVAVhLMRquPPEpnetchluG/x0d+mEMriiKWgvgbYrRcOeBw3Thr4fgKxPO0Zlrc+CSoqi3AeyjGA2XBmygCx8+gi9UttOZ09+GW4qi9gE4TjEarj39GZ1rqwQw4E/p0C+GwTVFUccBNFGMhnsPHqMLm/O/+Q90JlWTA/cURTUBaKMYDQ8M3EgXjl+gM62z4AVFUW1AAeVoeGL+NRr3wVh4QlFWAUopR8MbD52gYbuGwBuKskoxjnI0PDLopzQpuToHHlGUNQ4VlKPhmefaaMzVJ+AZRVkVmEs5Gt555EMacmI0vKMoay6epxwNDw35GY34q0J4SFHW81hNORqeeuE6fde9Ep5SlLUaGyhHw1uPnqXPPp0ObynK2oC3KOcDeKzo5/TVL0fBY4qy3sIOytHw3Pe76J+/LIDXFGXtwB7K0fDe95rok67l8J6irD2opxwNHxTvpS9+Uw4fKMqqx0HK0fBDzppueq/hAfhBUdZBHKEcDX9Mu0iv/WQgfKEo6wiOUY6GT0oO0FOdS+ATRVnHcJJyNPySuzZF7zRPgV8UZZ3ER5Sj4Z8nPqVXDt8P3yjK+giNlKPhowcO0xt/Fod/FGU14iLlaPhpwAZ6oKMKflKUdRFXKUfDX09/Rrc++S58pSjrKhKUo+GzB4/RnUMj4C9FWQl0U46G3wZupBuvDYDPFGV1o5tyNPw3/xqdaq+E7xRldSNBORoGjD1BZxonwn+KshK4SjkaJgzaQif2FcMARVlXcZFyNMx4ro0Z+1EuTFCUdRGNlKNhyCMfMjOJ+TBDUVYjPqIcDVOG/IyZODsOhijK+ggnKUfDnCXXmbb6+2CKoqyTOEY5GgY9epZp+mEMxijKOoYjlKNhUtHPmY5rc2CQoqwjOEg5GmZ9v4v9Ov1tmKQo6yDqKUfDsO81sR+/GAajFGXVYw/laJhWvJd9SdXkwCxFWXuwg3I0jMtZ081etc6CaYqyduAtyvkAAqZdZC8+GAvjFGW9hQ2UoyGh5AB7VDcE5inK2oDVlKMhIvePPuM9zs6BBEVZq/E85WgIGfFmB+/wT388ECIUZT2PuZSjIea+P2ro4E1tf14CIYqy5qKCcjQkxcpmLn3tf+zaXFMxEGIUZVVgHOVoRJ6irHEopRyNyFOUVYoCytGIPEVZBUAbxWhEnqKoNgBNFKMReYqimgAcpxiNyFMUdRzAPorRiDxFUfsAvE0xGpGnKOptAGspRiPyFEWtBVBFMRqRpyiqCsB0itGIPEVR0wGMphiNyFMUNRpAPEkpGpGnKCkZx281UYpG5ClKasINhyhFI/IUJR3CDVspRSPyFCVtxQ01lKIReYqSanDDs5SiEXmKkp7FDeWUohF5ipLKccMoStGIPEVJo3BDrI1CNCJPUVBbDF9ooBCNyFMU1IAvvUkhGpGnKOhNfGkZhWhEnqKgZfhSBYVoRJ6ioAp8qZhCNCJPUVAxvnKBMjQiT1HOBdy0lzI0Ik9Rzl7ctJ4yNCJPUc563LSQMjQiT1HOQtw0jjI0Ik9RzjjcFO+iCI3IUxTTFcfXTlCERuQpijmBW96gCI3IUxTzBm5ZRBEakacoZhFuGU0RGpGnKGY0btNMCRqRpyilGbfbQQkakacoZQdut5wSNCJPUcpy3G4SJWhEnqKUSbhdXoICNCJPUUgiD3fYTwEakacoZD/u9DIFaESeopCXcaeZFKAReYpCZuJOQ5M0TyPyFGUkh+Iu79E8jchTlPEe7lZD8zQiT1FGDe42meZpRJ6ijMm4W+wyjdOIPEURl2O4xzYapxF5iiK24V6VNE4j8hRFVOJeJSmaphF5ihJSJejB+zRNI/IUJbyPntTSNI3IU5RQi548RtM0Ik9RwmPoSV4rDdOIPEUBrXno0U4aphF5igJ2omeVNEwj8hQFVKJnw67TLI3IUzTv+jD0YjfN0og8RfN2ozcLaJZG5CmatwC9GdJOozQiT9G49iHoVR2N0og8RePq0Lt5NEoj8hSNm4feFSZokkbkKZqWKEQfttMkjchTNG07+jKbJmlEnqJps9GXgms0SCPyFA27VoA+vUODNCJP0bB30LfHaZBG5Cka9jj6FmukORqRp2hWYwz9qKY5GpGnaFY1+lPaTWM0Ik/RqO5S9GsPjdGIPEWj9qB/s2iMRuQpGjUL/cs9T1M0Ik/RpPO5SMMrNEUj8hRNegXpKEvREI3IUzQoVYa0vEtDNCJP0aB3kZ45NEQj8hQNmoP0DGihGRqRp2hOywCkqZpmaESeojnVSFdxG43QiDxFY9qKkbaNNEIj8hSN2Yj0jUnSBI3IUzQlOQYZ2EUTNCJP0ZRdyMRUmqAReYqmTEVGFA3QiDxFQxQyM4cGaESeoiFzkJncs/SfRuQpmnE2FxlaSv9pRJ6iGUuRqcIr9J1G5CkacaUQGaum7zQiT9GIamRu6GX6TSPyFE24PBQOrKLfzk2OvJM0YRWcKGyhlRVaCuHIi7SywotwJv88rSxwPh8OLaGVBZbAqXgjrdBrjMOxKlqhVwXn8s7QCrkzeXBhIa2QWwg3YsdphdrxGFwppxVq5XBpJ60Q2wm3yjpohVZHGVyrpRVatXBvcDOtkGoeDA8sphVSi+GFnAZaodSQA09MoRVKU+CRbbRCaBu8MjJBK3QSI+GZFbRCZwW8k3uUVsgczYWHxnfRCpWu8fDUOlqhsg7eyj9NK0RO58Nj5SlaoZEqh+c20wqNzfBe0QVaIXGhCD54hlZIPANf1NEKhTr4o+QSrRC4VAKfzKIVArPgm020Am8T/DNI0wo4PQg+mtBJK9A6J8BXK2kF2kr4K7afVoDtj8FnpVdoBdaVUvhuLq3AmgsDttAKqC0wYfApWoF0ajCMGNtKK4Bax8KQp1K0Aif1FIyppRU4tTAnVk8rYOpjMGj4OVqBcm44jJrQTitA2ifAsMW0AmQxjHudVmC8DvPih2kFxOE4BIz4mFYgfDwCIh6+SisArj4MIdM6aYnrnAYxi2iJWwRBL9ES9hJEbaUlaitkxQ/QEnQgDmFFp2iJOVUEcWUttIS0lCEAJrbSEtE6EYEwNUFLQGIqAmJGBy3jOmYgMJ7somVY15MIkPlJWkYl5yNQqlK0DEpVIWCW0zJoOQJnDS1j1iCAXqVlyKsIpFdpGfEqAmoNLQPWILCWp2j5LLUcAVaVpOWrZBUCbX4XLR91zUfAPdlByzcdTyLwZiRo+SQxAyEwtZWWL1qnIhQmttDyQctEhETZKVqeO1WG0Cg6QMtjB4oQIvGttDy1NY5weYmWh15C6CzqpOWRzkUIoWlXaXni6jSE0sMf0/LAxw8jpEYcpuXa4REIrfjrtFx6PY4wW9xOy4X2xQi5CedoOXZuAkJveD0th+qHIwvEalO0HEjVxpAdnmqllbHWp5A1xp6ilaFTY5FFBm+hlZEtg5Fd5l6hlbYrc5F1SvfTStP+UmSh2MpOWmnoXBlDdpqgafVLT0DWGrSJVj82DUI2m3WJVh8uzUKWK6mj1au6EmS/Zy7Q6tGFZxAJRZtTtO6R2lyEqCg/Tesup8sRIfnrumjdpmtdPqJl/FFaXzs6HpGTuyJB6wuJFbmIopHbaP3WtpGIqikNjLyGKYiwnMXNjLTmxTmItsG1HYysjtrBsMp2MqJ2lsG6ofw4I+h4OayvxBaeYcScWRiDdUteVSMjpLEqD9ad4kvOMyLOL4nDulf+iy2MgJYX82H1rHDVZWa5y6sKYfVuaPUVZrEr1UNh9a1w6a+Zpc4uLYTVv9w5illIzcmFlaapu5LMKsldU2FlYszGNmaNto1jYGWquLqFWaGluhiWEwPmvJtiyKXenTMAlmNlr5xniJ1/pQyWO7mz9nQzlLr3zMqF5YHS6kaGTmN1KSyvxB5/5xpD5No7j8dgeapg9vYEQyGxfXYBLB8UzqtrZ8C1180rhOWbIQt2X2dgXd+9YAgsnw2r3NnKAGrdWTkMlhF5j9W+n2KApN6vfSwPlkklldsuMxAub6ssgSUgNrnmvSRFJd+rmRyDJWfozJf3Jygisf/lmUNhycubtHxHM41q3rF8Uh6sABm96I0TXTSg68Qbi0bDCqL4uIXr916gby7sXb9wXBxWsBVXLHuzoY2eamt4c1lFMazQiI0qf7Zm66GmJF1JNh3aWvNs+agYrHCKj55etfbtfceb2piBtqbj+95eWzV9dBxWtigoHVcx9/nVG97asaf+4JFjJz9qvHg10d2duHqx8aOTx44crN+z460Nq5+fWzGutACR8f8BUeZ3/Oo05pcAAAAASUVORK5CYII=";

/***/ }),

/***/ "./assets/Cross_Guild_dx.png":
/*!***********************************!*\
  !*** ./assets/Cross_Guild_dx.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "354d922272b244785490.png";

/***/ }),

/***/ "./assets/Octicons-mark-github.svg.png":
/*!*********************************************!*\
  !*** ./assets/Octicons-mark-github.svg.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c5642ef2a745cf95f2a6.png";

/***/ }),

/***/ "./assets/YTDown.com_Shorts_ARDS-Demo_Media_bS9nRRGyKuU_001_1080p.mp4":
/*!****************************************************************************!*\
  !*** ./assets/YTDown.com_Shorts_ARDS-Demo_Media_bS9nRRGyKuU_001_1080p.mp4 ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "83df8ea5d6946a133830.mp4";

/***/ }),

/***/ "./assets/beach.jpg":
/*!**************************!*\
  !*** ./assets/beach.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d5b351d997d3f77217fa.jpg";

/***/ }),

/***/ "./assets/dragon.png":
/*!***************************!*\
  !*** ./assets/dragon.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fe0efae5aca7de259537.png";

/***/ }),

/***/ "./assets/hexagon-nodes-solid-full.svg":
/*!*********************************************!*\
  !*** ./assets/hexagon-nodes-solid-full.svg ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNjQwIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDcuMC4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjUgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTM0NCAxNzAuNkMzNjIuOSAxNjEuNiAzNzYgMTQyLjMgMzc2IDEyMEMzNzYgODkuMSAzNTAuOSA2NCAzMjAgNjRDMjg5LjEgNjQgMjY0IDg5LjEgMjY0IDEyMEMyNjQgMTQyLjMgMjc3LjEgMTYxLjYgMjk2IDE3MC42TDI5NiAyNjkuNEMyOTMuMiAyNzAuNyAyOTAuNSAyNzIuMyAyODggMjc0LjFMMjA3LjkgMjI4LjNDMjA5LjUgMjA3LjUgMTk5LjMgMTg2LjcgMTgwIDE3NS41QzE1My4yIDE2MCAxMTkgMTY5LjIgMTAzLjUgMTk2Qzg4IDIyMi44IDk3LjIgMjU3IDEyNCAyNzIuNUMxMjUuMyAyNzMuMyAxMjYuNiAyNzQgMTI4IDI3NC42TDEyOCAzNjUuNEMxMjYuNyAzNjYgMTI1LjMgMzY2LjcgMTI0IDM2Ny41Qzk3LjIgMzgzIDg4IDQxNy4yIDEwMy41IDQ0NEMxMTkgNDcwLjggMTUzLjIgNDgwIDE4MCA0NjQuNUMxOTkuMyA0NTMuNCAyMDkuNCA0MzIuNSAyMDcuOCA0MTEuN0wyNTguMyAzODIuOEMyNDYuOCAzNzEuNiAyMzguNCAzNTcuMiAyMzQuNSAzNDEuMUwxODQgMzcwLjFDMTgxLjQgMzY4LjMgMTc4LjggMzY2LjggMTc2IDM2NS40TDE3NiAyNzQuNkMxNzguOCAyNzMuMyAxODEuNSAyNzEuNyAxODQgMjY5LjlMMjY0LjEgMzE1LjdDMjY0IDMxNy4xIDI2My45IDMxOC41IDI2My45IDMyMEMyNjMuOSAzNDIuMyAyNzcgMzYxLjYgMjk1LjkgMzcwLjZMMjk1LjkgNDY5LjRDMjc3IDQ3OC40IDI2My45IDQ5Ny43IDI2My45IDUyMEMyNjMuOSA1NTAuOSAyODkgNTc2IDMxOS45IDU3NkMzNTAuOCA1NzYgMzc1LjkgNTUwLjkgMzc1LjkgNTIwQzM3NS45IDQ5Ny43IDM2Mi44IDQ3OC40IDM0My45IDQ2OS40TDM0My45IDM3MC42QzM0Ni43IDM2OS4zIDM0OS40IDM2Ny43IDM1MS45IDM2NS45TDQzMiA0MTEuN0M0MzAuNCA0MzIuNSA0NDAuNiA0NTMuMyA0NTkuOCA0NjQuNUM0ODYuNiA0ODAgNTIwLjggNDcwLjggNTM2LjMgNDQ0QzU1MS44IDQxNy4yIDU0Mi42IDM4MyA1MTUuOCAzNjcuNUM1MTQuNSAzNjYuNyA1MTMuMSAzNjYgNTExLjggMzY1LjRMNTExLjggMjc0LjZDNTEzLjIgMjc0IDUxNC41IDI3My4zIDUxNS44IDI3Mi41QzU0Mi42IDI1NyA1NTEuOCAyMjIuOCA1MzYuMyAxOTZDNTIwLjggMTY5LjIgNDg2LjggMTYwIDQ2MCAxNzUuNUM0NDAuNyAxODYuNiA0MzAuNiAyMDcuNSA0MzIuMiAyMjguM0wzODEuNiAyNTcuMkMzOTMuMSAyNjguNCA0MDEuNSAyODIuOCA0MDUuNCAyOTguOUw0NTYgMjY5LjlDNDU4LjYgMjcxLjcgNDYxLjIgMjczLjIgNDY0IDI3NC42TDQ2NCAzNjUuNEM0NjEuMiAzNjYuNyA0NTguNSAzNjguMyA0NTYgMzcwTDM3NS45IDMyNC4yQzM3NiAzMjIuOCAzNzYuMSAzMjEuNCAzNzYuMSAzMTkuOUMzNzYuMSAyOTcuNiAzNjMgMjc4LjMgMzQ0LjEgMjY5LjNMMzQ0LjEgMTcwLjV6Ii8+PC9zdmc+";

/***/ }),

/***/ "./assets/instagram-icon-lg.png":
/*!**************************************!*\
  !*** ./assets/instagram-icon-lg.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "879d9b9c5eab8b870b0c.png";

/***/ }),

/***/ "./assets/istockphoto-1132644908-612x612.jpg":
/*!***************************************************!*\
  !*** ./assets/istockphoto-1132644908-612x612.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a8f832cc30dfa00812cf.jpg";

/***/ }),

/***/ "./assets/magnifying-glass-solid-full.svg":
/*!************************************************!*\
  !*** ./assets/magnifying-glass-solid-full.svg ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNjQwIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDcuMC4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjUgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTQ4MCAyNzJDNDgwIDMxNy45IDQ2NS4xIDM2MC4zIDQ0MCAzOTQuN0w1NjYuNiA1MjEuNEM1NzkuMSA1MzMuOSA1NzkuMSA1NTQuMiA1NjYuNiA1NjYuN0M1NTQuMSA1NzkuMiA1MzMuOCA1NzkuMiA1MjEuMyA1NjYuN0wzOTQuNyA0NDBDMzYwLjMgNDY1LjEgMzE3LjkgNDgwIDI3MiA0ODBDMTU3LjEgNDgwIDY0IDM4Ni45IDY0IDI3MkM2NCAxNTcuMSAxNTcuMSA2NCAyNzIgNjRDMzg2LjkgNjQgNDgwIDE1Ny4xIDQ4MCAyNzJ6TTI3MiA0MTZDMzUxLjUgNDE2IDQxNiAzNTEuNSA0MTYgMjcyQzQxNiAxOTIuNSAzNTEuNSAxMjggMjcyIDEyOEMxOTIuNSAxMjggMTI4IDE5Mi41IDEyOCAyNzJDMTI4IDM1MS41IDE5Mi41IDQxNiAyNzIgNDE2eiIvPjwvc3ZnPg==";

/***/ }),

/***/ "./assets/micah_pop.png":
/*!******************************!*\
  !*** ./assets/micah_pop.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ab577274940dd4694004.png";

/***/ }),

/***/ "./assets/store-solid-full.svg":
/*!*************************************!*\
  !*** ./assets/store-solid-full.svg ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNjQwIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDcuMC4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjUgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTk0LjcgMTM2LjNDMTAxLjYgMTEyLjQgMTIzLjUgOTYgMTQ4LjQgOTZMNDkyLjQgOTZDNTE3LjMgOTYgNTM5LjIgMTEyLjQgNTQ2LjIgMTM2LjNMNTY5LjYgMjE2LjVDNTgyLjQgMjYwLjIgNTQ5LjUgMzA0IDUwNCAzMDRDNDc3LjcgMzA0IDQ1NC42IDI4OS4xIDQ0My4yIDI2Ni45QzQzMS42IDI4OC44IDQwOC42IDMwNCAzODEuOCAzMDRDMzU1LjIgMzA0IDMzMi4xIDI4OSAzMjAuNSAyNjdDMzA4LjkgMjg5IDI4NS44IDMwNCAyNTkuMiAzMDRDMjMyLjQgMzA0IDIwOS40IDI4OC45IDE5Ny44IDI2Ni45QzE4Ni40IDI4OSAxNjMuMyAzMDQgMTM3IDMwNEM5MS40IDMwNCA1OC42IDI2MC4zIDcxLjQgMjE2LjVMOTQuNyAxMzYuM3pNMTYwLjQgNDE2TDQ4MC40IDQxNkw0ODAuNCAzNDkuNkM0ODggMzUxLjIgNDk1LjkgMzUyIDUwMy45IDM1MkM1MTguMiAzNTIgNTMxLjkgMzQ5LjQgNTQ0LjQgMzQ0LjhMNTQ0LjQgNDk2QzU0NC40IDUyMi41IDUyMi45IDU0NCA0OTYuNCA1NDRMMTQ0LjQgNTQ0QzExNy45IDU0NCA5Ni40IDUyMi41IDk2LjQgNDk2TDk2LjQgMzQ0LjhDMTA4LjkgMzQ5LjQgMTIyLjUgMzUyIDEzNi45IDM1MkMxNDUgMzUyIDE1Mi44IDM1MS4yIDE2MC40IDM0OS42TDE2MC40IDQxNnoiLz48L3N2Zz4=";

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/beach.jpg */ "./assets/beach.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Octicons-mark-github.svg.png */ "./assets/Octicons-mark-github.svg.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/95627.png */ "./assets/95627.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/instagram-icon-lg.png */ "./assets/instagram-icon-lg.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/hexagon-nodes-solid-full.svg */ "./assets/hexagon-nodes-solid-full.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/magnifying-glass-solid-full.svg */ "./assets/magnifying-glass-solid-full.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/store-solid-full.svg */ "./assets/store-solid-full.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/YTDown.com_Shorts_ARDS-Demo_Media_bS9nRRGyKuU_001_1080p.mp4 */ "./assets/YTDown.com_Shorts_ARDS-Demo_Media_bS9nRRGyKuU_001_1080p.mp4"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Cross_Guild_dx.png */ "./assets/Cross_Guild_dx.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/micah_pop.png */ "./assets/micah_pop.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/dragon.png */ "./assets/dragon.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\" />\n        <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n        <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n        <link href=\"https://fonts.googleapis.com/css2?family=Zalando+Sans:ital,wght@0,200..900;1,200..900&display=swap\" rel=\"stylesheet\">\n        <title>MP1</title>\n    </head>\n    <body>\n        <div id=\"navbar\">\n            <a href=\"#aboutMe\">About Me</a>\n            <a href=\"#projects\">Projects</a>\n            <a href=\"#demo\">Video</a>\n            <a href=\"#designs\">Art</a>\n        </div>\n\n        \n        <section id=\"aboutMe\"></section>\n            <div class=\"spacer\"></div>\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" class=\"circle\">\n            <br>\n            <div class=\"icons\">\n                <a href=\"https://github.com/chrisMonzon/\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" class=\"icon\"></a>\n                <a href=\"mailto:christopher.a.monzon@gmail.com\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" class=\"icon\"></a>\n                <a href=\"https://www.instagram.com/lilbieber/?hl=en\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" class=\"icon\"></a>\n            </div>\n            \n            <div class=\"desc_center\">\n                <h1>Hi, I'm Chris Monzon.</h1>\n                <br>\n                <p>I'm a senior studying Computer Science @ UIUC. I'm interested in algorithms, graphics, mobile/web dev, and data visualization!</p>\n            </div>\n            <div class=\"spacer\"></div>\n        </section>\n\n        <section id=\"projects\">\n            <h2>Projects</h2>\n            <br>\n            <br>\n            <br>\n            <div class=\"subsection\">\n                <div class=\"subsubsection\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" class=\"icon\" alt=\"node icon\">\n                    <p>ColorTaiko!</p>\n                    <p>An interface for IML that visualizes Prof. Mineyev's work</p>\n                    <iframe src=\"https://play.math.illinois.edu/ColorTaiko!/\" class=\"scaled-iframe\" title=\"ColorTaiko!\"></iframe>\n                </div>\n\n                <div class=\"subsubsection\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" class=\"icon\" alt=\"node icon\">\n                    <p>Where2?</p>\n                    <p>A web app that helps students find meetings+food trucks on campus</p>\n                    <iframe src=\"https://where2uiuc.web.app\" class=\"scaled-iframe\" title=\"where2\"></iframe>\n                </div>\n\n                <div class=\"subsubsection\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" class=\"icon\" alt=\"node icon\">\n                    <p>Jollibuy</p>\n                    <p>A website showcasing Filipino small businesses in IL</p>\n                    <iframe src=\"https://jollibuy.vercel.app\" class=\"scaled-iframe\" title=\"Jollibuy\"></iframe>\n                </div>\n            </div>\n            <div class=\"spacer\"></div>\n        </section>\n        <div class=\"spacer\"></div>\n\n        <section id=\"demo\">\n            <h2>Demo video</h2>\n            <video width=\"800px\" height=\"auto\" controls>\n                <source src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" type=\"video/mp4\">\n                Your browser does not support the video tag.\n            </video>\n            <button id=\"demoButton\">About this video</button>\n\n            \n            <div id=\"demoModal\" class=\"modal\">\n                <div class=\"modal-content\">\n                    <span class=\"close\">&times;</span>\n                    <h2>This video is a demo showcasing my efforts from my past internship this summer at the Jump Simulation center.</h2>\n                    <p>You can see the virtual patient in this healthcare simulation display deteriorating symptoms as well as live time lip sync.</p>\n                    <p>The stack of this healthcare simulation program was Unity and C#, and through this project, I was able to learn more about optimization techniques and the VR development pipeline.</p>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"spacer\"></div>\n        <section id=\"designs\">\n            <h2>Art</h2>\n            <!-- reference -->\n            <!-- https://www.w3schools.com/howto/howto_js_slideshow.asp -->\n            <div class=\"slideshow-container\">\n\n                <div class=\"mySlides fade\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" style=\"width:100%\">\n                </div>\n\n                <div class=\"mySlides fade\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" style=\"width:100%\">\n                </div>\n\n                <div class=\"mySlides fade\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" style=\"width:100%\">\n                </div>\n\n                <a class=\"prev\" onclick=\"plusSlides(-1)\">&#10094;</a>\n                <a class=\"next\" onclick=\"plusSlides(1)\">&#10095;</a>\n            </div>\n            <br>\n            <div style=\"text-align:center\">\n                <span class=\"dot\" onclick=\"currentSlide(1)\"></span>\n                <span class=\"dot\" onclick=\"currentSlide(2)\"></span>\n                <span class=\"dot\" onclick=\"currentSlide(3)\"></span>\n            </div>\n        </section>\n\n        <" + "script>\n            window.onscroll = function() {\n                const navbar = document.getElementById(\"navbar\");\n                if (window.scrollY > 50) {\n                    navbar.classList.add(\"shrink\");\n                } else {\n                    navbar.classList.remove(\"shrink\");\n                }\n            };\n\n            const sections = document.querySelectorAll(\"section\");\n            const navLinks = document.querySelectorAll(\"#navbar a\");\n\n            window.addEventListener(\"scroll\", () => {\n                let currentSectionId = \"\";\n\n                sections.forEach(section => {\n                    const sectionTop = section.offsetTop - 70;\n                    const sectionHeight = section.offsetHeight;\n                    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {\n                        currentSectionId = section.getAttribute(\"id\");\n                    }\n                });\n\n                navLinks.forEach(link => {\n                    link.classList.remove(\"active\");\n                    if (link.getAttribute(\"href\") === `#${currentSectionId}`) {\n                        link.classList.add(\"active\");\n                    }\n                });\n            });\n\n            let slideIndex = 1;\n            showSlides(slideIndex);\n\n            function plusSlides(n) {\n                showSlides(slideIndex += n);\n            }\n\n            function currentSlide(n) {\n                showSlides(slideIndex = n);\n            }\n\n            function showSlides(n) {\n                let i;\n                let slides = document.getElementsByClassName(\"mySlides\");\n                let dots = document.getElementsByClassName(\"dot\");\n                if (n > slides.length) {slideIndex = 1}\n                if (n < 1) {slideIndex = slides.length}\n                for (i = 0; i < slides.length; i++) {\n                    slides[i].style.display = \"none\";\n                }\n                for (i = 0; i < dots.length; i++) {\n                    dots[i].className = dots[i].className.replace(\" active\", \"\");\n                }\n                slides[slideIndex-1].style.display = \"block\";\n                dots[slideIndex-1].className += \" active\";\n            }\n\n            const demoButton = document.getElementById(\"demoButton\");\n            demoButton.onclick = function() {\n                alert(\"This is a popup message!\");\n            }\n            const modal = document.getElementById(\"demoModal\");\n            const btn = document.getElementById(\"demoButton\");\n            const span = modal.querySelector(\".close\");\n\n            btn.onclick = function() {\n                modal.style.display = \"block\";\n            }\n\n            span.onclick = function() {\n                modal.style.display = \"none\";\n            }\n\n            window.onclick = function(event) {\n                if (event.target === modal) {\n                    modal.style.display = \"none\";\n                }\n            }\n        <" + "/script>\n    </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

/* Your JS here. */
console.log('Hello World!');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */
// HTML Files
 // Stylesheets

 // Scripts


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map