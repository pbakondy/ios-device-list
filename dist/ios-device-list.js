(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["iosDeviceList"] = factory();
	else
		root["iosDeviceList"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	var uniq = __webpack_require__(1);
	var cloneDeep = __webpack_require__(2);
	var flatten = __webpack_require__(4);

	var apple_tv = __webpack_require__(5);
	var apple_watch = __webpack_require__(6);
	var ipad = __webpack_require__(7);
	var ipad_mini = __webpack_require__(8);
	var iphone = __webpack_require__(9);
	var ipod_touch = __webpack_require__(10);

	var all = function () {
	  var l = [];

	  var total = [].concat(apple_tv.map(function (v) {
	    v.Type = 'apple_tv';return v;
	  }), apple_watch.map(function (v) {
	    v.Type = 'apple_watch';return v;
	  }), ipad.map(function (v) {
	    v.Type = 'ipad';return v;
	  }), ipad_mini.map(function (v) {
	    v.Type = 'ipad_mini';return v;
	  }), iphone.map(function (v) {
	    v.Type = 'iphone';return v;
	  }), ipod_touch.map(function (v) {
	    v.Type = 'ipod_touch';return v;
	  }));

	  total.forEach(function (v) {
	    v.Models.forEach(function (m) {
	      m.Model.forEach(function (mid) {
	        var item = {
	          Type: v.Type,
	          Generation: v.Generation,
	          ANumber: v.ANumber,
	          Bootrom: v.Bootrom,
	          Variant: v.Variant,
	          FCCID: v.FCCID,
	          InternalName: v.InternalName,
	          Identifier: v.Identifier,
	          Color: m.Color,
	          Storage: m.Storage,
	          Model: mid
	        };
	        if (m.CaseMaterial) {
	          item.CaseMaterial = m.CaseMaterial;
	        }
	        l.push(item);
	      });
	    });
	  });

	  return l;
	}();

	function deviceTypes() {
	  return 'apple_tv,apple_watch,ipad,ipad_mini,iphone,ipod_touch'.split(',');
	}

	function devices(type) {
	  if (type) {
	    if (deviceTypes().indexOf(type) === -1) {
	      throw new TypeError('Invalid type parameter');
	    }
	    return cloneDeep(all.filter(function (d) {
	      return d.Type === type;
	    }));
	  }
	  return cloneDeep(all);
	}

	function generations(type) {
	  var list = void 0;

	  if (type) {
	    if (deviceTypes().indexOf(type) === -1) {
	      throw new TypeError('Invalid type parameter');
	    }
	    list = all.filter(function (d) {
	      return d.Type === type;
	    });
	  } else {
	    list = all;
	  }

	  return uniq(list.map(function (v) {
	    return v.Generation;
	  }));
	}

	function anumbers(type) {
	  var list = void 0;

	  if (type) {
	    if (deviceTypes().indexOf(type) === -1) {
	      throw new TypeError('Invalid type parameter');
	    }
	    list = all.filter(function (d) {
	      return d.Type === type;
	    });
	  } else {
	    list = all;
	  }

	  return uniq(flatten(list.map(function (v) {
	    return v.ANumber;
	  }))).sort();
	}

	function fccids(type) {
	  var list = void 0;

	  if (type) {
	    if (deviceTypes().indexOf(type) === -1) {
	      throw new TypeError('Invalid type parameter');
	    }
	    list = all.filter(function (d) {
	      return d.Type === type;
	    });
	  } else {
	    list = all;
	  }

	  return uniq(flatten(list.map(function (v) {
	    return v.FCCID;
	  }))).sort();
	}

	function internalNames(type) {
	  var list = void 0;

	  if (type) {
	    if (deviceTypes().indexOf(type) === -1) {
	      throw new TypeError('Invalid type parameter');
	    }
	    list = all.filter(function (d) {
	      return d.Type === type;
	    });
	  } else {
	    list = all;
	  }

	  return uniq(flatten(list.map(function (v) {
	    return v.InternalName;
	  }))).sort();
	}

	function identifiers(type) {
	  var list = void 0;

	  if (type) {
	    if (deviceTypes().indexOf(type) === -1) {
	      throw new TypeError('Invalid type parameter');
	    }
	    list = all.filter(function (d) {
	      return d.Type === type;
	    });
	  } else {
	    list = all;
	  }

	  return uniq(list.map(function (v) {
	    return v.Identifier;
	  })).sort();
	}

	function colors(type) {
	  var list = void 0;

	  if (type) {
	    if (deviceTypes().indexOf(type) === -1) {
	      throw new TypeError('Invalid type parameter');
	    }
	    list = all.filter(function (d) {
	      return d.Type === type;
	    });
	  } else {
	    list = all;
	  }

	  return uniq(list.map(function (v) {
	    return v.Color;
	  })).sort();
	}

	function storages(type) {
	  var list = void 0;

	  if (type) {
	    if (deviceTypes().indexOf(type) === -1) {
	      throw new TypeError('Invalid type parameter');
	    }
	    list = all.filter(function (d) {
	      return d.Type === type;
	    });
	  } else {
	    list = all;
	  }

	  return uniq(list.map(function (v) {
	    return v.Storage;
	  })).sort();
	}

	function models(type) {
	  var list = void 0;

	  if (type) {
	    if (deviceTypes().indexOf(type) === -1) {
	      throw new TypeError('Invalid type parameter');
	    }
	    list = all.filter(function (d) {
	      return d.Type === type;
	    });
	  } else {
	    list = all;
	  }

	  return uniq(list.map(function (v) {
	    return v.Model;
	  })).sort();
	}

	function deviceByGeneration(generation, type, options) {
	  if (typeof generation !== 'string') {
	    throw new TypeError('`generation` parameter must be a string');
	  }

	  options = options || {};
	  var caseInsensitive = !!options.caseInsensitive;
	  var contains = !!options.contains;

	  return deviceByFilter(generation, 'Generation', type, caseInsensitive, contains);
	}

	function deviceByANumber(anumber, type, options) {
	  if (typeof anumber !== 'string') {
	    throw new TypeError('`anumber` parameter must be a string');
	  }

	  options = options || {};
	  var caseInsensitive = !!options.caseInsensitive;
	  var contains = !!options.contains;

	  return deviceByFilter(anumber, 'ANumber', type, caseInsensitive, contains, true);
	}

	function deviceByFCCID(fccid, type, options) {
	  if (typeof fccid !== 'string') {
	    throw new TypeError('`fccid` parameter must be a string');
	  }

	  options = options || {};
	  var caseInsensitive = !!options.caseInsensitive;
	  var contains = !!options.contains;

	  return deviceByFilter(fccid, 'FCCID', type, caseInsensitive, contains, true);
	}

	function deviceByInternalName(name, type, options) {
	  if (typeof name !== 'string') {
	    throw new TypeError('`name` parameter must be a string');
	  }

	  options = options || {};
	  var caseInsensitive = !!options.caseInsensitive;
	  var contains = !!options.contains;

	  return deviceByFilter(name, 'InternalName', type, caseInsensitive, contains, true);
	}

	function deviceByIdentifier(id, type, options) {
	  if (typeof id !== 'string') {
	    throw new TypeError('`id` parameter must be a string');
	  }

	  options = options || {};
	  var caseInsensitive = !!options.caseInsensitive;
	  var contains = !!options.contains;

	  return deviceByFilter(id, 'Identifier', type, caseInsensitive, contains);
	}

	function deviceByColor(color, type, options) {
	  if (typeof color !== 'string') {
	    throw new TypeError('`color` parameter must be a string');
	  }

	  options = options || {};
	  var caseInsensitive = !!options.caseInsensitive;
	  var contains = !!options.contains;

	  return deviceByFilter(color, 'Color', type, caseInsensitive, contains);
	}

	function deviceByStorage(storage, type, options) {
	  if (typeof storage !== 'string') {
	    throw new TypeError('`storage` parameter must be a string');
	  }

	  options = options || {};
	  var caseInsensitive = !!options.caseInsensitive;
	  var contains = !!options.contains;

	  return deviceByFilter(storage, 'Storage', type, caseInsensitive, contains);
	}

	function deviceByModel(model, type, options) {
	  if (typeof model !== 'string') {
	    throw new TypeError('`model` parameter must be a string');
	  }

	  options = options || {};
	  var caseInsensitive = !!options.caseInsensitive;
	  var contains = !!options.contains;

	  return deviceByFilter(model, 'Model', type, caseInsensitive, contains);
	}

	function deviceByFilter(find, field, type, caseInsensitive, contains, findInArray) {
	  var list = void 0;

	  if (type) {
	    if (deviceTypes().indexOf(type) === -1) {
	      throw new TypeError('Invalid type parameter');
	    }
	    list = all.filter(function (d) {
	      return d.Type === type;
	    });
	  } else {
	    list = all;
	  }

	  return list.filter(function (device) {
	    if (!device[field]) {
	      return false;
	    }

	    var match = false;

	    if (typeof device[field] === 'string') {
	      match = device[field] === find || contains && device[field].indexOf(find) !== -1 || caseInsensitive && device[field].toLowerCase() === find.toLowerCase() || caseInsensitive && contains && device[field].toLowerCase().indexOf(find.toLowerCase()) !== -1;
	    }

	    if (!findInArray) {
	      return match;
	    }

	    if (match === true) {
	      return true;
	    }

	    if (findInArray && !Array.isArray(device[field])) {
	      return false;
	    }

	    var arrMatch = false;

	    device[field].forEach(function (current) {
	      arrMatch = arrMatch || current === find || contains && current.indexOf(find) !== -1 || caseInsensitive && current.toLowerCase() === find.toLowerCase() || caseInsensitive && contains && current.toLowerCase().indexOf(find.toLowerCase()) !== -1;
	    });

	    return arrMatch;
	  });
	}

	function generationByIdentifier(id, type) {
	  if (typeof id !== 'string') {
	    throw new TypeError('`id` parameter must be a string');
	  }

	  var devices = deviceByFilter(id, 'Identifier', type);

	  if (devices.length === 0) {
	    return;
	  }

	  return devices[0].Generation;
	}

	module.exports = {
	  deviceTypes: deviceTypes, devices: devices,
	  generations: generations, anumbers: anumbers, fccids: fccids, internalNames: internalNames, identifiers: identifiers, colors: colors, storages: storages, models: models,
	  deviceByGeneration: deviceByGeneration, deviceByANumber: deviceByANumber, deviceByFCCID: deviceByFCCID, deviceByInternalName: deviceByInternalName,
	  deviceByIdentifier: deviceByIdentifier, deviceByColor: deviceByColor, deviceByStorage: deviceByStorage, deviceByModel: deviceByModel,
	  generationByIdentifier: generationByIdentifier
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to search.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to search.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while (fromRight ? index-- : ++index < length) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return baseFindIndex(array, baseIsNaN, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	/**
	 * Checks if a cache value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function (value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = function () {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? 'Symbol(src)_1.' + uid : '';
	}();

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map'),
	    Set = getNative(root, 'Set'),
	    nativeCreate = getNative(Object, 'create');

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash(),
	    'map': new (Map || ListCache)(),
	    'string': new Hash()
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache();
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;

	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  } else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache();
	  } else {
	    seen = iteratee ? [] : result;
	  }
	  outer: while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = comparator || value !== 0 ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    } else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	/**
	 * Creates a set object of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function (values) {
	  return new Set(values);
	};

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && maskSrcKey in func;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return func + '';
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Creates a duplicate-free version of an array, using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons, in which only the first occurrence of each
	 * element is kept.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @returns {Array} Returns the new duplicate free array.
	 * @example
	 *
	 * _.uniq([2, 1, 2]);
	 * // => [2, 1]
	 */
	function uniq(array) {
	  return array && array.length ? baseUniq(array) : [];
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || value !== value && other !== other;
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = uniq;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function (value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Creates a function that invokes `func` with its first argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function (value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = function () {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? 'Symbol(src)_1.' + uid : '';
	}();

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    _Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    objectCreate = Object.create,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf,
	    nativeGetSymbols = Object.getOwnPropertySymbols,
	    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeKeys = Object.keys;

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash(),
	    'map': new (Map || ListCache)(),
	    'string': new Hash()
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache();
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
	    object[key] = value;
	  }
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || isFunc && !object) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack());
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function (subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return object != null && (hasOwnProperty.call(object, key) || (typeof object === 'undefined' ? 'undefined' : _typeof(object)) == 'object' && key in object && getPrototype(object) === null);
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	var baseKeys = overArg(nativeKeys, Object);

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor());
	}

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor());
	}

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}

	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	var getPrototype = overArg(nativeGetPrototype, Object);

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
	  getTag = function getTag(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString:
	          return dataViewTag;
	        case mapCtorString:
	          return mapTag;
	        case promiseCtorString:
	          return promiseTag;
	        case setCtorString:
	          return setTag;
	        case weakMapCtorString:
	          return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
	}

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag:case float64Tag:
	    case int8Tag:case int16Tag:case int32Tag:
	    case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) && (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && maskSrcKey in func;
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

	  return value === proto;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return func + '';
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, true, true);
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || value !== value && other !== other;
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  for (var key in object) {
	    if (baseHas(object, key) && !(skipIndexes && (key == 'length' || isIndex(key, length))) && !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = cloneDeep;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(3)(module)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var _Symbol = root.Symbol,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */
	function flatten(array) {
	  var length = array ? array.length : 0;
	  return length ? baseFlatten(array, 1) : [];
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	module.exports = flatten;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = [
		{
			"Generation": "Apple TV 2G",
			"ANumber": "A1378",
			"Bootrom": "Bootrom 574.4",
			"Variant": null,
			"FCCID": "BCGA1378",
			"InternalName": "K66AP",
			"Identifier": "AppleTV2,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "8 GB",
					"Model": [
						"MC572"
					]
				}
			]
		},
		{
			"Generation": "Apple TV 3G",
			"ANumber": "A1427",
			"Bootrom": "ROM",
			"Variant": "AppleTV3,1",
			"FCCID": "BCGA1427",
			"InternalName": "J33AP",
			"Identifier": "AppleTV3,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "8 GB",
					"Model": [
						"MD199"
					]
				}
			]
		},
		{
			"Generation": "Apple TV 3G",
			"ANumber": "A1469",
			"Bootrom": "Bootrom 1458.2",
			"Variant": "AppleTV3,2",
			"FCCID": "BCGA1469",
			"InternalName": "J33IAP",
			"Identifier": "AppleTV3,2",
			"Models": [
				{
					"Color": "Black",
					"Storage": "8 GB",
					"Model": [
						"MD199"
					]
				}
			]
		},
		{
			"Generation": "Apple TV 4G",
			"ANumber": "A1625",
			"Bootrom": "Bootrom 1992.0.0.1.19",
			"Variant": null,
			"FCCID": "BCGA1625",
			"InternalName": "J42dAP",
			"Identifier": "AppleTV5,3",
			"Models": [
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MGY52"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MLNC2"
					]
				}
			]
		}
	];

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = [
		{
			"Generation": "Apple Watch",
			"ANumber": [
				"A1553"
			],
			"Bootrom": "?",
			"Variant": null,
			"FCCID": "BCG-E2870",
			"InternalName": "N27aAP",
			"Identifier": "Watch1,1",
			"Models": [
				{
					"CaseMaterial": "Aluminum",
					"Color": "Silver",
					"Storage": "8 GB",
					"Model": [
						"MJ2T2",
						"MJ2V2",
						"MJ2U2",
						"MJ2W2"
					]
				},
				{
					"CaseMaterial": "Aluminum",
					"Color": "Space Black",
					"Storage": "8 GB",
					"Model": [
						"MJ2X2"
					]
				},
				{
					"CaseMaterial": "Stainless Steel",
					"Color": "Stainless Steel",
					"Storage": "8 GB",
					"Model": [
						"MJ302",
						"MJ2Y2",
						"MJ312",
						"MJ322",
						"MJYK2",
						"MJ332",
						"MJ362",
						"MJ3A2",
						"MJ3E2"
					]
				},
				{
					"CaseMaterial": "Stainless Steel",
					"Color": "Space Black",
					"Storage": "8 GB",
					"Model": [
						"MJ3F2"
					]
				}
			]
		},
		{
			"Generation": "Apple Watch",
			"ANumber": [
				"A1554",
				"A1638"
			],
			"Bootrom": "?",
			"Variant": null,
			"FCCID": "BCG-E2871",
			"InternalName": "N28aAP",
			"Identifier": "Watch1,2",
			"Models": [
				{
					"CaseMaterial": "Aluminum",
					"Color": "Silver",
					"Storage": "8 GB",
					"Model": [
						"MJ3N2",
						"MJ3Q2",
						"MJ3P2",
						"MJ3R2"
					]
				},
				{
					"CaseMaterial": "Aluminum",
					"Color": "Space Black",
					"Storage": "8 GB",
					"Model": [
						"MJ3T2"
					]
				},
				{
					"CaseMaterial": "Stainless Steel",
					"Color": "Stainless Steel",
					"Storage": "8 GB",
					"Model": [
						"MJ3V2",
						"MJ3U2",
						"MJ3X2",
						"MJ3Y2",
						"MJYN2",
						"MJ452",
						"MJ432",
						"MJ402",
						"MJ472"
					]
				},
				{
					"CaseMaterial": "Stainless Steel",
					"Color": "Space Black",
					"Storage": "8 GB",
					"Model": [
						"MJ482",
						"MLC82"
					]
				}
			]
		}
	];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = [
		{
			"Generation": "iPad",
			"ANumber": "A1219",
			"Bootrom": "Bootrom 574.4",
			"Variant": "Wi‑Fi",
			"FCCID": "BCG‑E2381A",
			"InternalName": "K48AP",
			"Identifier": "iPad1,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MB292"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MB293"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MB294"
					]
				}
			]
		},
		{
			"Generation": "iPad",
			"ANumber": "A1219",
			"Bootrom": "Bootrom 574.4",
			"Variant": "GSM",
			"FCCID": "BCG‑E2328A",
			"InternalName": "K48AP",
			"Identifier": "iPad1,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MC349"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MC496"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MC497"
					]
				}
			]
		},
		{
			"Generation": "iPad 2",
			"ANumber": "A1395",
			"Bootrom": "Bootrom 838.3",
			"Variant": "iPad2,1",
			"FCCID": "BCGA1395",
			"InternalName": "K93AP",
			"Identifier": "iPad2,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MC769"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MC770"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MC916"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MC979"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MC980"
					]
				},
				{
					"Color": "White",
					"Storage": "64 GB",
					"Model": [
						"MC981"
					]
				}
			]
		},
		{
			"Generation": "iPad 2",
			"ANumber": "A1396",
			"Bootrom": "Bootrom 838.3",
			"Variant": "iPad2,2",
			"FCCID": "BCGA1396",
			"InternalName": "K94AP",
			"Identifier": "iPad2,2",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MC773"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MC774"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MC775"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MC982"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MC983"
					]
				},
				{
					"Color": "White",
					"Storage": "64 GB",
					"Model": [
						"MC984"
					]
				}
			]
		},
		{
			"Generation": "iPad 2",
			"ANumber": "A1397",
			"Bootrom": "Bootrom 838.3",
			"Variant": "iPad2,3",
			"FCCID": "BCGA1397",
			"InternalName": "K95AP",
			"Identifier": "iPad2,3",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MC755"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MC763"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MC764"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MC985"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MC986"
					]
				},
				{
					"Color": "White",
					"Storage": "64 GB",
					"Model": [
						"MC987"
					]
				}
			]
		},
		{
			"Generation": "iPad 2",
			"ANumber": "A1395",
			"Bootrom": "ROM",
			"Variant": "iPad2,4",
			"FCCID": "BCGA1395",
			"InternalName": "K93AAP",
			"Identifier": "iPad2,4",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MC954",
						"MC988"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MC989"
					]
				}
			]
		},
		{
			"Generation": "iPad 3",
			"ANumber": "A1416",
			"Bootrom": "Bootrom 1062.2",
			"Variant": "iPad3,1",
			"FCCID": "BCGA1416",
			"InternalName": "J1AP",
			"Identifier": "iPad3,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MC705",
						"MD333"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MC706",
						"MD334"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MC707"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MD328"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MD329"
					]
				},
				{
					"Color": "White",
					"Storage": "64 GB",
					"Model": [
						"MD330"
					]
				}
			]
		},
		{
			"Generation": "iPad 3",
			"ANumber": "A1403",
			"Bootrom": "Bootrom 1062.2",
			"Variant": "iPad3,2",
			"FCCID": "BCGA1403",
			"InternalName": "J2AP",
			"Identifier": "iPad3,2",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MC733"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MC744"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MC756"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MD363"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MD364"
					]
				},
				{
					"Color": "White",
					"Storage": "64 GB",
					"Model": [
						"MD365"
					]
				}
			]
		},
		{
			"Generation": "iPad 3",
			"ANumber": "A1430",
			"Bootrom": "Bootrom 1062.2",
			"Variant": "iPad3,3",
			"FCCID": "BCGA1430",
			"InternalName": "J2AAP",
			"Identifier": "iPad3,3",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MD366"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MD367"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MD368"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MD369"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MD370"
					]
				},
				{
					"Color": "White",
					"Storage": "64 GB",
					"Model": [
						"MD371"
					]
				}
			]
		},
		{
			"Generation": "iPad 4",
			"ANumber": "A1458",
			"Bootrom": "Bootrom 1145.3.3",
			"Variant": "iPad3,4",
			"FCCID": "BCGA1458",
			"InternalName": "P101AP",
			"Identifier": "iPad3,4",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MD510"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MD511"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MD512"
					]
				},
				{
					"Color": "Black",
					"Storage": "128 GB",
					"Model": [
						"ME392"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MD513"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MD514"
					]
				},
				{
					"Color": "White",
					"Storage": "64 GB",
					"Model": [
						"MD515"
					]
				},
				{
					"Color": "White",
					"Storage": "128 GB",
					"Model": [
						"ME393"
					]
				}
			]
		},
		{
			"Generation": "iPad 4",
			"ANumber": "A1459",
			"Bootrom": "Bootrom 1145.3.3",
			"Variant": "iPad3,5",
			"FCCID": "BCGA1459",
			"InternalName": "P102AP",
			"Identifier": "iPad3,5",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MD516"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MD517"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MD518"
					]
				},
				{
					"Color": "Black",
					"Storage": "128 GB",
					"Model": [
						"ME400"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MD519"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MD520"
					]
				},
				{
					"Color": "White",
					"Storage": "64 GB",
					"Model": [
						"MD521"
					]
				},
				{
					"Color": "White",
					"Storage": "128 GB",
					"Model": [
						"ME401"
					]
				}
			]
		},
		{
			"Generation": "iPad 4",
			"ANumber": "A1460",
			"Bootrom": "Bootrom 1145.3.3",
			"Variant": "iPad3,6",
			"FCCID": "BCGA1460",
			"InternalName": "P103AP",
			"Identifier": "iPad3,6",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MD522",
						"ME195"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MD523",
						"ME196"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MD524",
						"ME197"
					]
				},
				{
					"Color": "Black",
					"Storage": "128 GB",
					"Model": [
						"ME406",
						"ME410"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MD525",
						"ME198"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MD526",
						"ME199"
					]
				},
				{
					"Color": "White",
					"Storage": "64 GB",
					"Model": [
						"MD527",
						"ME200"
					]
				},
				{
					"Color": "White",
					"Storage": "128 GB",
					"Model": [
						"ME407",
						"ME411"
					]
				}
			]
		},
		{
			"Generation": "iPad Air",
			"ANumber": "A1474",
			"Bootrom": "Bootrom 1704.10",
			"Variant": "iPad4,1",
			"FCCID": "BCGA1474",
			"InternalName": "J71AP",
			"Identifier": "iPad4,1",
			"Models": [
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MD788"
					]
				},
				{
					"Color": "Silver",
					"Storage": "32 GB",
					"Model": [
						"MD789"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MD790"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"ME906"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MD785"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "32 GB",
					"Model": [
						"MD786"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"MD787"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"ME898"
					]
				}
			]
		},
		{
			"Generation": "iPad Air",
			"ANumber": "A1475",
			"Bootrom": "Bootrom 1704.10",
			"Variant": "iPad4,2",
			"FCCID": "BCGA1475",
			"InternalName": "J72AP",
			"Identifier": "iPad4,2",
			"Models": [
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MD794",
						"ME997",
						"ME999",
						"MF021",
						"MF502"
					]
				},
				{
					"Color": "Silver",
					"Storage": "32 GB",
					"Model": [
						"MD795",
						"MF025",
						"MF527",
						"MF529",
						"MF532"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MD796",
						"MF012",
						"MF013",
						"MF027",
						"MF539"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"ME988",
						"MF018",
						"MF019",
						"MF029",
						"MF563"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MD791",
						"ME991",
						"ME993",
						"MF020",
						"MF496"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "32 GB",
					"Model": [
						"MD792",
						"MF003",
						"MF004",
						"MF024",
						"MF520"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"MD793",
						"MF009",
						"MF010",
						"MF026",
						"MF534"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"ME987",
						"MF015",
						"MF016",
						"MF028",
						"MF558"
					]
				}
			]
		},
		{
			"Generation": "iPad Air",
			"ANumber": "A1476",
			"Bootrom": "Bootrom 1704.10",
			"Variant": "iPad4,3",
			"FCCID": "BCGA1476",
			"InternalName": "J73AP",
			"Identifier": "iPad4,3",
			"Models": [
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MF230"
					]
				},
				{
					"Color": "Silver",
					"Storage": "32 GB",
					"Model": [
						"MF233"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MF234"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"MF236"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MD797"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "32 GB",
					"Model": [
						"MD798"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"MD799"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"MF235"
					]
				}
			]
		},
		{
			"Generation": "iPad Air 2",
			"ANumber": "A1566",
			"Bootrom": "Bootrom 1991.0.0.2.16",
			"Variant": "iPad5,3",
			"FCCID": "BCGA1566",
			"InternalName": "J81AP",
			"Identifier": "iPad5,3",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "16 GB",
					"Model": [
						"MH0W2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "64 GB",
					"Model": [
						"MH182"
					]
				},
				{
					"Color": "Gold",
					"Storage": "128 GB",
					"Model": [
						"MH1J2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MGLW2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MGKM2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"MGTY2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MGL12"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"MGKL2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"MGTX2"
					]
				}
			]
		},
		{
			"Generation": "iPad Air 2",
			"ANumber": "A1566",
			"Bootrom": "Bootrom 1991.0.0.2.16",
			"Variant": "iPad5,3",
			"FCCID": "BCGA1566",
			"InternalName": "J81AP",
			"Identifier": "iPad5,3",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "16 GB",
					"Model": [
						"MH2W2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "64 GB",
					"Model": [
						"MH2P2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "128 GB",
					"Model": [
						"MH332"
					]
				},
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MH2V2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MH2N2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"MH322"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MGGX2F",
						"MH2U2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"MH2M2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"MH312"
					]
				}
			]
		},
		{
			"Generation": "iPad Pro (9.7 inch)",
			"ANumber": "A1673",
			"Bootrom": "Bootrom 2481.0.0.2.1‎",
			"Variant": "iPad6,3",
			"FCCID": "BCGA1673",
			"InternalName": "J127AP",
			"Identifier": "iPad6,3",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "32 GB",
					"Model": [
						"MLMQ2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "128 GB",
					"Model": [
						"MLMX2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "256 GB",
					"Model": [
						"MLN12"
					]
				},
				{
					"Color": "Rose Gold",
					"Storage": "32 GB",
					"Model": [
						"MM172"
					]
				},
				{
					"Color": "Rose Gold",
					"Storage": "128 GB",
					"Model": [
						"MM172"
					]
				},
				{
					"Color": "Rose Gold",
					"Storage": "256 GB",
					"Model": [
						"MM1A2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "32 GB",
					"Model": [
						"MLMP2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"MLMW2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "256 GB",
					"Model": [
						"MLN02"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "32 GB",
					"Model": [
						"MLMN2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"MLMV2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "256 GB",
					"Model": [
						"MLMY2"
					]
				}
			]
		},
		{
			"Generation": "iPad Pro (9.7 inch)",
			"ANumber": [
				"A1674",
				"A1675"
			],
			"Bootrom": "Bootrom 2481.0.0.2.1‎",
			"Variant": "iPad6,4",
			"FCCID": "BCGA1674",
			"InternalName": "J128AP",
			"Identifier": "iPad6,4",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "32 GB",
					"Model": [
						"MLPY2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "128 GB",
					"Model": [
						"MLQ52"
					]
				},
				{
					"Color": "Gold",
					"Storage": "256 GB",
					"Model": [
						"MLQ82"
					]
				},
				{
					"Color": "Rose Gold",
					"Storage": "32 GB",
					"Model": [
						"MLYJ2"
					]
				},
				{
					"Color": "Rose Gold",
					"Storage": "128 GB",
					"Model": [
						"MLYL2"
					]
				},
				{
					"Color": "Rose Gold",
					"Storage": "256 GB",
					"Model": [
						"MLYM2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "32 GB",
					"Model": [
						"MLPX2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"MLQ42"
					]
				},
				{
					"Color": "Silver",
					"Storage": "256 GB",
					"Model": [
						"MLQ72"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "32 GB",
					"Model": [
						"MLPW2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"MLQ32"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "256 GB",
					"Model": [
						"MLQ62"
					]
				}
			]
		},
		{
			"Generation": "iPad Pro (12.9 inch)",
			"ANumber": "A1584",
			"Bootrom": "Bootrom 2481.0.0.2.1‎",
			"Variant": "iPad6,7",
			"FCCID": "BCGA1584",
			"InternalName": "J98aAP",
			"Identifier": "iPad6,7",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "32 GB",
					"Model": [
						"ML0H2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "128 GB",
					"Model": [
						"ML0R2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "256 GB",
					"Model": [
						"ML0V2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "32 GB",
					"Model": [
						"ML0G2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"ML0Q2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "256 GB",
					"Model": [
						"ML0U2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "32 GB",
					"Model": [
						"ML0F2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"ML0N2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "256 GB",
					"Model": [
						"ML0T2"
					]
				}
			]
		},
		{
			"Generation": "iPad Pro (12.9 inch)",
			"ANumber": "A1652",
			"Bootrom": "Bootrom 2481.0.0.2.1‎",
			"Variant": "iPad6,8",
			"FCCID": "BCGA1652",
			"InternalName": "J99aAP",
			"Identifier": "iPad6,8",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "128 GB",
					"Model": [
						"ML3Q2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "256 GB",
					"Model": [
						"ML3Z2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"ML3N2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "256 GB",
					"Model": [
						"ML3W2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"ML3K2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "256 GB",
					"Model": [
						"ML3T2"
					]
				}
			]
		}
	];

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = [
		{
			"Generation": "iPad mini",
			"ANumber": "A1432",
			"Bootrom": "ROM",
			"Variant": "iPad2,5",
			"FCCID": "BCGA1432",
			"InternalName": "P105AP",
			"Identifier": "iPad2,5",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MD528"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MD529"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MD530"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MD531"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MD532"
					]
				},
				{
					"Color": "White",
					"Storage": "64 GB",
					"Model": [
						"MD533"
					]
				}
			]
		},
		{
			"Generation": "iPad mini",
			"ANumber": "A1454",
			"Bootrom": "ROM",
			"Variant": "iPad2,6",
			"FCCID": "BCGA1454",
			"InternalName": "P106AP",
			"Identifier": "iPad2,6",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MD534"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MD535"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MD536"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MD537"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MD538"
					]
				},
				{
					"Color": "White",
					"Storage": "64 GB",
					"Model": [
						"MD539"
					]
				}
			]
		},
		{
			"Generation": "iPad mini",
			"ANumber": "A1455",
			"Bootrom": "ROM",
			"Variant": "iPad2,7",
			"FCCID": "BCGA1455",
			"InternalName": "P107AP",
			"Identifier": "iPad2,7",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MD540",
						"ME215"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MD541",
						"ME216"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MD542",
						"ME217"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MD543",
						"ME218"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MD544",
						"ME219"
					]
				},
				{
					"Color": "White",
					"Storage": "64 GB",
					"Model": [
						"MD545",
						"ME220"
					]
				}
			]
		},
		{
			"Generation": "iPad mini 2",
			"ANumber": "A1489",
			"Bootrom": "Bootrom 1704.10",
			"Variant": "iPad4,4",
			"FCCID": "BCGA1489",
			"InternalName": "J85AP",
			"Identifier": "iPad4,4",
			"Models": [
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"ME279"
					]
				},
				{
					"Color": "Silver",
					"Storage": "32 GB",
					"Model": [
						"ME280"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"ME281"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"ME860"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"ME276"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "32 GB",
					"Model": [
						"ME277"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"ME278"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"ME856"
					]
				}
			]
		},
		{
			"Generation": "iPad mini 2",
			"ANumber": "A1490",
			"Bootrom": "Bootrom 1704.10",
			"Variant": "iPad4,5",
			"FCCID": "BCGA1490",
			"InternalName": "J86AP",
			"Identifier": "iPad4,5",
			"Models": [
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"ME814"
					]
				},
				{
					"Color": "Silver",
					"Storage": "32 GB",
					"Model": [
						"ME824"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"ME832"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"ME840"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"ME800"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "32 GB",
					"Model": [
						"ME820"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"ME828"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"ME836"
					]
				}
			]
		},
		{
			"Generation": "iPad mini 2",
			"ANumber": "A1491",
			"Bootrom": "Bootrom 1704.10",
			"Variant": "iPad4,6",
			"FCCID": "BCGA1491",
			"InternalName": "J87AP",
			"Identifier": "iPad4,6",
			"Models": [
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MF248"
					]
				},
				{
					"Color": "Silver",
					"Storage": "32 GB",
					"Model": [
						"MF252"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MF246"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"MF244"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MF247"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "32 GB",
					"Model": [
						"MF251"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"MF245"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"MF243"
					]
				}
			]
		},
		{
			"Generation": "iPad mini 3",
			"ANumber": "A1599",
			"Bootrom": "Bootrom 1991.0.0.2.16",
			"Variant": "iPad4,7",
			"FCCID": "BCGA1599",
			"InternalName": "J85mAP",
			"Identifier": "iPad4,7",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "16 GB",
					"Model": [
						"MGYE2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "64 GB",
					"Model": [
						"MGY92"
					]
				},
				{
					"Color": "Gold",
					"Storage": "128 GB",
					"Model": [
						"MGYK2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MGNV2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MGGT2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"MGP42"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MGNR2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"MGGQ2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"MGP32"
					]
				}
			]
		},
		{
			"Generation": "iPad mini 3",
			"ANumber": "A1600",
			"Bootrom": "Bootrom 1991.0.0.2.16",
			"Variant": "iPad4,8",
			"FCCID": "BCGA1600",
			"InternalName": "J86mAP",
			"Identifier": "iPad4,8",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "16 GB",
					"Model": [
						"MH3G2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "64 GB",
					"Model": [
						"MH392"
					]
				},
				{
					"Color": "Gold",
					"Storage": "128 GB",
					"Model": [
						"MH3N2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MH3F2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MH382"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"MH3M2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MH3E2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"MH372"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"MH3L2"
					]
				}
			]
		},
		{
			"Generation": "iPad mini 3",
			"ANumber": "A1601",
			"Bootrom": "Bootrom 1991.0.0.2.16",
			"Variant": "iPad4,9",
			"FCCID": "BCGA1601",
			"InternalName": "J87mAP",
			"Identifier": "iPad4,9",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "16 GB",
					"Model": [
						"MGYR2",
						"MGYY2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "64 GB",
					"Model": [
						"MGYN2",
						"MGYW2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "128 GB",
					"Model": [
						"MGYU2",
						"MH012"
					]
				},
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MGHW2",
						"MGPW2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MGJ12",
						"MGQ12"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"MGJ32",
						"MGQ32"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MGHV2",
						"MGPV2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"MGJ02",
						"MGQ02"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"MGJ22",
						"MGQ22"
					]
				}
			]
		},
		{
			"Generation": "iPad mini 4",
			"ANumber": "A1538",
			"Bootrom": "Bootrom 1992.0.0.1.19",
			"Variant": "iPad5,1",
			"FCCID": "BCGA1538",
			"InternalName": "J96AP",
			"Identifier": "iPad5,1",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "16 GB",
					"Model": [
						"MK6L2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "64 GB",
					"Model": [
						"MK9J2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "128 GB",
					"Model": [
						"MK9Q2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MK6K2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MK9H2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"MK9P2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MK6J2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"MK9G2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"MK9N2"
					]
				}
			]
		},
		{
			"Generation": "iPad mini 4",
			"ANumber": "A1550",
			"Bootrom": "Bootrom 1992.0.0.1.19",
			"Variant": "iPad5,2",
			"FCCID": "BCGA1550",
			"InternalName": "J97AP",
			"Identifier": "iPad5,2",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "16 GB",
					"Model": [
						"MK882"
					]
				},
				{
					"Color": "Gold",
					"Storage": "64 GB",
					"Model": [
						"MK8C2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "128 GB",
					"Model": [
						"MK8F2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MK872"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MK8A2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"MK8E2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MK862"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"MK892"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"MK8D2"
					]
				}
			]
		}
	];

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = [
		{
			"Generation": "iPhone",
			"ANumber": [
				"A1203"
			],
			"Bootrom": [
				"Bootrom Rev.2"
			],
			"Variant": null,
			"FCCID": [
				"BCGA1203"
			],
			"InternalName": "M68AP",
			"Identifier": "iPhone1,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "4 GB",
					"Model": [
						"MA501"
					]
				},
				{
					"Color": "Black",
					"Storage": "8 GB",
					"Model": [
						"MA712"
					]
				},
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MB384"
					]
				}
			]
		},
		{
			"Generation": "iPhone 3G",
			"ANumber": [
				"A1241",
				"A1324"
			],
			"Bootrom": [
				"Bootrom Rev.2"
			],
			"Variant": null,
			"FCCID": [
				"BCGA1241"
			],
			"InternalName": "N82AP",
			"Identifier": "iPhone1,2",
			"Models": [
				{
					"Color": "Black",
					"Storage": "8 GB",
					"Model": [
						"MB046",
						"MB489",
						"MB639",
						"MB702",
						"MC176"
					]
				},
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MB048",
						"MB496",
						"MB497",
						"MB704"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MB499",
						"MB500",
						"MB501",
						"MB632",
						"MB705"
					]
				}
			]
		},
		{
			"Generation": "iPhone 3GS",
			"ANumber": [
				"A1303",
				"A1325"
			],
			"Bootrom": [
				"Bootrom 359.3"
			],
			"Variant": null,
			"FCCID": [
				"BCGA1303A",
				"BCGA1303B"
			],
			"InternalName": "N88AP",
			"Identifier": "iPhone2,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MB715",
						"MB735",
						"MC135"
					]
				},
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MB717",
						"MB737"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MB716",
						"MB736",
						"MC136"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MB718",
						"MB738"
					]
				}
			]
		},
		{
			"Generation": "iPhone 3GS",
			"ANumber": [
				"A1303",
				"A1325"
			],
			"Bootrom": [
				"Bootrom 359.3.2"
			],
			"Variant": null,
			"FCCID": [
				"BCGA1303A",
				"BCGA1303B"
			],
			"InternalName": "N88AP",
			"Identifier": "iPhone2,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "8 GB",
					"Model": [
						"MC555",
						"MC640"
					]
				},
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MB715",
						"MC131",
						"MC135"
					]
				},
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MB717",
						"MC133",
						"MC137"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MB716",
						"MC132",
						"MC136"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MC134",
						"MC138"
					]
				}
			]
		},
		{
			"Generation": "iPhone 4",
			"ANumber": [
				"A1332"
			],
			"Bootrom": [
				"Bootrom 574.4"
			],
			"Variant": "iPhone3,1",
			"FCCID": [
				"BCG‑E2380A",
				"BCG‑E2380B"
			],
			"InternalName": "N90AP",
			"Identifier": "iPhone3,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "8 GB",
					"Model": [
						"MD126",
						"MD128"
					]
				},
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MC318",
						"MC603",
						"MC608"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MC319",
						"MC605",
						"MC610"
					]
				},
				{
					"Color": "White",
					"Storage": "8 GB",
					"Model": [
						"MD196",
						"MD197",
						"MD198"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MC604",
						"MC536"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MC606"
					]
				}
			]
		},
		{
			"Generation": "iPhone 4",
			"ANumber": [
				"A1332"
			],
			"Bootrom": [
				"Bootrom 574.4"
			],
			"Variant": "iPhone3,2",
			"FCCID": [
				"BCG‑E2380A",
				"BCG‑E2380B"
			],
			"InternalName": "N90BAP",
			"Identifier": "iPhone3,2",
			"Models": [
				{
					"Color": "Black",
					"Storage": "8 GB",
					"Model": [
						"MD128",
						"ME798"
					]
				},
				{
					"Color": "White",
					"Storage": "8 GB",
					"Model": [
						"ME799"
					]
				}
			]
		},
		{
			"Generation": "iPhone 4",
			"ANumber": [
				"A1349"
			],
			"Bootrom": [
				"Bootrom 574.4"
			],
			"Variant": "iPhone3,3",
			"FCCID": [
				"BCG‑E2422A",
				"BCG‑E2422B"
			],
			"InternalName": "N92AP",
			"Identifier": "iPhone3,3",
			"Models": [
				{
					"Color": "Black",
					"Storage": "8 GB",
					"Model": [
						"MD146",
						"MD439",
						"MD873"
					]
				},
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MC676"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MC678"
					]
				},
				{
					"Color": "White",
					"Storage": "8 GB",
					"Model": [
						"MD200",
						"MD440",
						"MD874"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MC677"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MC679"
					]
				}
			]
		},
		{
			"Generation": "iPhone 4S",
			"ANumber": [
				"A1387",
				"A1431"
			],
			"Bootrom": [
				"Bootrom 838.3"
			],
			"Variant": null,
			"FCCID": [
				"BCG‑E2430A"
			],
			"InternalName": "N94AP",
			"Identifier": "iPhone4,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "8 GB",
					"Model": [
						"ME259",
						"MF257",
						"MF261",
						"MF263",
						"MF265",
						"MF269"
					]
				},
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MC918",
						"MC922",
						"MD234",
						"MD235",
						"MD276",
						"MD377",
						"MD865",
						"ME804"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MC919",
						"MC923",
						"MD241",
						"MD242",
						"MD278",
						"MD379"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MD257",
						"MD258",
						"MD269",
						"MD280",
						"MD381"
					]
				},
				{
					"Color": "White",
					"Storage": "8 GB",
					"Model": [
						"MF258",
						"MF260",
						"MF262",
						"MF264",
						"MF266",
						"MF270"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MC920",
						"MC924",
						"MD237",
						"MD239",
						"MD277",
						"MD378",
						"MD866",
						"ME805"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MC921",
						"MD244",
						"MD279",
						"MD380",
						"MD246"
					]
				},
				{
					"Color": "White",
					"Storage": "64 GB",
					"Model": [
						"MD260",
						"MD271",
						"MD272",
						"MD281",
						"MD382"
					]
				}
			]
		},
		{
			"Generation": "iPhone 5",
			"ANumber": [
				"A1428"
			],
			"Bootrom": [
				"Bootrom 1145.3"
			],
			"Variant": "iPhone5,1",
			"FCCID": [
				"BCG‑E2599A"
			],
			"InternalName": "N41AP",
			"Identifier": "iPhone5,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MD293",
						"MD634",
						"MD638",
						"ME486"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MD295",
						"MD636",
						"ME488",
						"MD295"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MD642",
						"MD644",
						"ME490"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MD294",
						"MD635",
						"ME487"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MD296",
						"MD637",
						"ME489"
					]
				},
				{
					"Color": "White",
					"Storage": "64 GB",
					"Model": [
						"MD643",
						"MD645",
						"ME491"
					]
				}
			]
		},
		{
			"Generation": "iPhone 5",
			"ANumber": [
				"A1429",
				"A1442"
			],
			"Bootrom": [
				"Bootrom 1145.3"
			],
			"Variant": "iPhone5,2",
			"FCCID": [
				"BCG‑E2599A"
			],
			"InternalName": "N41AP",
			"Identifier": "iPhone5,2",
			"Models": [
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MD297",
						"MD654",
						"MD656",
						"ME039"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MD299",
						"MD658",
						"MD660",
						"ME041"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MD662",
						"MD664",
						"MD667",
						"ME043"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"MD298",
						"MD655",
						"MD657",
						"ME040"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MD300",
						"MD659",
						"MD661",
						"ME042"
					]
				},
				{
					"Color": "White",
					"Storage": "64 GB",
					"Model": [
						"MD663",
						"MD665",
						"MD668",
						"ME044"
					]
				}
			]
		},
		{
			"Generation": "iPhone 5c",
			"ANumber": [
				"A1456",
				"A1532"
			],
			"Bootrom": [
				"Bootrom 1145.3"
			],
			"Variant": "iPhone5,3",
			"FCCID": [
				"BCG‑E2644A"
			],
			"InternalName": "N48AP",
			"Identifier": "iPhone5,3",
			"Models": [
				{
					"Color": "Blue",
					"Storage": "16 GB",
					"Model": [
						"ME507"
					]
				},
				{
					"Color": "Blue",
					"Storage": "32 GB",
					"Model": [
						"MF136"
					]
				},
				{
					"Color": "Green",
					"Storage": "16 GB",
					"Model": [
						"ME508"
					]
				},
				{
					"Color": "Green",
					"Storage": "32 GB",
					"Model": [
						"MF137"
					]
				},
				{
					"Color": "Pink",
					"Storage": "16 GB",
					"Model": [
						"ME509"
					]
				},
				{
					"Color": "Pink",
					"Storage": "32 GB",
					"Model": [
						"MF138",
						"MF133"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"ME505"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MF134"
					]
				},
				{
					"Color": "Yellow",
					"Storage": "16 GB",
					"Model": [
						"ME506"
					]
				},
				{
					"Color": "Yellow",
					"Storage": "32 GB",
					"Model": [
						"MF135"
					]
				}
			]
		},
		{
			"Generation": "iPhone 5c",
			"ANumber": [
				"A1507",
				"A1516",
				"A1526",
				"A1529"
			],
			"Bootrom": [
				"Bootrom 1145.3"
			],
			"Variant": "iPhone5,4",
			"FCCID": [
				"BCG‑E2694A",
				"BCG‑E2694B"
			],
			"InternalName": "N49AP",
			"Identifier": "iPhone5,4",
			"Models": [
				{
					"Color": "Blue",
					"Storage": "8 GB",
					"Model": [
						"MG0T2",
						"MG1U2",
						"MG902"
					]
				},
				{
					"Color": "Blue",
					"Storage": "16 GB",
					"Model": [
						"ME555"
					]
				},
				{
					"Color": "Blue",
					"Storage": "32 GB",
					"Model": [
						"MF156"
					]
				},
				{
					"Color": "Green",
					"Storage": "8 GB",
					"Model": [
						"MG0V2",
						"MG1W2",
						"MG912"
					]
				},
				{
					"Color": "Green",
					"Storage": "16 GB",
					"Model": [
						"ME556"
					]
				},
				{
					"Color": "Green",
					"Storage": "32 GB",
					"Model": [
						"MF157"
					]
				},
				{
					"Color": "Pink",
					"Storage": "8 GB",
					"Model": [
						"MG0V2",
						"MG1W2",
						"MG922"
					]
				},
				{
					"Color": "Pink",
					"Storage": "16 GB",
					"Model": [
						"ME557"
					]
				},
				{
					"Color": "Pink",
					"Storage": "32 GB",
					"Model": [
						"MF158"
					]
				},
				{
					"Color": "White",
					"Storage": "8 GB",
					"Model": [
						"MG0Q2",
						"MG1Q2",
						"MG8X2"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"ME553"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MF154"
					]
				},
				{
					"Color": "Yellow",
					"Storage": "8 GB",
					"Model": [
						"MG0R2",
						"MG1R2",
						"MG8Y2"
					]
				},
				{
					"Color": "Yellow",
					"Storage": "16 GB",
					"Model": [
						"ME554"
					]
				},
				{
					"Color": "Yellow",
					"Storage": "32 GB",
					"Model": [
						"MF155"
					]
				}
			]
		},
		{
			"Generation": "iPhone 5s",
			"ANumber": [
				"A1453",
				"A1533"
			],
			"Bootrom": [
				"Bootrom 1704.10"
			],
			"Variant": "iPhone6,1",
			"FCCID": [
				"BCG‑E2642A"
			],
			"InternalName": "N51AP",
			"Identifier": "iPhone6,1",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "16 GB",
					"Model": [
						"ME298",
						"ME307",
						"ME325",
						"ME343"
					]
				},
				{
					"Color": "Gold",
					"Storage": "32 GB",
					"Model": [
						"ME301",
						"ME310",
						"ME328",
						"ME346"
					]
				},
				{
					"Color": "Gold",
					"Storage": "64 GB",
					"Model": [
						"ME304",
						"ME313",
						"ME331",
						"ME349"
					]
				},
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"ME297",
						"ME306",
						"ME324",
						"ME342"
					]
				},
				{
					"Color": "Silver",
					"Storage": "32 GB",
					"Model": [
						"ME300",
						"ME309",
						"ME327",
						"ME345"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"ME303",
						"ME312",
						"ME436",
						"ME348"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"ME296",
						"ME305",
						"ME323",
						"ME341"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "32 GB",
					"Model": [
						"ME299",
						"ME308",
						"ME326",
						"ME344"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"ME302",
						"ME311",
						"ME329",
						"ME347"
					]
				}
			]
		},
		{
			"Generation": "iPhone 5s",
			"ANumber": [
				"A1457",
				"A1518",
				"A1528",
				"A1530"
			],
			"Bootrom": [
				"Bootrom 1704.10"
			],
			"Variant": "iPhone6,2",
			"FCCID": [
				"BCG‑E2643A",
				"BCG‑E2643B"
			],
			"InternalName": "N53AP",
			"Identifier": "iPhone6,2",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "16 GB",
					"Model": [
						"ME434"
					]
				},
				{
					"Color": "Gold",
					"Storage": "32 GB",
					"Model": [
						"ME437"
					]
				},
				{
					"Color": "Gold",
					"Storage": "64 GB",
					"Model": [
						"ME440"
					]
				},
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"ME433"
					]
				},
				{
					"Color": "Silver",
					"Storage": "32 GB",
					"Model": [
						"ME436"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"ME439"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"ME432"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "32 GB",
					"Model": [
						"ME435"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"ME438"
					]
				}
			]
		},
		{
			"Generation": "iPhone SE",
			"ANumber": [
				"A1662",
				"A1723",
				"A1724"
			],
			"Bootrom": [
				"Bootrom 2234.0.0.3.3 (S8000)",
				"Bootrom 2234.0.0.2.22 (S8003)"
			],
			"Variant": "iPhone8,4",
			"FCCID": [
				"BCG‑E2945A"
			],
			"InternalName": [
				"N69AP",
				"N69uAP"
			],
			"Identifier": "iPhone8,4",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "16 GB",
					"Model": [
						"MLXH2",
						"MLXW2",
						"MLY12",
						"MLY52",
						"MLY92"
					]
				},
				{
					"Color": "Gold",
					"Storage": "64 GB",
					"Model": [
						"MLXK2",
						"MLXY2",
						"MLYC2",
						"MLY32",
						"MLY72"
					]
				},
				{
					"Color": "Rose Gold",
					"Storage": "16 GB",
					"Model": [
						"MLXJ2",
						"MLXX2",
						"MLYA2",
						"MLY22",
						"MLY62"
					]
				},
				{
					"Color": "Rose Gold",
					"Storage": "64 GB",
					"Model": [
						"MLXL2",
						"MLYD2",
						"MLY42",
						"MLY02",
						"MLY82"
					]
				},
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MLLM2",
						"MLLV2",
						"MLLX2",
						"MLM02",
						"MLM32"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MLMC2",
						"MLME2",
						"MLMG2",
						"MLMJ2",
						"MLM52"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MLLL2",
						"MLLU2",
						"MLLW2",
						"MLLY2",
						"MLM22"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"MLMA2",
						"MLMD2",
						"MLMF2",
						"MLMH2",
						"MLM42",
						"MLM62"
					]
				}
			]
		},
		{
			"Generation": "iPhone 6",
			"ANumber": [
				"A1549",
				"A1586"
			],
			"Bootrom": [
				"Bootrom 1992.0.0.1.19"
			],
			"Variant": "iPhone7,2",
			"FCCID": [
				"BCG‑E2816A"
			],
			"InternalName": "N61AP",
			"Identifier": "iPhone7,2",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "16 GB",
					"Model": [
						"MG3D2",
						"MG492"
					]
				},
				{
					"Color": "Gold",
					"Storage": "64 GB",
					"Model": [
						"MG3L2",
						"MG4J2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "128 GB",
					"Model": [
						"MG3G2",
						"MG4E2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MG3C2",
						"MG4P2",
						"MG482",
						"MG5X2",
						"MG552",
						"MG6A2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MG3K2",
						"MG4H2",
						"MG4X2",
						"MG5C2",
						"MG6H2",
						"MG642"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"MG3F2",
						"MG4C2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MG3A2",
						"MG4N2",
						"MG472",
						"MG5W2",
						"MG542",
						"MG692"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"MG3H2",
						"MG4F2",
						"MG4W2",
						"MG5A2",
						"MG6G2",
						"MG632"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"MG3E2",
						"MG4A2"
					]
				}
			]
		},
		{
			"Generation": "iPhone 6 Plus",
			"ANumber": [
				"A1522",
				"A1524"
			],
			"Bootrom": [
				"Bootrom 1992.0.0.1.19"
			],
			"Variant": "iPhone7,1",
			"FCCID": [
				"BCG‑E2817A"
			],
			"InternalName": "N56AP",
			"Identifier": "iPhone7,1",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "16 GB",
					"Model": [
						"MGAA2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "64 GB",
					"Model": [
						"MGAK2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "128 GB",
					"Model": [
						"MGAF2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MGA92",
						"MGC92"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MGAJ2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"MGAE2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MGA82"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"MGAH2",
						"MGAU2",
						"MGC52"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"MGAC2"
					]
				}
			]
		},
		{
			"Generation": "iPhone 6s",
			"ANumber": [
				"A1633",
				"A1688",
				"A1691",
				"A1700"
			],
			"Bootrom": [
				"Bootrom 2234.0.0.3.3 (S8000)",
				"Bootrom 2234.0.0.2.22 (S8003)"
			],
			"Variant": "iPhone8,1",
			"FCCID": [
				"BCG-E2946A"
			],
			"InternalName": [
				"N71AP",
				"N71mAP"
			],
			"Identifier": "iPhone8,1",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "16 GB",
					"Model": [
						"MKQL2",
						"MKQ72",
						"MKRE2",
						"MKRW2",
						"MKR12",
						"MKT92",
						"ML7E2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "64 GB",
					"Model": [
						"MKQC2",
						"MKQQ2",
						"MKRJ2",
						"MKR52",
						"MKTE2",
						"MKT12",
						"ML7J2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "128 GB",
					"Model": [
						"MKQG2",
						"MKQV2",
						"MKRP2",
						"MKR92",
						"MKTJ2",
						"MKT52",
						"ML7N2"
					]
				},
				{
					"Color": "Rose Gold",
					"Storage": "16 GB",
					"Model": [
						"MKQM2",
						"MKQ82",
						"MKRF2",
						"MKRX2",
						"MKR22",
						"MKTA2",
						"ML7F2"
					]
				},
				{
					"Color": "Rose Gold",
					"Storage": "64 GB",
					"Model": [
						"MKQD2",
						"MKQR2",
						"MKRK2",
						"MKR62",
						"MKTF2",
						"MKT22",
						"ML7K2"
					]
				},
				{
					"Color": "Rose Gold",
					"Storage": "128 GB",
					"Model": [
						"MKQH2",
						"MKQW2",
						"MKRA2",
						"MKRQ2",
						"MKTK2",
						"MKT62",
						"ML7P2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MKQK2",
						"MKQY2",
						"MKQ62",
						"MKRD2",
						"MKRT2",
						"MKT82",
						"ML7D2",
						"NKQJ2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MKQA2",
						"MKQP2",
						"MKRH2",
						"MKR42",
						"MKTD2",
						"MKT02",
						"ML7H2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"MKQF2",
						"MKQU2",
						"MKRM2",
						"MKR82",
						"MKTH2",
						"MKT42",
						"ML7M2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MKQJ2",
						"MKQX2",
						"MKQ52",
						"MKRC2",
						"MKRR2",
						"MKT72",
						"ML7C2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"MKQN2",
						"MKQ92",
						"MKRG2",
						"MKRY2",
						"MKR32",
						"MKTC2",
						"ML7G2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"MKQE2",
						"MKQT2",
						"MKRL2",
						"MKR72",
						"MKTG2",
						"MKT32",
						"ML7L2"
					]
				}
			]
		},
		{
			"Generation": "iPhone 6s Plus",
			"ANumber": [
				"A1634",
				"A1687",
				"A1690",
				"A1699"
			],
			"Bootrom": [
				"Bootrom 2234.0.0.3.3 (S8000)",
				"Bootrom 2234.0.0.2.22 (S8003)"
			],
			"Variant": "iPhone8,2",
			"FCCID": [
				"BCG-E2944A"
			],
			"InternalName": [
				"N66AP",
				"N66mAP"
			],
			"Identifier": "iPhone8,2",
			"Models": [
				{
					"Color": "Gold",
					"Storage": "16 GB",
					"Model": [
						"MKTN2",
						"MKUN2",
						"MKU32",
						"MKVQ2",
						"MKV62",
						"MKW72",
						"ML6D2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "64 GB",
					"Model": [
						"MKTT2",
						"MKUV2",
						"MKU82",
						"MKVD2",
						"MKVX2",
						"MKWD2",
						"ML6H2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "128 GB",
					"Model": [
						"MKTX2",
						"MKUF2",
						"MKVH2",
						"MKV12",
						"MKWH2",
						"MKW22",
						"ML6M2"
					]
				},
				{
					"Color": "Rose Gold",
					"Storage": "16 GB",
					"Model": [
						"MKU52",
						"ML6E2"
					]
				},
				{
					"Color": "Rose Gold",
					"Storage": "64 GB",
					"Model": [
						"MKU92",
						"ML6J2"
					]
				},
				{
					"Color": "Rose Gold",
					"Storage": "128 GB",
					"Model": [
						"MKUG2",
						"ML6N2",
						"MKV22"
					]
				},
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MKTM2",
						"MKUJ2",
						"MKU22",
						"MKVP2",
						"MKV52",
						"MKW62",
						"ML6C2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MKTR2",
						"MKUU2",
						"MKU72",
						"MKVW2",
						"MKV92",
						"MKWC2",
						"ML6G2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"MKTW2",
						"MKUE2",
						"MKUY2",
						"MKVG2",
						"MKWG2",
						"MKW12",
						"ML6L2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MKU12",
						"ML6A2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"MKU62",
						"ML6F2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"MKUD2",
						"ML6K2"
					]
				}
			]
		}
	];

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = [
		{
			"Generation": "iPod touch",
			"ANumber": [
				"A1213"
			],
			"Bootrom": "Bootrom Rev.2",
			"Variant": null,
			"FCCID": "BCGA1213",
			"InternalName": "N45AP",
			"Identifier": "iPod1,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "8 GB",
					"Model": [
						"MA623",
						"MA624",
						"MA839"
					]
				},
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MA627",
						"MA628"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MB376"
					]
				}
			]
		},
		{
			"Generation": "iPod touch 2G",
			"ANumber": [
				"A1288",
				"A1319"
			],
			"Bootrom": "Bootrom 240.4",
			"Variant": null,
			"FCCID": "BCGA1288",
			"InternalName": "N72AP",
			"Identifier": "iPod2,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "8 GB",
					"Model": [
						"MB525",
						"MB528",
						"MB529"
					]
				},
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"MB531",
						"MB532"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MB533",
						"MB534"
					]
				}
			]
		},
		{
			"Generation": "iPod touch 2G",
			"ANumber": [
				"A1288",
				"A1319"
			],
			"Bootrom": "Bootrom 240.5.1",
			"Variant": null,
			"FCCID": "BCGA1288",
			"InternalName": "N72AP",
			"Identifier": "iPod2,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "8 GB",
					"Model": [
						"MC086"
					]
				}
			]
		},
		{
			"Generation": "iPod touch 3G",
			"ANumber": [
				"A1318"
			],
			"Bootrom": "Bootrom 359.5",
			"Variant": null,
			"FCCID": "BCG‑2310",
			"InternalName": "N18AP",
			"Identifier": "iPod3,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MC008"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MC011"
					]
				}
			]
		},
		{
			"Generation": "iPod touch 4G",
			"ANumber": [
				"A1367"
			],
			"Bootrom": "Bootrom 574.4",
			"Variant": null,
			"FCCID": "BCG‑E2407",
			"InternalName": "N81AP",
			"Identifier": "iPod4,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "8 GB",
					"Model": [
						"MC540"
					]
				},
				{
					"Color": "Black",
					"Storage": "16 GB",
					"Model": [
						"ME178"
					]
				},
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MC544"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MC547"
					]
				},
				{
					"Color": "White",
					"Storage": "8 GB",
					"Model": [
						"MD057"
					]
				},
				{
					"Color": "White",
					"Storage": "16 GB",
					"Model": [
						"ME179"
					]
				},
				{
					"Color": "White",
					"Storage": "32 GB",
					"Model": [
						"MD058"
					]
				},
				{
					"Color": "White",
					"Storage": "64 GB",
					"Model": [
						"MD059"
					]
				}
			]
		},
		{
			"Generation": "iPod touch 5G",
			"ANumber": [
				"A1421"
			],
			"Bootrom": "ROM",
			"Variant": null,
			"FCCID": "BCG‑A1421",
			"InternalName": "N78AP",
			"Identifier": "iPod5,1",
			"Models": [
				{
					"Color": "Black",
					"Storage": "32 GB",
					"Model": [
						"MD723"
					]
				},
				{
					"Color": "Black",
					"Storage": "64 GB",
					"Model": [
						"MD724"
					]
				},
				{
					"Color": "Blue",
					"Storage": "16 GB",
					"Model": [
						"MGG32"
					]
				},
				{
					"Color": "Blue",
					"Storage": "32 GB",
					"Model": [
						"MD717"
					]
				},
				{
					"Color": "Blue",
					"Storage": "64 GB",
					"Model": [
						"MD718"
					]
				},
				{
					"Color": "Pink",
					"Storage": "16 GB",
					"Model": [
						"MGFY2"
					]
				},
				{
					"Color": "Pink",
					"Storage": "32 GB",
					"Model": [
						"MC903"
					]
				},
				{
					"Color": "Pink",
					"Storage": "64 GB",
					"Model": [
						"MC904"
					]
				},
				{
					"Color": "Red",
					"Storage": "16 GB",
					"Model": [
						"MGG72"
					]
				},
				{
					"Color": "Red",
					"Storage": "32 GB",
					"Model": [
						"MD749"
					]
				},
				{
					"Color": "Red",
					"Storage": "64 GB",
					"Model": [
						"MD750"
					]
				},
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MGG52"
					]
				},
				{
					"Color": "Silver",
					"Storage": "32 GB",
					"Model": [
						"MD720",
						"ME108"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MD721"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MGG82"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "32 GB",
					"Model": [
						"ME978"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"ME979"
					]
				},
				{
					"Color": "Yellow",
					"Storage": "16 GB",
					"Model": [
						"MGG12"
					]
				},
				{
					"Color": "Yellow",
					"Storage": "32 GB",
					"Model": [
						"MD714"
					]
				},
				{
					"Color": "Yellow",
					"Storage": "64 GB",
					"Model": [
						"MD715"
					]
				}
			]
		},
		{
			"Generation": "iPod touch 5G",
			"ANumber": [
				"A1509"
			],
			"Bootrom": "ROM",
			"Variant": null,
			"FCCID": "BCG‑A1421",
			"InternalName": "N78aAP",
			"Identifier": "iPod5,1",
			"Models": [
				{
					"Color": "Black & Silver",
					"Storage": "16 GB",
					"Model": [
						"ME643"
					]
				}
			]
		},
		{
			"Generation": "iPod touch 6G",
			"ANumber": [
				"A1574"
			],
			"Bootrom": "Bootrom 1992.0.0.1.19",
			"Variant": null,
			"FCCID": "BCGA1574",
			"InternalName": "N102AP",
			"Identifier": "iPod7,1",
			"Models": [
				{
					"Color": "Blue",
					"Storage": "16 GB",
					"Model": [
						"MKH22"
					]
				},
				{
					"Color": "Blue",
					"Storage": "32 GB",
					"Model": [
						"MKHV2"
					]
				},
				{
					"Color": "Blue",
					"Storage": "64 GB",
					"Model": [
						"MKHE2"
					]
				},
				{
					"Color": "Blue",
					"Storage": "128 GB",
					"Model": [
						"MKWP2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "16 GB",
					"Model": [
						"MKH02"
					]
				},
				{
					"Color": "Gold",
					"Storage": "32 GB",
					"Model": [
						"MKHT2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "64 GB",
					"Model": [
						"MKHC2"
					]
				},
				{
					"Color": "Gold",
					"Storage": "128 GB",
					"Model": [
						"MKWM2"
					]
				},
				{
					"Color": "Pink",
					"Storage": "16 GB",
					"Model": [
						"MKGX2"
					]
				},
				{
					"Color": "Pink",
					"Storage": "32 GB",
					"Model": [
						"MKHQ2"
					]
				},
				{
					"Color": "Pink",
					"Storage": "64 GB",
					"Model": [
						"MKGW2"
					]
				},
				{
					"Color": "Pink",
					"Storage": "128 GB",
					"Model": [
						"MKWK2"
					]
				},
				{
					"Color": "Red",
					"Storage": "16 GB",
					"Model": [
						"MKH82"
					]
				},
				{
					"Color": "Red",
					"Storage": "32 GB",
					"Model": [
						"MKJ22"
					]
				},
				{
					"Color": "Red",
					"Storage": "64 GB",
					"Model": [
						"MKHN2"
					]
				},
				{
					"Color": "Red",
					"Storage": "128 GB",
					"Model": [
						"MKWW2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "16 GB",
					"Model": [
						"MKH42"
					]
				},
				{
					"Color": "Silver",
					"Storage": "32 GB",
					"Model": [
						"MKHX2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "64 GB",
					"Model": [
						"MKHJ2"
					]
				},
				{
					"Color": "Silver",
					"Storage": "128 GB",
					"Model": [
						"MKWR2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "16 GB",
					"Model": [
						"MKH62"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "32 GB",
					"Model": [
						"MKJ02"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "64 GB",
					"Model": [
						"MKHL2"
					]
				},
				{
					"Color": "Space Gray",
					"Storage": "128 GB",
					"Model": [
						"MKWU2"
					]
				}
			]
		}
	];

/***/ }
/******/ ])
});
;