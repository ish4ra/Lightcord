module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/0globals.js":
/*!*************************!*\
  !*** ./src/0globals.js ***!
  \*************************/
/*! exports provided: minimumDiscordVersion, currentDiscordVersion, minSupportedVersion, bbdVersion, bbdChangelog, settings, defaultCookie, settingsCookie, settingsRPC, defaultRPC, bdpluginErrors, bdthemeErrors, bdConfig, bdthemes, bdplugins, pluginCookie, themeCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minimumDiscordVersion", function() { return minimumDiscordVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentDiscordVersion", function() { return currentDiscordVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minSupportedVersion", function() { return minSupportedVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bbdVersion", function() { return bbdVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bbdChangelog", function() { return bbdChangelog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCookie", function() { return defaultCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsCookie", function() { return settingsCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsRPC", function() { return settingsRPC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRPC", function() { return defaultRPC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bdpluginErrors", function() { return bdpluginErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bdthemeErrors", function() { return bdthemeErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bdConfig", function() { return bdConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bdthemes", function() { return bdthemes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bdplugins", function() { return bdplugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluginCookie", function() { return pluginCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeCookie", function() { return themeCookie; });
const minimumDiscordVersion = "0.0.306";
const currentDiscordVersion = window.DiscordNative && window.DiscordNative.remoteApp && window.DiscordNative.remoteApp.getVersion && window.DiscordNative.remoteApp.getVersion() || "0.0.306";
const minSupportedVersion = "0.3.0";
const bbdVersion = "0.3.5";
const bbdChangelog = {
  description: "Big things are coming.",
  changes: [{
    title: "Bug Fixes",
    type: "fixed",
    items: ["Some fixes related to showing modals in the `BdApi`.", "Fixed the open folder buttons for plugins and themes"]
  }]
};
const settings = {
  "Custom css live update": {
    id: "bda-css-0",
    info: "",
    implemented: true,
    hidden: true,
    cat: "core"
  },
  "Custom css auto udpate": {
    id: "bda-css-1",
    info: "",
    implemented: true,
    hidden: true,
    cat: "core"
  },
  "BetterDiscord Blue": {
    id: "bda-gs-b",
    info: "Replace Discord blue with BD Blue",
    implemented: false,
    hidden: false,
    cat: "core"
  },

  /* Core */

  /* ====== */
  "Public Servers": {
    id: "bda-gs-1",
    info: "Display public servers button",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "modules"
  },
  "Minimal Mode": {
    id: "bda-gs-2",
    info: "Hide elements and reduce the size of elements.",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "modules"
  },
  "Voice Mode": {
    id: "bda-gs-4",
    info: "Only show voice chat",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "modules"
  },
  "Hide Channels": {
    id: "bda-gs-3",
    info: "Hide channels in minimal mode",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "modules"
  },
  "Dark Mode": {
    id: "bda-gs-5",
    info: "Make certain elements dark by default(wip)",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "modules"
  },
  "Voice Disconnect": {
    id: "bda-dc-0",
    info: "Disconnect from voice server when closing Discord",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "modules"
  },
  "24 Hour Timestamps": {
    id: "bda-gs-6",
    info: "Replace 12hr timestamps with proper ones",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "modules"
  },
  "Colored Text": {
    id: "bda-gs-7",
    info: "Make text color the same as role color",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "modules"
  },
  "Normalize Classes": {
    id: "fork-ps-4",
    info: "Adds stable classes to elements to help themes. (e.g. adds .da-channels to .channels-Ie2l6A)",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "modules"
  },

  /* Content */
  "Content Error Modal": {
    id: "fork-ps-1",
    info: "Shows a modal with plugin/theme errors",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "content manager"
  },
  "Scan Plugins": {
    id: "fork-ps-6",
    info: "Scan plugins for any threat that can be hidden inside.",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "content manager"
  },
  "Show Toasts": {
    id: "fork-ps-2",
    info: "Shows a small notification for important information",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "content manager"
  },
  "Scroll To Settings": {
    id: "fork-ps-3",
    info: "Auto-scrolls to a plugin's settings when the button is clicked (only if out of view)",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "content manager"
  },
  "Automatic Loading": {
    id: "fork-ps-5",
    info: "Automatically loads, reloads, and unloads plugins and themes",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "content manager"
  },
  "Enable Edit Button": {
    id: "fork-ps-7",
    info: "Enable an Edit Button on the plugin and theme panel.",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "content manager"
  },
  "Themes in Popout Window": {
    id: "lightcord-9",
    info: "Enable themes in Popout Window. (For example, when detaching screenshare.)",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "content manager",
    experimental: true
  },

  /* Developer */
  "Developer Mode": {
    id: "bda-gs-8",
    info: "Developer Mode Toggle",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "developer settings"
  },
  "Copy Selector": {
    id: "fork-dm-1",
    info: "Adds a \"Copy Selector\" option to context menus when developer mode is active",
    implemented: true,
    hidden: false,
    cat: "core",
    category: "developer settings"
  },
  "React DevTools": {
    id: "reactDevTools",
    info: "Adds react developer tools to the devtools. Must be installed in Google Chrome on your pc.",
    implemented: true,
    hidden: true,
    cat: "core",
    category: "developer settings"
  },

  /** Lightcord */
  "Disable BetterDiscord": {
    id: "bd-disable",
    info: "Disable Betterdiscord (plugins, themes, etc) (Not implemented).",
    implemented: false,
    hidden: false,
    cat: "lightcord",
    category: "Lightcord"
  },
  "Blur Personal Information": {
    id: "lightcord-6",
    info: "Blur sensitive informations like email, payment infos and more.",
    implemented: true,
    hidden: false,
    cat: "lightcord",
    category: "Lightcord"
  },
  "Calling Ring Beat": {
    id: "lightcord-2",
    info: "Enable Discord's special calling beat.",
    implemented: true,
    hidden: false,
    cat: "lightcord",
    category: "Lightcord"
  },
  "Developer Options": {
    id: "lightcord-1",
    info: "Enable Discord's & Lightcord's Internal Developer Options. This allow the \"Experiments\" tab, the \"Developer Options\" tab and the \"Lightcord Api\" section.",
    implemented: true,
    hidden: false,
    cat: "lightcord",
    category: "Lightcord"
  },
  "Ad Block": {
    id: "lightcord-4",
    info: "Block any BOT that dms you with an invite link. Even in an embed.",
    implemented: true,
    hidden: false,
    cat: "lightcord",
    category: "Lightcord"
  },
  "Enable Lightcord Servers": {
    id: "lightcord-5",
    info: "Enable Lightcord's servers. Disabling this will disable custom badges.",
    implemented: true,
    hidden: false,
    cat: "lightcord",
    category: "Lightcord"
  },
  "Disable typing": {
    id: "lightcord-7",
    info: "Don't let other see you're typing.",
    implemented: true,
    hidden: false,
    cat: "lightcord",
    category: "Lightcord"
  },
  "Lightcord Tabs": {
    id: "lightcord-8",
    info: "Allows you to launch multiple instances of Lightcord in the same window.",
    implemented: true,
    hidden: false,
    cat: "lightcord",
    category: "Lightcord",
    experimental: true
  },
  "Use Notification Shim": {
    id: "lightcord-10",
    info: "Basically don't use Windows's Notifications.",
    implemented: true,
    hidden: process.platform !== "win32",
    cat: "lightcord",
    category: "Lightcord",
    experimental: false
  },

  /** Lightcord Window */
  "Always-on-Top": {
    id: "lightcord-3",
    info: "Enable the window's Always-on-Top mode, where Lightcord stays on top of other applications.",
    implemented: true,
    hidden: false,
    cat: "lightcord",
    category: "Window"
  },
  "No Window Bounds": {
    id: "no_window_bound",
    info: "Disable Window Bounds. Can be useful if you use a window manager.",
    implemented: true,
    hidden: process.platform !== "linux",
    cat: "lightcord",
    category: "Window"
  },
  "Enable Glasstron": {
    id: "enable_glasstron",
    info: "Enable Glasstron. If you're not using transparent themes, this can reduce lag.",
    implemented: true,
    hidden: false,
    cat: "lightcord",
    category: "Window"
  },

  /** RichPresence */
  "Enable": {
    id: "lightcord-presence-1",
    info: "Enable RichPresence below.",
    implemented: true,
    hidden: false,
    cat: "status"
  }
};
const defaultCookie = {
  "bda-gs-1": true,
  "bda-gs-2": false,
  "bda-gs-3": false,
  "bda-gs-4": false,
  "bda-gs-5": true,
  "bda-gs-6": false,
  "bda-gs-7": false,
  "bda-gs-8": false,
  "bda-es-0": true,
  "bda-es-1": true,
  "bda-es-2": true,
  "bda-es-4": false,
  "bda-es-6": true,
  "bda-es-7": true,
  "bda-gs-b": false,
  "bda-es-8": true,
  "bda-dc-0": false,
  "bda-css-0": false,
  "bda-css-1": false,
  "bda-es-9": true,
  "fork-dm-1": false,
  "fork-ps-1": true,
  "fork-ps-2": true,
  "fork-ps-3": true,
  "fork-ps-4": true,
  "fork-ps-5": true,
  "fork-ps-6": true,
  "fork-ps-7": false,
  "fork-es-2": false,
  "fork-es-3": true,
  "fork-wp-1": false,
  "fork-wp-2": false,
  "fork-beta": true,
  "reactDevTools": false,
  "lightcord-1": false,
  "lightcord-2": true,
  "lightcord-presence-1": false,
  "lightcord-3": false,
  "lightcord-4": false,
  "lightcord-5": true,
  "lightcord-6": true,
  "lightcord-7": false,
  "lightcord-8": false,
  "lightcord-9": false,
  "lightcord-10": false,
  "no_window_bound": false
};
const settingsCookie = {};
const settingsRPC = {};
const defaultRPC = {
  "name": "Lightcord",
  "application_id": "711416957718757418",
  "state": "Lightcord Client",
  "details": "Browsing Discord",
  "timestamps.start": Date.now(),
  "assets.small": null,
  "assets.large": "712323821037682791"
};
const bdpluginErrors = [];
const bdthemeErrors = []; // define for backwards compatibility

const bdConfig = Object.create(BetterDiscordConfig);
const bdthemes = {};
const bdplugins = {};
const pluginCookie = {};
const themeCookie = {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoreWrapper; });
/* harmony import */ var _localStorageFix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorageFix */ "./src/localStorageFix.js");
/* harmony import */ var _loadingIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadingIcon */ "./src/loadingIcon.js");
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./0globals */ "./src/0globals.js");
/* harmony import */ var _modules_bdApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/bdApi */ "./src/modules/bdApi.js");
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/v2 */ "./src/modules/v2.js");
/* harmony import */ var _modules_pluginModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pluginModule */ "./src/modules/pluginModule.js");
/* harmony import */ var _modules_themeModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/themeModule */ "./src/modules/themeModule.js");
/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/utils */ "./src/modules/utils.js");
/* harmony import */ var _modules_bdEvents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/bdEvents */ "./src/modules/bdEvents.js");
/* harmony import */ var _modules_settingsPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/settingsPanel */ "./src/modules/settingsPanel.js");
/* harmony import */ var _modules_dataStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/dataStore */ "./src/modules/dataStore.js");
/* harmony import */ var _modules_contentManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/contentManager */ "./src/modules/contentManager.js");
/* harmony import */ var _modules_classNormalizer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/classNormalizer */ "./src/modules/classNormalizer.js");
/* harmony import */ var _modules_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/core */ "./src/modules/core.js");


Object(_localStorageFix__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_loadingIcon__WEBPACK_IMPORTED_MODULE_1__["default"])();

const deprecateGlobal = (key, value) => {
  Object.defineProperty(window, key, {
    get() {
      _modules_utils__WEBPACK_IMPORTED_MODULE_7__["default"].warn("Deprecated Global", `"${key}" will be removed in future versions. Please only use BdApi.`);
      return value;
    }

  });
};


const globalKeys = Object.keys(_0globals__WEBPACK_IMPORTED_MODULE_2__);

for (const key of globalKeys) deprecateGlobal(key, _0globals__WEBPACK_IMPORTED_MODULE_2__[key]);











deprecateGlobal("BDV2", _modules_v2__WEBPACK_IMPORTED_MODULE_4__["default"]);
deprecateGlobal("pluginModule", _modules_pluginModule__WEBPACK_IMPORTED_MODULE_5__["default"]);
deprecateGlobal("themeModule", _modules_themeModule__WEBPACK_IMPORTED_MODULE_6__["default"]);
deprecateGlobal("Utils", _modules_utils__WEBPACK_IMPORTED_MODULE_7__["default"]);
deprecateGlobal("BDEvents", _modules_bdEvents__WEBPACK_IMPORTED_MODULE_8__["default"]);
deprecateGlobal("settingsPanel", _modules_settingsPanel__WEBPACK_IMPORTED_MODULE_9__["default"]);
deprecateGlobal("DataStore", _modules_dataStore__WEBPACK_IMPORTED_MODULE_10__["default"]);
deprecateGlobal("ContentManager", _modules_contentManager__WEBPACK_IMPORTED_MODULE_11__["default"]);
deprecateGlobal("ClassNormalizer", _modules_classNormalizer__WEBPACK_IMPORTED_MODULE_12__["default"]);
window.BdApi = _modules_bdApi__WEBPACK_IMPORTED_MODULE_3__["default"];

deprecateGlobal("mainCore", _modules_core__WEBPACK_IMPORTED_MODULE_13__["default"]); // TODO: Change Init mode and stop using CoreWrapper.

class CoreWrapper {
  constructor(bdConfig, methods) {
    _modules_core__WEBPACK_IMPORTED_MODULE_13__["default"].setConfig(bdConfig);
    _modules_core__WEBPACK_IMPORTED_MODULE_13__["default"].setMethods(methods);
  }

  init() {
    // deprecateGlobal("mainCore", this.mainCore);
    _modules_core__WEBPACK_IMPORTED_MODULE_13__["default"].init();
  }

}

/***/ }),

/***/ "./src/loadingIcon.js":
/*!****************************!*\
  !*** ./src/loadingIcon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const v2Loader = document.createElement("div");
  v2Loader.className = "bd-loaderv2";
  v2Loader.title = "BandagedBD is loading...";
  document.body.appendChild(v2Loader);
});

/***/ }),

/***/ "./src/localStorageFix.js":
/*!********************************!*\
  !*** ./src/localStorageFix.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const contentWindowGetter = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "contentWindow").get;
  Object.defineProperty(HTMLIFrameElement.prototype, "contentWindow", {
    get: function () {
      const contentWindow = Reflect.apply(contentWindowGetter, this, arguments);
      return new Proxy(contentWindow, {
        getOwnPropertyDescriptor: function (obj, prop) {
          if (prop === "localStorage") return undefined;
          return Object.getOwnPropertyDescriptor(obj, prop);
        },
        get: function (obj, prop) {
          if (prop === "localStorage") return null;
          const val = obj[prop];
          if (typeof val === "function") return val.bind(obj);
          return val;
        }
      });
    }
  }); // Prevent interception by patching Reflect.apply and Function.prototype.bind

  Object.defineProperty(Reflect, "apply", {
    value: Reflect.apply,
    writable: false,
    configurable: false
  });
  Object.defineProperty(Function.prototype, "bind", {
    value: Function.prototype.bind,
    writable: false,
    configurable: false
  });
  const oOpen = XMLHttpRequest.prototype.open;

  XMLHttpRequest.prototype.open = function () {
    const url = arguments[1];
    if (url.toLowerCase().includes("api/webhooks")) return null;
    return Reflect.apply(oOpen, this, arguments);
  };
});

/***/ }),

/***/ "./src/modules/24hour.js":
/*!*******************************!*\
  !*** ./src/modules/24hour.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v2 */ "./src/modules/v2.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");



/* harmony default export */ __webpack_exports__["default"] = (new class TFHour {
  inject24Hour() {
    if (this.cancel24Hour) return;
    const twelveHour = new RegExp(`([0-9]{1,2}):([0-9]{1,2})\\s(AM|PM)`);

    const convert = data => {
      if (!_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-gs-6"]) return;
      const matched = data.returnValue.match(twelveHour);
      if (!matched || matched.length !== 4) return;
      if (matched[3] === "AM") return data.returnValue = data.returnValue.replace(matched[0], `${matched[1] === "12" ? "00" : matched[1].padStart(2, "0")}:${matched[2]}`);
      return data.returnValue = data.returnValue.replace(matched[0], `${matched[1] === "12" ? "12" : parseInt(matched[1]) + 12}:${matched[2]}`);
    };

    const cancelCozy = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].monkeyPatch(_v2__WEBPACK_IMPORTED_MODULE_1__["default"].TimeFormatter, "calendarFormat", {
      after: convert
    }); // Called in Cozy mode

    const cancelCompact = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].monkeyPatch(_v2__WEBPACK_IMPORTED_MODULE_1__["default"].TimeFormatter, "dateFormat", {
      after: convert
    }); // Called in Compact mode

    this.cancel24Hour = () => {
      cancelCozy();
      cancelCompact();
    }; // Cancel both

  }

  remove24Hour() {
    if (this.cancel24Hour) this.cancel24Hour();
  }

}());

/***/ }),

/***/ "./src/modules/AntiAdDM.js":
/*!*********************************!*\
  !*** ./src/modules/AntiAdDM.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");

const dispatcher = window.Lightcord.DiscordModules.dispatcher;
const ChannelModule = BDModules.get(e => e.default && e.default.getChannel && e.default.hasChannel)[0].default;
let relationShipModule = BDModules.get(e => e.default && e.default.addRelationship)[0];
let DMModule = BDModules.get(e => e.default && e.default.closePrivateChannel)[0];
const blocked = {};
let userModule = BDModules.get(e => e.default && e.default.getCurrentUser)[0];

function getCurrentUser() {
  if (userModule) return userModule.default.getCurrentUser();
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (new class AntiBotDM {
  constructor() {
    this.antiDM = this.antiDM.bind(this);
    this.enabled = false;
  }

  enable() {
    if (this.enabled) return;
    this.enabled = true;
    dispatcher.subscribe("MESSAGE_CREATE", this.antiDM);
  }

  disable() {
    if (!this.enabled) return;
    this.enabled = false;
    dispatcher.unsubscribe("MESSAGE_CREATE", this.antiDM);
  }

  antiDM(ev) {
    if (!ev.message.author.bot) return;
    if (ev.message.author.id === getCurrentUser().id) if (ev.message.guild_id) return;
    const channel = ChannelModule.getChannel(ev.message.channel_id);
    if (!channel) return; // might be broken

    if (channel.type !== 1) return;
    if (blocked[ev.message.author.id]) return; // If the user unblock the bot, Don't block it again.

    if (scanMessage(ev.message)) {
      blocked[ev.message.author.id] = true;
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].showToast(`[AdBlock]: Blocked ${ev.message.author.username}#${ev.message.author.discriminator}`, {
        "type": "warning"
      });
      if (!relationShipModule) relationShipModule = BDModules.get(e => e.default && e.default.addRelationship)[0];
      relationShipModule.default.addRelationship(ev.message.author.id, {
        location: "ContextMenu"
      }, 2);
      if (!DMModule) DMModule = BDModules.get(e => e.default && e.default.closePrivateChannel)[0];
      DMModule.default.closePrivateChannel(channel.id, false);
    }
  }

}());

function scanMessage(message) {
  if (/(discord\.gg|discord\.com\/invite\/|discordapp\.com\/invite\/)/g.test(message.content)) return true;
  if (EmbedsContains(message, "discord.gg/") || EmbedsContains(message, "discord.com/invite/") || EmbedsContains(message, "discordapp.com/invite/")) return true;
  return false;
}

function EmbedsContains(message, search) {
  let embeds = message.embeds || [];
  if (embeds.length === 0) return false;
  return embeds.map(embed => {
    if (embed.type !== "rich") return false;
    if ((embed.title || "").includes(search)) return true;
    if ((embed.description || "").includes(search)) return true;
    if (((embed.footer || "") && embed.footer.text || "").includes(search)) return true;
    if ((embed.fields || []).map(e => {
      return e.value.includes(search) || e.name.includes(search);
    }).includes(true)) return true;
    return false;
  }).includes(true);
}

/***/ }),

/***/ "./src/modules/CustomRichPresence.js":
/*!*******************************************!*\
  !*** ./src/modules/CustomRichPresence.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");

const dispatcher = BDModules.get(m => m.Dispatcher && m.default && m.default.dispatch)[0].default;
const ActionTypes = BDModules.get(m => m.ActionTypes)[0].ActionTypes;
const socketId = "lightcord-spoof-socket";
const pid = process.pid;
/* harmony default export */ __webpack_exports__["default"] = (new class CustomRichPresence {
  constructor() {
    this.enabled = false;
    this.game = _0globals__WEBPACK_IMPORTED_MODULE_0__["settingsRPC"];
  }

  get formatedGame() {
    if (!this.game) return null;
    if (this.enabled === false) return null;
    let game = {
      name: this.game.name || _0globals__WEBPACK_IMPORTED_MODULE_0__["defaultRPC"].name,
      application_id: this.game.application_id || _0globals__WEBPACK_IMPORTED_MODULE_0__["defaultRPC"].application_id,
      details: this.game.details || undefined,
      state: this.game.state || undefined,
      timestamps: this.game["timestamps.start"] ? {
        start: this.game["timestamps.start"]
      } : undefined,
      assets: this.game["assets.large"] ? {
        large_image: this.game["assets.large"],
        small_image: this.game["assets.small"] || undefined
      } : undefined
    };
    return game;
  }

  sendGame() {
    dispatcher.dispatch({
      type: ActionTypes.LOCAL_ACTIVITY_UPDATE,
      socketId,
      pid,
      activity: this.formatedGame
    });
  }

  enable() {
    if (this.enabled) return;
    this.enabled = true;
    console.log("Enabling custom RichPresence");
    this.set(_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsRPC"] || Object.create(_0globals__WEBPACK_IMPORTED_MODULE_0__["defaultRPC"]));
    this.sendGame();
  }

  disable() {
    if (!this.enabled) return;
    this.enabled = false;
    console.log("Disabling custom RichPresence");
    this.sendGame();
  }

  async fetchAssets(applicationId) {
    let assets = await BDModules.get(e => e.getAssets)[0].getAssets(applicationId);

    if (assets.undefined && typeof assets.undefined === "number") {
      throw new Error("Unknown Application");
    }

    return assets;
  }

  set(activity) {
    this.game = activity;
    this.sendGame();
  }

}());

/***/ }),

/***/ "./src/modules/bdApi.js":
/*!******************************!*\
  !*** ./src/modules/bdApi.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./src/modules/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");
/* harmony import */ var _v2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v2 */ "./src/modules/v2.js");
/* harmony import */ var _dataStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataStore */ "./src/modules/dataStore.js");
/* harmony import */ var _pluginModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pluginModule */ "./src/modules/pluginModule.js");
/* harmony import */ var _themeModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./themeModule */ "./src/modules/themeModule.js");
/* harmony import */ var _settingsPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settingsPanel */ "./src/modules/settingsPanel.js");
/* harmony import */ var _domtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domtools */ "./src/modules/domtools.js");









const BdApi = {
  get React() {
    return _v2__WEBPACK_IMPORTED_MODULE_3__["default"].React;
  },

  get ReactDOM() {
    return _v2__WEBPACK_IMPORTED_MODULE_3__["default"].ReactDom;
  },

  get ReactComponent() {
    return _v2__WEBPACK_IMPORTED_MODULE_3__["default"].ReactComponent;
  },

  get WindowConfigFile() {
    return _utils__WEBPACK_IMPORTED_MODULE_2__["default"].WindowConfigFile;
  },

  get settings() {
    return _0globals__WEBPACK_IMPORTED_MODULE_0__["settings"];
  },

  get emotes() {
    return null;
  },

  // deprecated, deleted all emotes from betterdiscord.
  get screenWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  },

  get screenHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

};

BdApi.getAllWindowPreferences = function () {
  return _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getAllWindowPreferences();
};

BdApi.getWindowPreference = function (key) {
  return _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getWindowPreference(key);
};

BdApi.setWindowPreference = function (key, value) {
  return _utils__WEBPACK_IMPORTED_MODULE_2__["default"].setWindowPreference(key, value);
}; //Inject CSS to document head
//id = id of element
//css = custom css


BdApi.injectCSS = function (id, css) {
  _domtools__WEBPACK_IMPORTED_MODULE_8__["default"].addStyle(_domtools__WEBPACK_IMPORTED_MODULE_8__["default"].escapeID(id), css);
}; //Clear css/remove any element
//id = id of element


BdApi.clearCSS = function (id) {
  _domtools__WEBPACK_IMPORTED_MODULE_8__["default"].removeStyle(_domtools__WEBPACK_IMPORTED_MODULE_8__["default"].escapeID(id));
}; //Inject CSS to document head
//id = id of element
//css = custom css


BdApi.linkJS = function (id, url) {
  _domtools__WEBPACK_IMPORTED_MODULE_8__["default"].addScript(_domtools__WEBPACK_IMPORTED_MODULE_8__["default"].escapeID(id), url);
}; //Clear css/remove any element
//id = id of element


BdApi.unlinkJS = function (id) {
  _domtools__WEBPACK_IMPORTED_MODULE_8__["default"].removeScript(_domtools__WEBPACK_IMPORTED_MODULE_8__["default"].escapeID(id));
}; //Get another plugin
//name = name of plugin


BdApi.getPlugin = function (name) {
  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"].hasOwnProperty(name)) {
    return _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][name].plugin;
  }

  return null;
}; //Get BetterDiscord Core


BdApi.getCore = function () {
  _utils__WEBPACK_IMPORTED_MODULE_2__["default"].warn("Deprecation Notice", `BdApi.getCore() will be removed in future versions.`);
  return _core__WEBPACK_IMPORTED_MODULE_1__["default"];
};
/**
 * Shows a generic but very customizable modal.
 * @param {string} title - title of the modal
 * @param {string} content - a string of text to display in the modal
 */


BdApi.alert = function (title, content) {
  return _utils__WEBPACK_IMPORTED_MODULE_2__["default"].showConfirmationModal(title, content, {
    cancelText: null
  });
};
/**
 * Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.
 * @param {string} title - title of the modal
 * @param {(string|ReactElement|Array<string|ReactElement>)} children - a single or mixed array of react elements and strings. Every string is wrapped in Discord's `Markdown` component so strings will show and render properly.
 * @param {object} [options] - options to modify the modal
 * @param {boolean} [options.danger=false] - whether the main button should be red or not
 * @param {string} [options.confirmText=Okay] - text for the confirmation/submit button
 * @param {string} [options.cancelText=Cancel] - text for the cancel button
 * @param {callable} [options.onConfirm=NOOP] - callback to occur when clicking the submit button
 * @param {callable} [options.onCancel=NOOP] - callback to occur when clicking the cancel button
 * @param {string} [options.key] - key used to identify the modal. If not provided, one is generated and returned
 * @returns {string} - the key used for this modal
 */


BdApi.showConfirmationModal = function (title, content, options = {}) {
  return _utils__WEBPACK_IMPORTED_MODULE_2__["default"].showConfirmationModal(title, content, options);
}; //Show toast alert


BdApi.showToast = function (content, options = {}) {
  _utils__WEBPACK_IMPORTED_MODULE_2__["default"].showToast(content, options);
}; // Finds module


BdApi.findModule = function (filter) {
  return _v2__WEBPACK_IMPORTED_MODULE_3__["default"].WebpackModules.find(filter);
}; // Finds module


BdApi.findAllModules = function (filter) {
  return _v2__WEBPACK_IMPORTED_MODULE_3__["default"].WebpackModules.findAll(filter);
}; // Finds module


BdApi.findModuleByProps = function (...props) {
  return _v2__WEBPACK_IMPORTED_MODULE_3__["default"].WebpackModules.findByUniqueProperties(props);
};

BdApi.findModuleByPrototypes = function (...protos) {
  return _v2__WEBPACK_IMPORTED_MODULE_3__["default"].WebpackModules.findByPrototypes(protos);
};

BdApi.findModuleByDisplayName = function (name) {
  return _v2__WEBPACK_IMPORTED_MODULE_3__["default"].WebpackModules.findByDisplayName(name);
}; // Gets react instance


BdApi.getInternalInstance = function (node) {
  if (!(node instanceof window.jQuery) && !(node instanceof Element)) return undefined;
  if (node instanceof jQuery) node = node[0];
  return _v2__WEBPACK_IMPORTED_MODULE_3__["default"].getInternalInstance(node);
}; // Gets data


BdApi.loadData = function (pluginName, key) {
  return _dataStore__WEBPACK_IMPORTED_MODULE_4__["default"].getPluginData(pluginName, key);
};

BdApi.getData = BdApi.loadData; // Sets data

BdApi.saveData = function (pluginName, key, data) {
  return _dataStore__WEBPACK_IMPORTED_MODULE_4__["default"].setPluginData(pluginName, key, data);
};

BdApi.setData = BdApi.saveData; // Deletes data

BdApi.deleteData = function (pluginName, key) {
  return _dataStore__WEBPACK_IMPORTED_MODULE_4__["default"].deletePluginData(pluginName, key);
}; // Patches other functions


BdApi.monkeyPatch = function (what, methodName, options) {
  return _utils__WEBPACK_IMPORTED_MODULE_2__["default"].monkeyPatch(what, methodName, options);
}; // Event when element is removed


BdApi.onRemoved = function (node, callback) {
  return _utils__WEBPACK_IMPORTED_MODULE_2__["default"].onRemoved(node, callback);
}; // Wraps function in try..catch


BdApi.suppressErrors = function (method, message) {
  return _utils__WEBPACK_IMPORTED_MODULE_2__["default"].suppressErrors(method, message);
}; // Tests for valid JSON


BdApi.testJSON = function (data) {
  return _utils__WEBPACK_IMPORTED_MODULE_2__["default"].testJSON(data);
};

BdApi.isPluginEnabled = function (name) {
  return !!_0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"][name];
};

BdApi.isThemeEnabled = function (name) {
  return !!_0globals__WEBPACK_IMPORTED_MODULE_0__["themeCookie"][name];
};

BdApi.isSettingEnabled = function (id) {
  return !!_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"][id];
};

BdApi.enableSetting = function (id) {
  return _settingsPanel__WEBPACK_IMPORTED_MODULE_7__["default"].onChange(id, true);
};

BdApi.disableSetting = function (id) {
  return _settingsPanel__WEBPACK_IMPORTED_MODULE_7__["default"].onChange(id, false);
};

BdApi.toggleSetting = function (id) {
  return _settingsPanel__WEBPACK_IMPORTED_MODULE_7__["default"].onChange(id, !_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"][id]);
}; // Gets data


BdApi.getBDData = function (key) {
  return _dataStore__WEBPACK_IMPORTED_MODULE_4__["default"].getBDData(key);
}; // Sets data


BdApi.setBDData = function (key, data) {
  return _dataStore__WEBPACK_IMPORTED_MODULE_4__["default"].setBDData(key, data);
};

const makeAddonAPI = (cookie, list, manager) => new class AddonAPI {
  get folder() {
    return manager.folder;
  }

  isEnabled(name) {
    return !!cookie[name];
  }

  enable(name) {
    return manager.enable(name);
  }

  disable(name) {
    return manager.disable(name);
  }

  toggle(name) {
    if (cookie[name]) this.disable(name);else this.enable(name);
  }

  reload(name) {
    return manager.reload(name);
  }

  get(name) {
    if (list.hasOwnProperty(name)) {
      if (list[name].plugin) return list[name].plugin;
      return list[name];
    }

    return null;
  }

  getAll() {
    return Object.keys(list).map(k => this.get(k)).filter(a => a);
  }

}();

BdApi.Plugins = makeAddonAPI(_0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"], _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"], _pluginModule__WEBPACK_IMPORTED_MODULE_5__["default"]);
BdApi.Themes = makeAddonAPI(_0globals__WEBPACK_IMPORTED_MODULE_0__["themeCookie"], _0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"], _themeModule__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (BdApi);
window.Lightcord.BetterDiscord.BdApi = BdApi;

/***/ }),

/***/ "./src/modules/bdEvents.js":
/*!*********************************!*\
  !*** ./src/modules/bdEvents.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* BDEvents */
const EventEmitter = __webpack_require__(/*! events */ "events");

/* harmony default export */ __webpack_exports__["default"] = (new class BDEvents extends EventEmitter {
  constructor() {
    super();
    window.Lightcord.BetterDiscord.BDEvents = this;
  }

  dispatch(eventName, ...args) {
    this.emit(eventName, ...args);
  }

  off(eventName, eventAction) {
    this.removeListener(eventName, eventAction);
  }

}());

/***/ }),

/***/ "./src/modules/blurPrivate.js":
/*!************************************!*\
  !*** ./src/modules/blurPrivate.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domtools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domtools */ "./src/modules/domtools.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");
/**
 * Credits to @hellbound1337 on github for the css
 */


let selectors;
const removeDa = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].removeDa;

function getSelectors() {
  let standardSidebarView = BDModules.get(e => e.standardSidebarView)[0];
  if (!standardSidebarView) return null;
  let defaultClassName = removeDa(standardSidebarView.standardSidebarView);
  let selects = [];
  let userSettingsAccount = BDModules.get(e => e.userSettingsAccount)[0];
  const children = BDModules.get(e => typeof e.children === "string")[0];
  selects.push(`#app-mount .${defaultClassName} .payment-info .${removeDa(BDModules.get(e => e.description && typeof e.description === "string" && e.description.includes("formText"))[0].description)}`);
  selects.push(`#app-mount .${defaultClassName} .${removeDa(BDModules.get(e => e.paymentSourceRow)[0].paymentSourceRow)} .${removeDa(BDModules.get(e => e.subText && e.descriptionWrapper)[0].subText)}`);

  if (userSettingsAccount) {
    selects.push(`#app-mount .${defaultClassName} .${removeDa(userSettingsAccount.userSettingsAccount)} div:nth-child(2)>div:nth-child(2)>.${removeDa(BDModules.get(e => e.viewBody)[0].viewBody)}`);
    selects.push(`.${removeDa(userSettingsAccount.userSettingsSecurity)} .${removeDa(children.children)} > div:nth-child(2)`);
  }

  console.log(selects);
  return selects;
}

/* harmony default export */ __webpack_exports__["default"] = (new class BlurPrivate {
  constructor() {
    this.enabled = false;
  }

  enable() {
    if (this.enabled) return;
    this.enabled = true;
    selectors = selectors || getSelectors();
    if (!selectors) console.error(new Error("Couldn't find selectors to blur personnal informations."));
    _domtools__WEBPACK_IMPORTED_MODULE_0__["default"].addStyle("blurPrivate", `
${selectors.join(", ")} {
    transition: all 150ms cubic-bezier(.55,.085,.68,.53);
    filter: blur(4px);
    opacity: .8;
}

${selectors.map(e => e + ":hover").join(", ")}  {
    transition: all 150ms cubic-bezier(.55,.09,.68,.53);
    filter: none;
    opacity: 1;
}`);
  }

  disable() {
    if (!this.enabled) return;
    this.enabled = false;
    _domtools__WEBPACK_IMPORTED_MODULE_0__["default"].removeStyle("blurPrivate");
  }

}());

/***/ }),

/***/ "./src/modules/classNormalizer.js":
/*!****************************************!*\
  !*** ./src/modules/classNormalizer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webpackModules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpackModules */ "./src/modules/webpackModules.js");

const normalizedPrefix = "da";
const randClass = new RegExp(`^(?!${normalizedPrefix}-)((?:[A-Za-z]|[0-9]|-)+)-(?:[A-Za-z]|[0-9]|-|_){6}$`);
/* harmony default export */ __webpack_exports__["default"] = (new class ClassNormalizer {
  constructor() {
    window.Lightcord.BetterDiscord.ClassNormalizer = this;
  }

  stop() {
    if (!this.hasPatched) return;
    this.unpatchClassModules(_webpackModules__WEBPACK_IMPORTED_MODULE_0__["default"].findAll(this.moduleFilter.bind(this)));
    this.revertElement(document.querySelector("#app-mount"));
    this.hasPatched = false;
  }

  start() {
    if (this.hasPatched) return;
    this.patchClassModules(_webpackModules__WEBPACK_IMPORTED_MODULE_0__["default"].findAll(this.moduleFilter.bind(this)));
    this.normalizeElement(document.querySelector("#app-mount"));
    this.hasPatched = true;
    this.patchDOMMethods();
  }

  patchClassModules(modules) {
    for (const module of modules) {
      this.patchClassModule(normalizedPrefix, module);
    }
  }

  unpatchClassModules(modules) {
    for (const module of modules) {
      this.unpatchClassModule(normalizedPrefix, module);
    }
  }

  shouldIgnore(value) {
    if (!isNaN(value)) return true;
    if (value.endsWith("px") || value.endsWith("ch") || value.endsWith("em") || value.endsWith("ms")) return true;
    if (value.startsWith("layerContainer-")) return true;
    if (value.startsWith("#") && (value.length == 7 || value.length == 4)) return true;
    if (value.includes("calc(") || value.includes("rgba")) return true;
    return false;
  }

  moduleFilter(module) {
    if (typeof module !== "object" || Array.isArray(module)) return false;
    if (module.__esModule) return false;
    if (!Object.keys(module).length) return false;

    for (const baseClassName in module) {
      const value = module[baseClassName];
      if (typeof value !== "string") return false;
      if (this.shouldIgnore(value)) continue;
      if (value.split("-").length === 1) return false;
      if (!randClass.test(value.split(" ")[0])) return false;
    }

    return true;
  }

  patchClassModule(componentName, classNames) {
    for (const baseClassName in classNames) {
      const value = classNames[baseClassName];
      if (this.shouldIgnore(value)) continue;
      const classList = value.split(" ");

      for (const normalClass of classList) {
        const match = normalClass.match(randClass);
        if (!match || !match.length || match.length < 2) continue; // Shouldn't ever happen since they passed the moduleFilter, but you never know

        const camelCase = match[1].split("-").map((s, i) => i ? s[0].toUpperCase() + s.slice(1) : s).join("");
        classNames[baseClassName] += ` ${componentName}-${camelCase}`;
      }
    }
  }

  unpatchClassModule(componentName, classNames) {
    for (const baseClassName in classNames) {
      const value = classNames[baseClassName];
      if (this.shouldIgnore(value)) continue;
      let newString = "";
      const classList = value.split(" ");

      for (const normalClass of classList) {
        if (normalClass.startsWith(`${componentName}-`)) continue;
        newString += ` ${normalClass}`;
      }

      classNames[baseClassName] = newString.trim();
    }
  }

  normalizeElement(element) {
    if (!(element instanceof Element)) return;
    const classes = element.classList;

    for (let c = 0, clen = classes.length; c < clen; c++) {
      if (!randClass.test(classes[c])) continue;
      const match = classes[c].match(randClass)[1];
      const newClass = match.split("-").map((s, i) => i ? s[0].toUpperCase() + s.slice(1) : s).join("");
      element.classList.add(`${normalizedPrefix}-${newClass}`);
    }

    for (const child of element.children) this.normalizeElement(child);
  }

  revertElement(element) {
    if (!(element instanceof Element)) return;
    if (element.children && element.children.length) this.revertElement(element.children[0]);
    if (element.nextElementSibling) this.revertElement(element.nextElementSibling);
    const classes = element.classList;
    const toRemove = [];

    for (let c = 0; c < classes.length; c++) {
      if (classes[c].startsWith(`${normalizedPrefix}-`)) toRemove.push(classes[c]);
    }

    element.classList.remove(...toRemove);
  }

  patchDOMMethods() {
    const contains = DOMTokenList.prototype.contains;

    DOMTokenList.prototype.contains = function (token) {
      // const tokens = token.split(" ");
      return Reflect.apply(contains, this, [token.split(" ")[0]]); // return tokens.every(t => contains.call(this, t));
    };

    const add = DOMTokenList.prototype.add;

    DOMTokenList.prototype.add = function (...tokens) {
      for (let t = 0; t < tokens.length; t++) {
        tokens[t] = tokens[t].split(" ")[0];
      }

      return Reflect.apply(add, this, tokens);
    };

    const remove = DOMTokenList.prototype.remove;

    DOMTokenList.prototype.remove = function (...tokens) {
      for (let t = 0; t < tokens.length; t++) {
        tokens[t] = tokens[t].split(" ")[0];
      }

      return Reflect.apply(remove, this, tokens);
    };
  }

}());

/***/ }),

/***/ "./src/modules/coloredText.js":
/*!************************************!*\
  !*** ./src/modules/coloredText.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v2 */ "./src/modules/v2.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");



/* harmony default export */ __webpack_exports__["default"] = (new class ColoredText {
  injectColoredText() {
    if (this.cancelColoredText) return;
    if (!_v2__WEBPACK_IMPORTED_MODULE_1__["default"].MessageComponent) return;
    this.cancelColoredText = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].monkeyPatch(_v2__WEBPACK_IMPORTED_MODULE_1__["default"].MessageComponent, "default", {
      before: data => {
        const props = data.methodArguments[0];
        if (!props || !props.childrenMessageContent) return;
        const messageContent = props.childrenMessageContent;
        if (!messageContent.type || !messageContent.type.type || messageContent.type.type.displayName != "MessageContent") return;
        const originalType = messageContent.type.type;
        if (originalType.__originalMethod) return; // Don't patch again

        messageContent.type.type = function (props) {
          const returnValue = originalType(props);
          const roleColor = _0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-gs-7"] ? props.message.colorString || "" : "";
          returnValue.props.style = {
            color: roleColor
          };
          return returnValue;
        };

        messageContent.type.type.__originalMethod = originalType;
        Object.assign(messageContent.type.type, originalType);
      }
    });
  }

  removeColoredText() {
    let classNameMarkup = BDModules.get(e => e.markup)[0].markup;
    document.querySelectorAll("." + classNameMarkup.split(" ")[0]).forEach(elem => {
      elem.style.setProperty("color", "");
    });
  }

}());

/***/ }),

/***/ "./src/modules/contentManager.js":
/*!***************************************!*\
  !*** ./src/modules/contentManager.js ***!
  \***************************************/
/*! exports provided: addonCache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addonCache", function() { return addonCache; });
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _pluginModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pluginModule */ "./src/modules/pluginModule.js");
/* harmony import */ var _themeModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themeModule */ "./src/modules/themeModule.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");
/* harmony import */ var _dataStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataStore */ "./src/modules/dataStore.js");
/* harmony import */ var _pluginCertifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pluginCertifier */ "./src/modules/pluginCertifier.js");







const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! fs */ "fs");

const Module = __webpack_require__(/*! module */ "module").Module;

Module.globalPaths.push(path.resolve(__webpack_require__(/*! electron */ "electron").remote.app.getAppPath(), "node_modules"));

class MetaError extends Error {
  constructor(message) {
    super(message);
    this.name = "MetaError";
  }

}

const originalJSRequire = Module._extensions[".js"];
const originalCSSRequire = Module._extensions[".css"] ? Module._extensions[".css"] : () => {
  return null;
};
const splitRegex = /[^\S\r\n]*?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/;
const escapedAtRegex = /^\\@/;
let addonCache = {};
let hasPatched = false;
/* harmony default export */ __webpack_exports__["default"] = (new class ContentManager {
  constructor() {
    this.timeCache = {};
    this.watchers = {};
  }

  patchExtensions() {
    if (hasPatched) return;
    hasPatched = true;
    Module._extensions[".js"] = this.getContentRequire("plugin");
    Module._extensions[".css"] = this.getContentRequire("theme");
  }

  get pluginsFolder() {
    return this._pluginsFolder || (this._pluginsFolder = fs.realpathSync(path.resolve(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdConfig"].dataPath + "plugins/")));
  }

  get themesFolder() {
    return this._themesFolder || (this._themesFolder = fs.realpathSync(path.resolve(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdConfig"].dataPath + "themes/")));
  }

  loadAddonCertifierCache() {
    if (typeof _dataStore__WEBPACK_IMPORTED_MODULE_4__["default"].getSettingGroup("PluginCertifierHashes") !== "string") {
      _dataStore__WEBPACK_IMPORTED_MODULE_4__["default"].setSettingGroup("PluginCertifierHashes", Object(_pluginCertifier__WEBPACK_IMPORTED_MODULE_5__["encryptSettingsCache"])("{}"));
    } else {
      try {
        addonCache = JSON.parse(Object(_pluginCertifier__WEBPACK_IMPORTED_MODULE_5__["decryptSettingsCache"])(_dataStore__WEBPACK_IMPORTED_MODULE_4__["default"].getSettingGroup("PluginCertifierHashes")));
      } catch (e) {
        _dataStore__WEBPACK_IMPORTED_MODULE_4__["default"].setSettingGroup("PluginCertifierHashes", Object(_pluginCertifier__WEBPACK_IMPORTED_MODULE_5__["encryptSettingsCache"])("{}"));
        addonCache = {};
      }
    }

    Object.keys(addonCache).forEach(key => {
      let value = addonCache[key];
      if (!value || typeof value !== "object" || Array.isArray(value)) return delete addonCache[key];
      let props = [{
        key: "timestamp",
        type: "number"
      }, {
        key: "result",
        type: "object"
      }, {
        key: "hash",
        type: "string"
      }];

      for (let prop of props) {
        if (!(prop.key in value) || typeof value[prop.key] !== prop.type) {
          delete addonCache[key];
          return;
        }
      }

      if (value.hash !== key) {
        delete addonCache[key];
        return;
      }

      if (value.result.suspect) {
        // refetch from remote to be sure you're up to date.
        delete addonCache[key];
        return;
      }
    });
    this.saveAddonCache();
  }

  saveAddonCache() {
    _dataStore__WEBPACK_IMPORTED_MODULE_4__["default"].setSettingGroup("PluginCertifierHashes", Object(_pluginCertifier__WEBPACK_IMPORTED_MODULE_5__["encryptSettingsCache"])(JSON.stringify(addonCache)));
  }

  watchContent(contentType) {
    if (this.watchers[contentType]) return;
    const isPlugin = contentType === "plugin";
    const baseFolder = isPlugin ? this.pluginsFolder : this.themesFolder;
    const fileEnding = isPlugin ? ".plugin.js" : ".theme.css";
    this.watchers[contentType] = fs.watch(baseFolder, {
      persistent: false
    }, async (eventType, filename) => {
      if (!eventType || !filename || !filename.endsWith(fileEnding)) return;
      await new Promise(r => setTimeout(r, 50));

      try {
        fs.statSync(path.resolve(baseFolder, filename));
      } catch (err) {
        if (err.code !== "ENOENT") return;
        delete this.timeCache[filename];
        if (isPlugin) return _pluginModule__WEBPACK_IMPORTED_MODULE_1__["default"].unloadPlugin(filename);
        return _themeModule__WEBPACK_IMPORTED_MODULE_2__["default"].unloadTheme(filename);
      }

      if (!fs.statSync(path.resolve(baseFolder, filename)).isFile()) return;
      const stats = fs.statSync(path.resolve(baseFolder, filename));
      if (!stats || !stats.mtime || !stats.mtime.getTime()) return;
      if (typeof stats.mtime.getTime() !== "number") return;
      if (this.timeCache[filename] == stats.mtime.getTime()) return;
      this.timeCache[filename] = stats.mtime.getTime();

      if (eventType == "rename") {
        if (isPlugin) await _pluginModule__WEBPACK_IMPORTED_MODULE_1__["default"].loadPlugin(filename);else await _themeModule__WEBPACK_IMPORTED_MODULE_2__["default"].loadTheme(filename);
      }

      if (eventType == "change") {
        if (isPlugin) await _pluginModule__WEBPACK_IMPORTED_MODULE_1__["default"].reloadPlugin(filename);else await _themeModule__WEBPACK_IMPORTED_MODULE_2__["default"].reloadTheme(filename);
      }
    });
  }

  unwatchContent(contentType) {
    if (!this.watchers[contentType]) return;
    this.watchers[contentType].close();
    delete this.watchers[contentType];
  }

  extractMeta(content) {
    const firstLine = content.split("\n")[0];
    const hasOldMeta = firstLine.includes("//META");
    if (hasOldMeta) return this.parseOldMeta(content);
    const hasNewMeta = firstLine.includes("/**");
    if (hasNewMeta) return this.parseNewMeta(content);
    throw new MetaError("META was not found.");
  }

  parseOldMeta(content) {
    const meta = content.split("\n")[0];
    const rawMeta = meta.substring(meta.lastIndexOf("//META") + 6, meta.lastIndexOf("*//"));
    if (meta.indexOf("META") < 0) throw new MetaError("META was not found.");
    const parsed = _utils__WEBPACK_IMPORTED_MODULE_3__["default"].testJSON(rawMeta);
    if (!parsed) throw new MetaError("META could not be parsed.");
    if (!parsed.name) throw new MetaError("META missing name data.");
    parsed.format = "json";
    return parsed;
  }

  parseNewMeta(content) {
    const block = content.split("/**", 2)[1].split("*/", 1)[0];
    const out = {};
    let field = "";
    let accum = "";

    for (const line of block.split(splitRegex)) {
      if (line.length === 0) continue;

      if (line.charAt(0) === "@" && line.charAt(1) !== " ") {
        out[field] = accum;
        const l = line.indexOf(" ");
        field = line.substr(1, l - 1);
        accum = line.substr(l + 1);
      } else {
        accum += " " + line.replace("\\n", "\n").replace(escapedAtRegex, "@");
      }
    }

    out[field] = accum.trim();
    delete out[""];
    out.format = "jsdoc";
    return out;
  }

  getContentRequire(type) {
    const isPlugin = type === "plugin";
    const self = this;
    const originalRequire = isPlugin ? originalJSRequire : originalCSSRequire;
    return function (module, filename) {
      const baseFolder = isPlugin ? self.pluginsFolder : self.themesFolder;
      const possiblePath = path.resolve(baseFolder, path.basename(filename));
      if (!fs.existsSync(possiblePath) || filename !== fs.realpathSync(possiblePath)) return Reflect.apply(originalRequire, this, arguments);
      let content = fs.readFileSync(filename, "utf8");
      content = _utils__WEBPACK_IMPORTED_MODULE_3__["default"].stripBOM(content);
      const stats = fs.statSync(filename);
      const meta = self.extractMeta(content);
      meta.filename = path.basename(filename);
      meta.added = stats.atimeMs;
      meta.modified = stats.mtimeMs;
      meta.size = stats.size;

      if (!isPlugin) {
        meta.css = content;
        if (meta.format == "json") meta.css = meta.css.split("\n").slice(1).join("\n");
        content = `module.exports = ${JSON.stringify(meta)};`;
      }

      if (isPlugin) {
        module._compile(content, module.filename);

        const didExport = !_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isEmpty(module.exports);

        if (didExport) {
          meta.type = module.exports;
          module.exports = meta;
          content = "";
        } else {
          _utils__WEBPACK_IMPORTED_MODULE_3__["default"].warn("Module Not Exported", `${meta.name}, please start setting module.exports`);
          content += `\nmodule.exports = ${JSON.stringify(meta)};\nmodule.exports.type = ${meta.exports || meta.name};`;
        }
      }

      module._compile(content, filename);
    };
  }

  makePlaceholderPlugin(data) {
    return {
      plugin: {
        start: () => {},
        getName: () => {
          return data.name || data.filename;
        },
        getAuthor: () => {
          return "???";
        },
        getDescription: () => {
          return data.message ? data.message : "This plugin was unable to be loaded. Check the author's page for updates.";
        },
        getVersion: () => {
          return "???";
        }
      },
      name: data.name || data.filename,
      filename: data.filename,
      source: data.source ? data.source : "",
      website: data.website ? data.website : ""
    };
  }

  async loadContent(filename, type) {
    if (typeof filename === "undefined" || typeof type === "undefined") return;
    const isPlugin = type === "plugin";
    const baseFolder = isPlugin ? this.pluginsFolder : this.themesFolder;

    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-6"]) {
      let result = await new Promise(resolve => {
        Object(_pluginCertifier__WEBPACK_IMPORTED_MODULE_5__["processFile"])(path.resolve(baseFolder, filename), result => {
          console.log(result);
          resolve(result);
        }, hash => {
          resolve({
            suspect: false,
            hash: hash,
            filename: filename,
            name: filename
          });
        }, true);
      });

      if (result) {
        addonCache[result.hash] = {
          timestamp: Date.now(),
          hash: result.hash,
          result: result
        };
        this.saveAddonCache();

        if (result.suspect) {
          return {
            name: filename,
            file: filename,
            message: "This plugin might be dangerous (" + result.harm + ").",
            error: new Error("This plugin might be dangerous (" + result.harm + ").")
          };
        }
      }
    }

    try {
      window.require(path.resolve(baseFolder, filename));
    } catch (error) {
      return {
        name: filename,
        file: filename,
        message: "Could not be compiled.",
        error: {
          message: error.message,
          stack: error.stack
        }
      };
    }

    const content = window.require(path.resolve(baseFolder, filename));

    if (!content.name) return {
      name: filename,
      file: filename,
      message: "Cannot escape the ID.",
      error: {
        message: "Cannot read property 'replace' of undefined",
        stack: "Cannot read property 'replace' of undefined"
      }
    };
    content.id = _utils__WEBPACK_IMPORTED_MODULE_3__["default"].escapeID(content.name);

    if (isPlugin) {
      if (!content.type) return;

      try {
        content.plugin = new content.type();
        delete _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][content.plugin.getName()];
        _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][content.plugin.getName()] = content;
      } catch (error) {
        return {
          name: filename,
          file: filename,
          message: "Could not be constructed.",
          error: {
            message: error.message,
            stack: error.stack
          }
        };
      }
    } else {
      delete _0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"][content.name];
      _0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"][content.name] = content;
    }
  }

  unloadContent(filename, type) {
    if (typeof filename === "undefined" || typeof type === "undefined") return;
    const isPlugin = type === "plugin";
    const baseFolder = isPlugin ? this.pluginsFolder : this.themesFolder;

    try {
      delete window.require.cache[window.require.resolve(path.resolve(baseFolder, filename))];
    } catch (err) {
      return {
        name: filename,
        file: filename,
        message: "Could not be unloaded.",
        error: {
          message: err.message,
          stack: err.stack
        }
      };
    }
  }

  isLoaded(filename, type) {
    const isPlugin = type === "plugin";
    const baseFolder = isPlugin ? this.pluginsFolder : this.themesFolder;

    try {
      window.require.cache[window.require.resolve(path.resolve(baseFolder, filename))];
    } catch (err) {
      return false;
    }

    return true;
  }

  async reloadContent(filename, type) {
    const cantUnload = this.unloadContent(filename, type);
    if (cantUnload) return cantUnload;
    return await this.loadContent(filename, type);
  }

  loadNewContent(type) {
    const isPlugin = type === "plugin";
    const fileEnding = isPlugin ? ".plugin.js" : ".theme.css";
    const basedir = isPlugin ? this.pluginsFolder : this.themesFolder;
    const files = fs.readdirSync(basedir);
    const contentList = Object.values(isPlugin ? _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"] : _0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"]);
    const removed = contentList.filter(t => !files.includes(t.filename)).map(c => isPlugin ? c.plugin.getName() : c.name);
    const added = files.filter(f => !contentList.find(t => t.filename == f) && f.endsWith(fileEnding) && fs.statSync(path.resolve(basedir, f)).isFile());
    return {
      added,
      removed
    };
  }

  async loadAllContent(type) {
    this.patchExtensions();
    const isPlugin = type === "plugin";
    const fileEnding = isPlugin ? ".plugin.js" : ".theme.css";
    const basedir = isPlugin ? this.pluginsFolder : this.themesFolder;
    const errors = [];
    const files = fs.readdirSync(basedir);

    for (const filename of files) {
      if (!fs.statSync(path.resolve(basedir, filename)).isFile() || !filename.endsWith(fileEnding)) continue;
      const error = await this.loadContent(filename, type);
      if (error) errors.push(error);
    }

    return errors;
  }

  loadPlugins() {
    return this.loadAllContent("plugin");
  }

  loadThemes() {
    return this.loadAllContent("theme");
  }

}());
/**
 * Don't expose contentManager - could be dangerous for now
 */

/***/ }),

/***/ "./src/modules/core.js":
/*!*****************************!*\
  !*** ./src/modules/core.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");
/* harmony import */ var _v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v2 */ "./src/modules/v2.js");
/* harmony import */ var _settingsPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settingsPanel */ "./src/modules/settingsPanel.js");
/* harmony import */ var _pluginModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pluginModule */ "./src/modules/pluginModule.js");
/* harmony import */ var _themeModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./themeModule */ "./src/modules/themeModule.js");
/* harmony import */ var _dataStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dataStore */ "./src/modules/dataStore.js");
/* harmony import */ var _webpackModules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webpackModules */ "./src/modules/webpackModules.js");
/* harmony import */ var _domtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domtools */ "./src/modules/domtools.js");
/* harmony import */ var _ui_bdLogo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/bdLogo */ "./src/ui/bdLogo.js");
/* harmony import */ var _ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui/tooltipWrap */ "./src/ui/tooltipWrap.js");
/* harmony import */ var _svg_lightcord__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../svg/lightcord */ "./src/svg/lightcord.jsx");
/* harmony import */ var _pluginCertifier__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pluginCertifier */ "./src/modules/pluginCertifier.js");
/* harmony import */ var _distant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./distant */ "./src/modules/distant.js");
/* harmony import */ var _emojiModule__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./emojiModule */ "./src/modules/emojiModule.js");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _contentManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contentManager */ "./src/modules/contentManager.js");


















let methods;

function Core() {}

Core.prototype.setConfig = function (config) {
  if (this.hasStarted) return;
  Object.assign(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdConfig"], config);
};

Object.defineProperty(Core.prototype, "methods", {
  get() {
    return methods;
  }

});

Core.prototype.setMethods = function (m) {
  if (this.hasStarted) return;
  methods = m;
};

Core.prototype.init = async function () {
  if (this.hasStarted) return;
  this.hasStarted = true;

  if (!Array.prototype.flat) {
    _utils__WEBPACK_IMPORTED_MODULE_1__["default"].alert("Not Supported", "BetterDiscord v" + _0globals__WEBPACK_IMPORTED_MODULE_0__["bbdVersion"] + " does not support this old version (" + _0globals__WEBPACK_IMPORTED_MODULE_0__["currentDiscordVersion"] + ") of Discord. Please update your Discord installation before proceeding.");
    return;
  }

  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["bdConfig"].version < _0globals__WEBPACK_IMPORTED_MODULE_0__["minSupportedVersion"]) {
    _utils__WEBPACK_IMPORTED_MODULE_1__["default"].alert("Not Supported", "BetterDiscord v" + _0globals__WEBPACK_IMPORTED_MODULE_0__["bdConfig"].version + " (your version)" + " is not supported by the latest js (" + _0globals__WEBPACK_IMPORTED_MODULE_0__["bbdVersion"] + ").<br><br> Please download the latest version from <a href='https://github.com/rauenzi/BetterDiscordApp/releases/latest' target='_blank'>GitHub</a>");
    return;
  }

  if (window.ED) {
    _utils__WEBPACK_IMPORTED_MODULE_1__["default"].alert("Not Supported", "BandagedBD does not work with EnhancedDiscord. Please uninstall one of them.");
    return;
  }

  if (window.WebSocket && window.WebSocket.name && window.WebSocket.name.includes("Patched")) {
    _utils__WEBPACK_IMPORTED_MODULE_1__["default"].alert("Not Supported", "BandagedBD does not work with Powercord. Please uninstall one of them.");
    return;
  }

  _utils__WEBPACK_IMPORTED_MODULE_1__["default"].suppressErrors(this.patchAttributes.bind(this), "LC Plugin Certifier Patch")();
  _utils__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing Settings");
  this.initSettings();
  await this.checkForGuilds();
  _v2__WEBPACK_IMPORTED_MODULE_2__["default"].initialize();
  _utils__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Updating Settings");
  _settingsPanel__WEBPACK_IMPORTED_MODULE_3__["default"].initializeSettings();
  _utils__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Loading Addons Cache");
  await _contentManager__WEBPACK_IMPORTED_MODULE_16__["default"].loadAddonCertifierCache();
  _utils__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Loading Plugins");
  await _pluginModule__WEBPACK_IMPORTED_MODULE_4__["default"].loadPlugins();
  _utils__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Loading Themes");
  await _themeModule__WEBPACK_IMPORTED_MODULE_5__["default"].loadThemes();
  _domtools__WEBPACK_IMPORTED_MODULE_8__["default"].addStyle("customcss", atob(_dataStore__WEBPACK_IMPORTED_MODULE_6__["default"].getBDData("bdcustomcss")));
  window.addEventListener("beforeunload", function () {
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-dc-0"]) document.querySelector(".btn.btn-disconnect").click();
  });
  _pluginCertifier__WEBPACK_IMPORTED_MODULE_12__["default"].start();
  _utils__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Removing Loading Icon");
  if (document.getElementsByClassName("bd-loaderv2").length) document.getElementsByClassName("bd-loaderv2")[0].remove();
  _utils__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing Main Observer");
  this.initObserver(); // Show loading errors

  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-1"]) {
    _utils__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Collecting Startup Errors");
    _utils__WEBPACK_IMPORTED_MODULE_1__["default"].showContentErrors({
      plugins: _0globals__WEBPACK_IMPORTED_MODULE_0__["bdpluginErrors"],
      themes: _0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemeErrors"]
    });
  }

  const previousVersion = _dataStore__WEBPACK_IMPORTED_MODULE_6__["default"].getBDData("version");

  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["bbdVersion"] > previousVersion) {
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["bbdChangelog"]) this.showChangelogModal(_0globals__WEBPACK_IMPORTED_MODULE_0__["bbdChangelog"]);
    _dataStore__WEBPACK_IMPORTED_MODULE_6__["default"].setBDData("version", _0globals__WEBPACK_IMPORTED_MODULE_0__["bbdVersion"]);
  }

  _emojiModule__WEBPACK_IMPORTED_MODULE_14__["default"].start();
  _utils__WEBPACK_IMPORTED_MODULE_1__["default"].suppressErrors(this.patchSocial.bind(this), "BD Social Patch")();
  _utils__WEBPACK_IMPORTED_MODULE_1__["default"].suppressErrors(this.patchGuildPills.bind(this), "BD Guild Pills Patch")();
  _utils__WEBPACK_IMPORTED_MODULE_1__["default"].suppressErrors(this.patchGuildListItems.bind(this), "BD Guild List Items Patch")();
  _utils__WEBPACK_IMPORTED_MODULE_1__["default"].suppressErrors(this.patchGuildSeparator.bind(this), "BD Guild Separator Patch")();
  _utils__WEBPACK_IMPORTED_MODULE_1__["default"].suppressErrors(this.patchMessageHeader.bind(this), "BD Badge Chat Patch")();
  _utils__WEBPACK_IMPORTED_MODULE_1__["default"].suppressErrors(this.patchMemberList.bind(this), "BD Badge Member List Patch")();
  _utils__WEBPACK_IMPORTED_MODULE_1__["default"].suppressErrors(this.patchAttachment.bind(this), "LC Plugin Certifier Patch")();
  _utils__WEBPACK_IMPORTED_MODULE_1__["default"].suppressErrors(this.patchPopoutWindow.bind(this), "BD Popout Window Patch")();

  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["bdConfig"].haveInstalledDefault) {
    let alert = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].alert("First Installation", "As it is the first time you install Lightcord, We added two default themes and one default plugin in your plugin/theme folder. Check it in the Plugin/Theme settings.");
    await new Promise(resolve => {
      alert.onClose(resolve);
    });
  }

  const logo = document.querySelector("#app-mount > div.typeWindows-1za-n7.withFrame-haYltI.titleBar-AC4pGV.horizontalReverse-3tRjY7.flex-1O1GKY.directionRowReverse-m8IjIq.justifyStart-2NDFzi.alignStretch-DpGPf3.da-typeWindows.da-withFrame.da-titleBar.da-horizontalReverse.da-flex.da-directionRowReverse.da-justifyStart.da-alignStretch > div.wordmarkWindows-1v0lYD.wordmark-2iDDfm.da-wordmarkWindows.da-wordmark");

  if (logo) {
    logo.style.top = "3px";
    logo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="10" width="70" viewBox="0 0 72.54 10" style="margin-left: -5px, margin-top: 10px">
    <path fill="currentColor" d="M44.81,9.67V6.33c0-1.21,2.13-1.49,2.78-.28l2-.81A3.53,3.53,0,0,0,46.2,3c-1.92,0-3.81,1.13-3.81,3.33V9.67c0,2.21,1.89,3.33,3.77,3.33a3.87,3.87,0,0,0,3.45-2.18l-2.12-1C47,11.17,44.81,10.85,44.81,9.67ZM10.68,12.89h2.41V3.17H10.68ZM71.76,3.14H68.19V7.23L70.57,9.4v-4h1.27c.81,0,1.21.41,1.21,1v3c0,.63-.38,1.05-1.21,1.05H68.18v2.31h3.57c1.92,0,3.72-1,3.72-3.2V6.39C75.48,4.13,73.68,3.14,71.76,3.14ZM54.22,3c-2,0-4,1.1-4,3.34V9.66c0,2.23,2,3.34,4,3.34s3.95-1.11,3.95-3.34V6.34C58.19,4.11,56.2,3,54.22,3Zm1.55,6.66c0,.7-.78,1.06-1.54,1.06s-1.55-.35-1.55-1.06V6.34c0-.72.75-1.1,1.5-1.1s1.59.35,1.59,1.1ZM66.84,6.34c0-2.29-1.58-3.2-3.55-3.2H59.46v9.73h2.45V9.77h.43l2.22,3.09h3L65,9.52C66.13,9.15,66.84,8.14,66.84,6.34ZM63.33,7.65H61.91V5.43h1.42A1.11,1.11,0,1,1,63.33,7.65ZM29.83,13h2.42V3.06H29.83V6.73l-3,0V3.09H24.7v9.78h2.14V8.68l3,0ZM17.16,9.76V6.42c0-1.21,2.13-1.49,2.78-.28l2-.81a3.55,3.55,0,0,0-3.36-2.24c-1.92,0-3.81,1.13-3.81,3.33V9.76c0,2.21,2,3.15,3.9,3.15s3.58-1,3.58-3V7.58H18.79l0,1.36H20.3v.77C20.3,10.92,17.16,10.94,17.16,9.76Z" transform="translate(-2.93 -3)"/>
    <polygon fill="currentColor" points="35.91 0.06 38.43 0.06 38.43 1.84 35.92 1.81 35.97 10 33.55 10 33.49 1.75 30.98 1.74 30.98 0.06 33.49 0.06 35.91 0.06"/>
    <polygon fill="currentColor" points="0 9.97 6.5 10 6.5 7.63 2.41 7.63 2.41 0.26 0 2.26 0 9.97"/>
</svg>`;
  }
};

Core.prototype.patchPopoutWindow = async function () {
  let canceled = false;

  this.cancelPatchPopoutWindow = () => {
    canceled = true;
  };

  window.Lightcord.Api.ensureExported(e => e.default && e.default.getWindow).then(popoutModule => {
    if (canceled) return; // Not a good idea to do it like that.

    const interceptor = window.Lightcord.DiscordModules.dispatcher._interceptor;
    window.Lightcord.DiscordModules.dispatcher.setInterceptor(function (action) {
      if (action && action.type === "POPOUT_WINDOW_OPEN") {
        const render = action.render;

        action.render = function () {
          const render1 = render.call(this, ...arguments);
          const type1 = render1.type;

          render1.type = function (props) {
            const render2 = type1(props);
            console.log(props, render2);
            return render2;
          };

          console.log(render1);
          return render1;
        };
      }

      return interceptor.call(this, action);
    });
    window.Lightcord.DiscordModules.dispatcher.subscribe("POPOUT_WINDOW_OPEN", ev => {
      if (!_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["lightcord-9"]) return;
      if (canceled) return;
      _utils__WEBPACK_IMPORTED_MODULE_1__["default"].log("POPOUT THEME", "Popout opened, Adding theme");
      setImmediate(() => {
        console.log(ev);
        const window = popoutModule.default.getWindow(ev.key);
        console.log(window);
      });
    });
  });
};

Core.prototype.patchAttributes = async function () {
  let attribsPatchs = [];

  this.cancelPatchAttributes = function () {
    attribsPatchs.forEach(e => e());
  };

  while (!_v2__WEBPACK_IMPORTED_MODULE_2__["default"].MessageComponent) await new Promise(resolve => setTimeout(resolve, 100)); // TODO: try to patch correctly the user popout on a next update


  const Anchor = _webpackModules__WEBPACK_IMPORTED_MODULE_7__["default"].find(m => m.displayName == "Anchor");
  window.Lightcord.Api.ensureExported(e => e.default && e.default.displayName === "DiscordTag").then(DiscordTag => {
    let DiscordTagComp = DiscordTag.default;

    DiscordTag.default = function (props) {
      let returnValue = DiscordTagComp(props);
      let id = Object(_distant__WEBPACK_IMPORTED_MODULE_13__["uuidv4"])();
      let badgeDiv = _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement("div", {
        style: {
          display: "inline",
          marginTop: "5px"
        }
      }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement("span", {
        id: "badges-" + id,
        key: "badges-" + id,
        style: {
          display: "inherit"
        }
      }));
      let children = [returnValue];

      if (props.user.id === "249746236008169473") {
        // Rauenzi: BandagedBD Developer
        children.push(_v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          color: "black",
          side: "top",
          text: "BandagedBD Developer"
        }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(Anchor, {
          className: "bd-chat-badge",
          href: "https://github.com/rauenzi/BetterDiscordApp",
          title: "BandagedBD",
          target: "_blank"
        }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_ui_bdLogo__WEBPACK_IMPORTED_MODULE_9__["default"], {
          size: "16px",
          className: "bd-logo"
        }))));
      } else if (props.user.id === "696481194443014174" || props.user.id === "696003456611385396") {
        // Not Thomiz: Lightcord Developer, Phorcys: Lightcord Developer
        children.push(_v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          color: "black",
          side: "top",
          text: "Lightcord Developer"
        }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(Anchor, {
          className: "bd-chat-badge",
          href: "https://github.com/Lightcord/Lightcord",
          title: "Lightcord",
          target: "_blank"
        }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_svg_lightcord__WEBPACK_IMPORTED_MODULE_11__["default"], {
          size: "16px",
          className: "bd-logo"
        }))));
      }

      children.push(badgeDiv);
      let div = _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement("div", {
        style: {
          display: "block"
        }
      }, children);
      applyBadges(id, props.user, false);
      return div;
    };
  });
  attribsPatchs.push(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(_v2__WEBPACK_IMPORTED_MODULE_2__["default"].MessageComponent, "default", {
    after: data => {
      if (data.methodArguments[0].childrenMessageContent.props.message) {
        // this can be a blocked message (not opened)
        data.returnValue.props["data-message-id"] = data.methodArguments[0].childrenMessageContent.props.message.id;
      }
    }
  }));
  /*
  attribsPatchs.push(Utils.monkeyPatch(v2.MessageComponent, "default", {after: (data) => {
  data.returnValue.props["message-id"] = data.methodArguments[0].childrenMessageContent.props.message.id
  }}))*/
};

Core.prototype.checkForGuilds = function () {
  let timesChecked = 0;
  return new Promise(resolve => {
    const checkForGuilds = function () {
      const wrapper = _v2__WEBPACK_IMPORTED_MODULE_2__["default"].guildClasses.wrapper.split(" ")[0];
      if (document.querySelectorAll(`.${wrapper}`).length > 0) timesChecked++;
      const guild = _v2__WEBPACK_IMPORTED_MODULE_2__["default"].guildClasses.listItem.split(" ")[0];
      const blob = _v2__WEBPACK_IMPORTED_MODULE_2__["default"].guildClasses.blobContainer.split(" ")[0];
      if (document.querySelectorAll(`.${wrapper} .${guild} .${blob}`).length > 0) return resolve(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdConfig"].deferLoaded = true);else if (timesChecked >= 50) return resolve(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdConfig"].deferLoaded = true);
      setTimeout(checkForGuilds, 100);
    };

    if (document.readyState != "loading") setTimeout(checkForGuilds, 100);
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(checkForGuilds, 100);
    });
  });
};

Core.prototype.injectExternals = async function () {// No externals
};

Core.prototype.initSettings = function () {
  _dataStore__WEBPACK_IMPORTED_MODULE_6__["default"].initialize();

  if (!_dataStore__WEBPACK_IMPORTED_MODULE_6__["default"].getSettingGroup("settings") && !_dataStore__WEBPACK_IMPORTED_MODULE_6__["default"].getSettingGroup("rpc")) {
    if (!_dataStore__WEBPACK_IMPORTED_MODULE_6__["default"].getSettingGroup("settings")) {
      Object.assign(_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"], _0globals__WEBPACK_IMPORTED_MODULE_0__["defaultCookie"]);
    }

    if (!_dataStore__WEBPACK_IMPORTED_MODULE_6__["default"].getSettingGroup("rpc")) {
      Object.assign(_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsRPC"], _0globals__WEBPACK_IMPORTED_MODULE_0__["defaultRPC"]);
    }

    _settingsPanel__WEBPACK_IMPORTED_MODULE_3__["default"].saveSettings();
  } else {
    _settingsPanel__WEBPACK_IMPORTED_MODULE_3__["default"].loadSettings();

    for (const setting in _0globals__WEBPACK_IMPORTED_MODULE_0__["defaultCookie"]) {
      if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"][setting] == undefined) {
        _0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"][setting] = _0globals__WEBPACK_IMPORTED_MODULE_0__["defaultCookie"][setting];
        _settingsPanel__WEBPACK_IMPORTED_MODULE_3__["default"].saveSettings();
      }
    }
  }

  window.Lightcord.Api.ensureExported(e => e.default && e.default.prototype && e.default.prototype.getPredicateSections).then(settingModule => {
    let getPredicateSections = settingModule.default.prototype.getPredicateSections;

    settingModule.default.prototype.getPredicateSections = function () {
      let result = getPredicateSections.call(this, ...arguments);
      if (!result[1]) return result;

      if (result[1].section === "My Account") {
        // user settings, not guild settings
        let poped = [];
        poped.push(result.pop());
        poped.push(result.pop());
        poped.push(result.pop());
        poped.push(result.pop());
        result.push(..._settingsPanel__WEBPACK_IMPORTED_MODULE_3__["default"].renderSidebar(this));

        while (poped[0]) {
          result.push(poped.pop());
        }
      }

      return result;
    };
  });
};

let classNameLayer;
let classNameSocialLinks;
let classNameModal;

Core.prototype.initObserver = function () {
  const mainObserver = new MutationObserver(mutations => {
    for (let i = 0, mlen = mutations.length; i < mlen; i++) {
      const mutation = mutations[i];
      if (typeof _pluginModule__WEBPACK_IMPORTED_MODULE_4__["default"] !== "undefined") _pluginModule__WEBPACK_IMPORTED_MODULE_4__["default"].rawObserver(mutation); // if there was nothing added, skip

      if (!mutation.addedNodes.length || !(mutation.addedNodes[0] instanceof Element)) continue;
      const node = mutation.addedNodes[0];
      if (!classNameLayer) classNameLayer = BDModules.get(e => e.layer && typeof e.layer === "string" && e.animating)[0].layer;
      if (!classNameSocialLinks) classNameSocialLinks = BDModules.get(e => e.socialLinks && typeof e.socialLinks === "string")[0].socialLinks;
      if (!classNameModal) classNameModal = BDModules.get(e => e.modal && typeof e.modal === "string" && e.inner && typeof e.inner === "string" && !e.responsiveWidthMobile)[0].modal;

      if (node.classList.contains(classNameLayer)) {
        if (node.getAttribute("aria-label") === "GUILD_SETTINGS") {
          node.setAttribute("layer-id", "server-settings");
          node.setAttribute("id", "server-settings");
        }

        if (node.getElementsByClassName(classNameSocialLinks).length) {
          node.setAttribute("layer-id", "user-settings");
          node.setAttribute("id", "user-settings");
        }
      }

      if (node.parentElement == document.body && node.querySelector("#ace_settingsmenu")) node.id = "ace_settingsmenu_container"; // Emoji Picker
      //node.getElementsByClassName("emojiPicker-3m1S-j").length && !node.querySelector(".emojiPicker-3m1S-j").parentElement.classList.contains("animatorLeft-1EQxU0")
      //if (node.classList.contains(classNameLayer2) && node.getElementsByClassName(classNameEmojiPicker).length  && !node.querySelector("."+classNameEmojiPicker).parentElement.classList.contains(classNameAnimatorLeft)) quickEmoteMenu.obsCallback(node);
    }
  });
  mainObserver.observe(document, {
    childList: true,
    subtree: true
  });
};

Core.prototype.showChangelogModal = function (options = {}) {
  return _utils__WEBPACK_IMPORTED_MODULE_1__["default"].showChangelogModal(options);
};

Core.prototype.alert = function (title, content) {
  return _utils__WEBPACK_IMPORTED_MODULE_1__["default"].alert(title, content);
};

Core.prototype.patchSocial = function () {
  if (this.socialPatch) return;
  const TabBar = _webpackModules__WEBPACK_IMPORTED_MODULE_7__["default"].find(m => m.displayName == "TabBar");
  const Anchor = _webpackModules__WEBPACK_IMPORTED_MODULE_7__["default"].find(m => m.displayName == "Anchor");
  if (!TabBar) return;
  this.socialPatch = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(TabBar.prototype, "render", {
    after: data => {
      const children = data.returnValue.props.children;
      if (!children || !children.length || children.length < 3) return;
      if (children[children.length - 3].type.displayName !== "Separator") return;
      if (!children[children.length - 2].type.toString().includes("socialLinks")) return;

      if (Anchor) {
        let socialModule1 = BDModules.get(e => e.socialLinks)[0];
        const original = children[children.length - 2].type;

        const newOne = function () {
          const returnVal = original(...arguments);
          returnVal.props.children.push(_v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
            color: "black",
            side: "top",
            text: "Lightcord"
          }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(Anchor, {
            className: "bd-social-link " + socialModule1.link,
            href: "https://github.com/Lightcord/Lightcord",
            title: "Lightcord",
            target: "_blank"
          }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_svg_lightcord__WEBPACK_IMPORTED_MODULE_11__["default"], {
            size: "16px",
            className: "bd-social-logo"
          }))));
          returnVal.props.children.push(_v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
            color: "black",
            side: "top",
            text: "BandagedBD"
          }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(Anchor, {
            className: "bd-social-link " + socialModule1.link,
            href: "https://github.com/rauenzi/BetterDiscordApp",
            title: "BandagedBD",
            target: "_blank"
          }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_ui_bdLogo__WEBPACK_IMPORTED_MODULE_9__["default"], {
            size: "16px",
            className: "bd-social-logo"
          }))));
          return returnVal;
        };

        children[children.length - 2].type = newOne;
      }

      let [classNameColorMuted, sizes, classNameVersionHash] = [BDModules.get(e => e.colorMuted)[0].colorMuted, BDModules.get(e => e.size32)[0], BDModules.get(e => e.versionHash)[0].versionHash];
      const versionHash = `(${_0globals__WEBPACK_IMPORTED_MODULE_0__["bdConfig"].hash ? _0globals__WEBPACK_IMPORTED_MODULE_0__["bdConfig"].hash.substring(0, 7) : _0globals__WEBPACK_IMPORTED_MODULE_0__["bdConfig"].branch})`;
      const additional = [_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("div", {
        className: `${classNameColorMuted} ${sizes.size12}`
      }, `Lightcord ${electron__WEBPACK_IMPORTED_MODULE_15__["remote"].getGlobal("BuildInfo").version} `, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("span", {
        className: classNameVersionHash + " da-versionHash"
      }, `(${(electron__WEBPACK_IMPORTED_MODULE_15__["remote"].getGlobal("BuildInfo").commit || "Unknown").slice(0, 7)})`)), _v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("div", {
        className: `${classNameColorMuted} ${sizes.size12}`
      }, `BBD ${_0globals__WEBPACK_IMPORTED_MODULE_0__["bbdVersion"]} `, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("span", {
        className: classNameVersionHash + " da-versionHash"
      }, versionHash))];
      const originalVersions = children[children.length - 1].type;

      children[children.length - 1].type = function () {
        const returnVal = originalVersions(...arguments);
        returnVal.props.children.splice(1, 0, additional);
        return returnVal;
      };
    }
  });
};

const getGuildClasses = function () {
  const guildsWrapper = _webpackModules__WEBPACK_IMPORTED_MODULE_7__["default"].findByProps("wrapper", "unreadMentionsBar");
  const guilds = _webpackModules__WEBPACK_IMPORTED_MODULE_7__["default"].findByProps("guildsError", "selected");
  const pill = _webpackModules__WEBPACK_IMPORTED_MODULE_7__["default"].findByProps("blobContainer");
  return Object.assign({}, guildsWrapper, guilds, pill);
};

Core.prototype.patchGuildListItems = function () {
  if (this.guildListItemsPatch) return;
  const GuildClasses = getGuildClasses();
  const listItemClass = GuildClasses.listItem.split(" ")[0];
  const blobClass = GuildClasses.blobContainer.split(" ")[0];
  const reactInstance = _v2__WEBPACK_IMPORTED_MODULE_2__["default"].getInternalInstance(document.querySelector(`.${listItemClass} .${blobClass}`).parentElement);
  const GuildComponent = reactInstance.return.type;
  if (!GuildComponent) return;
  this.guildListItemsPatch = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(GuildComponent.prototype, "render", {
    after: data => {
      if (data.returnValue && data.thisObject) {
        const returnValue = data.returnValue;
        const guildData = data.thisObject.props;
        let className = returnValue.props.className;
        className += " bd-guild";
        if (guildData.unread) className += " bd-unread";
        if (guildData.selected) className += " bd-selected";
        if (guildData.audio) className += " bd-audio";
        if (guildData.video) className += " bd-video";
        if (guildData.badge) className += " bd-badge";
        if (guildData.animatable) className += " bd-animatable";
        returnValue.props.className = className;
        return returnValue;
      }
    }
  });
};

Core.prototype.patchGuildPills = function () {
  if (this.guildPillPatch) return;
  const guildPill = _webpackModules__WEBPACK_IMPORTED_MODULE_7__["default"].find(m => m.default && !m.default.displayName && m.default.toString && m.default.toString().includes("translate3d"));
  if (!guildPill) return;
  this.guildPillPatch = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(guildPill, "default", {
    after: data => {
      const props = data.methodArguments[0];
      if (props.unread) data.returnValue.props.className += " bd-unread";
      if (props.selected) data.returnValue.props.className += " bd-selected";
      if (props.hovered) data.returnValue.props.className += " bd-hovered";
      return data.returnValue;
    }
  });
};

Core.prototype.patchGuildSeparator = function () {
  if (this.guildSeparatorPatch) return;
  const Guilds = _webpackModules__WEBPACK_IMPORTED_MODULE_7__["default"].findByDisplayName("Guilds");
  const guildComponents = _webpackModules__WEBPACK_IMPORTED_MODULE_7__["default"].findByProps("renderListItem");
  if (!guildComponents || !Guilds) return;

  const GuildSeparator = function () {
    const returnValue = guildComponents.Separator(...arguments);
    returnValue.props.className += " bd-guild-separator";
    return returnValue;
  };

  this.guildSeparatorPatch = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(Guilds.prototype, "render", {
    after: data => {
      data.returnValue.props.children[1].props.children[3].type = GuildSeparator;
    }
  });
};

Core.prototype.patchAttachment = function () {
  if (this.AttachmentPatch) return;
  const Attachment = BDModules.get(e => e.default && e.default.displayName === "Attachment")[0]; // temporary

  const Anchor = _webpackModules__WEBPACK_IMPORTED_MODULE_7__["default"].find(m => m.displayName == "Anchor");
  if (!Anchor || !Attachment || !Attachment.default) return;
  this.AttachmentPatch = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(Attachment, "default", {
    after: data => {
      if (!_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-6"]) return;
      const attachment = data.methodArguments[0] || null;
      const children = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getNestedProp(data.returnValue, "props.children");
      if (!children || !attachment || !attachment.url) return;
      if (!Array.isArray(children)) return;
      const id = Object(_distant__WEBPACK_IMPORTED_MODULE_13__["uuidv4"])();
      children.push(_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("span", {
        id: "certified-" + id
      }));
      _pluginCertifier__WEBPACK_IMPORTED_MODULE_12__["default"].patch(attachment, "certified-" + id);
    }
  });
};

Core.prototype.patchMessageHeader = function () {
  if (this.messageHeaderPatch) return;
  const MessageHeader = _webpackModules__WEBPACK_IMPORTED_MODULE_7__["default"].findByProps("MessageTimestamp");
  const Anchor = _webpackModules__WEBPACK_IMPORTED_MODULE_7__["default"].find(m => m.displayName == "Anchor");
  if (!Anchor || !MessageHeader || !MessageHeader.default) return;
  this.messageHeaderPatch = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(MessageHeader, "default", {
    after: data => {
      const author = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getNestedProp(data.methodArguments[0], "message.author"); // const header = Utils.getNestedProp(data.returnValue, "props.children.1.props");

      const children = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getNestedProp(data.returnValue, "props.children.1.props.children.1.props.children");
      if (!children || !author || !author.id) return; // if (header && header.className) header.className += " "

      if (!Array.isArray(children)) return;

      if (author.id === "249746236008169473") {
        // Rauenzi: BandagedBD Developer
        children.push(_v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          color: "black",
          side: "top",
          text: "BandagedBD Developer"
        }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(Anchor, {
          className: "bd-chat-badge",
          href: "https://github.com/rauenzi/BetterDiscordApp",
          title: "BandagedBD",
          target: "_blank"
        }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_ui_bdLogo__WEBPACK_IMPORTED_MODULE_9__["default"], {
          size: "16px",
          className: "bd-logo"
        }))));
      } else if (author.id === "696481194443014174" || author.id === "696003456611385396") {
        // Not Thomiz: Lightcord Developer, Phorcys: Lightcord Developer
        children.push(_v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          color: "black",
          side: "top",
          text: "Lightcord Developer"
        }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(Anchor, {
          className: "bd-chat-badge",
          href: "https://github.com/Lightcord/Lightcord",
          title: "Lightcord",
          target: "_blank"
        }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_svg_lightcord__WEBPACK_IMPORTED_MODULE_11__["default"], {
          size: "16px",
          className: "bd-logo"
        }))));
      }

      const id = Object(_distant__WEBPACK_IMPORTED_MODULE_13__["uuidv4"])();
      children.push(_v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement("div", {
        id: "badges-" + id,
        style: {
          display: "inline"
        }
      }));
      applyBadges(id, author, true);
    }
  });
};

function applyBadges(id, user, chat) {
  process.nextTick(() => {
    const div = document.getElementById("badges-" + id);
    if (!div || div.childNodes.length > 0) return;
    if (div.childNodes.length) return;
    let blockDiv = document.createElement("div");
    blockDiv.style.display = "none";
    div.appendChild(blockDiv);
    const Anchor = _webpackModules__WEBPACK_IMPORTED_MODULE_7__["default"].find(m => m.displayName == "Anchor");
    _distant__WEBPACK_IMPORTED_MODULE_13__["default"].getBadges(user.id).then(badges => {
      badges.forEach(badge => {
        const props = {
          svg: {
            size: "16px",
            className: "bd-logo",
            width: "16px"
          }
        };
        badge.scopes.forEach(scope => {
          if (scope === "user") {
            // require user
            props.user = user;
          }
        });

        if (!badge.href) {
          props.Anchor = Anchor;
          props.href = {
            className: chat ? "bd-chat-badge" : "bd-member-badge",
            title: badge.name,
            target: "_blank"
          };
        }

        const element = _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          color: "black",
          side: "top",
          text: badge.name
        }, badge.href ? _v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement(Anchor, {
          href: badge.href,
          className: chat ? "bd-chat-badge" : "bd-member-badge",
          title: badge.name,
          target: "_blank"
        }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(badge.component, props)) : _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(badge.component, props));
        const div2 = document.createElement("div");
        _v2__WEBPACK_IMPORTED_MODULE_2__["default"].reactDom.render(element, div2);
        div2.childNodes.forEach(node => {
          div.appendChild(node);
        });
      });
    });
  });
}

Core.prototype.patchMemberList = function () {
  if (this.memberListPatch) return;
  const MemberListItem = _webpackModules__WEBPACK_IMPORTED_MODULE_7__["default"].findByDisplayName("MemberListItem");
  const Anchor = _webpackModules__WEBPACK_IMPORTED_MODULE_7__["default"].find(m => m.displayName == "Anchor");
  if (!Anchor || !MemberListItem || !MemberListItem.prototype || !MemberListItem.prototype.renderDecorators) return;
  this.memberListPatch = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(MemberListItem.prototype, "renderDecorators", {
    after: data => {
      const user = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getNestedProp(data.thisObject, "props.user");
      const children = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getNestedProp(data.returnValue, "props.children");
      if (!children || !user || !user.id) return; // if (header && header.className) header.className += " "

      if (!Array.isArray(children)) return;

      if (user.id === "249746236008169473") {
        children.push(_v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          color: "black",
          side: "top",
          text: "BandagedBD Developer"
        }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(Anchor, {
          className: "bd-member-badge",
          href: "https://github.com/rauenzi/BetterDiscordApp",
          title: "BandagedBD",
          target: "_blank"
        }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_ui_bdLogo__WEBPACK_IMPORTED_MODULE_9__["default"], {
          size: "16px",
          className: "bd-logo"
        }))));
      } else if (user.id === "696481194443014174" || user.id === "696003456611385396") {
        children.push(_v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          color: "black",
          side: "top",
          text: "Lightcord Developer"
        }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(Anchor, {
          className: "bd-member-badge",
          href: "https://github.com/Lightcord/Lightcord",
          title: "Lightcord",
          target: "_blank"
        }, _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_svg_lightcord__WEBPACK_IMPORTED_MODULE_11__["default"], {
          size: "16px",
          className: "bd-logo"
        }))));
      }

      const id = Object(_distant__WEBPACK_IMPORTED_MODULE_13__["uuidv4"])();
      children.push(_v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement("div", {
        id: "badges-" + id
      }));
      applyBadges(id, user, false);
    }
  });
};

Core.prototype.updateInjector = async function () {
  // There will never be an injection path, so we do not need the code below. 
  // Insert comments so it will be erased when production.
  const injectionPath = _dataStore__WEBPACK_IMPORTED_MODULE_6__["default"].injectionPath;
  if (!injectionPath) return false;
  /*
    const fs = require("fs");
  const path = require("path");
  const rmrf = require("rimraf");
  const yauzl = require("yauzl");
  const mkdirp = require("mkdirp");
  const request = require("request");
    const parentPath = path.resolve(injectionPath, "..");
  const folderName = path.basename(injectionPath);
  const zipLink = "https://github.com/rauenzi/BetterDiscordApp/archive/injector.zip";
  const savedZip = path.resolve(parentPath, "injector.zip");
  const extractedFolder = path.resolve(parentPath, "BetterDiscordApp-injector");
    // Download the injector zip file
  Utils.log("InjectorUpdate", "Downloading " + zipLink);
  let success = await new Promise(resolve => {
      request.get({url: zipLink, encoding: null}, async (error, response, body) => {
          if (error || response.statusCode !== 200) return resolve(false);
          // Save a backup in case someone has their own copy
          const alreadyExists = await new Promise(res => fs.exists(savedZip, res));
          if (alreadyExists) await new Promise(res => fs.rename(savedZip, `${savedZip}.bak${Math.round(performance.now())}`, res));
            Utils.log("InjectorUpdate", "Writing " + savedZip);
          fs.writeFile(savedZip, body, err => resolve(!err));
      });
  });
  if (!success) return success;
    // Check and delete rename extraction
  const alreadyExists = await new Promise(res => fs.exists(extractedFolder, res));
  if (alreadyExists) await new Promise(res => fs.rename(extractedFolder, `${extractedFolder}.bak${Math.round(performance.now())}`, res));
  
  // Unzip the downloaded zip file
  const zipfile = await new Promise(r => yauzl.open(savedZip, {lazyEntries: true}, (err, zip) =>  r(zip)));
  zipfile.on("entry", function(entry) {
      // Skip directories, they are handled with mkdirp
      if (entry.fileName.endsWith("/")) return zipfile.readEntry();
        Utils.log("InjectorUpdate", "Extracting " + entry.fileName);
      // Make any needed parent directories
      const fullPath = path.resolve(parentPath, entry.fileName);
      mkdirp.sync(path.dirname(fullPath));
      zipfile.openReadStream(entry, function(err, readStream) {
          if (err) return success = false;
          readStream.on("end", function() {zipfile.readEntry();}); // Go to next file after this
          readStream.pipe(fs.createWriteStream(fullPath));
      });
  });
  zipfile.readEntry(); // Start reading
    // Wait for the final file to finish
  await new Promise(resolve => zipfile.once("end", resolve));
    // Save a backup in case something goes wrong during final step
  const backupFolder = path.resolve(parentPath, `${folderName}.bak${Math.round(performance.now())}`);
  await new Promise(resolve => fs.rename(injectionPath, backupFolder, resolve));
    // Rename the extracted folder to what it should be
  Utils.log("InjectorUpdate", `Renaming ${path.basename(extractedFolder)} to ${folderName}`);
  success = await new Promise(resolve => fs.rename(extractedFolder, injectionPath, err => resolve(!err)));
  if (!success) {
      Utils.err("InjectorUpdate", "Failed to rename the final directory");
      return success;
  }
    // If rename had issues, delete what we tried to rename and restore backup
  if (!success) {
      Utils.err("InjectorUpdate", "Something went wrong... restoring backups.");
      await new Promise(resolve => rmrf(extractedFolder, resolve));
      await new Promise(resolve => fs.rename(backupFolder, injectionPath, resolve));
      return success;
  }
    // If we've gotten to this point, everything should have gone smoothly.
  // Cleanup the backup folder then remove the zip
  await new Promise(resolve => rmrf(backupFolder, resolve));
  await new Promise(resolve => fs.unlink(savedZip, resolve));
    Utils.log("InjectorUpdate", "Injector Updated!");
  return success;*/
};

/* harmony default export */ __webpack_exports__["default"] = (new Core());
/**
 * Don't expose core - could be dangerous for now
 */

/***/ }),

/***/ "./src/modules/dataStore.js":
/*!**********************************!*\
  !*** ./src/modules/dataStore.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");
/* harmony import */ var _contentManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentManager */ "./src/modules/contentManager.js");
const __non_webpack_require__ = window.require;



const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const releaseChannel = DiscordNative.globals ? DiscordNative.globals.releaseChannel : DiscordNative.app ? DiscordNative.app.getReleaseChannel() : "stable";
let dataPath = "";
if (process.platform === "win32") dataPath = process.env.APPDATA;else if (process.platform === "darwin") dataPath = path.join(process.env.HOME, "Library", "Preferences");else dataPath = process.env.XDG_CONFIG_HOME ? process.env.XDG_CONFIG_HOME : path.join(process.env.HOME, ".config");
dataPath = path.join(dataPath, "BetterDiscord");
/* harmony default export */ __webpack_exports__["default"] = (new class DataStore {
  constructor() {
    this.data = {
      settings: {
        stable: {},
        canary: {},
        ptb: {}
      }
    };
    this.pluginData = {};
    window.Lightcord.BetterDiscord.DataStore = this;
  }

  initialize() {
    try {
      if (!fs.existsSync(this.BDFile)) fs.writeFileSync(this.BDFile, JSON.stringify(this.data, null, 4), "binary");
      const data = JSON.parse(fs.readFileSync(this.BDFile, "binary"));
      if (data.hasOwnProperty("settings")) this.data = data;
      if (!fs.existsSync(this.settingsFile)) return;

      let settings = __non_webpack_require__(this.settingsFile);

      fs.unlinkSync(this.settingsFile);
      if (settings.hasOwnProperty("settings")) settings = Object.assign({
        stable: {},
        canary: {},
        ptb: {}
      }, {
        [releaseChannel]: settings
      });else settings = Object.assign({
        stable: {},
        canary: {},
        ptb: {}
      }, settings);
      this.setBDData("settings", settings);
    } catch (err) {
      console.error(err);
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].alert("Corrupt Storage", "The bd storage has somehow become corrupt. You may either try to salvage the file or delete it then reload.");
    }
  }

  get injectionPath() {
    return this._injectionPath = null;
    if (this._injectionPath) return this._injectionPath;

    const electron = __webpack_require__(/*! electron */ "electron").remote.app;

    const base = electron.getAppPath();
    const roamingBase = electron.getPath("userData");
    const roamingLocation = path.resolve(roamingBase, electron.getVersion(), "modules", "discord_desktop_core", "injector");
    const location = path.resolve(base, "..", "app");
    const realLocation = fs.existsSync(location) ? location : fs.existsSync(roamingLocation) ? roamingLocation : null;
    if (!realLocation) return this._injectionPath = null;
    return this._injectionPath = realLocation;
  }

  get configFile() {
    return this._configFile || (this._configFile = path.resolve(this.injectionPath, "betterdiscord", "config.json"));
  }

  get BDFile() {
    return this._BDFile || (this._BDFile = path.resolve(dataPath, "bdstorage.json"));
  }

  get settingsFile() {
    return this._settingsFile || (this._settingsFile = path.resolve(dataPath, "bdsettings.json"));
  }

  getPluginFile(pluginName) {
    return path.resolve(_contentManager__WEBPACK_IMPORTED_MODULE_1__["default"].pluginsFolder, pluginName + ".config.json");
  }

  getSettingGroup(key) {
    return this.data.settings[releaseChannel][key] || null;
  }

  setSettingGroup(key, data) {
    this.data.settings[releaseChannel][key] = data;
    fs.writeFileSync(this.BDFile, JSON.stringify(this.data, null, 4), "binary");
  }

  getBDData(key) {
    return this.data[key] || "";
  }

  setBDData(key, value) {
    this.data[key] = value;
    fs.writeFileSync(this.BDFile, JSON.stringify(this.data, null, 4), "binary");
  }

  getPluginData(pluginName, key) {
    if (this.pluginData[pluginName] !== undefined) return this.pluginData[pluginName][key];
    if (!fs.existsSync(this.getPluginFile(pluginName))) return undefined;
    this.pluginData[pluginName] = JSON.parse(fs.readFileSync(this.getPluginFile(pluginName)));
    return this.pluginData[pluginName][key];
  }

  setPluginData(pluginName, key, value) {
    if (value === undefined) return;
    if (this.pluginData[pluginName] === undefined) this.pluginData[pluginName] = {};
    this.pluginData[pluginName][key] = value;
    fs.writeFileSync(this.getPluginFile(pluginName), JSON.stringify(this.pluginData[pluginName], null, 4), "binary");
  }

  deletePluginData(pluginName, key) {
    if (this.pluginData[pluginName] === undefined) this.pluginData[pluginName] = {};
    delete this.pluginData[pluginName][key];
    fs.writeFileSync(this.getPluginFile(pluginName), JSON.stringify(this.pluginData[pluginName], null, 4), "binary");
  }

}());

/***/ }),

/***/ "./src/modules/devMode.js":
/*!********************************!*\
  !*** ./src/modules/devMode.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v2 */ "./src/modules/v2.js");
/* harmony import */ var _domtools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domtools */ "./src/modules/domtools.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");




/* harmony default export */ __webpack_exports__["default"] = (new class DevMode {
  constructor() {
    this.debugListener = this.debugListener.bind(this);
    this.copySelectorListener = this.copySelectorListener.bind(this);
  }

  start() {
    this.startDebugListener();
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-dm-1"]) this.startCopySelector();
  }

  stop() {
    this.stopDebugListener();
    this.stopCopySelector();
  }

  startDebugListener() {
    this.stopDebugListener();
    document.addEventListener("keydown", this.debugListener);
  }

  stopDebugListener() {
    document.removeEventListener("keydown", this.debugListener);
  }

  startCopySelector() {
    this.stopCopySelector();
    document.addEventListener("contextmenu", this.copySelectorListener);
  }

  stopCopySelector() {
    document.removeEventListener("contextmenu", this.copySelectorListener);
  }

  debugListener(e) {
    if (e.which === 119 || e.which == 118) {
      //F8
      console.log("%c[%cDevMode%c] %cBreak/Resume", "color: red;", "color: #303030; font-weight:700;", "color:red;", "");
      debugger; // eslint-disable-line no-debugger

      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }

  copySelectorListener(e) {
    try {
      e.stopPropagation();
      const selector = this.getSelector(e.target);
      let [classLayer, classItems] = [BDModules.get(e => e.layer && typeof e.layer === "string" && e.disabledPointerEvents)[0], BDModules.get(e => e.menu)[0]];

      function attach() {
        if (!classItems || !classLayer.layer) return console.log(classItems, classLayer.layer);
        let cm = _domtools__WEBPACK_IMPORTED_MODULE_2__["default"].query("." + _utils__WEBPACK_IMPORTED_MODULE_3__["default"].removeDa(classItems.menu));

        if (!cm) {
          const container = _domtools__WEBPACK_IMPORTED_MODULE_2__["default"].query("#app-mount > ." + _utils__WEBPACK_IMPORTED_MODULE_3__["default"].removeDa(classLayer.layerContainer));
          const cmWrap = _domtools__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(`<div class="${classLayer.layer}">`);
          cm = _domtools__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(`<div class="${classItems.menu} ${classItems.styleFlexible} ${classItems.accommodateScrollbar} bd-context-menu" style=""></div>`);
          cmWrap.append(cm);
          container.append(cmWrap);
          cmWrap.style.top = e.clientY + "px";
          cmWrap.style.left = e.clientX + "px";
          cmWrap.setAttribute("role", "menu");
          cmWrap.setAttribute("tabindex", "-1");
          cmWrap.id = "bd-copy-selector-context";
          cmWrap.setAttribute("aria-label", "Copy Selector Actions");
          const scrollerClasses = BDModules.get(e => e.scrollerWrap)[0];
          const scrollerWrap = _domtools__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(`<div class="${scrollerClasses.scrollerWrap} ${scrollerClasses.scrollerThemed} ${scrollerClasses.themeGhostHairline}"></div>`);
          const scroller = _domtools__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(`<div class="${BDModules.get(e => e.scroller)[0].scroller} ${classItems.scroller}"></div>`);
          scrollerWrap.append(scroller);
          cm.append(scrollerWrap);

          const removeCM = function (e) {
            if (e.keyCode && e.keyCode !== 27) return;
            cmWrap.remove();
            document.removeEventListener("click", removeCM);
            document.removeEventListener("contextmenu", removeCM);
            document.removeEventListener("keyup", removeCM);
          };

          document.addEventListener("click", removeCM);
          document.addEventListener("contextmenu", removeCM);
          document.addEventListener("keyup", removeCM);
        }

        const cmWrap = cm.parentElement;
        const scroller = cm.childNodes[0].childNodes[0];
        const cmg = _domtools__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(`<div role="group"></div>`);
        /**
         * @type {HTMLElement}
         */

        const cmi = _domtools__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(`<div class="${classItems.item} ${classItems.labelContainer} ${classItems.colorDefault}" role="menuitem" id="bd-copy-selector-item-cm"></div>`);
        cmi.append(_domtools__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(`<div class="${classItems.label}">Copy Selector</div>`));
        cmi.addEventListener("click", () => {
          _v2__WEBPACK_IMPORTED_MODULE_1__["default"].NativeModule.copy(selector);
          cmWrap.style.display = "none";
        });
        cmi.addEventListener("mouseover", e => {
          let elements = _domtools__WEBPACK_IMPORTED_MODULE_2__["default"].queryAll("div[role=menuitem]." + _utils__WEBPACK_IMPORTED_MODULE_3__["default"].removeDa(classItems.focused));
          elements && elements.forEach(elem => elem.classList.remove(classItems.focused));
          cmi.classList.add(classItems.focused);
        });
        cmi.addEventListener("mouseout", e => {
          cmi.classList.remove(classItems.focused);
        });
        cmg.append(cmi);

        if (scroller.childNodes.length) {
          // apend a separator
          const separator = _domtools__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(`<div role="separator" class="${classItems.separator}"></div>`);
          scroller.append(separator);
        }

        scroller.append(cmg);

        if (cmWrap.clientHeight < cmWrap.scrollHeight) {
          console.log("overflowing " + cmWrap.style.top);
          cmWrap.style.top = cmWrap.style.top - cmg.clientHeight + "px";
          console.log("overflowing" + cmWrap.style.top);
        }
      }

      setTimeout(attach, 1);
    } catch (e) {
      console.error(e);
    }
  }

  getSelector(element) {
    if (element.id) return `#${element.id}`;
    /**
     * 
     * @param {HTMLElement} el 
     */

    function fullPath(el) {
      var names = [];

      while (el.parentNode) {
        if (el.id) {
          names.unshift('#' + el.id);
          break;
        } else {
          if (el == el.ownerDocument.documentElement) names.unshift(el.tagName.toLowerCase() + Array.from(el.classList.entries()).map(e => "." + e).join(""));else {
            for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);

            names.unshift(el.tagName.toLowerCase() + (typeof el.className === "string" && el.className || "").split(" ").filter(e => !!e).map(e => "." + e).join("") + ":nth-child(" + c + ")");
          }
          el = el.parentNode;
        }
      }

      return names.join(" > ");
    }

    return fullPath(element);
  }

}());

/***/ }),

/***/ "./src/modules/disableTyping.js":
/*!**************************************!*\
  !*** ./src/modules/disableTyping.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (new class DisableTyping {
  constructor() {
    window.Lightcord.Api.ensureExported(e => e.default && e.default.startTyping).then(typingModule => {
      let self = this;
      const startTyping = typingModule.default.startTyping;

      typingModule.default.startTyping = function () {
        if (self.disabled) return startTyping.call(this, ...arguments);
      };

      const stopTyping = typingModule.default.stopTyping;

      typingModule.default.stopTyping = function () {
        if (self.disabled) return stopTyping.call(this, ...arguments);
      };

      this.disabled = true;
    });
    window.Lightcord.BetterDiscord.DisableTyping = this;
  }

  disable() {
    this.disabled = true;
  }

  enable() {
    this.disabled = false;
  }

}());

/***/ }),

/***/ "./src/modules/distant.js":
/*!********************************!*\
  !*** ./src/modules/distant.js ***!
  \********************************/
/*! exports provided: uuidv4, default, Constants, Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuidv4", function() { return uuidv4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
/* harmony import */ var _svg_bug_hunter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg/bug_hunter */ "./src/svg/bug_hunter.jsx");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _svg_circus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/circus */ "./src/svg/circus.jsx");




function uuidv4() {
  // Generate UUID (No crypto rng)
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
const awaitingBadgesPromises = {};
let badgesToFetch = [];
/* harmony default export */ __webpack_exports__["default"] = (new class DistantServer {
  constructor() {
    this._cache = {
      badges: {}
    };
    window.Lightcord.BetterDiscord.DistantServer = this;
  }

  get cache() {
    return this._cache;
  }

  set cache(data) {
    if (typeof data !== "object" || typeof this._cache !== "object") return this._cache = data;
    return this._cache = Object.assign(this._cache, data);
  }
  /**
   * Get custom badges from the user ID.
   * @param {string} user The user ID 
   * @returns {Promise<Constants["badges"]>}
   */


  async getBadges(user) {
    if (this.cache.badges[user]) return this.cache.badges[user];
    if (awaitingBadgesPromises[user]) return awaitingBadgesPromises[user];
    let resolve;
    const newPromise = new Promise(res => resolve = res);
    awaitingBadgesPromises[user] = newPromise;
    const badges = [];

    for (let badge of Constants.badges) {
      if (badge.defaultUsers.includes(user)) badges.push(badge);
    }

    const fetchedBadges = await new Promise(resolve => {
      if (!_0globals__WEBPACK_IMPORTED_MODULE_2__["settingsCookie"]["lightcord-5"]) return resolve([]);
      badgesToFetch.push([user, resolve]);
      setTimeout(() => {
        let users = badgesToFetch;
        if (users.length === 0) return;
        badgesToFetch = [];
        handleRequest(Routes.badges, "POST", JSON.stringify(users.map(e => e[0]))).then(async res => {
          if (res.status !== 200) {
            // Couldn't fetch badges: server error
            users.forEach(data => {
              data[1]([]); // resolve no badge fetched
            });
          }

          const responseBody = await res.json();

          for (let user of responseBody) {
            let promise = users.find(promise => promise[0] === user.user_id);
            promise[1](user.badges);
          }
        }).catch(err => {
          // Couldn't fetch badges: error
          if (!(err instanceof LightcordError)) console.error(err);
          users.forEach(data => {
            data[1]([]); // resolve no badge fetched
          });
        });
      }, 0);
    });

    for (let badge of fetchedBadges) {
      if (!Constants.badges.find(e => e.id === badge)) continue; // We do not have the Component, skip it.

      if (badges.find(e => e.id === badge)) continue; // Already inserted.

      badges.push(Constants.badges.find(e => e.id === badge));
    }

    this.cache = {
      badges: Object.assign(this.cache.badges, {
        [user]: badges
      })
    };
    setTimeout(() => {
      delete this.cache.badges[user];
    }, 600000);
    resolve(badges);
    delete awaitingBadgesPromises[user];
    return badges;
  }

}());

const handleRequest = function (route, method, data) {
  if (!_0globals__WEBPACK_IMPORTED_MODULE_2__["settingsCookie"]["lightcord-5"]) {
    return Promise.reject(new LightcordError("The current settings blocked the request."));
  }

  return node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${Constants.SERVER_URL}/api/v1${route}`, {
    method,
    headers: {
      "CLIENT": "Lightcord",
      "Authorization": window.Lightcord.Api.Authorization || "None::Anonymous"
    },
    ...(data ? {
      body: data
    } : {})
  });
};

class LightcordError extends Error {
  constructor() {
    super(...arguments);
    this.name = "LightcordError";
  }

}

const Constants = {
  SERVER_URL: "https://lightcord.deroku.xyz",
  badges: [// TODO: Add more badges + server side svg
  {
    name: "Lightcord Bug Hunter",
    id: "f04698f5-816b-41e3-bd01-92291193d7a5",
    defaultUsers: ["696481194443014174", "696003456611385396"],
    scopes: [],
    component: _svg_bug_hunter__WEBPACK_IMPORTED_MODULE_0__["default"],
    href: "https://github.com/lightcord/lightcord/wiki/badges#bug_hunter"
  }, {
    name: "Buffoon",
    id: "06904d31-65b4-41ec-a50c-8658bbd1af96",
    defaultUsers: ["389016895543705602", "664600134528663565", "625350657829896224"],
    scopes: [],
    component: _svg_circus__WEBPACK_IMPORTED_MODULE_3__["default"],
    href: "https://youtu.be/EJtb6z-dlT8?t=145"
  }]
};
const Routes = {
  badges: `/users/badges`
};

/***/ }),

/***/ "./src/modules/domtools.js":
/*!*********************************!*\
  !*** ./src/modules/domtools.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DOMTools; });
/**
 * Copyright 2018 Zachary Rauen
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished
 * to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
 * OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * From: https://github.com/rauenzi/BDPluginLibrary
 */

/**
 * @interface
 * @name Offset
 * @property {number} top - Top offset of the target element.
 * @property {number} right - Right offset of the target element.
 * @property {number} bottom - Bottom offset of the target element.
 * @property {number} left - Left offset of the target element.
 * @property {number} height - Outer height of the target element.
 * @property {number} width - Outer width of the target element.
 */

/**
* Function that automatically removes added listener.
* @callback module:DOMTools~CancelListener
*/
class DOMTools {
  static escapeID(id) {
    return id.replace(/^[^a-z]+|[^\w-]+/gi, "-");
  }
  /**
  * Adds a style to the document.
  * @param {string} id - identifier to use as the element id
  * @param {string} css - css to add to the document
  */


  static addStyle(id, css) {
    document.head.append(DOMTools.createElement(`<style id="${id}">${css}</style>`));
  }
  /**
   * Removes a style from the document.
   * @param {string} id - original identifier used
   */


  static removeStyle(id) {
    const element = document.getElementById(id);
    if (element) element.remove();
  }
  /**
   * Adds/requires a remote script to be loaded
   * @param {string} id - identifier to use for this script
   * @param {string} url - url from which to load the script
   * @returns {Promise} promise that resolves when the script is loaded
   */


  static addScript(id, url) {
    return new Promise(resolve => {
      const script = document.createElement("script");
      script.id = id;
      script.src = url;
      script.type = "text/javascript";
      script.onload = resolve;
      document.head.append(script);
    });
  }
  /**
   * Removes a remote script from the document.
   * @param {string} id - original identifier used
   */


  static removeScript(id) {
    id = this.escapeID(id);
    const element = document.getElementById(id);
    if (element) element.remove();
  } // https://javascript.info/js-animation


  static animate({
    timing = _ => _,
    update,
    duration
  }) {
    const start = performance.now();
    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1; // calculate the current animation state

      const progress = timing(timeFraction);
      update(progress); // draw it

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }
  /**
   * This is my shit version of not having to use `$` from jQuery. Meaning
   * that you can pass a selector and it will automatically run {@link module:DOMTools.query}.
   * It also means that you can pass a string of html and it will perform and return `parseHTML`.
   * @see module:DOMTools.parseHTML
   * @see module:DOMTools.query
   * @param {string} selector - Selector to query or HTML to parse
   * @returns {(DocumentFragment|NodeList|HTMLElement)} - Either the result of `parseHTML` or `query`
   */


  static Q(selector) {
    const element = this.parseHTML(selector);
    const isHTML = element instanceof NodeList ? Array.from(element).some(n => n.nodeType === 1) : element.nodeType === 1;
    if (isHTML) return element;
    return this.query(selector);
  }
  /**
   * Essentially a shorthand for `document.querySelector`. If the `baseElement` is not provided
   * `document` is used by default.
   * @param {string} selector - Selector to query
   * @param {Element} [baseElement] - Element to base the query from
   * @returns {(Element|null)} - The found element or null if not found
   */


  static query(selector, baseElement) {
    if (!baseElement) baseElement = document;
    return baseElement.querySelector(selector);
  }
  /**
   * Essentially a shorthand for `document.querySelectorAll`. If the `baseElement` is not provided
   * `document` is used by default.
   * @param {string} selector - Selector to query
   * @param {Element} [baseElement] - Element to base the query from
   * @returns {Array<Element>} - Array of all found elements
   */


  static queryAll(selector, baseElement) {
    if (!baseElement) baseElement = document;
    return baseElement.querySelectorAll(selector);
  }
  /**
   * Parses a string of HTML and returns the results. If the second parameter is true,
   * the parsed HTML will be returned as a document fragment {@see https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment}.
   * This is extremely useful if you have a list of elements at the top level, they can then be appended all at once to another node.
   * 
   * If the second parameter is false, then the return value will be the list of parsed
   * nodes and there were multiple top level nodes, otherwise the single node is returned.
   * @param {string} html - HTML to be parsed
   * @param {boolean} [fragment=false] - Whether or not the return should be the raw `DocumentFragment`
   * @returns {(DocumentFragment|NodeList|HTMLElement)} - The result of HTML parsing
   */


  static parseHTML(html, fragment = false) {
    const template = document.createElement("template");
    template.innerHTML = html;
    const node = template.content.cloneNode(true);
    if (fragment) return node;
    return node.childNodes.length > 1 ? node.childNodes : node.childNodes[0];
  }
  /** Alternate name for {@link module:DOMTools.parseHTML} */


  static createElement(html, fragment = false) {
    return this.parseHTML(html, fragment);
  }
  /**
   * Takes a string of html and escapes it using the brower's own escaping mechanism.
   * @param {String} html - html to be escaped
   */


  static escapeHTML(html) {
    const textNode = document.createTextNode("");
    const spanElement = document.createElement("span");
    spanElement.append(textNode);
    textNode.nodeValue = html;
    return spanElement.innerHTML;
  }
  /**
   * Adds a list of classes from the target element.
   * @param {Element} element - Element to edit classes of
   * @param {...string} classes - Names of classes to add
   * @returns {Element} - `element` to allow for chaining
   */


  static addClass(element, ...classes) {
    classes = classes.flat().filter(c => c);

    for (let c = 0; c < classes.length; c++) classes[c] = classes[c].toString().split(" ");

    classes = classes.flat().filter(c => c);
    element.classList.add(...classes);
    return element;
  }
  /**
   * Removes a list of classes from the target element.
   * @param {Element} element - Element to edit classes of
   * @param {...string} classes - Names of classes to remove
   * @returns {Element} - `element` to allow for chaining
   */


  static removeClass(element, ...classes) {
    for (let c = 0; c < classes.length; c++) classes[c] = classes[c].toString().split(" ");

    classes = classes.flat().filter(c => c);
    element.classList.remove(...classes);
    return element;
  }
  /**
   * When only one argument is present: Toggle class value;
   * i.e., if class exists then remove it and return false, if not, then add it and return true.
   * When a second argument is present:
   * If the second argument evaluates to true, add specified class value, and if it evaluates to false, remove it.
   * @param {Element} element - Element to edit classes of
   * @param {string} classname - Name of class to toggle
   * @param {boolean} [indicator] - Optional indicator for if the class should be toggled
   * @returns {Element} - `element` to allow for chaining
   */


  static toggleClass(element, classname, indicator) {
    classname = classname.toString().split(" ").filter(c => c);
    if (typeof indicator !== "undefined") classname.forEach(c => element.classList.toggle(c, indicator));else classname.forEach(c => element.classList.toggle(c));
    return element;
  }
  /**
   * Checks if an element has a specific class
   * @param {Element} element - Element to edit classes of
   * @param {string} classname - Name of class to check
   * @returns {boolean} - `true` if the element has the class, `false` otherwise.
   */


  static hasClass(element, classname) {
    return classname.toString().split(" ").filter(c => c).every(c => element.classList.contains(c));
  }
  /**
   * Replaces one class with another
   * @param {Element} element - Element to edit classes of
   * @param {string} oldName - Name of class to replace
   * @param {string} newName - New name for the class
   * @returns {Element} - `element` to allow for chaining
   */


  static replaceClass(element, oldName, newName) {
    element.classList.replace(oldName, newName);
    return element;
  }
  /**
   * Appends `thisNode` to `thatNode`
   * @param {Node} thisNode - Node to be appended to another node
   * @param {Node} thatNode - Node for `thisNode` to be appended to
   * @returns {Node} - `thisNode` to allow for chaining
   */


  static appendTo(thisNode, thatNode) {
    if (typeof thatNode == "string") thatNode = this.query(thatNode);
    if (!thatNode) return null;
    thatNode.append(thisNode);
    return thisNode;
  }
  /**
   * Prepends `thisNode` to `thatNode`
   * @param {Node} thisNode - Node to be prepended to another node
   * @param {Node} thatNode - Node for `thisNode` to be prepended to
   * @returns {Node} - `thisNode` to allow for chaining
   */


  static prependTo(thisNode, thatNode) {
    if (typeof thatNode == "string") thatNode = this.query(thatNode);
    if (!thatNode) return null;
    thatNode.prepend(thisNode);
    return thisNode;
  }
  /**
   * Insert after a specific element, similar to jQuery's `thisElement.insertAfter(otherElement)`.
   * @param {Node} thisNode - The node to insert
   * @param {Node} targetNode - Node to insert after in the tree
   * @returns {Node} - `thisNode` to allow for chaining
   */


  static insertAfter(thisNode, targetNode) {
    targetNode.parentNode.insertBefore(thisNode, targetNode.nextSibling);
    return thisNode;
  }
  /**
   * Insert after a specific element, similar to jQuery's `thisElement.after(newElement)`.
   * @param {Node} thisNode - The node to insert
   * @param {Node} newNode - Node to insert after in the tree
   * @returns {Node} - `thisNode` to allow for chaining
   */


  static after(thisNode, newNode) {
    thisNode.parentNode.insertBefore(newNode, thisNode.nextSibling);
    return thisNode;
  }
  /**
   * Gets the next sibling element that matches the selector.
   * @param {Element} element - Element to get the next sibling of
   * @param {string} [selector=""] - Optional selector
   * @returns {Element} - The sibling element
   */


  static next(element, selector = "") {
    return selector ? element.querySelector("+ " + selector) : element.nextElementSibling;
  }
  /**
   * Gets all subsequent siblings.
   * @param {Element} element - Element to get next siblings of
   * @returns {NodeList} - The list of siblings
   */


  static nextAll(element) {
    return element.querySelectorAll("~ *");
  }
  /**
   * Gets the subsequent siblings until an element matches the selector.
   * @param {Element} element - Element to get the following siblings of
   * @param {string} selector - Selector to stop at
   * @returns {Array<Element>} - The list of siblings
   */


  static nextUntil(element, selector) {
    const next = [];

    while (element.nextElementSibling && !element.nextElementSibling.matches(selector)) next.push(element = element.nextElementSibling);

    return next;
  }
  /**
   * Gets the previous sibling element that matches the selector.
   * @param {Element} element - Element to get the previous sibling of
   * @param {string} [selector=""] - Optional selector
   * @returns {Element} - The sibling element
   */


  static previous(element, selector = "") {
    const previous = element.previousElementSibling;
    if (selector) return previous && previous.matches(selector) ? previous : null;
    return previous;
  }
  /**
   * Gets all preceeding siblings.
   * @param {Element} element - Element to get preceeding siblings of
   * @returns {NodeList} - The list of siblings
   */


  static previousAll(element) {
    const previous = [];

    while (element.previousElementSibling) previous.push(element = element.previousElementSibling);

    return previous;
  }
  /**
   * Gets the preceeding siblings until an element matches the selector.
   * @param {Element} element - Element to get the preceeding siblings of
   * @param {string} selector - Selector to stop at
   * @returns {Array<Element>} - The list of siblings
   */


  static previousUntil(element, selector) {
    const previous = [];

    while (element.previousElementSibling && !element.previousElementSibling.matches(selector)) previous.push(element = element.previousElementSibling);

    return previous;
  }
  /**
   * Find which index in children a certain node is. Similar to jQuery's `$.index()`
   * @param {HTMLElement} node - The node to find its index in parent
   * @returns {number} Index of the node
   */


  static indexInParent(node) {
    const children = node.parentNode.childNodes;
    let num = 0;

    for (let i = 0; i < children.length; i++) {
      if (children[i] == node) return num;
      if (children[i].nodeType == 1) num++;
    }

    return -1;
  }
  /** Shorthand for {@link module:DOMTools.indexInParent} */


  static index(node) {
    return this.indexInParent(node);
  }
  /**
   * Gets the parent of the element if it matches the selector,
   * otherwise returns null.
   * @param {Element} element - Element to get parent of
   * @param {string} [selector=""] - Selector to match parent
   * @returns {(Element|null)} - The sibling element or null
   */


  static parent(element, selector = "") {
    return !selector || element.parentElement.matches(selector) ? element.parentElement : null;
  }
  /**
   * Gets all children of Element that match the selector if provided.
   * @param {Element} element - Element to get all children of
   * @param {string} selector - Selector to match the children to
   * @returns {Array<Element>} - The list of children
   */


  static findChild(element, selector) {
    return element.querySelector(":scope > " + selector);
  }
  /**
   * Gets all children of Element that match the selector if provided.
   * @param {Element} element - Element to get all children of
   * @param {string} selector - Selector to match the children to
   * @returns {Array<Element>} - The list of children
   */


  static findChildren(element, selector) {
    return element.querySelectorAll(":scope > " + selector);
  }
  /**
   * Gets all ancestors of Element that match the selector if provided.
   * @param {Element} element - Element to get all parents of
   * @param {string} [selector=""] - Selector to match the parents to
   * @returns {Array<Element>} - The list of parents
   */


  static parents(element, selector = "") {
    const parents = [];
    if (selector) while (element.parentElement && element.parentElement.closest(selector)) parents.push(element = element.parentElement.closest(selector));else while (element.parentElement) parents.push(element = element.parentElement);
    return parents;
  }
  /**
   * Gets the ancestors until an element matches the selector.
   * @param {Element} element - Element to get the ancestors of
   * @param {string} selector - Selector to stop at
   * @returns {Array<Element>} - The list of parents
   */


  static parentsUntil(element, selector) {
    const parents = [];

    while (element.parentElement && !element.parentElement.matches(selector)) parents.push(element = element.parentElement);

    return parents;
  }
  /**
   * Gets all siblings of the element that match the selector.
   * @param {Element} element - Element to get all siblings of
   * @param {string} [selector="*"] - Selector to match the siblings to
   * @returns {Array<Element>} - The list of siblings
   */


  static siblings(element, selector = "*") {
    return Array.from(element.parentElement.children).filter(e => e != element && e.matches(selector));
  }
  /**
   * Sets or gets css styles for a specific element. If `value` is provided
   * then it sets the style and returns the element to allow for chaining,
   * otherwise returns the style.  
   * @param {Element} element - Element to set the CSS of
   * @param {string} attribute - Attribute to get or set
   * @param {string} [value] - Value to set for attribute
   * @returns {Element|string} - When setting a value, element is returned for chaining, otherwise the value is returned.
   */


  static css(element, attribute, value) {
    if (typeof value == "undefined") return global.getComputedStyle(element)[attribute];
    element.style[attribute] = value;
    return element;
  }
  /**
   * Sets or gets the width for a specific element. If `value` is provided
   * then it sets the width and returns the element to allow for chaining,
   * otherwise returns the width.  
   * @param {Element} element - Element to set the CSS of
   * @param {string} [value] - Width to set
   * @returns {Element|string} - When setting a value, element is returned for chaining, otherwise the value is returned.
   */


  static width(element, value) {
    if (typeof value == "undefined") return parseInt(getComputedStyle(element).width);
    element.style.width = value;
    return element;
  }
  /**
   * Sets or gets the height for a specific element. If `value` is provided
   * then it sets the height and returns the element to allow for chaining,
   * otherwise returns the height.  
   * @param {Element} element - Element to set the CSS of
   * @param {string} [value] - Height to set
   * @returns {Element|string} - When setting a value, element is returned for chaining, otherwise the value is returned.
   */


  static height(element, value) {
    if (typeof value == "undefined") return parseInt(getComputedStyle(element).height);
    element.style.height = value;
    return element;
  }
  /**
   * Sets the inner text of an element if given a value, otherwise returns it.
   * @param {Element} element - Element to set the text of
   * @param {string} [text] - Content to set
   * @returns {string} - Either the string set by this call or the current text content of the node.
   */


  static text(element, text) {
    if (typeof text == "undefined") return element.textContent;
    return element.textContent = text;
  }
  /**
   * Returns the innerWidth of the element.
   * @param {Element} element - Element to retrieve inner width of
   * @return {number} - The inner width of the element.
   */


  static innerWidth(element) {
    return element.clientWidth;
  }
  /**
   * Returns the innerHeight of the element.
   * @param {Element} element - Element to retrieve inner height of
   * @return {number} - The inner height of the element.
   */


  static innerHeight(element) {
    return element.clientHeight;
  }
  /**
   * Returns the outerWidth of the element.
   * @param {Element} element - Element to retrieve outer width of
   * @return {number} - The outer width of the element.
   */


  static outerWidth(element) {
    return element.offsetWidth;
  }
  /**
   * Returns the outerHeight of the element.
   * @param {Element} element - Element to retrieve outer height of
   * @return {number} - The outer height of the element.
   */


  static outerHeight(element) {
    return element.offsetHeight;
  }
  /**
   * Gets the offset of the element in the page.
   * @param {Element} element - Element to get offset of
   * @return {Offset} - The offset of the element
   */


  static offset(element) {
    return element.getBoundingClientRect();
  }

  static get listeners() {
    return this._listeners || (this._listeners = {});
  }
  /**
   * This is similar to jQuery's `on` function and can *hopefully* be used in the same way.
   * 
   * Rather than attempt to explain, I'll show some example usages.
   * 
   * The following will add a click listener (in the `myPlugin` namespace) to `element`.
   * `DOMTools.on(element, "click.myPlugin", () => {console.log("clicked!");});`
   * 
   * The following will add a click listener (in the `myPlugin` namespace) to `element` that only fires when the target is a `.block` element.
   * `DOMTools.on(element, "click.myPlugin", ".block", () => {console.log("clicked!");});`
   * 
   * The following will add a click listener (without namespace) to `element`.
   * `DOMTools.on(element, "click", () => {console.log("clicked!");});`
   * 
   * The following will add a click listener (without namespace) to `element` that only fires once.
   * `const cancel = DOMTools.on(element, "click", () => {console.log("fired!"); cancel();});`
   * 
   * @param {Element} element - Element to add listener to
   * @param {string} event - Event to listen to with option namespace (e.g. "event.namespace")
   * @param {(string|callable)} delegate - Selector to run on element to listen to
   * @param {callable} [callback] - Function to fire on event
   * @returns {module:DOMTools~CancelListener} - A function that will undo the listener
   */


  static on(element, event, delegate, callback) {
    const [type, namespace] = event.split(".");
    const hasDelegate = delegate && callback;
    if (!callback) callback = delegate;
    const eventFunc = !hasDelegate ? callback : function (event) {
      if (event.target.matches(delegate)) {
        callback(event);
      }
    };
    element.addEventListener(type, eventFunc);

    const cancel = () => {
      element.removeEventListener(type, eventFunc);
    };

    if (namespace) {
      if (!this.listeners[namespace]) this.listeners[namespace] = [];

      const newCancel = () => {
        cancel();
        this.listeners[namespace].splice(this.listeners[namespace].findIndex(l => l.event == type && l.element == element), 1);
      };

      this.listeners[namespace].push({
        event: type,
        element: element,
        cancel: newCancel
      });
      return newCancel;
    }

    return cancel;
  }
  /**
   * Functionality for this method matches {@link module:DOMTools.on} but automatically cancels itself
   * and removes the listener upon the first firing of the desired event.
   * 
   * @param {Element} element - Element to add listener to
   * @param {string} event - Event to listen to with option namespace (e.g. "event.namespace")
   * @param {(string|callable)} delegate - Selector to run on element to listen to
   * @param {callable} [callback] - Function to fire on event
   * @returns {module:DOMTools~CancelListener} - A function that will undo the listener
   */


  static once(element, event, delegate, callback) {
    const [type, namespace] = event.split(".");
    const hasDelegate = delegate && callback;
    if (!callback) callback = delegate;
    const eventFunc = !hasDelegate ? function (event) {
      callback(event);
      element.removeEventListener(type, eventFunc);
    } : function (event) {
      if (!event.target.matches(delegate)) return;
      callback(event);
      element.removeEventListener(type, eventFunc);
    };
    element.addEventListener(type, eventFunc);

    const cancel = () => {
      element.removeEventListener(type, eventFunc);
    };

    if (namespace) {
      if (!this.listeners[namespace]) this.listeners[namespace] = [];

      const newCancel = () => {
        cancel();
        this.listeners[namespace].splice(this.listeners[namespace].findIndex(l => l.event == type && l.element == element), 1);
      };

      this.listeners[namespace].push({
        event: type,
        element: element,
        cancel: newCancel
      });
      return newCancel;
    }

    return cancel;
  }

  static __offAll(event, element) {
    const [type, namespace] = event.split(".");

    let matchFilter = listener => listener.event == type,
        defaultFilter = _ => _;

    if (element) matchFilter = l => l.event == type && l.element == element, defaultFilter = l => l.element == element;
    const listeners = this.listeners[namespace] || [];
    const list = type ? listeners.filter(matchFilter) : listeners.filter(defaultFilter);

    for (let c = 0; c < list.length; c++) list[c].cancel();
  }
  /**
   * This is similar to jQuery's `off` function and can *hopefully* be used in the same way.
   * 
   * Rather than attempt to explain, I'll show some example usages.
   * 
   * The following will remove a click listener called `onClick` (in the `myPlugin` namespace) from `element`.
   * `DOMTools.off(element, "click.myPlugin", onClick);`
   * 
   * The following will remove a click listener called `onClick` (in the `myPlugin` namespace) from `element` that only fired when the target is a `.block` element.
   * `DOMTools.off(element, "click.myPlugin", ".block", onClick);`
   * 
   * The following will remove a click listener (without namespace) from `element`.
   * `DOMTools.off(element, "click", onClick);`
   * 
   * The following will remove all listeners in namespace `myPlugin` from `element`.
   * `DOMTools.off(element, ".myPlugin");`
   * 
   * The following will remove all click listeners in namespace `myPlugin` from *all elements*.
   * `DOMTools.off("click.myPlugin");`
   * 
   * The following will remove all listeners in namespace `myPlugin` from *all elements*.
   * `DOMTools.off(".myPlugin");`
   * 
   * @param {(Element|string)} element - Element to remove listener from
   * @param {string} [event] - Event to listen to with option namespace (e.g. "event.namespace")
   * @param {(string|callable)} [delegate] - Selector to run on element to listen to
   * @param {callable} [callback] - Function to fire on event
   * @returns {Element} - The original element to allow for chaining
   */


  static off(element, event, delegate, callback) {
    if (typeof element == "string") return this.__offAll(element);
    const [type, namespace] = event.split(".");
    if (namespace) return this.__offAll(event, element);
    const hasDelegate = delegate && callback;
    if (!callback) callback = delegate;
    const eventFunc = !hasDelegate ? callback : function (event) {
      if (event.target.matches(delegate)) {
        callback(event);
      }
    };
    element.removeEventListener(type, eventFunc);
    return element;
  }
  /**
   * Adds a listener for when the node is added/removed from the document body.
   * The listener is automatically removed upon firing.
   * @param {HTMLElement} node - node to wait for
   * @param {callable} callback - function to be performed on event
   * @param {boolean} onMount - determines if it should fire on Mount or on Unmount
   */


  static onMountChange(node, callback, onMount = true) {
    const wrappedCallback = () => {
      this.observer.unsubscribe(wrappedCallback);
      callback();
    };

    this.observer.subscribe(wrappedCallback, mutation => {
      const nodes = Array.from(onMount ? mutation.addedNodes : mutation.removedNodes);
      const directMatch = nodes.indexOf(node) > -1;
      const parentMatch = nodes.some(parent => parent.contains(node));
      return directMatch || parentMatch;
    });
    return node;
  }
  /** Shorthand for {@link module:DOMTools.onMountChange} with third parameter `true` */


  static onMount(node, callback) {
    return this.onMountChange(node, callback);
  }
  /** Shorthand for {@link module:DOMTools.onMountChange} with third parameter `false` */


  static onUnmount(node, callback) {
    return this.onMountChange(node, callback, false);
  }
  /** Alias for {@link module:DOMTools.onMount} */


  static onAdded(node, callback) {
    return this.onMount(node, callback);
  }
  /** Alias for {@link module:DOMTools.onUnmount} */


  static onRemoved(node, callback) {
    return this.onUnmount(node, callback, false);
  }
  /**
   * Helper function which combines multiple elements into one parent element
   * @param {Array<HTMLElement>} elements - array of elements to put into a single parent
   */


  static wrap(elements) {
    const domWrapper = this.parseHTML(`<div class="dom-wrapper"></div>`);

    for (let e = 0; e < elements.length; e++) domWrapper.appendChild(elements[e]);

    return domWrapper;
  }
  /**
   * Resolves the node to an HTMLElement. This is mainly used by library modules.
   * @param {(jQuery|Element)} node - node to resolve
   */


  static resolveElement(node) {
    if (!(node instanceof jQuery) && !(node instanceof Element)) return undefined;
    return node instanceof jQuery ? node[0] : node;
  }

}
window.Lightcord.BetterDiscord.DOM = DOMTools;

/***/ }),

/***/ "./src/modules/emojiModule.js":
/*!************************************!*\
  !*** ./src/modules/emojiModule.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v2 */ "./src/modules/v2.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");


const Constants = {
  EmojiRegex: /<a?\.(\w+)\.(\d+)>/g
};
let CustomEmojiModule = BDModules.get(e => e.CustomEmoji)[0];
let EmojiModuleApi = BDModules.get(e => e.default && e.default.getCustomEmojiById)[0];
let AutocompleteModule = BDModules.get(e => e.default && e.default.displayName === "Autocomplete")[0];
let AutoCompletionTemplates = BDModules.get(e => e.getAutocompleteOptions)[0];
let EmojiModuleQuery = BDModules.get(e => e.default && e.default.queryEmojiResults)[0];
let Messages = BDModules.get(e => e.default && e.default.Messages && e.default.Messages.EMOJI_MATCHING)[0];
let guildModule = BDModules.get(e => e.default && e.default.getGuild && e.default.getGuilds && !e.default.isFetching)[0];
let emojiSearch = BDModules.get(e => e.default && e.default.getDisambiguatedEmojiContext);
/* harmony default export */ __webpack_exports__["default"] = (new class EmojiModule {
  constructor() {
    this.init().catch(err => _utils__WEBPACK_IMPORTED_MODULE_1__["default"].err("EmojiModule", "An error occured", err)); // better logging
  }

  async init() {
    /** Emoji AutoComplete */
    if (!AutocompleteModule) AutocompleteModule = await window.Lightcord.Api.ensureExported(e => e.default && e.default.displayName === "Autocomplete");
    if (!AutoCompletionTemplates) AutoCompletionTemplates = await window.Lightcord.Api.ensureExported(e => e.getAutocompleteOptions);
    if (!EmojiModuleQuery) EmojiModuleQuery = await window.Lightcord.Api.ensureExported(e => e.default && e.default.queryEmojiResults);
    if (!Messages) Messages = await window.Lightcord.Api.ensureExported(e => e.default && e.default.Messages && e.default.Messages.EMOJI_MATCHING);
    if (!guildModule) guildModule = await window.Lightcord.Api.ensureExported(e => e.default && e.default.getGuild && e.default.getGuilds && !e.default.isFetching);
    if (!emojiSearch) emojiSearch = await window.Lightcord.Api.ensureExported(e => e.default && e.default.getDisambiguatedEmojiContext);

    if (AutocompleteModule && AutoCompletionTemplates && EmojiModuleQuery && Messages && guildModule && emojiSearch) {
      console.log(`Patching getAutocompleteOptions of AutoCompletionTemplates`, AutoCompletionTemplates);
      const getAutocompleteOptions = AutoCompletionTemplates.getAutocompleteOptions;

      AutoCompletionTemplates.getAutocompleteOptions = function (e, t, n, r, a) {
        const value = getAutocompleteOptions.call(this, ...arguments);
        value.LIGHTCORD_EMOJIS = {
          matches(arg1, arg2) {
            let condition = arg2.length > 1 && "." === arg1;
            setEmojiUsable(condition);
            return condition;
          },

          queryResults(t) {
            let results = EmojiModuleQuery.default.queryEmojiResults(t, e);
            return results;
          },

          renderResults(e, t, n, r, a) {
            return D(e, t, a.emojis, n, r, Messages.default.Messages.EMOJI_MATCHING, Messages.default.Messages.EMOJI, AutocompleteModule.default.Emoji, function (e) {
              return {
                emoji: e,
                key: e.id || e.uniqueName || e.name,
                sentinel: ".",
                guild: null != e.guildId ? guildModule.default.getGuild(e.guildId) : null
              };
            }, function (e) {
              return "." + e + ".";
            });
          },

          getPlainText(id, guild) {
            var emojis = guild.emojis;
            if (null == emojis || null == emojis[id]) return "";
            var emoji = emojis[id],
                isAnimated = emoji.animated ? "a" : "";
            return emoji.managed || null == emoji.id ? "." + emoji.name + "." : "<" + isAnimated + "." + (emoji.originalName || emoji.name) + "." + emoji.id + ">";
          },

          getRawText(id, guild) {
            var emojis = guild.emojis;
            if (null == emojis || null == emojis[id]) return "";
            var emoji = emojis[id],
                isAnimated = emoji.animated ? "a" : "";
            return emoji.managed || null == emoji.id ? "." + emoji.name + "." : "<" + isAnimated + "." + (emoji.originalName || emoji.name) + "." + emoji.id + ">";
          }

        };
        return value;
      };
    } else {
      console.error(new Error("Couldn't start autocompletion of Lightcord's emojis."));
    }
    /** Emoji display */


    while (!_v2__WEBPACK_IMPORTED_MODULE_0__["default"].MessageComponent) await new Promise(resolve => setTimeout(resolve, 100));

    if (!this.cancelEmojiRender) {
      // TODO: Proper emoji formatting / rendering
      this.cancelEmoteRender = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(_v2__WEBPACK_IMPORTED_MODULE_0__["default"].MessageComponent, "default", {
        before: data => {
          const message = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getNestedProp(data.methodArguments[0], "childrenMessageContent.props.message");
          if (!message) return;
          const content = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getNestedProp(data.methodArguments[0], "childrenMessageContent.props.content");
          if (!content || !content.length) return;
          /**
           * @type {{
           *  raw: string,
           *  name: string,
           *  id: string,
           *  animated: boolean
           * }[]}
           */

          let emojis = [];
          const newContent = [];

          for (let node of content) {
            if (typeof node !== "string") {
              newContent.push(node);
              continue;
            }

            ;
            let parsed;
            let hasParsed = false;

            do {
              parsed = Constants.EmojiRegex.exec(node);

              if (parsed) {
                hasParsed = true;
                if (!EmojiModuleApi) EmojiModuleApi = BDModules.get(e => e.default && e.default.getCustomEmojiById)[0];
                const emoji = EmojiModuleApi.default.getCustomEmojiById(parsed[2]);

                if (emoji) {
                  emojis.push({
                    animated: emoji.animated,
                    name: emoji.name,
                    id: emoji.id,
                    raw: parsed[0]
                  });
                } else {
                  emojis.push({
                    animated: parsed[0].startsWith("<a"),
                    name: parsed[1],
                    id: parsed[2],
                    raw: parsed[0]
                  });
                }
              }
            } while (parsed);

            if (hasParsed) {
              const words = node.split(" ").map((word, index, arr) => {
                if (!word) return "";
                const emoji = emojis.find(e => e.raw == word);
                if (!emoji) return word;
                if (!CustomEmojiModule) CustomEmojiModule = BDModules.get(e => e.CustomEmoji)[0];
                return React.createElement(CustomEmojiModule.CustomEmoji, {
                  emoji: {
                    name: `.${emoji.name}.`,
                    emojiId: emoji.id,
                    animated: emoji.animated,
                    jumboable: arr.length === 1 && content.length === 1
                  }
                });
              }).reduce((previous, current) => {
                if (previous.length === 0) return [current];

                if (typeof current === "string") {
                  if (typeof previous[previous.length - 1] === "string") {
                    previous[previous.length - 1] += ` ${current}`;
                    return previous;
                  }

                  previous.push(" " + current);
                  return previous;
                }

                previous.push(" ", current);
                return previous;
              }, []);
              newContent.push(...words);
            } else {
              newContent.push(node);
            }
          }

          while (data.methodArguments[0].childrenMessageContent.props.content[0]) {
            data.methodArguments[0].childrenMessageContent.props.content.shift();
          }

          while (newContent[0]) {
            data.methodArguments[0].childrenMessageContent.props.content.push(newContent.shift());
          }
        }
      });
    }
    /*
    let userModule
    window.Lightcord.Api.ensureExported(e => e.default && e.default.displayName === "EmojiPickerListRow")
    .then(EmojiPickerListRow => {
       let classs = EmojiPickerListRow.default
       EmojiPickerListRow.default = class EmojiPickerListRow extends React.Component {
           constructor(props){
               super(props)
           }
             render(){
               if(!userModule)userModule = BDModules.get(e => e.default && e.default.getCurrentUser)[0]
               if(!userModule)return React.createElement(classs, this.props)
               let user = userModule.default.getCurrentUser()
               if(!user.hasPremiumSubscription)return React.createElement(classs, this.props)
                 return React.createElement(classs, Object.assign({}, this.props, {
                   emojiDescriptors: this.props.emojiDescriptors.map(e => {
                       e.isDisabled = false
                   })
               }))                    
           }
       }
       EmojiPickerListRow.default.displayName = "EmojiPickerListRow"
    })*/

  }

  disable() {
    if (!this.cancelEmoteRender) return;
    this.cancelEmoteRender();
    this.cancelEmoteRender = null;
  }

  start() {}

}());

function D(e, t, n, r, o, i, s, u, l, c) {
  if (null == n || 0 === n.length) return null;
  var d = n.map(function (e, n) {
    return React.createElement(u, Object.assign({
      onClick: o,
      onHover: r,
      selected: t === n,
      index: n
    }, l(e, n)));
  });
  return [R(i, s, e, c), d];
}

function R(e, t, n, r) {
  var a = n.length > 0 ? e.format({
    prefix: r(n)
  }) : t;

  if (Array.isArray(a)) {
    a.unshift(React.createElement("strong", {}, "[Lightcord] "));
  } else {
    a = "[LIGHTCORD] " + a;
  }

  return React.createElement(AutocompleteModule.default.Title, {
    title: a
  }, a);
}

R.displayName = "renderHeader";
let EmojiFilterModule = BDModules.get(e => e.default && e.default.isEmojiDisabled)[0];
let isEmojiDisabled = EmojiFilterModule && EmojiFilterModule.default.isEmojiDisabled;
let isUsable = false;
let hasPatched = false;

function setEmojiUsable(usable) {
  isUsable = usable;
  if (hasPatched) return;
  if (!EmojiFilterModule) EmojiFilterModule = BDModules.get(e => e.default && e.default.isEmojiDisabled)[0];
  if (!EmojiFilterModule) return;
  if (!isEmojiDisabled) isEmojiDisabled = EmojiFilterModule.default.isEmojiDisabled;
  hasPatched = true;

  EmojiFilterModule.default.isEmojiDisabled = function (emoji) {
    if (isUsable) {
      if (emoji.surrogates || emoji.diversity) return true;
      return false;
    }

    return isEmojiDisabled.call(this, ...arguments);
  };
}

/***/ }),

/***/ "./src/modules/pluginCertifier.js":
/*!****************************************!*\
  !*** ./src/modules/pluginCertifier.js ***!
  \****************************************/
/*! exports provided: default, checkViruses, checkHash, processFile, processAttachment, decryptSettingsCache, encryptSettingsCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkViruses", function() { return checkViruses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkHash", function() { return checkHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processFile", function() { return processFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processAttachment", function() { return processAttachment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decryptSettingsCache", function() { return decryptSettingsCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encryptSettingsCache", function() { return encryptSettingsCache; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _v2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v2 */ "./src/modules/v2.js");
/* harmony import */ var _ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/tooltipWrap */ "./src/ui/tooltipWrap.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contentManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contentManager */ "./src/modules/contentManager.js");










const cache = {};
const cache2 = {};
/* harmony default export */ __webpack_exports__["default"] = (new class PluginCertifier {
  constructor() {
    window.Lightcord.BetterDiscord.PluginCertifier = this;
  }

  patch(attachment, id) {
    process.nextTick(() => {
      processAttachment(attachment, id);
    });
  }

  start() {}

  isTrusted(hash) {
    return cache[hash] && !cache[hash].suspect;
  }

}());
function checkViruses(hash, data, resultCallback, removeCallback, filename) {
  data = data.toString("utf8");
  let isHarmful = false;

  for (let keyword of data.split(/[^\w\d]+/g)) {
    for (let oof of ["token", "email", "phone", "MFA", "2fa", "child_process", "localStorage", "eval", "getGlobal", "BrowserWindow"]) {
      if (keyword.toLowerCase().includes(oof.toLowerCase()) && !keyword.toLowerCase() === "domtokenlist") {
        console.log(oof, keyword);
        isHarmful = "token stealer/virus";
        break;
      }
    }

    if (isHarmful) break;
  }

  if (!isHarmful) {
    /**
     * @type {string}
     */
    const no_comments = data.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "").trim(); // removing the META comment from plugins

    if (/var [\w\d_$]+=\["/gi.test(no_comments)) {
      isHarmful = "obfuscation/hidden code";
    }

    if (!isHarmful) {
      const regexps = [
      /** hexadecimal */
      /_0x\w{4}\('0x[\dabcdef]+'\)/g, /_0x\w{4}\('0x[\dabcdef]+'[, ]+'[^']{4}'\)/g, // _0x8db7('0x0', 'x1]f')

      /** mangled */
      /\w+\('0x[\dabcdef]+'\)/g, // b('0x0')
      /\w+\('0x[\dabcdef]+'[, ]+'[^']{4}'\)/g // b('0x0', 'x1]f')
      ];

      for (let regex of regexps) {
        if (isHarmful) break;
        if (regex.test(no_comments)) isHarmful = "obfuscation/hidden code";
      }
    }
  }

  if (!isHarmful) return removeCallback(hash);
  cache[hash] = {
    suspect: true,
    name: hashToUrl[hash].split("/").pop(),
    type: hashToUrl[hash].endsWith(".js") ? "Plugin" : "Theme",
    harm: isHarmful,
    hash: hash,
    filename
  };
  console.log(`Found potentially dangerous ${cache[hash].type.toLowerCase()}: ${cache[hash].name}`);
  resultCallback(cache[hash]);
}
const hashToUrl = {};
function checkHash(hash, data, filename, resultCallback, removeCallback) {
  console.log(`File: ${filename} hash: ${hash}`);

  if (!cache[hash]) {
    node_fetch__WEBPACK_IMPORTED_MODULE_0___default()("https://cdn.jsdelivr.net/gh/Lightcord/filehashes@master/hashes/" + hash, {
      // Using node-fetch to bypass cors
      headers: {
        "User-Agent": electron__WEBPACK_IMPORTED_MODULE_1__["remote"].getCurrentWebContents().userAgent // have to set user-agent

      }
    }).then(async res => {
      if (res.status !== 200) {
        if (filename.endsWith(".theme.css")) return removeCallback(hash);
        checkViruses(hash, data, resultCallback, removeCallback, filename);
        return;
      }

      const result = await res.json();
      result.hash = hash;
      result.filename = filename;
      cache[hash] = result;
      resultCallback(result);
    }).catch(console.error);
  } else {
    const result = cache[hash];
    resultCallback(result);
  }
}
function processFile(__path, resultCallback, removeCallback = hash => {}, isFromLoader = false) {
  const hash = crypto__WEBPACK_IMPORTED_MODULE_2__["createHash"]("sha256");
  let data = Buffer.alloc(0);
  Object(fs__WEBPACK_IMPORTED_MODULE_6__["createReadStream"])(__path).on("data", chunk => {
    data = Buffer.concat([data, chunk]);
    hash.update(chunk);
  }).on("end", () => {
    const hashResult = hash.digest("hex");
    hashToUrl[hashResult] = __path;

    if (isFromLoader && _contentManager__WEBPACK_IMPORTED_MODULE_8__["addonCache"][hashResult]) {
      let value = _contentManager__WEBPACK_IMPORTED_MODULE_8__["addonCache"][hashResult];

      if (value.timestamp < Date.now() - 6.048e+8) {
        delete _contentManager__WEBPACK_IMPORTED_MODULE_8__["addonCache"][hashResult];
        _contentManager__WEBPACK_IMPORTED_MODULE_8__["default"].saveAddonCache();
      } else {
        resultCallback(value.result);
        return;
      }
    }

    checkHash(hashResult, data, Object(path__WEBPACK_IMPORTED_MODULE_7__["basename"])(__path), resultCallback, removeCallback);
  });
}
function processAttachment(attachment, id) {
  if (!document.getElementById(id)) return;
  if (!attachment.url.startsWith("https://cdn.discordapp.com/")) return document.getElementById(id).remove();
  if (!attachment.filename.endsWith(".plugin.js") && !attachment.filename.endsWith(".theme.css")) return document.getElementById(id).remove();
  node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(attachment.url, {
    headers: {
      "User-Agent": electron__WEBPACK_IMPORTED_MODULE_1__["remote"].getCurrentWebContents().userAgent
    }
  }).then(res => {
    if (res.status !== 200) throw new Error("File doesn't exist.");
    const hash = crypto__WEBPACK_IMPORTED_MODULE_2__["createHash"]("sha256");
    let data = Buffer.alloc(0);
    res.body.on("data", chunk => {
      data = Buffer.concat([data, chunk]);
      hash.update(chunk);
    });
    res.body.on("end", () => {
      const hashResult = hash.digest("hex");
      cache2[attachment.url] = hashResult;
      hashToUrl[hashResult] = attachment.url;
      checkHash(hashResult, data, attachment.filename, result => {
        renderToElements(id, result, attachment.filename);
      }, () => {
        let elem = document.getElementById(id);
        if (elem) elem.remove();
      });
    });
  }).catch(() => {});
}
let flowerStarModule = BDModules.get(e => e.flowerStarContainer)[0];
let childModule = BDModules.get(e => e.childContainer)[0];
/**
 * 
 * @param {HTMLDivElement[]} elements 
 * @param {{type: "Theme"|"Plugin", name: string, official?: boolean}|{suspect:true, type: "Theme"|"Plugin", name: string, harm: string}} result
 */

function renderToElements(id, result, filename) {
  const div = document.getElementById(id);
  if (!div || div.childNodes.length > 0) return; // already certified/div does not exist anymore.

  if (!flowerStarModule) flowerStarModule = BDModules.get(e => e.flowerStarContainer)[0];
  if (!childModule) childModule = BDModules.get(e => e.childContainer)[0];

  if (result.suspect) {
    try {
      div.parentNode.style.borderColor = "rgb(240, 71, 71)";
      /**
       * 
       * @param {HTMLElement} node 
       */

      let nextNode = node => {
        for (let child of node.children) {
          if (child.tagName === "A") {
            child.addEventListener("click", e => {
              e.preventDefault();
              e.stopImmediatePropagation();
              _utils__WEBPACK_IMPORTED_MODULE_5__["default"].showConfirmationModal("Are you sure you want to download this ?", "The " + result.type.toLowerCase() + " **" + filename + "** might be dangerous **(" + result.harm + ")**. \n\n**We don't recommand to download it**. However, you can still do it below.", {
                confirmText: "Download Anyway",
                cancelText: "Don't !",
                danger: true,
                onCancel: () => {},
                onConfirm: () => {
                  electron__WEBPACK_IMPORTED_MODULE_1__["remote"].shell.openExternal(child.href);
                }
              });
            });
          } else if (["div"].includes(child.tagName.toLowerCase())) {
            nextNode(child);
          }
        }
      };

      nextNode(div.parentNode);
    } catch (e) {
      console.error(e);
    }

    _v2__WEBPACK_IMPORTED_MODULE_3__["default"].reactDom.render(_v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement(_ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: result.type + " " + result.name + " is potentially dangerous."
    }, _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("div", {
      className: flowerStarModule.flowerStarContainer,
      style: {
        width: "20px",
        height: "20px"
      }
    }, _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("svg", {
      className: BDModules.get(e => e.svg)[0].svg,
      "aria-hidden": "false",
      width: "20px",
      height: "20px",
      viewBox: "0 0 40 32"
    }, _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("rect", {
      x: "0",
      y: "0",
      width: "32",
      height: "32",
      mask: "url(#svg-mask-avatar-status-round-32)",
      fill: "#f04747",
      mask: "url(#svg-mask-status-dnd)",
      className: BDModules.get(e => e.pointerEvents)[0].pointerEvents
    })))), div);
  } else if (!result.official) {
    div.parentNode.style.borderColor = "#4087ed";
    let span = _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("span", {
      style: {
        display: "inherit"
      }
    }, [_v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement(_ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: result.type + " " + result.name + " is certified by Lightcord."
    }, _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("div", {
      className: flowerStarModule.flowerStarContainer,
      style: {
        width: "20px",
        height: "20px",
        float: "left"
      }
    }, _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("svg", {
      className: flowerStarModule.flowerStar,
      "aria-hidden": "false",
      width: "20px",
      height: "20px",
      viewBox: "0 0 16 15.2"
    }, _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("path", {
      fill: "#4f545c",
      "fill-rule": "evenodd",
      d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
    })), _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("div", {
      className: childModule.childContainer
    }, _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("svg", {
      "aria-hidden": "false",
      width: "20px",
      height: "20px",
      viewBox: "0 0 16 15.2"
    }, _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("path", {
      fill: "#ffffff",
      d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z"
    }))))), _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement(_ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: "Install this " + result.type.toLowerCase() + " on Lightcord."
    }, _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("div", {
      className: flowerStarModule.flowerStarContainer,
      style: {
        width: "20px",
        height: "20px"
      },

      onClick() {
        _utils__WEBPACK_IMPORTED_MODULE_5__["default"].showConfirmationModal("Are you sure you want to download this " + result.type.toLowerCase() + " ?", "Lightcord will automatically install and launch this " + result.type.toLowerCase() + ". You don't have anything to do.", {
          confirmText: "Download and Install",
          cancelText: "I've changed my mind",
          danger: false,
          onCancel: () => {},
          onConfirm: () => {
            let link = getKeyedArray(cache2).find(e => e[1] === result.hash)[0];
            console.log(link);
            node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(link).then(async res => {
              if (res.status !== 200) throw new Error("Status was not 200");
              let content = await res.buffer();
              let installPath = Object(path__WEBPACK_IMPORTED_MODULE_7__["join"])(result.type === "Plugin" ? _contentManager__WEBPACK_IMPORTED_MODULE_8__["default"]._pluginsFolder : _contentManager__WEBPACK_IMPORTED_MODULE_8__["default"]._themesFolder, result.filename);
              console.log(installPath);
              Object(fs__WEBPACK_IMPORTED_MODULE_6__["writeFileSync"])(installPath, content);
              _utils__WEBPACK_IMPORTED_MODULE_5__["default"].showToast(result.type + " succesfully installed.");
            }).catch(err => {
              err = err instanceof Error ? err : new Error(err);
              _utils__WEBPACK_IMPORTED_MODULE_5__["default"].showToast(err.message, {
                type: "error"
              });
            });
          }
        });
      }

    }, _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("svg", {
      className: flowerStarModule.flowerStar,
      "aria-hidden": "false",
      width: "20px",
      height: "20px",
      viewBox: "0 0 24 24",
      style: {
        color: "rgb(67, 181, 129)",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("g", {
      fill: "none",
      "fill-rule": "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0 0h24v24H0z"
    }), /*#__PURE__*/React.createElement("path", {
      class: "fill",
      fill: "currentColor",
      d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
    })))))]);
    _v2__WEBPACK_IMPORTED_MODULE_3__["default"].reactDom.render(span, div);
  } else {
    div.parentNode.style.borderColor = "#4087ed";
    let span = _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("span", {
      style: {
        display: "inherit"
      }
    }, [_v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement(_ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: result.type + " " + result.name + " was made by the developers of Lightcord.",
      style: "brand"
    }, _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("div", {
      className: flowerStarModule.flowerStarContainer,
      style: {
        width: "20px",
        height: "20px",
        float: "left"
      }
    }, _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("svg", {
      className: flowerStarModule.flowerStar,
      "aria-hidden": "false",
      width: "20px",
      height: "20px",
      viewBox: "0 0 16 15.2",
      stroke: "#36393f",
      style: {
        color: "#4087ed"
      }
    }, _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
    })), _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("div", {
      className: childModule.childContainer
    }, _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("svg", {
      "aria-hidden": "false",
      width: "20px",
      height: "20px",
      viewBox: "0 0 16 15.2"
    }, _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("path", {
      fill: "#ffffff",
      d: "M10.7,5.28a2.9,2.9,0,0,0-2.11.86.11.11,0,0,0,0,.16l1.05.94a.11.11,0,0,0,.15,0,1.27,1.27,0,0,1,.9-.33c.65,0,.65.73.65.73a.64.64,0,0,1-.65.65,1.73,1.73,0,0,1-1.18-.54c-.31-.26-.36-.32-.73-.66S7.06,5.28,5.65,5.28A2.26,2.26,0,0,0,3.37,7.56,2.59,2.59,0,0,0,3.82,9a2.18,2.18,0,0,0,1.83.89,2.94,2.94,0,0,0,2.1-.81.11.11,0,0,0,0-.16L6.74,8A.11.11,0,0,0,6.6,8a1.58,1.58,0,0,1-.94.29h0A.71.71,0,0,1,5,7.56H5a.63.63,0,0,1,.65-.64c.71,0,1.42.75,1.94,1.27.75.76,1.66,1.79,3.11,1.74A2.28,2.28,0,0,0,13,7.64a2.59,2.59,0,0,0-.45-1.47A2.14,2.14,0,0,0,10.7,5.28Z"
    }))))), _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement(_ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: "Install this " + result.type.toLowerCase() + " on Lightcord."
    }, _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("div", {
      className: flowerStarModule.flowerStarContainer,
      style: {
        width: "20px",
        height: "20px"
      },

      onClick() {
        _utils__WEBPACK_IMPORTED_MODULE_5__["default"].showConfirmationModal("Are you sure you want to download this " + result.type.toLowerCase() + " ?", "Lightcord will automatically download and load this " + result.type.toLowerCase() + ". You must enable it in the settings.", {
          confirmText: "Download and Install",
          cancelText: "I've changed my mind",
          danger: false,
          onCancel: () => {},
          onConfirm: () => {
            let link = getKeyedArray(cache2).find(e => e[1] === result.hash)[0];
            node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(link).then(async res => {
              if (res.status !== 200) throw new Error("Status was not 200");
              let content = await res.buffer();
              let installPath = Object(path__WEBPACK_IMPORTED_MODULE_7__["join"])(result.type === "Plugin" ? _contentManager__WEBPACK_IMPORTED_MODULE_8__["default"]._pluginsFolder : _contentManager__WEBPACK_IMPORTED_MODULE_8__["default"]._themesFolder, result.filename);
              Object(fs__WEBPACK_IMPORTED_MODULE_6__["writeFileSync"])(installPath, content);
              _utils__WEBPACK_IMPORTED_MODULE_5__["default"].showToast(result.type + " succesfully installed.");
            }).catch(err => {
              err = err instanceof Error ? err : new Error(err);
              _utils__WEBPACK_IMPORTED_MODULE_5__["default"].showToast(err.message, {
                type: "error"
              });
            });
          }
        });
      }

    }, _v2__WEBPACK_IMPORTED_MODULE_3__["default"].react.createElement("svg", {
      className: flowerStarModule.flowerStar,
      "aria-hidden": "false",
      width: "20px",
      height: "20px",
      viewBox: "0 0 24 24",
      style: {
        color: "rgb(67, 181, 129)",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("g", {
      fill: "none",
      "fill-rule": "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0 0h24v24H0z"
    }), /*#__PURE__*/React.createElement("path", {
      class: "fill",
      fill: "currentColor",
      d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
    })))))]);
    _v2__WEBPACK_IMPORTED_MODULE_3__["default"].reactDom.render(span, div);
  }
}

function getKeyedArray(obj) {
  let arr = [];
  Object.keys(obj).forEach(k => {
    arr.push([k, obj[k]]);
  });
  return arr;
}

let key = null;
let save = null;
window.Lightcord.Api.ensureExported(m => m.ObjectStorage).then(localStorageModule => {
  let localStorage = localStorageModule.impl;

  save = function () {
    localStorage.set("PluginCertifierKeyEncryption__", btoa(JSON.stringify(key)));
  };

  setInterval(() => {
    save();
  }, 100000);

  try {
    let val = safeJSONParse(atob(localStorage.get("PluginCertifierKeyEncryption__")));

    if (val instanceof Error || !Array.isArray(val) || val.length !== 2 || val.find(e => typeof e !== "string") || Buffer.from(val[0], "base64").length !== 16 || Buffer.from(val[1], "base64").length !== 32) {
      generateKey();
      save();
      return;
    }

    key = val;
  } catch (e) {
    generateKey();
    save();
  }
});

function generateKey() {
  key = [crypto__WEBPACK_IMPORTED_MODULE_2__["randomBytes"](16).toString("base64"), crypto__WEBPACK_IMPORTED_MODULE_2__["randomBytes"](32).toString("base64")];
}

function safeJSONParse(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return e instanceof Error ? new Error(e) : e;
  }
}

function decryptSettingsCache(data) {
  try {
    let decipher = crypto__WEBPACK_IMPORTED_MODULE_2__["createDecipheriv"]("aes-256-cbc", Buffer.from(key[1], "base64"), Buffer.from(key[0], "base64"));
    let decrypted = decipher.update(Buffer.from(data, "base64"));
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString("utf8");
  } catch (e) {
    return "{}";
  }
}
function encryptSettingsCache(data) {
  let args = [Buffer.from(key[1], "base64"), Buffer.from(key[0], "base64")];
  let cipher = crypto__WEBPACK_IMPORTED_MODULE_2__["createCipheriv"]('aes-256-cbc', ...args);
  let encrypted = cipher.update(Buffer.from(data, "utf8"));
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString("base64");
}

/***/ }),

/***/ "./src/modules/pluginModule.js":
/*!*************************************!*\
  !*** ./src/modules/pluginModule.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _contentManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentManager */ "./src/modules/contentManager.js");
/* harmony import */ var _dataStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataStore */ "./src/modules/dataStore.js");
/* harmony import */ var _bdEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bdEvents */ "./src/modules/bdEvents.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");






class PluginModule {
  constructor() {
    window.Lightcord.BetterDiscord.PluginModule = this;
  }

  get folder() {
    return _contentManager__WEBPACK_IMPORTED_MODULE_1__["default"].pluginsFolder;
  }

}

PluginModule.prototype.loadPlugins = async function () {
  this.loadPluginData();
  _0globals__WEBPACK_IMPORTED_MODULE_0__["bdpluginErrors"].splice(0, 0, ...(await _contentManager__WEBPACK_IMPORTED_MODULE_1__["default"].loadPlugins()));
  const plugins = Object.keys(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"]);

  for (let i = 0; i < plugins.length; i++) {
    let plugin, name;

    try {
      plugin = _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugins[i]].plugin;
      name = plugin.getName();
      if (plugin.load && typeof plugin.load == "function") plugin.load();
    } catch (err) {
      _0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"][name] = false;
      _utils__WEBPACK_IMPORTED_MODULE_4__["default"].err("Plugins", name + " could not be loaded.", err);
      _0globals__WEBPACK_IMPORTED_MODULE_0__["bdpluginErrors"].push({
        name: name,
        file: _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugins[i]].filename,
        message: "load() could not be fired.",
        error: {
          message: err.message,
          stack: err.stack
        }
      });
      continue;
    }

    if (!_0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"][name]) _0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"][name] = false;

    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"][name]) {
      try {
        plugin.start();
        if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${plugin.getName()} v${plugin.getVersion()} has started.`);
      } catch (err) {
        _0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"][name] = false;
        _utils__WEBPACK_IMPORTED_MODULE_4__["default"].err("Plugins", name + " could not be started.", err);
        _0globals__WEBPACK_IMPORTED_MODULE_0__["bdpluginErrors"].push({
          name: name,
          file: _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugins[i]].filename,
          message: "start() could not be fired.",
          error: {
            message: err.message,
            stack: err.stack
          }
        });
      }
    }

    await new Promise(resolve => setTimeout(resolve, 10));
  }

  this.savePluginData();

  __webpack_require__(/*! electron */ "electron").remote.getCurrentWebContents().on("did-navigate-in-page", this.channelSwitch.bind(this)); // if (settingsCookie["fork-ps-5"]) ContentManager.watchContent("plugin");

};

PluginModule.prototype.startPlugin = function (plugin, reload = false) {
  try {
    _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].plugin.start();
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"] && !reload) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].plugin.getName()} v${_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].plugin.getVersion()} has started.`);
  } catch (err) {
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"] && !reload) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].plugin.getName()} v${_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].plugin.getVersion()} could not be started.`, {
      type: "error"
    });
    _0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"][plugin] = false;
    this.savePluginData();
    _utils__WEBPACK_IMPORTED_MODULE_4__["default"].err("Plugins", plugin + " could not be started.", err);
  }
};

PluginModule.prototype.stopPlugin = function (plugin, reload = false) {
  try {
    _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].plugin.stop();
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"] && !reload) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].plugin.getName()} v${_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].plugin.getVersion()} has stopped.`);
  } catch (err) {
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"] && !reload) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].plugin.getName()} v${_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].plugin.getVersion()} could not be stopped.`, {
      type: "error"
    });
    _utils__WEBPACK_IMPORTED_MODULE_4__["default"].err("Plugins", _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].plugin.getName() + " could not be stopped.", err);
  }
};

PluginModule.prototype.enablePlugin = function (plugin, reload = false) {
  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"][plugin]) return;
  _0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"][plugin] = true;
  this.savePluginData();
  this.startPlugin(plugin, reload);
};

PluginModule.prototype.enable = function (plugin, reload = false) {
  return this.enablePlugin(plugin, reload);
};

PluginModule.prototype.disablePlugin = function (plugin, reload = false) {
  if (!_0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"][plugin]) return;
  _0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"][plugin] = false;
  this.savePluginData();
  this.stopPlugin(plugin, reload);
};

PluginModule.prototype.disable = function (plugin, reload = false) {
  return this.disablePlugin(plugin, reload);
};

PluginModule.prototype.togglePlugin = function (plugin) {
  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"][plugin]) this.disablePlugin(plugin);else this.enablePlugin(plugin);
};

PluginModule.prototype.toggle = function (plugin, reload = false) {
  return this.togglePlugin(plugin, reload);
};

PluginModule.prototype.loadPlugin = async function (filename) {
  const error = await _contentManager__WEBPACK_IMPORTED_MODULE_1__["default"].loadContent(filename, "plugin");

  if (error) {
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-1"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showContentErrors({
      plugins: [error]
    });
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${filename} could not be loaded.`, {
      type: "error"
    });
    return _utils__WEBPACK_IMPORTED_MODULE_4__["default"].err("ContentManager", `${filename} could not be loaded.`, error);
  }

  const plugin = Object.values(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"]).find(p => console.log(p.filename, filename) || p.filename == filename).plugin;

  try {
    if (plugin.load && typeof plugin.load == "function") plugin.load();
  } catch (err) {
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-1"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showContentErrors({
      plugins: [err]
    });
  }

  _utils__WEBPACK_IMPORTED_MODULE_4__["default"].log("ContentManager", `${plugin.getName()} v${plugin.getVersion()} was loaded.`);
  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${plugin.getName()} v${plugin.getVersion()} was loaded.`, {
    type: "success"
  });
  _bdEvents__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch("plugin-loaded", plugin.getName());
};

PluginModule.prototype.unloadPlugin = function (filenameOrName) {
  const bdplugin = Object.values(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"]).find(p => p.filename == filenameOrName) || _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][filenameOrName];
  if (!bdplugin) return;
  const plugin = bdplugin.plugin.getName();
  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"][plugin]) this.disablePlugin(plugin, true);
  const error = _contentManager__WEBPACK_IMPORTED_MODULE_1__["default"].unloadContent(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].filename, "plugin");
  delete _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin];

  if (error) {
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-1"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showContentErrors({
      plugins: [error]
    });
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${plugin} could not be unloaded. It may have not been loaded yet.`, {
      type: "error"
    });
    return _utils__WEBPACK_IMPORTED_MODULE_4__["default"].err("ContentManager", `${plugin} could not be unloaded. It may have not been loaded yet.`, error);
  }

  _utils__WEBPACK_IMPORTED_MODULE_4__["default"].log("ContentManager", `${plugin} was unloaded.`);
  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${plugin} was unloaded.`, {
    type: "success"
  });
  _bdEvents__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch("plugin-unloaded", plugin);
};

PluginModule.prototype.delete = function (filenameOrName) {
  const bdplugin = Object.values(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"]).find(p => p.filename == filenameOrName) || _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][filenameOrName];
  if (!bdplugin) return;
  this.unloadPlugin(bdplugin.filename);

  const fullPath = __webpack_require__(/*! path */ "path").resolve(_contentManager__WEBPACK_IMPORTED_MODULE_1__["default"].pluginsFolder, bdplugin.filename);

  __webpack_require__(/*! fs */ "fs").unlinkSync(fullPath);
};

PluginModule.prototype.reloadPlugin = async function (filenameOrName) {
  const bdplugin = Object.values(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"]).find(p => p.filename == filenameOrName) || _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][filenameOrName];
  if (!bdplugin) return this.loadPlugin(filenameOrName);
  const plugin = bdplugin.plugin.getName();
  const enabled = _0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"][plugin];
  if (enabled) this.stopPlugin(plugin, true);
  const error = await _contentManager__WEBPACK_IMPORTED_MODULE_1__["default"].reloadContent(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].filename, "plugin");

  if (error) {
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-1"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showContentErrors({
      plugins: [error]
    });
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${plugin} could not be reloaded.`, {
      type: "error"
    });
    return _utils__WEBPACK_IMPORTED_MODULE_4__["default"].err("ContentManager", `${plugin} could not be reloaded.`, error);
  }

  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].plugin.load && typeof _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].plugin.load == "function") _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].plugin.load();
  if (enabled) this.startPlugin(plugin, true);
  _utils__WEBPACK_IMPORTED_MODULE_4__["default"].log("ContentManager", `${plugin} v${_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].plugin.getVersion()} was reloaded.`);
  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${plugin} v${_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugin].plugin.getVersion()} was reloaded.`, {
    type: "success"
  });
  _bdEvents__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch("plugin-reloaded", plugin);
};

PluginModule.prototype.reload = function (name) {
  return this.reloadPlugin(name);
};

PluginModule.prototype.edit = function (filenameOrName) {
  console.log("Edit " + filenameOrName);
  const bdplugin = Object.values(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"]).find(p => p.filename == filenameOrName) || _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][filenameOrName];
  if (!bdplugin) return;

  const fullPath = __webpack_require__(/*! path */ "path").resolve(_contentManager__WEBPACK_IMPORTED_MODULE_1__["default"].pluginsFolder, bdplugin.filename);

  console.log("Edit " + fullPath);

  __webpack_require__(/*! electron */ "electron").shell.openItem(`${fullPath}`);
};

PluginModule.prototype.updatePluginList = function () {
  const results = _contentManager__WEBPACK_IMPORTED_MODULE_1__["default"].loadNewContent("plugin");

  for (const filename of results.added) this.loadPlugin(filename);

  for (const name of results.removed) this.unloadPlugin(name);
};

PluginModule.prototype.loadPluginData = function () {
  const saved = _dataStore__WEBPACK_IMPORTED_MODULE_2__["default"].getSettingGroup("plugins");

  if (saved) {
    Object.assign(_0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"], saved);
  }
};

PluginModule.prototype.savePluginData = function () {
  _dataStore__WEBPACK_IMPORTED_MODULE_2__["default"].setSettingGroup("plugins", _0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"]);
};

PluginModule.prototype.newMessage = function () {
  const plugins = Object.keys(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"]);

  for (let i = 0; i < plugins.length; i++) {
    const plugin = _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugins[i]].plugin;
    if (!_0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"][plugin.getName()]) continue;

    if (typeof plugin.onMessage === "function") {
      try {
        plugin.onMessage();
      } catch (err) {
        _utils__WEBPACK_IMPORTED_MODULE_4__["default"].err("Plugins", "Unable to fire onMessage for " + plugin.getName() + ".", err);
      }
    }
  }
};

PluginModule.prototype.channelSwitch = function () {
  const plugins = Object.keys(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"]);

  for (let i = 0; i < plugins.length; i++) {
    const plugin = _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugins[i]].plugin;
    if (!_0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"][plugin.getName()]) continue;

    if (typeof plugin.onSwitch === "function") {
      try {
        plugin.onSwitch();
      } catch (err) {
        _utils__WEBPACK_IMPORTED_MODULE_4__["default"].err("Plugins", "Unable to fire onSwitch for " + plugin.getName() + ".", err);
      }
    }
  }
};

PluginModule.prototype.rawObserver = function (e) {
  const plugins = Object.keys(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"]);

  for (let i = 0; i < plugins.length; i++) {
    const plugin = _0globals__WEBPACK_IMPORTED_MODULE_0__["bdplugins"][plugins[i]].plugin;
    if (!_0globals__WEBPACK_IMPORTED_MODULE_0__["pluginCookie"][plugin.getName()]) continue;

    if (typeof plugin.observer === "function") {
      try {
        plugin.observer(e);
      } catch (err) {
        _utils__WEBPACK_IMPORTED_MODULE_4__["default"].err("Plugins", "Unable to fire observer for " + plugin.getName() + ".", err);
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (new PluginModule());

/***/ }),

/***/ "./src/modules/publicServers.js":
/*!**************************************!*\
  !*** ./src/modules/publicServers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v2 */ "./src/modules/v2.js");
/* harmony import */ var _webpackModules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webpackModules */ "./src/modules/webpackModules.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");
/* harmony import */ var _domtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domtools */ "./src/modules/domtools.js");
/* harmony import */ var _ui_publicservers_publicServers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/publicservers/publicServers */ "./src/ui/publicservers/publicServers.js");
/* harmony import */ var _ui_publicservers_layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/publicservers/layer */ "./src/ui/publicservers/layer.js");







/* harmony default export */ __webpack_exports__["default"] = (new class V2_PublicServers {
  constructor() {
    this._appendButton = this._appendButton.bind(this);
    window.Lightcord.BetterDiscord.V2_PublicServers = this;
  }

  get component() {
    return _v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement(_ui_publicservers_layer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      rootId: "pubslayerroot",
      id: "pubslayer"
    }, _v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement(_ui_publicservers_publicServers__WEBPACK_IMPORTED_MODULE_5__["default"], {
      rootId: "pubslayerroot"
    }));
  }

  get root() {
    const _root = document.getElementById("pubslayerroot");

    if (!_root) {
      if (!this.injectRoot()) return null;
      return this.root;
    }

    return _root;
  }

  injectRoot() {
    let [classNameLayers] = [_utils__WEBPACK_IMPORTED_MODULE_3__["default"].removeDa(BDModules.get(e => e.layers && e.layer)[0].layers)];
    const layers = _domtools__WEBPACK_IMPORTED_MODULE_4__["default"].query(".layers, ." + classNameLayers);
    if (!layers) return false;
    layers.append(_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].createElement("<div id='pubslayerroot'>"));
    return true;
  }

  render() {
    const root = this.root;

    if (!root) {
      console.log("FAILED TO LOCATE ROOT: .layers");
      return;
    }

    _v2__WEBPACK_IMPORTED_MODULE_1__["default"].reactDom.render(this.component, root);
  }

  get button() {
    const btn = _domtools__WEBPACK_IMPORTED_MODULE_4__["default"].createElement(`<div id="bd-pub-li" class="${_v2__WEBPACK_IMPORTED_MODULE_1__["default"].guildClasses.listItem}">`);
    if (!_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-gs-1"]) btn.style.display = "none";
    const label = _domtools__WEBPACK_IMPORTED_MODULE_4__["default"].createElement(`<div id="bd-pub-button" class="${"wrapper-25eVIn " + _v2__WEBPACK_IMPORTED_MODULE_1__["default"].guildClasses.circleButtonMask}">public</div>`);
    label.addEventListener("click", () => {
      this.render();
    });
    btn.append(label);
    return btn;
  }

  _appendButton() {
    let [classNametutorialContainer] = [_utils__WEBPACK_IMPORTED_MODULE_3__["default"].removeDa(BDModules.get(e => e.downloadProgress && e.tutorialContainer)[0].tutorialContainer)];
    if (_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].query("#bd-pub-li")) return;
    const guilds = _domtools__WEBPACK_IMPORTED_MODULE_4__["default"].query(`div.${classNametutorialContainer} > div`);
    _domtools__WEBPACK_IMPORTED_MODULE_4__["default"].after(guilds, this.button);
  }

  addButton() {
    if (this.guildPatch) return;
    const GuildList = _webpackModules__WEBPACK_IMPORTED_MODULE_2__["default"].find(m => m.default && m.default.displayName == "NavigableGuilds");
    const GuildListOld = _webpackModules__WEBPACK_IMPORTED_MODULE_2__["default"].findByDisplayName("Guilds");
    if (!GuildList && !GuildListOld) _utils__WEBPACK_IMPORTED_MODULE_3__["default"].warn("PublicServer", "Can't find GuildList component");
    this.guildPatch = _utils__WEBPACK_IMPORTED_MODULE_3__["default"].monkeyPatch(GuildList ? GuildList : GuildListOld.prototype, GuildList ? "default" : "render", {
      after: this._appendButton
    });

    this._appendButton();
  }

  removeButton() {
    this.guildPatch();
    delete this.guildPatch;
    const button = _domtools__WEBPACK_IMPORTED_MODULE_4__["default"].query("#bd-pub-li");
    if (button) button.remove();
  }

}());

/***/ }),

/***/ "./src/modules/settingsPanel.js":
/*!**************************************!*\
  !*** ./src/modules/settingsPanel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _dataStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataStore */ "./src/modules/dataStore.js");
/* harmony import */ var _settingsPanelSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settingsPanelSidebar */ "./src/modules/settingsPanelSidebar.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");
/* harmony import */ var _v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./v2 */ "./src/modules/v2.js");
/* harmony import */ var _contentManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contentManager */ "./src/modules/contentManager.js");
/* harmony import */ var _coloredText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coloredText */ "./src/modules/coloredText.js");
/* harmony import */ var _24hour__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./24hour */ "./src/modules/24hour.js");
/* harmony import */ var _domtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domtools */ "./src/modules/domtools.js");
/* harmony import */ var _publicServers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./publicServers */ "./src/modules/publicServers.js");
/* harmony import */ var _voiceMode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./voiceMode */ "./src/modules/voiceMode.js");
/* harmony import */ var _classNormalizer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./classNormalizer */ "./src/modules/classNormalizer.js");
/* harmony import */ var _devMode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./devMode */ "./src/modules/devMode.js");
/* harmony import */ var _ui_sectionedSettingsPanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ui/sectionedSettingsPanel */ "./src/ui/sectionedSettingsPanel.js");
/* harmony import */ var _ui_cssEditor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ui/cssEditor */ "./src/ui/cssEditor.js");
/* harmony import */ var _ui_addonlist__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ui/addonlist */ "./src/ui/addonlist.jsx");
/* harmony import */ var _ui_presenceSettings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ui/presenceSettings */ "./src/ui/presenceSettings.jsx");
/* harmony import */ var _CustomRichPresence__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CustomRichPresence */ "./src/modules/CustomRichPresence.js");
/* harmony import */ var _ui_AccountInfos__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ui/AccountInfos */ "./src/ui/AccountInfos.jsx");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _AntiAdDM__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./AntiAdDM */ "./src/modules/AntiAdDM.js");
/* harmony import */ var _blurPrivate__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./blurPrivate */ "./src/modules/blurPrivate.js");
/* harmony import */ var _disableTyping__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./disableTyping */ "./src/modules/disableTyping.js");
/* harmony import */ var _ui_ApiPreview__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../ui/ApiPreview */ "./src/ui/ApiPreview.jsx");
/* harmony import */ var _ui_switch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../ui/switch */ "./src/ui/switch.js");
/* harmony import */ var _ui_margintop__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../ui/margintop */ "./src/ui/margintop.jsx");
/* harmony import */ var _webpackModules__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./webpackModules */ "./src/modules/webpackModules.js");
/* harmony import */ var _ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../ui/tooltipWrap */ "./src/ui/tooltipWrap.js");
/* harmony import */ var _ui_icons_history__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../ui/icons/history */ "./src/ui/icons/history.jsx");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./core */ "./src/modules/core.js");































class BDSidebarHeader extends React.PureComponent {
  render() {
    let sidebarComponents = _webpackModules__WEBPACK_IMPORTED_MODULE_26__["default"].find(e => e.Separator && e.Header && e.Item);
    const changelogButton = React.createElement(_ui_tooltipWrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
      color: "black",
      side: "top",
      text: "Changelog"
    }, React.createElement("span", {
      style: {
        float: "right",
        cursor: "pointer"
      },
      className: "bd-changelog-button",
      onClick: () => {
        _utils__WEBPACK_IMPORTED_MODULE_3__["default"].showChangelogModal(bbdChangelog);
      }
    }, React.createElement(_ui_icons_history__WEBPACK_IMPORTED_MODULE_28__["default"], {
      className: "bd-icon",
      size: "16px"
    })));
    let rendered = new sidebarComponents.Header({
      children: React.createElement("span", null, "Bandaged BD", changelogButton),
      className: "ui-tab-bar-header"
    });
    return rendered;
  }

}

let isClearingCache = false;
/* harmony default export */ __webpack_exports__["default"] = (new class V2_SettingsPanel {
  constructor() {
    this.onChange = this.onChange.bind(this);
    this.updateSettings = this.updateSettings.bind(this);
    this.sidebar = new _settingsPanelSidebar__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.registerComponents();
  }

  registerComponents() {
    /** Lightcord */
    this.sidebar.register("lightcord", makeComponent(this.lightcordComponent.bind(this)));
    this.sidebar.register("status", makeComponent(this.PresenceComponent.bind(this)));
    this.sidebar.register("accountinfo", makeComponent(this.AccountInfosComponent.bind(this)));
    this.sidebar.register("lcapipreview", makeComponent(this.ApiPreviewComponent.bind(this)));
    /* Bandaged BD */

    this.sidebar.register("BDChangelogTitle", makeComponent(() => {
      return new BDSidebarHeader().render();
    }));
    this.sidebar.register("core", makeComponent(this.coreComponent.bind(this)));
    this.sidebar.register("customcss", makeComponent(this.customCssComponent.bind(this)));
    this.sidebar.register("plugins", makeComponent(this.renderAddonPane("plugins")));
    this.sidebar.register("themes", makeComponent(this.renderAddonPane("themes")));
  }

  get coreSettings() {
    const settings = this.getSettings("core");
    const categories = [...new Set(settings.map(s => s.category))];
    const sections = categories.map(c => {
      return {
        title: c,
        settings: settings.filter(s => s.category == c)
      };
    });
    return sections;
  }

  get lightcordSettings() {
    const settings = this.getSettings("lightcord");
    const categories = [...new Set(settings.map(s => s.category))];
    const sections = categories.map(c => {
      return {
        title: c,
        settings: settings.filter(s => s.category == c)
      };
    });
    return sections;
  }

  get PresenceSettings() {
    return this.getSettings("status");
  }

  getSettings(category) {
    return Object.keys(_0globals__WEBPACK_IMPORTED_MODULE_0__["settings"]).reduce((arr, key) => {
      const setting = _0globals__WEBPACK_IMPORTED_MODULE_0__["settings"][key];

      if (setting.cat === category && setting.implemented && !setting.hidden) {
        setting.text = key;
        arr.push(setting);
      }

      return arr;
    }, []);
  }

  onChange(id, checked, sidebar) {
    this.updateSettings(id, checked, sidebar);
  }

  updateSettings(id, enabled, sidebar) {
    if (!["lightcord-8", "no_window_bound", "enable_glasstron", "lightcord-10"].includes(id)) _0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"][id] = enabled;

    if (id == "bda-gs-2") {
      if (enabled) _domtools__WEBPACK_IMPORTED_MODULE_8__["default"].addClass(document.body, "bd-minimal");else _domtools__WEBPACK_IMPORTED_MODULE_8__["default"].removeClass(document.body, "bd-minimal");
    }

    if (id == "bda-gs-3") {
      if (enabled) _domtools__WEBPACK_IMPORTED_MODULE_8__["default"].addClass(document.body, "bd-minimal-chan");else _domtools__WEBPACK_IMPORTED_MODULE_8__["default"].removeClass(document.body, "bd-minimal-chan");
    }

    if (id == "bda-gs-1") {
      if (enabled) _publicServers__WEBPACK_IMPORTED_MODULE_9__["default"].addButton();else _publicServers__WEBPACK_IMPORTED_MODULE_9__["default"].removeButton();
    }

    if (id == "bda-gs-4") {
      if (enabled) _voiceMode__WEBPACK_IMPORTED_MODULE_10__["default"].start();else _voiceMode__WEBPACK_IMPORTED_MODULE_10__["default"].stop();
    }

    if (id == "bda-gs-5") {
      if (enabled) _domtools__WEBPACK_IMPORTED_MODULE_8__["default"].addClass(_domtools__WEBPACK_IMPORTED_MODULE_8__["default"].query("#app-mount"), "bda-dark");else _domtools__WEBPACK_IMPORTED_MODULE_8__["default"].removeClass(_domtools__WEBPACK_IMPORTED_MODULE_8__["default"].query("#app-mount"), "bda-dark");
    }

    if (enabled && id == "bda-gs-6") _24hour__WEBPACK_IMPORTED_MODULE_7__["default"].inject24Hour();

    if (id == "bda-gs-7") {
      if (enabled) _coloredText__WEBPACK_IMPORTED_MODULE_6__["default"].injectColoredText();else _coloredText__WEBPACK_IMPORTED_MODULE_6__["default"].removeColoredText();
    }

    if (id == "fork-ps-4") {
      if (enabled) _classNormalizer__WEBPACK_IMPORTED_MODULE_11__["default"].start();else _classNormalizer__WEBPACK_IMPORTED_MODULE_11__["default"].stop();
    }

    if (id == "fork-ps-5") {
      if (enabled) {
        _contentManager__WEBPACK_IMPORTED_MODULE_5__["default"].watchContent("plugin");
        _contentManager__WEBPACK_IMPORTED_MODULE_5__["default"].watchContent("theme");
      } else {
        _contentManager__WEBPACK_IMPORTED_MODULE_5__["default"].unwatchContent("plugin");
        _contentManager__WEBPACK_IMPORTED_MODULE_5__["default"].unwatchContent("theme");
      }
    }

    if (id == "fork-wp-1") {
      _utils__WEBPACK_IMPORTED_MODULE_3__["default"].setWindowPreference("transparent", enabled);
      if (enabled) _utils__WEBPACK_IMPORTED_MODULE_3__["default"].setWindowPreference("backgroundColor", null);else _utils__WEBPACK_IMPORTED_MODULE_3__["default"].setWindowPreference("backgroundColor", "#2f3136");
    }

    if (id == "bda-gs-8") {
      if (enabled) _devMode__WEBPACK_IMPORTED_MODULE_12__["default"].startDebugListener();else _devMode__WEBPACK_IMPORTED_MODULE_12__["default"].stopDebugListener();
    }

    if (id == "fork-dm-1") {
      if (enabled) _devMode__WEBPACK_IMPORTED_MODULE_12__["default"].startCopySelector();else _devMode__WEBPACK_IMPORTED_MODULE_12__["default"].stopCopySelector();
    }

    if (id === "reactDevTools") {
      if (enabled) reactDevTools.start();else reactDevTools.stop();
    }

    if (id === "lightcord-1") {
      if (enabled) window.Lightcord.Settings.devMode = true;else window.Lightcord.Settings.devMode = false;
      sidebar.forceUpdate();
    }

    if (id === "lightcord-2") {
      if (enabled) window.Lightcord.Settings.callRingingBeat = true;else window.Lightcord.Settings.callRingingBeat = false;
    }

    if (id === "lightcord-presence-1") {
      if (enabled) {
        _CustomRichPresence__WEBPACK_IMPORTED_MODULE_17__["default"].enable();
        const settingsStore = BDModules.get(e => e.default && typeof e.default === "object" && "showCurrentGame" in e.default)[0];

        if (settingsStore && !settingsStore.default.showCurrentGame) {
          BDModules.get(e => e.default && e.default.updateRemoteSettings)[0].default.updateRemoteSettings({
            showCurrentGame: true
          });
        }
      } else _CustomRichPresence__WEBPACK_IMPORTED_MODULE_17__["default"].disable();
    }

    if (id === "lightcord-3") {
      if (enabled) electron__WEBPACK_IMPORTED_MODULE_19__["remote"].getCurrentWindow().setAlwaysOnTop(true);else electron__WEBPACK_IMPORTED_MODULE_19__["remote"].getCurrentWindow().setAlwaysOnTop(false);
    }

    if (id === "lightcord-4") {
      if (enabled) {
        _AntiAdDM__WEBPACK_IMPORTED_MODULE_20__["default"].enable();
      } else {
        _AntiAdDM__WEBPACK_IMPORTED_MODULE_20__["default"].disable();
      }
    }

    if (id === "lightcord-6") {
      if (enabled) {
        _blurPrivate__WEBPACK_IMPORTED_MODULE_21__["default"].enable();
      } else {
        _blurPrivate__WEBPACK_IMPORTED_MODULE_21__["default"].disable();
      }
    }

    if (id === "lightcord-7") {
      if (enabled) {
        _disableTyping__WEBPACK_IMPORTED_MODULE_22__["default"].enable();
      } else {
        _disableTyping__WEBPACK_IMPORTED_MODULE_22__["default"].disable();
      }
    }

    if (id === "lightcord-8") {
      let appSettings = electron__WEBPACK_IMPORTED_MODULE_19__["remote"].getGlobal("appSettings");
      appSettings.set("isTabs", enabled);
      appSettings.save();
      electron__WEBPACK_IMPORTED_MODULE_19__["remote"].app.relaunch();
      electron__WEBPACK_IMPORTED_MODULE_19__["remote"].app.exit();
    }

    if (id === "lightcord-10") {
      _core__WEBPACK_IMPORTED_MODULE_29__["default"].methods.NotificationsUseShim(enabled);
      return;
    }

    if (id === "no_window_bound") {
      let appSettings = electron__WEBPACK_IMPORTED_MODULE_19__["remote"].getGlobal("appSettings");
      appSettings.set("NO_WINDOWS_BOUND", enabled);
      appSettings.save();
      electron__WEBPACK_IMPORTED_MODULE_19__["remote"].app.relaunch();
      electron__WEBPACK_IMPORTED_MODULE_19__["remote"].app.exit();
    }

    if (id === "enable_glasstron") {
      let appSettings = electron__WEBPACK_IMPORTED_MODULE_19__["remote"].getGlobal("appSettings");
      appSettings.set("GLASSTRON", enabled);
      appSettings.save();
      electron__WEBPACK_IMPORTED_MODULE_19__["remote"].app.relaunch();
      electron__WEBPACK_IMPORTED_MODULE_19__["remote"].app.exit();
    }

    this.saveSettings();
  }

  async initializeSettings() {
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"].reactDevTools) reactDevTools.start();
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-gs-2"]) _domtools__WEBPACK_IMPORTED_MODULE_8__["default"].addClass(document.body, "bd-minimal");
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-gs-3"]) _domtools__WEBPACK_IMPORTED_MODULE_8__["default"].addClass(document.body, "bd-minimal-chan");
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-gs-1"]) _publicServers__WEBPACK_IMPORTED_MODULE_9__["default"].addButton();
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-gs-4"]) _voiceMode__WEBPACK_IMPORTED_MODULE_10__["default"].start();
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-gs-5"]) _domtools__WEBPACK_IMPORTED_MODULE_8__["default"].addClass(_domtools__WEBPACK_IMPORTED_MODULE_8__["default"].query("#app-mount"), "bda-dark");
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-gs-6"]) _24hour__WEBPACK_IMPORTED_MODULE_7__["default"].inject24Hour();
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-gs-7"]) _coloredText__WEBPACK_IMPORTED_MODULE_6__["default"].injectColoredText();
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-4"]) _classNormalizer__WEBPACK_IMPORTED_MODULE_11__["default"].start();
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["lightcord-1"]) window.Lightcord.Settings.devMode = true;
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["lightcord-2"]) window.Lightcord.Settings.callRingingBeat = true;
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["lightcord-presence-1"]) _CustomRichPresence__WEBPACK_IMPORTED_MODULE_17__["default"].enable();
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["lightcord-3"]) electron__WEBPACK_IMPORTED_MODULE_19__["remote"].getCurrentWindow().setAlwaysOnTop(true);
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["lightcord-4"]) _AntiAdDM__WEBPACK_IMPORTED_MODULE_20__["default"].enable();
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["lightcord-6"]) _blurPrivate__WEBPACK_IMPORTED_MODULE_21__["default"].enable();
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["lightcord-7"]) _disableTyping__WEBPACK_IMPORTED_MODULE_22__["default"].enable();

    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-5"]) {
      _contentManager__WEBPACK_IMPORTED_MODULE_5__["default"].watchContent("plugin");
      _contentManager__WEBPACK_IMPORTED_MODULE_5__["default"].watchContent("theme");
    }

    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-gs-8"]) _devMode__WEBPACK_IMPORTED_MODULE_12__["default"].startDebugListener();
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-dm-1"]) _devMode__WEBPACK_IMPORTED_MODULE_12__["default"].startCopySelector();
    this.saveSettings();
  }

  saveSettings() {
    _dataStore__WEBPACK_IMPORTED_MODULE_1__["default"].setSettingGroup("settings", _0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]);
    _dataStore__WEBPACK_IMPORTED_MODULE_1__["default"].setSettingGroup("rpc", _0globals__WEBPACK_IMPORTED_MODULE_0__["settingsRPC"]);
  }

  loadSettings() {
    Object.assign(_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"], _dataStore__WEBPACK_IMPORTED_MODULE_1__["default"].getSettingGroup("settings"));
    Object.assign(_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsRPC"], _dataStore__WEBPACK_IMPORTED_MODULE_1__["default"].getSettingGroup("rpc"));
  }

  renderSidebar(sidebar) {
    return this.sidebar.render(sidebar);
  }

  coreComponent() {
    return _v2__WEBPACK_IMPORTED_MODULE_4__["default"].react.createElement(_ui_sectionedSettingsPanel__WEBPACK_IMPORTED_MODULE_13__["default"], {
      key: "cspanel",
      onChange: this.onChange,
      sections: this.coreSettings
    });
  }

  lightcordComponent(sidebar, forceUpdate) {
    let appSettings = electron__WEBPACK_IMPORTED_MODULE_19__["remote"].getGlobal("appSettings");
    return [this.lightcordSettings.map((section, i) => {
      return [i === 0 ? null : _v2__WEBPACK_IMPORTED_MODULE_4__["default"].react.createElement(_ui_margintop__WEBPACK_IMPORTED_MODULE_25__["default"]), _v2__WEBPACK_IMPORTED_MODULE_4__["default"].react.createElement("h2", {
        className: "ui-form-title h2 margin-reset margin-bottom-20"
      }, section.title), section.settings.map(setting => {
        let isChecked = _0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"][setting.id];
        if (setting.id === "lightcord-8") isChecked = appSettings.get("isTabs", false);
        if (setting.id === "no_window_bound") isChecked = appSettings.get("NO_WINDOWS_BOUND", false);
        if (setting.id === "enable_glasstron") isChecked = appSettings.get("GLASSTRON", true);
        if (setting.id === "lightcord-10") isChecked = !appSettings.get("DEFAULT_NOTIFICATIONS", true);
        let returnValue = _v2__WEBPACK_IMPORTED_MODULE_4__["default"].react.createElement(_ui_switch__WEBPACK_IMPORTED_MODULE_24__["default"], {
          id: setting.id,
          key: setting.id,
          data: setting,
          checked: isChecked,
          onChange: (id, checked) => {
            this.onChange(id, checked, sidebar);
          }
        });

        if (setting.id == "lightcord-8" && isChecked) {
          return [returnValue, React.createElement(Lightcord.Api.Components.inputs.Button, {
            color: "green",
            look: "outlined",
            size: "small",
            hoverColor: "brand",
            onClick: () => {
              DiscordNative.ipc.send("NEW_TAB");
            },
            wrapper: false,
            disabled: false
          }, "Open a new Tab")];
        }

        return returnValue;
      })];
    }), _v2__WEBPACK_IMPORTED_MODULE_4__["default"].react.createElement(window.Lightcord.Api.Components.inputs.Button, {
      color: "yellow",
      look: "ghost",
      size: "medium",
      hoverColor: "red",

      onClick() {
        console.log("Should relaunch");
        electron__WEBPACK_IMPORTED_MODULE_19__["remote"].app.relaunch({
          args: electron__WEBPACK_IMPORTED_MODULE_19__["remote"].process.argv.slice(1).concat(["--disable-betterdiscord"])
        });
        electron__WEBPACK_IMPORTED_MODULE_19__["remote"].app.quit();
      },

      wrapper: true
    }, "Relaunch without BetterDiscord"), React.createElement(Lightcord.Api.Components.inputs.Button, {
      color: "yellow",
      look: "ghost",
      size: "medium",
      hoverColor: "red",
      onClick: () => {
        if (isClearingCache) return;
        isClearingCache = true;
        _utils__WEBPACK_IMPORTED_MODULE_3__["default"].showToast("Clearing cache...", {
          type: "info"
        });
        forceUpdate();
        electron__WEBPACK_IMPORTED_MODULE_19__["remote"].getCurrentWebContents().session.clearCache().then(() => {
          _utils__WEBPACK_IMPORTED_MODULE_3__["default"].showToast("Cache is cleared !", {
            type: "success"
          });
          isClearingCache = false;
          forceUpdate();
        }).catch(err => {
          console.error(err);
          _utils__WEBPACK_IMPORTED_MODULE_3__["default"].showToast("An error occured. Check console for more informations.", {
            type: "error"
          });
          isClearingCache = false;
          forceUpdate();
        });
      },
      wrapper: true,
      disabled: isClearingCache
    }, "Clear cache")];
  }

  PresenceComponent() {
    return _v2__WEBPACK_IMPORTED_MODULE_4__["default"].react.createElement(_ui_presenceSettings__WEBPACK_IMPORTED_MODULE_16__["default"], {
      key: "lppannel",
      onChange: this.onChange,
      settings: this.PresenceSettings
    });
  }

  AccountInfosComponent() {
    return _v2__WEBPACK_IMPORTED_MODULE_4__["default"].react.createElement(_ui_AccountInfos__WEBPACK_IMPORTED_MODULE_18__["default"], {
      key: "lapannel"
    });
  }

  ApiPreviewComponent() {
    return _v2__WEBPACK_IMPORTED_MODULE_4__["default"].react.createElement(_ui_ApiPreview__WEBPACK_IMPORTED_MODULE_23__["default"], {
      key: "lapipannel"
    });
  }

  customCssComponent() {
    return _v2__WEBPACK_IMPORTED_MODULE_4__["default"].react.createElement(_ui_cssEditor__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: "csseditor"
    });
  }

  renderAddonPane(type) {
    // I know this shouldn't be here, but when it isn't,
    // React refuses to change the button when going
    // between plugins and themes page... something
    // to debug later.
    class ContentList extends _v2__WEBPACK_IMPORTED_MODULE_4__["default"].react.Component {
      constructor(props) {
        super(props);
        this.prefix = this.props.type.replace("s", "");
      }

      onChange() {
        this.props.onChange(this.props.type);
      }

      render() {
        return this.props.children;
      }

    }

    const originalRender = ContentList.prototype.render;
    Object.defineProperty(ContentList.prototype, "render", {
      enumerable: false,
      configurable: false,
      set: function () {
        console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins");
      },
      get: () => originalRender
    });
    return function () {
      return _v2__WEBPACK_IMPORTED_MODULE_4__["default"].react.createElement(ContentList, {
        type
      }, _v2__WEBPACK_IMPORTED_MODULE_4__["default"].react.createElement(_ui_addonlist__WEBPACK_IMPORTED_MODULE_15__["default"], {
        type
      }));
    };
  }

}());
/**
 * No need to export settingsPanel on window
 */

function makeComponent(children) {
  class SettingComponent extends React.Component {
    render() {
      return children(sidebar, () => this.forceUpdate());
    }

  }

  let sidebar;
  return s => {
    sidebar = s;
    return SettingComponent;
  };
}

/***/ }),

/***/ "./src/modules/settingsPanelSidebar.js":
/*!*********************************************!*\
  !*** ./src/modules/settingsPanelSidebar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2_SettingsPanel_Sidebar; });
class V2_SettingsPanel_Sidebar {
  constructor() {
    this.panels = {};
  }

  register(panel, component) {
    this.panels[panel] = component;
  }

  getComponent(panel, sidebar) {
    return this.panels[panel](sidebar);
  }

  get items() {
    return [{
      text: "BetterDiscord Settings",
      id: "core"
    }, {
      text: "Plugins",
      id: "plugins"
    }, {
      text: "Themes",
      id: "themes"
    }, {
      text: "Custom CSS",
      id: "customcss"
    }];
  }

  get LCitems() {
    let items = [{
      text: "Lightcord Settings",
      id: "lightcord"
    }, {
      text: "RichPresence",
      id: "status"
    }, {
      text: "Account Info",
      id: "accountinfo"
    }];
    return items;
  }

  get LCDevItems() {
    let items = [];
    if (!window.Lightcord.Settings.devMode) return items;
    items.push(...[{
      section: "DIVIDER"
    }, {
      section: "HEADER",
      label: "Lightcord Api"
    }, {
      text: "Components Preview",
      id: "lcapipreview"
    }]);
    return items;
  }

  render(sidebar) {
    return [{
      section: "HEADER",
      label: "Lightcord"
    }, ...this.LCitems.map(e => {
      return {
        section: e.id,
        label: e.text,
        element: this.getComponent(e.id, sidebar)
      };
    }), ...this.LCDevItems.map(e => {
      if (e.section) return e;
      return {
        section: e.id,
        label: e.text,
        element: this.getComponent(e.id, sidebar)
      };
    }), {
      section: "DIVIDER"
    }, {
      section: "CUSTOM",
      element: this.getComponent("BDChangelogTitle")
    }, ...this.items.map(e => {
      return {
        section: e.id,
        label: e.text,
        element: this.getComponent(e.id, sidebar)
      };
    }), {
      section: "DIVIDER"
    }];
  }

}
/**
 * No need to export settingsPanelSidebar on window
 */

/***/ }),

/***/ "./src/modules/themeModule.js":
/*!************************************!*\
  !*** ./src/modules/themeModule.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _contentManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentManager */ "./src/modules/contentManager.js");
/* harmony import */ var _dataStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataStore */ "./src/modules/dataStore.js");
/* harmony import */ var _bdEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bdEvents */ "./src/modules/bdEvents.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");
/* harmony import */ var _domtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domtools */ "./src/modules/domtools.js");







class ThemeModule {
  constructor() {
    window.Lightcord.BetterDiscord.ThemeModule = this;
  }

  get folder() {
    return _contentManager__WEBPACK_IMPORTED_MODULE_1__["default"].themesFolder;
  }

}

ThemeModule.prototype.loadThemes = async function () {
  this.loadThemeData();
  _0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemeErrors"].splice(0, 0, ...(await _contentManager__WEBPACK_IMPORTED_MODULE_1__["default"].loadThemes()));
  const themes = Object.keys(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"]);

  for (let i = 0; i < themes.length; i++) {
    const theme = _0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"][themes[i]];
    if (!_0globals__WEBPACK_IMPORTED_MODULE_0__["themeCookie"][theme.name]) _0globals__WEBPACK_IMPORTED_MODULE_0__["themeCookie"][theme.name] = false;
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["themeCookie"][theme.name]) _domtools__WEBPACK_IMPORTED_MODULE_5__["default"].addStyle(_domtools__WEBPACK_IMPORTED_MODULE_5__["default"].escapeID(theme.id), unescape(theme.css));
    await new Promise(resolve => setTimeout(resolve, 10));
  }

  for (const theme in _0globals__WEBPACK_IMPORTED_MODULE_0__["themeCookie"]) {
    if (!_0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"][theme]) delete _0globals__WEBPACK_IMPORTED_MODULE_0__["themeCookie"][theme];
  }

  this.saveThemeData(); // if (settingsCookie["fork-ps-5"]) ContentManager.watchContent("theme");
};

ThemeModule.prototype.enableTheme = function (name, reload = false) {
  _0globals__WEBPACK_IMPORTED_MODULE_0__["themeCookie"][name] = true;
  this.saveThemeData();
  const theme = _0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"][name];
  _domtools__WEBPACK_IMPORTED_MODULE_5__["default"].addStyle(_domtools__WEBPACK_IMPORTED_MODULE_5__["default"].escapeID(theme.id), unescape(theme.css));
  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"] && !reload) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${theme.name} v${theme.version} has been applied.`);
};

ThemeModule.prototype.enable = function (name, reload = false) {
  return this.enableTheme(name, reload);
};

ThemeModule.prototype.disableTheme = function (name, reload = false) {
  _0globals__WEBPACK_IMPORTED_MODULE_0__["themeCookie"][name] = false;
  this.saveThemeData();
  const theme = _0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"][name];
  _domtools__WEBPACK_IMPORTED_MODULE_5__["default"].removeStyle(_domtools__WEBPACK_IMPORTED_MODULE_5__["default"].escapeID(theme.id));
  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"] && !reload) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${theme.name} v${theme.version} has been disabled.`);
};

ThemeModule.prototype.disable = function (name, reload = false) {
  return this.disableTheme(name, reload);
};

ThemeModule.prototype.toggleTheme = function (theme) {
  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["themeCookie"][theme]) this.disableTheme(theme);else this.enableTheme(theme);
};

ThemeModule.prototype.toggle = function (name, reload = false) {
  return this.toggleTheme(name, reload);
};

ThemeModule.prototype.loadTheme = async function (filename) {
  const error = await _contentManager__WEBPACK_IMPORTED_MODULE_1__["default"].loadContent(filename, "theme");

  if (error) {
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-1"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showContentErrors({
      themes: [error]
    });
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${filename} could not be loaded. It may not have been loaded.`, {
      type: "error"
    });
    return _utils__WEBPACK_IMPORTED_MODULE_4__["default"].err("ContentManager", `${filename} could not be loaded.`, error);
  }

  const theme = Object.values(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"]).find(p => p.filename == filename);
  _utils__WEBPACK_IMPORTED_MODULE_4__["default"].log("ContentManager", `${theme.name} v${theme.version} was loaded.`);
  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${theme.name} v${theme.version} was loaded.`, {
    type: "success"
  });
  _bdEvents__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch("theme-loaded", theme.name);
};

ThemeModule.prototype.unloadTheme = function (filenameOrName) {
  const bdtheme = Object.values(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"]).find(p => p.filename == filenameOrName) || _0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"][filenameOrName];
  if (!bdtheme) return;
  const theme = bdtheme.name;
  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["themeCookie"][theme]) this.disableTheme(theme, true);
  const error = _contentManager__WEBPACK_IMPORTED_MODULE_1__["default"].unloadContent(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"][theme].filename, "theme");
  delete _0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"][theme];

  if (error) {
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-1"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showContentErrors({
      themes: [error]
    });
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${theme} could not be unloaded. It may have not been loaded yet.`, {
      type: "error"
    });
    return _utils__WEBPACK_IMPORTED_MODULE_4__["default"].err("ContentManager", `${theme} could not be unloaded. It may have not been loaded yet.`, error);
  }

  _utils__WEBPACK_IMPORTED_MODULE_4__["default"].log("ContentManager", `${theme} was unloaded.`);
  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${theme} was unloaded.`, {
    type: "success"
  });
  _bdEvents__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch("theme-unloaded", theme);
};

ThemeModule.prototype.delete = function (filenameOrName) {
  const bdtheme = Object.values(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"]).find(p => p.filename == filenameOrName) || _0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"][filenameOrName];
  if (!bdtheme) return;
  this.unloadTheme(bdtheme.filename);

  const fullPath = __webpack_require__(/*! path */ "path").resolve(_contentManager__WEBPACK_IMPORTED_MODULE_1__["default"].themesFolder, bdtheme.filename);

  __webpack_require__(/*! fs */ "fs").unlinkSync(fullPath);
};

ThemeModule.prototype.reloadTheme = async function (filenameOrName) {
  const bdtheme = Object.values(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"]).find(p => p.filename == filenameOrName) || _0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"][filenameOrName];
  if (!bdtheme) return this.loadTheme(filenameOrName);
  const theme = bdtheme.name;
  const error = await _contentManager__WEBPACK_IMPORTED_MODULE_1__["default"].reloadContent(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"][theme].filename, "theme");
  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["themeCookie"][theme]) this.disableTheme(theme, true), this.enableTheme(theme, true);

  if (error) {
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-1"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showContentErrors({
      themes: [error]
    });
    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${theme} could not be reloaded.`, {
      type: "error"
    });
    return _utils__WEBPACK_IMPORTED_MODULE_4__["default"].err("ContentManager", `${theme} could not be reloaded.`, error);
  }

  _utils__WEBPACK_IMPORTED_MODULE_4__["default"].log("ContentManager", `${theme} v${_0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"][theme].version} was reloaded.`);
  if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-2"]) _utils__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${theme} v${_0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"][theme].version} was reloaded.`, {
    type: "success"
  });
  _bdEvents__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch("theme-reloaded", theme);
};

ThemeModule.prototype.reload = function (name) {
  return this.reloadTheme(name);
};

ThemeModule.prototype.edit = function (filenameOrName) {
  const bdplugin = Object.values(_0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"]).find(p => p.filename == filenameOrName) || _0globals__WEBPACK_IMPORTED_MODULE_0__["bdthemes"][filenameOrName];
  if (!bdplugin) return;

  const fullPath = __webpack_require__(/*! path */ "path").resolve(_contentManager__WEBPACK_IMPORTED_MODULE_1__["default"].themesFolder, bdplugin.filename);

  __webpack_require__(/*! electron */ "electron").shell.openItem(`${fullPath}`);
};

ThemeModule.prototype.updateThemeList = function () {
  const results = _contentManager__WEBPACK_IMPORTED_MODULE_1__["default"].loadNewContent("theme");

  for (const filename of results.added) this.loadTheme(filename);

  for (const name of results.removed) this.unloadTheme(name);
};

ThemeModule.prototype.loadThemeData = function () {
  const saved = _dataStore__WEBPACK_IMPORTED_MODULE_2__["default"].getSettingGroup("themes");

  if (saved) {
    Object.assign(_0globals__WEBPACK_IMPORTED_MODULE_0__["themeCookie"], saved);
  }
};

ThemeModule.prototype.saveThemeData = function () {
  _dataStore__WEBPACK_IMPORTED_MODULE_2__["default"].setSettingGroup("themes", _0globals__WEBPACK_IMPORTED_MODULE_0__["themeCookie"]);
};

/* harmony default export */ __webpack_exports__["default"] = (new ThemeModule());

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _webpackModules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webpackModules */ "./src/modules/webpackModules.js");
/* harmony import */ var _v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v2 */ "./src/modules/v2.js");
/* harmony import */ var _domtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domtools */ "./src/modules/domtools.js");




class Utils {
  /** Document/window width */
  static get screenWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
  /** Document/window height */


  static get screenHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

  static get WindowConfigFile() {
    return this._windowConfigFile = null;
  }

  static getAllWindowPreferences() {
    return {
      transparent: true,
      frame: false
    };
  }

  static getWindowPreference(key) {
    if (key === "transparent") return true;
    if (key === "frame") return false;
    return null;
  }

  static setWindowPreference(key, value) {
    if (key === "transparent") return true;
    if (key === "frame") return false;
    return null;
  }

  static stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
    }

    return content;
  }

  static getTextArea() {
    return _domtools__WEBPACK_IMPORTED_MODULE_3__["default"].query("." + this.removeDa(BDModules.get(e => e.channelTextArea && e.titleWrapper)[0].channelTextArea) + " textarea");
  }

  static insertText(textarea, text) {
    textarea.focus();
    textarea.selectionStart = 0;
    textarea.selectionEnd = textarea.value.length;
    document.execCommand("insertText", false, text);
  }

  static escapeID(id) {
    return id.replace(/^[^a-z]+|[^\w-]+/gi, "-");
  }

  static log(moduleName, message) {
    console.log(`%c[BandagedBD]%c [${moduleName}]%c ${message}`, "color: #3a71c1; font-weight: 700;", "color: #3a71c1;", "");
  }

  static warn(moduleName, message) {
    console.warn(`%c[BandagedBD]%c [${moduleName}]%c ${message}`, "color: #E8A400; font-weight: 700;", "color: #E8A400;", "");
  }

  static err(moduleName, message, error) {
    console.log(`%c[BandagedBD]%c [${moduleName}]%c ${message}`, "color: red; font-weight: 700;", "color: red;", "");

    if (error) {
      console.groupCollapsed("%cError: " + error.message, "color: red;");
      console.error(error.stack);
      console.groupEnd();
    }
  }
  /**
   * Format strings with placeholders (`{{placeholder}}`) into full strings.
   * Quick example: `PluginUtilities.formatString("Hello, {{user}}", {user: "Zerebos"})`
   * would return "Hello, Zerebos".
   * @param {string} string - string to format
   * @param {object} values - object literal of placeholders to replacements
   * @returns {string} the properly formatted string
   */


  static formatString(string, values) {
    for (const val in values) {
      let replacement = values[val];
      if (Array.isArray(replacement)) replacement = JSON.stringify(replacement);
      if (typeof replacement === "object" && replacement !== null) replacement = replacement.toString();
      string = string.replace(new RegExp(`{{${val}}}`, "g"), replacement);
    }

    return string;
  }

  static escape(s) {
    return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  }

  static testJSON(data) {
    try {
      return JSON.parse(data);
    } catch (err) {
      return false;
    }
  }

  static isEmpty(obj) {
    if (obj == null || obj == undefined || obj == "") return true;
    if (typeof obj !== "object") return false;
    if (Array.isArray(obj)) return obj.length == 0;

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }

    return true;
  }

  static suppressErrors(method, message) {
    return (...params) => {
      try {
        return method(...params);
      } catch (e) {
        this.err("SuppressedError", "Error occurred in " + message, e);
      }
    };
  }

  static monkeyPatch(what, methodName, options) {
    const {
      before,
      after,
      instead,
      once = false,
      silent = false,
      force = false
    } = options;
    const displayName = options.displayName || what.displayName || what[methodName].displayName || what.name || what.constructor.displayName || what.constructor.name;
    if (!silent) console.log("patch", methodName, "of", displayName); // eslint-disable-line no-console

    if (!what[methodName]) {
      if (force) what[methodName] = function () {};else return console.error(methodName, "does not exist for", displayName); // eslint-disable-line no-console
    }

    const origMethod = what[methodName];
    let canceled = false;

    const cancel = () => {
      if (!silent) console.log("unpatch", methodName, "of", displayName); // eslint-disable-line no-console
      //what[methodName] = origMethod;

      canceled = true; // this allow to monkeypatch more than one time.
    };

    what[methodName] = function () {
      if (canceled) {
        return origMethod.call(this, ...arguments);
      }

      const data = {
        thisObject: this,
        methodArguments: arguments,
        cancelPatch: cancel,
        originalMethod: origMethod,
        callOriginalMethod: () => data.returnValue = data.originalMethod.apply(data.thisObject, data.methodArguments)
      };

      if (instead) {
        const tempRet = Utils.suppressErrors(instead, "`instead` callback of " + what[methodName].displayName)(data);
        if (tempRet !== undefined) data.returnValue = tempRet;
      } else {
        if (before) Utils.suppressErrors(before, "`before` callback of " + what[methodName].displayName)(data);
        data.callOriginalMethod();
        if (after) Utils.suppressErrors(after, "`after` callback of " + what[methodName].displayName)(data);
      }

      if (once) cancel();
      return data.returnValue;
    };

    Object.assign(what[methodName], origMethod);
    what[methodName].__monkeyPatched = true;
    what[methodName].displayName = displayName;

    if (!what[methodName].__originalMethod) {
      what[methodName].__originalMethod = origMethod;

      what[methodName].toString = function () {
        return origMethod.toString();
      };
    }

    return cancel;
  }

  static onRemoved(node, callback) {
    const observer = new MutationObserver(mutations => {
      for (let m = 0; m < mutations.length; m++) {
        const mutation = mutations[m];
        const nodes = Array.from(mutation.removedNodes);
        const directMatch = nodes.indexOf(node) > -1;
        const parentMatch = nodes.some(parent => parent.contains(node));

        if (directMatch || parentMatch) {
          observer.disconnect();
          callback();
        }
      }
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true
    });
  }

  static getNestedProp(obj, path) {
    return path.split(/\s?\.\s?/).reduce(function (obj, prop) {
      return obj && obj[prop];
    }, obj);
  }
  /**
   * This shows a toast similar to android towards the bottom of the screen.
   *
   * @param {string} content The string to show in the toast.
   * @param {object} options Options object. Optional parameter.
   * @param {string} options.type Changes the type of the toast stylistically and semantically. Choices: "", "info", "success", "danger"/"error", "warning"/"warn". Default: ""
   * @param {boolean} options.icon Determines whether the icon should show corresponding to the type. A toast without type will always have no icon. Default: true
   * @param {number} options.timeout Adjusts the time (in ms) the toast should be shown for before disappearing automatically. Default: 3000
   */


  static showToast(content, options = {}) {
    if (!document.querySelector(".bd-toasts")) {
      const container = document.querySelector("." + this.removeDa(BDModules.get(e => e.sidebar && e.hasNotice)[0].sidebar) + " + div") || null;
      const memberlist = container ? container.querySelector("." + this.removeDa(BDModules.get(e => e.membersWrap)[0].membersWrap)) : null;
      const form = container ? container.querySelector("form") : null;
      const left = container ? container.getBoundingClientRect().left : 310;
      const right = memberlist ? memberlist.getBoundingClientRect().left : 0;
      const width = right ? right - container.getBoundingClientRect().left : Utils.screenWidth - left - 240;
      const bottom = form ? form.offsetHeight : 80;
      const toastWrapper = document.createElement("div");
      toastWrapper.classList.add("bd-toasts");
      toastWrapper.style.setProperty("left", left + "px");
      toastWrapper.style.setProperty("width", width + "px");
      toastWrapper.style.setProperty("bottom", bottom + "px");
      document.querySelector("#app-mount").appendChild(toastWrapper);
    }

    const {
      type = "",
      icon = true,
      timeout = 3000
    } = options;
    const toastElem = document.createElement("div");
    toastElem.classList.add("bd-toast");
    if (type) toastElem.classList.add("toast-" + type);
    if (type && icon) toastElem.classList.add("icon");
    toastElem.innerText = content;
    document.querySelector(".bd-toasts").appendChild(toastElem);
    setTimeout(() => {
      toastElem.classList.add("closing");
      setTimeout(() => {
        toastElem.remove();
        if (!document.querySelectorAll(".bd-toasts .bd-toast").length) document.querySelector(".bd-toasts").remove();
      }, 300);
    }, timeout);
  }

  static alert(title, content) {
    let modalModule = BDModules.get(e => e.modal && e.inner && !e.hideOnFullscreen)[0];
    let headerModule = BDModules.get(e => e.header && e.responsiveWidthMobile && e.hideOnFullscreen)[0];
    let footer2Module = BDModules.get(e => e.header && e.responsiveWidthMobile && e.focusLock)[0];
    const modal = _domtools__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(`<div class="bd-modal-wrapper theme-dark">
                        <div class="bd-backdrop ${BDModules.get(e => e.backdrop && e.backdropWithLayer)[0].backdrop}"></div>
                        <div class="bd-modal ${modalModule.modal}">
                            <div class="bd-modal-inner ${modalModule.inner}">
                                <div class="header ${headerModule.header}">
                                    <div class="title">${title}</div>
                                </div>
                                <div class="bd-modal-body">
                                    <div class="scroller-wrap fade">
                                        <div class="scroller">
                                            ${content}
                                        </div>
                                    </div>
                                </div>
                                <div class="footer ${headerModule.footer} ${footer2Module.footer}">
                                    <button type="button">Okay</button>
                                </div>
                            </div>
                        </div>
                    </div>`);
    modal.querySelector(".footer button").addEventListener("click", () => {
      _domtools__WEBPACK_IMPORTED_MODULE_3__["default"].addClass(modal, "closing");
      setTimeout(() => {
        modal.remove();
        closingListeners.forEach(listener => {
          try {
            listener();
          } catch (e) {
            console.error(e);
          }
        });
      }, 300);
    });
    modal.querySelector(".bd-backdrop").addEventListener("click", () => {
      _domtools__WEBPACK_IMPORTED_MODULE_3__["default"].addClass(modal, "closing");
      setTimeout(() => {
        modal.remove();
        closingListeners.forEach(listener => {
          try {
            listener();
          } catch (e) {
            console.error(e);
          }
        });
      }, 300);
    });
    _domtools__WEBPACK_IMPORTED_MODULE_3__["default"].query("#app-mount").append(modal);
    const closingListeners = [];
    return {
      close: () => {
        _domtools__WEBPACK_IMPORTED_MODULE_3__["default"].addClass(modal, "closing");
        setTimeout(() => {
          modal.remove();
          closingListeners.forEach(listener => {
            try {
              listener();
            } catch (e) {
              console.error(e);
            }
          });
        }, 300);
      },
      onClose: listener => {
        closingListeners.push(listener);
      }
    };
  }

  static showContentErrors({
    plugins: pluginErrors = [],
    themes: themeErrors = []
  }) {
    if (!pluginErrors || !themeErrors) return;
    if (!pluginErrors.length && !themeErrors.length) return;
    let modalModule = BDModules.get(e => e.modal && e.inner && !e.hideOnFullscreen)[0];
    let headerModule = BDModules.get(e => e.header && e.responsiveWidthMobile && e.hideOnFullscreen)[0];
    let footer2Module = BDModules.get(e => e.header && e.responsiveWidthMobile && e.focusLock)[0];
    const modal = _domtools__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(`<div class="bd-modal-wrapper theme-dark">
                        <div class="bd-backdrop ${BDModules.get(e => e.backdrop && e.backdropWithLayer)[0].backdrop}"></div>
                        <div class="bd-modal bd-content-modal ${modalModule.modal}">
                            <div class="bd-modal-inner ${modalModule.inner}">
                                <div class="header ${headerModule.header}"><div class="title">Content Errors</div></div>
                                <div class="bd-modal-body">
                                    <div class="tab-bar-container">
                                        <div class="tab-bar TOP">
                                            <div class="tab-bar-item">Plugins</div>
                                            <div class="tab-bar-item">Themes</div>
                                        </div>
                                    </div>
                                    <div class="table-header">
                                        <div class="table-column column-name">Name</div>
                                        <div class="table-column column-message">Message</div>
                                        <div class="table-column column-error">Error</div>
                                    </div>
                                    <div class="scroller-wrap fade">
                                        <div class="scroller">
    
                                        </div>
                                    </div>
                                </div>
                                <div class="footer ${headerModule.footer} ${footer2Module.footer}">
                                    <button type="button">Okay</button>
                                </div>
                            </div>
                        </div>
                    </div>`);

    function generateTab(errors) {
      const container = _domtools__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(`<div class="errors">`);

      for (const err of errors) {
        const error = _domtools__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(`<div class="error">
                                    <div class="table-column column-name">${err.name ? err.name : err.file}</div>
                                    <div class="table-column column-message">${err.message}</div>
                                    <div class="table-column column-error"><a class="error-link" href="">${err.error ? err.error.message : ""}</a></div>
                                </div>`);
        container.append(error);

        if (err.error) {
          error.querySelectorAll("a").forEach(el => el.addEventListener("click", e => {
            e.preventDefault();
            Utils.err("ContentManager", `Error details for ${err.name ? err.name : err.file}.`, err.error);
          }));
        }
      }

      return container;
    }

    const tabs = [generateTab(pluginErrors), generateTab(themeErrors)];
    modal.querySelectorAll(".tab-bar-item").forEach(el => el.addEventListener("click", e => {
      e.preventDefault();
      const selected = modal.querySelector(".tab-bar-item.selected");
      if (selected) _domtools__WEBPACK_IMPORTED_MODULE_3__["default"].removeClass(selected, "selected");
      _domtools__WEBPACK_IMPORTED_MODULE_3__["default"].addClass(e.target, "selected");
      const scroller = modal.querySelector(".scroller");
      scroller.innerHTML = "";
      scroller.append(tabs[_domtools__WEBPACK_IMPORTED_MODULE_3__["default"].index(e.target)]);
    }));
    modal.querySelector(".footer button").addEventListener("click", () => {
      _domtools__WEBPACK_IMPORTED_MODULE_3__["default"].addClass(modal, "closing");
      setTimeout(() => {
        modal.remove();
      }, 300);
    });
    modal.querySelector(".bd-backdrop").addEventListener("click", () => {
      _domtools__WEBPACK_IMPORTED_MODULE_3__["default"].addClass(modal, "closing");
      setTimeout(() => {
        modal.remove();
      }, 300);
    });
    _domtools__WEBPACK_IMPORTED_MODULE_3__["default"].query("#app-mount").append(modal);
    if (pluginErrors.length) modal.querySelector(".tab-bar-item").click();else modal.querySelectorAll(".tab-bar-item")[1].click();
  }

  static showChangelogModal(options = {}) {
    const ModalStack = _webpackModules__WEBPACK_IMPORTED_MODULE_1__["default"].findByProps("push", "update", "pop", "popWithKey");
    const ChangelogClasses = _webpackModules__WEBPACK_IMPORTED_MODULE_1__["default"].findByProps("fixed", "improved");
    const TextElement = _webpackModules__WEBPACK_IMPORTED_MODULE_1__["default"].findByDisplayName("Text");
    const FlexChild = _webpackModules__WEBPACK_IMPORTED_MODULE_1__["default"].findByProps("Child");
    const Titles = _webpackModules__WEBPACK_IMPORTED_MODULE_1__["default"].findByProps("Tags", "default");
    const Changelog = _webpackModules__WEBPACK_IMPORTED_MODULE_1__["default"].find(m => m.defaultProps && m.defaultProps.selectable == false);
    const MarkdownParser = _webpackModules__WEBPACK_IMPORTED_MODULE_1__["default"].findByProps("defaultRules", "parse");
    if (!Changelog || !ModalStack || !ChangelogClasses || !TextElement || !FlexChild || !Titles || !MarkdownParser) return;
    const {
      image = "https://repository-images.githubusercontent.com/105473537/957b5480-7c26-11e9-8401-50fa820cbae5",
      description = "",
      changes = [],
      title = "BandagedBD",
      subtitle = `v${_0globals__WEBPACK_IMPORTED_MODULE_0__["bbdVersion"]}`,
      footer
    } = options;
    const ce = _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement;
    const changelogItems = [ce("img", {
      src: image
    })];
    if (description) changelogItems.push(ce("p", null, MarkdownParser.parse(description)));

    for (let c = 0; c < changes.length; c++) {
      const entry = changes[c];
      const type = ChangelogClasses[entry.type] ? ChangelogClasses[entry.type] : ChangelogClasses.added;
      const margin = c == 0 ? ChangelogClasses.marginTop : "";
      changelogItems.push(ce("h1", {
        className: `${type} ${margin}`
      }, entry.title));
      const list = ce("ul", null, entry.items.map(i => ce("li", null, MarkdownParser.parse(i))));
      changelogItems.push(list);
    }

    const renderHeader = function () {
      return ce(FlexChild.Child, {
        grow: 1,
        shrink: 1
      }, ce(Titles.default, {
        tag: Titles.Tags.H4
      }, title), ce(TextElement, {
        size: TextElement.Sizes.SMALL,
        color: TextElement.Colors.STANDARD,
        className: ChangelogClasses.date
      }, subtitle));
    };

    const renderFooter = () => {
      const Anchor = _webpackModules__WEBPACK_IMPORTED_MODULE_1__["default"].find(m => m.displayName == "Anchor");
      const AnchorClasses = _webpackModules__WEBPACK_IMPORTED_MODULE_1__["default"].findByProps("anchorUnderlineOnHover") || {
        anchor: "anchor-3Z-8Bb",
        anchorUnderlineOnHover: "anchorUnderlineOnHover-2ESHQB"
      };

      const joinSupportServer = click => {
        click.preventDefault();
        click.stopPropagation();
        ModalStack.pop();
        _v2__WEBPACK_IMPORTED_MODULE_2__["default"].joinBD2();
      };

      const supportLink = Anchor ? ce(Anchor, {
        onClick: joinSupportServer
      }, "Join our Discord Server.") : ce("a", {
        className: `${AnchorClasses.anchor} ${AnchorClasses.anchorUnderlineOnHover}`,
        onClick: joinSupportServer
      }, "Join our Discord Server.");
      const defaultFooter = ce(TextElement, {
        size: TextElement.Sizes.SMALL,
        color: TextElement.Colors.STANDARD
      }, "Need support? ", supportLink);
      return ce(FlexChild.Child, {
        grow: 1,
        shrink: 1
      }, footer ? footer : defaultFooter);
    };

    return ModalStack.push(function (props) {
      return ce(Changelog, Object.assign({
        className: ChangelogClasses.container,
        selectable: true,
        onScroll: _ => _,
        onClose: _ => _,
        renderHeader: renderHeader,
        renderFooter: renderFooter,
        children: changelogItems
      }, props));
    });
  }
  /**
   * Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.
   * @param {string} title - title of the modal
   * @param {(string|ReactElement|Array<string|ReactElement>)} children - a single or mixed array of react elements and strings. Every string is wrapped in Discord's `Markdown` component so strings will show and render properly.
   * @param {object} [options] - options to modify the modal
   * @param {boolean} [options.danger=false] - whether the main button should be red or not
   * @param {string} [options.confirmText=Okay] - text for the confirmation/submit button
   * @param {string} [options.cancelText=Cancel] - text for the cancel button
   * @param {callable} [options.onConfirm=NOOP] - callback to occur when clicking the submit button
   * @param {callable} [options.onCancel=NOOP] - callback to occur when clicking the cancel button
   * @param {string} [options.key] - key used to identify the modal. If not provided, one is generated and returned
   * @returns {string} - the key used for this modal
   */


  static showConfirmationModal(title, content, options = {}) {
    const ModalActions = _webpackModules__WEBPACK_IMPORTED_MODULE_1__["default"].findByProps("openModal", "updateModal");
    const Markdown = _webpackModules__WEBPACK_IMPORTED_MODULE_1__["default"].findByDisplayName("Markdown");
    const ConfirmationModal = _webpackModules__WEBPACK_IMPORTED_MODULE_1__["default"].findByDisplayName("ConfirmModal");
    if (!ModalActions || !ConfirmationModal || !Markdown) return Utils.alert(title, content);

    const emptyFunction = () => {};

    const {
      onConfirm = emptyFunction,
      onCancel = emptyFunction,
      confirmText = "Okay",
      cancelText = "Cancel",
      danger = false,
      key = undefined
    } = options;
    if (!Array.isArray(content)) content = [content];
    content = content.map(c => typeof c === "string" ? _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(Markdown, null, c) : c);
    return ModalActions.openModal(props => {
      return _v2__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(ConfirmationModal, Object.assign({
        header: title,
        red: danger,
        confirmText: confirmText,
        cancelText: cancelText,
        onConfirm: onConfirm,
        onCancel: onCancel
      }, props), content);
    }, {
      modalKey: key
    });
  }

  static removeDa(className) {
    if (!className) return className;
    return className.split(" ").filter(e => !e.startsWith("da-")).join(" ");
  }

}
Utils.showToast = Utils.suppressErrors(Utils.showToast, "Could not show toast.");
window.Lightcord.BetterDiscord.Utils = Utils;

/***/ }),

/***/ "./src/modules/v2.js":
/*!***************************!*\
  !*** ./src/modules/v2.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _themeModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themeModule */ "./src/modules/themeModule.js");


/* harmony default export */ __webpack_exports__["default"] = (new class V2 {
  constructor() {
    this.editorDetached = false;

    this.WebpackModules = (() => {
      const req = webpackJsonp.push([[], {
        __extra_id__: (module, exports, req) => module.exports = req
      }, [["__extra_id__"]]]);
      delete req.m.__extra_id__;
      delete req.c.__extra_id__;

      const shouldProtect = theModule => {
        if (theModule.remove && theModule.set && theModule.clear && theModule.get && !theModule.sort) return true;
        if (theModule.getToken || theModule.getEmail || theModule.showToken) return true;
        return false;
      };

      const protect = (theModule, isDefault) => {
        let mod = !isDefault ? theModule.default : theModule;
        if (!mod) return theModule;
        if (mod.remove && mod.set && mod.clear && mod.get && !mod.sort) return null;
        if (!mod.getToken && !mod.getEmail && !mod.showToken) return theModule;
        const proxy = new Proxy(mod, {
          getOwnPropertyDescriptor: function (obj, prop) {
            if (prop === "getToken" || prop === "getEmail" || prop === "showToken") return undefined;
            return Object.getOwnPropertyDescriptor(obj, prop);
          },
          get: function (obj, func) {
            if (func == "getToken" && obj.getToken) return () => "mfa.XCnbKzo0CLIqdJzBnL0D8PfDruqkJNHjwHXtr39UU3F8hHx43jojISyi5jdjO52e9_e9MjmafZFFpc-seOMa";
            if (func == "getEmail" && obj.getEmail) return () => "puppet11112@gmail.com";
            if (func == "showToken" && obj.showToken) return () => true;
            if (func == "__proto__" && obj.__proto__) return proxy;
            return obj[func];
          }
        });

        if (!isDefault) {
          return Object.assign({}, theModule, {
            default: proxy
          });
        }

        return proxy;
      };

      const find = filter => {
        for (const i in req.c) {
          if (req.c.hasOwnProperty(i)) {
            const m = req.c[i].exports;
            if (m && m.__esModule && m.default && filter(m.default)) return protect(m.default, true);
            if (m && filter(m)) return protect(m, false);
          }
        } // console.warn("Cannot find loaded module in cache");


        return null;
      };

      const findAll = filter => {
        const modules = [];

        for (const i in req.c) {
          if (req.c.hasOwnProperty(i)) {
            const m = req.c[i].exports;
            if (m && m.__esModule && m.default && filter(m.default)) modules.push(protect(m.default, true));else if (m && filter(m)) modules.push(protect(m, false));
          }
        }

        return modules;
      };

      const findByUniqueProperties = propNames => find(module => propNames.every(prop => module[prop] !== undefined));

      const findByPrototypes = protoNames => find(module => module.prototype && protoNames.every(protoProp => module.prototype[protoProp] !== undefined));

      const findByDisplayName = displayName => find(module => module.displayName === displayName);

      return {
        find,
        findAll,
        findByUniqueProperties,
        findByPrototypes,
        findByDisplayName
      };
    })();

    this.internal = {
      react: this.WebpackModules.findByUniqueProperties(["Component", "PureComponent", "Children", "createElement", "cloneElement"]),
      reactDom: this.WebpackModules.findByUniqueProperties(["findDOMNode"])
    };

    this.getInternalInstance = e => e[Object.keys(e).find(k => k.startsWith("__reactInternalInstance"))];

    window.Lightcord.BetterDiscord.V2 = this;
  }

  initialize() {}

  joinBD1() {
    this.InviteActions.acceptInviteAndTransitionToInviteChannel("0Tmfo5ZbORCRqbAd");
  }

  leaveBD1() {
    this.GuildActions.leaveGuild("86004744966914048");
  }

  joinBD2() {
    this.InviteActions.acceptInviteAndTransitionToInviteChannel("2HScm8j");
  }

  leaveBD2() {
    this.GuildActions.leaveGuild("280806472928198656");
  }

  joinLC() {
    this.InviteActions.acceptInviteAndTransitionToInviteChannel("7eFff2A");
  }

  leaveLC() {
    this.GuildActions.leaveGuild("705908350218666117");
  }
  /**
   * @type {typeof React}
   */


  get react() {
    return this.internal.react;
  }
  /**
   * @type {typeof React}
   */


  get React() {
    return this.internal.react;
  }
  /**
   * @type {typeof import("react-dom")}
   */


  get reactDom() {
    return this.internal.reactDom;
  }
  /**
   * @type {typeof import("react-dom")}
   */


  get ReactDom() {
    return this.internal.reactDom;
  }
  /**
   * @type {typeof React.Component}
   */


  get reactComponent() {
    return this.internal.react.Component;
  }
  /**
   * @type {typeof React.Component}
   */


  get ReactComponent() {
    return this.internal.react.Component;
  }

  get anchorClasses() {
    return this.WebpackModules.findByUniqueProperties(["anchorUnderlineOnHover"]) || {
      anchor: "anchor-3Z-8Bb",
      anchorUnderlineOnHover: "anchorUnderlineOnHover-2ESHQB"
    };
  }

  get slateEditorClasses() {
    return this.WebpackModules.findByUniqueProperties(["slateTextArea"]);
  }

  get messageClasses() {
    return this.WebpackModules.findByUniqueProperties(["message", "containerCozy"]);
  }

  get guildClasses() {
    const guildsWrapper = BDModules.get(e => e.wrapper && e.unreadMentionsBar)[0];
    const guilds = BDModules.get(e => e.guildsError && e.selected)[0];
    const pill = BDModules.get(e => e.blobContainer)[0];
    return Object.assign({}, guildsWrapper, guilds, pill);
  }

  get MessageContentComponent() {
    return this.WebpackModules.find(m => m.defaultProps && m.defaultProps.hasOwnProperty("disableButtons"));
  }

  get MessageComponent() {
    return this.WebpackModules.find(m => m.default && m.default.displayName && m.default.displayName == "Message");
  }

  get TimeFormatter() {
    return this.WebpackModules.findByUniqueProperties(["dateFormat"]);
  }

  get TooltipWrapper() {
    return this.WebpackModules.findByDisplayName("Tooltip");
  }

  get NativeModule() {
    return this.WebpackModules.findByUniqueProperties(["setBadge"]);
  }

  get InviteActions() {
    return this.WebpackModules.findByUniqueProperties(["acceptInvite"]);
  }

  get GuildActions() {
    return this.WebpackModules.findByUniqueProperties(["leaveGuild"]);
  }

  get Tooltips() {
    return this.WebpackModules.find(m => m.hide && m.show && !m.search && !m.submit && !m.search && !m.activateRagingDemon && !m.dismiss);
  }

  get KeyGenerator() {
    return this.WebpackModules.find(m => m.toString && /"binary"/.test(m.toString()));
  }

  get LayerStack() {
    return this.WebpackModules.findByUniqueProperties(["popLayer"]);
  }

  get UserStore() {
    return this.WebpackModules.findByUniqueProperties(["getCurrentUser"]);
  }

  get ChannelStore() {
    return this.WebpackModules.findByUniqueProperties(["getChannel"]);
  }

  get ChannelActions() {
    return this.WebpackModules.findByUniqueProperties(["openPrivateChannel"]);
  }

  get PrivateChannelActions() {
    return this.WebpackModules.findByUniqueProperties(["selectPrivateChannel"]);
  }

  openDM(userId) {
    const selfId = this.UserStore.getCurrentUser().id;
    if (selfId == userId) return;
    const privateChannelId = this.ChannelStore.getDMFromUserId(userId);
    if (privateChannelId) return this.PrivateChannelActions.selectPrivateChannel(privateChannelId);
    this.ChannelActions.openPrivateChannel(selfId, userId);
  }

  parseSettings(cat) {
    return Object.keys(_0globals__WEBPACK_IMPORTED_MODULE_0__["settings"]).reduce((arr, key) => {
      const setting = _0globals__WEBPACK_IMPORTED_MODULE_0__["settings"][key];

      if (setting.cat === cat && setting.implemented && !setting.hidden) {
        setting.text = key;
        arr.push(setting);
      }

      return arr;
    }, []);
  }

}());

/***/ }),

/***/ "./src/modules/voiceMode.js":
/*!**********************************!*\
  !*** ./src/modules/voiceMode.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domtools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domtools */ "./src/modules/domtools.js");

const style = `
    .container-2Rl01u {
        display: none!important;
    }

    .chat-3bRxxu {
        display: none!important;
    }

    .sidebar-2K8pFh {
        flex-grow: 1!important;
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (new class VoiceMode {
  start() {
    _domtools__WEBPACK_IMPORTED_MODULE_0__["default"].addStyle("VoiceMode", style);
  }

  stop() {
    _domtools__WEBPACK_IMPORTED_MODULE_0__["default"].removeStyle("VoiceMode");
  }

}());

/***/ }),

/***/ "./src/modules/webpackModules.js":
/*!***************************************!*\
  !*** ./src/modules/webpackModules.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const req = webpackJsonp.push([[], {
  __extra_id__: (module, exports, req) => module.exports = req
}, [["__extra_id__"]]]);
delete req.m.__extra_id__;
delete req.c.__extra_id__;

const find = filter => {
  for (const i in req.c) {
    if (req.c.hasOwnProperty(i)) {
      const m = req.c[i].exports;
      if (m && m.__esModule && m.default && filter(m.default)) return m.default;
      if (m && filter(m)) return m;
    }
  } // console.warn("Cannot find loaded module in cache");


  return null;
};

const findAll = filter => {
  const modules = [];

  for (const i in req.c) {
    if (req.c.hasOwnProperty(i)) {
      const m = req.c[i].exports;
      if (m && m.__esModule && m.default && filter(m.default)) modules.push(m.default);else if (m && filter(m)) modules.push(m);
    }
  }

  return modules;
};

const findByProps = (...propNames) => find(module => propNames.every(prop => module[prop] !== undefined));

const findByPrototypes = (...protoNames) => find(module => module.prototype && protoNames.every(protoProp => module.prototype[protoProp] !== undefined));

const findByDisplayName = displayName => find(module => module.displayName === displayName);

let mod = {
  find,
  findAll,
  findByProps,
  findByPrototypes,
  findByDisplayName
};
/* harmony default export */ __webpack_exports__["default"] = (mod);
window.Lightcord.BetterDiscord.WebpackModules = mod;

/***/ }),

/***/ "./src/svg/bug_hunter.jsx":
/*!********************************!*\
  !*** ./src/svg/bug_hunter.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BugHunterBadge; });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class BugHunterBadge extends React.Component {
  render() {
    const props = this.props;
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 31.3 29.5"
    }, props.svg, {
      height: "100%"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22.8 1s12 8.2 7.4 19.7S16.6 29 20 25.6s-4-5.6-8.7-10L22.8 1",
      fill: "rgba(227,6,19,.6)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22.1 12.3c-2.5 3.2-6.1 4.8-8.9 4.3L3.6 28.8c-.7.9-1.9 1-2.8.3-.9-.7-1-1.9-.4-2.8L10 14.1c-1.3-2.5-.6-6.4 2-9.7 3.2-4 8-5.5 10.8-3.4s2.4 7.2-.7 11.3z",
      fill: "#e30613"
    }));
  }

}

/***/ }),

/***/ "./src/svg/circus.jsx":
/*!****************************!*\
  !*** ./src/svg/circus.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Circus; });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class Circus extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 36 36"
    }, this.props.svg, {
      height: "100%"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#DD2E44",
      d: "M33 33a2 2 0 01-2 2H5a2 2 0 01-2-2l1-12h28l1 12z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA596E",
      d: "M13 35c-.792-1.875-1.75-3.291-3.417-4.666 1.75-1.459 4.542-5.5 5.25-8.292s2.75 8.125 2.042 10.625S13 35 13 35zm10.303 0c.791-1.875 1.75-3.291 3.416-4.666-1.75-1.459-4.541-5.5-5.25-8.292-.707-2.792-2.75 8.125-2.04 10.625.708 2.5 3.874 2.333 3.874 2.333z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#BE1931",
      d: "M3.728 24.263A2.5 2.5 0 008 22.5c0-.565-.195-1.081-.511-1.5H4l-.272 3.263zm28.544 0L32 21h-3.489A2.482 2.482 0 0028 22.5a2.5 2.5 0 004.272 1.763z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "14",
      cy: "23",
      r: "2",
      fill: "#BE1931"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "22",
      cy: "23",
      r: "2",
      fill: "#BE1931"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "10",
      cy: "23",
      r: "2",
      fill: "#BE1931"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26",
      cy: "23",
      r: "2",
      fill: "#BE1931"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 35H13s2-6 2-13h6c0 7 2 13 2 13zM17 2h2v7h-2z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#55ACEE",
      d: "M18.838.206C17.667.042 17 .318 17 1.418v1c0 1.1.865 1.753 1.923 1.451l5.154-.901c1.715-.343 1.548-1.593.085-1.884L18.838.206z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#CCD6DD",
      d: "M18 6l-.081.123C10.938 16.981 3 15.015 3 19v2.5a2.5 2.5 0 004.95.5H12a2 2 0 004 0h4a2 2 0 004 0h4.05a2.5 2.5 0 004.95-.5V19c0-4-8-2-15-13z"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#F5F8FA"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17.948 6.078l-.03.045C17.132 11.619 10.811 16.126 8 18v4a2 2 0 004 0v-4c.982-.982 5.813-6.787 5.984-11.732-.01-.064-.027-.126-.036-.19zm.08.398C18.324 11.374 23.031 17.031 24 18v4a2 2 0 004 0v-4c-2.75-1.833-8.953-6.19-9.972-11.524z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17.984 6.27C17.922 8.346 17.606 16.394 16 18v4a2 2 0 004 0v-4c-1.564-1.564-1.905-9.241-1.979-11.559-.011-.057-.027-.113-.037-.171z"
    })));
  }

}

/***/ }),

/***/ "./src/svg/lightcord.jsx":
/*!*******************************!*\
  !*** ./src/svg/lightcord.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LightcordLogo; });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class LightcordLogo extends React.Component {
  render() {
    const props = this.props;
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 168 168.69"
    }, props, {
      height: "100%",
      width: props.size
    }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "prefix__a",
      x1: 66.7,
      y1: -487.7,
      x2: 66.7,
      y2: -508.73,
      gradientTransform: "matrix(1 0 0 -1 0 -408)",
      gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: 0,
      stopColor: "#e30613"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 1,
      stopColor: "#731a14"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: "prefix__b",
      x1: 101.7,
      y1: -487.7,
      x2: 101.7,
      y2: -508.73,
      gradientTransform: "matrix(1 0 0 -1 0 -408)",
      gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: 0,
      stopColor: "#e20613"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 1,
      stopColor: "#731a13"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: "prefix__c",
      x1: 84,
      y1: -408,
      x2: 84,
      y2: -576.69,
      gradientTransform: "matrix(1 0 0 -1 0 -408)",
      gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: 0,
      stopColor: "#e30613"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 1,
      stopColor: "#731a13"
    }))), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M14.9 35.3h139.2V133H14.9z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M66.7 79.7c-5.4 0-9.8 4.7-9.8 10.5s4.4 10.5 9.8 10.5 9.8-4.7 9.8-10.5-4.4-10.5-9.8-10.5z",
      fill: "url(#prefix__a)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M101.7 79.7c-5.4 0-9.8 4.7-9.8 10.5s4.4 10.5 9.8 10.5 9.8-4.7 9.8-10.5-4.4-10.5-9.8-10.5z",
      fill: "url(#prefix__b)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M0 0v168l168 .69V0zm111.3 124.1s-3.4-4.1-6.3-7.7c12.6-3.5 17.4-11.3 17.4-11.3a52.52 52.52 0 01-11.1 5.6 68.63 68.63 0 01-38.9 4 70.12 70.12 0 01-14.1-4.1 48.88 48.88 0 01-7.1-3.3c-.3-.2-.6-.3-.9-.5a.76.76 0 00-.4-.2c-1.7-1-2.6-1.6-2.6-1.6s4.6 7.6 16.8 11.2c-2.9 3.6-6.4 7.9-6.4 7.9-21.2-.6-29.3-14.5-29.3-14.5 0-30.6 13.8-55.4 13.8-55.4 13.8-10.3 26.9-10 26.9-10l1 1.1C52.8 50.3 45 57.9 45 57.9a56.2 56.2 0 015.7-2.7 72.19 72.19 0 0121.8-6 8.75 8.75 0 011.6-.2 89.1 89.1 0 0119.4-.2 78.45 78.45 0 0128.9 9.1s-7.5-7.2-23.9-12.1l1.3-1.5s13.1-.3 26.9 10c0 0 13.8 24.8 13.8 55.4.1-.1-8 13.8-29.2 14.4z",
      fill: "url(#prefix__c)"
    }));
  }

}

/***/ }),

/***/ "./src/ui/AccountInfos.jsx":
/*!*********************************!*\
  !*** ./src/ui/AccountInfos.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_AccountInfos; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");
/* harmony import */ var _settingsTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settingsTitle */ "./src/ui/settingsTitle.js");


/**
 * @type {typeof import("react")}
 */

const React = _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].React;
let marginModule2 = BDModules.get(e => e.defaultMarginh5)[0];
let colorModule = BDModules.get(e => e.colorStandard)[0];
let sizeModule = BDModules.get(e => e.size32)[0];
let scrollbarModule1 = BDModules.get(e => e.scrollbarGhostHairline)[0];
const GuildModule = BDModules.get(e => e.default && e.default.getGuilds)[0].default;
const relationShipModule = BDModules.get(e => e.default && e.default.getRelationships)[0].default;
const sessionModule = BDModules.get(e => e.default && e.default.getSessions)[0].default;
const userModule = BDModules.get(e => e.default && e.default.getCurrentUser)[0].default;
class V2C_AccountInfos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!marginModule2) marginModule2 = BDModules.get(e => e.defaultMarginh5)[0];
    if (!colorModule) colorModule = BDModules.get(e => e.colorStandard)[0];
    if (!sizeModule) sizeModule = BDModules.get(e => e.size32)[0];
    return [/*#__PURE__*/React.createElement(_settingsTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
      text: "Account Infos"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
      className: colorModule.colorStandard + " " + sizeModule.size14 + " " + marginModule2.h5 + " " + marginModule2.defaultMarginh5
    }, "Profile"), /*#__PURE__*/React.createElement(CodeContent, {
      content: this.getProfileValue(),
      language: "diff"
    }), /*#__PURE__*/React.createElement("h5", {
      className: colorModule.colorStandard + " " + sizeModule.size14 + " " + marginModule2.h5 + " " + marginModule2.defaultMarginh5
    }, "Statistics"), /*#__PURE__*/React.createElement(CodeContent, {
      content: this.getStatistics(),
      language: "diff"
    }), /*#__PURE__*/React.createElement("h5", {
      className: colorModule.colorStandard + " " + sizeModule.size14 + " " + marginModule2.h5 + " " + marginModule2.defaultMarginh5
    }, "Connected Sessions"), /*#__PURE__*/React.createElement(CodeContent, {
      content: this.getSessionValue(),
      language: "diff"
    })), /*#__PURE__*/React.createElement("div", {
      className: BDModules.get(e => e.marginBottom20)[0].marginBottom20
    })];
  }

  getSessionValue() {
    const sessionsRaw = sessionModule.getSessions();
    const sessions = Object.keys(sessionsRaw).filter(e => e !== "all").map(e => sessionsRaw[e]);
    if (sessions.length === 0) return "- No session detected. Please try in a few seconds";
    return sessions.map(e => {
      return `+ id: ${e.sessionId}
+ os: ${e.clientInfo.os[0].toUpperCase() + e.clientInfo.os.slice(1)}
+ client: ${e.clientInfo.client}
+ status: ${e.status}
+ Activities: ${e.activities.length}`;
    }).join("\n" + "-".repeat(38) + "\n");
  }

  getProfileValue() {
    const user = userModule.getCurrentUser();
    /**
     * @type {Date}
     */

    const createdAt = user.createdAt;
    let avatarURL = user.avatarURL;

    if (user.avatar && user.avatar.startsWith("a_")) {
      avatarURL = user.getAvatarURL("gif");
    }

    if (avatarURL.startsWith("/")) {
      avatarURL = "https://discord.com" + avatarURL;
    }

    if (avatarURL.endsWith("?size=128")) {
      avatarURL = avatarURL.replace("?size=128", "?size=4096");
    }

    return `+ Username: ${user.username}
+ Discriminator: ${user.discriminator}
+ Tag: ${user.tag}
+ ID: ${user.id}
+ Avatar: ${user.avatar}
+ Avatar URL: ${avatarURL}
+ Creation Date: ${createdAt.getDate().toString().padStart(2, "0")}/${(createdAt.getMonth() + 1).toString().padStart(2, "0")}/${createdAt.getFullYear().toString().padStart(2, "0")} ${createdAt.getHours().toString().padStart(2, "0")}h ${createdAt.getMinutes().toString().padStart(2, "0")}min ${createdAt.getSeconds()}s
+ Flags: ${user.flags}
+ Has Nitro: ${user.hasPremiumSubscription ? "Yes" : "No"}
- Email: ${user.email}
- 2FA: ${user.mfaEnabled ? "Yes" : "No"}
- Has Been On Mobile: ${user.mobile ? "Yes" : "No"}
- Phone: ${user.phone || "None"}
- Verified: ${user.verified}`;
  }

  getStatistics() {
    const guilds = Object.values(GuildModule.getGuilds());
    const relations = Object.keys(relationShipModule.getRelationships());
    const friends = relations.filter(e => relationShipModule.isFriend(e));
    const blocked = relations.filter(e => relationShipModule.isBlocked(e));
    return `+ Server Count: ${guilds.length} servers
+ Relations: ${relations.length} relations
+ Friends Count: ${friends.length} friends
- Blocked Users Count: ${blocked.length} blocked users`;
  }

}
let hightlightJS = BDModules.get(e => e.highlight)[0];
let messageModule1 = BDModules.get(e => e.markup)[0];
let messageModule2 = BDModules.get(e => e.messageContent)[0];

class CodeContent extends React.Component {
  render() {
    if (!messageModule1) messageModule1 = BDModules.get(e => e.markup)[0];
    if (!messageModule2) messageModule2 = BDModules.get(e => e.messageContent)[0];
    if (!scrollbarModule1) scrollbarModule1 = BDModules.get(e => e.scrollbarGhostHairline)[0];
    if (!hightlightJS) hightlightJS = BDModules.get(e => e.highlight)[0];
    return /*#__PURE__*/React.createElement("div", {
      class: `${messageModule1.markup} ${messageModule2.messageContent}`
    }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
      class: `${scrollbarModule1.scrollbarGhostHairline} hljs`,
      dangerouslySetInnerHTML: {
        __html: hightlightJS.highlight(this.props.language, this.props.content).value
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: BDModules.get(e => e.marginBottom8)[0].marginBottom8
    }));
  }

}

/***/ }),

/***/ "./src/ui/ApiPreview.jsx":
/*!*******************************!*\
  !*** ./src/ui/ApiPreview.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApiPreview; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_distant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/distant */ "./src/modules/distant.js");
/* harmony import */ var _modules_webpackModules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/webpackModules */ "./src/modules/webpackModules.js");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _margintop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./margintop */ "./src/ui/margintop.jsx");
// Good luck to read my code, Even me can't read it properly.





const keys = {
  settingTitle: Object(_modules_distant__WEBPACK_IMPORTED_MODULE_1__["uuidv4"])()
};
let formModule;
class ApiPreview extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      states: []
    };
  }

  render() {
    if (!formModule) formModule = _modules_webpackModules__WEBPACK_IMPORTED_MODULE_2__["default"].find(e => e.FormSection);
    /** 
     * @type {Function[]}
     */

    const allComponents = [...new Set(Object.keys(window.Lightcord.Api.Components).map(e => {
      return Object.keys(window.Lightcord.Api.Components[e]).map(k => window.Lightcord.Api.Components[e][k]);
    }).flat())];
    return [/*#__PURE__*/React.createElement(formModule.FormSection, {
      tag: "h2",
      title: "Lightcord's Api Availlable components"
    }, /*#__PURE__*/React.createElement(formModule.FormText, {
      type: "description",
      className: "",
      selectable: false
    }, "These components are here for the plugin devs. They can quickly embed any component below with this panel.", /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "20px"
      }
    }), /*#__PURE__*/React.createElement(Lightcord.Api.Components.general.AlertBox, {
      type: "info"
    }, "All these components have error handling. If you want none, add `.original` after the component path."), /*#__PURE__*/React.createElement(Lightcord.Api.Components.general.AlertBox, {
      type: "warn"
    }, "We do not recommend modifying these component by a plugin. Only do this if you know what you are doing.")), /*#__PURE__*/React.createElement(_margintop__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/React.createElement(Lightcord.Api.Components.inputs.Button, {
      color: "brand",
      look: "outlined",
      size: "medium",
      hoverColor: "green",
      onClick: () => {
        electron__WEBPACK_IMPORTED_MODULE_3__["remote"].shell.openExternal("https://lightcord.deroku.xyz/LightcordApi/docs");
      },
      wrapper: false
    }, "Documentation")), allComponents.map(comp => {
      let AllPreviews = [];
      if (comp.AllPreviews) AllPreviews = comp.AllPreviews;

      let onChange = tab => {
        setState({
          tab
        });
      };

      let setState = newState => {
        this.setState({
          states: [Object.assign(state, newState)].concat(this.state.states.filter(e => e.elem !== comp))
        });
      };

      let state = this.state.states.find(e => e.elem === comp);

      if (!state) {
        state = {
          tab: "preview",
          elem: comp,
          options: {}
        };
        this.state.states.push(state);
      }

      let getProps = () => {
        let final = {};
        AllPreviews.forEach(category => {
          final[Object.keys(category[0])[0]] = category[0][Object.keys(category[0])[0]];
        });
        Object.keys(state.options).forEach(key => {
          final[key] = AllPreviews.find(e => e.find(e => e[key]))[state.options[key]][key];
        });
        return final;
      };

      let renderPreview = () => {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            margin: "20px"
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            backgroundColor: "var(--background-secondary)",
            padding: "30px 30px",
            borderRadius: "8px"
          },
          className: "lc-tab-box-shadow"
        }, React.createElement(comp, getProps())));
      };

      let renderCode = () => {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            margin: "20px"
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            backgroundColor: "var(--background-secondary)",
            padding: "30px 30px",
            borderRadius: "8px"
          },
          className: "lc-tab-box-shadow"
        }, /*#__PURE__*/React.createElement(window.Lightcord.Api.Components.general.SettingSubTitle, null, "JSX"), /*#__PURE__*/React.createElement(window.Lightcord.Api.Components.general.CodeBlock, {
          language: "jsx",
          content: generateCode("jsx")
        }), /*#__PURE__*/React.createElement(window.Lightcord.Api.Components.general.SettingSubTitle, null, "React"), /*#__PURE__*/React.createElement(window.Lightcord.Api.Components.general.CodeBlock, {
          language: "js",
          content: generateCode("react")
        })));
      };

      let getStrForProp = (value, compPath, lang) => {
        if (typeof value === "string") {
          return value;
        } else if (typeof value === "boolean") {
          return String(value);
        } else if (typeof value === "function") {
          return value.toString();
        } else if (typeof value === "object") {
          if (value && value.$$typeof && (value.$$typeof === Symbol.for("react.element") || value.$$typeof === 0xeac7)) {
            if (compPath === "Lightcord.Api.Components.general.Tabs") {
              if (lang === "react") {
                return `React.createElement("div", {style: {
    marginTop: "20px", marginBottom: "20px"
}},
    React.createElement("div", {style: {
        backgroundColor: "var(--background-secondary)",
        padding: "30px 30px",
        borderRadius: "8px"
    }, className: "lc-tab-box-shadow" },
        React.createElement(Lightcord.Api.Components.general.Title, null, "Preview tabs")
    )
)`;
              } else if (lang === "jsx") {
                return `<div style={{
        marginTop: "20px", marginBottom: "20px"
    }}>
        <div style={{
            backgroundColor: "var(--background-secondary)", 
            padding: "30px 30px", 
            borderRadius: "8px"
        }} className="lc-tab-box-shadow">
            <Lightcord.Api.Components.general.Title>Preview tabs</Lightcord.Api.Components.general.Title>
        </div>
    </div>`;
              }
            }

            return "Your components here.";
          }

          return JSON.stringify(value, null, "    ");
        } else if (typeof value === "number") {
          return String(value);
        }

        return String(value);
      };

      let generateCode = function (lang) {
        // code formatting is hard
        const compName = comp.displayName || comp.name;
        let categories = Object.keys(window.Lightcord.Api.Components);
        const compCategory = categories.find(e => window.Lightcord.Api.Components[e][compName]);
        const compPath = `Lightcord.Api.Components.${compCategory}.${compName}`;
        const props = getProps();

        if (lang === "jsx") {
          let propStrings = [];
          let childrenProp = null;
          Object.keys(props).forEach(key => {
            if (key == "children") {
              childrenProp = getStrForProp(props[key], compPath, lang);
            } else {
              let str = key + "=";

              if (typeof props[key] === "string") {
                str += JSON.stringify(props[key]);
              } else {
                str += `{${getStrForProp(props[key], compPath, lang)}}`;
              }

              propStrings.push(str);
            }
          });
          let openTag;

          if (childrenProp) {
            openTag = `<${compPath} ${propStrings.join(" ")}>`;
            let closeTag = `</${compPath}>`;
            return `${openTag}\n    ${childrenProp}\n${closeTag}`;
          } else {
            openTag = `<${compPath} ${propStrings.join(" ")}/>`;
            return openTag;
          }
        } else if (lang === "react") {
          let children = props.children || null;
          delete props.children;

          if (children && children.$$typeof && (children.$$typeof === Symbol.for("react.element") || children.$$typeof === 0xeac7)) {
            children = getStrForProp(children, compPath, lang);
          }

          let propStrings = [];
          Object.keys(props).forEach(key => {
            let visibleKey = /[^\w\d_]/g.test(key) ? JSON.stringify(key) : key;
            let str = visibleKey + ": ";

            if (typeof props[key] === "string") {
              str += JSON.stringify(props[key]);
            } else {
              str += getStrForProp(props[key], compPath, lang).split("\n").map((str, i) => {
                if (i === 0) return str;
                return "    " + str;
              }).join("\n");
            }

            propStrings.push(str);
          });
          let propObject = "{";

          if (propStrings.length) {
            propStrings.forEach((str, i) => {
              let isLast = i === propStrings.length - 1;
              let isFirst = i === 0;

              if (!isFirst) {
                propObject += ",";
              }

              propObject += "\n    ";
              propObject += str;

              if (isLast) {
                propObject += "\n}";
              }
            });
          } else {
            propObject += "}";
          }

          let childrenData = typeof children === "string" && children.startsWith("React.createElement") ? children : JSON.stringify(children);
          return `React.createElement(${compPath}, ${propObject}, ${childrenData})`;
        }
      };

      let help = comp.help || {};
      let info = help.info ? /*#__PURE__*/React.createElement(window.Lightcord.Api.Components.general.AlertBox, {
        type: "info"
      }, help.info) : null;
      let warn = help.warn ? /*#__PURE__*/React.createElement(window.Lightcord.Api.Components.general.AlertBox, {
        type: "warn"
      }, help.warn) : null;
      let danger = help.danger ? /*#__PURE__*/React.createElement(window.Lightcord.Api.Components.general.AlertBox, {
        type: "danger"
      }, help.danger) : null;
      let error = help.error ? /*#__PURE__*/React.createElement(window.Lightcord.Api.Components.general.AlertBox, {
        type: "error"
      }, help.error) : null;
      let success = help.success ? /*#__PURE__*/React.createElement(window.Lightcord.Api.Components.general.AlertBox, {
        type: "success"
      }, help.success) : null;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.Lightcord.Api.Components.general.SettingsTitle, null, comp.displayName || comp.name), info, success, warn, error, danger, AllPreviews.map(category => {
        if (category[0].onClick) return null;
        if (category[0].text) return null;
        if (category[0].children) return null;
        if (category.length === 1) return null;
        let key = Object.keys(category[0])[0];
        return [/*#__PURE__*/React.createElement(window.Lightcord.Api.Components.general.SettingSubTitle, null, key), /*#__PURE__*/React.createElement(window.Lightcord.Api.Components.inputs.Dropdown, {
          options: category.map((e, index) => {
            return {
              value: "opt-" + index,
              label: JSON.stringify(e[Object.keys(e)[0]])
            };
          }),
          value: "opt-" + (state.options[key] || "0"),
          onChange: value => {
            setState({
              options: Object.assign({}, state.options, {
                [key]: (value.value || "0").replace("opt-", "")
              })
            });
          },
          searchable: true
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            marginBottom: "8px"
          }
        })];
      }), /*#__PURE__*/React.createElement(window.Lightcord.Api.Components.general.Tabs, {
        tabs: [{
          label: "Preview",
          id: "preview"
        }, {
          label: "Code",
          id: "code"
        }],
        active: state.tab,
        children: state.tab === "preview" ? renderPreview() : renderCode(),
        onChange: onChange
      }));
    })];
  }

  get renders() {}

}

/***/ }),

/***/ "./src/ui/addoncard.jsx":
/*!******************************!*\
  !*** ./src/ui/addoncard.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_PluginCard; });
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");
/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/utils */ "./src/modules/utils.js");
/* harmony import */ var _modules_domtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/domtools */ "./src/modules/domtools.js");
/* harmony import */ var _xSvg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xSvg */ "./src/ui/xSvg.js");
/* harmony import */ var _reloadIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reloadIcon */ "./src/ui/reloadIcon.js");
/* harmony import */ var _icons_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/edit */ "./src/ui/icons/edit.jsx");
/* harmony import */ var _icons_delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/delete */ "./src/ui/icons/delete.jsx");
/* harmony import */ var _components_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/switch */ "./src/ui/components/switch.jsx");
/* harmony import */ var _tooltipWrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tooltipWrap */ "./src/ui/tooltipWrap.js");
/* harmony import */ var _modules_pluginCertifier__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/pluginCertifier */ "./src/modules/pluginCertifier.js");
/* harmony import */ var _modules_contentManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modules/contentManager */ "./src/modules/contentManager.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_12__);













const React = _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].React;
const anchorClasses = _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].anchorClasses;
class V2C_PluginCard extends _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].reactComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.showSettings = this.showSettings.bind(this);
    this.setInitialState();
    this.hasSettings = this.props.addon.plugin && typeof this.props.addon.plugin.getSettingsPanel === "function";
    this.settingsPanel = "";
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.reload = this.reload.bind(this);
  }

  setInitialState() {
    this.state = {
      checked: this.props.enabled,
      settings: false,
      reloads: 0,
      trusted: false
    };
  }

  showSettings() {
    if (!this.hasSettings) return;
    this.setState({
      settings: true
    });
  }

  closeSettings() {
    this.panelRef.current.innerHTML = "";
    this.setState({
      settingsOpen: false
    });
  }

  componentDidUpdate() {
    if (!this.state.settings) return;

    if (typeof this.settingsPanel === "object") {
      this.refs.settingspanel.appendChild(this.settingsPanel);
    }

    if (!_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-3"]) return;
    setImmediate(() => {
      const isHidden = (container, element) => {
        if (!container) {
          console.error(new Error(`Container is undefined.`));
          return false;
        }

        const cTop = container.scrollTop;
        const cBottom = cTop + container.clientHeight;
        const eTop = element.offsetTop;
        const eBottom = eTop + element.clientHeight;
        return eTop < cTop || eBottom > cBottom;
      };

      const thisNode = this.refs.cardNode;
      const container = thisNode.closest("div[class*=\"contentRegionScroller-\"]");
      if (!isHidden(container, thisNode)) return;
      const thisNodeOffset = _modules_domtools__WEBPACK_IMPORTED_MODULE_3__["default"].offset(thisNode);
      const containerOffset = _modules_domtools__WEBPACK_IMPORTED_MODULE_3__["default"].offset(container);
      const original = container.scrollTop;
      const endPoint = thisNodeOffset.top - containerOffset.top + container.scrollTop - 30;
      _modules_domtools__WEBPACK_IMPORTED_MODULE_3__["default"].animate({
        duration: 300,
        update: function (progress) {
          if (endPoint > original) container.scrollTop = original + progress * (endPoint - original);else container.scrollTop = original - progress * (original - endPoint);
        }
      });
    });
  }

  getString(value) {
    if (!value) return "???";
    return typeof value == "string" ? value : value.toString();
  }

  get settingsComponent() {
    try {
      this.settingsPanel = this.props.addon.plugin.getSettingsPanel();
    } catch (err) {
      _modules_utils__WEBPACK_IMPORTED_MODULE_2__["default"].err("Plugins", "Unable to get settings panel for " + this.name + ".", err);
    }

    return _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement("div", {
      className: "bd-card bd-addon-card settings-open ui-switch-item",
      ref: "cardNode"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement("div", {
      style: {
        "float": "right",
        "cursor": "pointer"
      },
      onClick: () => {
        this.refs.settingspanel.innerHTML = "";
        this.setState({
          settings: false
        });
      }
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement(_xSvg__WEBPACK_IMPORTED_MODULE_4__["default"], null)), typeof this.settingsPanel === "object" && _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement("div", {
      id: `plugin-settings-${this.name}`,
      className: "plugin-settings",
      ref: "settingspanel"
    }), typeof this.settingsPanel !== "object" && _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement("div", {
      id: `plugin-settings-${this.name}`,
      className: "plugin-settings",
      ref: "settingspanel",
      dangerouslySetInnerHTML: {
        __html: this.settingsPanel
      }
    }));
  }

  buildTitle(name, version, author) {
    const title = "{{name}} v{{version}} by {{author}}".split(/({{[A-Za-z]+}})/);
    const nameIndex = title.findIndex(s => s == "{{name}}");
    if (nameIndex) title[nameIndex] = React.createElement("span", {
      className: "name bda-name"
    }, name);
    const versionIndex = title.findIndex(s => s == "{{version}}");
    if (nameIndex) title[versionIndex] = React.createElement("span", {
      className: "version bda-version"
    }, version);
    const authorIndex = title.findIndex(s => s == "{{author}}");

    if (nameIndex) {
      const props = {
        className: "author bda-author"
      };

      if (author.link || author.id) {
        props.className += ` ${anchorClasses.anchor} ${anchorClasses.anchorUnderlineOnHover}`;
        props.target = "_blank";
        if (author.link) props.href = author.link;
        if (author.id) props.onClick = () => {
          _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].LayerStack.popLayer();
          _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].openDM(author.id);
        };
      }

      title[authorIndex] = React.createElement(author.link || author.id ? "a" : "span", props, author.name);
    }

    return title.flat();
  }

  makeLink(title, url) {
    const props = {
      className: "bda-link bda-link-website",
      target: "_blank"
    };
    if (typeof url == "string") props.href = url;
    if (typeof url == "function") props.onClick = event => {
      event.preventDefault();
      event.stopPropagation();
      url();
    };
    return _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement("a", props, title);
  }

  makeButton(title, children, action) {
    return /*#__PURE__*/React.createElement(_tooltipWrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      color: "black",
      side: "top",
      text: title
    }, /*#__PURE__*/React.createElement("div", {
      className: "bd-addon-button",
      onClick: action
    }, children));
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  get links() {
    const links = [];
    const addon = this.props.addon;
    if (addon.website) links.push(this.makeLink("Website", addon.website));
    if (addon.source) links.push(this.makeLink("Source", addon.source));

    if (addon.invite) {
      links.push(this.makeLink("Support Server", () => {
        const tester = /\.gg\/(.*)$/;
        let code = addon.invite;
        if (tester.test(code)) code = code.match(tester)[1];
        _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].LayerStack.popLayer();
        _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].InviteActions.acceptInviteAndTransitionToInviteChannel(code);
      }));
    }

    if (addon.donate) links.push(this.makeLink("Donate", addon.donate));
    if (addon.patreon) links.push(this.makeLink("Patreon", addon.patreon));
    return links;
  }

  get footer() {
    const links = this.links;
    return (links.length || this.hasSettings) && _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement("div", {
      className: "bd-card-footer bda-footer"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement("span", {
      className: "bd-addon-links bda-links"
    }, ...links.map((element, index) => index < links.length - 1 ? [element, " | "] : element).flat()), this.hasSettings && _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement("button", {
      onClick: this.showSettings,
      className: "bd-button bda-settings-button",
      disabled: !this.state.checked
    }, "Settings"));
  }

  onChange() {
    this.props.toggle && this.props.toggle(this.name);
    this.setState({
      checked: !this.state.checked
    });
  }

  edit() {
    this.props.edit(this.name);
  }

  delete() {
    this.props.remove(this.name);
  }

  reload() {
    this.props.reload(this.name);
  }

  get name() {
    return this.getString(this.props.addon.plugin ? this.props.addon.plugin.getName() : this.props.addon.name);
  }

  get author() {
    return this.getString(this.props.addon.plugin ? this.props.addon.plugin.getAuthor() : this.props.addon.author);
  }

  get description() {
    return this.getString(this.props.addon.plugin ? this.props.addon.plugin.getDescription() : this.props.addon.description);
  }

  get version() {
    return this.getString(this.props.addon.plugin ? this.props.addon.plugin.getVersion() : this.props.addon.version);
  }

  render() {
    if (this.state.settings) return this.settingsComponent;
    const {
      authorId,
      authorLink
    } = this.props.addon;
    const style = {};

    if (_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["fork-ps-6"]) {
      if (!this.isScanning) {
        this.isScanning = true;
        Object(_modules_pluginCertifier__WEBPACK_IMPORTED_MODULE_10__["processFile"])(Object(path__WEBPACK_IMPORTED_MODULE_12__["resolve"])(this.props.addon.filename.endsWith(".plugin.js") ? _modules_contentManager__WEBPACK_IMPORTED_MODULE_11__["default"].pluginsFolder : _modules_contentManager__WEBPACK_IMPORTED_MODULE_11__["default"].themesFolder, this.props.addon.filename), result => {
          if (this.unmounted) return;
          this.setState({
            isTrusted: result.suspect ? "suspect" : true
          });
        }, () => {});
      } else {
        if (this.state.isTrusted === true) {
          style.borderColor = "#4087ed";
        }

        if (this.state.isTrusted === "suspect") {
          style.borderColor = "rgb(240, 71, 71)";
        }
      }
    }

    return _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement("div", {
      className: "bd-card bd-addon-card settings-closed ui-switch-item",
      style
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement("div", {
      className: "bd-addon-header bda-header"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement("div", {
      className: "bd-card-title bda-header-title"
    }, this.buildTitle(this.name, this.version, {
      name: this.author,
      id: authorId,
      link: authorLink
    })), _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement("div", {
      className: "bd-addon-controls bda-controls"
    }, this.props.edit && this.makeButton("Edit", /*#__PURE__*/React.createElement(_icons_edit__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "bd-icon"
    }), this.edit), this.props.remove && this.makeButton("Delete", /*#__PURE__*/React.createElement(_icons_delete__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "bd-icon"
    }), this.delete), this.props.reload && this.makeButton("Reload", /*#__PURE__*/React.createElement(_reloadIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "bd-icon"
    }), this.reload), React.createElement(_components_switch__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onChange: this.onChange,
      checked: this.state.checked
    }))), _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement("div", {
      className: "bd-scroller-wrap bda-description-wrap scroller-wrap fade"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement("div", {
      className: "bd-scroller bd-addon-description bda-description scroller"
    }, this.description)), this.footer);
  }

}
const originalRender = V2C_PluginCard.prototype.render;
Object.defineProperty(V2C_PluginCard.prototype, "render", {
  enumerable: false,
  configurable: false,
  set: function () {
    console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins");
  },
  get: () => originalRender
});

/***/ }),

/***/ "./src/ui/addonlist.jsx":
/*!******************************!*\
  !*** ./src/ui/addonlist.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardList; });
/* harmony import */ var _errorBoundary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorBoundary */ "./src/ui/errorBoundary.js");
/* harmony import */ var _contentColumn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentColumn */ "./src/ui/contentColumn.js");
/* harmony import */ var _reloadIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reloadIcon */ "./src/ui/reloadIcon.js");
/* harmony import */ var _addoncard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addoncard */ "./src/ui/addoncard.jsx");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dropdown */ "./src/ui/components/dropdown.jsx");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search */ "./src/ui/components/search.jsx");
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _modules_contentManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/contentManager */ "./src/modules/contentManager.js");
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");
/* harmony import */ var _modules_pluginModule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/pluginModule */ "./src/modules/pluginModule.js");
/* harmony import */ var _modules_themeModule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/themeModule */ "./src/modules/themeModule.js");
/* harmony import */ var _modules_webpackModules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modules/webpackModules */ "./src/modules/webpackModules.js");
/* harmony import */ var _modules_bdApi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modules/bdApi */ "./src/modules/bdApi.js");
/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modules/utils */ "./src/modules/utils.js");
/* harmony import */ var _tooltipWrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tooltipWrap */ "./src/ui/tooltipWrap.js");
/* harmony import */ var _modules_bdEvents__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modules/bdEvents */ "./src/modules/bdEvents.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

















const Tooltip = _modules_webpackModules__WEBPACK_IMPORTED_MODULE_11__["default"].findByDisplayName("Tooltip");
const React = _modules_v2__WEBPACK_IMPORTED_MODULE_8__["default"].react;
class CardList extends _modules_v2__WEBPACK_IMPORTED_MODULE_8__["default"].reactComponent {
  constructor(props) {
    super(props);
    this.state = {
      sort: "name",
      ascending: true,
      query: ""
    };
    this.isPlugins = this.props.type == "plugins";
    this.cookie = this.isPlugins ? _0globals__WEBPACK_IMPORTED_MODULE_6__["pluginCookie"] : _0globals__WEBPACK_IMPORTED_MODULE_6__["themeCookie"];
    this.manager = this.isPlugins ? _modules_pluginModule__WEBPACK_IMPORTED_MODULE_9__["default"] : _modules_themeModule__WEBPACK_IMPORTED_MODULE_10__["default"];
    this.sort = this.sort.bind(this);
    this.reverse = this.reverse.bind(this);
    this.search = this.search.bind(this);

    this.onAddonChanges = function () {
      this.forceUpdate();
    };

    this.onAddonChanges = this.onAddonChanges.bind(this);
  }

  componentDidMount() {
    const type = (this.isPlugins ? "plugin" : "theme") + "-";
    _modules_bdEvents__WEBPACK_IMPORTED_MODULE_15__["default"].on(`${type}loaded`, this.onAddonChanges);
    _modules_bdEvents__WEBPACK_IMPORTED_MODULE_15__["default"].on(`${type}unloaded`, this.onAddonChanges);
    _modules_bdEvents__WEBPACK_IMPORTED_MODULE_15__["default"].on(`${type}reloaded`, this.onAddonChanges);
  }

  componentWillUnmount() {
    const type = (this.isPlugins ? "plugin" : "theme") + "-";
    _modules_bdEvents__WEBPACK_IMPORTED_MODULE_15__["default"].off(`${type}loaded`, this.onAddonChanges);
    _modules_bdEvents__WEBPACK_IMPORTED_MODULE_15__["default"].off(`${type}unloaded`, this.onAddonChanges);
    _modules_bdEvents__WEBPACK_IMPORTED_MODULE_15__["default"].off(`${type}reloaded`, this.onAddonChanges);
  }

  openFolder() {
    const shell = __webpack_require__(/*! electron */ "electron").shell;

    const open = shell.openPath || shell.openItem;
    open(this.isPlugins ? _modules_contentManager__WEBPACK_IMPORTED_MODULE_7__["default"].pluginsFolder : _modules_contentManager__WEBPACK_IMPORTED_MODULE_7__["default"].themesFolder);
  }

  edit(name) {
    console.log(name);
    this.manager.edit(name);
  }

  async delete(name) {
    const shouldDelete = await this.confirmDelete(name);
    if (!shouldDelete) return;
    this.manager.delete(name);
  }

  confirmDelete(name) {
    return new Promise(resolve => {
      _modules_bdApi__WEBPACK_IMPORTED_MODULE_12__["default"].showConfirmationModal("Are You Sure?", `Are you sure you want to delete ${name}?`, {
        danger: true,
        confirmText: "Delete",
        onConfirm: () => {
          resolve(true);
        },
        onCancel: () => {
          resolve(false);
        }
      });
    });
  }

  get sortOptions() {
    return [{
      label: "Name",
      value: "name"
    }, {
      label: "Author",
      value: "author"
    }, {
      label: "Version",
      value: "version"
    }, {
      label: "Recently Added",
      value: "added"
    }, {
      label: "Last Modified",
      value: "modified"
    }, {
      label: "File Size",
      value: "size"
    }];
  }

  get directions() {
    return [{
      label: "Ascending",
      value: true
    }, {
      label: "Descending",
      value: false
    }];
  }

  reverse(value) {
    this.setState({
      ascending: value
    });
  }

  sort(value) {
    this.setState({
      sort: value
    });
  }

  search(event) {
    this.setState({
      query: event.target.value.toLocaleLowerCase()
    });
  }

  getProps(addon) {
    return {
      key: this.getName(addon),
      enabled: this.cookie[this.getName(addon)],
      toggle: this.manager.toggle.bind(this.manager),
      edit: _0globals__WEBPACK_IMPORTED_MODULE_6__["settingsCookie"]["fork-ps-7"] ? this.edit.bind(this) : null,
      remove: this.delete.bind(this),
      addon: addon,
      hash: addon.hash
    };
  }

  getString(value) {
    if (!value) return "???";
    return typeof value == "string" ? value : value.toString();
  }

  get list() {
    return this.props.type === "plugins" ? Object.values(_0globals__WEBPACK_IMPORTED_MODULE_6__["bdplugins"]) : Object.values(_0globals__WEBPACK_IMPORTED_MODULE_6__["bdthemes"]);
  }

  getAddons() {
    const sortedAddons = this.list.sort((a, b) => {
      const cap = this.state.sort.charAt(0).toUpperCase() + this.state.sort.slice(1);
      const first = a.plugin && a.plugin[`get${cap}`] ? this.getString(a.plugin[`get${cap}`]()) : a[this.state.sort];
      const second = b.plugin && b.plugin[`get${cap}`] ? this.getString(b.plugin[`get${cap}`]()) : b[this.state.sort];
      if (typeof first == "string") return first.toLocaleLowerCase().localeCompare(second.toLocaleLowerCase());
      if (first > second) return 1;
      if (second > first) return -1;
      return 0;
    });
    if (!this.state.ascending) sortedAddons.reverse();
    const rendered = [];

    for (let a = 0; a < sortedAddons.length; a++) {
      const addon = sortedAddons[a];

      if (this.state.query) {
        let matches = null;
        const name = this.getName(addon);
        const author = this.getAuthor(addon);
        const description = this.getDescription(addon);
        const version = this.getVersion(addon);
        if (name) matches = name.toLocaleLowerCase().includes(this.state.query);
        if (author) matches = matches || author.toLocaleLowerCase().includes(this.state.query);
        if (description) matches = matches || description.toLocaleLowerCase().includes(this.state.query);
        if (version) matches = matches || version.toLocaleLowerCase().includes(this.state.query);
        if (!matches) continue;
      }

      const props = this.getProps(addon);
      rendered.push( /*#__PURE__*/React.createElement(_errorBoundary__WEBPACK_IMPORTED_MODULE_0__["default"], null, /*#__PURE__*/React.createElement(_addoncard__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
        reload: !_0globals__WEBPACK_IMPORTED_MODULE_6__["settingsCookie"]["fork-ps-5"] && this.manager.reload.bind(this.manager)
      }))));
    }

    return rendered;
  }

  getName(addon) {
    return this.getString(addon.plugin ? addon.plugin.getName() : addon.name);
  }

  getAuthor(addon) {
    return this.getString(addon.plugin ? addon.plugin.getAuthor() : addon.author);
  }

  getDescription(addon) {
    return this.getString(addon.plugin ? addon.plugin.getDescription() : addon.description);
  }

  getVersion(addon) {
    return this.getString(addon.plugin ? addon.plugin.getVersion() : addon.version);
  }

  renderCheckUpdates() {
    if (!window.ZeresPluginLibrary) return null;
    if (!window.PluginUpdates) return null;
    if (typeof window.PluginUpdates.checkAll !== "function") return null;
    if (!this.isPlugins) return null;
    return /*#__PURE__*/React.createElement(_tooltipWrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
      text: "Checks for updates of plugins that support this feature. Right-click for a list."
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "10px"
      }
    }, /*#__PURE__*/React.createElement(Lightcord.Api.Components.inputs.Button, {
      color: "brand",
      look: "filled",
      size: "min",
      hoverColor: "default",
      onClick: () => {
        try {
          _modules_utils__WEBPACK_IMPORTED_MODULE_13__["default"].showToast("Plugin update check in progress.", {
            type: "info"
          });
          window.PluginUpdates.checkAll().then(() => {
            _modules_utils__WEBPACK_IMPORTED_MODULE_13__["default"].showToast("Plugin update check complete.", {
              type: "success"
            });
          }).catch(err => {
            console.error(err);
            _modules_utils__WEBPACK_IMPORTED_MODULE_13__["default"].showToast("An error occured while checking update.", {
              type: "error"
            });
          });
        } catch (e) {
          console.error(e);
          _modules_utils__WEBPACK_IMPORTED_MODULE_13__["default"].showToast("An error occured while checking update.", {
            type: "error"
          });
        }
      },
      wrapper: false,
      disabled: false
    }, "Check for Updates")));
  }

  render() {
    const refreshIcon = /*#__PURE__*/React.createElement(Tooltip, {
      color: "black",
      position: "top",
      text: "Reload List"
    }, props => /*#__PURE__*/React.createElement(_reloadIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
      className: "bd-icon bd-reload bd-reload-header",
      size: "18px",
      onClick: async () => {
        if (this.isPlugins) _modules_pluginModule__WEBPACK_IMPORTED_MODULE_9__["default"].updatePluginList();else _modules_themeModule__WEBPACK_IMPORTED_MODULE_10__["default"].updateThemeList();
        this.forceUpdate();
      }
    })));
    const addonCards = this.getAddons();
    return /*#__PURE__*/React.createElement(_contentColumn__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: `${this.props.type.toUpperCase()}—${addonCards.length}`
    }, /*#__PURE__*/React.createElement("button", {
      key: "folder-button",
      className: "bd-button bd-pfbtn",
      onClick: this.openFolder.bind(this)
    }, "Open ", this.isPlugins ? "Plugin" : "Theme", " Folder"), this.renderCheckUpdates(), !_0globals__WEBPACK_IMPORTED_MODULE_6__["settingsCookie"]["fork-ps-5"] && refreshIcon, /*#__PURE__*/React.createElement("div", {
      className: "bd-controls bd-addon-controls"
    }, /*#__PURE__*/React.createElement(_components_search__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onChange: this.search,
      placeholder: `Search ${this.props.type}...`
    }), /*#__PURE__*/React.createElement("div", {
      className: "bd-addon-dropdowns"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bd-select-wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "bd-label"
    }, "Sort by:"), /*#__PURE__*/React.createElement(_components_dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
      options: this.sortOptions,
      onChange: this.sort,
      style: "transparent"
    })), /*#__PURE__*/React.createElement("div", {
      className: "bd-select-wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "bd-label"
    }, "Order:"), /*#__PURE__*/React.createElement(_components_dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
      options: this.directions,
      onChange: this.reverse,
      style: "transparent"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "bda-slist bd-addon-list"
    }, addonCards));
  }

}
const originalRender = CardList.prototype.render;
Object.defineProperty(CardList.prototype, "render", {
  enumerable: false,
  configurable: false,
  set: function () {
    console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins");
  },
  get: () => originalRender
});

/***/ }),

/***/ "./src/ui/bdLogo.js":
/*!**************************!*\
  !*** ./src/ui/bdLogo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BDLogo; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");

class BDLogo extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  render() {
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("svg", {
      height: "100%",
      width: this.props.size || "16px",
      className: "bd-logo " + this.props.className,
      style: {
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      viewBox: "0 0 2000 2000"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("metadata", null), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("defs", null, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("filter", {
      id: "shadow1"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("feDropShadow", {
      "dx": "20",
      "dy": "0",
      "stdDeviation": "20",
      "flood-color": "rgba(0,0,0,0.35)"
    })), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("filter", {
      id: "shadow2"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("feDropShadow", {
      "dx": "15",
      "dy": "0",
      "stdDeviation": "20",
      "flood-color": "rgba(255,255,255,0.15)"
    })), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("filter", {
      id: "shadow3"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("feDropShadow", {
      "dx": "10",
      "dy": "0",
      "stdDeviation": "20",
      "flood-color": "rgba(0,0,0,0.35)"
    }))), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("g", null, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("path", {
      style: {
        filter: "url(#shadow3)"
      },
      d: "M1195.44+135.442L1195.44+135.442L997.6+136.442C1024.2+149.742+1170.34+163.542+1193.64+179.742C1264.34+228.842+1319.74+291.242+1358.24+365.042C1398.14+441.642+1419.74+530.642+1422.54+629.642L1422.54+630.842L1422.54+632.042C1422.54+773.142+1422.54+1228.14+1422.54+1369.14L1422.54+1370.34L1422.54+1371.54C1419.84+1470.54+1398.24+1559.54+1358.24+1636.14C1319.74+1709.94+1264.44+1772.34+1193.64+1821.44C1171.04+1837.14+1025.7+1850.54+1000+1863.54L1193.54+1864.54C1539.74+1866.44+1864.54+1693.34+1864.54+1296.64L1864.54+716.942C1866.44+312.442+1541.64+135.442+1195.44+135.442Z",
      fill: "#171717",
      opacity: "1"
    }), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("path", {
      style: {
        filter: "url(#shadow2)"
      },
      d: "M1695.54+631.442C1685.84+278.042+1409.34+135.442+1052.94+135.442L361.74+136.442L803.74+490.442L1060.74+490.442C1335.24+490.442+1335.24+835.342+1060.74+835.342L1060.74+1164.84C1150.22+1164.84+1210.53+1201.48+1241.68+1250.87C1306.07+1353+1245.76+1509.64+1060.74+1509.64L361.74+1863.54L1052.94+1864.54C1409.24+1864.54+1685.74+1721.94+1695.54+1368.54C1695.54+1205.94+1651.04+1084.44+1572.64+999.942C1651.04+915.542+1695.54+794.042+1695.54+631.442Z",
      fill: "#3E82E5",
      opacity: "1"
    }), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("path", {
      style: {
        filter: "url(#shadow1)"
      },
      d: "M1469.25+631.442C1459.55+278.042+1183.05+135.442+826.65+135.442L135.45+135.442L135.45+1004C135.45+1004+135.427+1255.21+355.626+1255.21C575.825+1255.21+575.848+1004+575.848+1004L577.45+490.442L834.45+490.442C1108.95+490.442+1108.95+835.342+834.45+835.342L664.65+835.342L664.65+1164.84L834.45+1164.84C923.932+1164.84+984.244+1201.48+1015.39+1250.87C1079.78+1353+1019.47+1509.64+834.45+1509.64L135.45+1509.64L135.45+1864.54L826.65+1864.54C1182.95+1864.54+1459.45+1721.94+1469.25+1368.54C1469.25+1205.94+1424.75+1084.44+1346.35+999.942C1424.75+915.542+1469.25+794.042+1469.25+631.442Z",
      fill: "#FFFFFF",
      opacity: "1"
    })));
  }

}

/***/ }),

/***/ "./src/ui/checkbox.js":
/*!****************************!*\
  !*** ./src/ui/checkbox.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_Checkbox; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");

class V2C_Checkbox extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.setInitialState();
  }

  setInitialState() {
    this.state = {
      checked: this.props.checked || false
    };
  }

  render() {
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("li", null, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "checkbox " + BDModules.get(e => e.checkboxElement)[0].checkbox,
      onClick: this.onClick
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "checkbox-inner " + BDModules.get(e => e.checkboxInner)[0].checkboxInner
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("input", {
      className: BDModules.get(e => e.checkboxElement)[0].checkboxElement,
      checked: this.state.checked,
      onChange: () => {},
      type: "checkbox"
    }), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("span", null)), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("span", null, this.props.text)));
  }

  onClick() {
    this.props.onChange(this.props.id, !this.state.checked);
    this.setState({
      checked: !this.state.checked
    });
  }

}

/***/ }),

/***/ "./src/ui/components/dropdown.jsx":
/*!****************************************!*\
  !*** ./src/ui/components/dropdown.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Select; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/v2 */ "./src/modules/v2.js");
/* harmony import */ var _icons_downarrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/downarrow */ "./src/ui/icons/downarrow.jsx");


const React = _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].React;
class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: this.props.value || this.props.options[0].value
    };
    this.dropdown = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({
      open: true
    }, () => {
      document.addEventListener("click", this.hideMenu);
    });
  }

  hideMenu() {
    this.setState({
      open: false
    }, () => {
      document.removeEventListener("click", this.hideMenu);
    });
  }

  onChange(value) {
    this.setState({
      value
    });
    if (this.props.onChange) this.props.onChange(value);
  }

  get selected() {
    return this.props.options.find(o => o.value == this.state.value);
  }

  get options() {
    const selected = this.selected;
    return /*#__PURE__*/React.createElement("div", {
      className: "bd-select-options"
    }, this.props.options.map(opt => /*#__PURE__*/React.createElement("div", {
      className: `bd-select-option${selected.value == opt.value ? " selected" : ""}`,
      onClick: this.onChange.bind(this, opt.value)
    }, opt.label)));
  }

  render() {
    const style = this.props.style == "transparent" ? " bd-select-transparent" : "";
    const isOpen = this.state.open ? " menu-open" : "";
    return /*#__PURE__*/React.createElement("div", {
      className: `bd-select${style}${isOpen}`,
      onClick: this.showMenu,
      ref: this.dropdown
    }, /*#__PURE__*/React.createElement("div", {
      className: "bd-select-value"
    }, this.selected.label), /*#__PURE__*/React.createElement(_icons_downarrow__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "bd-select-arrow"
    }), this.state.open && this.options);
  }

} // return <div className="bd-select-wrap">
// <label className="bd-label">{this.props.label}</label>
// <div className={`bd-select${style}${isOpen}`} onClick={this.showMenu} ref={this.dropdown}>
//     <div className="bd-select-controls">
//         <div className="bd-select-value">{this.selected.label}</div>
//         <Arrow className="bd-select-arrow" />
//     </div>
// </div>
// {this.state.open && this.options}
// </div>;

/***/ }),

/***/ "./src/ui/components/search.jsx":
/*!**************************************!*\
  !*** ./src/ui/components/search.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/v2 */ "./src/modules/v2.js");
/* harmony import */ var _icons_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/search */ "./src/ui/icons/search.jsx");


const React = _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].React;
class Search extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "bd-search-wrapper"
    }, /*#__PURE__*/React.createElement("input", {
      onChange: this.props.onChange,
      onKeyDown: this.props.onKeyDown,
      type: "text",
      className: "bd-search",
      placeholder: this.props.placeholder,
      maxLength: "50"
    }), /*#__PURE__*/React.createElement(_icons_search__WEBPACK_IMPORTED_MODULE_1__["default"], null));
  }

}

/***/ }),

/***/ "./src/ui/components/switch.jsx":
/*!**************************************!*\
  !*** ./src/ui/components/switch.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Switch; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/v2 */ "./src/modules/v2.js");

const React = _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].React;
class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    if (this.props.disabled) return;
    this.props.onChange(value);
    this.setState({
      checked: value
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(Lightcord.Api.Components.inputs.Switch, {
      onChange: this.onChange,
      value: this.state.checked
    });
  }

}

/***/ }),

/***/ "./src/ui/contentColumn.js":
/*!*********************************!*\
  !*** ./src/ui/contentColumn.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_ContentColumn; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");

class V2C_ContentColumn extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  constructor(props) {
    super(props);
  }

  static get displayName() {
    return "ContentColumn";
  }

  render() {
    //let contentModule = BDModules.get(e => e.contentColumn)[0]
    let title = this.props.title ? _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("h2", {
      className: "ui-form-title h2 margin-reset margin-bottom-20"
    }, this.props.title) : null;
    return [title, this.props.children];
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: contentModule.contentColumn + " " + contentModule.contentColumnDefault + " content-column default",
      style: {
        padding: "60px 40px 0px"
      }
    }, title, this.props.children);
  }

}

/***/ }),

/***/ "./src/ui/cssEditor.js":
/*!*****************************!*\
  !*** ./src/ui/cssEditor.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_CssEditor; });
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _modules_settingsPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/settingsPanel */ "./src/modules/settingsPanel.js");
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");
/* harmony import */ var _modules_dataStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/dataStore */ "./src/modules/dataStore.js");
/* harmony import */ var _modules_domtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/domtools */ "./src/modules/domtools.js");
/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/utils */ "./src/modules/utils.js");
/* harmony import */ var _settingsTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settingsTitle */ "./src/ui/settingsTitle.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkbox */ "./src/ui/checkbox.js");
/* harmony import */ var _cssEditorDetached__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cssEditorDetached */ "./src/ui/cssEditorDetached.js");









class V2C_CssEditor extends _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].reactComponent {
  constructor(props) {
    super(props);
    const self = this;
    self.props.lines = 0;
    self.setInitialState();
    self.attach = self.attach.bind(self);
    self.detachedEditor = _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement(_cssEditorDetached__WEBPACK_IMPORTED_MODULE_8__["default"], {
      attach: self.attach
    });
    self.onClick = self.onClick.bind(self);
    self.updateCss = self.updateCss.bind(self);
    self.saveCss = self.saveCss.bind(self);
    self.detach = self.detach.bind(self);
  }

  setInitialState() {
    this.state = {
      detached: this.props.detached || _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].editorDetached
    };
  }

  componentDidMount() {
    // this.updateLineCount();
    this.editor = ace.edit("bd-customcss-editor");
    this.editor.setTheme("ace/theme/monokai");
    this.editor.session.setMode("ace/mode/css");
    this.editor.setShowPrintMargin(false);
    this.editor.setFontSize(14);
    this.editor.on("change", () => {
      if (!_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-css-0"]) return;
      this.saveCss();
      this.updateCss();
    });
  }

  componentWillUnmount() {
    this.editor.destroy();
  }

  componentDidUpdate(prevProps, prevState) {
    const self = this;

    if (prevState.detached && !self.state.detached) {
      _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].reactDom.unmountComponentAtNode(self.detachedRoot);
    }
  }

  codeMirror() {}

  get options() {
    return {
      lineNumbers: true,
      mode: "css",
      indentUnit: 4,
      theme: "material",
      scrollbarStyle: "simple"
    };
  }

  get css() {
    const _ccss = _modules_dataStore__WEBPACK_IMPORTED_MODULE_3__["default"].getBDData("bdcustomcss");

    let ccss = "";

    if (_ccss && _ccss !== "") {
      ccss = atob(_ccss);
    }

    return ccss;
  }

  updateLineCount() {
    const lineCount = this.refs.editor.value.split("\n").length;
    if (lineCount == this.props.lines) return;
    this.refs.lines.textContent = Array.from(new Array(lineCount), (_, i) => i + 1).join(".\n") + ".";
    this.props.lines = lineCount;
  }

  render() {
    const self = this;
    const {
      detached
    } = self.state;
    return [detached && _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("div", {
      id: "editor-detached"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement(_settingsTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
      text: "Custom CSS Editor"
    }), _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("h3", null, "Editor Detached"), _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("button", {
      className: "btn btn-primary",
      onClick: () => {
        self.attach();
      }
    }, "Attach")), !detached && _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("div", null, _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement(_settingsTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
      text: "Custom CSS Editor"
    }), _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("div", {
      className: "editor-wrapper"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("div", {
      id: "bd-customcss-editor",
      className: "editor",
      ref: "editor"
    }, self.css)), _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("div", {
      id: "bd-customcss-attach-controls"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("ul", {
      className: "checkbox-group"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement(_checkbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "live-update",
      text: "Live Update",
      onChange: this.onChange,
      checked: _0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-css-0"]
    })), _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("div", {
      id: "bd-customcss-detach-controls-button"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("button", {
      style: {
        borderRadius: "3px 0 0 3px",
        borderRight: "1px solid #3f4146"
      },
      className: "btn btn-primary",
      onClick: () => {
        self.onClick("update");
      }
    }, "Update"), _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("button", {
      style: {
        borderRadius: "0",
        borderLeft: "1px solid #2d2d2d",
        borderRight: "1px solid #2d2d2d"
      },
      className: "btn btn-primary",
      onClick: () => {
        self.onClick("save");
      }
    }, "Save"), _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("button", {
      style: {
        borderRadius: "0 3px 3px 0",
        borderLeft: "1px solid #3f4146"
      },
      className: "btn btn-primary",
      onClick: () => {
        self.onClick("detach");
      }
    }, "Detach"), _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("span", {
      style: {
        fontSize: "10px",
        marginLeft: "5px"
      }
    }, "Unsaved changes are lost on detach"), _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("div", {
      className: "help-text"
    }, "Press ", _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("code", {
      className: "inline"
    }, "ctrl"), "+", _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("span", {
      className: "inline"
    }, ","), " with the editor focused to access the editor's settings."))))];
  }

  onClick(arg) {
    const self = this;

    switch (arg) {
      case "update":
        self.updateCss();
        break;

      case "save":
        self.saveCss();
        break;

      case "detach":
        self.detach();
        break;
    }
  }

  onChange(id, checked) {
    switch (id) {
      case "live-update":
        _0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-css-0"] = checked;
        _modules_settingsPanel__WEBPACK_IMPORTED_MODULE_1__["default"].saveSettings();
        break;
    }
  }

  updateCss() {
    _modules_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].removeStyle("customcss");
    _modules_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].addStyle("customcss", this.editor.session.getValue());
  }

  saveCss() {
    _modules_dataStore__WEBPACK_IMPORTED_MODULE_3__["default"].setBDData("bdcustomcss", btoa(this.editor.session.getValue()));
  }

  detach() {
    const self = this;
    self.setState({
      detached: true
    });
    const droot = self.detachedRoot;

    if (!droot) {
      console.log("FAILED TO INJECT ROOT: .app");
      return;
    }

    _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].reactDom.render(self.detachedEditor, droot);
  }

  get detachedRoot() {
    const _root = _modules_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].query("#bd-customcss-detach-container");

    if (!_root) {
      if (!this.injectDetachedRoot()) return null;
      return this.detachedRoot;
    }

    return _root;
  }

  injectDetachedRoot() {
    const app = _modules_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].query(".app, ." + _modules_utils__WEBPACK_IMPORTED_MODULE_5__["default"].removeDa(BDModules.get(e => e.app && e.layers)[0].app));
    if (!app) return false;
    _modules_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].insertAfter(_modules_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].createElement(`<div id="bd-customcss-detach-container">`), app);
    return true;
  }

  attach() {
    const self = this;
    self.setState({
      detached: false
    });
  }

}

/***/ }),

/***/ "./src/ui/cssEditorDetached.js":
/*!*************************************!*\
  !*** ./src/ui/cssEditorDetached.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_CssEditorDetached; });
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _modules_settingsPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/settingsPanel */ "./src/modules/settingsPanel.js");
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");
/* harmony import */ var _modules_dataStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/dataStore */ "./src/modules/dataStore.js");
/* harmony import */ var _modules_domtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/domtools */ "./src/modules/domtools.js");
/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/utils */ "./src/modules/utils.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox */ "./src/ui/checkbox.js");







class V2C_CssEditorDetached extends _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].reactComponent {
  constructor(props) {
    super(props);
    const self = this;
    self.onClick = self.onClick.bind(self);
    self.updateCss = self.updateCss.bind(self);
    self.saveCss = self.saveCss.bind(self);
    self.onChange = self.onChange.bind(self);
  }

  componentDidMount() {
    _modules_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].addClass(_modules_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].query("#app-mount"), "bd-detached-editor");
    _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].editorDetached = true; // this.updateLineCount();

    this.editor = ace.edit("bd-customcss-editor-detached");
    this.editor.setTheme("ace/theme/monokai");
    this.editor.session.setMode("ace/mode/css");
    this.editor.setShowPrintMargin(false);
    this.editor.setFontSize(14);
    this.editor.on("change", () => {
      if (!_0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-css-0"]) return;
      this.saveCss();
      this.updateCss();
    });
  }

  componentWillUnmount() {
    _modules_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].removeClass(_modules_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].query("#app-mount"), "bd-detached-editor");
    _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].editorDetached = false;
    this.editor.destroy();
  }

  updateLineCount() {
    const lineCount = this.refs.editor.value.split("\n").length;
    if (lineCount == this.props.lines) return;
    this.refs.lines.textContent = Array.from(new Array(lineCount), (_, i) => i + 1).join(".\n") + ".";
    this.props.lines = lineCount;
  }

  get options() {
    return {
      lineNumbers: true,
      mode: "css",
      indentUnit: 4,
      theme: "material",
      scrollbarStyle: "simple"
    };
  }

  get css() {
    const _ccss = _modules_dataStore__WEBPACK_IMPORTED_MODULE_3__["default"].getBDData("bdcustomcss");

    let ccss = "";

    if (_ccss && _ccss !== "") {
      ccss = atob(_ccss);
    }

    return ccss;
  }

  get root() {
    const _root = _modules_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].query("#bd-customcss-detach-container");

    if (!_root) {
      if (!this.injectRoot()) return null;
      return this.detachedRoot;
    }

    return _root;
  }

  injectRoot() {
    const app = _modules_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].query(".app, ." + _modules_utils__WEBPACK_IMPORTED_MODULE_5__["default"].removeDa(BDModules.get(e => e.app && e.layers)[0].app));
    if (!app) return false;
    _modules_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].insertAfter(_modules_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].createElement(`<div id="bd-customcss-detach-container">`), app);
    return true;
  }

  render() {
    const self = this;
    return _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("div", {
      className: "bd-detached-css-editor",
      id: "bd-customcss-detach-editor"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("div", {
      id: "bd-customcss-innerpane"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("div", {
      className: "editor-wrapper"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("div", {
      id: "bd-customcss-editor-detached",
      className: "editor",
      ref: "editor"
    }, self.css)), _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("div", {
      id: "bd-customcss-attach-controls"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("ul", {
      className: "checkbox-group"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement(_checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "live-update",
      text: "Live Update",
      onChange: self.onChange,
      checked: _0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-css-0"]
    })), _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("div", {
      id: "bd-customcss-detach-controls-button"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("button", {
      style: {
        borderRadius: "3px 0 0 3px",
        borderRight: "1px solid #3f4146"
      },
      className: "btn btn-primary",
      onClick: () => {
        self.onClick("update");
      }
    }, "Update"), _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("button", {
      style: {
        borderRadius: "0",
        borderLeft: "1px solid #2d2d2d",
        borderRight: "1px solid #2d2d2d"
      },
      className: "btn btn-primary",
      onClick: () => {
        self.onClick("save");
      }
    }, "Save"), _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("button", {
      style: {
        borderRadius: "0 3px 3px 0",
        borderLeft: "1px solid #3f4146"
      },
      className: "btn btn-primary",
      onClick: () => {
        self.onClick("attach");
      }
    }, "Attach"), _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement("span", {
      style: {
        fontSize: "10px",
        marginLeft: "5px"
      }
    }, "Unsaved changes are lost on attach")))));
  }

  onChange(id, checked) {
    switch (id) {
      case "live-update":
        _0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"]["bda-css-0"] = checked;
        _modules_settingsPanel__WEBPACK_IMPORTED_MODULE_1__["default"].saveSettings();
        break;
    }
  }

  onClick(id) {
    const self = this;

    switch (id) {
      case "attach":
        if (_modules_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].query("#editor-detached")) self.props.attach();
        _modules_v2__WEBPACK_IMPORTED_MODULE_2__["default"].reactDom.unmountComponentAtNode(self.root);
        self.root.remove();
        break;

      case "update":
        self.updateCss();
        break;

      case "save":
        self.saveCss();
        break;
    }
  }

  updateCss() {
    _modules_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].removeStyle("customcss");
    _modules_domtools__WEBPACK_IMPORTED_MODULE_4__["default"].addStyle("customcss", this.editor.session.getValue());
  }

  saveCss() {
    _modules_dataStore__WEBPACK_IMPORTED_MODULE_3__["default"].setBDData("bdcustomcss", btoa(this.editor.session.getValue()));
  }

}

/***/ }),

/***/ "./src/ui/errorBoundary.js":
/*!*********************************!*\
  !*** ./src/ui/errorBoundary.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BDErrorBoundary; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");

class BDErrorBoundary extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "react-error"
    }, "Component Error");
    return this.props.children;
  }

}
const originalRender = BDErrorBoundary.prototype.render;
Object.defineProperty(BDErrorBoundary.prototype, "render", {
  enumerable: false,
  configurable: false,
  set: function () {
    console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins");
  },
  get: () => originalRender
});

/***/ }),

/***/ "./src/ui/icons/delete.jsx":
/*!*********************************!*\
  !*** ./src/ui/icons/delete.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Delete; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/v2 */ "./src/modules/v2.js");

const React = _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].React;
class Delete extends React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/React.createElement("svg", {
      className: this.props.className || "",
      fill: "var(--text-normal)",
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0V0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/downarrow.jsx":
/*!************************************!*\
  !*** ./src/ui/icons/downarrow.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DownArrow; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/v2 */ "./src/modules/v2.js");

const React = _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].React;
class DownArrow extends React.Component {
  render() {
    const size = this.props.size || "16px";
    return /*#__PURE__*/React.createElement("svg", {
      className: this.props.className || "",
      fill: "var(--text-normal)",
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/edit.jsx":
/*!*******************************!*\
  !*** ./src/ui/icons/edit.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/v2 */ "./src/modules/v2.js");

const React = _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].React;
class Edit extends React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/React.createElement("svg", {
      className: this.props.className || "",
      viewBox: "0 0 24 24",
      fill: "var(--text-normal)",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/history.jsx":
/*!**********************************!*\
  !*** ./src/ui/icons/history.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return History; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/v2 */ "./src/modules/v2.js");
{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px">
     <path d="M0 0h24v24H0z" fill="none"/>
     <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
  </svg> */
}

const React = _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].React;
class History extends React.Component {
  render() {
    const size = this.props.size || "18px";
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "var(--text-normal)",
      className: this.props.className || "",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/search.jsx":
/*!*********************************!*\
  !*** ./src/ui/icons/search.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/v2 */ "./src/modules/v2.js");

const React = _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].React;
class Search extends React.Component {
  render() {
    const size = this.props.size || "16px";
    return /*#__PURE__*/React.createElement("svg", {
      className: this.props.className || "",
      fill: "var(--text-normal)",
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0V0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/margintop.jsx":
/*!******************************!*\
  !*** ./src/ui/margintop.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MarginTop; });
let marginModule = BDModules.get(e => e.marginTop60)[0];
class MarginTop extends React.Component {
  render() {
    if (!marginModule) marginModule = BDModules.get(e => e.marginTop60)[0];
    return /*#__PURE__*/React.createElement("div", {
      className: marginModule.marginTop60
    });
  }

}

/***/ }),

/***/ "./src/ui/presenceSettings.jsx":
/*!*************************************!*\
  !*** ./src/ui/presenceSettings.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_PresenceSettings; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");
/* harmony import */ var _settingsTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settingsTitle */ "./src/ui/settingsTitle.js");
/* harmony import */ var _settingsGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settingsGroup */ "./src/ui/settingsGroup.js");
/* harmony import */ var _modules_dataStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/dataStore */ "./src/modules/dataStore.js");
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _modules_CustomRichPresence__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/CustomRichPresence */ "./src/modules/CustomRichPresence.js");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _margintop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./margintop */ "./src/ui/margintop.jsx");
/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/utils */ "./src/modules/utils.js");









const React = _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].React;
let V2C_PresenceSettingsModules;
class V2C_PresenceSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: _modules_dataStore__WEBPACK_IMPORTED_MODULE_3__["default"].getSettingGroup("rpc") || _0globals__WEBPACK_IMPORTED_MODULE_4__["defaultRPC"],
      assets: []
    };
    this.preview = null;
    this.isfetching = false;

    if (this.state.data.application_id) {
      this.fetchAssets();
    }

    this.assetComponents = new Set();
  }

  updateWhenFetched(comp) {
    this.assetComponents.add(comp);
  }
  /**
   * 
   * @param {InputText} setting 
   */


  onChange(setting, value) {
    let defaultSetting = RPCProps.find(e => e.id === setting.props.id);
    this.setState({
      data: Object.assign(_0globals__WEBPACK_IMPORTED_MODULE_4__["settingsRPC"], this.state.data, {
        [defaultSetting.id]: !!value ? value : null
      }),
      assets: this.state.assets
    });

    if (setting.props.id === "application_id") {
      this.fetchAssets();
    }

    _modules_dataStore__WEBPACK_IMPORTED_MODULE_3__["default"].setSettingGroup("rpc", _0globals__WEBPACK_IMPORTED_MODULE_4__["settingsRPC"]);
    this.preview.forceUpdate();
    _modules_CustomRichPresence__WEBPACK_IMPORTED_MODULE_5__["default"].set(_0globals__WEBPACK_IMPORTED_MODULE_4__["settingsRPC"]);
  }

  fetchAssets() {
    if (this.isfetching === true) {
      let app = this.state.data.application_id;
      setTimeout(() => {
        if (this.state.data.application_id !== app) {
          return;
        }

        this.fetchAssets();
      }, 5000);
    }

    if (!this.state.data.application_id) {
      this.setState({
        data: this.state.data,
        assets: []
      });
      this.forceUpdate();
      this.assetComponents.forEach(e => e.forceUpdate());
      return;
    }

    this.isfetching = true;
    _modules_CustomRichPresence__WEBPACK_IMPORTED_MODULE_5__["default"].fetchAssets(this.state.data.application_id).then(assets => {
      this.isfetching = false;
      this.setState({
        data: this.state.data,
        assets: Object.keys(assets).map(k => {
          let asset = assets[k];
          return {
            id: asset.id,
            name: asset.name,
            type: asset.type
          };
        })
      });
      this.forceUpdate();
      this.assetComponents.forEach(e => e.forceUpdate());
    }).catch(() => {
      this.isfetching = false;
      this.setState({
        data: this.state.data,
        assets: []
      });
      this.forceUpdate();
      this.assetComponents.forEach(e => e.forceUpdate());
    });
  }

  updatePreview(data) {
    this.setState({
      data
    });
  }

  get modules() {
    return V2C_PresenceSettingsModules || (V2C_PresenceSettingsModules = [BDModules.get(e => e.marginBottom20)[0]]);
  }

  render() {
    let [marginModule] = this.modules;
    return [/*#__PURE__*/React.createElement(_settingsGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "RichPresence Settings",
      settings: this.props.settings,
      onChange: this.props.onChange
    }), /*#__PURE__*/React.createElement(_margintop__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/React.createElement(_settingsTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
      text: "RichPresence"
    }), /*#__PURE__*/React.createElement("div", null, this.optionsComponents), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_margintop__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/React.createElement(_settingsTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
      text: "Preview"
    }), /*#__PURE__*/React.createElement(RpcPreview, {
      settings: this
    })), /*#__PURE__*/React.createElement("div", {
      className: marginModule.marginBottom20
    }), /*#__PURE__*/React.createElement("button", {
      style: {
        opacity: 0.01
      },
      onClick: window.ohgodohfuck
    }, "Oh god Oh fuck"), /*#__PURE__*/React.createElement("button", {
      style: {
        opacity: 0.01
      },
      onClick: () => {
        electron__WEBPACK_IMPORTED_MODULE_6__["remote"].shell.openExternal("https://www.youtube.com/watch?v=LkYa7rps_g4");
      }
    }, "See ? I pulled a litle sneaky on ya")];
  }

  get optionsComponents() {
    return this._optionsComponents || (this._optionsComponents = RPCProps.map(e => {
      if (e.type === "text") {
        return /*#__PURE__*/React.createElement(InputText, {
          setting: e,
          manager: this,
          id: e.id
        });
      } else if (e.type === "number") {
        let array = [/*#__PURE__*/React.createElement(InputNumber, {
          setting: e,
          manager: this,
          id: e.id
        })];
        /*
        if(e.id === "timestamps.start"){
        array.unshift(<DiscordButton title="Copy Current Timestamp" onClick={() => {
        DiscordNative.clipboard.copy(Date.now()+"")
        }} />)
        }*/

        return array;
      } else if (e.type === "choice") {
        if (["assets.small", "assets.large"].includes(e.id)) {
          return /*#__PURE__*/React.createElement(InputChoice, {
            setting: e,
            manager: this,
            id: e.id,
            choices: [{
              value: "none",
              label: "No assets"
            }].concat(this.state.assets.map(e => {
              return {
                value: "asset-" + e.id,
                label: e.name
              };
            }))
          });
        } else {
          return "Unknown choice.";
        }
      }
    }));
  }

}
const RPCProps = [{
  title: "Application ID",
  id: "application_id",
  type: "number",
  placeholder: "711416957718757418"
}, {
  title: "Name",
  id: "name",
  type: "text",
  placeholder: "Lightcord"
}, {
  title: "Details",
  id: "details",
  type: "text",
  placeholder: "Browsing Discord"
}, {
  title: "State",
  id: "state",
  type: "text",
  placeholder: "Lightcord Client"
}, {
  title: "Timestamp Start",
  id: "timestamps.start",
  type: "number",

  get placeholder() {
    return Date.now();
  }

}, {
  title: "LargeAsset",
  id: "assets.large",
  type: "choice"
}, {
  title: "SmallAsset",
  id: "assets.small",
  type: "choice"
}];
let inputTextModules;

class InputText extends React.PureComponent {
  get modules() {
    if (inputTextModules && inputTextModules[0]) return inputTextModules;
    return inputTextModules = [BDModules.get(e => e.removeKeybind)[0], BDModules.get(e => e.marginBottom20)[0], BDModules.get(e => e.defaultMarginh5)[0], BDModules.get(e => e.colorStandard)[0], BDModules.get(e => e.size32)[0], BDModules.get(e => e._horizontal)[0], BDModules.get(e => e.inputMini)[0], BDModules.get(e => e.size16 && e.size20)[0]];
  }

  constructor(props) {
    super(props);
    let setting = this.props.setting;
    this.state = {
      data: this.props.manager.state.data[setting.id]
    };
    this.input = /*#__PURE__*/React.createElement(window.Lightcord.Api.Components.inputs.TextInput, {
      placeholder: setting.placeholder,
      name: setting.id,
      value: this.state.data,
      onChange: value => {
        this.setState({
          data: value
        });

        if (!this.lastEdited || this.lastEdited < Date.now() - 500) {
          this.props.manager.onChange(this, value);
          this.lastEdited = Date.now();
        } else if (!this.isTiming) {
          this.isTiming = setTimeout(() => {
            this.props.manager.onChange(this, this.state.data);
            this.isTiming = null;
            this.lastEdited = Date.now();
          }, 500);
        }
      },
      type: "text"
    });
  }

  render() {
    let setting = this.props.setting;
    let [rowModule, marginModule, marginModule2, colorModule, sizeModule, flexModule, inputModule, sizeModule2] = this.modules;
    return /*#__PURE__*/React.createElement("div", {
      className: rowModule.row + " " + marginModule.marginBottom20
    }, /*#__PURE__*/React.createElement("div", {
      className: `${rowModule.item} ${flexModule.flexChild}`
    }, /*#__PURE__*/React.createElement("h5", {
      className: colorModule.colorStandard + " " + sizeModule.size14 + " " + marginModule2.h5 + " " + marginModule2.defaultMarginh5
    }, setting.title), this.input), /*#__PURE__*/React.createElement(Divider, null));
  }

}

let InputNumberModules;

class InputNumber extends React.PureComponent {
  get modules() {
    return InputNumberModules || (InputNumberModules = [BDModules.get(e => e.removeKeybind)[0], BDModules.get(e => e.marginBottom20)[0], BDModules.get(e => e.defaultMarginh5)[0], BDModules.get(e => e.colorStandard)[0], BDModules.get(e => e.size32)[0], BDModules.get(e => e._horizontal)[0], BDModules.get(e => e.inputMini)[0], BDModules.get(e => e.size16 && e.size20)[0], BDModules.get(e => e.colorTransparent)[0]]);
  }

  constructor(props) {
    super(props);
    let setting = this.props.setting;
    this.state = {
      data: this.props.manager.state.data[setting.id]
    };
    this.input = /*#__PURE__*/React.createElement(window.Lightcord.Api.Components.inputs.TextInput, {
      placeholder: setting.placeholder,
      name: setting.id,
      value: this.state.data,
      type: "number",
      onChange: (value, name, input) => {
        value = value.replace(/[^\d]+/g, "");

        if (value == this.state.data) {
          input.setValue(value);
          return;
        }

        if (!this.lastEdited || this.lastEdited < Date.now() - 500) {
          this.props.manager.onChange(this, value);
          this.lastEdited = Date.now();
        } else if (!this.isTiming) {
          this.isTiming = setTimeout(() => {
            this.props.manager.onChange(this, this.state.data);
            this.isTiming = null;
            this.lastEdited = Date.now();
          }, 500);
        }

        this.setState({
          data: value
        });
      },
      type: "text"
    });
  }

  render() {
    let setting = this.props.setting;
    let [rowModule, marginModule, marginModule2, colorModule, sizeModule, flexModule] = this.modules;
    return /*#__PURE__*/React.createElement("div", {
      className: rowModule.row + " " + marginModule.marginBottom20
    }, /*#__PURE__*/React.createElement("div", {
      className: `${rowModule.item} ${flexModule.flexChild}`
    }, /*#__PURE__*/React.createElement("h5", {
      className: colorModule.colorStandard + " " + sizeModule.size14 + " " + marginModule2.h5 + " " + marginModule2.defaultMarginh5
    }, setting.title), this.input, setting.id === "timestamps.start" ? /*#__PURE__*/React.createElement(Lightcord.Api.Components.inputs.Button, {
      onClick: () => {
        DiscordNative.clipboard.copy(Date.now() + "");
      },
      color: "brand"
    }, "Copy current timestamp") : null), /*#__PURE__*/React.createElement(Divider, null));
  }

}

let InputChoiceModules;

class InputChoice extends React.PureComponent {
  constructor(props) {
    super(props);
    let setting = this.props.setting;
    this.state = {
      data: this.props.manager.state.data[setting.id] ? "asset-" + this.props.manager.state.data[setting.id] : "none"
    };
    this.props.manager.updateWhenFetched(this);
  }

  onChange(data) {
    let value = data.value;

    if (!this.lastEdited || this.lastEdited < Date.now() - 500) {
      this.props.manager.onChange(this, value === "none" ? null : value.replace("asset-", ""));
      this.lastEdited = Date.now();
    } else if (!this.isTiming) {
      this.isTiming = setTimeout(() => {
        this.props.manager.onChange(this, this.state.data === "none" ? null : this.state.data.replace("asset-", ""));
        this.isTiming = null;
        this.lastEdited = Date.now();
      }, 500);
    }

    this.setState({
      data: value
    });
    this.forceUpdate();
  }

  get modules() {
    return InputChoiceModules || (InputChoiceModules = [BDModules.get(e => e.removeKeybind)[0], BDModules.get(e => e.marginBottom20)[0], BDModules.get(e => e.defaultMarginh5)[0], BDModules.get(e => e.colorStandard)[0], BDModules.get(e => e.size32)[0], BDModules.get(e => e._horizontal)[0]]);
  }

  render() {
    let setting = this.props.setting;
    let [rowModule, marginModule, marginModule2, colorModule, sizeModule, flexModule] = this.modules;
    let options = this.props.manager.state.assets.map(e => {
      return {
        value: "asset-" + e.id,
        label: e.name
      };
    });
    options.unshift({
      value: "none",
      label: "No assets"
    });
    return /*#__PURE__*/React.createElement("div", {
      className: rowModule.row + " " + marginModule.marginBottom20
    }, /*#__PURE__*/React.createElement("div", {
      className: `${rowModule.item} ${flexModule.flexChild}`
    }, /*#__PURE__*/React.createElement("h5", {
      className: colorModule.colorStandard + " " + sizeModule.size14 + " " + marginModule2.h5 + " " + marginModule2.defaultMarginh5
    }, setting.title), /*#__PURE__*/React.createElement(window.Lightcord.Api.Components.inputs.Dropdown, {
      value: this.state.data,
      options: options,
      onChange: this.onChange.bind(this)
    })), /*#__PURE__*/React.createElement(Divider, null));
  }

}

let DividerModules = [];

class Divider extends React.PureComponent {
  get modules() {
    return DividerModules && DividerModules[0] ? DividerModules : DividerModules = [BDModules.get(e => e.divider && Object.keys(e).length === 1)[0], BDModules.get(e => e.dividerDefault)[0]];
  }

  render() {
    let [divider, dividerDefault] = this.modules;
    return /*#__PURE__*/React.createElement("div", {
      class: `${divider.divider} ${dividerDefault.dividerDefault}`
    });
  }

}

class DiscordButton extends React.Component {
  render() {
    let rowModule = BDModules.get(e => e.removeKeybind)[0];
    let marginModule = BDModules.get(e => e.marginBottom20)[0];
    let flexModule = BDModules.get(e => e._horizontal)[0];
    return /*#__PURE__*/React.createElement("div", {
      className: rowModule.row + " " + marginModule.marginBottom20
    }, /*#__PURE__*/React.createElement("div", {
      className: `${rowModule.item} ${flexModule.flexChild}`
    }, /*#__PURE__*/React.createElement(Lightcord.Api.Components.inputs.Button, {
      onClick: this.props.onClick,
      color: "brand"
    }, this.props.title)));
  }

}

class RpcPreview extends React.Component {
  constructor(props = {}) {
    super(props);
    this.state = {
      active: "profile"
    };
    this.tabs = [];
    this.props.settings.preview = this;
  }

  changeTab(tab) {
    let ancientTab = this.state.active;
    if (ancientTab === tab.props.id) return;
    this.tabs.forEach(e => {
      e.setActive(false);
    });
    tab.setActive(true);
    this.setState({
      active: tab.props.id
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "lc-tabWrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lc-tabnav",
      style: {
        flex: "0 1 auto"
      }
    }, /*#__PURE__*/React.createElement(Tab, {
      preview: this,
      title: "Full Profile",
      id: "profile"
    }), /*#__PURE__*/React.createElement(Tab, {
      preview: this,
      title: "User Popout",
      id: "popout"
    })), /*#__PURE__*/React.createElement(PresenceErrorCatcher, {
      preview: this.preview,
      state: this.state.rpc,
      props: {
        preview: this
      },
      key: this.state.active
    }));
  }

  isActive(tab) {
    return this.state.active === tab;
  }

  get preview() {
    if (this.state.active === "profile") return Profile;
    return Popout;
  }

}

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.preview.isActive(props.id)
    };
    props.preview.tabs.push(this);
  }

  setActive(isActive) {
    this.setState({
      active: !!isActive
    });
  }

  render() {
    let className = `lc-navItem`;

    if (this.state.active) {
      className += ` lc-navItemActive`;
    } else {
      className += ` lc-navItemInactive`;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: className,
      onClick: () => {
        this.props.preview.changeTab(this);
      }
    }, this.props.title);
  }

}

let emptyClasses;

class PresenceErrorCatcher extends React.Component {
  componentDidCatch(err, errInfo) {
    console.error(err, errInfo);
    this.setState({
      error: true
    });
  }

  render() {
    if (!this.state) {
      this.state = {
        error: false
      };
    }

    if (!this.state.error) {
      try {
        const preview = new this.props.preview(this.props.props);
        preview.setState(this.props.state);
        return preview.render();
      } catch (err) {
        console.error(err);
        this.state.error = true;
        return this.render();
      }
    } else {
      emptyClasses = emptyClasses || _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].WebpackModules.find(e => e.emptyStateImage && e.emptyState);

      if (!emptyClasses) {
        _modules_utils__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("An error occured. Please check the console for more informations.");
        return null;
      }

      return /*#__PURE__*/React.createElement("div", {
        style: {
          margin: "20px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          backgroundColor: "var(--background-primary)",
          padding: "30px 30px",
          borderRadius: "8px"
        },
        className: `lc-tab-box-shadow ${emptyClasses.emptyState}`
      }, /*#__PURE__*/React.createElement("div", {
        className: emptyClasses.emptyStateImage,
        style: {
          marginTop: "20px"
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: emptyClasses.emptyStateHeader
      }, "An error occured"), /*#__PURE__*/React.createElement("p", {
        className: emptyClasses.emptyStateSubtext
      }, "Please check the console for more informations. Join our \xAD", /*#__PURE__*/React.createElement("a", {
        className: `${_modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].anchorClasses.anchor} ${_modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].anchorClasses.anchorUnderlineOnHover}`,
        role: "button",
        tabindex: 0,
        onClick: () => {
          _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].joinLC();
        }
      }, "support server"), "\xAD for help.")));
    }
  }

}

let popoutModules;
let UserPopoutComponent;
let PopoutProps;

class Popout extends React.Component {
  get modules() {
    return popoutModules || (popoutModules = [_modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].WebpackModules.find(e => e.default && e.default.displayName === "FluxContainer(ForwardRef(SubscribeGuildMembersContainer(UserPopout)))"), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].WebpackModules.find(e => e.default && e.default.getCurrentUser)]);
  }

  render() {
    let [UserPopout, userModule] = this.modules;
    const user = userModule.default.getCurrentUser();

    if (!UserPopoutComponent) {
      if (!UserPopout) throw new Error(`Couldn't find the UserPopout component.`);
      const render1 = new UserPopout.default({
        userId: user.id,
        guildId: null,
        channelId: null,
        disableUserProfileLink: true
      }).render();
      PopoutProps = render1.props;
      const render2 = render1.type.render(PopoutProps, null);
      const render3 = new render2.type(render2.props).render();
      UserPopoutComponent = render3.type;
    }

    if (!UserPopoutComponent) throw new Error(`Couldn't find the UserPopoutComponent component.`);
    let data = Object.assign({}, _0globals__WEBPACK_IMPORTED_MODULE_4__["defaultRPC"], this.props.preview.props.settings.state.data);

    const activity = function () {
      if (!this.game) return null;
      let game = {
        name: this.game.name || _0globals__WEBPACK_IMPORTED_MODULE_4__["defaultRPC"].name,
        application_id: this.game.application_id || _0globals__WEBPACK_IMPORTED_MODULE_4__["defaultRPC"].application_id,
        details: this.game.details || undefined,
        state: this.game.state || undefined,
        timestamps: this.game["timestamps.start"] ? {
          start: this.game["timestamps.start"]
        } : undefined,
        assets: this.game["assets.large"] ? {
          large_image: this.game["assets.large"],
          small_image: this.game["assets.small"] || undefined
        } : undefined,
        type: 0
      };
      return game;
    }.call({
      game: data
    });

    PopoutProps = new UserPopout.default({
      userId: user.id,
      guildId: null,
      channelId: null,
      disableUserProfileLink: true
    }).render().props;
    const popout = new UserPopoutComponent(Object.assign({}, PopoutProps, {
      activity: activity
    })).render().props.children; // bypass tracking
    // remove the stop propagation shit.

    const container = /*#__PURE__*/React.createElement("div", window.Lightcord.Api._.excludeProperties(popout.props, ["onClick", "onContextMenu"]));
    return /*#__PURE__*/React.createElement("div", {
      className: "lc-userPopout lc-tab-box-shadow"
    }, container);
  }

}

let profileModules;
let UserProfileComponent;
let ProfileProps;
let connectedProfileStore;

class Profile extends React.Component {
  get modules() {
    return profileModules || (profileModules = [_modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].WebpackModules.find(e => e.default && e.default.displayName === "UserProfile"), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].WebpackModules.find(e => e.default && e.default.getCurrentUser)]);
  }

  render() {
    let [UserProfile, userModule] = this.modules;
    const user = userModule.default.getCurrentUser();

    if (!UserProfileComponent) {
      const render1 = new UserProfile.default({
        user: user
      }).render();
      connectedProfileStore = render1.type;
      const render2 = new render1.type(render1.props).render();
      const render3 = render2.type.render(render2.props, null);
      const render4 = new render3.type(render3.props).render();
      UserProfileComponent = render4.type;
    }

    if (!UserProfileComponent) throw new Error(`Couldn't find the UserProfileComponent component.`);
    let data = Object.assign({}, _0globals__WEBPACK_IMPORTED_MODULE_4__["defaultRPC"], this.props.preview.props.settings.state.data);

    const activity = function () {
      if (!this.game) return null;
      let game = {
        name: this.game.name || _0globals__WEBPACK_IMPORTED_MODULE_4__["defaultRPC"].name,
        application_id: this.game.application_id || _0globals__WEBPACK_IMPORTED_MODULE_4__["defaultRPC"].application_id,
        details: this.game.details || undefined,
        state: this.game.state || undefined,
        timestamps: this.game["timestamps.start"] ? {
          start: this.game["timestamps.start"]
        } : undefined,
        assets: this.game["assets.large"] ? {
          large_image: this.game["assets.large"],
          small_image: this.game["assets.small"] || undefined
        } : undefined,
        type: 0
      };
      return game;
    }.call({
      game: data
    });

    ProfileProps = new connectedProfileStore({
      user: user,
      close: () => {}
    }).render().props;
    const profile = new UserProfileComponent(Object.assign({}, ProfileProps, {
      activity: activity
    })).render().props.children; // bypass tracking

    profile.props.style = {
      width: "auto"
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "lc-tab lc-tab-box-shadow"
    }, profile);
  }

}

/***/ }),

/***/ "./src/ui/publicservers/layer.js":
/*!***************************************!*\
  !*** ./src/ui/publicservers/layer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_Layer; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/v2 */ "./src/modules/v2.js");
/* harmony import */ var _modules_domtools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/domtools */ "./src/modules/domtools.js");


class V2C_Layer extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  constructor(props) {
    super(props);
    this.keyupListener = this.keyupListener.bind(this);
  }

  keyupListener(e) {
    if (e.which === 27) {
      _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactDom.unmountComponentAtNode(this.refs.root.parentNode);
    }
  }

  componentDidMount() {
    window.addEventListener("keyup", this.keyupListener);
    const thisNode = _modules_domtools__WEBPACK_IMPORTED_MODULE_1__["default"].query(`#${this.props.id}`);
    _modules_domtools__WEBPACK_IMPORTED_MODULE_1__["default"].animate({
      duration: 200,
      update: function (progress) {
        thisNode.style.transform = `scale(${1.1 - 0.1 * progress}) translateZ(0px)`;
        thisNode.style.opacity = progress;

        if (progress == 1) {
          setImmediate(() => {
            thisNode.style.transform = "";
            thisNode.style.opacity = "";
          });
        }
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.keyupListener);
    const thisNode = _modules_domtools__WEBPACK_IMPORTED_MODULE_1__["default"].query(`#${this.props.id}`);
    _modules_domtools__WEBPACK_IMPORTED_MODULE_1__["default"].animate({
      duration: 200,
      update: function (progress) {
        thisNode.style.transform = `scale(${1.1 - 0.1 * (1 - progress)}) translateZ(0px)`;
        thisNode.style.opacity = 1 - progress;

        if (progress == 1) {
          setImmediate(() => {
            thisNode.remove();
          });
        }
      }
    });
    const layer = _modules_domtools__WEBPACK_IMPORTED_MODULE_1__["default"].query(".publicServersOpen");
    layer.classList.remove("publicServersOpen");
    _modules_domtools__WEBPACK_IMPORTED_MODULE_1__["default"].animate({
      duration: 200,
      update: function (progress) {
        layer.style.transform = `scale(${0.07 * progress + 0.93}) translateZ(0px)`;
        layer.style.opacity = progress;

        if (progress == 1) {
          setImmediate(() => {
            layer.style.transform = "";
            layer.style.opacity = "";
          });
        }
      }
    });
  }

  componentWillMount() {
    const layer = _modules_domtools__WEBPACK_IMPORTED_MODULE_1__["default"].query("[class*=\"layer-\"]");
    layer.classList.add("publicServersOpen");
    _modules_domtools__WEBPACK_IMPORTED_MODULE_1__["default"].animate({
      duration: 200,
      update: function (progress) {
        layer.style.transform = `scale(${0.07 * (1 - progress) + 0.93}) translateZ(0px)`;
        layer.style.opacity = 1 - progress;
      }
    });
  }

  render() {
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "layer bd-layer " + BDModules.get(e => e.layer && e.animating)[0].layer,
      id: this.props.id,
      ref: "root",
      style: {
        opacity: 0,
        transform: "scale(1.1) translateZ(0px)"
      }
    }, this.props.children);
  }

}

/***/ }),

/***/ "./src/ui/publicservers/publicServers.js":
/*!***********************************************!*\
  !*** ./src/ui/publicservers/publicServers.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_PublicServers; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/v2 */ "./src/modules/v2.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools */ "./src/ui/tools.js");
/* harmony import */ var _settingsTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settingsTitle */ "./src/ui/settingsTitle.js");
/* harmony import */ var _tabBarSeparator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabBarSeparator */ "./src/ui/tabBarSeparator.js");
/* harmony import */ var _tabBarHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tabBarHeader */ "./src/ui/tabBarHeader.js");
/* harmony import */ var _tabBarItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tabBarItem */ "./src/ui/tabBarItem.js");
/* harmony import */ var _serverCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serverCard */ "./src/ui/publicservers/serverCard.js");
/* harmony import */ var _sidebarView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebarView */ "./src/ui/publicservers/sidebarView.js");








class V2C_PublicServers extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  constructor(props) {
    super(props);
    this.setInitialState();
    this.close = this.close.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.search = this.search.bind(this);
    this.searchKeyDown = this.searchKeyDown.bind(this);
    this.checkConnection = this.checkConnection.bind(this);
    this.join = this.join.bind(this);
    this.connect = this.connect.bind(this);
    this.GuildStore = _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].WebpackModules.findByUniqueProperties(["getGuilds"]);
    this.AvatarDefaults = _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].WebpackModules.findByUniqueProperties(["getUserAvatarURL", "DEFAULT_AVATARS"]);
    this.InviteActions = _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].WebpackModules.findByUniqueProperties(["acceptInvite"]);
    this.SortedGuildStore = _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].WebpackModules.findByUniqueProperties(["getSortedGuilds"]);
  }

  componentDidMount() {
    this.checkConnection();
  }

  setInitialState() {
    this.state = {
      selectedCategory: -1,
      title: "Loading...",
      loading: true,
      servers: [],
      next: null,
      connection: {
        state: 0,
        user: null
      }
    };
  }

  close() {
    _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactDom.unmountComponentAtNode(document.getElementById(this.props.rootId));
  }

  search(query, clear) {
    const self = this;
    fetch(`${self.endPoint}${query}${query ? "&schema=new" : "?schema=new"}`, {
      method: "get"
    }).then(async res => {
      if (res.status !== 200) throw await res.text();
      let data = await res.json();
      let servers = data.results.reduce((arr, server) => {
        server.joined = false;
        arr.push(server); // arr.push(<ServerCard server={server} join={self.join}/>);

        return arr;
      }, []);

      if (!clear) {
        servers = self.state.servers.concat(servers);
      } else {//servers.unshift(self.bdServer);
      }

      let end = data.size + data.from;
      data.next = `?from=${end}`;
      if (self.state.term) data.next += `&term=${self.state.term}`;
      if (self.state.selectedCategory) data.next += `&category=${self.categoryButtons[self.state.selectedCategory]}`;

      if (end >= data.total) {
        end = data.total;
        data.next = null;
      }

      let title = `Showing 1-${end} of ${data.total} results in ${self.categoryButtons[self.state.selectedCategory]}`;
      if (self.state.term) title += ` for ${self.state.term}`;
      self.setState({
        loading: false,
        title: title,
        servers: servers,
        next: data.next
      });

      if (clear) {
        //console.log(self);
        self.refs.sbv.refs.contentScroller.scrollTop = 0;
      }
    }).catch(err => {
      console.error(err);
      return self.setState({
        loading: false,
        title: "Failed to load servers. Check console for details"
      });
    });
  }

  async join(serverCard) {
    if (serverCard.props.pinned) return this.InviteActions.acceptInvite(serverCard.props.invite_code);
    await fetch(`${this.joinEndPoint}/${serverCard.props.server.identifier}`, {
      method: "GET",
      credentials: "include",
      mode: "cors",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
    serverCard.setState({
      joined: true
    });
  }

  connect() {
    const self = this;
    const options = self.windowOptions;
    options.x = Math.round(window.screenX + window.innerWidth / 2 - options.width / 2);
    options.y = Math.round(window.screenY + window.innerHeight / 2 - options.height / 2);
    self.joinWindow = new (window.require("electron").remote.BrowserWindow)(options);
    const url = "https://auth.discordservers.com/connect?scopes=guilds.join&previousUrl=https://auth.discordservers.com/info";
    self.joinWindow.webContents.on("did-navigate", (event, url) => {
      if (url != "https://auth.discordservers.com/info") return;
      self.joinWindow.close();
      self.checkConnection();
    });
    self.joinWindow.loadURL(url);
  }

  get windowOptions() {
    return {
      width: 500,
      height: 550,
      backgroundColor: "#282b30",
      show: true,
      resizable: false,
      maximizable: false,
      minimizable: false,
      alwaysOnTop: true,
      frame: false,
      center: false,
      webPreferences: {
        nodeIntegration: false
      }
    };
  }

  get bdServer() {
    const server = {
      name: "BetterDiscord",
      online: "7500+",
      members: "20000+",
      categories: ["community", "programming", "support"],
      description: "Official BetterDiscord server for support etc",
      identifier: "86004744966914048",
      iconUrl: "https://cdn.discordapp.com/icons/86004744966914048/292e7f6bfff2b71dfd13e508a859aedd.webp",
      nativejoin: true,
      invite_code: "0Tmfo5ZbORCRqbAd",
      pinned: true
    };
    const server2 = {
      name: "Lightcord",
      online: "30+",
      members: "50+",
      categories: ["community", "programming", "support"],
      description: "Official Lightcord server for support etc",
      identifier: "86004744966914048",
      iconUrl: "https://avatars3.githubusercontent.com/u/65690058?s=200&v=4",
      nativejoin: true,
      invite_code: "7eFff2A",
      pinned: true
    };
    const guildList = this.SortedGuildStore.getFlattenedGuildIds();
    const defaultList = this.AvatarDefaults.DEFAULT_AVATARS;
    return [_modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_serverCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      server: server2,
      pinned: true,
      join: this.join,
      guildList: guildList,
      fallback: defaultList[Math.floor(Math.random() * 5)]
    }), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_serverCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      server: server,
      pinned: true,
      join: this.join,
      guildList: guildList,
      fallback: defaultList[Math.floor(Math.random() * 5)]
    })];
  }

  get endPoint() {
    return "https://search.discordservers.com";
  }

  get joinEndPoint() {
    return "https://j.discordservers.com";
  }

  get connectEndPoint() {
    return "https://join.discordservers.com/connect";
  }

  async checkConnection() {
    const self = this;

    try {
      const response = await fetch(`https://auth.discordservers.com/info`, {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      self.setState({
        selectedCategory: 0,
        connection: {
          state: 2,
          user: data
        }
      });
      self.search("", true);
    } catch (error) {
      console.error(error);
      self.setState({
        title: "Not connected to discordservers.com!",
        loading: true,
        selectedCategory: -1,
        connection: {
          state: 1,
          user: null
        }
      });
    }
  }

  render() {
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_sidebarView__WEBPACK_IMPORTED_MODULE_7__["default"], {
      ref: "sbv"
    }, this.component);
  }

  get component() {
    return {
      sidebar: {
        component: this.sidebar
      },
      content: {
        component: this.content
      },
      tools: {
        component: _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_tools__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: "pt",
          ref: "tools",
          onClick: this.close
        })
      }
    };
  }

  get sidebar() {
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "sidebar",
      key: "ps"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "ui-tab-bar SIDE"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "ui-tab-bar-header",
      style: {
        fontSize: "16px"
      }
    }, "Public Servers"), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_tabBarSeparator__WEBPACK_IMPORTED_MODULE_3__["default"], null), this.searchInput, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_tabBarSeparator__WEBPACK_IMPORTED_MODULE_3__["default"], null), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_tabBarHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: "Categories"
    }), this.categoryButtons.map((value, index) => {
      return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_tabBarItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: index,
        onClick: this.changeCategory,
        key: index,
        text: value,
        selected: this.state.selectedCategory === index
      });
    }), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_tabBarSeparator__WEBPACK_IMPORTED_MODULE_3__["default"], null), this.footer, this.connection));
  }

  get searchInput() {
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "ui-form-item"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "ui-text-input flex-vertical",
      style: {
        width: "172px",
        marginLeft: "10px"
      }
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("input", {
      ref: "searchinput",
      onKeyDown: this.searchKeyDown,
      onChange: () => {},
      type: "text",
      className: "input default",
      placeholder: "Search...",
      maxLength: "50"
    })));
  }

  searchKeyDown(e) {
    const self = this;
    if (self.state.loading || e.which !== 13) return;
    self.setState({
      loading: true,
      title: "Loading...",
      term: e.target.value
    });
    let query = `?term=${e.target.value}`;

    if (self.state.selectedCategory !== 0) {
      query += `&category=${self.categoryButtons[self.state.selectedCategory]}`;
    }

    self.search(query, true);
  }

  get categoryButtons() {
    return ["All", "FPS Games", "MMO Games", "Strategy Games", "MOBA Games", "RPG Games", "Tabletop Games", "Sandbox Games", "Simulation Games", "Music", "Community", "Language", "Programming", "Other"];
  }

  changeCategory(id) {
    const self = this;
    if (self.state.loading) return;
    self.refs.searchinput.value = "";
    self.setState({
      loading: true,
      selectedCategory: id,
      title: "Loading...",
      term: null
    });

    if (id === 0) {
      self.search("", true);
      return;
    }

    self.search(`?category=${self.categoryButtons[id]}`, true);
  }

  get content() {
    const self = this;
    const guildList = this.SortedGuildStore.getFlattenedGuildIds();
    const defaultList = this.AvatarDefaults.DEFAULT_AVATARS;
    if (self.state.connection.state === 1) return self.notConnected;
    let columnModule = BDModules.get(e => e.contentColumnDefault)[0];
    return [_modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      ref: "content",
      key: "pc",
      className: columnModule.contentColumn + " " + columnModule.contentColumn + " content-column default"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_settingsTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: self.state.title
    }), self.bdServer, self.state.servers.map(server => {
      return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_serverCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: server.identifier,
        server: server,
        join: self.join,
        guildList: guildList,
        fallback: defaultList[Math.floor(Math.random() * 5)]
      });
    }), self.state.next && _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("button", {
      type: "button",
      onClick: () => {
        if (self.state.loading) return;
        self.setState({
          loading: true
        });
        self.search(self.state.next, false);
      },
      className: "ui-button filled brand small grow",
      style: {
        width: "100%",
        marginTop: "10px",
        marginBottom: "10px"
      }
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "ui-button-contents"
    }, self.state.loading ? "Loading" : "Load More")), self.state.servers.length > 0 && _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_settingsTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: self.state.title
    }))];
  }

  get notConnected() {
    const self = this; //return BDV2.react.createElement(SettingsTitle, { text: self.state.title });

    let columnModule = BDModules.get(e => e.contentColumnDefault)[0];
    return [_modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      key: "ncc",
      ref: "content",
      className: columnModule.contentColumn + " " + columnModule.contentColumn + " content-column default"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("h2", {
      className: "ui-form-title h2 margin-reset margin-bottom-20"
    }, "Not connected to discordservers.com!", _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("button", {
      onClick: self.connect,
      type: "button",
      className: "ui-button filled brand small grow",
      style: {
        display: "inline-block",
        minHeight: "18px",
        marginLeft: "10px",
        lineHeight: "14px"
      }
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "ui-button-contents"
    }, "Connect"))), self.bdServer)];
  }

  get footer() {
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "ui-tab-bar-header"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("a", {
      href: "https://discordservers.com",
      target: "_blank"
    }, "Discordservers.com"));
  }

  get connection() {
    const self = this;
    const {
      connection
    } = self.state;
    if (connection.state !== 2) return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("span", null);
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("span", null, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_tabBarSeparator__WEBPACK_IMPORTED_MODULE_3__["default"], null), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("span", {
      style: {
        color: "#b9bbbe",
        fontSize: "10px",
        marginLeft: "10px"
      }
    }, "Connected as: ", `${connection.user.username}#${connection.user.discriminator}`), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      style: {
        padding: "5px 10px 0 10px"
      }
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("button", {
      style: {
        width: "100%",
        minHeight: "20px"
      },
      type: "button",
      className: "ui-button filled brand small grow"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "ui-button-contents",
      onClick: self.connect
    }, "Reconnect"))));
  }

}

/***/ }),

/***/ "./src/ui/publicservers/serverCard.js":
/*!********************************************!*\
  !*** ./src/ui/publicservers/serverCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_ServerCard; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/v2 */ "./src/modules/v2.js");

class V2C_ServerCard extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  constructor(props) {
    super(props);
    if (!this.props.server.iconUrl) this.props.server.iconUrl = this.props.fallback;
    this.state = {
      imageError: false,
      joined: this.props.guildList.includes(this.props.server.identifier)
    };
  }

  render() {
    const {
      server
    } = this.props;
    let cardModule = BDModules.get(e => e.card && e.cardPrimary)[0];
    let flexModule = BDModules.get(e => e.flexChild && e._horizontalReverse)[0];
    let wrapModule = BDModules.get(e => e.noWrap && !e.streamerModeEnabled)[0];
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", // cardPrimary-1Hv-to
    {
      className: `${cardModule.card} ${cardModule.cardPrimary} ${BDModules.get(e => e.marginBottom8)[0].marginBottom8} bd-server-card${server.pinned ? " bd-server-card-pinned" : ""}`
    }, // BDV2.react.createElement(
    // "div",
    // { className: "flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2yIZo0 alignStretch-1hwxMa noWrap-3jynv6" },
    _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("img", {
      ref: "img",
      className: "bd-server-image",
      src: server.iconUrl,
      onError: this.handleError.bind(this),
      draggable: false
    }), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: flexModule.flexChild + " bd-server-content"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: flexModule.horizontal + " " + wrapModule.noWrap + " bd-server-header"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("h5", {
      className: "h5-18_1nd defaultColor-1_ajX0 margin-reset bd-server-name"
    }, server.name), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("h5", {
      className: "h5-18_1nd defaultColor-1_ajX0 margin-reset bd-server-member-count"
    }, server.members, " Members")), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: flexModule.horizontal + " " + wrapModule.noWrap
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "scrollerWrap-2lJEkd scrollerThemed-2oenus themeGhostHairline-DBD-2d scrollerFade-1Ijw5y bd-server-description-container"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "scroller-2FKFPG scroller bd-server-description"
    }, server.description))), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY directionRow-3v3tfG noWrap-3jynv6 bd-server-footer"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "flexChild-faoVW3 bd-server-tags",
      style: {
        flex: "1 1 auto"
      }
    }, server.categories.join(", ")), this.state.joined && _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("button", {
      type: "button",
      className: "button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMin-1mJd1x grow-q77ONN colorGreen-29iAKY",
      style: {
        minHeight: "12px",
        marginTop: "4px",
        backgroundColor: "#3ac15c"
      }
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "ui-button-contents"
    }, "Joined")), server.error && _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("button", {
      type: "button",
      className: "button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMin-1mJd1x grow-q77ONN disabled-9aF2ug",
      style: {
        minHeight: "12px",
        marginTop: "4px",
        backgroundColor: "#c13a3a"
      }
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "ui-button-contents"
    }, "Error")), !server.error && !this.state.joined && _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("button", {
      type: "button",
      className: "button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMin-1mJd1x grow-q77ONN",
      style: {
        minHeight: "12px",
        marginTop: "4px"
      },
      onClick: () => {
        this.join();
      }
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "ui-button-contents"
    }, "Join")))) // )
    );
  }

  handleError() {
    this.props.server.iconUrl = this.props.fallback;
    this.setState({
      imageError: true
    });
  }

  join() {
    this.props.join(this); //this.setState({joined: true});
  }

}

/***/ }),

/***/ "./src/ui/publicservers/sidebarView.js":
/*!*********************************************!*\
  !*** ./src/ui/publicservers/sidebarView.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_SidebarView; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/v2 */ "./src/modules/v2.js");
/* harmony import */ var _scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scroller */ "./src/ui/scroller.js");


class V2C_SidebarView extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      sidebar,
      content,
      tools
    } = this.props.children;
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "standardSidebarView-3F1I7i ui-standard-sidebar-view"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "sidebarRegion-VFTUkN sidebar-region"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_scroller__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: "sidebarScroller",
      ref: "sidebarScroller",
      sidebar: true,
      fade: sidebar.fade || true,
      dark: sidebar.dark || true
    }, sidebar.component)), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "contentRegion-3nDuYy content-region"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "contentTransitionWrap-3hqOEW content-transition-wrap"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "scrollerWrap-2lJEkd firefoxFixScrollFlex-cnI2ix contentRegionScrollerWrap-3YZXdm content-region-scroller-wrap scrollerThemed-2oenus themeGhost-28MSn0 scrollerTrack-1ZIpsv"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "scroller-2FKFPG firefoxFixScrollFlex-cnI2ix contentRegionScroller-26nc1e content-region-scroller scroller",
      ref: "contentScroller"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default"
    }, content.component), tools.component)))));
  }

}

/***/ }),

/***/ "./src/ui/reloadIcon.js":
/*!******************************!*\
  !*** ./src/ui/reloadIcon.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_ReloadIcon; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");

class V2C_ReloadIcon extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "#dcddde",
      className: "bd-reload " + this.props.className,
      onClick: this.props.onClick,
      style: {
        width: this.props.size || "24px",
        height: this.props.size || "24px"
      }
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("path", {
      d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
    }), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/scroller.js":
/*!****************************!*\
  !*** ./src/ui/scroller.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_Scroller; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");

class V2C_Scroller extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  constructor(props) {
    super(props);
  }

  render() {
    //scrollerWrap-2lJEkd scrollerThemed-2oenus themeGhostHairline-DBD-2d scrollerFade-1Ijw5y
    let scrollerModule1 = BDModules.get(e => e.scrollerHorizontal)[0];
    let scrollerModule2 = BDModules.get(e => e.sidebarRegionScroller)[0];
    let wrapperClass = `${scrollerModule1.scrollerWrap} ${scrollerModule1.scrollerThemed} ${scrollerModule1.themeGhostHairline}${this.props.fade ? " " + scrollerModule1.scrollerFade : ""}`;
    let scrollerClass = scrollerModule1.scroller + " scroller";
    /* fuck */

    if (this.props.sidebar) scrollerClass += ` ${scrollerModule2.sidebarRegionScroller} sidebar-region-scroller`;

    if (this.props.contentColumn) {
      scrollerClass += " " + scrollerModule2.contentRegionScroller + " content-region-scroller";
      /* fuck */

      wrapperClass = `${scrollerModule1.scrollerWrap} ${scrollerModule2.contentRegionScrollerWrap} content-region-scroller-wrap  ${scrollerModule1.scrollerThemed} ${scrollerModule1.themeGhost} ${scrollerModule1.scrollerTrack}`;
    }

    const {
      children
    } = this.props;
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      key: "scrollerwrap",
      className: wrapperClass
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      key: "scroller",
      ref: "scroller",
      className: scrollerClass
    }, children));
  }

}
const originalRender = V2C_Scroller.prototype.render;
Object.defineProperty(V2C_Scroller.prototype, "render", {
  enumerable: false,
  configurable: false,
  set: function () {
    console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins");
  },
  get: () => originalRender
});

/***/ }),

/***/ "./src/ui/sectionedSettingsPanel.js":
/*!******************************************!*\
  !*** ./src/ui/sectionedSettingsPanel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_SectionedSettingsPanel; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");
/* harmony import */ var _settingsGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settingsGroup */ "./src/ui/settingsGroup.js");
/* harmony import */ var _margintop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./margintop */ "./src/ui/margintop.jsx");



class V2C_SectionedSettingsPanel extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.sections.map((section, i) => {
      return [i !== 0 ? _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_margintop__WEBPACK_IMPORTED_MODULE_2__["default"], {}) : null, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_settingsGroup__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, section, {
        onChange: this.props.onChange
      }))];
    });
  }

}

/***/ }),

/***/ "./src/ui/settingsGroup.js":
/*!*********************************!*\
  !*** ./src/ui/settingsGroup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_SettingsGroup; });
/* harmony import */ var _0globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../0globals */ "./src/0globals.js");
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");
/* harmony import */ var _settingsTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settingsTitle */ "./src/ui/settingsTitle.js");
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switch */ "./src/ui/switch.js");




class V2C_SettingsGroup extends _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].reactComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      settings,
      button
    } = this.props;
    const buttonComponent = button ? _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement("button", {
      key: "title-button",
      className: "bd-pfbtn",
      onClick: button.onClick
    }, button.title) : null;
    return [_modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement(_settingsTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: title
    }), buttonComponent, settings.map(setting => {
      return _modules_v2__WEBPACK_IMPORTED_MODULE_1__["default"].react.createElement(_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: setting.id,
        key: setting.id,
        data: setting,
        checked: _0globals__WEBPACK_IMPORTED_MODULE_0__["settingsCookie"][setting.id],
        onChange: (id, checked) => {
          this.props.onChange(id, checked);
        }
      });
    })];
  }

}

/***/ }),

/***/ "./src/ui/settingsTitle.js":
/*!*********************************!*\
  !*** ./src/ui/settingsTitle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_SettingsTitle; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");

class V2C_SettingsTitle extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  constructor(props) {
    super(props);
  } //h2-2gWE-o title-3sZWYQ size16-14cGz5 height20-mO2eIN weightSemiBold-NJexzi da-h2 da-title da-size16 da-height20 da-weightSemiBold defaultColor-1_ajX0 da-defaultColor marginTop60-3PGbtK da-marginTop60 marginBottom20-32qID7 da-marginBottom20


  render() {
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("h2", {
      className: "ui-form-title h2 margin-reset margin-bottom-20"
    }, this.props.text);
  }

}

/***/ }),

/***/ "./src/ui/switch.js":
/*!**************************!*\
  !*** ./src/ui/switch.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SwitchItem; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");
/* harmony import */ var _components_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/switch */ "./src/ui/components/switch.jsx");


let classnames = [];

function getClassName(name) {
  let className = classnames.find(e => e.startsWith(name + "-"));
  if (className) return className;
  className = BDModules.get(e => e[name])[0][name];
  classnames.push(className);
  return className;
}

class SwitchItem extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.props.checked = !this.props.checked;
    this.props.onChange(this.props.id, this.props.checked);
  }

  render() {
    let {
      text,
      info
    } = this.props.data;

    if (!classnames.find(e => e.startsWith("beta-"))) {
      classnames.push(BDModules.get(e => e.beta && !e.container && !e.userSettingsVoice)[0].beta);
    }

    if (this.props.data.experimental) {
      info = [info, React.createElement("sup", {
        className: getClassName("beta")
      }, "(EXPERIMENTAL)")];
    }

    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "ui-flex flex-vertical flex-justify-start flex-align-stretch flex-nowrap ui-switch-item"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "ui-flex flex-horizontal flex-justify-start flex-align-stretch flex-nowrap"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("h3", {
      className: "ui-form-title h3 margin-reset margin-reset ui-flex-child"
    }, text), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_components_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onChange: this.onChange,
      checked: this.props.checked
    })), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "ui-form-text style-description margin-top-4",
      style: {
        flex: "1 1 auto"
      }
    }, info));
  }

}

/***/ }),

/***/ "./src/ui/tabBarHeader.js":
/*!********************************!*\
  !*** ./src/ui/tabBarHeader.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_TabBarHeader; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");

class V2C_TabBarHeader extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "ui-tab-bar-header"
    }, this.props.text, this.props.button);
  }

}

/***/ }),

/***/ "./src/ui/tabBarItem.js":
/*!******************************!*\
  !*** ./src/ui/tabBarItem.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_TabBarItem; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");

class V2C_TabBarItem extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  constructor(props) {
    super(props);
    this.setInitialState();
    this.onClick = this.onClick.bind(this);
  }

  setInitialState() {
    this.state = {
      selected: this.props.selected || false
    };
  }

  render() {
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: `ui-tab-bar-item${this.props.selected ? " selected" : ""}`,
      onClick: this.onClick
    }, this.props.text);
  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick(this.props.id);
    }
  }

}

/***/ }),

/***/ "./src/ui/tabBarSeparator.js":
/*!***********************************!*\
  !*** ./src/ui/tabBarSeparator.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_TabBarSeparator; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");

class V2C_TabBarSeparator extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "ui-tab-bar-separator margin-top-8 margin-bottom-8"
    });
  }

}

/***/ }),

/***/ "./src/ui/tools.js":
/*!*************************!*\
  !*** ./src/ui/tools.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_Tools; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");
/* harmony import */ var _xSvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xSvg */ "./src/ui/xSvg.js");


class V2C_Tools extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    let toolsModule = BDModules.get(e => e.toolsContainer)[0];
    let containerModule = BDModules.get(e => e.container && e.closeButton && e.closeButtonBold)[0];
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "tools-container " + toolsModule.toolsContainer
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "tools " + toolsModule.tools
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: containerModule.container
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "btn-close " + containerModule.closeButton,
      onClick: this.onClick
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement(_xSvg__WEBPACK_IMPORTED_MODULE_1__["default"], null)), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("div", {
      className: "esc-text " + containerModule.keybind
    }, "ESC"))));
  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }

    const closeButton = document.querySelector("." + BDModules.get(e => e.closeButton && e.keybindBold)[0].closeButton.split(" ")[0]);
    if (closeButton) closeButton.click();
  }

}

/***/ }),

/***/ "./src/ui/tooltip.js":
/*!***************************!*\
  !*** ./src/ui/tooltip.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmulatedTooltip; });
/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/utils */ "./src/modules/utils.js");
/* harmony import */ var _modules_webpackModules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/webpackModules */ "./src/modules/webpackModules.js");
/**
 * Tooltip that automatically show and hide themselves on mouseenter and mouseleave events.
 * Will also remove themselves if the node to watch is removed from DOM through
 * a MutationObserver.
 *
 * Note this is not using Discord's internals but normal DOM manipulation and emulates
 * Discord's own tooltips as closely as possible.
 *
 * @module EmulatedTooltip
 * @version 0.0.1
 */


let TooltipClasses;

function getTooltipClasses() {
  if (TooltipClasses) return TooltipClasses;
  return TooltipClasses = _modules_webpackModules__WEBPACK_IMPORTED_MODULE_1__["default"].findByProps("tooltip", "tooltipBlack");
}

let TooltipLayers;

function getTooltipLayers() {
  if (TooltipLayers) return TooltipLayers;
  return TooltipLayers = _modules_webpackModules__WEBPACK_IMPORTED_MODULE_1__["default"].findByProps("layer", "layerContainer");
}

const getClass = function (sideOrColor) {
  const upperCase = sideOrColor[0].toUpperCase() + sideOrColor.slice(1);
  const tooltipClass = getTooltipClasses()[`tooltip${upperCase}`];
  if (tooltipClass) return tooltipClass;
  return null;
};

const classExists = function (sideOrColor) {
  return getClass(sideOrColor) ? true : false;
};

const toPx = function (value) {
  return `${value}px`;
};
/* <div class="layer-v9HyYc da-layer" style="left: 234.5px; bottom: 51px;">
    <div class="tooltip-2QfLtc da-tooltip tooltipTop-XDDSxx tooltipBlack-PPG47z">
        <div class="tooltipPointer-3ZfirK da-tooltipPointer"></div>
        User Settings
    </div>
</div> */


class EmulatedTooltip {
  /**
   *
   * @constructor
   * @param {(HTMLElement|jQuery)} node - DOM node to monitor and show the tooltip on
   * @param {string} tip - string to show in the tooltip
   * @param {object} options - additional options for the tooltip
   * @param {string} [options.style=black] - correlates to the discord styling/colors (black, brand, green, grey, red, yellow)
   * @param {string} [options.side=top] - can be any of top, right, bottom, left
   * @param {boolean} [options.preventFlip=false] - prevents moving the tooltip to the opposite side if it is too big or goes offscreen
      * @param {boolean} [options.disabled=false] - whether the tooltip should be disabled from showing on hover
   */
  constructor(node, text, options = {}) {
    const {
      style = "black",
      side = "top",
      preventFlip = false,
      disabled = false
    } = options;
    this.node = node instanceof jQuery ? node[0] : node;
    this.label = text;
    this.style = style.toLowerCase();
    this.side = side.toLowerCase();
    this.preventFlip = preventFlip;
    this.disabled = disabled;
    if (!classExists(this.side)) return _modules_utils__WEBPACK_IMPORTED_MODULE_0__["default"].err("EmulatedTooltip", `Side ${this.side} does not exist.`);
    if (!classExists(this.style)) return _modules_utils__WEBPACK_IMPORTED_MODULE_0__["default"].err("EmulatedTooltip", `Style ${this.style} does not exist.`);
    this.element = document.createElement("div");
    this.element.className = getTooltipLayers().layer + " " + getTooltipLayers().disabledPointerEvents;
    this.tooltipElement = document.createElement("div");
    this.tooltipElement.className = `${getTooltipClasses().tooltip} ${getClass(this.style)}`;
    this.labelElement = document.createElement("div");
    this.labelElement.className = getTooltipClasses().tooltipContent;
    const pointerElement = document.createElement("div");
    pointerElement.className = getTooltipClasses().tooltipPointer;
    this.tooltipElement.append(pointerElement);
    this.tooltipElement.append(this.labelElement);
    this.element.append(this.tooltipElement);
    this.node.addEventListener("mouseenter", () => {
      if (this.disabled) return;
      this.show();
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          const nodes = Array.from(mutation.removedNodes);
          const directMatch = nodes.indexOf(this.node) > -1;
          const parentMatch = nodes.some(parent => parent.contains(this.node));

          if (directMatch || parentMatch) {
            this.hide();
            observer.disconnect();
          }
        });
      });
      observer.observe(document.body, {
        subtree: true,
        childList: true
      });
    });
    this.node.addEventListener("mouseleave", () => {
      this.hide();
    });
  }
  /** Container where the tooltip will be appended. */


  get container() {
    return document.querySelector("." + _modules_utils__WEBPACK_IMPORTED_MODULE_0__["default"].removeDa(BDModules.get(e => e.popouts)[0].popouts) + " ~ ." + _modules_utils__WEBPACK_IMPORTED_MODULE_0__["default"].removeDa(BDModules.get(e => e.layerContainer)[0].layerContainer));
  }
  /** Boolean representing if the tooltip will fit on screen above the element */


  get canShowAbove() {
    return this.node.getBoundingClientRect().top - this.element.offsetHeight >= 0;
  }
  /** Boolean representing if the tooltip will fit on screen below the element */


  get canShowBelow() {
    return this.node.getBoundingClientRect().top + this.node.offsetHeight + this.element.offsetHeight <= _modules_utils__WEBPACK_IMPORTED_MODULE_0__["default"].screenHeight;
  }
  /** Boolean representing if the tooltip will fit on screen to the left of the element */


  get canShowLeft() {
    return this.node.getBoundingClientRect().left - this.element.offsetWidth >= 0;
  }
  /** Boolean representing if the tooltip will fit on screen to the right of the element */


  get canShowRight() {
    return this.node.getBoundingClientRect().left + this.node.offsetWidth + this.element.offsetWidth <= _modules_utils__WEBPACK_IMPORTED_MODULE_0__["default"].screenWidth;
  }
  /** Hides the tooltip. Automatically called on mouseleave. */


  hide() {
    this.element.remove();
    this.tooltipElement.className = this._className;
  }
  /** Shows the tooltip. Automatically called on mouseenter. Will attempt to flip if position was wrong. */


  show() {
    this.tooltipElement.className = `${getTooltipClasses().tooltip} ${getClass(this.style)}`;
    this.labelElement.textContent = this.label;
    this.container.append(this.element);

    if (this.side == "top") {
      if (this.canShowAbove || !this.canShowAbove && this.preventFlip) this.showAbove();else this.showBelow();
    }

    if (this.side == "bottom") {
      if (this.canShowBelow || !this.canShowBelow && this.preventFlip) this.showBelow();else this.showAbove();
    }

    if (this.side == "left") {
      if (this.canShowLeft || !this.canShowLeft && this.preventFlip) this.showLeft();else this.showRight();
    }

    if (this.side == "right") {
      if (this.canShowRight || !this.canShowRight && this.preventFlip) this.showRight();else this.showLeft();
    }
  }
  /** Force showing the tooltip above the node. */


  showAbove() {
    this.tooltipElement.classList.add(getClass("top"));
    this.element.style.setProperty("top", toPx(this.node.getBoundingClientRect().top - this.element.offsetHeight - 10));
    this.centerHorizontally();
  }
  /** Force showing the tooltip below the node. */


  showBelow() {
    this.tooltipElement.classList.add(getClass("bottom"));
    this.element.style.setProperty("top", toPx(this.node.getBoundingClientRect().top + this.node.offsetHeight + 10));
    this.centerHorizontally();
  }
  /** Force showing the tooltip to the left of the node. */


  showLeft() {
    this.tooltipElement.classList.add(getClass("left"));
    this.element.style.setProperty("left", toPx(this.node.getBoundingClientRect().left - this.element.offsetWidth - 10));
    this.centerVertically();
  }
  /** Force showing the tooltip to the right of the node. */


  showRight() {
    this.tooltipElement.classList.add(getClass("right"));
    this.element.style.setProperty("left", toPx(this.node.getBoundingClientRect().left + this.node.offsetWidth + 10));
    this.centerVertically();
  }

  centerHorizontally() {
    const nodecenter = this.node.getBoundingClientRect().left + this.node.offsetWidth / 2;
    this.element.style.setProperty("left", toPx(nodecenter - this.element.offsetWidth / 2));
  }

  centerVertically() {
    const nodecenter = this.node.getBoundingClientRect().top + this.node.offsetHeight / 2;
    this.element.style.setProperty("top", toPx(nodecenter - this.element.offsetHeight / 2));
  }

}

/***/ }),

/***/ "./src/ui/tooltipWrap.js":
/*!*******************************!*\
  !*** ./src/ui/tooltipWrap.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip */ "./src/ui/tooltip.js");


/* harmony default export */ __webpack_exports__["default"] = (class extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const {
      style = "black",
      side = "top",
      text = ""
    } = this.props;
    this.node = _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactDom.findDOMNode(this);
    this.tooltip = new _tooltip__WEBPACK_IMPORTED_MODULE_1__["default"](this.node, text, {
      style,
      side
    });
  }

  componentWillUnmount() {
    this.tooltip.hide();
    delete this.tooltip;
  }

  render() {
    return this.props.children;
  }

});

/***/ }),

/***/ "./src/ui/xSvg.js":
/*!************************!*\
  !*** ./src/ui/xSvg.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_XSvg; });
/* harmony import */ var _modules_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/v2 */ "./src/modules/v2.js");

class V2C_XSvg extends _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].reactComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 12 12",
      style: {
        width: "18px",
        height: "18px"
      }
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("g", {
      className: "background",
      fill: "none",
      fillRule: "evenodd"
    }, _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("path", {
      d: "M0 0h12v12H0"
    }), _modules_v2__WEBPACK_IMPORTED_MODULE_0__["default"].react.createElement("path", {
      className: "fill",
      fill: "#dcddde",
      d: "M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"
    })));
  }

}

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("module");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });