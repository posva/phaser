(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SpinePlugin", [], factory);
	else if(typeof exports === 'object')
		exports["SpinePlugin"] = factory();
	else
		root["SpinePlugin"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./SpinePlugin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/eventemitter3/index.js":
/*!**************************************************************!*\
  !*** D:/wamp/www/phaser/node_modules/eventemitter3/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "../../../src/data/DataManager.js":
/*!**************************************************!*\
  !*** D:/wamp/www/phaser/src/data/DataManager.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = __webpack_require__(/*! ../utils/Class */ "../../../src/utils/Class.js");
var Events = __webpack_require__(/*! ./events */ "../../../src/data/events/index.js");

/**
 * @callback DataEachCallback
 *
 * @param {*} parent - The parent object of the DataManager.
 * @param {string} key - The key of the value.
 * @param {*} value - The value.
 * @param {...*} [args] - Additional arguments that will be passed to the callback, after the game object, key, and data.
 */

/**
 * @classdesc
 * The Data Manager Component features a means to store pieces of data specific to a Game Object, System or Plugin.
 * You can then search, query it, and retrieve the data. The parent must either extend EventEmitter,
 * or have a property called `events` that is an instance of it.
 *
 * @class DataManager
 * @memberof Phaser.Data
 * @constructor
 * @since 3.0.0
 *
 * @param {object} parent - The object that this DataManager belongs to.
 * @param {Phaser.Events.EventEmitter} eventEmitter - The DataManager's event emitter.
 */
var DataManager = new Class({

    initialize:

    function DataManager (parent, eventEmitter)
    {
        /**
         * The object that this DataManager belongs to.
         *
         * @name Phaser.Data.DataManager#parent
         * @type {*}
         * @since 3.0.0
         */
        this.parent = parent;

        /**
         * The DataManager's event emitter.
         *
         * @name Phaser.Data.DataManager#events
         * @type {Phaser.Events.EventEmitter}
         * @since 3.0.0
         */
        this.events = eventEmitter;

        if (!eventEmitter)
        {
            this.events = (parent.events) ? parent.events : parent;
        }

        /**
         * The data list.
         *
         * @name Phaser.Data.DataManager#list
         * @type {Object.<string, *>}
         * @default {}
         * @since 3.0.0
         */
        this.list = {};

        /**
         * The public values list. You can use this to access anything you have stored
         * in this Data Manager. For example, if you set a value called `gold` you can
         * access it via:
         *
         * ```javascript
         * this.data.values.gold;
         * ```
         *
         * You can also modify it directly:
         * 
         * ```javascript
         * this.data.values.gold += 1000;
         * ```
         *
         * Doing so will emit a `setdata` event from the parent of this Data Manager.
         * 
         * Do not modify this object directly. Adding properties directly to this object will not
         * emit any events. Always use `DataManager.set` to create new items the first time around.
         *
         * @name Phaser.Data.DataManager#values
         * @type {Object.<string, *>}
         * @default {}
         * @since 3.10.0
         */
        this.values = {};

        /**
         * Whether setting data is frozen for this DataManager.
         *
         * @name Phaser.Data.DataManager#_frozen
         * @type {boolean}
         * @private
         * @default false
         * @since 3.0.0
         */
        this._frozen = false;

        if (!parent.hasOwnProperty('sys') && this.events)
        {
            this.events.once('destroy', this.destroy, this);
        }
    },

    /**
     * Retrieves the value for the given key, or undefined if it doesn't exist.
     *
     * You can also access values via the `values` object. For example, if you had a key called `gold` you can do either:
     * 
     * ```javascript
     * this.data.get('gold');
     * ```
     *
     * Or access the value directly:
     * 
     * ```javascript
     * this.data.values.gold;
     * ```
     *
     * You can also pass in an array of keys, in which case an array of values will be returned:
     * 
     * ```javascript
     * this.data.get([ 'gold', 'armor', 'health' ]);
     * ```
     *
     * This approach is useful for destructuring arrays in ES6.
     *
     * @method Phaser.Data.DataManager#get
     * @since 3.0.0
     *
     * @param {(string|string[])} key - The key of the value to retrieve, or an array of keys.
     *
     * @return {*} The value belonging to the given key, or an array of values, the order of which will match the input array.
     */
    get: function (key)
    {
        var list = this.list;

        if (Array.isArray(key))
        {
            var output = [];

            for (var i = 0; i < key.length; i++)
            {
                output.push(list[key[i]]);
            }

            return output;
        }
        else
        {
            return list[key];
        }
    },

    /**
     * Retrieves all data values in a new object.
     *
     * @method Phaser.Data.DataManager#getAll
     * @since 3.0.0
     *
     * @return {Object.<string, *>} All data values.
     */
    getAll: function ()
    {
        var results = {};

        for (var key in this.list)
        {
            if (this.list.hasOwnProperty(key))
            {
                results[key] = this.list[key];
            }
        }

        return results;
    },

    /**
     * Queries the DataManager for the values of keys matching the given regular expression.
     *
     * @method Phaser.Data.DataManager#query
     * @since 3.0.0
     *
     * @param {RegExp} search - A regular expression object. If a non-RegExp object obj is passed, it is implicitly converted to a RegExp by using new RegExp(obj).
     *
     * @return {Object.<string, *>} The values of the keys matching the search string.
     */
    query: function (search)
    {
        var results = {};

        for (var key in this.list)
        {
            if (this.list.hasOwnProperty(key) && key.match(search))
            {
                results[key] = this.list[key];
            }
        }

        return results;
    },

    /**
     * Sets a value for the given key. If the key doesn't already exist in the Data Manager then it is created.
     * 
     * ```javascript
     * data.set('name', 'Red Gem Stone');
     * ```
     *
     * You can also pass in an object of key value pairs as the first argument:
     *
     * ```javascript
     * data.set({ name: 'Red Gem Stone', level: 2, owner: 'Link', gold: 50 });
     * ```
     *
     * To get a value back again you can call `get`:
     * 
     * ```javascript
     * data.get('gold');
     * ```
     * 
     * Or you can access the value directly via the `values` property, where it works like any other variable:
     * 
     * ```javascript
     * data.values.gold += 50;
     * ```
     *
     * When the value is first set, a `setdata` event is emitted.
     *
     * If the key already exists, a `changedata` event is emitted instead, along an event named after the key.
     * For example, if you updated an existing key called `PlayerLives` then it would emit the event `changedata-PlayerLives`.
     * These events will be emitted regardless if you use this method to set the value, or the direct `values` setter.
     *
     * Please note that the data keys are case-sensitive and must be valid JavaScript Object property strings.
     * This means the keys `gold` and `Gold` are treated as two unique values within the Data Manager.
     *
     * @method Phaser.Data.DataManager#set
     * @fires Phaser.Data.Events#SET_DATA
     * @fires Phaser.Data.Events#CHANGE_DATA
     * @fires Phaser.Data.Events#CHANGE_DATA_KEY
     * @since 3.0.0
     *
     * @param {(string|object)} key - The key to set the value for. Or an object or key value pairs. If an object the `data` argument is ignored.
     * @param {*} data - The value to set for the given key. If an object is provided as the key this argument is ignored.
     *
     * @return {Phaser.Data.DataManager} This DataManager object.
     */
    set: function (key, data)
    {
        if (this._frozen)
        {
            return this;
        }

        if (typeof key === 'string')
        {
            return this.setValue(key, data);
        }
        else
        {
            for (var entry in key)
            {
                this.setValue(entry, key[entry]);
            }
        }

        return this;
    },

    /**
     * Internal value setter, called automatically by the `set` method.
     *
     * @method Phaser.Data.DataManager#setValue
     * @fires Phaser.Data.Events#SET_DATA
     * @fires Phaser.Data.Events#CHANGE_DATA
     * @fires Phaser.Data.Events#CHANGE_DATA_KEY
     * @private
     * @since 3.10.0
     *
     * @param {string} key - The key to set the value for.
     * @param {*} data - The value to set.
     *
     * @return {Phaser.Data.DataManager} This DataManager object.
     */
    setValue: function (key, data)
    {
        if (this._frozen)
        {
            return this;
        }

        if (this.has(key))
        {
            //  Hit the key getter, which will in turn emit the events.
            this.values[key] = data;
        }
        else
        {
            var _this = this;
            var list = this.list;
            var events = this.events;
            var parent = this.parent;

            Object.defineProperty(this.values, key, {

                enumerable: true,
                
                configurable: true,

                get: function ()
                {
                    return list[key];
                },

                set: function (value)
                {
                    if (!_this._frozen)
                    {
                        var previousValue = list[key];
                        list[key] = value;

                        events.emit(Events.CHANGE_DATA, parent, key, value, previousValue);
                        events.emit(Events.CHANGE_DATA_KEY + key, parent, value, previousValue);
                    }
                }

            });

            list[key] = data;

            events.emit(Events.SET_DATA, parent, key, data);
        }

        return this;
    },

    /**
     * Passes all data entries to the given callback.
     *
     * @method Phaser.Data.DataManager#each
     * @since 3.0.0
     *
     * @param {DataEachCallback} callback - The function to call.
     * @param {*} [context] - Value to use as `this` when executing callback.
     * @param {...*} [args] - Additional arguments that will be passed to the callback, after the game object, key, and data.
     *
     * @return {Phaser.Data.DataManager} This DataManager object.
     */
    each: function (callback, context)
    {
        var args = [ this.parent, null, undefined ];

        for (var i = 1; i < arguments.length; i++)
        {
            args.push(arguments[i]);
        }

        for (var key in this.list)
        {
            args[1] = key;
            args[2] = this.list[key];

            callback.apply(context, args);
        }

        return this;
    },

    /**
     * Merge the given object of key value pairs into this DataManager.
     *
     * Any newly created values will emit a `setdata` event. Any updated values (see the `overwrite` argument)
     * will emit a `changedata` event.
     *
     * @method Phaser.Data.DataManager#merge
     * @fires Phaser.Data.Events#SET_DATA
     * @fires Phaser.Data.Events#CHANGE_DATA
     * @fires Phaser.Data.Events#CHANGE_DATA_KEY
     * @since 3.0.0
     *
     * @param {Object.<string, *>} data - The data to merge.
     * @param {boolean} [overwrite=true] - Whether to overwrite existing data. Defaults to true.
     *
     * @return {Phaser.Data.DataManager} This DataManager object.
     */
    merge: function (data, overwrite)
    {
        if (overwrite === undefined) { overwrite = true; }

        //  Merge data from another component into this one
        for (var key in data)
        {
            if (data.hasOwnProperty(key) && (overwrite || (!overwrite && !this.has(key))))
            {
                this.setValue(key, data[key]);
            }
        }

        return this;
    },

    /**
     * Remove the value for the given key.
     *
     * If the key is found in this Data Manager it is removed from the internal lists and a
     * `removedata` event is emitted.
     * 
     * You can also pass in an array of keys, in which case all keys in the array will be removed:
     * 
     * ```javascript
     * this.data.remove([ 'gold', 'armor', 'health' ]);
     * ```
     *
     * @method Phaser.Data.DataManager#remove
     * @fires Phaser.Data.Events#REMOVE_DATA
     * @since 3.0.0
     *
     * @param {(string|string[])} key - The key to remove, or an array of keys to remove.
     *
     * @return {Phaser.Data.DataManager} This DataManager object.
     */
    remove: function (key)
    {
        if (this._frozen)
        {
            return this;
        }

        if (Array.isArray(key))
        {
            for (var i = 0; i < key.length; i++)
            {
                this.removeValue(key[i]);
            }
        }
        else
        {
            return this.removeValue(key);
        }

        return this;
    },

    /**
     * Internal value remover, called automatically by the `remove` method.
     *
     * @method Phaser.Data.DataManager#removeValue
     * @private
     * @fires Phaser.Data.Events#REMOVE_DATA
     * @since 3.10.0
     *
     * @param {string} key - The key to set the value for.
     *
     * @return {Phaser.Data.DataManager} This DataManager object.
     */
    removeValue: function (key)
    {
        if (this.has(key))
        {
            var data = this.list[key];

            delete this.list[key];
            delete this.values[key];

            this.events.emit(Events.REMOVE_DATA, this.parent, key, data);
        }

        return this;
    },

    /**
     * Retrieves the data associated with the given 'key', deletes it from this Data Manager, then returns it.
     *
     * @method Phaser.Data.DataManager#pop
     * @fires Phaser.Data.Events#REMOVE_DATA
     * @since 3.0.0
     *
     * @param {string} key - The key of the value to retrieve and delete.
     *
     * @return {*} The value of the given key.
     */
    pop: function (key)
    {
        var data = undefined;

        if (!this._frozen && this.has(key))
        {
            data = this.list[key];

            delete this.list[key];
            delete this.values[key];

            this.events.emit(Events.REMOVE_DATA, this.parent, key, data);
        }

        return data;
    },

    /**
     * Determines whether the given key is set in this Data Manager.
     * 
     * Please note that the keys are case-sensitive and must be valid JavaScript Object property strings.
     * This means the keys `gold` and `Gold` are treated as two unique values within the Data Manager.
     *
     * @method Phaser.Data.DataManager#has
     * @since 3.0.0
     *
     * @param {string} key - The key to check.
     *
     * @return {boolean} Returns `true` if the key exists, otherwise `false`.
     */
    has: function (key)
    {
        return this.list.hasOwnProperty(key);
    },

    /**
     * Freeze or unfreeze this Data Manager. A frozen Data Manager will block all attempts
     * to create new values or update existing ones.
     *
     * @method Phaser.Data.DataManager#setFreeze
     * @since 3.0.0
     *
     * @param {boolean} value - Whether to freeze or unfreeze the Data Manager.
     *
     * @return {Phaser.Data.DataManager} This DataManager object.
     */
    setFreeze: function (value)
    {
        this._frozen = value;

        return this;
    },

    /**
     * Delete all data in this Data Manager and unfreeze it.
     *
     * @method Phaser.Data.DataManager#reset
     * @since 3.0.0
     *
     * @return {Phaser.Data.DataManager} This DataManager object.
     */
    reset: function ()
    {
        for (var key in this.list)
        {
            delete this.list[key];
            delete this.values[key];
        }

        this._frozen = false;

        return this;
    },

    /**
     * Destroy this data manager.
     *
     * @method Phaser.Data.DataManager#destroy
     * @since 3.0.0
     */
    destroy: function ()
    {
        this.reset();

        this.events.off(Events.CHANGE_DATA);
        this.events.off(Events.SET_DATA);
        this.events.off(Events.REMOVE_DATA);

        this.parent = null;
    },

    /**
     * Gets or sets the frozen state of this Data Manager.
     * A frozen Data Manager will block all attempts to create new values or update existing ones.
     *
     * @name Phaser.Data.DataManager#freeze
     * @type {boolean}
     * @since 3.0.0
     */
    freeze: {

        get: function ()
        {
            return this._frozen;
        },

        set: function (value)
        {
            this._frozen = (value) ? true : false;
        }

    },

    /**
     * Return the total number of entries in this Data Manager.
     *
     * @name Phaser.Data.DataManager#count
     * @type {integer}
     * @since 3.0.0
     */
    count: {

        get: function ()
        {
            var i = 0;

            for (var key in this.list)
            {
                if (this.list[key] !== undefined)
                {
                    i++;
                }
            }

            return i;
        }

    }

});

module.exports = DataManager;


/***/ }),

/***/ "../../../src/data/events/CHANGE_DATA_EVENT.js":
/*!***************************************************************!*\
  !*** D:/wamp/www/phaser/src/data/events/CHANGE_DATA_EVENT.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Change Data Event.
 * 
 * This event is dispatched by a Data Manager when an item in the data store is changed.
 * 
 * Game Objects with data enabled have an instance of a Data Manager under the `data` property. So, to listen for
 * a change data event from a Game Object you would use: `sprite.data.on('changedata', listener)`.
 * 
 * This event is dispatched for all items that change in the Data Manager.
 * To listen for the change of a specific item, use the `CHANGE_DATA_KEY_EVENT` event.
 *
 * @event Phaser.Data.Events#CHANGE_DATA
 * @since 3.0.0
 * 
 * @param {any} parent - A reference to the object that the Data Manager responsible for this event belongs to.
 * @param {string} key - The unique key of the data item within the Data Manager.
 * @param {any} value - The new value of the item in the Data Manager.
 * @param {any} previousValue - The previous value of the item in the Data Manager.
 */
module.exports = 'changedata';


/***/ }),

/***/ "../../../src/data/events/CHANGE_DATA_KEY_EVENT.js":
/*!*******************************************************************!*\
  !*** D:/wamp/www/phaser/src/data/events/CHANGE_DATA_KEY_EVENT.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Change Data Key Event.
 * 
 * This event is dispatched by a Data Manager when an item in the data store is changed.
 * 
 * Game Objects with data enabled have an instance of a Data Manager under the `data` property. So, to listen for
 * the change of a specific data item from a Game Object you would use: `sprite.data.on('changedata-key', listener)`,
 * where `key` is the unique string key of the data item. For example, if you have a data item stored called `gold`
 * then you can listen for `sprite.data.on('changedata-gold')`.
 *
 * @event Phaser.Data.Events#CHANGE_DATA_KEY
 * @since 3.16.1
 * 
 * @param {any} parent - A reference to the object that owns the instance of the Data Manager responsible for this event.
 * @param {string} key - The unique key of the data item within the Data Manager.
 * @param {any} value - The item that was updated in the Data Manager. This can be of any data type, i.e. a string, boolean, number, object or instance.
 * @param {any} previousValue - The previous item that was updated in the Data Manager. This can be of any data type, i.e. a string, boolean, number, object or instance.
 */
module.exports = 'changedata-';


/***/ }),

/***/ "../../../src/data/events/REMOVE_DATA_EVENT.js":
/*!***************************************************************!*\
  !*** D:/wamp/www/phaser/src/data/events/REMOVE_DATA_EVENT.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Remove Data Event.
 * 
 * This event is dispatched by a Data Manager when an item is removed from it.
 * 
 * Game Objects with data enabled have an instance of a Data Manager under the `data` property. So, to listen for
 * the removal of a data item on a Game Object you would use: `sprite.data.on('removedata', listener)`.
 *
 * @event Phaser.Data.Events#REMOVE_DATA
 * @since 3.0.0
 * 
 * @param {any} parent - A reference to the object that owns the instance of the Data Manager responsible for this event.
 * @param {string} key - The unique key of the data item within the Data Manager.
 * @param {any} data - The item that was removed from the Data Manager. This can be of any data type, i.e. a string, boolean, number, object or instance.
 */
module.exports = 'removedata';


/***/ }),

/***/ "../../../src/data/events/SET_DATA_EVENT.js":
/*!************************************************************!*\
  !*** D:/wamp/www/phaser/src/data/events/SET_DATA_EVENT.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Set Data Event.
 * 
 * This event is dispatched by a Data Manager when a new item is added to the data store.
 * 
 * Game Objects with data enabled have an instance of a Data Manager under the `data` property. So, to listen for
 * the addition of a new data item on a Game Object you would use: `sprite.data.on('setdata', listener)`.
 *
 * @event Phaser.Data.Events#SET_DATA
 * @since 3.0.0
 * 
 * @param {any} parent - A reference to the object that owns the instance of the Data Manager responsible for this event.
 * @param {string} key - The unique key of the data item within the Data Manager.
 * @param {any} data - The item that was added to the Data Manager. This can be of any data type, i.e. a string, boolean, number, object or instance.
 */
module.exports = 'setdata';


/***/ }),

/***/ "../../../src/data/events/index.js":
/*!***************************************************!*\
  !*** D:/wamp/www/phaser/src/data/events/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Data.Events
 */

module.exports = {

    CHANGE_DATA: __webpack_require__(/*! ./CHANGE_DATA_EVENT */ "../../../src/data/events/CHANGE_DATA_EVENT.js"),
    CHANGE_DATA_KEY: __webpack_require__(/*! ./CHANGE_DATA_KEY_EVENT */ "../../../src/data/events/CHANGE_DATA_KEY_EVENT.js"),
    REMOVE_DATA: __webpack_require__(/*! ./REMOVE_DATA_EVENT */ "../../../src/data/events/REMOVE_DATA_EVENT.js"),
    SET_DATA: __webpack_require__(/*! ./SET_DATA_EVENT */ "../../../src/data/events/SET_DATA_EVENT.js")

};


/***/ }),

/***/ "../../../src/gameobjects/GameObject.js":
/*!********************************************************!*\
  !*** D:/wamp/www/phaser/src/gameobjects/GameObject.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = __webpack_require__(/*! ../utils/Class */ "../../../src/utils/Class.js");
var ComponentsToJSON = __webpack_require__(/*! ./components/ToJSON */ "../../../src/gameobjects/components/ToJSON.js");
var DataManager = __webpack_require__(/*! ../data/DataManager */ "../../../src/data/DataManager.js");
var EventEmitter = __webpack_require__(/*! eventemitter3 */ "../../../node_modules/eventemitter3/index.js");
var Events = __webpack_require__(/*! ./events */ "../../../src/gameobjects/events/index.js");

/**
 * @classdesc
 * The base class that all Game Objects extend.
 * You don't create GameObjects directly and they cannot be added to the display list.
 * Instead, use them as the base for your own custom classes.
 *
 * @class GameObject
 * @memberof Phaser.GameObjects
 * @extends Phaser.Events.EventEmitter
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Scene} scene - The Scene to which this Game Object belongs.
 * @param {string} type - A textual representation of the type of Game Object, i.e. `sprite`.
 */
var GameObject = new Class({

    Extends: EventEmitter,

    initialize:

    function GameObject (scene, type)
    {
        EventEmitter.call(this);

        /**
         * The Scene to which this Game Object belongs.
         * Game Objects can only belong to one Scene.
         *
         * @name Phaser.GameObjects.GameObject#scene
         * @type {Phaser.Scene}
         * @protected
         * @since 3.0.0
         */
        this.scene = scene;

        /**
         * A textual representation of this Game Object, i.e. `sprite`.
         * Used internally by Phaser but is available for your own custom classes to populate.
         *
         * @name Phaser.GameObjects.GameObject#type
         * @type {string}
         * @since 3.0.0
         */
        this.type = type;

        /**
         * The current state of this Game Object.
         * 
         * Phaser itself will never modify this value, although plugins may do so.
         * 
         * Use this property to track the state of a Game Object during its lifetime. For example, it could move from
         * a state of 'moving', to 'attacking', to 'dead'. The state value should be an integer (ideally mapped to a constant
         * in your game code), or a string. These are recommended to keep it light and simple, with fast comparisons.
         * If you need to store complex data about your Game Object, look at using the Data Component instead.
         *
         * @name Phaser.GameObjects.GameObject#state
         * @type {(integer|string)}
         * @since 3.16.0
         */
        this.state = 0;

        /**
         * The parent Container of this Game Object, if it has one.
         *
         * @name Phaser.GameObjects.GameObject#parentContainer
         * @type {Phaser.GameObjects.Container}
         * @since 3.4.0
         */
        this.parentContainer = null;

        /**
         * The name of this Game Object.
         * Empty by default and never populated by Phaser, this is left for developers to use.
         *
         * @name Phaser.GameObjects.GameObject#name
         * @type {string}
         * @default ''
         * @since 3.0.0
         */
        this.name = '';

        /**
         * The active state of this Game Object.
         * A Game Object with an active state of `true` is processed by the Scenes UpdateList, if added to it.
         * An active object is one which is having its logic and internal systems updated.
         *
         * @name Phaser.GameObjects.GameObject#active
         * @type {boolean}
         * @default true
         * @since 3.0.0
         */
        this.active = true;

        /**
         * The Tab Index of the Game Object.
         * Reserved for future use by plugins and the Input Manager.
         *
         * @name Phaser.GameObjects.GameObject#tabIndex
         * @type {integer}
         * @default -1
         * @since 3.0.0
         */
        this.tabIndex = -1;

        /**
         * A Data Manager.
         * It allows you to store, query and get key/value paired information specific to this Game Object.
         * `null` by default. Automatically created if you use `getData` or `setData` or `setDataEnabled`.
         *
         * @name Phaser.GameObjects.GameObject#data
         * @type {Phaser.Data.DataManager}
         * @default null
         * @since 3.0.0
         */
        this.data = null;

        /**
         * The flags that are compared against `RENDER_MASK` to determine if this Game Object will render or not.
         * The bits are 0001 | 0010 | 0100 | 1000 set by the components Visible, Alpha, Transform and Texture respectively.
         * If those components are not used by your custom class then you can use this bitmask as you wish.
         *
         * @name Phaser.GameObjects.GameObject#renderFlags
         * @type {integer}
         * @default 15
         * @since 3.0.0
         */
        this.renderFlags = 15;

        /**
         * A bitmask that controls if this Game Object is drawn by a Camera or not.
         * Not usually set directly, instead call `Camera.ignore`, however you can
         * set this property directly using the Camera.id property:
         *
         * @example
         * this.cameraFilter |= camera.id
         *
         * @name Phaser.GameObjects.GameObject#cameraFilter
         * @type {number}
         * @default 0
         * @since 3.0.0
         */
        this.cameraFilter = 0;

        /**
         * If this Game Object is enabled for input then this property will contain an InteractiveObject instance.
         * Not usually set directly. Instead call `GameObject.setInteractive()`.
         *
         * @name Phaser.GameObjects.GameObject#input
         * @type {?Phaser.Types.Input.InteractiveObject}
         * @default null
         * @since 3.0.0
         */
        this.input = null;

        /**
         * If this Game Object is enabled for physics then this property will contain a reference to a Physics Body.
         *
         * @name Phaser.GameObjects.GameObject#body
         * @type {?(object|Phaser.Physics.Arcade.Body|Phaser.Physics.Impact.Body)}
         * @default null
         * @since 3.0.0
         */
        this.body = null;

        /**
         * This Game Object will ignore all calls made to its destroy method if this flag is set to `true`.
         * This includes calls that may come from a Group, Container or the Scene itself.
         * While it allows you to persist a Game Object across Scenes, please understand you are entirely
         * responsible for managing references to and from this Game Object.
         *
         * @name Phaser.GameObjects.GameObject#ignoreDestroy
         * @type {boolean}
         * @default false
         * @since 3.5.0
         */
        this.ignoreDestroy = false;

        //  Tell the Scene to re-sort the children
        scene.sys.queueDepthSort();
    },

    /**
     * Sets the `active` property of this Game Object and returns this Game Object for further chaining.
     * A Game Object with its `active` property set to `true` will be updated by the Scenes UpdateList.
     *
     * @method Phaser.GameObjects.GameObject#setActive
     * @since 3.0.0
     *
     * @param {boolean} value - True if this Game Object should be set as active, false if not.
     *
     * @return {this} This GameObject.
     */
    setActive: function (value)
    {
        this.active = value;

        return this;
    },

    /**
     * Sets the `name` property of this Game Object and returns this Game Object for further chaining.
     * The `name` property is not populated by Phaser and is presented for your own use.
     *
     * @method Phaser.GameObjects.GameObject#setName
     * @since 3.0.0
     *
     * @param {string} value - The name to be given to this Game Object.
     *
     * @return {this} This GameObject.
     */
    setName: function (value)
    {
        this.name = value;

        return this;
    },

    /**
     * Sets the current state of this Game Object.
     * 
     * Phaser itself will never modify the State of a Game Object, although plugins may do so.
     * 
     * For example, a Game Object could change from a state of 'moving', to 'attacking', to 'dead'.
     * The state value should typically be an integer (ideally mapped to a constant
     * in your game code), but could also be a string. It is recommended to keep it light and simple.
     * If you need to store complex data about your Game Object, look at using the Data Component instead.
     *
     * @method Phaser.GameObjects.GameObject#setState
     * @since 3.16.0
     *
     * @param {(integer|string)} value - The state of the Game Object.
     *
     * @return {this} This GameObject.
     */
    setState: function (value)
    {
        this.state = value;

        return this;
    },

    /**
     * Adds a Data Manager component to this Game Object.
     *
     * @method Phaser.GameObjects.GameObject#setDataEnabled
     * @since 3.0.0
     * @see Phaser.Data.DataManager
     *
     * @return {this} This GameObject.
     */
    setDataEnabled: function ()
    {
        if (!this.data)
        {
            this.data = new DataManager(this);
        }

        return this;
    },

    /**
     * Allows you to store a key value pair within this Game Objects Data Manager.
     *
     * If the Game Object has not been enabled for data (via `setDataEnabled`) then it will be enabled
     * before setting the value.
     *
     * If the key doesn't already exist in the Data Manager then it is created.
     *
     * ```javascript
     * sprite.setData('name', 'Red Gem Stone');
     * ```
     *
     * You can also pass in an object of key value pairs as the first argument:
     *
     * ```javascript
     * sprite.setData({ name: 'Red Gem Stone', level: 2, owner: 'Link', gold: 50 });
     * ```
     *
     * To get a value back again you can call `getData`:
     *
     * ```javascript
     * sprite.getData('gold');
     * ```
     *
     * Or you can access the value directly via the `values` property, where it works like any other variable:
     *
     * ```javascript
     * sprite.data.values.gold += 50;
     * ```
     *
     * When the value is first set, a `setdata` event is emitted from this Game Object.
     *
     * If the key already exists, a `changedata` event is emitted instead, along an event named after the key.
     * For example, if you updated an existing key called `PlayerLives` then it would emit the event `changedata-PlayerLives`.
     * These events will be emitted regardless if you use this method to set the value, or the direct `values` setter.
     *
     * Please note that the data keys are case-sensitive and must be valid JavaScript Object property strings.
     * This means the keys `gold` and `Gold` are treated as two unique values within the Data Manager.
     *
     * @method Phaser.GameObjects.GameObject#setData
     * @since 3.0.0
     *
     * @param {(string|object)} key - The key to set the value for. Or an object of key value pairs. If an object the `data` argument is ignored.
     * @param {*} [data] - The value to set for the given key. If an object is provided as the key this argument is ignored.
     *
     * @return {this} This GameObject.
     */
    setData: function (key, value)
    {
        if (!this.data)
        {
            this.data = new DataManager(this);
        }

        this.data.set(key, value);

        return this;
    },

    /**
     * Retrieves the value for the given key in this Game Objects Data Manager, or undefined if it doesn't exist.
     *
     * You can also access values via the `values` object. For example, if you had a key called `gold` you can do either:
     *
     * ```javascript
     * sprite.getData('gold');
     * ```
     *
     * Or access the value directly:
     *
     * ```javascript
     * sprite.data.values.gold;
     * ```
     *
     * You can also pass in an array of keys, in which case an array of values will be returned:
     *
     * ```javascript
     * sprite.getData([ 'gold', 'armor', 'health' ]);
     * ```
     *
     * This approach is useful for destructuring arrays in ES6.
     *
     * @method Phaser.GameObjects.GameObject#getData
     * @since 3.0.0
     *
     * @param {(string|string[])} key - The key of the value to retrieve, or an array of keys.
     *
     * @return {*} The value belonging to the given key, or an array of values, the order of which will match the input array.
     */
    getData: function (key)
    {
        if (!this.data)
        {
            this.data = new DataManager(this);
        }

        return this.data.get(key);
    },

    /**
     * Pass this Game Object to the Input Manager to enable it for Input.
     *
     * Input works by using hit areas, these are nearly always geometric shapes, such as rectangles or circles, that act as the hit area
     * for the Game Object. However, you can provide your own hit area shape and callback, should you wish to handle some more advanced
     * input detection.
     *
     * If no arguments are provided it will try and create a rectangle hit area based on the texture frame the Game Object is using. If
     * this isn't a texture-bound object, such as a Graphics or BitmapText object, this will fail, and you'll need to provide a specific
     * shape for it to use.
     *
     * You can also provide an Input Configuration Object as the only argument to this method.
     *
     * @method Phaser.GameObjects.GameObject#setInteractive
     * @since 3.0.0
     *
     * @param {(Phaser.Types.Input.InputConfiguration|any)} [shape] - Either an input configuration object, or a geometric shape that defines the hit area for the Game Object. If not specified a Rectangle will be used.
     * @param {Phaser.Types.Input.HitAreaCallback} [callback] - A callback to be invoked when the Game Object is interacted with. If you provide a shape you must also provide a callback.
     * @param {boolean} [dropZone=false] - Should this Game Object be treated as a drop zone target?
     *
     * @return {this} This GameObject.
     */
    setInteractive: function (shape, callback, dropZone)
    {
        this.scene.sys.input.enable(this, shape, callback, dropZone);

        return this;
    },

    /**
     * If this Game Object has previously been enabled for input, this will disable it.
     *
     * An object that is disabled for input stops processing or being considered for
     * input events, but can be turned back on again at any time by simply calling
     * `setInteractive()` with no arguments provided.
     *
     * If want to completely remove interaction from this Game Object then use `removeInteractive` instead.
     *
     * @method Phaser.GameObjects.GameObject#disableInteractive
     * @since 3.7.0
     *
     * @return {this} This GameObject.
     */
    disableInteractive: function ()
    {
        if (this.input)
        {
            this.input.enabled = false;
        }

        return this;
    },

    /**
     * If this Game Object has previously been enabled for input, this will queue it
     * for removal, causing it to no longer be interactive. The removal happens on
     * the next game step, it is not immediate.
     *
     * The Interactive Object that was assigned to this Game Object will be destroyed,
     * removed from the Input Manager and cleared from this Game Object.
     *
     * If you wish to re-enable this Game Object at a later date you will need to
     * re-create its InteractiveObject by calling `setInteractive` again.
     *
     * If you wish to only temporarily stop an object from receiving input then use
     * `disableInteractive` instead, as that toggles the interactive state, where-as
     * this erases it completely.
     * 
     * If you wish to resize a hit area, don't remove and then set it as being
     * interactive. Instead, access the hitarea object directly and resize the shape
     * being used. I.e.: `sprite.input.hitArea.setSize(width, height)` (assuming the
     * shape is a Rectangle, which it is by default.)
     *
     * @method Phaser.GameObjects.GameObject#removeInteractive
     * @since 3.7.0
     *
     * @return {this} This GameObject.
     */
    removeInteractive: function ()
    {
        this.scene.sys.input.clear(this);

        this.input = undefined;

        return this;
    },

    /**
     * To be overridden by custom GameObjects. Allows base objects to be used in a Pool.
     *
     * @method Phaser.GameObjects.GameObject#update
     * @since 3.0.0
     *
     * @param {...*} [args] - args
     */
    update: function ()
    {
    },

    /**
     * Returns a JSON representation of the Game Object.
     *
     * @method Phaser.GameObjects.GameObject#toJSON
     * @since 3.0.0
     *
     * @return {Phaser.Types.GameObjects.JSONGameObject} A JSON representation of the Game Object.
     */
    toJSON: function ()
    {
        return ComponentsToJSON(this);
    },

    /**
     * Compares the renderMask with the renderFlags to see if this Game Object will render or not.
     * Also checks the Game Object against the given Cameras exclusion list.
     *
     * @method Phaser.GameObjects.GameObject#willRender
     * @since 3.0.0
     *
     * @param {Phaser.Cameras.Scene2D.Camera} camera - The Camera to check against this Game Object.
     *
     * @return {boolean} True if the Game Object should be rendered, otherwise false.
     */
    willRender: function (camera)
    {
        return !(GameObject.RENDER_MASK !== this.renderFlags || (this.cameraFilter !== 0 && (this.cameraFilter & camera.id)));
    },

    /**
     * Returns an array containing the display list index of either this Game Object, or if it has one,
     * its parent Container. It then iterates up through all of the parent containers until it hits the
     * root of the display list (which is index 0 in the returned array).
     *
     * Used internally by the InputPlugin but also useful if you wish to find out the display depth of
     * this Game Object and all of its ancestors.
     *
     * @method Phaser.GameObjects.GameObject#getIndexList
     * @since 3.4.0
     *
     * @return {integer[]} An array of display list position indexes.
     */
    getIndexList: function ()
    {
        // eslint-disable-next-line consistent-this
        var child = this;
        var parent = this.parentContainer;

        var indexes = [];

        while (parent)
        {
            // indexes.unshift([parent.getIndex(child), parent.name]);
            indexes.unshift(parent.getIndex(child));

            child = parent;

            if (!parent.parentContainer)
            {
                break;
            }
            else
            {
                parent = parent.parentContainer;
            }
        }

        // indexes.unshift([this.scene.sys.displayList.getIndex(child), 'root']);
        indexes.unshift(this.scene.sys.displayList.getIndex(child));

        return indexes;
    },

    /**
     * Destroys this Game Object removing it from the Display List and Update List and
     * severing all ties to parent resources.
     *
     * Also removes itself from the Input Manager and Physics Manager if previously enabled.
     *
     * Use this to remove a Game Object from your game if you don't ever plan to use it again.
     * As long as no reference to it exists within your own code it should become free for
     * garbage collection by the browser.
     *
     * If you just want to temporarily disable an object then look at using the
     * Game Object Pool instead of destroying it, as destroyed objects cannot be resurrected.
     *
     * @method Phaser.GameObjects.GameObject#destroy
     * @fires Phaser.GameObjects.Events#DESTROY
     * @since 3.0.0
     *
     * @param {boolean} [fromScene=false] - Is this Game Object being destroyed as the result of a Scene shutdown?
     */
    destroy: function (fromScene)
    {
        if (fromScene === undefined) { fromScene = false; }

        //  This Game Object has already been destroyed
        if (!this.scene || this.ignoreDestroy)
        {
            return;
        }

        if (this.preDestroy)
        {
            this.preDestroy.call(this);
        }

        this.emit(Events.DESTROY, this);

        var sys = this.scene.sys;

        if (!fromScene)
        {
            sys.displayList.remove(this);
            sys.updateList.remove(this);
        }

        if (this.input)
        {
            sys.input.clear(this);
            this.input = undefined;
        }

        if (this.data)
        {
            this.data.destroy();

            this.data = undefined;
        }

        if (this.body)
        {
            this.body.destroy();
            this.body = undefined;
        }

        //  Tell the Scene to re-sort the children
        if (!fromScene)
        {
            sys.queueDepthSort();
        }

        this.active = false;
        this.visible = false;

        this.scene = undefined;

        this.parentContainer = undefined;

        this.removeAllListeners();
    }

});

/**
 * The bitmask that `GameObject.renderFlags` is compared against to determine if the Game Object will render or not.
 *
 * @constant {integer} RENDER_MASK
 * @memberof Phaser.GameObjects.GameObject
 * @default
 */
GameObject.RENDER_MASK = 15;

module.exports = GameObject;


/***/ }),

/***/ "../../../src/gameobjects/components/Alpha.js":
/*!**************************************************************!*\
  !*** D:/wamp/www/phaser/src/gameobjects/components/Alpha.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Clamp = __webpack_require__(/*! ../../math/Clamp */ "../../../src/math/Clamp.js");

//  bitmask flag for GameObject.renderMask
var _FLAG = 2; // 0010

/**
 * Provides methods used for setting the alpha properties of a Game Object.
 * Should be applied as a mixin and not used directly.
 *
 * @namespace Phaser.GameObjects.Components.Alpha
 * @since 3.0.0
 */

var Alpha = {

    /**
     * Private internal value. Holds the global alpha value.
     *
     * @name Phaser.GameObjects.Components.Alpha#_alpha
     * @type {number}
     * @private
     * @default 1
     * @since 3.0.0
     */
    _alpha: 1,

    /**
     * Private internal value. Holds the top-left alpha value.
     *
     * @name Phaser.GameObjects.Components.Alpha#_alphaTL
     * @type {number}
     * @private
     * @default 1
     * @since 3.0.0
     */
    _alphaTL: 1,

    /**
     * Private internal value. Holds the top-right alpha value.
     *
     * @name Phaser.GameObjects.Components.Alpha#_alphaTR
     * @type {number}
     * @private
     * @default 1
     * @since 3.0.0
     */
    _alphaTR: 1,

    /**
     * Private internal value. Holds the bottom-left alpha value.
     *
     * @name Phaser.GameObjects.Components.Alpha#_alphaBL
     * @type {number}
     * @private
     * @default 1
     * @since 3.0.0
     */
    _alphaBL: 1,

    /**
     * Private internal value. Holds the bottom-right alpha value.
     *
     * @name Phaser.GameObjects.Components.Alpha#_alphaBR
     * @type {number}
     * @private
     * @default 1
     * @since 3.0.0
     */
    _alphaBR: 1,

    /**
     * Clears all alpha values associated with this Game Object.
     *
     * Immediately sets the alpha levels back to 1 (fully opaque).
     *
     * @method Phaser.GameObjects.Components.Alpha#clearAlpha
     * @since 3.0.0
     *
     * @return {this} This Game Object instance.
     */
    clearAlpha: function ()
    {
        return this.setAlpha(1);
    },

    /**
     * Set the Alpha level of this Game Object. The alpha controls the opacity of the Game Object as it renders.
     * Alpha values are provided as a float between 0, fully transparent, and 1, fully opaque.
     *
     * If your game is running under WebGL you can optionally specify four different alpha values, each of which
     * correspond to the four corners of the Game Object. Under Canvas only the `topLeft` value given is used.
     *
     * @method Phaser.GameObjects.Components.Alpha#setAlpha
     * @since 3.0.0
     *
     * @param {number} [topLeft=1] - The alpha value used for the top-left of the Game Object. If this is the only value given it's applied across the whole Game Object.
     * @param {number} [topRight] - The alpha value used for the top-right of the Game Object. WebGL only.
     * @param {number} [bottomLeft] - The alpha value used for the bottom-left of the Game Object. WebGL only.
     * @param {number} [bottomRight] - The alpha value used for the bottom-right of the Game Object. WebGL only.
     *
     * @return {this} This Game Object instance.
     */
    setAlpha: function (topLeft, topRight, bottomLeft, bottomRight)
    {
        if (topLeft === undefined) { topLeft = 1; }

        //  Treat as if there is only one alpha value for the whole Game Object
        if (topRight === undefined)
        {
            this.alpha = topLeft;
        }
        else
        {
            this._alphaTL = Clamp(topLeft, 0, 1);
            this._alphaTR = Clamp(topRight, 0, 1);
            this._alphaBL = Clamp(bottomLeft, 0, 1);
            this._alphaBR = Clamp(bottomRight, 0, 1);
        }

        return this;
    },

    /**
     * The alpha value of the Game Object.
     *
     * This is a global value, impacting the entire Game Object, not just a region of it.
     *
     * @name Phaser.GameObjects.Components.Alpha#alpha
     * @type {number}
     * @since 3.0.0
     */
    alpha: {

        get: function ()
        {
            return this._alpha;
        },

        set: function (value)
        {
            var v = Clamp(value, 0, 1);

            this._alpha = v;
            this._alphaTL = v;
            this._alphaTR = v;
            this._alphaBL = v;
            this._alphaBR = v;

            if (v === 0)
            {
                this.renderFlags &= ~_FLAG;
            }
            else
            {
                this.renderFlags |= _FLAG;
            }
        }

    },

    /**
     * The alpha value starting from the top-left of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     *
     * @name Phaser.GameObjects.Components.Alpha#alphaTopLeft
     * @type {number}
     * @webglOnly
     * @since 3.0.0
     */
    alphaTopLeft: {

        get: function ()
        {
            return this._alphaTL;
        },

        set: function (value)
        {
            var v = Clamp(value, 0, 1);

            this._alphaTL = v;

            if (v !== 0)
            {
                this.renderFlags |= _FLAG;
            }
        }

    },

    /**
     * The alpha value starting from the top-right of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     *
     * @name Phaser.GameObjects.Components.Alpha#alphaTopRight
     * @type {number}
     * @webglOnly
     * @since 3.0.0
     */
    alphaTopRight: {

        get: function ()
        {
            return this._alphaTR;
        },

        set: function (value)
        {
            var v = Clamp(value, 0, 1);

            this._alphaTR = v;

            if (v !== 0)
            {
                this.renderFlags |= _FLAG;
            }
        }

    },

    /**
     * The alpha value starting from the bottom-left of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     *
     * @name Phaser.GameObjects.Components.Alpha#alphaBottomLeft
     * @type {number}
     * @webglOnly
     * @since 3.0.0
     */
    alphaBottomLeft: {

        get: function ()
        {
            return this._alphaBL;
        },

        set: function (value)
        {
            var v = Clamp(value, 0, 1);

            this._alphaBL = v;

            if (v !== 0)
            {
                this.renderFlags |= _FLAG;
            }
        }

    },

    /**
     * The alpha value starting from the bottom-right of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     *
     * @name Phaser.GameObjects.Components.Alpha#alphaBottomRight
     * @type {number}
     * @webglOnly
     * @since 3.0.0
     */
    alphaBottomRight: {

        get: function ()
        {
            return this._alphaBR;
        },

        set: function (value)
        {
            var v = Clamp(value, 0, 1);

            this._alphaBR = v;

            if (v !== 0)
            {
                this.renderFlags |= _FLAG;
            }
        }

    }

};

module.exports = Alpha;


/***/ }),

/***/ "../../../src/gameobjects/components/BlendMode.js":
/*!******************************************************************!*\
  !*** D:/wamp/www/phaser/src/gameobjects/components/BlendMode.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var BlendModes = __webpack_require__(/*! ../../renderer/BlendModes */ "../../../src/renderer/BlendModes.js");

/**
 * Provides methods used for setting the blend mode of a Game Object.
 * Should be applied as a mixin and not used directly.
 *
 * @namespace Phaser.GameObjects.Components.BlendMode
 * @since 3.0.0
 */

var BlendMode = {

    /**
     * Private internal value. Holds the current blend mode.
     * 
     * @name Phaser.GameObjects.Components.BlendMode#_blendMode
     * @type {integer}
     * @private
     * @default 0
     * @since 3.0.0
     */
    _blendMode: BlendModes.NORMAL,

    /**
     * Sets the Blend Mode being used by this Game Object.
     *
     * This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)
     *
     * Under WebGL only the following Blend Modes are available:
     *
     * * ADD
     * * MULTIPLY
     * * SCREEN
     * * ERASE
     *
     * Canvas has more available depending on browser support.
     *
     * You can also create your own custom Blend Modes in WebGL.
     *
     * Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
     * on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
     * reasons try to be careful about the construction of your Scene and the frequency of which blend modes
     * are used.
     *
     * @name Phaser.GameObjects.Components.BlendMode#blendMode
     * @type {(Phaser.BlendModes|string)}
     * @since 3.0.0
     */
    blendMode: {

        get: function ()
        {
            return this._blendMode;
        },

        set: function (value)
        {
            if (typeof value === 'string')
            {
                value = BlendModes[value];
            }

            value |= 0;

            if (value >= -1)
            {
                this._blendMode = value;
            }
        }

    },

    /**
     * Sets the Blend Mode being used by this Game Object.
     *
     * This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)
     *
     * Under WebGL only the following Blend Modes are available:
     *
     * * ADD
     * * MULTIPLY
     * * SCREEN
     * * ERASE (only works when rendering to a framebuffer, like a Render Texture)
     *
     * Canvas has more available depending on browser support.
     *
     * You can also create your own custom Blend Modes in WebGL.
     *
     * Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
     * on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
     * reasons try to be careful about the construction of your Scene and the frequency in which blend modes
     * are used.
     *
     * @method Phaser.GameObjects.Components.BlendMode#setBlendMode
     * @since 3.0.0
     *
     * @param {(string|Phaser.BlendModes)} value - The BlendMode value. Either a string or a CONST.
     *
     * @return {this} This Game Object instance.
     */
    setBlendMode: function (value)
    {
        this.blendMode = value;

        return this;
    }

};

module.exports = BlendMode;


/***/ }),

/***/ "../../../src/gameobjects/components/ComputedSize.js":
/*!*********************************************************************!*\
  !*** D:/wamp/www/phaser/src/gameobjects/components/ComputedSize.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Provides methods used for calculating and setting the size of a non-Frame based Game Object.
 * Should be applied as a mixin and not used directly.
 * 
 * @namespace Phaser.GameObjects.Components.ComputedSize
 * @since 3.0.0
 */

var ComputedSize = {

    /**
     * The native (un-scaled) width of this Game Object.
     * 
     * Changing this value will not change the size that the Game Object is rendered in-game.
     * For that you need to either set the scale of the Game Object (`setScale`) or use
     * the `displayWidth` property.
     * 
     * @name Phaser.GameObjects.Components.ComputedSize#width
     * @type {number}
     * @since 3.0.0
     */
    width: 0,

    /**
     * The native (un-scaled) height of this Game Object.
     * 
     * Changing this value will not change the size that the Game Object is rendered in-game.
     * For that you need to either set the scale of the Game Object (`setScale`) or use
     * the `displayHeight` property.
     * 
     * @name Phaser.GameObjects.Components.ComputedSize#height
     * @type {number}
     * @since 3.0.0
     */
    height: 0,

    /**
     * The displayed width of this Game Object.
     * 
     * This value takes into account the scale factor.
     * 
     * Setting this value will adjust the Game Object's scale property.
     * 
     * @name Phaser.GameObjects.Components.ComputedSize#displayWidth
     * @type {number}
     * @since 3.0.0
     */
    displayWidth: {

        get: function ()
        {
            return this.scaleX * this.width;
        },

        set: function (value)
        {
            this.scaleX = value / this.width;
        }

    },

    /**
     * The displayed height of this Game Object.
     * 
     * This value takes into account the scale factor.
     * 
     * Setting this value will adjust the Game Object's scale property.
     * 
     * @name Phaser.GameObjects.Components.ComputedSize#displayHeight
     * @type {number}
     * @since 3.0.0
     */
    displayHeight: {

        get: function ()
        {
            return this.scaleY * this.height;
        },

        set: function (value)
        {
            this.scaleY = value / this.height;
        }

    },

    /**
     * Sets the internal size of this Game Object, as used for frame or physics body creation.
     * 
     * This will not change the size that the Game Object is rendered in-game.
     * For that you need to either set the scale of the Game Object (`setScale`) or call the
     * `setDisplaySize` method, which is the same thing as changing the scale but allows you
     * to do so by giving pixel values.
     * 
     * If you have enabled this Game Object for input, changing the size will _not_ change the
     * size of the hit area. To do this you should adjust the `input.hitArea` object directly.
     * 
     * @method Phaser.GameObjects.Components.ComputedSize#setSize
     * @since 3.4.0
     *
     * @param {number} width - The width of this Game Object.
     * @param {number} height - The height of this Game Object.
     * 
     * @return {this} This Game Object instance.
     */
    setSize: function (width, height)
    {
        this.width = width;
        this.height = height;

        return this;
    },

    /**
     * Sets the display size of this Game Object.
     * 
     * Calling this will adjust the scale.
     * 
     * @method Phaser.GameObjects.Components.ComputedSize#setDisplaySize
     * @since 3.4.0
     *
     * @param {number} width - The width of this Game Object.
     * @param {number} height - The height of this Game Object.
     * 
     * @return {this} This Game Object instance.
     */
    setDisplaySize: function (width, height)
    {
        this.displayWidth = width;
        this.displayHeight = height;

        return this;
    }

};

module.exports = ComputedSize;


/***/ }),

/***/ "../../../src/gameobjects/components/Depth.js":
/*!**************************************************************!*\
  !*** D:/wamp/www/phaser/src/gameobjects/components/Depth.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Provides methods used for setting the depth of a Game Object.
 * Should be applied as a mixin and not used directly.
 * 
 * @namespace Phaser.GameObjects.Components.Depth
 * @since 3.0.0
 */

var Depth = {

    /**
     * Private internal value. Holds the depth of the Game Object.
     * 
     * @name Phaser.GameObjects.Components.Depth#_depth
     * @type {integer}
     * @private
     * @default 0
     * @since 3.0.0
     */
    _depth: 0,

    /**
     * The depth of this Game Object within the Scene.
     * 
     * The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
     * of Game Objects, without actually moving their position in the display list.
     *
     * The depth starts from zero (the default value) and increases from that point. A Game Object with a higher depth
     * value will always render in front of one with a lower value.
     *
     * Setting the depth will queue a depth sort event within the Scene.
     * 
     * @name Phaser.GameObjects.Components.Depth#depth
     * @type {number}
     * @since 3.0.0
     */
    depth: {

        get: function ()
        {
            return this._depth;
        },

        set: function (value)
        {
            this.scene.sys.queueDepthSort();
            this._depth = value;
        }

    },

    /**
     * The depth of this Game Object within the Scene.
     * 
     * The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
     * of Game Objects, without actually moving their position in the display list.
     *
     * The depth starts from zero (the default value) and increases from that point. A Game Object with a higher depth
     * value will always render in front of one with a lower value.
     *
     * Setting the depth will queue a depth sort event within the Scene.
     * 
     * @method Phaser.GameObjects.Components.Depth#setDepth
     * @since 3.0.0
     *
     * @param {integer} value - The depth of this Game Object.
     * 
     * @return {this} This Game Object instance.
     */
    setDepth: function (value)
    {
        if (value === undefined) { value = 0; }

        this.depth = value;

        return this;
    }

};

module.exports = Depth;


/***/ }),

/***/ "../../../src/gameobjects/components/Flip.js":
/*!*************************************************************!*\
  !*** D:/wamp/www/phaser/src/gameobjects/components/Flip.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Provides methods used for visually flipping a Game Object.
 * Should be applied as a mixin and not used directly.
 * 
 * @namespace Phaser.GameObjects.Components.Flip
 * @since 3.0.0
 */

var Flip = {

    /**
     * The horizontally flipped state of the Game Object.
     * 
     * A Game Object that is flipped horizontally will render inversed on the horizontal axis.
     * Flipping always takes place from the middle of the texture and does not impact the scale value.
     * If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.
     * 
     * @name Phaser.GameObjects.Components.Flip#flipX
     * @type {boolean}
     * @default false
     * @since 3.0.0
     */
    flipX: false,

    /**
     * The vertically flipped state of the Game Object.
     * 
     * A Game Object that is flipped vertically will render inversed on the vertical axis (i.e. upside down)
     * Flipping always takes place from the middle of the texture and does not impact the scale value.
     * If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.
     * 
     * @name Phaser.GameObjects.Components.Flip#flipY
     * @type {boolean}
     * @default false
     * @since 3.0.0
     */
    flipY: false,

    /**
     * Toggles the horizontal flipped state of this Game Object.
     * 
     * A Game Object that is flipped horizontally will render inversed on the horizontal axis.
     * Flipping always takes place from the middle of the texture and does not impact the scale value.
     * If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.
     * 
     * @method Phaser.GameObjects.Components.Flip#toggleFlipX
     * @since 3.0.0
     * 
     * @return {this} This Game Object instance.
     */
    toggleFlipX: function ()
    {
        this.flipX = !this.flipX;

        return this;
    },

    /**
     * Toggles the vertical flipped state of this Game Object.
     * 
     * @method Phaser.GameObjects.Components.Flip#toggleFlipY
     * @since 3.0.0
     * 
     * @return {this} This Game Object instance.
     */
    toggleFlipY: function ()
    {
        this.flipY = !this.flipY;

        return this;
    },

    /**
     * Sets the horizontal flipped state of this Game Object.
     * 
     * A Game Object that is flipped horizontally will render inversed on the horizontal axis.
     * Flipping always takes place from the middle of the texture and does not impact the scale value.
     * If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.
     * 
     * @method Phaser.GameObjects.Components.Flip#setFlipX
     * @since 3.0.0
     *
     * @param {boolean} value - The flipped state. `false` for no flip, or `true` to be flipped.
     * 
     * @return {this} This Game Object instance.
     */
    setFlipX: function (value)
    {
        this.flipX = value;

        return this;
    },

    /**
     * Sets the vertical flipped state of this Game Object.
     * 
     * @method Phaser.GameObjects.Components.Flip#setFlipY
     * @since 3.0.0
     *
     * @param {boolean} value - The flipped state. `false` for no flip, or `true` to be flipped.
     * 
     * @return {this} This Game Object instance.
     */
    setFlipY: function (value)
    {
        this.flipY = value;

        return this;
    },

    /**
     * Sets the horizontal and vertical flipped state of this Game Object.
     * 
     * A Game Object that is flipped will render inversed on the flipped axis.
     * Flipping always takes place from the middle of the texture and does not impact the scale value.
     * If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.
     * 
     * @method Phaser.GameObjects.Components.Flip#setFlip
     * @since 3.0.0
     *
     * @param {boolean} x - The horizontal flipped state. `false` for no flip, or `true` to be flipped.
     * @param {boolean} y - The horizontal flipped state. `false` for no flip, or `true` to be flipped.
     * 
     * @return {this} This Game Object instance.
     */
    setFlip: function (x, y)
    {
        this.flipX = x;
        this.flipY = y;

        return this;
    },

    /**
     * Resets the horizontal and vertical flipped state of this Game Object back to their default un-flipped state.
     * 
     * @method Phaser.GameObjects.Components.Flip#resetFlip
     * @since 3.0.0
     *
     * @return {this} This Game Object instance.
     */
    resetFlip: function ()
    {
        this.flipX = false;
        this.flipY = false;

        return this;
    }

};

module.exports = Flip;


/***/ }),

/***/ "../../../src/gameobjects/components/ScrollFactor.js":
/*!*********************************************************************!*\
  !*** D:/wamp/www/phaser/src/gameobjects/components/ScrollFactor.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Provides methods used for getting and setting the Scroll Factor of a Game Object.
 *
 * @namespace Phaser.GameObjects.Components.ScrollFactor
 * @since 3.0.0
 */

var ScrollFactor = {

    /**
     * The horizontal scroll factor of this Game Object.
     *
     * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
     *
     * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
     * It does not change the Game Objects actual position values.
     *
     * A value of 1 means it will move exactly in sync with a camera.
     * A value of 0 means it will not move at all, even if the camera moves.
     * Other values control the degree to which the camera movement is mapped to this Game Object.
     * 
     * Please be aware that scroll factor values other than 1 are not taken in to consideration when
     * calculating physics collisions. Bodies always collide based on their world position, but changing
     * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
     * them from physics bodies if not accounted for in your code.
     *
     * @name Phaser.GameObjects.Components.ScrollFactor#scrollFactorX
     * @type {number}
     * @default 1
     * @since 3.0.0
     */
    scrollFactorX: 1,

    /**
     * The vertical scroll factor of this Game Object.
     *
     * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
     *
     * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
     * It does not change the Game Objects actual position values.
     *
     * A value of 1 means it will move exactly in sync with a camera.
     * A value of 0 means it will not move at all, even if the camera moves.
     * Other values control the degree to which the camera movement is mapped to this Game Object.
     * 
     * Please be aware that scroll factor values other than 1 are not taken in to consideration when
     * calculating physics collisions. Bodies always collide based on their world position, but changing
     * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
     * them from physics bodies if not accounted for in your code.
     *
     * @name Phaser.GameObjects.Components.ScrollFactor#scrollFactorY
     * @type {number}
     * @default 1
     * @since 3.0.0
     */
    scrollFactorY: 1,

    /**
     * Sets the scroll factor of this Game Object.
     *
     * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
     *
     * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
     * It does not change the Game Objects actual position values.
     *
     * A value of 1 means it will move exactly in sync with a camera.
     * A value of 0 means it will not move at all, even if the camera moves.
     * Other values control the degree to which the camera movement is mapped to this Game Object.
     * 
     * Please be aware that scroll factor values other than 1 are not taken in to consideration when
     * calculating physics collisions. Bodies always collide based on their world position, but changing
     * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
     * them from physics bodies if not accounted for in your code.
     *
     * @method Phaser.GameObjects.Components.ScrollFactor#setScrollFactor
     * @since 3.0.0
     *
     * @param {number} x - The horizontal scroll factor of this Game Object.
     * @param {number} [y=x] - The vertical scroll factor of this Game Object. If not set it will use the `x` value.
     *
     * @return {this} This Game Object instance.
     */
    setScrollFactor: function (x, y)
    {
        if (y === undefined) { y = x; }

        this.scrollFactorX = x;
        this.scrollFactorY = y;

        return this;
    }

};

module.exports = ScrollFactor;


/***/ }),

/***/ "../../../src/gameobjects/components/ToJSON.js":
/*!***************************************************************!*\
  !*** D:/wamp/www/phaser/src/gameobjects/components/ToJSON.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Build a JSON representation of the given Game Object.
 *
 * This is typically extended further by Game Object specific implementations.
 *
 * @method Phaser.GameObjects.Components.ToJSON
 * @since 3.0.0
 *
 * @param {Phaser.GameObjects.GameObject} gameObject - The Game Object to export as JSON.
 *
 * @return {Phaser.Types.GameObjects.JSONGameObject} A JSON representation of the Game Object.
 */
var ToJSON = function (gameObject)
{
    var out = {
        name: gameObject.name,
        type: gameObject.type,
        x: gameObject.x,
        y: gameObject.y,
        depth: gameObject.depth,
        scale: {
            x: gameObject.scaleX,
            y: gameObject.scaleY
        },
        origin: {
            x: gameObject.originX,
            y: gameObject.originY
        },
        flipX: gameObject.flipX,
        flipY: gameObject.flipY,
        rotation: gameObject.rotation,
        alpha: gameObject.alpha,
        visible: gameObject.visible,
        scaleMode: gameObject.scaleMode,
        blendMode: gameObject.blendMode,
        textureKey: '',
        frameKey: '',
        data: {}
    };

    if (gameObject.texture)
    {
        out.textureKey = gameObject.texture.key;
        out.frameKey = gameObject.frame.name;
    }

    return out;
};

module.exports = ToJSON;


/***/ }),

/***/ "../../../src/gameobjects/components/Transform.js":
/*!******************************************************************!*\
  !*** D:/wamp/www/phaser/src/gameobjects/components/Transform.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var MATH_CONST = __webpack_require__(/*! ../../math/const */ "../../../src/math/const.js");
var TransformMatrix = __webpack_require__(/*! ./TransformMatrix */ "../../../src/gameobjects/components/TransformMatrix.js");
var WrapAngle = __webpack_require__(/*! ../../math/angle/Wrap */ "../../../src/math/angle/Wrap.js");
var WrapAngleDegrees = __webpack_require__(/*! ../../math/angle/WrapDegrees */ "../../../src/math/angle/WrapDegrees.js");

//  global bitmask flag for GameObject.renderMask (used by Scale)
var _FLAG = 4; // 0100

/**
 * Provides methods used for getting and setting the position, scale and rotation of a Game Object.
 *
 * @namespace Phaser.GameObjects.Components.Transform
 * @since 3.0.0
 */

var Transform = {

    /**
     * Private internal value. Holds the horizontal scale value.
     * 
     * @name Phaser.GameObjects.Components.Transform#_scaleX
     * @type {number}
     * @private
     * @default 1
     * @since 3.0.0
     */
    _scaleX: 1,

    /**
     * Private internal value. Holds the vertical scale value.
     * 
     * @name Phaser.GameObjects.Components.Transform#_scaleY
     * @type {number}
     * @private
     * @default 1
     * @since 3.0.0
     */
    _scaleY: 1,

    /**
     * Private internal value. Holds the rotation value in radians.
     * 
     * @name Phaser.GameObjects.Components.Transform#_rotation
     * @type {number}
     * @private
     * @default 0
     * @since 3.0.0
     */
    _rotation: 0,

    /**
     * The x position of this Game Object.
     *
     * @name Phaser.GameObjects.Components.Transform#x
     * @type {number}
     * @default 0
     * @since 3.0.0
     */
    x: 0,

    /**
     * The y position of this Game Object.
     *
     * @name Phaser.GameObjects.Components.Transform#y
     * @type {number}
     * @default 0
     * @since 3.0.0
     */
    y: 0,

    /**
     * The z position of this Game Object.
     * Note: Do not use this value to set the z-index, instead see the `depth` property.
     *
     * @name Phaser.GameObjects.Components.Transform#z
     * @type {number}
     * @default 0
     * @since 3.0.0
     */
    z: 0,

    /**
     * The w position of this Game Object.
     *
     * @name Phaser.GameObjects.Components.Transform#w
     * @type {number}
     * @default 0
     * @since 3.0.0
     */
    w: 0,

    /**
     * This is a special setter that allows you to set both the horizontal and vertical scale of this Game Object
     * to the same value, at the same time. When reading this value the result returned is `(scaleX + scaleY) / 2`.
     * 
     * Use of this property implies you wish the horizontal and vertical scales to be equal to each other. If this
     * isn't the case, use the `scaleX` or `scaleY` properties instead.
     *
     * @name Phaser.GameObjects.Components.Transform#scale
     * @type {number}
     * @default 1
     * @since 3.18.0
     */
    scale: {

        get: function ()
        {
            return (this._scaleX + this._scaleY) / 2;
        },

        set: function (value)
        {
            this._scaleX = value;
            this._scaleY = value;

            if (value === 0)
            {
                this.renderFlags &= ~_FLAG;
            }
            else
            {
                this.renderFlags |= _FLAG;
            }
        }

    },

    /**
     * The horizontal scale of this Game Object.
     *
     * @name Phaser.GameObjects.Components.Transform#scaleX
     * @type {number}
     * @default 1
     * @since 3.0.0
     */
    scaleX: {

        get: function ()
        {
            return this._scaleX;
        },

        set: function (value)
        {
            this._scaleX = value;

            if (value === 0)
            {
                this.renderFlags &= ~_FLAG;
            }
            else
            {
                this.renderFlags |= _FLAG;
            }
        }

    },

    /**
     * The vertical scale of this Game Object.
     *
     * @name Phaser.GameObjects.Components.Transform#scaleY
     * @type {number}
     * @default 1
     * @since 3.0.0
     */
    scaleY: {

        get: function ()
        {
            return this._scaleY;
        },

        set: function (value)
        {
            this._scaleY = value;

            if (value === 0)
            {
                this.renderFlags &= ~_FLAG;
            }
            else
            {
                this.renderFlags |= _FLAG;
            }
        }

    },

    /**
     * The angle of this Game Object as expressed in degrees.
     *
     * Where 0 is to the right, 90 is down, 180 is left.
     *
     * If you prefer to work in radians, see the `rotation` property instead.
     *
     * @name Phaser.GameObjects.Components.Transform#angle
     * @type {integer}
     * @default 0
     * @since 3.0.0
     */
    angle: {

        get: function ()
        {
            return WrapAngleDegrees(this._rotation * MATH_CONST.RAD_TO_DEG);
        },

        set: function (value)
        {
            //  value is in degrees
            this.rotation = WrapAngleDegrees(value) * MATH_CONST.DEG_TO_RAD;
        }
    },

    /**
     * The angle of this Game Object in radians.
     *
     * If you prefer to work in degrees, see the `angle` property instead.
     *
     * @name Phaser.GameObjects.Components.Transform#rotation
     * @type {number}
     * @default 1
     * @since 3.0.0
     */
    rotation: {

        get: function ()
        {
            return this._rotation;
        },

        set: function (value)
        {
            //  value is in radians
            this._rotation = WrapAngle(value);
        }
    },

    /**
     * Sets the position of this Game Object.
     *
     * @method Phaser.GameObjects.Components.Transform#setPosition
     * @since 3.0.0
     *
     * @param {number} [x=0] - The x position of this Game Object.
     * @param {number} [y=x] - The y position of this Game Object. If not set it will use the `x` value.
     * @param {number} [z=0] - The z position of this Game Object.
     * @param {number} [w=0] - The w position of this Game Object.
     *
     * @return {this} This Game Object instance.
     */
    setPosition: function (x, y, z, w)
    {
        if (x === undefined) { x = 0; }
        if (y === undefined) { y = x; }
        if (z === undefined) { z = 0; }
        if (w === undefined) { w = 0; }

        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;

        return this;
    },

    /**
     * Sets the position of this Game Object to be a random position within the confines of
     * the given area.
     * 
     * If no area is specified a random position between 0 x 0 and the game width x height is used instead.
     *
     * The position does not factor in the size of this Game Object, meaning that only the origin is
     * guaranteed to be within the area.
     *
     * @method Phaser.GameObjects.Components.Transform#setRandomPosition
     * @since 3.8.0
     *
     * @param {number} [x=0] - The x position of the top-left of the random area.
     * @param {number} [y=0] - The y position of the top-left of the random area.
     * @param {number} [width] - The width of the random area.
     * @param {number} [height] - The height of the random area.
     *
     * @return {this} This Game Object instance.
     */
    setRandomPosition: function (x, y, width, height)
    {
        if (x === undefined) { x = 0; }
        if (y === undefined) { y = 0; }
        if (width === undefined) { width = this.scene.sys.scale.width; }
        if (height === undefined) { height = this.scene.sys.scale.height; }

        this.x = x + (Math.random() * width);
        this.y = y + (Math.random() * height);

        return this;
    },

    /**
     * Sets the rotation of this Game Object.
     *
     * @method Phaser.GameObjects.Components.Transform#setRotation
     * @since 3.0.0
     *
     * @param {number} [radians=0] - The rotation of this Game Object, in radians.
     *
     * @return {this} This Game Object instance.
     */
    setRotation: function (radians)
    {
        if (radians === undefined) { radians = 0; }

        this.rotation = radians;

        return this;
    },

    /**
     * Sets the angle of this Game Object.
     *
     * @method Phaser.GameObjects.Components.Transform#setAngle
     * @since 3.0.0
     *
     * @param {number} [degrees=0] - The rotation of this Game Object, in degrees.
     *
     * @return {this} This Game Object instance.
     */
    setAngle: function (degrees)
    {
        if (degrees === undefined) { degrees = 0; }

        this.angle = degrees;

        return this;
    },

    /**
     * Sets the scale of this Game Object.
     *
     * @method Phaser.GameObjects.Components.Transform#setScale
     * @since 3.0.0
     *
     * @param {number} x - The horizontal scale of this Game Object.
     * @param {number} [y=x] - The vertical scale of this Game Object. If not set it will use the `x` value.
     *
     * @return {this} This Game Object instance.
     */
    setScale: function (x, y)
    {
        if (x === undefined) { x = 1; }
        if (y === undefined) { y = x; }

        this.scaleX = x;
        this.scaleY = y;

        return this;
    },

    /**
     * Sets the x position of this Game Object.
     *
     * @method Phaser.GameObjects.Components.Transform#setX
     * @since 3.0.0
     *
     * @param {number} [value=0] - The x position of this Game Object.
     *
     * @return {this} This Game Object instance.
     */
    setX: function (value)
    {
        if (value === undefined) { value = 0; }

        this.x = value;

        return this;
    },

    /**
     * Sets the y position of this Game Object.
     *
     * @method Phaser.GameObjects.Components.Transform#setY
     * @since 3.0.0
     *
     * @param {number} [value=0] - The y position of this Game Object.
     *
     * @return {this} This Game Object instance.
     */
    setY: function (value)
    {
        if (value === undefined) { value = 0; }

        this.y = value;

        return this;
    },

    /**
     * Sets the z position of this Game Object.
     *
     * @method Phaser.GameObjects.Components.Transform#setZ
     * @since 3.0.0
     *
     * @param {number} [value=0] - The z position of this Game Object.
     *
     * @return {this} This Game Object instance.
     */
    setZ: function (value)
    {
        if (value === undefined) { value = 0; }

        this.z = value;

        return this;
    },

    /**
     * Sets the w position of this Game Object.
     *
     * @method Phaser.GameObjects.Components.Transform#setW
     * @since 3.0.0
     *
     * @param {number} [value=0] - The w position of this Game Object.
     *
     * @return {this} This Game Object instance.
     */
    setW: function (value)
    {
        if (value === undefined) { value = 0; }

        this.w = value;

        return this;
    },

    /**
     * Gets the local transform matrix for this Game Object.
     *
     * @method Phaser.GameObjects.Components.Transform#getLocalTransformMatrix
     * @since 3.4.0
     *
     * @param {Phaser.GameObjects.Components.TransformMatrix} [tempMatrix] - The matrix to populate with the values from this Game Object.
     *
     * @return {Phaser.GameObjects.Components.TransformMatrix} The populated Transform Matrix.
     */
    getLocalTransformMatrix: function (tempMatrix)
    {
        if (tempMatrix === undefined) { tempMatrix = new TransformMatrix(); }

        return tempMatrix.applyITRS(this.x, this.y, this._rotation, this._scaleX, this._scaleY);
    },

    /**
     * Gets the world transform matrix for this Game Object, factoring in any parent Containers.
     *
     * @method Phaser.GameObjects.Components.Transform#getWorldTransformMatrix
     * @since 3.4.0
     *
     * @param {Phaser.GameObjects.Components.TransformMatrix} [tempMatrix] - The matrix to populate with the values from this Game Object.
     * @param {Phaser.GameObjects.Components.TransformMatrix} [parentMatrix] - A temporary matrix to hold parent values during the calculations.
     *
     * @return {Phaser.GameObjects.Components.TransformMatrix} The populated Transform Matrix.
     */
    getWorldTransformMatrix: function (tempMatrix, parentMatrix)
    {
        if (tempMatrix === undefined) { tempMatrix = new TransformMatrix(); }
        if (parentMatrix === undefined) { parentMatrix = new TransformMatrix(); }

        var parent = this.parentContainer;

        if (!parent)
        {
            return this.getLocalTransformMatrix(tempMatrix);
        }

        tempMatrix.applyITRS(this.x, this.y, this._rotation, this._scaleX, this._scaleY);

        while (parent)
        {
            parentMatrix.applyITRS(parent.x, parent.y, parent._rotation, parent._scaleX, parent._scaleY);

            parentMatrix.multiply(tempMatrix, tempMatrix);

            parent = parent.parentContainer;
        }

        return tempMatrix;
    },

    /**
     * Gets the sum total rotation of all of this Game Objects parent Containers.
     * 
     * The returned value is in radians and will be zero if this Game Object has no parent container.
     *
     * @method Phaser.GameObjects.Components.Transform#getParentRotation
     * @since 3.18.0
     *
     * @return {number} The sum total rotation, in radians, of all parent containers of this Game Object.
     */
    getParentRotation: function ()
    {
        var rotation = 0;

        var parent = this.parentContainer;

        while (parent)
        {
            rotation += parent.rotation;

            parent = parent.parentContainer;
        }

        return rotation;
    }

};

module.exports = Transform;


/***/ }),

/***/ "../../../src/gameobjects/components/TransformMatrix.js":
/*!************************************************************************!*\
  !*** D:/wamp/www/phaser/src/gameobjects/components/TransformMatrix.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = __webpack_require__(/*! ../../utils/Class */ "../../../src/utils/Class.js");
var Vector2 = __webpack_require__(/*! ../../math/Vector2 */ "../../../src/math/Vector2.js");

/**
 * @classdesc
 * A Matrix used for display transformations for rendering.
 *
 * It is represented like so:
 *
 * ```
 * | a | c | tx |
 * | b | d | ty |
 * | 0 | 0 | 1  |
 * ```
 *
 * @class TransformMatrix
 * @memberof Phaser.GameObjects.Components
 * @constructor
 * @since 3.0.0
 *
 * @param {number} [a=1] - The Scale X value.
 * @param {number} [b=0] - The Shear Y value.
 * @param {number} [c=0] - The Shear X value.
 * @param {number} [d=1] - The Scale Y value.
 * @param {number} [tx=0] - The Translate X value.
 * @param {number} [ty=0] - The Translate Y value.
 */
var TransformMatrix = new Class({

    initialize:

    function TransformMatrix (a, b, c, d, tx, ty)
    {
        if (a === undefined) { a = 1; }
        if (b === undefined) { b = 0; }
        if (c === undefined) { c = 0; }
        if (d === undefined) { d = 1; }
        if (tx === undefined) { tx = 0; }
        if (ty === undefined) { ty = 0; }

        /**
         * The matrix values.
         *
         * @name Phaser.GameObjects.Components.TransformMatrix#matrix
         * @type {Float32Array}
         * @since 3.0.0
         */
        this.matrix = new Float32Array([ a, b, c, d, tx, ty, 0, 0, 1 ]);

        /**
         * The decomposed matrix.
         *
         * @name Phaser.GameObjects.Components.TransformMatrix#decomposedMatrix
         * @type {object}
         * @since 3.0.0
         */
        this.decomposedMatrix = {
            translateX: 0,
            translateY: 0,
            scaleX: 1,
            scaleY: 1,
            rotation: 0
        };
    },

    /**
     * The Scale X value.
     *
     * @name Phaser.GameObjects.Components.TransformMatrix#a
     * @type {number}
     * @since 3.4.0
     */
    a: {

        get: function ()
        {
            return this.matrix[0];
        },

        set: function (value)
        {
            this.matrix[0] = value;
        }

    },

    /**
     * The Shear Y value.
     *
     * @name Phaser.GameObjects.Components.TransformMatrix#b
     * @type {number}
     * @since 3.4.0
     */
    b: {

        get: function ()
        {
            return this.matrix[1];
        },

        set: function (value)
        {
            this.matrix[1] = value;
        }

    },

    /**
     * The Shear X value.
     *
     * @name Phaser.GameObjects.Components.TransformMatrix#c
     * @type {number}
     * @since 3.4.0
     */
    c: {

        get: function ()
        {
            return this.matrix[2];
        },

        set: function (value)
        {
            this.matrix[2] = value;
        }

    },

    /**
     * The Scale Y value.
     *
     * @name Phaser.GameObjects.Components.TransformMatrix#d
     * @type {number}
     * @since 3.4.0
     */
    d: {

        get: function ()
        {
            return this.matrix[3];
        },

        set: function (value)
        {
            this.matrix[3] = value;
        }

    },

    /**
     * The Translate X value.
     *
     * @name Phaser.GameObjects.Components.TransformMatrix#e
     * @type {number}
     * @since 3.11.0
     */
    e: {

        get: function ()
        {
            return this.matrix[4];
        },

        set: function (value)
        {
            this.matrix[4] = value;
        }

    },

    /**
     * The Translate Y value.
     *
     * @name Phaser.GameObjects.Components.TransformMatrix#f
     * @type {number}
     * @since 3.11.0
     */
    f: {

        get: function ()
        {
            return this.matrix[5];
        },

        set: function (value)
        {
            this.matrix[5] = value;
        }

    },

    /**
     * The Translate X value.
     *
     * @name Phaser.GameObjects.Components.TransformMatrix#tx
     * @type {number}
     * @since 3.4.0
     */
    tx: {

        get: function ()
        {
            return this.matrix[4];
        },

        set: function (value)
        {
            this.matrix[4] = value;
        }

    },

    /**
     * The Translate Y value.
     *
     * @name Phaser.GameObjects.Components.TransformMatrix#ty
     * @type {number}
     * @since 3.4.0
     */
    ty: {

        get: function ()
        {
            return this.matrix[5];
        },

        set: function (value)
        {
            this.matrix[5] = value;
        }

    },

    /**
     * The rotation of the Matrix.
     *
     * @name Phaser.GameObjects.Components.TransformMatrix#rotation
     * @type {number}
     * @readonly
     * @since 3.4.0
     */
    rotation: {

        get: function ()
        {
            return Math.acos(this.a / this.scaleX) * (Math.atan(-this.c / this.a) < 0 ? -1 : 1);
        }

    },

    /**
     * The horizontal scale of the Matrix.
     *
     * @name Phaser.GameObjects.Components.TransformMatrix#scaleX
     * @type {number}
     * @readonly
     * @since 3.4.0
     */
    scaleX: {

        get: function ()
        {
            return Math.sqrt((this.a * this.a) + (this.c * this.c));
        }

    },

    /**
     * The vertical scale of the Matrix.
     *
     * @name Phaser.GameObjects.Components.TransformMatrix#scaleY
     * @type {number}
     * @readonly
     * @since 3.4.0
     */
    scaleY: {

        get: function ()
        {
            return Math.sqrt((this.b * this.b) + (this.d * this.d));
        }

    },

    /**
     * Reset the Matrix to an identity matrix.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#loadIdentity
     * @since 3.0.0
     *
     * @return {this} This TransformMatrix.
     */
    loadIdentity: function ()
    {
        var matrix = this.matrix;

        matrix[0] = 1;
        matrix[1] = 0;
        matrix[2] = 0;
        matrix[3] = 1;
        matrix[4] = 0;
        matrix[5] = 0;

        return this;
    },

    /**
     * Translate the Matrix.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#translate
     * @since 3.0.0
     *
     * @param {number} x - The horizontal translation value.
     * @param {number} y - The vertical translation value.
     *
     * @return {this} This TransformMatrix.
     */
    translate: function (x, y)
    {
        var matrix = this.matrix;

        matrix[4] = matrix[0] * x + matrix[2] * y + matrix[4];
        matrix[5] = matrix[1] * x + matrix[3] * y + matrix[5];

        return this;
    },

    /**
     * Scale the Matrix.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#scale
     * @since 3.0.0
     *
     * @param {number} x - The horizontal scale value.
     * @param {number} y - The vertical scale value.
     *
     * @return {this} This TransformMatrix.
     */
    scale: function (x, y)
    {
        var matrix = this.matrix;

        matrix[0] *= x;
        matrix[1] *= x;
        matrix[2] *= y;
        matrix[3] *= y;

        return this;
    },

    /**
     * Rotate the Matrix.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#rotate
     * @since 3.0.0
     *
     * @param {number} angle - The angle of rotation in radians.
     *
     * @return {this} This TransformMatrix.
     */
    rotate: function (angle)
    {
        var sin = Math.sin(angle);
        var cos = Math.cos(angle);

        var matrix = this.matrix;

        var a = matrix[0];
        var b = matrix[1];
        var c = matrix[2];
        var d = matrix[3];

        matrix[0] = a * cos + c * sin;
        matrix[1] = b * cos + d * sin;
        matrix[2] = a * -sin + c * cos;
        matrix[3] = b * -sin + d * cos;

        return this;
    },

    /**
     * Multiply this Matrix by the given Matrix.
     * 
     * If an `out` Matrix is given then the results will be stored in it.
     * If it is not given, this matrix will be updated in place instead.
     * Use an `out` Matrix if you do not wish to mutate this matrix.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#multiply
     * @since 3.0.0
     *
     * @param {Phaser.GameObjects.Components.TransformMatrix} rhs - The Matrix to multiply by.
     * @param {Phaser.GameObjects.Components.TransformMatrix} [out] - An optional Matrix to store the results in.
     *
     * @return {Phaser.GameObjects.Components.TransformMatrix} Either this TransformMatrix, or the `out` Matrix, if given in the arguments.
     */
    multiply: function (rhs, out)
    {
        var matrix = this.matrix;
        var source = rhs.matrix;

        var localA = matrix[0];
        var localB = matrix[1];
        var localC = matrix[2];
        var localD = matrix[3];
        var localE = matrix[4];
        var localF = matrix[5];

        var sourceA = source[0];
        var sourceB = source[1];
        var sourceC = source[2];
        var sourceD = source[3];
        var sourceE = source[4];
        var sourceF = source[5];

        var destinationMatrix = (out === undefined) ? this : out;

        destinationMatrix.a = (sourceA * localA) + (sourceB * localC);
        destinationMatrix.b = (sourceA * localB) + (sourceB * localD);
        destinationMatrix.c = (sourceC * localA) + (sourceD * localC);
        destinationMatrix.d = (sourceC * localB) + (sourceD * localD);
        destinationMatrix.e = (sourceE * localA) + (sourceF * localC) + localE;
        destinationMatrix.f = (sourceE * localB) + (sourceF * localD) + localF;

        return destinationMatrix;
    },

    /**
     * Multiply this Matrix by the matrix given, including the offset.
     * 
     * The offsetX is added to the tx value: `offsetX * a + offsetY * c + tx`.
     * The offsetY is added to the ty value: `offsetY * b + offsetY * d + ty`.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#multiplyWithOffset
     * @since 3.11.0
     *
     * @param {Phaser.GameObjects.Components.TransformMatrix} src - The source Matrix to copy from.
     * @param {number} offsetX - Horizontal offset to factor in to the multiplication.
     * @param {number} offsetY - Vertical offset to factor in to the multiplication.
     *
     * @return {this} This TransformMatrix.
     */
    multiplyWithOffset: function (src, offsetX, offsetY)
    {
        var matrix = this.matrix;
        var otherMatrix = src.matrix;

        var a0 = matrix[0];
        var b0 = matrix[1];
        var c0 = matrix[2];
        var d0 = matrix[3];
        var tx0 = matrix[4];
        var ty0 = matrix[5];

        var pse = offsetX * a0 + offsetY * c0 + tx0;
        var psf = offsetX * b0 + offsetY * d0 + ty0;

        var a1 = otherMatrix[0];
        var b1 = otherMatrix[1];
        var c1 = otherMatrix[2];
        var d1 = otherMatrix[3];
        var tx1 = otherMatrix[4];
        var ty1 = otherMatrix[5];

        matrix[0] = a1 * a0 + b1 * c0;
        matrix[1] = a1 * b0 + b1 * d0;
        matrix[2] = c1 * a0 + d1 * c0;
        matrix[3] = c1 * b0 + d1 * d0;
        matrix[4] = tx1 * a0 + ty1 * c0 + pse;
        matrix[5] = tx1 * b0 + ty1 * d0 + psf;

        return this;
    },

    /**
     * Transform the Matrix.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#transform
     * @since 3.0.0
     *
     * @param {number} a - The Scale X value.
     * @param {number} b - The Shear Y value.
     * @param {number} c - The Shear X value.
     * @param {number} d - The Scale Y value.
     * @param {number} tx - The Translate X value.
     * @param {number} ty - The Translate Y value.
     *
     * @return {this} This TransformMatrix.
     */
    transform: function (a, b, c, d, tx, ty)
    {
        var matrix = this.matrix;

        var a0 = matrix[0];
        var b0 = matrix[1];
        var c0 = matrix[2];
        var d0 = matrix[3];
        var tx0 = matrix[4];
        var ty0 = matrix[5];

        matrix[0] = a * a0 + b * c0;
        matrix[1] = a * b0 + b * d0;
        matrix[2] = c * a0 + d * c0;
        matrix[3] = c * b0 + d * d0;
        matrix[4] = tx * a0 + ty * c0 + tx0;
        matrix[5] = tx * b0 + ty * d0 + ty0;

        return this;
    },

    /**
     * Transform a point using this Matrix.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#transformPoint
     * @since 3.0.0
     *
     * @param {number} x - The x coordinate of the point to transform.
     * @param {number} y - The y coordinate of the point to transform.
     * @param {(Phaser.Geom.Point|Phaser.Math.Vector2|object)} point - The Point object to store the transformed coordinates.
     *
     * @return {(Phaser.Geom.Point|Phaser.Math.Vector2|object)} The Point containing the transformed coordinates.
     */
    transformPoint: function (x, y, point)
    {
        if (point === undefined) { point = { x: 0, y: 0 }; }

        var matrix = this.matrix;

        var a = matrix[0];
        var b = matrix[1];
        var c = matrix[2];
        var d = matrix[3];
        var tx = matrix[4];
        var ty = matrix[5];

        point.x = x * a + y * c + tx;
        point.y = x * b + y * d + ty;

        return point;
    },

    /**
     * Invert the Matrix.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#invert
     * @since 3.0.0
     *
     * @return {this} This TransformMatrix.
     */
    invert: function ()
    {
        var matrix = this.matrix;

        var a = matrix[0];
        var b = matrix[1];
        var c = matrix[2];
        var d = matrix[3];
        var tx = matrix[4];
        var ty = matrix[5];

        var n = a * d - b * c;

        matrix[0] = d / n;
        matrix[1] = -b / n;
        matrix[2] = -c / n;
        matrix[3] = a / n;
        matrix[4] = (c * ty - d * tx) / n;
        matrix[5] = -(a * ty - b * tx) / n;

        return this;
    },

    /**
     * Set the values of this Matrix to copy those of the matrix given.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#copyFrom
     * @since 3.11.0
     *
     * @param {Phaser.GameObjects.Components.TransformMatrix} src - The source Matrix to copy from.
     *
     * @return {this} This TransformMatrix.
     */
    copyFrom: function (src)
    {
        var matrix = this.matrix;

        matrix[0] = src.a;
        matrix[1] = src.b;
        matrix[2] = src.c;
        matrix[3] = src.d;
        matrix[4] = src.e;
        matrix[5] = src.f;

        return this;
    },

    /**
     * Set the values of this Matrix to copy those of the array given.
     * Where array indexes 0, 1, 2, 3, 4 and 5 are mapped to a, b, c, d, e and f.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#copyFromArray
     * @since 3.11.0
     *
     * @param {array} src - The array of values to set into this matrix.
     *
     * @return {this} This TransformMatrix.
     */
    copyFromArray: function (src)
    {
        var matrix = this.matrix;

        matrix[0] = src[0];
        matrix[1] = src[1];
        matrix[2] = src[2];
        matrix[3] = src[3];
        matrix[4] = src[4];
        matrix[5] = src[5];

        return this;
    },

    /**
     * Copy the values from this Matrix to the given Canvas Rendering Context.
     * This will use the Context.transform method.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#copyToContext
     * @since 3.12.0
     *
     * @param {CanvasRenderingContext2D} ctx - The Canvas Rendering Context to copy the matrix values to.
     *
     * @return {CanvasRenderingContext2D} The Canvas Rendering Context.
     */
    copyToContext: function (ctx)
    {
        var matrix = this.matrix;

        ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);

        return ctx;
    },

    /**
     * Copy the values from this Matrix to the given Canvas Rendering Context.
     * This will use the Context.setTransform method.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#setToContext
     * @since 3.12.0
     *
     * @param {CanvasRenderingContext2D} ctx - The Canvas Rendering Context to copy the matrix values to.
     *
     * @return {CanvasRenderingContext2D} The Canvas Rendering Context.
     */
    setToContext: function (ctx)
    {
        var matrix = this.matrix;

        ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);

        return ctx;
    },

    /**
     * Copy the values in this Matrix to the array given.
     * 
     * Where array indexes 0, 1, 2, 3, 4 and 5 are mapped to a, b, c, d, e and f.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#copyToArray
     * @since 3.12.0
     *
     * @param {array} [out] - The array to copy the matrix values in to.
     *
     * @return {array} An array where elements 0 to 5 contain the values from this matrix.
     */
    copyToArray: function (out)
    {
        var matrix = this.matrix;

        if (out === undefined)
        {
            out = [ matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5] ];
        }
        else
        {
            out[0] = matrix[0];
            out[1] = matrix[1];
            out[2] = matrix[2];
            out[3] = matrix[3];
            out[4] = matrix[4];
            out[5] = matrix[5];
        }

        return out;
    },

    /**
     * Set the values of this Matrix.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#setTransform
     * @since 3.0.0
     *
     * @param {number} a - The Scale X value.
     * @param {number} b - The Shear Y value.
     * @param {number} c - The Shear X value.
     * @param {number} d - The Scale Y value.
     * @param {number} tx - The Translate X value.
     * @param {number} ty - The Translate Y value.
     *
     * @return {this} This TransformMatrix.
     */
    setTransform: function (a, b, c, d, tx, ty)
    {
        var matrix = this.matrix;

        matrix[0] = a;
        matrix[1] = b;
        matrix[2] = c;
        matrix[3] = d;
        matrix[4] = tx;
        matrix[5] = ty;

        return this;
    },

    /**
     * Decompose this Matrix into its translation, scale and rotation values using QR decomposition.
     * 
     * The result must be applied in the following order to reproduce the current matrix:
     * 
     * translate -> rotate -> scale
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#decomposeMatrix
     * @since 3.0.0
     *
     * @return {object} The decomposed Matrix.
     */
    decomposeMatrix: function ()
    {
        var decomposedMatrix = this.decomposedMatrix;

        var matrix = this.matrix;

        //  a = scale X (1)
        //  b = shear Y (0)
        //  c = shear X (0)
        //  d = scale Y (1)

        var a = matrix[0];
        var b = matrix[1];
        var c = matrix[2];
        var d = matrix[3];

        var determ = a * d - b * c;

        decomposedMatrix.translateX = matrix[4];
        decomposedMatrix.translateY = matrix[5];

        if (a || b)
        {
            var r = Math.sqrt(a * a + b * b);

            decomposedMatrix.rotation = (b > 0) ? Math.acos(a / r) : -Math.acos(a / r);
            decomposedMatrix.scaleX = r;
            decomposedMatrix.scaleY = determ / r;
        }
        else if (c || d)
        {
            var s = Math.sqrt(c * c + d * d);

            decomposedMatrix.rotation = Math.PI * 0.5 - (d > 0 ? Math.acos(-c / s) : -Math.acos(c / s));
            decomposedMatrix.scaleX = determ / s;
            decomposedMatrix.scaleY = s;
        }
        else
        {
            decomposedMatrix.rotation = 0;
            decomposedMatrix.scaleX = 0;
            decomposedMatrix.scaleY = 0;
        }

        return decomposedMatrix;
    },

    /**
     * Apply the identity, translate, rotate and scale operations on the Matrix.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#applyITRS
     * @since 3.0.0
     *
     * @param {number} x - The horizontal translation.
     * @param {number} y - The vertical translation.
     * @param {number} rotation - The angle of rotation in radians.
     * @param {number} scaleX - The horizontal scale.
     * @param {number} scaleY - The vertical scale.
     *
     * @return {this} This TransformMatrix.
     */
    applyITRS: function (x, y, rotation, scaleX, scaleY)
    {
        var matrix = this.matrix;

        var radianSin = Math.sin(rotation);
        var radianCos = Math.cos(rotation);

        // Translate
        matrix[4] = x;
        matrix[5] = y;

        // Rotate and Scale
        matrix[0] = radianCos * scaleX;
        matrix[1] = radianSin * scaleX;
        matrix[2] = -radianSin * scaleY;
        matrix[3] = radianCos * scaleY;

        return this;
    },

    /**
     * Takes the `x` and `y` values and returns a new position in the `output` vector that is the inverse of
     * the current matrix with its transformation applied.
     * 
     * Can be used to translate points from world to local space.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#applyInverse
     * @since 3.12.0
     *
     * @param {number} x - The x position to translate.
     * @param {number} y - The y position to translate.
     * @param {Phaser.Math.Vector2} [output] - A Vector2, or point-like object, to store the results in.
     *
     * @return {Phaser.Math.Vector2} The coordinates, inverse-transformed through this matrix.
     */
    applyInverse: function (x, y, output)
    {
        if (output === undefined) { output = new Vector2(); }

        var matrix = this.matrix;

        var a = matrix[0];
        var b = matrix[1];
        var c = matrix[2];
        var d = matrix[3];
        var tx = matrix[4];
        var ty = matrix[5];

        var id = 1 / ((a * d) + (c * -b));

        output.x = (d * id * x) + (-c * id * y) + (((ty * c) - (tx * d)) * id);
        output.y = (a * id * y) + (-b * id * x) + (((-ty * a) + (tx * b)) * id);

        return output;
    },

    /**
     * Returns the X component of this matrix multiplied by the given values.
     * This is the same as `x * a + y * c + e`.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#getX
     * @since 3.12.0
     * 
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     *
     * @return {number} The calculated x value.
     */
    getX: function (x, y)
    {
        return x * this.a + y * this.c + this.e;
    },

    /**
     * Returns the Y component of this matrix multiplied by the given values.
     * This is the same as `x * b + y * d + f`.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#getY
     * @since 3.12.0
     * 
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     *
     * @return {number} The calculated y value.
     */
    getY: function (x, y)
    {
        return x * this.b + y * this.d + this.f;
    },

    /**
     * Returns a string that can be used in a CSS Transform call as a `matrix` property.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#getCSSMatrix
     * @since 3.12.0
     *
     * @return {string} A string containing the CSS Transform matrix values.
     */
    getCSSMatrix: function ()
    {
        var m = this.matrix;

        return 'matrix(' + m[0] + ',' + m[1] + ',' + m[2] + ',' + m[3] + ',' + m[4] + ',' + m[5] + ')';
    },

    /**
     * Destroys this Transform Matrix.
     *
     * @method Phaser.GameObjects.Components.TransformMatrix#destroy
     * @since 3.4.0
     */
    destroy: function ()
    {
        this.matrix = null;
        this.decomposedMatrix = null;
    }

});

module.exports = TransformMatrix;


/***/ }),

/***/ "../../../src/gameobjects/components/Visible.js":
/*!****************************************************************!*\
  !*** D:/wamp/www/phaser/src/gameobjects/components/Visible.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

//  bitmask flag for GameObject.renderMask
var _FLAG = 1; // 0001

/**
 * Provides methods used for setting the visibility of a Game Object.
 * Should be applied as a mixin and not used directly.
 * 
 * @namespace Phaser.GameObjects.Components.Visible
 * @since 3.0.0
 */

var Visible = {

    /**
     * Private internal value. Holds the visible value.
     * 
     * @name Phaser.GameObjects.Components.Visible#_visible
     * @type {boolean}
     * @private
     * @default true
     * @since 3.0.0
     */
    _visible: true,

    /**
     * The visible state of the Game Object.
     * 
     * An invisible Game Object will skip rendering, but will still process update logic.
     * 
     * @name Phaser.GameObjects.Components.Visible#visible
     * @type {boolean}
     * @since 3.0.0
     */
    visible: {

        get: function ()
        {
            return this._visible;
        },

        set: function (value)
        {
            if (value)
            {
                this._visible = true;
                this.renderFlags |= _FLAG;
            }
            else
            {
                this._visible = false;
                this.renderFlags &= ~_FLAG;
            }
        }

    },

    /**
     * Sets the visibility of this Game Object.
     * 
     * An invisible Game Object will skip rendering, but will still process update logic.
     *
     * @method Phaser.GameObjects.Components.Visible#setVisible
     * @since 3.0.0
     *
     * @param {boolean} value - The visible state of the Game Object.
     * 
     * @return {this} This Game Object instance.
     */
    setVisible: function (value)
    {
        this.visible = value;

        return this;
    }
};

module.exports = Visible;


/***/ }),

/***/ "../../../src/gameobjects/events/DESTROY_EVENT.js":
/*!******************************************************************!*\
  !*** D:/wamp/www/phaser/src/gameobjects/events/DESTROY_EVENT.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Game Object Destroy Event.
 * 
 * This event is dispatched when a Game Object instance is being destroyed.
 * 
 * Listen for it on a Game Object instance using `GameObject.on('destroy', listener)`.
 *
 * @event Phaser.GameObjects.Events#DESTROY
 * @since 3.0.0
 * 
 * @param {Phaser.GameObjects.GameObject} gameObject - The Game Object which is being destroyed.
 */
module.exports = 'destroy';


/***/ }),

/***/ "../../../src/gameobjects/events/index.js":
/*!**********************************************************!*\
  !*** D:/wamp/www/phaser/src/gameobjects/events/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.GameObjects.Events
 */

module.exports = { DESTROY: __webpack_require__(/*! ./DESTROY_EVENT */ "../../../src/gameobjects/events/DESTROY_EVENT.js") };


/***/ }),

/***/ "../../../src/loader/File.js":
/*!*********************************************!*\
  !*** D:/wamp/www/phaser/src/loader/File.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = __webpack_require__(/*! ../utils/Class */ "../../../src/utils/Class.js");
var CONST = __webpack_require__(/*! ./const */ "../../../src/loader/const.js");
var Events = __webpack_require__(/*! ./events */ "../../../src/loader/events/index.js");
var GetFastValue = __webpack_require__(/*! ../utils/object/GetFastValue */ "../../../src/utils/object/GetFastValue.js");
var GetURL = __webpack_require__(/*! ./GetURL */ "../../../src/loader/GetURL.js");
var MergeXHRSettings = __webpack_require__(/*! ./MergeXHRSettings */ "../../../src/loader/MergeXHRSettings.js");
var XHRLoader = __webpack_require__(/*! ./XHRLoader */ "../../../src/loader/XHRLoader.js");
var XHRSettings = __webpack_require__(/*! ./XHRSettings */ "../../../src/loader/XHRSettings.js");

/**
 * @classdesc
 * The base File class used by all File Types that the Loader can support.
 * You shouldn't create an instance of a File directly, but should extend it with your own class, setting a custom type and processing methods.
 *
 * @class File
 * @memberof Phaser.Loader
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Loader.LoaderPlugin} loader - The Loader that is going to load this File.
 * @param {Phaser.Types.Loader.FileConfig} fileConfig - The file configuration object, as created by the file type.
 */
var File = new Class({

    initialize:

    function File (loader, fileConfig)
    {
        /**
         * A reference to the Loader that is going to load this file.
         *
         * @name Phaser.Loader.File#loader
         * @type {Phaser.Loader.LoaderPlugin}
         * @since 3.0.0
         */
        this.loader = loader;

        /**
         * A reference to the Cache, or Texture Manager, that is going to store this file if it loads.
         *
         * @name Phaser.Loader.File#cache
         * @type {(Phaser.Cache.BaseCache|Phaser.Textures.TextureManager)}
         * @since 3.7.0
         */
        this.cache = GetFastValue(fileConfig, 'cache', false);

        /**
         * The file type string (image, json, etc) for sorting within the Loader.
         *
         * @name Phaser.Loader.File#type
         * @type {string}
         * @since 3.0.0
         */
        this.type = GetFastValue(fileConfig, 'type', false);

        /**
         * Unique cache key (unique within its file type)
         *
         * @name Phaser.Loader.File#key
         * @type {string}
         * @since 3.0.0
         */
        this.key = GetFastValue(fileConfig, 'key', false);

        var loadKey = this.key;

        if (loader.prefix && loader.prefix !== '')
        {
            this.key = loader.prefix + loadKey;
        }

        if (!this.type || !this.key)
        {
            throw new Error('Error calling \'Loader.' + this.type + '\' invalid key provided.');
        }

        /**
         * The URL of the file, not including baseURL.
         * Automatically has Loader.path prepended to it.
         *
         * @name Phaser.Loader.File#url
         * @type {string}
         * @since 3.0.0
         */
        this.url = GetFastValue(fileConfig, 'url');

        if (this.url === undefined)
        {
            this.url = loader.path + loadKey + '.' + GetFastValue(fileConfig, 'extension', '');
        }
        else if (typeof(this.url) !== 'function')
        {
            this.url = loader.path + this.url;
        }

        /**
         * The final URL this file will load from, including baseURL and path.
         * Set automatically when the Loader calls 'load' on this file.
         *
         * @name Phaser.Loader.File#src
         * @type {string}
         * @since 3.0.0
         */
        this.src = '';

        /**
         * The merged XHRSettings for this file.
         *
         * @name Phaser.Loader.File#xhrSettings
         * @type {Phaser.Types.Loader.XHRSettingsObject}
         * @since 3.0.0
         */
        this.xhrSettings = XHRSettings(GetFastValue(fileConfig, 'responseType', undefined));

        if (GetFastValue(fileConfig, 'xhrSettings', false))
        {
            this.xhrSettings = MergeXHRSettings(this.xhrSettings, GetFastValue(fileConfig, 'xhrSettings', {}));
        }

        /**
         * The XMLHttpRequest instance (as created by XHR Loader) that is loading this File.
         *
         * @name Phaser.Loader.File#xhrLoader
         * @type {?XMLHttpRequest}
         * @since 3.0.0
         */
        this.xhrLoader = null;

        /**
         * The current state of the file. One of the FILE_CONST values.
         *
         * @name Phaser.Loader.File#state
         * @type {integer}
         * @since 3.0.0
         */
        this.state = (typeof(this.url) === 'function') ? CONST.FILE_POPULATED : CONST.FILE_PENDING;

        /**
         * The total size of this file.
         * Set by onProgress and only if loading via XHR.
         *
         * @name Phaser.Loader.File#bytesTotal
         * @type {number}
         * @default 0
         * @since 3.0.0
         */
        this.bytesTotal = 0;

        /**
         * Updated as the file loads.
         * Only set if loading via XHR.
         *
         * @name Phaser.Loader.File#bytesLoaded
         * @type {number}
         * @default -1
         * @since 3.0.0
         */
        this.bytesLoaded = -1;

        /**
         * A percentage value between 0 and 1 indicating how much of this file has loaded.
         * Only set if loading via XHR.
         *
         * @name Phaser.Loader.File#percentComplete
         * @type {number}
         * @default -1
         * @since 3.0.0
         */
        this.percentComplete = -1;

        /**
         * For CORs based loading.
         * If this is undefined then the File will check BaseLoader.crossOrigin and use that (if set)
         *
         * @name Phaser.Loader.File#crossOrigin
         * @type {(string|undefined)}
         * @since 3.0.0
         */
        this.crossOrigin = undefined;

        /**
         * The processed file data, stored here after the file has loaded.
         *
         * @name Phaser.Loader.File#data
         * @type {*}
         * @since 3.0.0
         */
        this.data = undefined;

        /**
         * A config object that can be used by file types to store transitional data.
         *
         * @name Phaser.Loader.File#config
         * @type {*}
         * @since 3.0.0
         */
        this.config = GetFastValue(fileConfig, 'config', {});

        /**
         * If this is a multipart file, i.e. an atlas and its json together, then this is a reference
         * to the parent MultiFile. Set and used internally by the Loader or specific file types.
         *
         * @name Phaser.Loader.File#multiFile
         * @type {?Phaser.Loader.MultiFile}
         * @since 3.7.0
         */
        this.multiFile;

        /**
         * Does this file have an associated linked file? Such as an image and a normal map.
         * Atlases and Bitmap Fonts use the multiFile, because those files need loading together but aren't
         * actually bound by data, where-as a linkFile is.
         *
         * @name Phaser.Loader.File#linkFile
         * @type {?Phaser.Loader.File}
         * @since 3.7.0
         */
        this.linkFile;
    },

    /**
     * Links this File with another, so they depend upon each other for loading and processing.
     *
     * @method Phaser.Loader.File#setLink
     * @since 3.7.0
     *
     * @param {Phaser.Loader.File} fileB - The file to link to this one.
     */
    setLink: function (fileB)
    {
        this.linkFile = fileB;

        fileB.linkFile = this;
    },

    /**
     * Resets the XHRLoader instance this file is using.
     *
     * @method Phaser.Loader.File#resetXHR
     * @since 3.0.0
     */
    resetXHR: function ()
    {
        if (this.xhrLoader)
        {
            this.xhrLoader.onload = undefined;
            this.xhrLoader.onerror = undefined;
            this.xhrLoader.onprogress = undefined;
        }
    },

    /**
     * Called by the Loader, starts the actual file downloading.
     * During the load the methods onLoad, onError and onProgress are called, based on the XHR events.
     * You shouldn't normally call this method directly, it's meant to be invoked by the Loader.
     *
     * @method Phaser.Loader.File#load
     * @since 3.0.0
     */
    load: function ()
    {
        if (this.state === CONST.FILE_POPULATED)
        {
            //  Can happen for example in a JSONFile if they've provided a JSON object instead of a URL
            this.loader.nextFile(this, true);
        }
        else
        {
            this.src = GetURL(this, this.loader.baseURL);

            if (this.src.indexOf('data:') === 0)
            {
                console.warn('Local data URIs are not supported: ' + this.key);
            }
            else
            {
                //  The creation of this XHRLoader starts the load process going.
                //  It will automatically call the following, based on the load outcome:
                //  
                // xhr.onload = this.onLoad
                // xhr.onerror = this.onError
                // xhr.onprogress = this.onProgress

                this.xhrLoader = XHRLoader(this, this.loader.xhr);
            }
        }
    },

    /**
     * Called when the file finishes loading, is sent a DOM ProgressEvent.
     *
     * @method Phaser.Loader.File#onLoad
     * @since 3.0.0
     *
     * @param {XMLHttpRequest} xhr - The XMLHttpRequest that caused this onload event.
     * @param {ProgressEvent} event - The DOM ProgressEvent that resulted from this load.
     */
    onLoad: function (xhr, event)
    {
        var localFileOk = ((xhr.responseURL && xhr.responseURL.indexOf('file://') === 0 && event.target.status === 0));

        var success = !(event.target && event.target.status !== 200) || localFileOk;

        //  Handle HTTP status codes of 4xx and 5xx as errors, even if xhr.onerror was not called.
        if (xhr.readyState === 4 && xhr.status >= 400 && xhr.status <= 599)
        {
            success = false;
        }

        this.resetXHR();

        this.loader.nextFile(this, success);
    },

    /**
     * Called if the file errors while loading, is sent a DOM ProgressEvent.
     *
     * @method Phaser.Loader.File#onError
     * @since 3.0.0
     *
     * @param {XMLHttpRequest} xhr - The XMLHttpRequest that caused this onload event.
     * @param {ProgressEvent} event - The DOM ProgressEvent that resulted from this error.
     */
    onError: function ()
    {
        this.resetXHR();

        this.loader.nextFile(this, false);
    },

    /**
     * Called during the file load progress. Is sent a DOM ProgressEvent.
     *
     * @method Phaser.Loader.File#onProgress
     * @fires Phaser.Loader.Events#FILE_PROGRESS
     * @since 3.0.0
     *
     * @param {ProgressEvent} event - The DOM ProgressEvent.
     */
    onProgress: function (event)
    {
        if (event.lengthComputable)
        {
            this.bytesLoaded = event.loaded;
            this.bytesTotal = event.total;

            this.percentComplete = Math.min((this.bytesLoaded / this.bytesTotal), 1);

            this.loader.emit(Events.FILE_PROGRESS, this, this.percentComplete);
        }
    },

    /**
     * Usually overridden by the FileTypes and is called by Loader.nextFile.
     * This method controls what extra work this File does with its loaded data, for example a JSON file will parse itself during this stage.
     *
     * @method Phaser.Loader.File#onProcess
     * @since 3.0.0
     */
    onProcess: function ()
    {
        this.state = CONST.FILE_PROCESSING;

        this.onProcessComplete();
    },

    /**
     * Called when the File has completed processing.
     * Checks on the state of its multifile, if set.
     *
     * @method Phaser.Loader.File#onProcessComplete
     * @since 3.7.0
     */
    onProcessComplete: function ()
    {
        this.state = CONST.FILE_COMPLETE;

        if (this.multiFile)
        {
            this.multiFile.onFileComplete(this);
        }

        this.loader.fileProcessComplete(this);
    },

    /**
     * Called when the File has completed processing but it generated an error.
     * Checks on the state of its multifile, if set.
     *
     * @method Phaser.Loader.File#onProcessError
     * @since 3.7.0
     */
    onProcessError: function ()
    {
        this.state = CONST.FILE_ERRORED;

        if (this.multiFile)
        {
            this.multiFile.onFileFailed(this);
        }

        this.loader.fileProcessComplete(this);
    },

    /**
     * Checks if a key matching the one used by this file exists in the target Cache or not.
     * This is called automatically by the LoaderPlugin to decide if the file can be safely
     * loaded or will conflict.
     *
     * @method Phaser.Loader.File#hasCacheConflict
     * @since 3.7.0
     *
     * @return {boolean} `true` if adding this file will cause a conflict, otherwise `false`.
     */
    hasCacheConflict: function ()
    {
        return (this.cache && this.cache.exists(this.key));
    },

    /**
     * Adds this file to its target cache upon successful loading and processing.
     * This method is often overridden by specific file types.
     *
     * @method Phaser.Loader.File#addToCache
     * @since 3.7.0
     */
    addToCache: function ()
    {
        if (this.cache)
        {
            this.cache.add(this.key, this.data);
        }

        this.pendingDestroy();
    },

    /**
     * Called once the file has been added to its cache and is now ready for deletion from the Loader.
     * It will emit a `filecomplete` event from the LoaderPlugin.
     *
     * @method Phaser.Loader.File#pendingDestroy
     * @fires Phaser.Loader.Events#FILE_COMPLETE
     * @fires Phaser.Loader.Events#FILE_KEY_COMPLETE
     * @since 3.7.0
     */
    pendingDestroy: function (data)
    {
        if (data === undefined) { data = this.data; }

        var key = this.key;
        var type = this.type;

        this.loader.emit(Events.FILE_COMPLETE, key, type, data);
        this.loader.emit(Events.FILE_KEY_COMPLETE + type + '-' + key, key, type, data);

        this.loader.flagForRemoval(this);
    },

    /**
     * Destroy this File and any references it holds.
     *
     * @method Phaser.Loader.File#destroy
     * @since 3.7.0
     */
    destroy: function ()
    {
        this.loader = null;
        this.cache = null;
        this.xhrSettings = null;
        this.multiFile = null;
        this.linkFile = null;
        this.data = null;
    }

});

/**
 * Static method for creating object URL using URL API and setting it as image 'src' attribute.
 * If URL API is not supported (usually on old browsers) it falls back to creating Base64 encoded url using FileReader.
 *
 * @method Phaser.Loader.File.createObjectURL
 * @static
 * @since 3.7.0
 * 
 * @param {HTMLImageElement} image - Image object which 'src' attribute should be set to object URL.
 * @param {Blob} blob - A Blob object to create an object URL for.
 * @param {string} defaultType - Default mime type used if blob type is not available.
 */
File.createObjectURL = function (image, blob, defaultType)
{
    if (typeof URL === 'function')
    {
        image.src = URL.createObjectURL(blob);
    }
    else
    {
        var reader = new FileReader();

        reader.onload = function ()
        {
            image.removeAttribute('crossOrigin');
            image.src = 'data:' + (blob.type || defaultType) + ';base64,' + reader.result.split(',')[1];
        };

        reader.onerror = image.onerror;

        reader.readAsDataURL(blob);
    }
};

/**
 * Static method for releasing an existing object URL which was previously created
 * by calling {@link File#createObjectURL} method.
 *
 * @method Phaser.Loader.File.revokeObjectURL
 * @static
 * @since 3.7.0
 * 
 * @param {HTMLImageElement} image - Image object which 'src' attribute should be revoked.
 */
File.revokeObjectURL = function (image)
{
    if (typeof URL === 'function')
    {
        URL.revokeObjectURL(image.src);
    }
};

module.exports = File;


/***/ }),

/***/ "../../../src/loader/FileTypesManager.js":
/*!*********************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/FileTypesManager.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var types = {};

/**
 * @namespace Phaser.Loader.FileTypesManager
 */

var FileTypesManager = {

    /**
     * Static method called when a LoaderPlugin is created.
     * 
     * Loops through the local types object and injects all of them as
     * properties into the LoaderPlugin instance.
     *
     * @method Phaser.Loader.FileTypesManager.install
     * @since 3.0.0
     * 
     * @param {Phaser.Loader.LoaderPlugin} loader - The LoaderPlugin to install the types into.
     */
    install: function (loader)
    {
        for (var key in types)
        {
            loader[key] = types[key];
        }
    },

    /**
     * Static method called directly by the File Types.
     * 
     * The key is a reference to the function used to load the files via the Loader, i.e. `image`.
     *
     * @method Phaser.Loader.FileTypesManager.register
     * @since 3.0.0
     * 
     * @param {string} key - The key that will be used as the method name in the LoaderPlugin.
     * @param {function} factoryFunction - The function that will be called when LoaderPlugin.key is invoked.
     */
    register: function (key, factoryFunction)
    {
        types[key] = factoryFunction;
    },

    /**
     * Removed all associated file types.
     *
     * @method Phaser.Loader.FileTypesManager.destroy
     * @since 3.0.0
     */
    destroy: function ()
    {
        types = {};
    }

};

module.exports = FileTypesManager;


/***/ }),

/***/ "../../../src/loader/GetURL.js":
/*!***********************************************!*\
  !*** D:/wamp/www/phaser/src/loader/GetURL.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Given a File and a baseURL value this returns the URL the File will use to download from.
 *
 * @function Phaser.Loader.GetURL
 * @since 3.0.0
 *
 * @param {Phaser.Loader.File} file - The File object.
 * @param {string} baseURL - A default base URL.
 *
 * @return {string} The URL the File will use.
 */
var GetURL = function (file, baseURL)
{
    if (!file.url)
    {
        return false;
    }

    if (file.url.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/))
    {
        return file.url;
    }
    else
    {
        return baseURL + file.url;
    }
};

module.exports = GetURL;


/***/ }),

/***/ "../../../src/loader/MergeXHRSettings.js":
/*!*********************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/MergeXHRSettings.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Extend = __webpack_require__(/*! ../utils/object/Extend */ "../../../src/utils/object/Extend.js");
var XHRSettings = __webpack_require__(/*! ./XHRSettings */ "../../../src/loader/XHRSettings.js");

/**
 * Takes two XHRSettings Objects and creates a new XHRSettings object from them.
 *
 * The new object is seeded by the values given in the global settings, but any setting in
 * the local object overrides the global ones.
 *
 * @function Phaser.Loader.MergeXHRSettings
 * @since 3.0.0
 *
 * @param {Phaser.Types.Loader.XHRSettingsObject} global - The global XHRSettings object.
 * @param {Phaser.Types.Loader.XHRSettingsObject} local - The local XHRSettings object.
 *
 * @return {Phaser.Types.Loader.XHRSettingsObject} A newly formed XHRSettings object.
 */
var MergeXHRSettings = function (global, local)
{
    var output = (global === undefined) ? XHRSettings() : Extend({}, global);

    if (local)
    {
        for (var setting in local)
        {
            if (local[setting] !== undefined)
            {
                output[setting] = local[setting];
            }
        }
    }

    return output;
};

module.exports = MergeXHRSettings;


/***/ }),

/***/ "../../../src/loader/MultiFile.js":
/*!**************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/MultiFile.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = __webpack_require__(/*! ../utils/Class */ "../../../src/utils/Class.js");

/**
 * @classdesc
 * A MultiFile is a special kind of parent that contains two, or more, Files as children and looks after
 * the loading and processing of them all. It is commonly extended and used as a base class for file types such as AtlasJSON or BitmapFont.
 * 
 * You shouldn't create an instance of a MultiFile directly, but should extend it with your own class, setting a custom type and processing methods.
 *
 * @class MultiFile
 * @memberof Phaser.Loader
 * @constructor
 * @since 3.7.0
 *
 * @param {Phaser.Loader.LoaderPlugin} loader - The Loader that is going to load this File.
 * @param {string} type - The file type string for sorting within the Loader.
 * @param {string} key - The key of the file within the loader.
 * @param {Phaser.Loader.File[]} files - An array of Files that make-up this MultiFile.
 */
var MultiFile = new Class({

    initialize:

    function MultiFile (loader, type, key, files)
    {
        /**
         * A reference to the Loader that is going to load this file.
         *
         * @name Phaser.Loader.MultiFile#loader
         * @type {Phaser.Loader.LoaderPlugin}
         * @since 3.7.0
         */
        this.loader = loader;

        /**
         * The file type string for sorting within the Loader.
         *
         * @name Phaser.Loader.MultiFile#type
         * @type {string}
         * @since 3.7.0
         */
        this.type = type;

        /**
         * Unique cache key (unique within its file type)
         *
         * @name Phaser.Loader.MultiFile#key
         * @type {string}
         * @since 3.7.0
         */
        this.key = key;

        /**
         * Array of files that make up this MultiFile.
         *
         * @name Phaser.Loader.MultiFile#files
         * @type {Phaser.Loader.File[]}
         * @since 3.7.0
         */
        this.files = files;

        /**
         * The completion status of this MultiFile.
         *
         * @name Phaser.Loader.MultiFile#complete
         * @type {boolean}
         * @default false
         * @since 3.7.0
         */
        this.complete = false;

        /**
         * The number of files to load.
         *
         * @name Phaser.Loader.MultiFile#pending
         * @type {integer}
         * @since 3.7.0
         */

        this.pending = files.length;

        /**
         * The number of files that failed to load.
         *
         * @name Phaser.Loader.MultiFile#failed
         * @type {integer}
         * @default 0
         * @since 3.7.0
         */
        this.failed = 0;

        /**
         * A storage container for transient data that the loading files need.
         *
         * @name Phaser.Loader.MultiFile#config
         * @type {any}
         * @since 3.7.0
         */
        this.config = {};

        //  Link the files
        for (var i = 0; i < files.length; i++)
        {
            files[i].multiFile = this;
        }
    },

    /**
     * Checks if this MultiFile is ready to process its children or not.
     *
     * @method Phaser.Loader.MultiFile#isReadyToProcess
     * @since 3.7.0
     *
     * @return {boolean} `true` if all children of this MultiFile have loaded, otherwise `false`.
     */
    isReadyToProcess: function ()
    {
        return (this.pending === 0 && this.failed === 0 && !this.complete);
    },

    /**
     * Adds another child to this MultiFile, increases the pending count and resets the completion status.
     *
     * @method Phaser.Loader.MultiFile#addToMultiFile
     * @since 3.7.0
     *
     * @param {Phaser.Loader.File} files - The File to add to this MultiFile.
     *
     * @return {Phaser.Loader.MultiFile} This MultiFile instance.
     */
    addToMultiFile: function (file)
    {
        this.files.push(file);

        file.multiFile = this;

        this.pending++;

        this.complete = false;

        return this;
    },

    /**
     * Called by each File when it finishes loading.
     *
     * @method Phaser.Loader.MultiFile#onFileComplete
     * @since 3.7.0
     *
     * @param {Phaser.Loader.File} file - The File that has completed processing.
     */
    onFileComplete: function (file)
    {
        var index = this.files.indexOf(file);

        if (index !== -1)
        {
            this.pending--;
        }
    },

    /**
     * Called by each File that fails to load.
     *
     * @method Phaser.Loader.MultiFile#onFileFailed
     * @since 3.7.0
     *
     * @param {Phaser.Loader.File} file - The File that has failed to load.
     */
    onFileFailed: function (file)
    {
        var index = this.files.indexOf(file);

        if (index !== -1)
        {
            this.failed++;
        }
    }

});

module.exports = MultiFile;


/***/ }),

/***/ "../../../src/loader/XHRLoader.js":
/*!**************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/XHRLoader.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var MergeXHRSettings = __webpack_require__(/*! ./MergeXHRSettings */ "../../../src/loader/MergeXHRSettings.js");

/**
 * Creates a new XMLHttpRequest (xhr) object based on the given File and XHRSettings
 * and starts the download of it. It uses the Files own XHRSettings and merges them
 * with the global XHRSettings object to set the xhr values before download.
 *
 * @function Phaser.Loader.XHRLoader
 * @since 3.0.0
 *
 * @param {Phaser.Loader.File} file - The File to download.
 * @param {Phaser.Types.Loader.XHRSettingsObject} globalXHRSettings - The global XHRSettings object.
 *
 * @return {XMLHttpRequest} The XHR object.
 */
var XHRLoader = function (file, globalXHRSettings)
{
    var config = MergeXHRSettings(globalXHRSettings, file.xhrSettings);

    var xhr = new XMLHttpRequest();

    xhr.open('GET', file.src, config.async, config.user, config.password);

    xhr.responseType = file.xhrSettings.responseType;
    xhr.timeout = config.timeout;

    if (config.header && config.headerValue)
    {
        xhr.setRequestHeader(config.header, config.headerValue);
    }

    if (config.requestedWith)
    {
        xhr.setRequestHeader('X-Requested-With', config.requestedWith);
    }

    if (config.overrideMimeType)
    {
        xhr.overrideMimeType(config.overrideMimeType);
    }

    // After a successful request, the xhr.response property will contain the requested data as a DOMString, ArrayBuffer, Blob, or Document (depending on what was set for responseType.)

    xhr.onload = file.onLoad.bind(file, xhr);
    xhr.onerror = file.onError.bind(file, xhr);
    xhr.onprogress = file.onProgress.bind(file);

    //  This is the only standard method, the ones above are browser additions (maybe not universal?)
    // xhr.onreadystatechange

    xhr.send();

    return xhr;
};

module.exports = XHRLoader;


/***/ }),

/***/ "../../../src/loader/XHRSettings.js":
/*!****************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/XHRSettings.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Creates an XHRSettings Object with default values.
 *
 * @function Phaser.Loader.XHRSettings
 * @since 3.0.0
 *
 * @param {XMLHttpRequestResponseType} [responseType=''] - The responseType, such as 'text'.
 * @param {boolean} [async=true] - Should the XHR request use async or not?
 * @param {string} [user=''] - Optional username for the XHR request.
 * @param {string} [password=''] - Optional password for the XHR request.
 * @param {integer} [timeout=0] - Optional XHR timeout value.
 *
 * @return {Phaser.Types.Loader.XHRSettingsObject} The XHRSettings object as used by the Loader.
 */
var XHRSettings = function (responseType, async, user, password, timeout)
{
    if (responseType === undefined) { responseType = ''; }
    if (async === undefined) { async = true; }
    if (user === undefined) { user = ''; }
    if (password === undefined) { password = ''; }
    if (timeout === undefined) { timeout = 0; }

    // Before sending a request, set the xhr.responseType to "text",
    // "arraybuffer", "blob", or "document", depending on your data needs.
    // Note, setting xhr.responseType = '' (or omitting) will default the response to "text".

    return {

        //  Ignored by the Loader, only used by File.
        responseType: responseType,

        async: async,

        //  credentials
        user: user,
        password: password,

        //  timeout in ms (0 = no timeout)
        timeout: timeout,

        //  setRequestHeader
        header: undefined,
        headerValue: undefined,
        requestedWith: false,

        //  overrideMimeType
        overrideMimeType: undefined

    };
};

module.exports = XHRSettings;


/***/ }),

/***/ "../../../src/loader/const.js":
/*!**********************************************!*\
  !*** D:/wamp/www/phaser/src/loader/const.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var FILE_CONST = {

    /**
     * The Loader is idle.
     * 
     * @name Phaser.Loader.LOADER_IDLE
     * @type {integer}
     * @since 3.0.0
     */
    LOADER_IDLE: 0,

    /**
     * The Loader is actively loading.
     * 
     * @name Phaser.Loader.LOADER_LOADING
     * @type {integer}
     * @since 3.0.0
     */
    LOADER_LOADING: 1,

    /**
     * The Loader is processing files is has loaded.
     * 
     * @name Phaser.Loader.LOADER_PROCESSING
     * @type {integer}
     * @since 3.0.0
     */
    LOADER_PROCESSING: 2,

    /**
     * The Loader has completed loading and processing.
     * 
     * @name Phaser.Loader.LOADER_COMPLETE
     * @type {integer}
     * @since 3.0.0
     */
    LOADER_COMPLETE: 3,

    /**
     * The Loader is shutting down.
     * 
     * @name Phaser.Loader.LOADER_SHUTDOWN
     * @type {integer}
     * @since 3.0.0
     */
    LOADER_SHUTDOWN: 4,

    /**
     * The Loader has been destroyed.
     * 
     * @name Phaser.Loader.LOADER_DESTROYED
     * @type {integer}
     * @since 3.0.0
     */
    LOADER_DESTROYED: 5,

    /**
     * File is in the load queue but not yet started
     * 
     * @name Phaser.Loader.FILE_PENDING
     * @type {integer}
     * @since 3.0.0
     */
    FILE_PENDING: 10,

    /**
     * File has been started to load by the loader (onLoad called)
     * 
     * @name Phaser.Loader.FILE_LOADING
     * @type {integer}
     * @since 3.0.0
     */
    FILE_LOADING: 11,

    /**
     * File has loaded successfully, awaiting processing    
     * 
     * @name Phaser.Loader.FILE_LOADED
     * @type {integer}
     * @since 3.0.0
     */
    FILE_LOADED: 12,

    /**
     * File failed to load
     * 
     * @name Phaser.Loader.FILE_FAILED
     * @type {integer}
     * @since 3.0.0
     */
    FILE_FAILED: 13,

    /**
     * File is being processed (onProcess callback)
     * 
     * @name Phaser.Loader.FILE_PROCESSING
     * @type {integer}
     * @since 3.0.0
     */
    FILE_PROCESSING: 14,

    /**
     * The File has errored somehow during processing.
     * 
     * @name Phaser.Loader.FILE_ERRORED
     * @type {integer}
     * @since 3.0.0
     */
    FILE_ERRORED: 16,

    /**
     * File has finished processing.
     * 
     * @name Phaser.Loader.FILE_COMPLETE
     * @type {integer}
     * @since 3.0.0
     */
    FILE_COMPLETE: 17,

    /**
     * File has been destroyed
     * 
     * @name Phaser.Loader.FILE_DESTROYED
     * @type {integer}
     * @since 3.0.0
     */
    FILE_DESTROYED: 18,

    /**
     * File was populated from local data and doesn't need an HTTP request
     * 
     * @name Phaser.Loader.FILE_POPULATED
     * @type {integer}
     * @since 3.0.0
     */
    FILE_POPULATED: 19

};

module.exports = FILE_CONST;


/***/ }),

/***/ "../../../src/loader/events/ADD_EVENT.js":
/*!*********************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/events/ADD_EVENT.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Loader Plugin Add File Event.
 * 
 * This event is dispatched when a new file is successfully added to the Loader and placed into the load queue.
 * 
 * Listen to it from a Scene using: `this.load.on('addfile', listener)`.
 * 
 * If you add lots of files to a Loader from a `preload` method, it will dispatch this event for each one of them.
 *
 * @event Phaser.Loader.Events#ADD
 * @since 3.0.0
 * 
 * @param {string} key - The unique key of the file that was added to the Loader.
 * @param {string} type - The [file type]{@link Phaser.Loader.File#type} string of the file that was added to the Loader, i.e. `image`.
 * @param {Phaser.Loader.LoaderPlugin} loader - A reference to the Loader Plugin that dispatched this event.
 * @param {Phaser.Loader.File} file - A reference to the File which was added to the Loader.
 */
module.exports = 'addfile';


/***/ }),

/***/ "../../../src/loader/events/COMPLETE_EVENT.js":
/*!**************************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/events/COMPLETE_EVENT.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Loader Plugin Complete Event.
 * 
 * This event is dispatched when the Loader has fully processed everything in the load queue.
 * By this point every loaded file will now be in its associated cache and ready for use.
 * 
 * Listen to it from a Scene using: `this.load.on('complete', listener)`.
 *
 * @event Phaser.Loader.Events#COMPLETE
 * @since 3.0.0
 * 
 * @param {Phaser.Loader.LoaderPlugin} loader - A reference to the Loader Plugin that dispatched this event.
 * @param {integer} totalComplete - The total number of files that successfully loaded.
 * @param {integer} totalFailed - The total number of files that failed to load.
 */
module.exports = 'complete';


/***/ }),

/***/ "../../../src/loader/events/FILE_COMPLETE_EVENT.js":
/*!*******************************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/events/FILE_COMPLETE_EVENT.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The File Load Complete Event.
 * 
 * This event is dispatched by the Loader Plugin when any file in the queue finishes loading.
 * 
 * Listen to it from a Scene using: `this.load.on('filecomplete', listener)`.
 * 
 * You can also listen for the completion of a specific file. See the [FILE_KEY_COMPLETE]{@linkcode Phaser.Loader.Events#event:FILE_KEY_COMPLETE} event.
 *
 * @event Phaser.Loader.Events#FILE_COMPLETE
 * @since 3.0.0
 * 
 * @param {string} key - The key of the file that just loaded and finished processing.
 * @param {string} type - The [file type]{@link Phaser.Loader.File#type} of the file that just loaded, i.e. `image`.
 * @param {any} data - The raw data the file contained.
 */
module.exports = 'filecomplete';


/***/ }),

/***/ "../../../src/loader/events/FILE_KEY_COMPLETE_EVENT.js":
/*!***********************************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/events/FILE_KEY_COMPLETE_EVENT.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The File Load Complete Event.
 * 
 * This event is dispatched by the Loader Plugin when any file in the queue finishes loading.
 * 
 * It uses a special dynamic event name constructed from the key and type of the file.
 * 
 * For example, if you have loaded an `image` with a key of `monster`, you can listen for it
 * using the following:
 *
 * ```javascript
 * this.load.on('filecomplete-image-monster', function (key, type, data) {
 *     // Your handler code
 * });
 * ```
 *
 * Or, if you have loaded a texture `atlas` with a key of `Level1`:
 * 
 * ```javascript
 * this.load.on('filecomplete-atlas-Level1', function (key, type, data) {
 *     // Your handler code
 * });
 * ```
 * 
 * Or, if you have loaded a sprite sheet with a key of `Explosion` and a prefix of `GAMEOVER`:
 * 
 * ```javascript
 * this.load.on('filecomplete-spritesheet-GAMEOVERExplosion', function (key, type, data) {
 *     // Your handler code
 * });
 * ```
 * 
 * You can also listen for the generic completion of files. See the [FILE_COMPLETE]{@linkcode Phaser.Loader.Events#event:FILE_COMPLETE} event.
 *
 * @event Phaser.Loader.Events#FILE_KEY_COMPLETE
 * @since 3.0.0
 * 
 * @param {string} key - The key of the file that just loaded and finished processing.
 * @param {string} type - The [file type]{@link Phaser.Loader.File#type} of the file that just loaded, i.e. `image`.
 * @param {any} data - The raw data the file contained.
 */
module.exports = 'filecomplete-';


/***/ }),

/***/ "../../../src/loader/events/FILE_LOAD_ERROR_EVENT.js":
/*!*********************************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/events/FILE_LOAD_ERROR_EVENT.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The File Load Error Event.
 * 
 * This event is dispatched by the Loader Plugin when a file fails to load.
 * 
 * Listen to it from a Scene using: `this.load.on('loaderror', listener)`.
 *
 * @event Phaser.Loader.Events#FILE_LOAD_ERROR
 * @since 3.0.0
 * 
 * @param {Phaser.Loader.File} file - A reference to the File which errored during load.
 */
module.exports = 'loaderror';


/***/ }),

/***/ "../../../src/loader/events/FILE_LOAD_EVENT.js":
/*!***************************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/events/FILE_LOAD_EVENT.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The File Load Event.
 * 
 * This event is dispatched by the Loader Plugin when a file finishes loading,
 * but _before_ it is processed and added to the internal Phaser caches.
 * 
 * Listen to it from a Scene using: `this.load.on('load', listener)`.
 *
 * @event Phaser.Loader.Events#FILE_LOAD
 * @since 3.0.0
 * 
 * @param {Phaser.Loader.File} file - A reference to the File which just finished loading.
 */
module.exports = 'load';


/***/ }),

/***/ "../../../src/loader/events/FILE_PROGRESS_EVENT.js":
/*!*******************************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/events/FILE_PROGRESS_EVENT.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The File Load Progress Event.
 * 
 * This event is dispatched by the Loader Plugin during the load of a file, if the browser receives a DOM ProgressEvent and
 * the `lengthComputable` event property is true. Depending on the size of the file and browser in use, this may, or may not happen.
 * 
 * Listen to it from a Scene using: `this.load.on('fileprogress', listener)`.
 *
 * @event Phaser.Loader.Events#FILE_PROGRESS
 * @since 3.0.0
 * 
 * @param {Phaser.Loader.File} file - A reference to the File which errored during load.
 * @param {number} percentComplete - A value between 0 and 1 indicating how 'complete' this file is.
 */
module.exports = 'fileprogress';


/***/ }),

/***/ "../../../src/loader/events/POST_PROCESS_EVENT.js":
/*!******************************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/events/POST_PROCESS_EVENT.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Loader Plugin Post Process Event.
 * 
 * This event is dispatched by the Loader Plugin when the Loader has finished loading everything in the load queue.
 * It is dispatched before the internal lists are cleared and each File is destroyed.
 * 
 * Use this hook to perform any last minute processing of files that can only happen once the
 * Loader has completed, but prior to it emitting the `complete` event.
 * 
 * Listen to it from a Scene using: `this.load.on('postprocess', listener)`.
 *
 * @event Phaser.Loader.Events#POST_PROCESS
 * @since 3.0.0
 * 
 * @param {Phaser.Loader.LoaderPlugin} loader - A reference to the Loader Plugin that dispatched this event.
 */
module.exports = 'postprocess';


/***/ }),

/***/ "../../../src/loader/events/PROGRESS_EVENT.js":
/*!**************************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/events/PROGRESS_EVENT.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Loader Plugin Progress Event.
 * 
 * This event is dispatched when the Loader updates its load progress, typically as a result of a file having completed loading.
 * 
 * Listen to it from a Scene using: `this.load.on('progress', listener)`.
 *
 * @event Phaser.Loader.Events#PROGRESS
 * @since 3.0.0
 * 
 * @param {number} progress - The current progress of the load. A value between 0 and 1.
 */
module.exports = 'progress';


/***/ }),

/***/ "../../../src/loader/events/START_EVENT.js":
/*!***********************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/events/START_EVENT.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Loader Plugin Start Event.
 * 
 * This event is dispatched when the Loader starts running. At this point load progress is zero.
 * 
 * This event is dispatched even if there aren't any files in the load queue.
 * 
 * Listen to it from a Scene using: `this.load.on('start', listener)`.
 *
 * @event Phaser.Loader.Events#START
 * @since 3.0.0
 * 
 * @param {Phaser.Loader.LoaderPlugin} loader - A reference to the Loader Plugin that dispatched this event.
 */
module.exports = 'start';


/***/ }),

/***/ "../../../src/loader/events/index.js":
/*!*****************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/events/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Loader.Events
 */

module.exports = {

    ADD: __webpack_require__(/*! ./ADD_EVENT */ "../../../src/loader/events/ADD_EVENT.js"),
    COMPLETE: __webpack_require__(/*! ./COMPLETE_EVENT */ "../../../src/loader/events/COMPLETE_EVENT.js"),
    FILE_COMPLETE: __webpack_require__(/*! ./FILE_COMPLETE_EVENT */ "../../../src/loader/events/FILE_COMPLETE_EVENT.js"),
    FILE_KEY_COMPLETE: __webpack_require__(/*! ./FILE_KEY_COMPLETE_EVENT */ "../../../src/loader/events/FILE_KEY_COMPLETE_EVENT.js"),
    FILE_LOAD_ERROR: __webpack_require__(/*! ./FILE_LOAD_ERROR_EVENT */ "../../../src/loader/events/FILE_LOAD_ERROR_EVENT.js"),
    FILE_LOAD: __webpack_require__(/*! ./FILE_LOAD_EVENT */ "../../../src/loader/events/FILE_LOAD_EVENT.js"),
    FILE_PROGRESS: __webpack_require__(/*! ./FILE_PROGRESS_EVENT */ "../../../src/loader/events/FILE_PROGRESS_EVENT.js"),
    POST_PROCESS: __webpack_require__(/*! ./POST_PROCESS_EVENT */ "../../../src/loader/events/POST_PROCESS_EVENT.js"),
    PROGRESS: __webpack_require__(/*! ./PROGRESS_EVENT */ "../../../src/loader/events/PROGRESS_EVENT.js"),
    START: __webpack_require__(/*! ./START_EVENT */ "../../../src/loader/events/START_EVENT.js")

};


/***/ }),

/***/ "../../../src/loader/filetypes/ImageFile.js":
/*!************************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/filetypes/ImageFile.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = __webpack_require__(/*! ../../utils/Class */ "../../../src/utils/Class.js");
var CONST = __webpack_require__(/*! ../const */ "../../../src/loader/const.js");
var File = __webpack_require__(/*! ../File */ "../../../src/loader/File.js");
var FileTypesManager = __webpack_require__(/*! ../FileTypesManager */ "../../../src/loader/FileTypesManager.js");
var GetFastValue = __webpack_require__(/*! ../../utils/object/GetFastValue */ "../../../src/utils/object/GetFastValue.js");
var IsPlainObject = __webpack_require__(/*! ../../utils/object/IsPlainObject */ "../../../src/utils/object/IsPlainObject.js");

/**
 * @classdesc
 * A single Image File suitable for loading by the Loader.
 *
 * These are created when you use the Phaser.Loader.LoaderPlugin#image method and are not typically created directly.
 * 
 * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#image.
 *
 * @class ImageFile
 * @extends Phaser.Loader.File
 * @memberof Phaser.Loader.FileTypes
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Loader.LoaderPlugin} loader - A reference to the Loader that is responsible for this file.
 * @param {(string|Phaser.Types.Loader.FileTypes.ImageFileConfig)} key - The key to use for this file, or a file configuration object.
 * @param {string|string[]} [url] - The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
 * @param {Phaser.Types.Loader.XHRSettingsObject} [xhrSettings] - Extra XHR Settings specifically for this file.
 * @param {Phaser.Types.Loader.FileTypes.ImageFrameConfig} [frameConfig] - The frame configuration object. Only provided for, and used by, Sprite Sheets.
 */
var ImageFile = new Class({

    Extends: File,

    initialize:

    function ImageFile (loader, key, url, xhrSettings, frameConfig)
    {
        var extension = 'png';
        var normalMapURL;

        if (IsPlainObject(key))
        {
            var config = key;

            key = GetFastValue(config, 'key');
            url = GetFastValue(config, 'url');
            normalMapURL = GetFastValue(config, 'normalMap');
            xhrSettings = GetFastValue(config, 'xhrSettings');
            extension = GetFastValue(config, 'extension', extension);
            frameConfig = GetFastValue(config, 'frameConfig');
        }

        if (Array.isArray(url))
        {
            normalMapURL = url[1];
            url = url[0];
        }

        var fileConfig = {
            type: 'image',
            cache: loader.textureManager,
            extension: extension,
            responseType: 'blob',
            key: key,
            url: url,
            xhrSettings: xhrSettings,
            config: frameConfig
        };

        File.call(this, loader, fileConfig);

        //  Do we have a normal map to load as well?
        if (normalMapURL)
        {
            var normalMap = new ImageFile(loader, this.key, normalMapURL, xhrSettings, frameConfig);

            normalMap.type = 'normalMap';

            this.setLink(normalMap);

            loader.addFile(normalMap);
        }
    },

    /**
     * Called automatically by Loader.nextFile.
     * This method controls what extra work this File does with its loaded data.
     *
     * @method Phaser.Loader.FileTypes.ImageFile#onProcess
     * @since 3.7.0
     */
    onProcess: function ()
    {
        this.state = CONST.FILE_PROCESSING;

        this.data = new Image();

        this.data.crossOrigin = this.crossOrigin;

        var _this = this;

        this.data.onload = function ()
        {
            File.revokeObjectURL(_this.data);

            _this.onProcessComplete();
        };

        this.data.onerror = function ()
        {
            File.revokeObjectURL(_this.data);

            _this.onProcessError();
        };

        File.createObjectURL(this.data, this.xhrLoader.response, 'image/png');
    },

    /**
     * Adds this file to its target cache upon successful loading and processing.
     *
     * @method Phaser.Loader.FileTypes.ImageFile#addToCache
     * @since 3.7.0
     */
    addToCache: function ()
    {
        var texture;
        var linkFile = this.linkFile;

        if (linkFile && linkFile.state === CONST.FILE_COMPLETE)
        {
            if (this.type === 'image')
            {
                texture = this.cache.addImage(this.key, this.data, linkFile.data);
            }
            else
            {
                texture = this.cache.addImage(linkFile.key, linkFile.data, this.data);
            }

            this.pendingDestroy(texture);

            linkFile.pendingDestroy(texture);
        }
        else if (!linkFile)
        {
            texture = this.cache.addImage(this.key, this.data);

            this.pendingDestroy(texture);
        }
    }

});

/**
 * Adds an Image, or array of Images, to the current load queue.
 *
 * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
 * 
 * ```javascript
 * function preload ()
 * {
 *     this.load.image('logo', 'images/phaserLogo.png');
 * }
 * ```
 *
 * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
 * or if it's already running, when the next free load slot becomes available. This happens automatically if you
 * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
 * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
 * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
 * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
 * loaded.
 * 
 * Phaser can load all common image types: png, jpg, gif and any other format the browser can natively handle.
 * If you try to load an animated gif only the first frame will be rendered. Browsers do not natively support playback
 * of animated gifs to Canvas elements.
 *
 * The key must be a unique String. It is used to add the file to the global Texture Manager upon a successful load.
 * The key should be unique both in terms of files being loaded and files already present in the Texture Manager.
 * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
 * then remove it from the Texture Manager first, before loading a new one.
 *
 * Instead of passing arguments you can pass a configuration object, such as:
 * 
 * ```javascript
 * this.load.image({
 *     key: 'logo',
 *     url: 'images/AtariLogo.png'
 * });
 * ```
 *
 * See the documentation for `Phaser.Types.Loader.FileTypes.ImageFileConfig` for more details.
 *
 * Once the file has finished loading you can use it as a texture for a Game Object by referencing its key:
 * 
 * ```javascript
 * this.load.image('logo', 'images/AtariLogo.png');
 * // and later in your game ...
 * this.add.image(x, y, 'logo');
 * ```
 *
 * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
 * key. For example, if the prefix was `MENU.` and the key was `Background` the final key will be `MENU.Background` and
 * this is what you would use to retrieve the image from the Texture Manager.
 *
 * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 *
 * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "alien"
 * and no URL is given then the Loader will set the URL to be "alien.png". It will always add `.png` as the extension, although
 * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
 *
 * Phaser also supports the automatic loading of associated normal maps. If you have a normal map to go with this image,
 * then you can specify it by providing an array as the `url` where the second element is the normal map:
 * 
 * ```javascript
 * this.load.image('logo', [ 'images/AtariLogo.png', 'images/AtariLogo-n.png' ]);
 * ```
 *
 * Or, if you are using a config object use the `normalMap` property:
 * 
 * ```javascript
 * this.load.image({
 *     key: 'logo',
 *     url: 'images/AtariLogo.png',
 *     normalMap: 'images/AtariLogo-n.png'
 * });
 * ```
 *
 * The normal map file is subject to the same conditions as the image file with regard to the path, baseURL, CORs and XHR Settings.
 * Normal maps are a WebGL only feature.
 *
 * Note: The ability to load this type of file will only be available if the Image File type has been built into Phaser.
 * It is available in the default build but can be excluded from custom builds.
 *
 * @method Phaser.Loader.LoaderPlugin#image
 * @fires Phaser.Loader.LoaderPlugin#addFileEvent
 * @since 3.0.0
 *
 * @param {(string|Phaser.Types.Loader.FileTypes.ImageFileConfig|Phaser.Types.Loader.FileTypes.ImageFileConfig[])} key - The key to use for this file, or a file configuration object, or array of them.
 * @param {string|string[]} [url] - The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
 * @param {Phaser.Types.Loader.XHRSettingsObject} [xhrSettings] - An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
 *
 * @return {Phaser.Loader.LoaderPlugin} The Loader instance.
 */
FileTypesManager.register('image', function (key, url, xhrSettings)
{
    if (Array.isArray(key))
    {
        for (var i = 0; i < key.length; i++)
        {
            //  If it's an array it has to be an array of Objects, so we get everything out of the 'key' object
            this.addFile(new ImageFile(this, key[i]));
        }
    }
    else
    {
        this.addFile(new ImageFile(this, key, url, xhrSettings));
    }

    return this;
});

module.exports = ImageFile;


/***/ }),

/***/ "../../../src/loader/filetypes/JSONFile.js":
/*!***********************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/filetypes/JSONFile.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = __webpack_require__(/*! ../../utils/Class */ "../../../src/utils/Class.js");
var CONST = __webpack_require__(/*! ../const */ "../../../src/loader/const.js");
var File = __webpack_require__(/*! ../File */ "../../../src/loader/File.js");
var FileTypesManager = __webpack_require__(/*! ../FileTypesManager */ "../../../src/loader/FileTypesManager.js");
var GetFastValue = __webpack_require__(/*! ../../utils/object/GetFastValue */ "../../../src/utils/object/GetFastValue.js");
var GetValue = __webpack_require__(/*! ../../utils/object/GetValue */ "../../../src/utils/object/GetValue.js");
var IsPlainObject = __webpack_require__(/*! ../../utils/object/IsPlainObject */ "../../../src/utils/object/IsPlainObject.js");

/**
 * @classdesc
 * A single JSON File suitable for loading by the Loader.
 *
 * These are created when you use the Phaser.Loader.LoaderPlugin#json method and are not typically created directly.
 * 
 * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#json.
 *
 * @class JSONFile
 * @extends Phaser.Loader.File
 * @memberof Phaser.Loader.FileTypes
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Loader.LoaderPlugin} loader - A reference to the Loader that is responsible for this file.
 * @param {(string|Phaser.Types.Loader.FileTypes.JSONFileConfig)} key - The key to use for this file, or a file configuration object.
 * @param {string} [url] - The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.json`, i.e. if `key` was "alien" then the URL will be "alien.json".
 * @param {Phaser.Types.Loader.XHRSettingsObject} [xhrSettings] - Extra XHR Settings specifically for this file.
 * @param {string} [dataKey] - When the JSON file loads only this property will be stored in the Cache.
 */
var JSONFile = new Class({

    Extends: File,

    initialize:

    //  url can either be a string, in which case it is treated like a proper url, or an object, in which case it is treated as a ready-made JS Object
    //  dataKey allows you to pluck a specific object out of the JSON and put just that into the cache, rather than the whole thing

    function JSONFile (loader, key, url, xhrSettings, dataKey)
    {
        var extension = 'json';

        if (IsPlainObject(key))
        {
            var config = key;

            key = GetFastValue(config, 'key');
            url = GetFastValue(config, 'url');
            xhrSettings = GetFastValue(config, 'xhrSettings');
            extension = GetFastValue(config, 'extension', extension);
            dataKey = GetFastValue(config, 'dataKey', dataKey);
        }

        var fileConfig = {
            type: 'json',
            cache: loader.cacheManager.json,
            extension: extension,
            responseType: 'text',
            key: key,
            url: url,
            xhrSettings: xhrSettings,
            config: dataKey
        };

        File.call(this, loader, fileConfig);

        if (IsPlainObject(url))
        {
            //  Object provided instead of a URL, so no need to actually load it (populate data with value)
            if (dataKey)
            {
                this.data = GetValue(url, dataKey);
            }
            else
            {
                this.data = url;
            }

            this.state = CONST.FILE_POPULATED;
        }
    },

    /**
     * Called automatically by Loader.nextFile.
     * This method controls what extra work this File does with its loaded data.
     *
     * @method Phaser.Loader.FileTypes.JSONFile#onProcess
     * @since 3.7.0
     */
    onProcess: function ()
    {
        if (this.state !== CONST.FILE_POPULATED)
        {
            this.state = CONST.FILE_PROCESSING;

            var json = JSON.parse(this.xhrLoader.responseText);

            var key = this.config;

            if (typeof key === 'string')
            {
                this.data = GetValue(json, key, json);
            }
            else
            {
                this.data = json;
            }
        }

        this.onProcessComplete();
    }

});

/**
 * Adds a JSON file, or array of JSON files, to the current load queue.
 *
 * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
 * 
 * ```javascript
 * function preload ()
 * {
 *     this.load.json('wavedata', 'files/AlienWaveData.json');
 * }
 * ```
 *
 * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
 * or if it's already running, when the next free load slot becomes available. This happens automatically if you
 * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
 * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
 * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
 * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
 * loaded.
 * 
 * The key must be a unique String. It is used to add the file to the global JSON Cache upon a successful load.
 * The key should be unique both in terms of files being loaded and files already present in the JSON Cache.
 * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
 * then remove it from the JSON Cache first, before loading a new one.
 *
 * Instead of passing arguments you can pass a configuration object, such as:
 * 
 * ```javascript
 * this.load.json({
 *     key: 'wavedata',
 *     url: 'files/AlienWaveData.json'
 * });
 * ```
 *
 * See the documentation for `Phaser.Types.Loader.FileTypes.JSONFileConfig` for more details.
 *
 * Once the file has finished loading you can access it from its Cache using its key:
 * 
 * ```javascript
 * this.load.json('wavedata', 'files/AlienWaveData.json');
 * // and later in your game ...
 * var data = this.cache.json.get('wavedata');
 * ```
 *
 * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
 * key. For example, if the prefix was `LEVEL1.` and the key was `Waves` the final key will be `LEVEL1.Waves` and
 * this is what you would use to retrieve the text from the JSON Cache.
 *
 * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 *
 * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "data"
 * and no URL is given then the Loader will set the URL to be "data.json". It will always add `.json` as the extension, although
 * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
 *
 * You can also optionally provide a `dataKey` to use. This allows you to extract only a part of the JSON and store it in the Cache,
 * rather than the whole file. For example, if your JSON data had a structure like this:
 * 
 * ```json
 * {
 *     "level1": {
 *         "baddies": {
 *             "aliens": {},
 *             "boss": {}
 *         }
 *     },
 *     "level2": {},
 *     "level3": {}
 * }
 * ```
 *
 * And you only wanted to store the `boss` data in the Cache, then you could pass `level1.baddies.boss`as the `dataKey`.
 *
 * Note: The ability to load this type of file will only be available if the JSON File type has been built into Phaser.
 * It is available in the default build but can be excluded from custom builds.
 *
 * @method Phaser.Loader.LoaderPlugin#json
 * @fires Phaser.Loader.LoaderPlugin#addFileEvent
 * @since 3.0.0
 *
 * @param {(string|Phaser.Types.Loader.FileTypes.JSONFileConfig|Phaser.Types.Loader.FileTypes.JSONFileConfig[])} key - The key to use for this file, or a file configuration object, or array of them.
 * @param {string} [url] - The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.json`, i.e. if `key` was "alien" then the URL will be "alien.json".
 * @param {string} [dataKey] - When the JSON file loads only this property will be stored in the Cache.
 * @param {Phaser.Types.Loader.XHRSettingsObject} [xhrSettings] - An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
 *
 * @return {Phaser.Loader.LoaderPlugin} The Loader instance.
 */
FileTypesManager.register('json', function (key, url, dataKey, xhrSettings)
{
    if (Array.isArray(key))
    {
        for (var i = 0; i < key.length; i++)
        {
            //  If it's an array it has to be an array of Objects, so we get everything out of the 'key' object
            this.addFile(new JSONFile(this, key[i]));
        }
    }
    else
    {
        this.addFile(new JSONFile(this, key, url, xhrSettings, dataKey));
    }

    return this;
});

module.exports = JSONFile;


/***/ }),

/***/ "../../../src/loader/filetypes/TextFile.js":
/*!***********************************************************!*\
  !*** D:/wamp/www/phaser/src/loader/filetypes/TextFile.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = __webpack_require__(/*! ../../utils/Class */ "../../../src/utils/Class.js");
var CONST = __webpack_require__(/*! ../const */ "../../../src/loader/const.js");
var File = __webpack_require__(/*! ../File */ "../../../src/loader/File.js");
var FileTypesManager = __webpack_require__(/*! ../FileTypesManager */ "../../../src/loader/FileTypesManager.js");
var GetFastValue = __webpack_require__(/*! ../../utils/object/GetFastValue */ "../../../src/utils/object/GetFastValue.js");
var IsPlainObject = __webpack_require__(/*! ../../utils/object/IsPlainObject */ "../../../src/utils/object/IsPlainObject.js");

/**
 * @classdesc
 * A single Text File suitable for loading by the Loader.
 *
 * These are created when you use the Phaser.Loader.LoaderPlugin#text method and are not typically created directly.
 *
 * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#text.
 *
 * @class TextFile
 * @extends Phaser.Loader.File
 * @memberof Phaser.Loader.FileTypes
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Loader.LoaderPlugin} loader - A reference to the Loader that is responsible for this file.
 * @param {(string|Phaser.Types.Loader.FileTypes.TextFileConfig)} key - The key to use for this file, or a file configuration object.
 * @param {string} [url] - The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.txt`, i.e. if `key` was "alien" then the URL will be "alien.txt".
 * @param {Phaser.Types.Loader.XHRSettingsObject} [xhrSettings] - Extra XHR Settings specifically for this file.
 */
var TextFile = new Class({

    Extends: File,

    initialize:

    function TextFile (loader, key, url, xhrSettings)
    {
        var extension = 'txt';

        if (IsPlainObject(key))
        {
            var config = key;

            key = GetFastValue(config, 'key');
            url = GetFastValue(config, 'url');
            xhrSettings = GetFastValue(config, 'xhrSettings');
            extension = GetFastValue(config, 'extension', extension);
        }

        var fileConfig = {
            type: 'text',
            cache: loader.cacheManager.text,
            extension: extension,
            responseType: 'text',
            key: key,
            url: url,
            xhrSettings: xhrSettings
        };

        File.call(this, loader, fileConfig);
    },

    /**
     * Called automatically by Loader.nextFile.
     * This method controls what extra work this File does with its loaded data.
     *
     * @method Phaser.Loader.FileTypes.TextFile#onProcess
     * @since 3.7.0
     */
    onProcess: function ()
    {
        this.state = CONST.FILE_PROCESSING;

        this.data = this.xhrLoader.responseText;

        this.onProcessComplete();
    }

});

/**
 * Adds a Text file, or array of Text files, to the current load queue.
 *
 * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
 *
 * ```javascript
 * function preload ()
 * {
 *     this.load.text('story', 'files/IntroStory.txt');
 * }
 * ```
 *
 * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
 * or if it's already running, when the next free load slot becomes available. This happens automatically if you
 * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
 * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
 * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
 * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
 * loaded.
 *
 * The key must be a unique String. It is used to add the file to the global Text Cache upon a successful load.
 * The key should be unique both in terms of files being loaded and files already present in the Text Cache.
 * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
 * then remove it from the Text Cache first, before loading a new one.
 *
 * Instead of passing arguments you can pass a configuration object, such as:
 *
 * ```javascript
 * this.load.text({
 *     key: 'story',
 *     url: 'files/IntroStory.txt'
 * });
 * ```
 *
 * See the documentation for `Phaser.Types.Loader.FileTypes.TextFileConfig` for more details.
 *
 * Once the file has finished loading you can access it from its Cache using its key:
 *
 * ```javascript
 * this.load.text('story', 'files/IntroStory.txt');
 * // and later in your game ...
 * var data = this.cache.text.get('story');
 * ```
 *
 * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
 * key. For example, if the prefix was `LEVEL1.` and the key was `Story` the final key will be `LEVEL1.Story` and
 * this is what you would use to retrieve the text from the Text Cache.
 *
 * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 *
 * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "story"
 * and no URL is given then the Loader will set the URL to be "story.txt". It will always add `.txt` as the extension, although
 * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
 *
 * Note: The ability to load this type of file will only be available if the Text File type has been built into Phaser.
 * It is available in the default build but can be excluded from custom builds.
 *
 * @method Phaser.Loader.LoaderPlugin#text
 * @fires Phaser.Loader.LoaderPlugin#addFileEvent
 * @since 3.0.0
 *
 * @param {(string|Phaser.Types.Loader.FileTypes.TextFileConfig|Phaser.Types.Loader.FileTypes.TextFileConfig[])} key - The key to use for this file, or a file configuration object, or array of them.
 * @param {string} [url] - The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.txt`, i.e. if `key` was "alien" then the URL will be "alien.txt".
 * @param {Phaser.Types.Loader.XHRSettingsObject} [xhrSettings] - An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
 *
 * @return {Phaser.Loader.LoaderPlugin} The Loader instance.
 */
FileTypesManager.register('text', function (key, url, xhrSettings)
{
    if (Array.isArray(key))
    {
        for (var i = 0; i < key.length; i++)
        {
            //  If it's an array it has to be an array of Objects, so we get everything out of the 'key' object
            this.addFile(new TextFile(this, key[i]));
        }
    }
    else
    {
        this.addFile(new TextFile(this, key, url, xhrSettings));
    }

    return this;
});

module.exports = TextFile;


/***/ }),

/***/ "../../../src/math/Clamp.js":
/*!********************************************!*\
  !*** D:/wamp/www/phaser/src/math/Clamp.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Force a value within the boundaries by clamping it to the range `min`, `max`.
 *
 * @function Phaser.Math.Clamp
 * @since 3.0.0
 *
 * @param {number} value - The value to be clamped.
 * @param {number} min - The minimum bounds.
 * @param {number} max - The maximum bounds.
 *
 * @return {number} The clamped value.
 */
var Clamp = function (value, min, max)
{
    return Math.max(min, Math.min(max, value));
};

module.exports = Clamp;


/***/ }),

/***/ "../../../src/math/Matrix4.js":
/*!**********************************************!*\
  !*** D:/wamp/www/phaser/src/math/Matrix4.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

//  Adapted from [gl-matrix](https://github.com/toji/gl-matrix) by toji
//  and [vecmath](https://github.com/mattdesl/vecmath) by mattdesl

var Class = __webpack_require__(/*! ../utils/Class */ "../../../src/utils/Class.js");

var EPSILON = 0.000001;

/**
 * @classdesc
 * A four-dimensional matrix.
 *
 * @class Matrix4
 * @memberof Phaser.Math
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Math.Matrix4} [m] - Optional Matrix4 to copy values from.
 */
var Matrix4 = new Class({

    initialize:

    function Matrix4 (m)
    {
        /**
         * The matrix values.
         *
         * @name Phaser.Math.Matrix4#val
         * @type {Float32Array}
         * @since 3.0.0
         */
        this.val = new Float32Array(16);

        if (m)
        {
            //  Assume Matrix4 with val:
            this.copy(m);
        }
        else
        {
            //  Default to identity
            this.identity();
        }
    },

    /**
     * Make a clone of this Matrix4.
     *
     * @method Phaser.Math.Matrix4#clone
     * @since 3.0.0
     *
     * @return {Phaser.Math.Matrix4} A clone of this Matrix4.
     */
    clone: function ()
    {
        return new Matrix4(this);
    },

    //  TODO - Should work with basic values

    /**
     * This method is an alias for `Matrix4.copy`.
     *
     * @method Phaser.Math.Matrix4#set
     * @since 3.0.0
     *
     * @param {Phaser.Math.Matrix4} src - The Matrix to set the values of this Matrix's from.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    set: function (src)
    {
        return this.copy(src);
    },

    /**
     * Copy the values of a given Matrix into this Matrix.
     *
     * @method Phaser.Math.Matrix4#copy
     * @since 3.0.0
     *
     * @param {Phaser.Math.Matrix4} src - The Matrix to copy the values from.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    copy: function (src)
    {
        var out = this.val;
        var a = src.val;

        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];

        return this;
    },

    /**
     * Set the values of this Matrix from the given array.
     *
     * @method Phaser.Math.Matrix4#fromArray
     * @since 3.0.0
     *
     * @param {array} a - The array to copy the values from.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    fromArray: function (a)
    {
        var out = this.val;

        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];

        return this;
    },

    /**
     * Reset this Matrix.
     *
     * Sets all values to `0`.
     *
     * @method Phaser.Math.Matrix4#zero
     * @since 3.0.0
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    zero: function ()
    {
        var out = this.val;

        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 0;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 0;

        return this;
    },

    /**
     * Set the `x`, `y` and `z` values of this Matrix.
     *
     * @method Phaser.Math.Matrix4#xyz
     * @since 3.0.0
     *
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     * @param {number} z - The z value.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    xyz: function (x, y, z)
    {
        this.identity();

        var out = this.val;

        out[12] = x;
        out[13] = y;
        out[14] = z;

        return this;
    },

    /**
     * Set the scaling values of this Matrix.
     *
     * @method Phaser.Math.Matrix4#scaling
     * @since 3.0.0
     *
     * @param {number} x - The x scaling value.
     * @param {number} y - The y scaling value.
     * @param {number} z - The z scaling value.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    scaling: function (x, y, z)
    {
        this.zero();

        var out = this.val;

        out[0] = x;
        out[5] = y;
        out[10] = z;
        out[15] = 1;

        return this;
    },

    /**
     * Reset this Matrix to an identity (default) matrix.
     *
     * @method Phaser.Math.Matrix4#identity
     * @since 3.0.0
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    identity: function ()
    {
        var out = this.val;

        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;

        return this;
    },

    /**
     * Transpose this Matrix.
     *
     * @method Phaser.Math.Matrix4#transpose
     * @since 3.0.0
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    transpose: function ()
    {
        var a = this.val;

        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];
        var a12 = a[6];
        var a13 = a[7];
        var a23 = a[11];

        a[1] = a[4];
        a[2] = a[8];
        a[3] = a[12];
        a[4] = a01;
        a[6] = a[9];
        a[7] = a[13];
        a[8] = a02;
        a[9] = a12;
        a[11] = a[14];
        a[12] = a03;
        a[13] = a13;
        a[14] = a23;

        return this;
    },

    /**
     * Invert this Matrix.
     *
     * @method Phaser.Math.Matrix4#invert
     * @since 3.0.0
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    invert: function ()
    {
        var a = this.val;

        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];

        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];

        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];

        var a30 = a[12];
        var a31 = a[13];
        var a32 = a[14];
        var a33 = a[15];

        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;

        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;

        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32;

        // Calculate the determinant
        var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        if (!det)
        {
            return null;
        }

        det = 1 / det;

        a[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        a[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        a[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        a[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        a[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        a[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        a[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        a[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        a[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        a[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        a[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        a[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        a[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        a[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        a[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        a[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

        return this;
    },

    /**
     * Calculate the adjoint, or adjugate, of this Matrix.
     *
     * @method Phaser.Math.Matrix4#adjoint
     * @since 3.0.0
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    adjoint: function ()
    {
        var a = this.val;

        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];

        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];

        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];

        var a30 = a[12];
        var a31 = a[13];
        var a32 = a[14];
        var a33 = a[15];

        a[0] = (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
        a[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
        a[2] = (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
        a[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
        a[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
        a[5] = (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
        a[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
        a[7] = (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
        a[8] = (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
        a[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
        a[10] = (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
        a[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
        a[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
        a[13] = (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
        a[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
        a[15] = (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));

        return this;
    },

    /**
     * Calculate the determinant of this Matrix.
     *
     * @method Phaser.Math.Matrix4#determinant
     * @since 3.0.0
     *
     * @return {number} The determinant of this Matrix.
     */
    determinant: function ()
    {
        var a = this.val;

        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];

        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];

        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];

        var a30 = a[12];
        var a31 = a[13];
        var a32 = a[14];
        var a33 = a[15];

        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32;

        // Calculate the determinant
        return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    },

    /**
     * Multiply this Matrix by the given Matrix.
     *
     * @method Phaser.Math.Matrix4#multiply
     * @since 3.0.0
     *
     * @param {Phaser.Math.Matrix4} src - The Matrix to multiply this Matrix by.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    multiply: function (src)
    {
        var a = this.val;

        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];

        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];

        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];

        var a30 = a[12];
        var a31 = a[13];
        var a32 = a[14];
        var a33 = a[15];

        var b = src.val;

        // Cache only the current line of the second matrix
        var b0 = b[0];
        var b1 = b[1];
        var b2 = b[2];
        var b3 = b[3];

        a[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        a[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        a[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        a[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = b[4];
        b1 = b[5];
        b2 = b[6];
        b3 = b[7];

        a[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        a[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        a[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        a[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = b[8];
        b1 = b[9];
        b2 = b[10];
        b3 = b[11];

        a[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        a[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        a[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        a[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = b[12];
        b1 = b[13];
        b2 = b[14];
        b3 = b[15];

        a[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        a[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        a[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        a[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Matrix4#multiplyLocal
     * @since 3.0.0
     *
     * @param {Phaser.Math.Matrix4} src - [description]
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    multiplyLocal: function (src)
    {
        var a = [];
        var m1 = this.val;
        var m2 = src.val;

        a[0] = m1[0] * m2[0] + m1[1] * m2[4] + m1[2] * m2[8] + m1[3] * m2[12];
        a[1] = m1[0] * m2[1] + m1[1] * m2[5] + m1[2] * m2[9] + m1[3] * m2[13];
        a[2] = m1[0] * m2[2] + m1[1] * m2[6] + m1[2] * m2[10] + m1[3] * m2[14];
        a[3] = m1[0] * m2[3] + m1[1] * m2[7] + m1[2] * m2[11] + m1[3] * m2[15];

        a[4] = m1[4] * m2[0] + m1[5] * m2[4] + m1[6] * m2[8] + m1[7] * m2[12];
        a[5] = m1[4] * m2[1] + m1[5] * m2[5] + m1[6] * m2[9] + m1[7] * m2[13];
        a[6] = m1[4] * m2[2] + m1[5] * m2[6] + m1[6] * m2[10] + m1[7] * m2[14];
        a[7] = m1[4] * m2[3] + m1[5] * m2[7] + m1[6] * m2[11] + m1[7] * m2[15];

        a[8] = m1[8] * m2[0] + m1[9] * m2[4] + m1[10] * m2[8] + m1[11] * m2[12];
        a[9] = m1[8] * m2[1] + m1[9] * m2[5] + m1[10] * m2[9] + m1[11] * m2[13];
        a[10] = m1[8] * m2[2] + m1[9] * m2[6] + m1[10] * m2[10] + m1[11] * m2[14];
        a[11] = m1[8] * m2[3] + m1[9] * m2[7] + m1[10] * m2[11] + m1[11] * m2[15];

        a[12] = m1[12] * m2[0] + m1[13] * m2[4] + m1[14] * m2[8] + m1[15] * m2[12];
        a[13] = m1[12] * m2[1] + m1[13] * m2[5] + m1[14] * m2[9] + m1[15] * m2[13];
        a[14] = m1[12] * m2[2] + m1[13] * m2[6] + m1[14] * m2[10] + m1[15] * m2[14];
        a[15] = m1[12] * m2[3] + m1[13] * m2[7] + m1[14] * m2[11] + m1[15] * m2[15];

        return this.fromArray(a);
    },

    /**
     * Translate this Matrix using the given Vector.
     *
     * @method Phaser.Math.Matrix4#translate
     * @since 3.0.0
     *
     * @param {(Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to translate this Matrix with.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    translate: function (v)
    {
        var x = v.x;
        var y = v.y;
        var z = v.z;
        var a = this.val;

        a[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        a[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        a[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        a[15] = a[3] * x + a[7] * y + a[11] * z + a[15];

        return this;
    },

    /**
     * Translate this Matrix using the given values.
     *
     * @method Phaser.Math.Matrix4#translateXYZ
     * @since 3.16.0
     *
     * @param {number} x - The x component.
     * @param {number} y - The y component.
     * @param {number} z - The z component.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    translateXYZ: function (x, y, z)
    {
        var a = this.val;

        a[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        a[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        a[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        a[15] = a[3] * x + a[7] * y + a[11] * z + a[15];

        return this;
    },

    /**
     * Apply a scale transformation to this Matrix.
     *
     * Uses the `x`, `y` and `z` components of the given Vector to scale the Matrix.
     *
     * @method Phaser.Math.Matrix4#scale
     * @since 3.0.0
     *
     * @param {(Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to scale this Matrix with.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    scale: function (v)
    {
        var x = v.x;
        var y = v.y;
        var z = v.z;
        var a = this.val;

        a[0] = a[0] * x;
        a[1] = a[1] * x;
        a[2] = a[2] * x;
        a[3] = a[3] * x;

        a[4] = a[4] * y;
        a[5] = a[5] * y;
        a[6] = a[6] * y;
        a[7] = a[7] * y;

        a[8] = a[8] * z;
        a[9] = a[9] * z;
        a[10] = a[10] * z;
        a[11] = a[11] * z;

        return this;
    },

    /**
     * Apply a scale transformation to this Matrix.
     *
     * @method Phaser.Math.Matrix4#scaleXYZ
     * @since 3.16.0
     *
     * @param {number} x - The x component.
     * @param {number} y - The y component.
     * @param {number} z - The z component.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    scaleXYZ: function (x, y, z)
    {
        var a = this.val;

        a[0] = a[0] * x;
        a[1] = a[1] * x;
        a[2] = a[2] * x;
        a[3] = a[3] * x;

        a[4] = a[4] * y;
        a[5] = a[5] * y;
        a[6] = a[6] * y;
        a[7] = a[7] * y;

        a[8] = a[8] * z;
        a[9] = a[9] * z;
        a[10] = a[10] * z;
        a[11] = a[11] * z;

        return this;
    },

    /**
     * Derive a rotation matrix around the given axis.
     *
     * @method Phaser.Math.Matrix4#makeRotationAxis
     * @since 3.0.0
     *
     * @param {(Phaser.Math.Vector3|Phaser.Math.Vector4)} axis - The rotation axis.
     * @param {number} angle - The rotation angle in radians.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    makeRotationAxis: function (axis, angle)
    {
        // Based on http://www.gamedev.net/reference/articles/article1199.asp

        var c = Math.cos(angle);
        var s = Math.sin(angle);
        var t = 1 - c;
        var x = axis.x;
        var y = axis.y;
        var z = axis.z;
        var tx = t * x;
        var ty = t * y;

        this.fromArray([
            tx * x + c, tx * y - s * z, tx * z + s * y, 0,
            tx * y + s * z, ty * y + c, ty * z - s * x, 0,
            tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
            0, 0, 0, 1
        ]);

        return this;
    },

    /**
     * Apply a rotation transformation to this Matrix.
     *
     * @method Phaser.Math.Matrix4#rotate
     * @since 3.0.0
     *
     * @param {number} rad - The angle in radians to rotate by.
     * @param {Phaser.Math.Vector3} axis - The axis to rotate upon.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    rotate: function (rad, axis)
    {
        var a = this.val;
        var x = axis.x;
        var y = axis.y;
        var z = axis.z;
        var len = Math.sqrt(x * x + y * y + z * z);

        if (Math.abs(len) < EPSILON)
        {
            return null;
        }

        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;

        var s = Math.sin(rad);
        var c = Math.cos(rad);
        var t = 1 - c;

        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];

        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];

        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];

        // Construct the elements of the rotation matrix
        var b00 = x * x * t + c;
        var b01 = y * x * t + z * s;
        var b02 = z * x * t - y * s;

        var b10 = x * y * t - z * s;
        var b11 = y * y * t + c;
        var b12 = z * y * t + x * s;

        var b20 = x * z * t + y * s;
        var b21 = y * z * t - x * s;
        var b22 = z * z * t + c;

        // Perform rotation-specific matrix multiplication
        a[0] = a00 * b00 + a10 * b01 + a20 * b02;
        a[1] = a01 * b00 + a11 * b01 + a21 * b02;
        a[2] = a02 * b00 + a12 * b01 + a22 * b02;
        a[3] = a03 * b00 + a13 * b01 + a23 * b02;
        a[4] = a00 * b10 + a10 * b11 + a20 * b12;
        a[5] = a01 * b10 + a11 * b11 + a21 * b12;
        a[6] = a02 * b10 + a12 * b11 + a22 * b12;
        a[7] = a03 * b10 + a13 * b11 + a23 * b12;
        a[8] = a00 * b20 + a10 * b21 + a20 * b22;
        a[9] = a01 * b20 + a11 * b21 + a21 * b22;
        a[10] = a02 * b20 + a12 * b21 + a22 * b22;
        a[11] = a03 * b20 + a13 * b21 + a23 * b22;

        return this;
    },

    /**
     * Rotate this matrix on its X axis.
     *
     * @method Phaser.Math.Matrix4#rotateX
     * @since 3.0.0
     *
     * @param {number} rad - The angle in radians to rotate by.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    rotateX: function (rad)
    {
        var a = this.val;
        var s = Math.sin(rad);
        var c = Math.cos(rad);

        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];

        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];

        // Perform axis-specific matrix multiplication
        a[4] = a10 * c + a20 * s;
        a[5] = a11 * c + a21 * s;
        a[6] = a12 * c + a22 * s;
        a[7] = a13 * c + a23 * s;
        a[8] = a20 * c - a10 * s;
        a[9] = a21 * c - a11 * s;
        a[10] = a22 * c - a12 * s;
        a[11] = a23 * c - a13 * s;

        return this;
    },

    /**
     * Rotate this matrix on its Y axis.
     *
     * @method Phaser.Math.Matrix4#rotateY
     * @since 3.0.0
     *
     * @param {number} rad - The angle to rotate by, in radians.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    rotateY: function (rad)
    {
        var a = this.val;
        var s = Math.sin(rad);
        var c = Math.cos(rad);

        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];

        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];

        // Perform axis-specific matrix multiplication
        a[0] = a00 * c - a20 * s;
        a[1] = a01 * c - a21 * s;
        a[2] = a02 * c - a22 * s;
        a[3] = a03 * c - a23 * s;
        a[8] = a00 * s + a20 * c;
        a[9] = a01 * s + a21 * c;
        a[10] = a02 * s + a22 * c;
        a[11] = a03 * s + a23 * c;

        return this;
    },

    /**
     * Rotate this matrix on its Z axis.
     *
     * @method Phaser.Math.Matrix4#rotateZ
     * @since 3.0.0
     *
     * @param {number} rad - The angle to rotate by, in radians.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    rotateZ: function (rad)
    {
        var a = this.val;
        var s = Math.sin(rad);
        var c = Math.cos(rad);

        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];

        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];

        // Perform axis-specific matrix multiplication
        a[0] = a00 * c + a10 * s;
        a[1] = a01 * c + a11 * s;
        a[2] = a02 * c + a12 * s;
        a[3] = a03 * c + a13 * s;
        a[4] = a10 * c - a00 * s;
        a[5] = a11 * c - a01 * s;
        a[6] = a12 * c - a02 * s;
        a[7] = a13 * c - a03 * s;

        return this;
    },

    /**
     * Set the values of this Matrix from the given rotation Quaternion and translation Vector.
     *
     * @method Phaser.Math.Matrix4#fromRotationTranslation
     * @since 3.0.0
     *
     * @param {Phaser.Math.Quaternion} q - The Quaternion to set rotation from.
     * @param {Phaser.Math.Vector3} v - The Vector to set translation from.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    fromRotationTranslation: function (q, v)
    {
        // Quaternion math
        var out = this.val;

        var x = q.x;
        var y = q.y;
        var z = q.z;
        var w = q.w;

        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;

        var xx = x * x2;
        var xy = x * y2;
        var xz = x * z2;

        var yy = y * y2;
        var yz = y * z2;
        var zz = z * z2;

        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;

        out[0] = 1 - (yy + zz);
        out[1] = xy + wz;
        out[2] = xz - wy;
        out[3] = 0;

        out[4] = xy - wz;
        out[5] = 1 - (xx + zz);
        out[6] = yz + wx;
        out[7] = 0;

        out[8] = xz + wy;
        out[9] = yz - wx;
        out[10] = 1 - (xx + yy);
        out[11] = 0;

        out[12] = v.x;
        out[13] = v.y;
        out[14] = v.z;
        out[15] = 1;

        return this;
    },

    /**
     * Set the values of this Matrix from the given Quaternion.
     *
     * @method Phaser.Math.Matrix4#fromQuat
     * @since 3.0.0
     *
     * @param {Phaser.Math.Quaternion} q - The Quaternion to set the values of this Matrix from.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    fromQuat: function (q)
    {
        var out = this.val;

        var x = q.x;
        var y = q.y;
        var z = q.z;
        var w = q.w;

        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;

        var xx = x * x2;
        var xy = x * y2;
        var xz = x * z2;

        var yy = y * y2;
        var yz = y * z2;
        var zz = z * z2;

        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;

        out[0] = 1 - (yy + zz);
        out[1] = xy + wz;
        out[2] = xz - wy;
        out[3] = 0;

        out[4] = xy - wz;
        out[5] = 1 - (xx + zz);
        out[6] = yz + wx;
        out[7] = 0;

        out[8] = xz + wy;
        out[9] = yz - wx;
        out[10] = 1 - (xx + yy);
        out[11] = 0;

        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;

        return this;
    },

    /**
     * Generate a frustum matrix with the given bounds.
     *
     * @method Phaser.Math.Matrix4#frustum
     * @since 3.0.0
     *
     * @param {number} left - The left bound of the frustum.
     * @param {number} right - The right bound of the frustum.
     * @param {number} bottom - The bottom bound of the frustum.
     * @param {number} top - The top bound of the frustum.
     * @param {number} near - The near bound of the frustum.
     * @param {number} far - The far bound of the frustum.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    frustum: function (left, right, bottom, top, near, far)
    {
        var out = this.val;

        var rl = 1 / (right - left);
        var tb = 1 / (top - bottom);
        var nf = 1 / (near - far);

        out[0] = (near * 2) * rl;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;

        out[4] = 0;
        out[5] = (near * 2) * tb;
        out[6] = 0;
        out[7] = 0;

        out[8] = (right + left) * rl;
        out[9] = (top + bottom) * tb;
        out[10] = (far + near) * nf;
        out[11] = -1;

        out[12] = 0;
        out[13] = 0;
        out[14] = (far * near * 2) * nf;
        out[15] = 0;

        return this;
    },

    /**
     * Generate a perspective projection matrix with the given bounds.
     *
     * @method Phaser.Math.Matrix4#perspective
     * @since 3.0.0
     *
     * @param {number} fovy - Vertical field of view in radians
     * @param {number} aspect - Aspect ratio. Typically viewport width  /height.
     * @param {number} near - Near bound of the frustum.
     * @param {number} far - Far bound of the frustum.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    perspective: function (fovy, aspect, near, far)
    {
        var out = this.val;
        var f = 1.0 / Math.tan(fovy / 2);
        var nf = 1 / (near - far);

        out[0] = f / aspect;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;

        out[4] = 0;
        out[5] = f;
        out[6] = 0;
        out[7] = 0;

        out[8] = 0;
        out[9] = 0;
        out[10] = (far + near) * nf;
        out[11] = -1;

        out[12] = 0;
        out[13] = 0;
        out[14] = (2 * far * near) * nf;
        out[15] = 0;

        return this;
    },

    /**
     * Generate a perspective projection matrix with the given bounds.
     *
     * @method Phaser.Math.Matrix4#perspectiveLH
     * @since 3.0.0
     *
     * @param {number} width - The width of the frustum.
     * @param {number} height - The height of the frustum.
     * @param {number} near - Near bound of the frustum.
     * @param {number} far - Far bound of the frustum.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    perspectiveLH: function (width, height, near, far)
    {
        var out = this.val;

        out[0] = (2 * near) / width;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;

        out[4] = 0;
        out[5] = (2 * near) / height;
        out[6] = 0;
        out[7] = 0;

        out[8] = 0;
        out[9] = 0;
        out[10] = -far / (near - far);
        out[11] = 1;

        out[12] = 0;
        out[13] = 0;
        out[14] = (near * far) / (near - far);
        out[15] = 0;

        return this;
    },

    /**
     * Generate an orthogonal projection matrix with the given bounds.
     *
     * @method Phaser.Math.Matrix4#ortho
     * @since 3.0.0
     *
     * @param {number} left - The left bound of the frustum.
     * @param {number} right - The right bound of the frustum.
     * @param {number} bottom - The bottom bound of the frustum.
     * @param {number} top - The top bound of the frustum.
     * @param {number} near - The near bound of the frustum.
     * @param {number} far - The far bound of the frustum.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    ortho: function (left, right, bottom, top, near, far)
    {
        var out = this.val;
        var lr = left - right;
        var bt = bottom - top;
        var nf = near - far;

        //  Avoid division by zero
        lr = (lr === 0) ? lr : 1 / lr;
        bt = (bt === 0) ? bt : 1 / bt;
        nf = (nf === 0) ? nf : 1 / nf;

        out[0] = -2 * lr;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;

        out[4] = 0;
        out[5] = -2 * bt;
        out[6] = 0;
        out[7] = 0;

        out[8] = 0;
        out[9] = 0;
        out[10] = 2 * nf;
        out[11] = 0;

        out[12] = (left + right) * lr;
        out[13] = (top + bottom) * bt;
        out[14] = (far + near) * nf;
        out[15] = 1;

        return this;
    },

    /**
     * Generate a look-at matrix with the given eye position, focal point, and up axis.
     *
     * @method Phaser.Math.Matrix4#lookAt
     * @since 3.0.0
     *
     * @param {Phaser.Math.Vector3} eye - Position of the viewer
     * @param {Phaser.Math.Vector3} center - Point the viewer is looking at
     * @param {Phaser.Math.Vector3} up - vec3 pointing up.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    lookAt: function (eye, center, up)
    {
        var out = this.val;

        var eyex = eye.x;
        var eyey = eye.y;
        var eyez = eye.z;

        var upx = up.x;
        var upy = up.y;
        var upz = up.z;

        var centerx = center.x;
        var centery = center.y;
        var centerz = center.z;

        if (Math.abs(eyex - centerx) < EPSILON &&
            Math.abs(eyey - centery) < EPSILON &&
            Math.abs(eyez - centerz) < EPSILON)
        {
            return this.identity();
        }

        var z0 = eyex - centerx;
        var z1 = eyey - centery;
        var z2 = eyez - centerz;

        var len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);

        z0 *= len;
        z1 *= len;
        z2 *= len;

        var x0 = upy * z2 - upz * z1;
        var x1 = upz * z0 - upx * z2;
        var x2 = upx * z1 - upy * z0;

        len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);

        if (!len)
        {
            x0 = 0;
            x1 = 0;
            x2 = 0;
        }
        else
        {
            len = 1 / len;
            x0 *= len;
            x1 *= len;
            x2 *= len;
        }

        var y0 = z1 * x2 - z2 * x1;
        var y1 = z2 * x0 - z0 * x2;
        var y2 = z0 * x1 - z1 * x0;

        len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);

        if (!len)
        {
            y0 = 0;
            y1 = 0;
            y2 = 0;
        }
        else
        {
            len = 1 / len;
            y0 *= len;
            y1 *= len;
            y2 *= len;
        }

        out[0] = x0;
        out[1] = y0;
        out[2] = z0;
        out[3] = 0;

        out[4] = x1;
        out[5] = y1;
        out[6] = z1;
        out[7] = 0;

        out[8] = x2;
        out[9] = y2;
        out[10] = z2;
        out[11] = 0;

        out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
        out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
        out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
        out[15] = 1;

        return this;
    },

    /**
     * Set the values of this matrix from the given `yaw`, `pitch` and `roll` values.
     *
     * @method Phaser.Math.Matrix4#yawPitchRoll
     * @since 3.0.0
     *
     * @param {number} yaw - [description]
     * @param {number} pitch - [description]
     * @param {number} roll - [description]
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    yawPitchRoll: function (yaw, pitch, roll)
    {
        this.zero();
        _tempMat1.zero();
        _tempMat2.zero();

        var m0 = this.val;
        var m1 = _tempMat1.val;
        var m2 = _tempMat2.val;

        //  Rotate Z
        var s = Math.sin(roll);
        var c = Math.cos(roll);

        m0[10] = 1;
        m0[15] = 1;
        m0[0] = c;
        m0[1] = s;
        m0[4] = -s;
        m0[5] = c;

        //  Rotate X
        s = Math.sin(pitch);
        c = Math.cos(pitch);

        m1[0] = 1;
        m1[15] = 1;
        m1[5] = c;
        m1[10] = c;
        m1[9] = -s;
        m1[6] = s;

        //  Rotate Y
        s = Math.sin(yaw);
        c = Math.cos(yaw);

        m2[5] = 1;
        m2[15] = 1;
        m2[0] = c;
        m2[2] = -s;
        m2[8] = s;
        m2[10] = c;

        this.multiplyLocal(_tempMat1);
        this.multiplyLocal(_tempMat2);

        return this;
    },

    /**
     * Generate a world matrix from the given rotation, position, scale, view matrix and projection matrix.
     *
     * @method Phaser.Math.Matrix4#setWorldMatrix
     * @since 3.0.0
     *
     * @param {Phaser.Math.Vector3} rotation - The rotation of the world matrix.
     * @param {Phaser.Math.Vector3} position - The position of the world matrix.
     * @param {Phaser.Math.Vector3} scale - The scale of the world matrix.
     * @param {Phaser.Math.Matrix4} [viewMatrix] - The view matrix.
     * @param {Phaser.Math.Matrix4} [projectionMatrix] - The projection matrix.
     *
     * @return {Phaser.Math.Matrix4} This Matrix4.
     */
    setWorldMatrix: function (rotation, position, scale, viewMatrix, projectionMatrix)
    {
        this.yawPitchRoll(rotation.y, rotation.x, rotation.z);

        _tempMat1.scaling(scale.x, scale.y, scale.z);
        _tempMat2.xyz(position.x, position.y, position.z);

        this.multiplyLocal(_tempMat1);
        this.multiplyLocal(_tempMat2);

        if (viewMatrix !== undefined)
        {
            this.multiplyLocal(viewMatrix);
        }

        if (projectionMatrix !== undefined)
        {
            this.multiplyLocal(projectionMatrix);
        }

        return this;
    }

});

var _tempMat1 = new Matrix4();
var _tempMat2 = new Matrix4();

module.exports = Matrix4;


/***/ }),

/***/ "../../../src/math/RadToDeg.js":
/*!***********************************************!*\
  !*** D:/wamp/www/phaser/src/math/RadToDeg.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = __webpack_require__(/*! ./const */ "../../../src/math/const.js");

/**
 * Convert the given angle in radians, to the equivalent angle in degrees.
 *
 * @function Phaser.Math.RadToDeg
 * @since 3.0.0
 *
 * @param {number} radians - The angle in radians to convert ot degrees.
 *
 * @return {integer} The given angle converted to degrees.
 */
var RadToDeg = function (radians)
{
    return radians * CONST.RAD_TO_DEG;
};

module.exports = RadToDeg;


/***/ }),

/***/ "../../../src/math/Vector2.js":
/*!**********************************************!*\
  !*** D:/wamp/www/phaser/src/math/Vector2.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

//  Adapted from [gl-matrix](https://github.com/toji/gl-matrix) by toji
//  and [vecmath](https://github.com/mattdesl/vecmath) by mattdesl

var Class = __webpack_require__(/*! ../utils/Class */ "../../../src/utils/Class.js");

/**
 * @classdesc
 * A representation of a vector in 2D space.
 *
 * A two-component vector.
 *
 * @class Vector2
 * @memberof Phaser.Math
 * @constructor
 * @since 3.0.0
 *
 * @param {number|Phaser.Types.Math.Vector2Like} [x] - The x component, or an object with `x` and `y` properties.
 * @param {number} [y] - The y component.
 */
var Vector2 = new Class({

    initialize:

    function Vector2 (x, y)
    {
        /**
         * The x component of this Vector.
         *
         * @name Phaser.Math.Vector2#x
         * @type {number}
         * @default 0
         * @since 3.0.0
         */
        this.x = 0;

        /**
         * The y component of this Vector.
         *
         * @name Phaser.Math.Vector2#y
         * @type {number}
         * @default 0
         * @since 3.0.0
         */
        this.y = 0;

        if (typeof x === 'object')
        {
            this.x = x.x || 0;
            this.y = x.y || 0;
        }
        else
        {
            if (y === undefined) { y = x; }

            this.x = x || 0;
            this.y = y || 0;
        }
    },

    /**
     * Make a clone of this Vector2.
     *
     * @method Phaser.Math.Vector2#clone
     * @since 3.0.0
     *
     * @return {Phaser.Math.Vector2} A clone of this Vector2.
     */
    clone: function ()
    {
        return new Vector2(this.x, this.y);
    },

    /**
     * Copy the components of a given Vector into this Vector.
     *
     * @method Phaser.Math.Vector2#copy
     * @since 3.0.0
     *
     * @param {Phaser.Math.Vector2} src - The Vector to copy the components from.
     *
     * @return {Phaser.Math.Vector2} This Vector2.
     */
    copy: function (src)
    {
        this.x = src.x || 0;
        this.y = src.y || 0;

        return this;
    },

    /**
     * Set the component values of this Vector from a given Vector2Like object.
     *
     * @method Phaser.Math.Vector2#setFromObject
     * @since 3.0.0
     *
     * @param {Phaser.Types.Math.Vector2Like} obj - The object containing the component values to set for this Vector.
     *
     * @return {Phaser.Math.Vector2} This Vector2.
     */
    setFromObject: function (obj)
    {
        this.x = obj.x || 0;
        this.y = obj.y || 0;

        return this;
    },

    /**
     * Set the `x` and `y` components of the this Vector to the given `x` and `y` values.
     *
     * @method Phaser.Math.Vector2#set
     * @since 3.0.0
     *
     * @param {number} x - The x value to set for this Vector.
     * @param {number} [y=x] - The y value to set for this Vector.
     *
     * @return {Phaser.Math.Vector2} This Vector2.
     */
    set: function (x, y)
    {
        if (y === undefined) { y = x; }

        this.x = x;
        this.y = y;

        return this;
    },

    /**
     * This method is an alias for `Vector2.set`.
     *
     * @method Phaser.Math.Vector2#setTo
     * @since 3.4.0
     *
     * @param {number} x - The x value to set for this Vector.
     * @param {number} [y=x] - The y value to set for this Vector.
     *
     * @return {Phaser.Math.Vector2} This Vector2.
     */
    setTo: function (x, y)
    {
        return this.set(x, y);
    },

    /**
     * Sets the `x` and `y` values of this object from a given polar coordinate.
     *
     * @method Phaser.Math.Vector2#setToPolar
     * @since 3.0.0
     *
     * @param {number} azimuth - The angular coordinate, in radians.
     * @param {number} [radius=1] - The radial coordinate (length).
     *
     * @return {Phaser.Math.Vector2} This Vector2.
     */
    setToPolar: function (azimuth, radius)
    {
        if (radius == null) { radius = 1; }

        this.x = Math.cos(azimuth) * radius;
        this.y = Math.sin(azimuth) * radius;

        return this;
    },

    /**
     * Check whether this Vector is equal to a given Vector.
     *
     * Performs a strict equality check against each Vector's components.
     *
     * @method Phaser.Math.Vector2#equals
     * @since 3.0.0
     *
     * @param {Phaser.Math.Vector2} v - The vector to compare with this Vector.
     *
     * @return {boolean} Whether the given Vector is equal to this Vector.
     */
    equals: function (v)
    {
        return ((this.x === v.x) && (this.y === v.y));
    },

    /**
     * Calculate the angle between this Vector and the positive x-axis, in radians.
     *
     * @method Phaser.Math.Vector2#angle
     * @since 3.0.0
     *
     * @return {number} The angle between this Vector, and the positive x-axis, given in radians.
     */
    angle: function ()
    {
        // computes the angle in radians with respect to the positive x-axis

        var angle = Math.atan2(this.y, this.x);

        if (angle < 0)
        {
            angle += 2 * Math.PI;
        }

        return angle;
    },

    /**
     * Add a given Vector to this Vector. Addition is component-wise.
     *
     * @method Phaser.Math.Vector2#add
     * @since 3.0.0
     *
     * @param {Phaser.Math.Vector2} src - The Vector to add to this Vector.
     *
     * @return {Phaser.Math.Vector2} This Vector2.
     */
    add: function (src)
    {
        this.x += src.x;
        this.y += src.y;

        return this;
    },

    /**
     * Subtract the given Vector from this Vector. Subtraction is component-wise.
     *
     * @method Phaser.Math.Vector2#subtract
     * @since 3.0.0
     *
     * @param {Phaser.Math.Vector2} src - The Vector to subtract from this Vector.
     *
     * @return {Phaser.Math.Vector2} This Vector2.
     */
    subtract: function (src)
    {
        this.x -= src.x;
        this.y -= src.y;

        return this;
    },

    /**
     * Perform a component-wise multiplication between this Vector and the given Vector.
     *
     * Multiplies this Vector by the given Vector.
     *
     * @method Phaser.Math.Vector2#multiply
     * @since 3.0.0
     *
     * @param {Phaser.Math.Vector2} src - The Vector to multiply this Vector by.
     *
     * @return {Phaser.Math.Vector2} This Vector2.
     */
    multiply: function (src)
    {
        this.x *= src.x;
        this.y *= src.y;

        return this;
    },

    /**
     * Scale this Vector by the given value.
     *
     * @method Phaser.Math.Vector2#scale
     * @since 3.0.0
     *
     * @param {number} value - The value to scale this Vector by.
     *
     * @return {Phaser.Math.Vector2} This Vector2.
     */
    scale: function (value)
    {
        if (isFinite(value))
        {
            this.x *= value;
            this.y *= value;
        }
        else
        {
            this.x = 0;
            this.y = 0;
        }

        return this;
    },

    /**
     * Perform a component-wise division between this Vector and the given Vector.
     *
     * Divides this Vector by the given Vector.
     *
     * @method Phaser.Math.Vector2#divide
     * @since 3.0.0
     *
     * @param {Phaser.Math.Vector2} src - The Vector to divide this Vector by.
     *
     * @return {Phaser.Math.Vector2} This Vector2.
     */
    divide: function (src)
    {
        this.x /= src.x;
        this.y /= src.y;

        return this;
    },

    /**
     * Negate the `x` and `y` components of this Vector.
     *
     * @method Phaser.Math.Vector2#negate
     * @since 3.0.0
     *
     * @return {Phaser.Math.Vector2} This Vector2.
     */
    negate: function ()
    {
        this.x = -this.x;
        this.y = -this.y;

        return this;
    },

    /**
     * Calculate the distance between this Vector and the given Vector.
     *
     * @method Phaser.Math.Vector2#distance
     * @since 3.0.0
     *
     * @param {Phaser.Math.Vector2} src - The Vector to calculate the distance to.
     *
     * @return {number} The distance from this Vector to the given Vector.
     */
    distance: function (src)
    {
        var dx = src.x - this.x;
        var dy = src.y - this.y;

        return Math.sqrt(dx * dx + dy * dy);
    },

    /**
     * Calculate the distance between this Vector and the given Vector, squared.
     *
     * @method Phaser.Math.Vector2#distanceSq
     * @since 3.0.0
     *
     * @param {Phaser.Math.Vector2} src - The Vector to calculate the distance to.
     *
     * @return {number} The distance from this Vector to the given Vector, squared.
     */
    distanceSq: function (src)
    {
        var dx = src.x - this.x;
        var dy = src.y - this.y;

        return dx * dx + dy * dy;
    },

    /**
     * Calculate the length (or magnitude) of this Vector.
     *
     * @method Phaser.Math.Vector2#length
     * @since 3.0.0
     *
     * @return {number} The length of this Vector.
     */
    length: function ()
    {
        var x = this.x;
        var y = this.y;

        return Math.sqrt(x * x + y * y);
    },

    /**
     * Calculate the length of this Vector squared.
     *
     * @method Phaser.Math.Vector2#lengthSq
     * @since 3.0.0
     *
     * @return {number} The length of this Vector, squared.
     */
    lengthSq: function ()
    {
        var x = this.x;
        var y = this.y;

        return x * x + y * y;
    },

    /**
     * Normalize this Vector.
     *
     * Makes the vector a unit length vector (magnitude of 1) in the same direction.
     *
     * @method Phaser.Math.Vector2#normalize
     * @since 3.0.0
     *
     * @return {Phaser.Math.Vector2} This Vector2.
     */
    normalize: function ()
    {
        var x = this.x;
        var y = this.y;
        var len = x * x + y * y;

        if (len > 0)
        {
            len = 1 / Math.sqrt(len);

            this.x = x * len;
            this.y = y * len;
        }

        return this;
    },

    /**
     * Right-hand normalize (make unit length) this Vector.
     *
     * @method Phaser.Math.Vector2#normalizeRightHand
     * @since 3.0.0
     *
     * @return {Phaser.Math.Vector2} This Vector2.
     */
    normalizeRightHand: function ()
    {
        var x = this.x;

        this.x = this.y * -1;
        this.y = x;

        return this;
    },

    /**
     * Calculate the dot product of this Vector and the given Vector.
     *
     * @method Phaser.Math.Vector2#dot
     * @since 3.0.0
     *
     * @param {Phaser.Math.Vector2} src - The Vector2 to dot product with this Vector2.
     *
     * @return {number} The dot product of this Vector and the given Vector.
     */
    dot: function (src)
    {
        return this.x * src.x + this.y * src.y;
    },

    /**
     * Calculate the cross product of this Vector and the given Vector.
     *
     * @method Phaser.Math.Vector2#cross
     * @since 3.0.0
     *
     * @param {Phaser.Math.Vector2} src - The Vector2 to cross with this Vector2.
     *
     * @return {number} The cross product of this Vector and the given Vector.
     */
    cross: function (src)
    {
        return this.x * src.y - this.y * src.x;
    },

    /**
     * Linearly interpolate between this Vector and the given Vector.
     *
     * Interpolates this Vector towards the given Vector.
     *
     * @method Phaser.Math.Vector2#lerp
     * @since 3.0.0
     *
     * @param {Phaser.Math.Vector2} src - The Vector2 to interpolate towards.
     * @param {number} [t=0] - The interpolation percentage, between 0 and 1.
     *
     * @return {Phaser.Math.Vector2} This Vector2.
     */
    lerp: function (src, t)
    {
        if (t === undefined) { t = 0; }

        var ax = this.x;
        var ay = this.y;

        this.x = ax + t * (src.x - ax);
        this.y = ay + t * (src.y - ay);

        return this;
    },

    /**
     * Transform this Vector with the given Matrix.
     *
     * @method Phaser.Math.Vector2#transformMat3
     * @since 3.0.0
     *
     * @param {Phaser.Math.Matrix3} mat - The Matrix3 to transform this Vector2 with.
     *
     * @return {Phaser.Math.Vector2} This Vector2.
     */
    transformMat3: function (mat)
    {
        var x = this.x;
        var y = this.y;
        var m = mat.val;

        this.x = m[0] * x + m[3] * y + m[6];
        this.y = m[1] * x + m[4] * y + m[7];

        return this;
    },

    /**
     * Transform this Vector with the given Matrix.
     *
     * @method Phaser.Math.Vector2#transformMat4
     * @since 3.0.0
     *
     * @param {Phaser.Math.Matrix4} mat - The Matrix4 to transform this Vector2 with.
     *
     * @return {Phaser.Math.Vector2} This Vector2.
     */
    transformMat4: function (mat)
    {
        var x = this.x;
        var y = this.y;
        var m = mat.val;

        this.x = m[0] * x + m[4] * y + m[12];
        this.y = m[1] * x + m[5] * y + m[13];

        return this;
    },

    /**
     * Make this Vector the zero vector (0, 0).
     *
     * @method Phaser.Math.Vector2#reset
     * @since 3.0.0
     *
     * @return {Phaser.Math.Vector2} This Vector2.
     */
    reset: function ()
    {
        this.x = 0;
        this.y = 0;

        return this;
    }

});

/**
 * A static zero Vector2 for use by reference.
 * 
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector2.ZERO
 * @type {Phaser.Math.Vector2}
 * @since 3.1.0
 */
Vector2.ZERO = new Vector2();

/**
 * A static right Vector2 for use by reference.
 * 
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector2.RIGHT
 * @type {Phaser.Math.Vector2}
 * @since 3.16.0
 */
Vector2.RIGHT = new Vector2(1, 0);

/**
 * A static left Vector2 for use by reference.
 * 
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector2.LEFT
 * @type {Phaser.Math.Vector2}
 * @since 3.16.0
 */
Vector2.LEFT = new Vector2(-1, 0);

/**
 * A static up Vector2 for use by reference.
 * 
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector2.UP
 * @type {Phaser.Math.Vector2}
 * @since 3.16.0
 */
Vector2.UP = new Vector2(0, -1);

/**
 * A static down Vector2 for use by reference.
 * 
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector2.DOWN
 * @type {Phaser.Math.Vector2}
 * @since 3.16.0
 */
Vector2.DOWN = new Vector2(0, 1);

/**
 * A static one Vector2 for use by reference.
 * 
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector2.ONE
 * @type {Phaser.Math.Vector2}
 * @since 3.16.0
 */
Vector2.ONE = new Vector2(1, 1);

module.exports = Vector2;


/***/ }),

/***/ "../../../src/math/Wrap.js":
/*!*******************************************!*\
  !*** D:/wamp/www/phaser/src/math/Wrap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Wrap the given `value` between `min` and `max.
 *
 * @function Phaser.Math.Wrap
 * @since 3.0.0
 *
 * @param {number} value - The value to wrap.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 *
 * @return {number} The wrapped value.
 */
var Wrap = function (value, min, max)
{
    var range = max - min;

    return (min + ((((value - min) % range) + range) % range));
};

module.exports = Wrap;


/***/ }),

/***/ "../../../src/math/angle/CounterClockwise.js":
/*!*************************************************************!*\
  !*** D:/wamp/www/phaser/src/math/angle/CounterClockwise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = __webpack_require__(/*! ../const */ "../../../src/math/const.js");

/**
 * Takes an angle in Phasers default clockwise format and converts it so that
 * 0 is North, 90 is West, 180 is South and 270 is East,
 * therefore running counter-clockwise instead of clockwise.
 * 
 * You can pass in the angle from a Game Object using:
 * 
 * ```javascript
 * var converted = CounterClockwise(gameobject.rotation);
 * ```
 * 
 * All values for this function are in radians.
 *
 * @function Phaser.Math.Angle.CounterClockwise
 * @since 3.16.0
 *
 * @param {number} angle - The angle to convert, in radians.
 *
 * @return {number} The converted angle, in radians.
 */
var CounterClockwise = function (angle)
{
    return Math.abs((((angle + CONST.TAU) % CONST.PI2) - CONST.PI2) % CONST.PI2);
};

module.exports = CounterClockwise;


/***/ }),

/***/ "../../../src/math/angle/Wrap.js":
/*!*************************************************!*\
  !*** D:/wamp/www/phaser/src/math/angle/Wrap.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var MathWrap = __webpack_require__(/*! ../Wrap */ "../../../src/math/Wrap.js");

/**
 * Wrap an angle.
 *
 * Wraps the angle to a value in the range of -PI to PI.
 *
 * @function Phaser.Math.Angle.Wrap
 * @since 3.0.0
 *
 * @param {number} angle - The angle to wrap, in radians.
 *
 * @return {number} The wrapped angle, in radians.
 */
var Wrap = function (angle)
{
    return MathWrap(angle, -Math.PI, Math.PI);
};

module.exports = Wrap;


/***/ }),

/***/ "../../../src/math/angle/WrapDegrees.js":
/*!********************************************************!*\
  !*** D:/wamp/www/phaser/src/math/angle/WrapDegrees.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Wrap = __webpack_require__(/*! ../Wrap */ "../../../src/math/Wrap.js");

/**
 * Wrap an angle in degrees.
 *
 * Wraps the angle to a value in the range of -180 to 180.
 *
 * @function Phaser.Math.Angle.WrapDegrees
 * @since 3.0.0
 *
 * @param {number} angle - The angle to wrap, in degrees.
 *
 * @return {number} The wrapped angle, in degrees.
 */
var WrapDegrees = function (angle)
{
    return Wrap(angle, -180, 180);
};

module.exports = WrapDegrees;


/***/ }),

/***/ "../../../src/math/const.js":
/*!********************************************!*\
  !*** D:/wamp/www/phaser/src/math/const.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var MATH_CONST = {

    /**
     * The value of PI * 2.
     * 
     * @name Phaser.Math.PI2
     * @type {number}
     * @since 3.0.0
     */
    PI2: Math.PI * 2,

    /**
     * The value of PI * 0.5.
     * 
     * @name Phaser.Math.TAU
     * @type {number}
     * @since 3.0.0
     */
    TAU: Math.PI * 0.5,

    /**
     * An epsilon value (1.0e-6)
     * 
     * @name Phaser.Math.EPSILON
     * @type {number}
     * @since 3.0.0
     */
    EPSILON: 1.0e-6,

    /**
     * For converting degrees to radians (PI / 180)
     * 
     * @name Phaser.Math.DEG_TO_RAD
     * @type {number}
     * @since 3.0.0
     */
    DEG_TO_RAD: Math.PI / 180,

    /**
     * For converting radians to degrees (180 / PI)
     * 
     * @name Phaser.Math.RAD_TO_DEG
     * @type {number}
     * @since 3.0.0
     */
    RAD_TO_DEG: 180 / Math.PI,

    /**
     * An instance of the Random Number Generator.
     * This is not set until the Game boots.
     * 
     * @name Phaser.Math.RND
     * @type {Phaser.Math.RandomDataGenerator}
     * @since 3.0.0
     */
    RND: null

};

module.exports = MATH_CONST;


/***/ }),

/***/ "../../../src/plugins/BasePlugin.js":
/*!****************************************************!*\
  !*** D:/wamp/www/phaser/src/plugins/BasePlugin.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2019 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser3-plugin-template/blob/master/LICENSE|MIT License}
*/

var Class = __webpack_require__(/*! ../utils/Class */ "../../../src/utils/Class.js");

/**
 * @classdesc
 * A Global Plugin is installed just once into the Game owned Plugin Manager.
 * It can listen for Game events and respond to them.
 *
 * @class BasePlugin
 * @memberof Phaser.Plugins
 * @constructor
 * @since 3.8.0
 *
 * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the Plugin Manager.
 */
var BasePlugin = new Class({

    initialize:

    function BasePlugin (pluginManager)
    {
        /**
         * A handy reference to the Plugin Manager that is responsible for this plugin.
         * Can be used as a route to gain access to game systems and  events.
         *
         * @name Phaser.Plugins.BasePlugin#pluginManager
         * @type {Phaser.Plugins.PluginManager}
         * @protected
         * @since 3.8.0
         */
        this.pluginManager = pluginManager;

        /**
         * A reference to the Game instance this plugin is running under.
         *
         * @name Phaser.Plugins.BasePlugin#game
         * @type {Phaser.Game}
         * @protected
         * @since 3.8.0
         */
        this.game = pluginManager.game;

        /**
         * A reference to the Scene that has installed this plugin.
         * Only set if it's a Scene Plugin, otherwise `null`.
         * This property is only set when the plugin is instantiated and added to the Scene, not before.
         * You cannot use it during the `init` method, but you can during the `boot` method.
         *
         * @name Phaser.Plugins.BasePlugin#scene
         * @type {?Phaser.Scene}
         * @protected
         * @since 3.8.0
         */
        this.scene;

        /**
         * A reference to the Scene Systems of the Scene that has installed this plugin.
         * Only set if it's a Scene Plugin, otherwise `null`.
         * This property is only set when the plugin is instantiated and added to the Scene, not before.
         * You cannot use it during the `init` method, but you can during the `boot` method.
         *
         * @name Phaser.Plugins.BasePlugin#systems
         * @type {?Phaser.Scenes.Systems}
         * @protected
         * @since 3.8.0
         */
        this.systems;
    },

    /**
     * Called by the PluginManager when this plugin is first instantiated.
     * It will never be called again on this instance.
     * In here you can set-up whatever you need for this plugin to run.
     * If a plugin is set to automatically start then `BasePlugin.start` will be called immediately after this.
     *
     * @method Phaser.Plugins.BasePlugin#init
     * @since 3.8.0
     *
     * @param {?any} [data] - A value specified by the user, if any, from the `data` property of the plugin's configuration object (if started at game boot) or passed in the PluginManager's `install` method (if started manually).
     */
    init: function ()
    {
    },

    /**
     * Called by the PluginManager when this plugin is started.
     * If a plugin is stopped, and then started again, this will get called again.
     * Typically called immediately after `BasePlugin.init`.
     *
     * @method Phaser.Plugins.BasePlugin#start
     * @since 3.8.0
     */
    start: function ()
    {
        //  Here are the game-level events you can listen to.
        //  At the very least you should offer a destroy handler for when the game closes down.

        // var eventEmitter = this.game.events;

        // eventEmitter.once('destroy', this.gameDestroy, this);
        // eventEmitter.on('pause', this.gamePause, this);
        // eventEmitter.on('resume', this.gameResume, this);
        // eventEmitter.on('resize', this.gameResize, this);
        // eventEmitter.on('prestep', this.gamePreStep, this);
        // eventEmitter.on('step', this.gameStep, this);
        // eventEmitter.on('poststep', this.gamePostStep, this);
        // eventEmitter.on('prerender', this.gamePreRender, this);
        // eventEmitter.on('postrender', this.gamePostRender, this);
    },

    /**
     * Called by the PluginManager when this plugin is stopped.
     * The game code has requested that your plugin stop doing whatever it does.
     * It is now considered as 'inactive' by the PluginManager.
     * Handle that process here (i.e. stop listening for events, etc)
     * If the plugin is started again then `BasePlugin.start` will be called again.
     *
     * @method Phaser.Plugins.BasePlugin#stop
     * @since 3.8.0
     */
    stop: function ()
    {
    },

    /**
     * If this is a Scene Plugin (i.e. installed into a Scene) then this method is called when the Scene boots.
     * By this point the plugin properties `scene` and `systems` will have already been set.
     * In here you can listen for Scene events and set-up whatever you need for this plugin to run.
     *
     * @method Phaser.Plugins.BasePlugin#boot
     * @since 3.8.0
     */
    boot: function ()
    {
        //  Here are the Scene events you can listen to.
        //  At the very least you should offer a destroy handler for when the Scene closes down.

        // var eventEmitter = this.systems.events;

        // eventEmitter.once('destroy', this.sceneDestroy, this);
        // eventEmitter.on('start', this.sceneStart, this);
        // eventEmitter.on('preupdate', this.scenePreUpdate, this);
        // eventEmitter.on('update', this.sceneUpdate, this);
        // eventEmitter.on('postupdate', this.scenePostUpdate, this);
        // eventEmitter.on('pause', this.scenePause, this);
        // eventEmitter.on('resume', this.sceneResume, this);
        // eventEmitter.on('sleep', this.sceneSleep, this);
        // eventEmitter.on('wake', this.sceneWake, this);
        // eventEmitter.on('shutdown', this.sceneShutdown, this);
        // eventEmitter.on('destroy', this.sceneDestroy, this);
    },

    /**
     * Game instance has been destroyed.
     * You must release everything in here, all references, all objects, free it all up.
     *
     * @method Phaser.Plugins.BasePlugin#destroy
     * @since 3.8.0
     */
    destroy: function ()
    {
        this.pluginManager = null;
        this.game = null;
        this.scene = null;
        this.systems = null;
    }

});

module.exports = BasePlugin;


/***/ }),

/***/ "../../../src/plugins/ScenePlugin.js":
/*!*****************************************************!*\
  !*** D:/wamp/www/phaser/src/plugins/ScenePlugin.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2019 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser3-plugin-template/blob/master/LICENSE|MIT License}
*/

var BasePlugin = __webpack_require__(/*! ./BasePlugin */ "../../../src/plugins/BasePlugin.js");
var Class = __webpack_require__(/*! ../utils/Class */ "../../../src/utils/Class.js");
var SceneEvents = __webpack_require__(/*! ../scene/events */ "../../../src/scene/events/index.js");

/**
 * @classdesc
 * A Scene Level Plugin is installed into every Scene and belongs to that Scene.
 * It can listen for Scene events and respond to them.
 * It can map itself to a Scene property, or into the Scene Systems, or both.
 *
 * @class ScenePlugin
 * @memberof Phaser.Plugins
 * @extends Phaser.Plugins.BasePlugin
 * @constructor
 * @since 3.8.0
 *
 * @param {Phaser.Scene} scene - A reference to the Scene that has installed this plugin.
 * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the Plugin Manager.
 */
var ScenePlugin = new Class({

    Extends: BasePlugin,

    initialize:

    function ScenePlugin (scene, pluginManager)
    {
        BasePlugin.call(this, pluginManager);

        this.scene = scene;
        this.systems = scene.sys;

        scene.sys.events.once(SceneEvents.BOOT, this.boot, this);
    },

    /**
     * This method is called when the Scene boots. It is only ever called once.
     * 
     * By this point the plugin properties `scene` and `systems` will have already been set.
     * 
     * In here you can listen for Scene events and set-up whatever you need for this plugin to run.
     * Here are the Scene events you can listen to:
     * 
     * start
     * ready
     * preupdate
     * update
     * postupdate
     * resize
     * pause
     * resume
     * sleep
     * wake
     * transitioninit
     * transitionstart
     * transitioncomplete
     * transitionout
     * shutdown
     * destroy
     * 
     * At the very least you should offer a destroy handler for when the Scene closes down, i.e:
     *
     * ```javascript
     * var eventEmitter = this.systems.events;
     * eventEmitter.once('destroy', this.sceneDestroy, this);
     * ```
     *
     * @method Phaser.Plugins.ScenePlugin#boot
     * @since 3.8.0
     */
    boot: function ()
    {
    }

});

module.exports = ScenePlugin;


/***/ }),

/***/ "../../../src/renderer/BlendModes.js":
/*!*****************************************************!*\
  !*** D:/wamp/www/phaser/src/renderer/BlendModes.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Phaser Blend Modes.
 * 
 * @namespace Phaser.BlendModes
 * @since 3.0.0
 */

module.exports = {

    /**
     * Skips the Blend Mode check in the renderer.
     * 
     * @name Phaser.BlendModes.SKIP_CHECK
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    SKIP_CHECK: -1,

    /**
     * Normal blend mode. For Canvas and WebGL.
     * This is the default setting and draws new shapes on top of the existing canvas content.
     * 
     * @name Phaser.BlendModes.NORMAL
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    NORMAL: 0,

    /**
     * Add blend mode. For Canvas and WebGL.
     * Where both shapes overlap the color is determined by adding color values.
     * 
     * @name Phaser.BlendModes.ADD
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    ADD: 1,

    /**
     * Multiply blend mode. For Canvas and WebGL.
     * The pixels are of the top layer are multiplied with the corresponding pixel of the bottom layer. A darker picture is the result.
     * 
     * @name Phaser.BlendModes.MULTIPLY
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    MULTIPLY: 2,

    /**
     * Screen blend mode. For Canvas and WebGL.
     * The pixels are inverted, multiplied, and inverted again. A lighter picture is the result (opposite of multiply)
     * 
     * @name Phaser.BlendModes.SCREEN
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    SCREEN: 3,

    /**
     * Overlay blend mode. For Canvas only.
     * A combination of multiply and screen. Dark parts on the base layer become darker, and light parts become lighter.
     * 
     * @name Phaser.BlendModes.OVERLAY
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    OVERLAY: 4,

    /**
     * Darken blend mode. For Canvas only.
     * Retains the darkest pixels of both layers.
     * 
     * @name Phaser.BlendModes.DARKEN
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    DARKEN: 5,

    /**
     * Lighten blend mode. For Canvas only.
     * Retains the lightest pixels of both layers.
     * 
     * @name Phaser.BlendModes.LIGHTEN
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    LIGHTEN: 6,

    /**
     * Color Dodge blend mode. For Canvas only.
     * Divides the bottom layer by the inverted top layer.
     * 
     * @name Phaser.BlendModes.COLOR_DODGE
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    COLOR_DODGE: 7,

    /**
     * Color Burn blend mode. For Canvas only.
     * Divides the inverted bottom layer by the top layer, and then inverts the result.
     * 
     * @name Phaser.BlendModes.COLOR_BURN
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    COLOR_BURN: 8,

    /**
     * Hard Light blend mode. For Canvas only.
     * A combination of multiply and screen like overlay, but with top and bottom layer swapped.
     * 
     * @name Phaser.BlendModes.HARD_LIGHT
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    HARD_LIGHT: 9,

    /**
     * Soft Light blend mode. For Canvas only.
     * A softer version of hard-light. Pure black or white does not result in pure black or white.
     * 
     * @name Phaser.BlendModes.SOFT_LIGHT
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    SOFT_LIGHT: 10,

    /**
     * Difference blend mode. For Canvas only.
     * Subtracts the bottom layer from the top layer or the other way round to always get a positive value.
     * 
     * @name Phaser.BlendModes.DIFFERENCE
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    DIFFERENCE: 11,

    /**
     * Exclusion blend mode. For Canvas only.
     * Like difference, but with lower contrast.
     * 
     * @name Phaser.BlendModes.EXCLUSION
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    EXCLUSION: 12,

    /**
     * Hue blend mode. For Canvas only.
     * Preserves the luma and chroma of the bottom layer, while adopting the hue of the top layer.
     * 
     * @name Phaser.BlendModes.HUE
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    HUE: 13,

    /**
     * Saturation blend mode. For Canvas only.
     * Preserves the luma and hue of the bottom layer, while adopting the chroma of the top layer.
     * 
     * @name Phaser.BlendModes.SATURATION
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    SATURATION: 14,

    /**
     * Color blend mode. For Canvas only.
     * Preserves the luma of the bottom layer, while adopting the hue and chroma of the top layer.
     * 
     * @name Phaser.BlendModes.COLOR
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    COLOR: 15,

    /**
     * Luminosity blend mode. For Canvas only.
     * Preserves the hue and chroma of the bottom layer, while adopting the luma of the top layer.
     * 
     * @name Phaser.BlendModes.LUMINOSITY
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    LUMINOSITY: 16,

    /**
     * Alpha erase blend mode. For Canvas and WebGL.
     * 
     * @name Phaser.BlendModes.ERASE
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    ERASE: 17,

    /**
     * Source-in blend mode. For Canvas only.
     * The new shape is drawn only where both the new shape and the destination canvas overlap. Everything else is made transparent.
     * 
     * @name Phaser.BlendModes.SOURCE_IN
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    SOURCE_IN: 18,

    /**
     * Source-out blend mode. For Canvas only.
     * The new shape is drawn where it doesn't overlap the existing canvas content.
     * 
     * @name Phaser.BlendModes.SOURCE_OUT
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    SOURCE_OUT: 19,

    /**
     * Source-out blend mode. For Canvas only.
     * The new shape is only drawn where it overlaps the existing canvas content.
     * 
     * @name Phaser.BlendModes.SOURCE_ATOP
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    SOURCE_ATOP: 20,

    /**
     * Destination-over blend mode. For Canvas only.
     * New shapes are drawn behind the existing canvas content.
     * 
     * @name Phaser.BlendModes.DESTINATION_OVER
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    DESTINATION_OVER: 21,

    /**
     * Destination-in blend mode. For Canvas only.
     * The existing canvas content is kept where both the new shape and existing canvas content overlap. Everything else is made transparent.
     * 
     * @name Phaser.BlendModes.DESTINATION_IN
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    DESTINATION_IN: 22,

    /**
     * Destination-out blend mode. For Canvas only.
     * The existing content is kept where it doesn't overlap the new shape.
     * 
     * @name Phaser.BlendModes.DESTINATION_OUT
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    DESTINATION_OUT: 23,

    /**
     * Destination-out blend mode. For Canvas only.
     * The existing canvas is only kept where it overlaps the new shape. The new shape is drawn behind the canvas content.
     * 
     * @name Phaser.BlendModes.DESTINATION_ATOP
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    DESTINATION_ATOP: 24,

    /**
     * Lighten blend mode. For Canvas only.
     * Where both shapes overlap the color is determined by adding color values.
     * 
     * @name Phaser.BlendModes.LIGHTER
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    LIGHTER: 25,

    /**
     * Copy blend mode. For Canvas only.
     * Only the new shape is shown.
     * 
     * @name Phaser.BlendModes.COPY
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    COPY: 26,

    /**
     * Xor blend mode. For Canvas only.
     * Shapes are made transparent where both overlap and drawn normal everywhere else.
     * 
     * @name Phaser.BlendModes.XOR
     * @type {integer}
     * @const
     * @since 3.0.0
     */
    XOR: 27

};


/***/ }),

/***/ "../../../src/renderer/canvas/utils/SetTransform.js":
/*!********************************************************************!*\
  !*** D:/wamp/www/phaser/src/renderer/canvas/utils/SetTransform.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Takes a reference to the Canvas Renderer, a Canvas Rendering Context, a Game Object, a Camera and a parent matrix
 * and then performs the following steps:
 * 
 * 1. Checks the alpha of the source combined with the Camera alpha. If 0 or less it aborts.
 * 2. Takes the Camera and Game Object matrix and multiplies them, combined with the parent matrix if given.
 * 3. Sets the blend mode of the context to be that used by the Game Object.
 * 4. Sets the alpha value of the context to be that used by the Game Object combined with the Camera.
 * 5. Saves the context state.
 * 6. Sets the final matrix values into the context via setTransform.
 * 
 * This function is only meant to be used internally. Most of the Canvas Renderer classes use it.
 *
 * @function Phaser.Renderer.Canvas.SetTransform
 * @since 3.12.0
 *
 * @param {Phaser.Renderer.Canvas.CanvasRenderer} renderer - A reference to the current active Canvas renderer.
 * @param {CanvasRenderingContext2D} ctx - The canvas context to set the transform on.
 * @param {Phaser.GameObjects.GameObject} src - The Game Object being rendered. Can be any type that extends the base class.
 * @param {Phaser.Cameras.Scene2D.Camera} camera - The Camera that is rendering the Game Object.
 * @param {Phaser.GameObjects.Components.TransformMatrix} [parentMatrix] - A parent transform matrix to apply to the Game Object before rendering.
 * 
 * @return {boolean} `true` if the Game Object context was set, otherwise `false`.
 */
var SetTransform = function (renderer, ctx, src, camera, parentMatrix)
{
    var alpha = camera.alpha * src.alpha;

    if (alpha <= 0)
    {
        //  Nothing to see, so don't waste time calculating stuff
        return false;
    }

    var camMatrix = renderer._tempMatrix1.copyFromArray(camera.matrix.matrix);
    var gameObjectMatrix = renderer._tempMatrix2.applyITRS(src.x, src.y, src.rotation, src.scaleX, src.scaleY);
    var calcMatrix = renderer._tempMatrix3;

    if (parentMatrix)
    {
        //  Multiply the camera by the parent matrix
        camMatrix.multiplyWithOffset(parentMatrix, -camera.scrollX * src.scrollFactorX, -camera.scrollY * src.scrollFactorY);

        //  Undo the camera scroll
        gameObjectMatrix.e = src.x;
        gameObjectMatrix.f = src.y;

        //  Multiply by the Sprite matrix, store result in calcMatrix
        camMatrix.multiply(gameObjectMatrix, calcMatrix);
    }
    else
    {
        gameObjectMatrix.e -= camera.scrollX * src.scrollFactorX;
        gameObjectMatrix.f -= camera.scrollY * src.scrollFactorY;

        //  Multiply by the Sprite matrix, store result in calcMatrix
        camMatrix.multiply(gameObjectMatrix, calcMatrix);
    }

    //  Blend Mode
    ctx.globalCompositeOperation = renderer.blendModes[src.blendMode];

    //  Alpha
    ctx.globalAlpha = alpha;

    ctx.save();

    calcMatrix.setToContext(ctx);

    return true;
};

module.exports = SetTransform;


/***/ }),

/***/ "../../../src/scene/events/BOOT_EVENT.js":
/*!*********************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/BOOT_EVENT.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Boot Event.
 * 
 * This event is dispatched by a Scene during the Scene Systems boot process. Primarily used by Scene Plugins.
 * 
 * Listen to it from a Scene using `this.scene.events.on('boot', listener)`.
 * 
 * @event Phaser.Scenes.Events#BOOT
 * @since 3.0.0
 * 
 * @param {Phaser.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 */
module.exports = 'boot';


/***/ }),

/***/ "../../../src/scene/events/CREATE_EVENT.js":
/*!***********************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/CREATE_EVENT.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Create Event.
 * 
 * This event is dispatched by a Scene after it has been created by the Scene Manager.
 * 
 * If a Scene has a `create` method then this event is emitted _after_ that has run.
 * 
 * If there is a transition, this event will be fired after the `TRANSITION_START` event.
 * 
 * Listen to it from a Scene using `this.scene.events.on('create', listener)`.
 * 
 * @event Phaser.Scenes.Events#CREATE
 * @since 3.17.0
 * 
 * @param {Phaser.Scene} scene - A reference to the Scene that emitted this event.
 */
module.exports = 'create';


/***/ }),

/***/ "../../../src/scene/events/DESTROY_EVENT.js":
/*!************************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/DESTROY_EVENT.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Destroy Event.
 * 
 * This event is dispatched by a Scene during the Scene Systems destroy process.
 * 
 * Listen to it from a Scene using `this.scene.events.on('destroy', listener)`.
 * 
 * You should destroy any resources that may be in use by your Scene in this event handler.
 * 
 * @event Phaser.Scenes.Events#DESTROY
 * @since 3.0.0
 * 
 * @param {Phaser.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 */
module.exports = 'destroy';


/***/ }),

/***/ "../../../src/scene/events/PAUSE_EVENT.js":
/*!**********************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/PAUSE_EVENT.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Pause Event.
 * 
 * This event is dispatched by a Scene when it is paused, either directly via the `pause` method, or as an
 * action from another Scene.
 * 
 * Listen to it from a Scene using `this.scene.events.on('pause', listener)`.
 * 
 * @event Phaser.Scenes.Events#PAUSE
 * @since 3.0.0
 * 
 * @param {Phaser.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 * @param {any} [data] - An optional data object that was passed to this Scene when it was paused.
 */
module.exports = 'pause';


/***/ }),

/***/ "../../../src/scene/events/POST_UPDATE_EVENT.js":
/*!****************************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/POST_UPDATE_EVENT.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Post Update Event.
 * 
 * This event is dispatched by a Scene during the main game loop step.
 * 
 * The event flow for a single step of a Scene is as follows:
 * 
 * 1. [PRE_UPDATE]{@linkcode Phaser.Scenes.Events#event:PRE_UPDATE}
 * 2. [UPDATE]{@linkcode Phaser.Scenes.Events#event:UPDATE}
 * 3. The `Scene.update` method is called, if it exists
 * 4. [POST_UPDATE]{@linkcode Phaser.Scenes.Events#event:POST_UPDATE}
 * 5. [RENDER]{@linkcode Phaser.Scenes.Events#event:RENDER}
 * 
 * Listen to it from a Scene using `this.scene.events.on('postupdate', listener)`.
 * 
 * A Scene will only run its step if it is active.
 * 
 * @event Phaser.Scenes.Events#POST_UPDATE
 * @since 3.0.0
 * 
 * @param {Phaser.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 * @param {number} time - The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout.
 * @param {number} delta - The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
 */
module.exports = 'postupdate';


/***/ }),

/***/ "../../../src/scene/events/PRE_UPDATE_EVENT.js":
/*!***************************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/PRE_UPDATE_EVENT.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Pre Update Event.
 * 
 * This event is dispatched by a Scene during the main game loop step.
 * 
 * The event flow for a single step of a Scene is as follows:
 * 
 * 1. [PRE_UPDATE]{@linkcode Phaser.Scenes.Events#event:PRE_UPDATE}
 * 2. [UPDATE]{@linkcode Phaser.Scenes.Events#event:UPDATE}
 * 3. The `Scene.update` method is called, if it exists
 * 4. [POST_UPDATE]{@linkcode Phaser.Scenes.Events#event:POST_UPDATE}
 * 5. [RENDER]{@linkcode Phaser.Scenes.Events#event:RENDER}
 * 
 * Listen to it from a Scene using `this.scene.events.on('preupdate', listener)`.
 * 
 * A Scene will only run its step if it is active.
 * 
 * @event Phaser.Scenes.Events#PRE_UPDATE
 * @since 3.0.0
 * 
 * @param {Phaser.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 * @param {number} time - The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout.
 * @param {number} delta - The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
 */
module.exports = 'preupdate';


/***/ }),

/***/ "../../../src/scene/events/READY_EVENT.js":
/*!**********************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/READY_EVENT.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Ready Event.
 * 
 * This event is dispatched by a Scene during the Scene Systems start process.
 * By this point in the process the Scene is now fully active and rendering.
 * This event is meant for your game code to use, as all plugins have responded to the earlier 'start' event.
 * 
 * Listen to it from a Scene using `this.scene.events.on('ready', listener)`.
 * 
 * @event Phaser.Scenes.Events#READY
 * @since 3.0.0
 * 
 * @param {Phaser.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 * @param {any} [data] - An optional data object that was passed to this Scene when it was started.
 */
module.exports = 'ready';


/***/ }),

/***/ "../../../src/scene/events/RENDER_EVENT.js":
/*!***********************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/RENDER_EVENT.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Render Event.
 * 
 * This event is dispatched by a Scene during the main game loop step.
 * 
 * The event flow for a single step of a Scene is as follows:
 * 
 * 1. [PRE_UPDATE]{@linkcode Phaser.Scenes.Events#event:PRE_UPDATE}
 * 2. [UPDATE]{@linkcode Phaser.Scenes.Events#event:UPDATE}
 * 3. The `Scene.update` method is called, if it exists
 * 4. [POST_UPDATE]{@linkcode Phaser.Scenes.Events#event:POST_UPDATE}
 * 5. [RENDER]{@linkcode Phaser.Scenes.Events#event:RENDER}
 * 
 * Listen to it from a Scene using `this.scene.events.on('render', listener)`.
 * 
 * A Scene will only render if it is visible and active.
 * By the time this event is dispatched, the Scene will have already been rendered.
 * 
 * @event Phaser.Scenes.Events#RENDER
 * @since 3.0.0
 * 
 * @param {(Phaser.Renderer.Canvas.CanvasRenderer|Phaser.Renderer.WebGL.WebGLRenderer)} renderer - The renderer that rendered the Scene.
 */
module.exports = 'render';


/***/ }),

/***/ "../../../src/scene/events/RESUME_EVENT.js":
/*!***********************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/RESUME_EVENT.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Resume Event.
 * 
 * This event is dispatched by a Scene when it is resumed from a paused state, either directly via the `resume` method,
 * or as an action from another Scene.
 * 
 * Listen to it from a Scene using `this.scene.events.on('resume', listener)`.
 * 
 * @event Phaser.Scenes.Events#RESUME
 * @since 3.0.0
 * 
 * @param {Phaser.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 * @param {any} [data] - An optional data object that was passed to this Scene when it was resumed.
 */
module.exports = 'resume';


/***/ }),

/***/ "../../../src/scene/events/SHUTDOWN_EVENT.js":
/*!*************************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/SHUTDOWN_EVENT.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Shutdown Event.
 * 
 * This event is dispatched by a Scene during the Scene Systems shutdown process.
 * 
 * Listen to it from a Scene using `this.scene.events.on('shutdown', listener)`.
 * 
 * You should free-up any resources that may be in use by your Scene in this event handler, on the understanding
 * that the Scene may, at any time, become active again. A shutdown Scene is not 'destroyed', it's simply not
 * currently active. Use the [DESTROY]{@linkcode Phaser.Scenes.Events#event:DESTROY} event to completely clear resources.
 * 
 * @event Phaser.Scenes.Events#SHUTDOWN
 * @since 3.0.0
 * 
 * @param {Phaser.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 * @param {any} [data] - An optional data object that was passed to this Scene when it was shutdown.
 */
module.exports = 'shutdown';


/***/ }),

/***/ "../../../src/scene/events/SLEEP_EVENT.js":
/*!**********************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/SLEEP_EVENT.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Sleep Event.
 * 
 * This event is dispatched by a Scene when it is sent to sleep, either directly via the `sleep` method,
 * or as an action from another Scene.
 * 
 * Listen to it from a Scene using `this.scene.events.on('sleep', listener)`.
 * 
 * @event Phaser.Scenes.Events#SLEEP
 * @since 3.0.0
 * 
 * @param {Phaser.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 * @param {any} [data] - An optional data object that was passed to this Scene when it was sent to sleep.
 */
module.exports = 'sleep';


/***/ }),

/***/ "../../../src/scene/events/START_EVENT.js":
/*!**********************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/START_EVENT.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Start Event.
 * 
 * This event is dispatched by a Scene during the Scene Systems start process. Primarily used by Scene Plugins.
 * 
 * Listen to it from a Scene using `this.scene.events.on('start', listener)`.
 * 
 * @event Phaser.Scenes.Events#START
 * @since 3.0.0
 * 
 * @param {Phaser.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 */
module.exports = 'start';


/***/ }),

/***/ "../../../src/scene/events/TRANSITION_COMPLETE_EVENT.js":
/*!************************************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/TRANSITION_COMPLETE_EVENT.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Transition Complete Event.
 * 
 * This event is dispatched by the Target Scene of a transition.
 * 
 * It happens when the transition process has completed. This occurs when the duration timer equals or exceeds the duration
 * of the transition.
 * 
 * Listen to it from a Scene using `this.scene.events.on('transitioncomplete', listener)`.
 * 
 * The Scene Transition event flow is as follows:
 * 
 * 1. [TRANSITION_OUT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_OUT} - the Scene that started the transition will emit this event.
 * 2. [TRANSITION_INIT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_INIT} - the Target Scene will emit this event if it has an `init` method.
 * 3. [TRANSITION_START]{@linkcode Phaser.Scenes.Events#event:TRANSITION_START} - the Target Scene will emit this event after its `create` method is called, OR ...
 * 4. [TRANSITION_WAKE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_WAKE} - the Target Scene will emit this event if it was asleep and has been woken-up to be transitioned to.
 * 5. [TRANSITION_COMPLETE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_COMPLETE} - the Target Scene will emit this event when the transition finishes.
 * 
 * @event Phaser.Scenes.Events#TRANSITION_COMPLETE
 * @since 3.5.0
 * 
 * @param {Phaser.Scene} scene -The Scene on which the transitioned completed.
 */
module.exports = 'transitioncomplete';


/***/ }),

/***/ "../../../src/scene/events/TRANSITION_INIT_EVENT.js":
/*!********************************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/TRANSITION_INIT_EVENT.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Transition Init Event.
 * 
 * This event is dispatched by the Target Scene of a transition.
 * 
 * It happens immediately after the `Scene.init` method is called. If the Scene does not have an `init` method,
 * this event is not dispatched.
 * 
 * Listen to it from a Scene using `this.scene.events.on('transitioninit', listener)`.
 * 
 * The Scene Transition event flow is as follows:
 * 
 * 1. [TRANSITION_OUT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_OUT} - the Scene that started the transition will emit this event.
 * 2. [TRANSITION_INIT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_INIT} - the Target Scene will emit this event if it has an `init` method.
 * 3. [TRANSITION_START]{@linkcode Phaser.Scenes.Events#event:TRANSITION_START} - the Target Scene will emit this event after its `create` method is called, OR ...
 * 4. [TRANSITION_WAKE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_WAKE} - the Target Scene will emit this event if it was asleep and has been woken-up to be transitioned to.
 * 5. [TRANSITION_COMPLETE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_COMPLETE} - the Target Scene will emit this event when the transition finishes.
 * 
 * @event Phaser.Scenes.Events#TRANSITION_INIT
 * @since 3.5.0
 * 
 * @param {Phaser.Scene} from - A reference to the Scene that is being transitioned from.
 * @param {number} duration - The duration of the transition in ms.
 */
module.exports = 'transitioninit';


/***/ }),

/***/ "../../../src/scene/events/TRANSITION_OUT_EVENT.js":
/*!*******************************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/TRANSITION_OUT_EVENT.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Transition Out Event.
 * 
 * This event is dispatched by a Scene when it initiates a transition to another Scene.
 * 
 * Listen to it from a Scene using `this.scene.events.on('transitionout', listener)`.
 * 
 * The Scene Transition event flow is as follows:
 * 
 * 1. [TRANSITION_OUT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_OUT} - the Scene that started the transition will emit this event.
 * 2. [TRANSITION_INIT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_INIT} - the Target Scene will emit this event if it has an `init` method.
 * 3. [TRANSITION_START]{@linkcode Phaser.Scenes.Events#event:TRANSITION_START} - the Target Scene will emit this event after its `create` method is called, OR ...
 * 4. [TRANSITION_WAKE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_WAKE} - the Target Scene will emit this event if it was asleep and has been woken-up to be transitioned to.
 * 5. [TRANSITION_COMPLETE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_COMPLETE} - the Target Scene will emit this event when the transition finishes.
 * 
 * @event Phaser.Scenes.Events#TRANSITION_OUT
 * @since 3.5.0
 * 
 * @param {Phaser.Scene} target - A reference to the Scene that is being transitioned to.
 * @param {number} duration - The duration of the transition in ms.
 */
module.exports = 'transitionout';


/***/ }),

/***/ "../../../src/scene/events/TRANSITION_START_EVENT.js":
/*!*********************************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/TRANSITION_START_EVENT.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Transition Start Event.
 * 
 * This event is dispatched by the Target Scene of a transition, only if that Scene was not asleep.
 * 
 * It happens immediately after the `Scene.create` method is called. If the Scene does not have a `create` method,
 * this event is dispatched anyway.
 * 
 * If the Target Scene was sleeping then the [TRANSITION_WAKE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_WAKE} event is
 * dispatched instead of this event.
 * 
 * Listen to it from a Scene using `this.scene.events.on('transitionstart', listener)`.
 * 
 * The Scene Transition event flow is as follows:
 * 
 * 1. [TRANSITION_OUT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_OUT} - the Scene that started the transition will emit this event.
 * 2. [TRANSITION_INIT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_INIT} - the Target Scene will emit this event if it has an `init` method.
 * 3. [TRANSITION_START]{@linkcode Phaser.Scenes.Events#event:TRANSITION_START} - the Target Scene will emit this event after its `create` method is called, OR ...
 * 4. [TRANSITION_WAKE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_WAKE} - the Target Scene will emit this event if it was asleep and has been woken-up to be transitioned to.
 * 5. [TRANSITION_COMPLETE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_COMPLETE} - the Target Scene will emit this event when the transition finishes.
 * 
 * @event Phaser.Scenes.Events#TRANSITION_START
 * @since 3.5.0
 * 
 * @param {Phaser.Scene} from - A reference to the Scene that is being transitioned from.
 * @param {number} duration - The duration of the transition in ms.
 */
module.exports = 'transitionstart';


/***/ }),

/***/ "../../../src/scene/events/TRANSITION_WAKE_EVENT.js":
/*!********************************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/TRANSITION_WAKE_EVENT.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Transition Wake Event.
 * 
 * This event is dispatched by the Target Scene of a transition, only if that Scene was asleep before
 * the transition began. If the Scene was not asleep the [TRANSITION_START]{@linkcode Phaser.Scenes.Events#event:TRANSITION_START} event is dispatched instead.
 * 
 * Listen to it from a Scene using `this.scene.events.on('transitionwake', listener)`.
 * 
 * The Scene Transition event flow is as follows:
 * 
 * 1. [TRANSITION_OUT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_OUT} - the Scene that started the transition will emit this event.
 * 2. [TRANSITION_INIT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_INIT} - the Target Scene will emit this event if it has an `init` method.
 * 3. [TRANSITION_START]{@linkcode Phaser.Scenes.Events#event:TRANSITION_START} - the Target Scene will emit this event after its `create` method is called, OR ...
 * 4. [TRANSITION_WAKE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_WAKE} - the Target Scene will emit this event if it was asleep and has been woken-up to be transitioned to.
 * 5. [TRANSITION_COMPLETE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_COMPLETE} - the Target Scene will emit this event when the transition finishes.
 * 
 * @event Phaser.Scenes.Events#TRANSITION_WAKE
 * @since 3.5.0
 * 
 * @param {Phaser.Scene} from - A reference to the Scene that is being transitioned from.
 * @param {number} duration - The duration of the transition in ms.
 */
module.exports = 'transitionwake';


/***/ }),

/***/ "../../../src/scene/events/UPDATE_EVENT.js":
/*!***********************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/UPDATE_EVENT.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Update Event.
 * 
 * This event is dispatched by a Scene during the main game loop step.
 * 
 * The event flow for a single step of a Scene is as follows:
 * 
 * 1. [PRE_UPDATE]{@linkcode Phaser.Scenes.Events#event:PRE_UPDATE}
 * 2. [UPDATE]{@linkcode Phaser.Scenes.Events#event:UPDATE}
 * 3. The `Scene.update` method is called, if it exists
 * 4. [POST_UPDATE]{@linkcode Phaser.Scenes.Events#event:POST_UPDATE}
 * 5. [RENDER]{@linkcode Phaser.Scenes.Events#event:RENDER}
 * 
 * Listen to it from a Scene using `this.scene.events.on('update', listener)`.
 * 
 * A Scene will only run its step if it is active.
 * 
 * @event Phaser.Scenes.Events#UPDATE
 * @since 3.0.0
 * 
 * @param {Phaser.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 * @param {number} time - The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout.
 * @param {number} delta - The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
 */
module.exports = 'update';


/***/ }),

/***/ "../../../src/scene/events/WAKE_EVENT.js":
/*!*********************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/WAKE_EVENT.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Wake Event.
 * 
 * This event is dispatched by a Scene when it is woken from sleep, either directly via the `wake` method,
 * or as an action from another Scene.
 * 
 * Listen to it from a Scene using `this.scene.events.on('wake', listener)`.
 * 
 * @event Phaser.Scenes.Events#WAKE
 * @since 3.0.0
 * 
 * @param {Phaser.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 * @param {any} [data] - An optional data object that was passed to this Scene when it was woken up.
 */
module.exports = 'wake';


/***/ }),

/***/ "../../../src/scene/events/index.js":
/*!****************************************************!*\
  !*** D:/wamp/www/phaser/src/scene/events/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Scenes.Events
 */

module.exports = {

    BOOT: __webpack_require__(/*! ./BOOT_EVENT */ "../../../src/scene/events/BOOT_EVENT.js"),
    CREATE: __webpack_require__(/*! ./CREATE_EVENT */ "../../../src/scene/events/CREATE_EVENT.js"),
    DESTROY: __webpack_require__(/*! ./DESTROY_EVENT */ "../../../src/scene/events/DESTROY_EVENT.js"),
    PAUSE: __webpack_require__(/*! ./PAUSE_EVENT */ "../../../src/scene/events/PAUSE_EVENT.js"),
    POST_UPDATE: __webpack_require__(/*! ./POST_UPDATE_EVENT */ "../../../src/scene/events/POST_UPDATE_EVENT.js"),
    PRE_UPDATE: __webpack_require__(/*! ./PRE_UPDATE_EVENT */ "../../../src/scene/events/PRE_UPDATE_EVENT.js"),
    READY: __webpack_require__(/*! ./READY_EVENT */ "../../../src/scene/events/READY_EVENT.js"),
    RENDER: __webpack_require__(/*! ./RENDER_EVENT */ "../../../src/scene/events/RENDER_EVENT.js"),
    RESUME: __webpack_require__(/*! ./RESUME_EVENT */ "../../../src/scene/events/RESUME_EVENT.js"),
    SHUTDOWN: __webpack_require__(/*! ./SHUTDOWN_EVENT */ "../../../src/scene/events/SHUTDOWN_EVENT.js"),
    SLEEP: __webpack_require__(/*! ./SLEEP_EVENT */ "../../../src/scene/events/SLEEP_EVENT.js"),
    START: __webpack_require__(/*! ./START_EVENT */ "../../../src/scene/events/START_EVENT.js"),
    TRANSITION_COMPLETE: __webpack_require__(/*! ./TRANSITION_COMPLETE_EVENT */ "../../../src/scene/events/TRANSITION_COMPLETE_EVENT.js"),
    TRANSITION_INIT: __webpack_require__(/*! ./TRANSITION_INIT_EVENT */ "../../../src/scene/events/TRANSITION_INIT_EVENT.js"),
    TRANSITION_OUT: __webpack_require__(/*! ./TRANSITION_OUT_EVENT */ "../../../src/scene/events/TRANSITION_OUT_EVENT.js"),
    TRANSITION_START: __webpack_require__(/*! ./TRANSITION_START_EVENT */ "../../../src/scene/events/TRANSITION_START_EVENT.js"),
    TRANSITION_WAKE: __webpack_require__(/*! ./TRANSITION_WAKE_EVENT */ "../../../src/scene/events/TRANSITION_WAKE_EVENT.js"),
    UPDATE: __webpack_require__(/*! ./UPDATE_EVENT */ "../../../src/scene/events/UPDATE_EVENT.js"),
    WAKE: __webpack_require__(/*! ./WAKE_EVENT */ "../../../src/scene/events/WAKE_EVENT.js")

};


/***/ }),

/***/ "../../../src/utils/Class.js":
/*!*********************************************!*\
  !*** D:/wamp/www/phaser/src/utils/Class.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

//  Taken from klasse by mattdesl https://github.com/mattdesl/klasse

function hasGetterOrSetter (def)
{
    return (!!def.get && typeof def.get === 'function') || (!!def.set && typeof def.set === 'function');
}

function getProperty (definition, k, isClassDescriptor)
{
    //  This may be a lightweight object, OR it might be a property that was defined previously.

    //  For simple class descriptors we can just assume its NOT previously defined.
    var def = (isClassDescriptor) ? definition[k] : Object.getOwnPropertyDescriptor(definition, k);

    if (!isClassDescriptor && def.value && typeof def.value === 'object')
    {
        def = def.value;
    }

    //  This might be a regular property, or it may be a getter/setter the user defined in a class.
    if (def && hasGetterOrSetter(def))
    {
        if (typeof def.enumerable === 'undefined')
        {
            def.enumerable = true;
        }

        if (typeof def.configurable === 'undefined')
        {
            def.configurable = true;
        }

        return def;
    }
    else
    {
        return false;
    }
}

function hasNonConfigurable (obj, k)
{
    var prop = Object.getOwnPropertyDescriptor(obj, k);

    if (!prop)
    {
        return false;
    }

    if (prop.value && typeof prop.value === 'object')
    {
        prop = prop.value;
    }

    if (prop.configurable === false)
    {
        return true;
    }

    return false;
}

/**
 * Extends the given `myClass` object's prototype with the properties of `definition`.
 *
 * @function extend
 * @param {Object} ctor The constructor object to mix into.
 * @param {Object} definition A dictionary of functions for the class.
 * @param {boolean} isClassDescriptor Is the definition a class descriptor?
 * @param {Object} [extend] The parent constructor object.
 */
function extend (ctor, definition, isClassDescriptor, extend)
{
    for (var k in definition)
    {
        if (!definition.hasOwnProperty(k))
        {
            continue;
        }

        var def = getProperty(definition, k, isClassDescriptor);

        if (def !== false)
        {
            //  If Extends is used, we will check its prototype to see if the final variable exists.

            var parent = extend || ctor;

            if (hasNonConfigurable(parent.prototype, k))
            {
                //  Just skip the final property
                if (Class.ignoreFinals)
                {
                    continue;
                }

                //  We cannot re-define a property that is configurable=false.
                //  So we will consider them final and throw an error. This is by
                //  default so it is clear to the developer what is happening.
                //  You can set ignoreFinals to true if you need to extend a class
                //  which has configurable=false; it will simply not re-define final properties.
                throw new Error('cannot override final property \'' + k + '\', set Class.ignoreFinals = true to skip');
            }

            Object.defineProperty(ctor.prototype, k, def);
        }
        else
        {
            ctor.prototype[k] = definition[k];
        }
    }
}

/**
 * Applies the given `mixins` to the prototype of `myClass`.
 *
 * @function mixin
 * @param {Object} myClass The constructor object to mix into.
 * @param {Object|Array<Object>} mixins The mixins to apply to the constructor.
 */
function mixin (myClass, mixins)
{
    if (!mixins)
    {
        return;
    }

    if (!Array.isArray(mixins))
    {
        mixins = [ mixins ];
    }

    for (var i = 0; i < mixins.length; i++)
    {
        extend(myClass, mixins[i].prototype || mixins[i]);
    }
}

/**
 * Creates a new class with the given descriptor.
 * The constructor, defined by the name `initialize`,
 * is an optional function. If unspecified, an anonymous
 * function will be used which calls the parent class (if
 * one exists).
 *
 * You can also use `Extends` and `Mixins` to provide subclassing
 * and inheritance.
 *
 * @class Phaser.Class
 * @constructor
 * @param {Object} definition a dictionary of functions for the class
 * @example
 *
 *      var MyClass = new Phaser.Class({
 *
 *          initialize: function() {
 *              this.foo = 2.0;
 *          },
 *
 *          bar: function() {
 *              return this.foo + 5;
 *          }
 *      });
 */
function Class (definition)
{
    if (!definition)
    {
        definition = {};
    }

    //  The variable name here dictates what we see in Chrome debugger
    var initialize;
    var Extends;

    if (definition.initialize)
    {
        if (typeof definition.initialize !== 'function')
        {
            throw new Error('initialize must be a function');
        }

        initialize = definition.initialize;

        //  Usually we should avoid 'delete' in V8 at all costs.
        //  However, its unlikely to make any performance difference
        //  here since we only call this on class creation (i.e. not object creation).
        delete definition.initialize;
    }
    else if (definition.Extends)
    {
        var base = definition.Extends;

        initialize = function ()
        {
            base.apply(this, arguments);
        };
    }
    else
    {
        initialize = function () {};
    }

    if (definition.Extends)
    {
        initialize.prototype = Object.create(definition.Extends.prototype);
        initialize.prototype.constructor = initialize;

        //  For getOwnPropertyDescriptor to work, we need to act directly on the Extends (or Mixin)

        Extends = definition.Extends;

        delete definition.Extends;
    }
    else
    {
        initialize.prototype.constructor = initialize;
    }

    //  Grab the mixins, if they are specified...
    var mixins = null;

    if (definition.Mixins)
    {
        mixins = definition.Mixins;
        delete definition.Mixins;
    }

    //  First, mixin if we can.
    mixin(initialize, mixins);

    //  Now we grab the actual definition which defines the overrides.
    extend(initialize, definition, true, Extends);

    return initialize;
}

Class.extend = extend;
Class.mixin = mixin;
Class.ignoreFinals = false;

module.exports = Class;


/***/ }),

/***/ "../../../src/utils/NOOP.js":
/*!********************************************!*\
  !*** D:/wamp/www/phaser/src/utils/NOOP.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * A NOOP (No Operation) callback function.
 *
 * Used internally by Phaser when it's more expensive to determine if a callback exists
 * than it is to just invoke an empty function.
 *
 * @function Phaser.Utils.NOOP
 * @since 3.0.0
 */
var NOOP = function ()
{
    //  NOOP
};

module.exports = NOOP;


/***/ }),

/***/ "../../../src/utils/object/Extend.js":
/*!*****************************************************!*\
  !*** D:/wamp/www/phaser/src/utils/object/Extend.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var IsPlainObject = __webpack_require__(/*! ./IsPlainObject */ "../../../src/utils/object/IsPlainObject.js");

// @param {boolean} deep - Perform a deep copy?
// @param {object} target - The target object to copy to.
// @return {object} The extended object.

/**
 * This is a slightly modified version of http://api.jquery.com/jQuery.extend/
 *
 * @function Phaser.Utils.Objects.Extend
 * @since 3.0.0
 *
 * @return {object} The extended object.
 */
var Extend = function ()
{
    var options, name, src, copy, copyIsArray, clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;

    // Handle a deep copy situation
    if (typeof target === 'boolean')
    {
        deep = target;
        target = arguments[1] || {};

        // skip the boolean and the target
        i = 2;
    }

    // extend Phaser if only one argument is passed
    if (length === i)
    {
        target = this;
        --i;
    }

    for (; i < length; i++)
    {
        // Only deal with non-null/undefined values
        if ((options = arguments[i]) != null)
        {
            // Extend the base object
            for (name in options)
            {
                src = target[name];
                copy = options[name];

                // Prevent never-ending loop
                if (target === copy)
                {
                    continue;
                }

                // Recurse if we're merging plain objects or arrays
                if (deep && copy && (IsPlainObject(copy) || (copyIsArray = Array.isArray(copy))))
                {
                    if (copyIsArray)
                    {
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];
                    }
                    else
                    {
                        clone = src && IsPlainObject(src) ? src : {};
                    }

                    // Never move original objects, clone them
                    target[name] = Extend(deep, clone, copy);

                // Don't bring in undefined values
                }
                else if (copy !== undefined)
                {
                    target[name] = copy;
                }
            }
        }
    }

    // Return the modified object
    return target;
};

module.exports = Extend;


/***/ }),

/***/ "../../../src/utils/object/GetFastValue.js":
/*!***********************************************************!*\
  !*** D:/wamp/www/phaser/src/utils/object/GetFastValue.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Finds the key within the top level of the {@link source} object, or returns {@link defaultValue}
 *
 * @function Phaser.Utils.Objects.GetFastValue
 * @since 3.0.0
 *
 * @param {object} source - The object to search
 * @param {string} key - The key for the property on source. Must exist at the top level of the source object (no periods)
 * @param {*} [defaultValue] - The default value to use if the key does not exist.
 *
 * @return {*} The value if found; otherwise, defaultValue (null if none provided)
 */
var GetFastValue = function (source, key, defaultValue)
{
    var t = typeof(source);

    if (!source || t === 'number' || t === 'string')
    {
        return defaultValue;
    }
    else if (source.hasOwnProperty(key) && source[key] !== undefined)
    {
        return source[key];
    }
    else
    {
        return defaultValue;
    }
};

module.exports = GetFastValue;


/***/ }),

/***/ "../../../src/utils/object/GetValue.js":
/*!*******************************************************!*\
  !*** D:/wamp/www/phaser/src/utils/object/GetValue.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

//  Source object
//  The key as a string, or an array of keys, i.e. 'banner', or 'banner.hideBanner'
//  The default value to use if the key doesn't exist

/**
 * Retrieves a value from an object.
 *
 * @function Phaser.Utils.Objects.GetValue
 * @since 3.0.0
 *
 * @param {object} source - The object to retrieve the value from.
 * @param {string} key - The name of the property to retrieve from the object. If a property is nested, the names of its preceding properties should be separated by a dot (`.`) - `banner.hideBanner` would return the value of the `hideBanner` property from the object stored in the `banner` property of the `source` object.
 * @param {*} defaultValue - The value to return if the `key` isn't found in the `source` object.
 *
 * @return {*} The value of the requested key.
 */
var GetValue = function (source, key, defaultValue)
{
    if (!source || typeof source === 'number')
    {
        return defaultValue;
    }
    else if (source.hasOwnProperty(key))
    {
        return source[key];
    }
    else if (key.indexOf('.') !== -1)
    {
        var keys = key.split('.');
        var parent = source;
        var value = defaultValue;

        //  Use for loop here so we can break early
        for (var i = 0; i < keys.length; i++)
        {
            if (parent.hasOwnProperty(keys[i]))
            {
                //  Yes it has a key property, let's carry on down
                value = parent[keys[i]];

                parent = parent[keys[i]];
            }
            else
            {
                //  Can't go any further, so reset to default
                value = defaultValue;
                break;
            }
        }

        return value;
    }
    else
    {
        return defaultValue;
    }
};

module.exports = GetValue;


/***/ }),

/***/ "../../../src/utils/object/IsPlainObject.js":
/*!************************************************************!*\
  !*** D:/wamp/www/phaser/src/utils/object/IsPlainObject.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * This is a slightly modified version of jQuery.isPlainObject.
 * A plain object is an object whose internal class property is [object Object].
 *
 * @function Phaser.Utils.Objects.IsPlainObject
 * @since 3.0.0
 *
 * @param {object} obj - The object to inspect.
 *
 * @return {boolean} `true` if the object is plain, otherwise `false`.
 */
var IsPlainObject = function (obj)
{
    // Not plain objects:
    // - Any object or value whose internal [[Class]] property is not "[object Object]"
    // - DOM nodes
    // - window
    if (typeof(obj) !== 'object' || obj.nodeType || obj === obj.window)
    {
        return false;
    }

    // Support: Firefox <20
    // The try/catch suppresses exceptions thrown when attempting to access
    // the "constructor" property of certain host objects, ie. |window.location|
    // https://bugzilla.mozilla.org/show_bug.cgi?id=814622
    try
    {
        if (obj.constructor && !({}).hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf'))
        {
            return false;
        }
    }
    catch (e)
    {
        return false;
    }

    // If the function hasn't returned already, we're confident that
    // |obj| is a plain object, created by {} or constructed with new Object
    return true;
};

module.exports = IsPlainObject;


/***/ }),

/***/ "./SpineFile.js":
/*!**********************!*\
  !*** ./SpineFile.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var Class = __webpack_require__(/*! ../../../src/utils/Class */ "../../../src/utils/Class.js");
var GetFastValue = __webpack_require__(/*! ../../../src/utils/object/GetFastValue */ "../../../src/utils/object/GetFastValue.js");
var ImageFile = __webpack_require__(/*! ../../../src/loader/filetypes/ImageFile.js */ "../../../src/loader/filetypes/ImageFile.js");
var IsPlainObject = __webpack_require__(/*! ../../../src/utils/object/IsPlainObject */ "../../../src/utils/object/IsPlainObject.js");
var JSONFile = __webpack_require__(/*! ../../../src/loader/filetypes/JSONFile.js */ "../../../src/loader/filetypes/JSONFile.js");
var MultiFile = __webpack_require__(/*! ../../../src/loader/MultiFile.js */ "../../../src/loader/MultiFile.js");
var TextFile = __webpack_require__(/*! ../../../src/loader/filetypes/TextFile.js */ "../../../src/loader/filetypes/TextFile.js");

/**
 * @typedef {object} Phaser.Loader.FileTypes.SpineFileConfig
 *
 * @property {string} key - The key of the file. Must be unique within both the Loader and the Texture Manager.
 * @property {string} [textureURL] - The absolute or relative URL to load the texture image file from.
 * @property {string} [textureExtension='png'] - The default file extension to use for the image texture if no url is provided.
 * @property {XHRSettingsObject} [textureXhrSettings] - Extra XHR Settings specifically for the texture image file.
 * @property {string} [normalMap] - The filename of an associated normal map. It uses the same path and url to load as the texture image.
 * @property {string} [atlasURL] - The absolute or relative URL to load the atlas data file from.
 * @property {string} [atlasExtension='txt'] - The default file extension to use for the atlas data if no url is provided.
 * @property {XHRSettingsObject} [atlasXhrSettings] - Extra XHR Settings specifically for the atlas data file.
 */

/**
 * @classdesc
 * A Spine File suitable for loading by the Loader.
 *
 * These are created when you use the Phaser.Loader.LoaderPlugin#spine method and are not typically created directly.
 * 
 * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#spine.
 *
 * @class SpineFile
 * @extends Phaser.Loader.MultiFile
 * @memberof Phaser.Loader.FileTypes
 * @constructor
 *
 * @param {Phaser.Loader.LoaderPlugin} loader - A reference to the Loader that is responsible for this file.
 * @param {(string|Phaser.Loader.FileTypes.UnityAtlasFileConfig)} key - The key to use for this file, or a file configuration object.
 * @param {string|string[]} [textureURL] - The absolute or relative URL to load the texture image file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
 * @param {string} [atlasURL] - The absolute or relative URL to load the texture atlas data file from. If undefined or `null` it will be set to `<key>.txt`, i.e. if `key` was "alien" then the URL will be "alien.txt".
 * @param {XHRSettingsObject} [textureXhrSettings] - An XHR Settings configuration object for the atlas image file. Used in replacement of the Loaders default XHR Settings.
 * @param {XHRSettingsObject} [atlasXhrSettings] - An XHR Settings configuration object for the atlas data file. Used in replacement of the Loaders default XHR Settings.
 */
var SpineFile = new Class({

    Extends: MultiFile,

    initialize:

    function SpineFile (loader, key, jsonURL, atlasURL, jsonXhrSettings, atlasXhrSettings)
    {
        var json;
        var atlas;

        if (IsPlainObject(key))
        {
            var config = key;

            key = GetFastValue(config, 'key');

            json = new JSONFile(loader, {
                key: key,
                url: GetFastValue(config, 'jsonURL'),
                extension: GetFastValue(config, 'jsonExtension', 'json'),
                xhrSettings: GetFastValue(config, 'jsonXhrSettings')
            });

            atlas = new TextFile(loader, {
                key: key,
                url: GetFastValue(config, 'atlasURL'),
                extension: GetFastValue(config, 'atlasExtension', 'atlas'),
                xhrSettings: GetFastValue(config, 'atlasXhrSettings')
            });
        }
        else
        {
            json = new JSONFile(loader, key, jsonURL, jsonXhrSettings);
            atlas = new TextFile(loader, key, atlasURL, atlasXhrSettings);
        }
        
        atlas.cache = loader.cacheManager.custom.spine;

        MultiFile.call(this, loader, 'spine', key, [ json, atlas ]);
    },

    /**
     * Called by each File when it finishes loading.
     *
     * @method Phaser.Loader.MultiFile#onFileComplete
     * @since 3.7.0
     *
     * @param {Phaser.Loader.File} file - The File that has completed processing.
     */
    onFileComplete: function (file)
    {
        var index = this.files.indexOf(file);

        if (index !== -1)
        {
            this.pending--;

            if (file.type === 'text')
            {
                //  Inspect the data for the files to now load
                var content = file.data.split('\n');

                //  Extract the textures
                var textures = [];

                for (var t = 0; t < content.length; t++)
                {
                    var line = content[t];

                    if (line.trim() === '' && t < content.length - 1)
                    {
                        line = content[t + 1];

                        textures.push(line);
                    }
                }

                var config = this.config;
                var loader = this.loader;

                var currentBaseURL = loader.baseURL;
                var currentPath = loader.path;
                var currentPrefix = loader.prefix;

                var baseURL = GetFastValue(config, 'baseURL', currentBaseURL);
                var path = GetFastValue(config, 'path', currentPath);
                var prefix = GetFastValue(config, 'prefix', currentPrefix);
                var textureXhrSettings = GetFastValue(config, 'textureXhrSettings');

                loader.setBaseURL(baseURL);
                loader.setPath(path);
                loader.setPrefix(prefix);

                for (var i = 0; i < textures.length; i++)
                {
                    var textureURL = textures[i];

                    var key = '_SP_' + textureURL;

                    var image = new ImageFile(loader, key, textureURL, textureXhrSettings);

                    this.addToMultiFile(image);

                    loader.addFile(image);
                }

                //  Reset the loader settings
                loader.setBaseURL(currentBaseURL);
                loader.setPath(currentPath);
                loader.setPrefix(currentPrefix);
            }
        }
    },

    /**
     * Adds this file to its target cache upon successful loading and processing.
     *
     * @method Phaser.Loader.FileTypes.SpineFile#addToCache
     * @since 3.16.0
     */
    addToCache: function ()
    {
        if (this.isReadyToProcess())
        {
            var fileJSON = this.files[0];

            fileJSON.addToCache();

            var fileText = this.files[1];

            fileText.addToCache();

            for (var i = 2; i < this.files.length; i++)
            {
                var file = this.files[i];

                var key = file.key.substr(4).trim();

                this.loader.textureManager.addImage(key, file.data);

                file.pendingDestroy();
            }

            this.complete = true;
        }
    }

});

/**
 * Adds a Unity YAML based Texture Atlas, or array of atlases, to the current load queue.
 *
 * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
 * 
 * ```javascript
 * function preload ()
 * {
 *     this.load.unityAtlas('mainmenu', 'images/MainMenu.png', 'images/MainMenu.txt');
 * }
 * ```
 *
 * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
 * or if it's already running, when the next free load slot becomes available. This happens automatically if you
 * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
 * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
 * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
 * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
 * loaded.
 * 
 * If you call this from outside of `preload` then you are responsible for starting the Loader afterwards and monitoring
 * its events to know when it's safe to use the asset. Please see the Phaser.Loader.LoaderPlugin class for more details.
 *
 * Phaser expects the atlas data to be provided in a YAML formatted text file as exported from Unity.
 * 
 * Phaser can load all common image types: png, jpg, gif and any other format the browser can natively handle.
 *
 * The key must be a unique String. It is used to add the file to the global Texture Manager upon a successful load.
 * The key should be unique both in terms of files being loaded and files already present in the Texture Manager.
 * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
 * then remove it from the Texture Manager first, before loading a new one.
 *
 * Instead of passing arguments you can pass a configuration object, such as:
 * 
 * ```javascript
 * this.load.unityAtlas({
 *     key: 'mainmenu',
 *     textureURL: 'images/MainMenu.png',
 *     atlasURL: 'images/MainMenu.txt'
 * });
 * ```
 *
 * See the documentation for `Phaser.Loader.FileTypes.SpineFileConfig` for more details.
 *
 * Once the atlas has finished loading you can use frames from it as textures for a Game Object by referencing its key:
 * 
 * ```javascript
 * this.load.unityAtlas('mainmenu', 'images/MainMenu.png', 'images/MainMenu.json');
 * // and later in your game ...
 * this.add.image(x, y, 'mainmenu', 'background');
 * ```
 *
 * To get a list of all available frames within an atlas please consult your Texture Atlas software.
 *
 * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
 * key. For example, if the prefix was `MENU.` and the key was `Background` the final key will be `MENU.Background` and
 * this is what you would use to retrieve the image from the Texture Manager.
 *
 * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 *
 * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "alien"
 * and no URL is given then the Loader will set the URL to be "alien.png". It will always add `.png` as the extension, although
 * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
 *
 * Phaser also supports the automatic loading of associated normal maps. If you have a normal map to go with this image,
 * then you can specify it by providing an array as the `url` where the second element is the normal map:
 * 
 * ```javascript
 * this.load.unityAtlas('mainmenu', [ 'images/MainMenu.png', 'images/MainMenu-n.png' ], 'images/MainMenu.txt');
 * ```
 *
 * Or, if you are using a config object use the `normalMap` property:
 * 
 * ```javascript
 * this.load.unityAtlas({
 *     key: 'mainmenu',
 *     textureURL: 'images/MainMenu.png',
 *     normalMap: 'images/MainMenu-n.png',
 *     atlasURL: 'images/MainMenu.txt'
 * });
 * ```
 *
 * The normal map file is subject to the same conditions as the image file with regard to the path, baseURL, CORs and XHR Settings.
 * Normal maps are a WebGL only feature.
 *
 * Note: The ability to load this type of file will only be available if the Unity Atlas File type has been built into Phaser.
 * It is available in the default build but can be excluded from custom builds.
 *
 * @method Phaser.Loader.LoaderPlugin#spine
 * @fires Phaser.Loader.LoaderPlugin#addFileEvent
 * @since 3.16.0
 *
 * @param {(string|Phaser.Loader.FileTypes.SpineFileConfig|Phaser.Loader.FileTypes.SpineFileConfig[])} key - The key to use for this file, or a file configuration object, or array of them.
 * @param {string|string[]} [textureURL] - The absolute or relative URL to load the texture image file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
 * @param {string} [atlasURL] - The absolute or relative URL to load the texture atlas data file from. If undefined or `null` it will be set to `<key>.txt`, i.e. if `key` was "alien" then the URL will be "alien.txt".
 * @param {XHRSettingsObject} [textureXhrSettings] - An XHR Settings configuration object for the atlas image file. Used in replacement of the Loaders default XHR Settings.
 * @param {XHRSettingsObject} [atlasXhrSettings] - An XHR Settings configuration object for the atlas data file. Used in replacement of the Loaders default XHR Settings.
 *
 * @return {Phaser.Loader.LoaderPlugin} The Loader instance.
FileTypesManager.register('spine', function (key, jsonURL, atlasURL, jsonXhrSettings, atlasXhrSettings)
{
    var multifile;

    //  Supports an Object file definition in the key argument
    //  Or an array of objects in the key argument
    //  Or a single entry where all arguments have been defined

    if (Array.isArray(key))
    {
        for (var i = 0; i < key.length; i++)
        {
            multifile = new SpineFile(this, key[i]);

            this.addFile(multifile.files);
        }
    }
    else
    {
        multifile = new SpineFile(this, key, jsonURL, atlasURL, jsonXhrSettings, atlasXhrSettings);

        this.addFile(multifile.files);
    }

    return this;
});
 */

module.exports = SpineFile;


/***/ }),

/***/ "./SpinePlugin.js":
/*!************************!*\
  !*** ./SpinePlugin.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var Class = __webpack_require__(/*! ../../../src/utils/Class */ "../../../src/utils/Class.js");
var GetValue = __webpack_require__(/*! ../../../src/utils/object/GetValue */ "../../../src/utils/object/GetValue.js");
var ScenePlugin = __webpack_require__(/*! ../../../src/plugins/ScenePlugin */ "../../../src/plugins/ScenePlugin.js");
var SpineFile = __webpack_require__(/*! ./SpineFile */ "./SpineFile.js");
var Spine = __webpack_require__(/*! Spine */ "./runtimes/spine-both.js");
var SpineGameObject = __webpack_require__(/*! ./gameobject/SpineGameObject */ "./gameobject/SpineGameObject.js");
var Matrix4 = __webpack_require__(/*! ../../../src/math/Matrix4 */ "../../../src/math/Matrix4.js");

/**
 * @classdesc
 * TODO
 *
 * @class SpinePlugin
 * @extends Phaser.Plugins.ScenePlugin
 * @constructor
 * @since 3.19.0
 *
 * @param {Phaser.Scene} scene - A reference to the Scene that has installed this plugin.
 * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the Phaser Plugin Manager.
 */
var SpinePlugin = new Class({

    Extends: ScenePlugin,

    initialize:

    function SpinePlugin (scene, pluginManager)
    {
        ScenePlugin.call(this, scene, pluginManager);

        var game = pluginManager.game;

        this.isWebGL = (game.config.renderType === 2);

        //  Create a custom cache to store the spine data (.atlas files)
        this.cache = game.cache.addCustom('spine');

        this.spineTextures = game.cache.addCustom('spineTextures');

        this.json = game.cache.json;

        this.textures = game.textures;

        this.skeletonRenderer;

        this.drawDebug = false;

        this.gl;
        this.mvp;
        this.shader;
        this.batcher;
        this.debugRenderer;
        this.debugShader;

        console.log('SpinePlugin created', '- WebGL:', this.isWebGL);

        if (this.isWebGL)
        {
            this.runtime = Spine.webgl;

            this.gl = game.renderer.gl;

            this.getAtlas = this.getAtlasWebGL;
        }
        else
        {
            this.runtime = Spine.canvas;

            this.getAtlas = this.getAtlasCanvas;
        }

        //  Register our file type
        pluginManager.registerFileType('spine', this.spineFileCallback, scene);

        //  Register our game object
        pluginManager.registerGameObject('spine', this.createSpineFactory(this));
    },

    boot: function ()
    {
        if (this.isWebGL)
        {
            this.bootWebGL();
        }
        else
        {
            this.bootCanvas();
        }

        var eventEmitter = this.systems.events;

        eventEmitter.once('shutdown', this.shutdown, this);
        eventEmitter.once('destroy', this.destroy, this);
    },

    bootCanvas: function ()
    {
        this.skeletonRenderer = new this.runtime.SkeletonRenderer(this.scene.sys.context);
    },

    getAtlasCanvas: function (key)
    {
        var atlasData = this.cache.get(key);

        if (!atlasData)
        {
            console.warn('No atlas data for: ' + key);
            return;
        }

        var atlas;
        var spineTextures = this.spineTextures;

        if (spineTextures.has(key))
        {
            atlas = new Spine.TextureAtlas(atlasData, function ()
            {
                return spineTextures.get(key);
            });
        }
        else
        {
            var textures = this.textures;

            atlas = new Spine.TextureAtlas(atlasData, function (path)
            {
                var canvasTexture = new Spine.canvas.CanvasTexture(textures.get(path).getSourceImage());

                spineTextures.add(key, canvasTexture);

                return canvasTexture;
            });
        }

        return atlas;
    },

    bootWebGL: function ()
    {
        var gl = this.gl;
        var runtime = this.runtime;

        this.mvp = new Matrix4();

        //  Create a simple shader, mesh, model-view-projection matrix and SkeletonRenderer.
        this.shader = runtime.Shader.newTwoColoredTextured(gl);
        this.batcher = new runtime.PolygonBatcher(gl);

        this.skeletonRenderer = new runtime.SkeletonRenderer(gl);

        this.shapes = new runtime.ShapeRenderer(gl);

        this.debugRenderer = new runtime.SkeletonDebugRenderer(gl);

        this.debugShader = runtime.Shader.newColored(gl);
    },

    getAtlasWebGL: function (key)
    {
        var atlasData = this.cache.get(key);

        if (!atlasData)
        {
            console.warn('No atlas data for: ' + key);
            return;
        }

        var atlas;
        var spineTextures = this.spineTextures;

        if (spineTextures.has(key))
        {
            atlas = new Spine.TextureAtlas(atlasData, function ()
            {
                return spineTextures.get(key);
            });
        }
        else
        {
            var textures = this.textures;

            var gl = this.gl;

            atlas = new Spine.TextureAtlas(atlasData, function (path)
            {
                var glTexture = new Spine.webgl.GLTexture(gl, textures.get(path).getSourceImage());

                spineTextures.add(key, glTexture);

                return glTexture;
            });
        }

        return atlas;
    },

    spineFileCallback: function (key, jsonURL, atlasURL, jsonXhrSettings, atlasXhrSettings)
    {
        var multifile;
   
        if (Array.isArray(key))
        {
            for (var i = 0; i < key.length; i++)
            {
                multifile = new SpineFile(this, key[i]);
    
                this.addFile(multifile.files);
            }
        }
        else
        {
            multifile = new SpineFile(this, key, jsonURL, atlasURL, jsonXhrSettings, atlasXhrSettings);

            this.addFile(multifile.files);
        }
        
        return this;
    },

    /**
     * Creates a new Spine Game Object and adds it to the Scene.
     *
     * @method Phaser.GameObjects.GameObjectFactory#spineFactory
     * @since 3.16.0
     * 
     * @param {number} x - The horizontal position of this Game Object.
     * @param {number} y - The vertical position of this Game Object.
     * @param {string} texture - The key of the Texture this Game Object will use to render with, as stored in the Texture Manager.
     * @param {(string|integer)} [frame] - An optional frame from the Texture this Game Object is rendering with.
     *
     * @return {Phaser.GameObjects.Spine} The Game Object that was created.
     */
    createSpineFactory: function (plugin)
    {
        var callback = function (x, y, key, animationName, loop)
        {
            var spineGO = new SpineGameObject(this.scene, plugin, x, y, key, animationName, loop);

            this.displayList.add(spineGO);
            this.updateList.add(spineGO);
        
            return spineGO;
        };

        return callback;
    },

    getRuntime: function ()
    {
        return this.runtime;
    },

    createSkeleton: function (key, skeletonJSON)
    {
        var atlasKey = key;
        var jsonKey = key;

        if (key.indexOf('.'))
        {
            var parts = key.split('.');

            atlasKey = parts.shift();
            jsonKey = parts.join('.');
        }

        var atlas = this.getAtlas(atlasKey);

        var atlasLoader = new Spine.AtlasAttachmentLoader(atlas);
        
        var skeletonJson = new Spine.SkeletonJson(atlasLoader);

        var data;

        if (skeletonJSON)
        {
            data = skeletonJSON;
        }
        else
        {
            var json = this.json.get(atlasKey);

            data = GetValue(json, jsonKey);
        }

        var skeletonData = skeletonJson.readSkeletonData(data);

        var skeleton = new Spine.Skeleton(skeletonData);
    
        return { skeletonData: skeletonData, skeleton: skeleton };
    },

    getBounds: function (skeleton)
    {
        var offset = new Spine.Vector2();
        var size = new Spine.Vector2();

        skeleton.getBounds(offset, size, []);

        return { offset: offset, size: size };
    },

    createAnimationState: function (skeleton)
    {
        var stateData = new Spine.AnimationStateData(skeleton.data);

        var state = new Spine.AnimationState(stateData);

        return { stateData: stateData, state: state };
    },

    /**
     * The Scene that owns this plugin is shutting down.
     * We need to kill and reset all internal properties as well as stop listening to Scene events.
     *
     * @method Camera3DPlugin#shutdown
     * @private
     * @since 3.0.0
     */
    shutdown: function ()
    {
        var eventEmitter = this.systems.events;

        eventEmitter.off('shutdown', this.shutdown, this);
    },

    /**
     * The Scene that owns this plugin is being destroyed.
     * We need to shutdown and then kill off all external references.
     *
     * @method Camera3DPlugin#destroy
     * @private
     * @since 3.0.0
     */
    destroy: function ()
    {
        this.shutdown();

        this.pluginManager.removeGameObject('spine', true, true);

        this.pluginManager = null;
        this.game = null;
        this.scene = null;
        this.systems = null;

        //  Create a custom cache to store the spine data (.atlas files)
        this.cache = null;
        this.spineTextures = null;
        this.json = null;
        this.textures = null;
        this.skeletonRenderer = null;
        this.gl = null;
        this.mvp = null;
        this.shader = null;
        this.batcher = null;
        this.debugRenderer = null;
        this.debugShader = null;
    }

});

module.exports = SpinePlugin;


/***/ }),

/***/ "./gameobject/SpineGameObject.js":
/*!***************************************!*\
  !*** ./gameobject/SpineGameObject.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var Class = __webpack_require__(/*! ../../../../src/utils/Class */ "../../../src/utils/Class.js");
var ComponentsAlpha = __webpack_require__(/*! ../../../../src/gameobjects/components/Alpha */ "../../../src/gameobjects/components/Alpha.js");
var ComponentsBlendMode = __webpack_require__(/*! ../../../../src/gameobjects/components/BlendMode */ "../../../src/gameobjects/components/BlendMode.js");
var ComponentsComputedSize = __webpack_require__(/*! ../../../../src/gameobjects/components/ComputedSize */ "../../../src/gameobjects/components/ComputedSize.js");
var ComponentsDepth = __webpack_require__(/*! ../../../../src/gameobjects/components/Depth */ "../../../src/gameobjects/components/Depth.js");
var ComponentsFlip = __webpack_require__(/*! ../../../../src/gameobjects/components/Flip */ "../../../src/gameobjects/components/Flip.js");
var ComponentsScrollFactor = __webpack_require__(/*! ../../../../src/gameobjects/components/ScrollFactor */ "../../../src/gameobjects/components/ScrollFactor.js");
var ComponentsTransform = __webpack_require__(/*! ../../../../src/gameobjects/components/Transform */ "../../../src/gameobjects/components/Transform.js");
var ComponentsVisible = __webpack_require__(/*! ../../../../src/gameobjects/components/Visible */ "../../../src/gameobjects/components/Visible.js");
var GameObject = __webpack_require__(/*! ../../../../src/gameobjects/GameObject */ "../../../src/gameobjects/GameObject.js");
var SpineGameObjectRender = __webpack_require__(/*! ./SpineGameObjectRender */ "./gameobject/SpineGameObjectRender.js");

/**
 * @classdesc
 * TODO
 *
 * @class SpineGameObject
 * @constructor
 * @since 3.16.0
 *
 * @param {Phaser.Scene} scene - A reference to the Scene that has installed this plugin.
 * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the Phaser Plugin Manager.
 */
var SpineGameObject = new Class({

    Extends: GameObject,

    Mixins: [
        ComponentsAlpha,
        ComponentsBlendMode,
        ComponentsComputedSize,
        ComponentsDepth,
        ComponentsFlip,
        ComponentsScrollFactor,
        ComponentsTransform,
        ComponentsVisible,
        SpineGameObjectRender
    ],

    initialize:

    function SpineGameObject (scene, plugin, x, y, key, animationName, loop)
    {
        GameObject.call(this, scene, 'Spine');

        this.plugin = plugin;

        this.root = null;
        this.skeleton = null;
        this.skeletonData = null;

        this.state = null;
        this.stateData = null;

        this.drawDebug = false;

        this.timeScale = 1;

        this.displayOriginX = 0;
        this.displayOriginY = 0;

        this.setPosition(x, y);

        if (key)
        {
            this.setSkeleton(key, animationName, loop);
        }
    },

    setSkeletonFromJSON: function (atlasDataKey, skeletonJSON, animationName, loop)
    {
        return this.setSkeleton(atlasDataKey, skeletonJSON, animationName, loop);
    },

    setSkeleton: function (atlasDataKey, animationName, loop, skeletonJSON)
    {
        var data = this.plugin.createSkeleton(atlasDataKey, skeletonJSON);

        this.skeletonData = data.skeletonData;

        var skeleton = data.skeleton;

        skeleton.setToSetupPose();

        skeleton.updateWorldTransform();

        skeleton.setSkinByName('default');

        this.skeleton = skeleton;

        //  AnimationState
        data = this.plugin.createAnimationState(skeleton);

        if (this.state)
        {
            this.state.clearListeners();
            this.state.clearListenerNotifications();
        }

        this.state = data.state;

        this.stateData = data.stateData;

        var _this = this;

        this.state.addListener({
            event: function (trackIndex, event)
            {
                //  Event on a Track
                _this.emit('spine.event', _this, trackIndex, event);
            },
            complete: function (trackIndex, loopCount)
            {
                //  Animation on Track x completed, loop count
                _this.emit('spine.complete', _this, trackIndex, loopCount);
            },
            start: function (trackIndex)
            {
                //  Animation on Track x started
                _this.emit('spine.start', _this, trackIndex);
            },
            end: function (trackIndex)
            {
                //  Animation on Track x ended
                _this.emit('spine.end', _this, trackIndex);
            }
        });

        if (animationName)
        {
            this.setAnimation(0, animationName, loop);
        }

        this.root = this.getRootBone();

        this.skeleton.scaleX = this.scaleX;
        this.skeleton.scaleY = this.scaleY;

        this.skeleton.updateWorldTransform();

        var w = this.skeletonData.width;
        var h = this.skeletonData.height;

        this.width = w;
        this.height = h;

        this.displayOriginX = w / 2;
        this.displayOriginY = h / 2;

        return this;
    },

    // http://esotericsoftware.com/spine-runtimes-guide

    getAnimationList: function ()
    {
        var output = [];

        var skeletonData = this.skeletonData;

        if (skeletonData)
        {
            for (var i = 0; i < skeletonData.animations.length; i++)
            {
                output.push(skeletonData.animations[i].name);
            }
        }

        return output;
    },

    play: function (animationName, loop)
    {
        if (loop === undefined)
        {
            loop = false;
        }

        return this.setAnimation(0, animationName, loop);
    },

    setAnimation: function (trackIndex, animationName, loop)
    {
        this.state.setAnimation(trackIndex, animationName, loop);

        return this;
    },

    addAnimation: function (trackIndex, animationName, loop, delay)
    {
        return this.state.addAnimation(trackIndex, animationName, loop, delay);
    },

    setEmptyAnimation: function (trackIndex, mixDuration)
    {
        this.state.setEmptyAnimation(trackIndex, mixDuration);

        return this;
    },

    clearTrack: function (trackIndex)
    {
        this.state.clearTrack(trackIndex);

        return this;
    },
     
    clearTracks: function ()
    {
        this.state.clearTracks();

        return this;
    },

    setSkinByName: function (skinName)
    {
        this.skeleton.setSkinByName(skinName);

        return this;
    },

    setSkin: function (newSkin)
    {
        var skeleton = this.skeleton;

        skeleton.setSkin(newSkin);

        skeleton.setSlotsToSetupPose();

        this.state.apply(skeleton);

        return this;
    },

    setMix: function (fromName, toName, duration)
    {
        this.stateData.setMix(fromName, toName, duration);

        return this;
    },

    getRootBone: function ()
    {
        return this.skeleton.getRootBone();
    },

    findBone: function (boneName)
    {
        return this.skeleton.findBone(boneName);
    },

    findBoneIndex: function (boneName)
    {
        return this.skeleton.findBoneIndex(boneName);
    },

    findSlot: function (slotName)
    {
        return this.skeleton.findSlot(slotName);
    },

    findSlotIndex: function (slotName)
    {
        return this.skeleton.findSlotIndex(slotName);
    },

    getBounds: function ()
    {
        return this.plugin.getBounds(this.skeleton);
    },

    preUpdate: function (time, delta)
    {
        var skeleton = this.skeleton;

        this.state.update((delta / 1000) * this.timeScale);

        this.state.apply(skeleton);

        this.emit('spine.update', skeleton);

        skeleton.updateWorldTransform();
    },

    /**
     * Internal destroy handler, called as part of the destroy process.
     *
     * @method Phaser.GameObjects.RenderTexture#preDestroy
     * @protected
     * @since 3.16.0
     */
    preDestroy: function ()
    {
        if (this.state)
        {
            this.state.clearListeners();
            this.state.clearListenerNotifications();
        }

        this.plugin = null;

        this.skeleton = null;
        this.skeletonData = null;

        this.state = null;
        this.stateData = null;
    }

});

module.exports = SpineGameObject;


/***/ }),

/***/ "./gameobject/SpineGameObjectCanvasRenderer.js":
/*!*****************************************************!*\
  !*** ./gameobject/SpineGameObjectCanvasRenderer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var SetTransform = __webpack_require__(/*! ../../../../src/renderer/canvas/utils/SetTransform */ "../../../src/renderer/canvas/utils/SetTransform.js");

/**
 * Renders this Game Object with the Canvas Renderer to the given Camera.
 * The object will not render if any of its renderFlags are set or it is being actively filtered out by the Camera.
 * This method should not be called directly. It is a utility function of the Render module.
 *
 * @method Phaser.GameObjects.SpineGameObject#renderCanvas
 * @since 3.16.0
 * @private
 *
 * @param {Phaser.Renderer.Canvas.CanvasRenderer} renderer - A reference to the current active Canvas renderer.
 * @param {Phaser.GameObjects.SpineGameObject} src - The Game Object being rendered in this call.
 * @param {number} interpolationPercentage - Reserved for future use and custom pipelines.
 * @param {Phaser.Cameras.Scene2D.Camera} camera - The Camera that is rendering the Game Object.
 * @param {Phaser.GameObjects.Components.TransformMatrix} parentMatrix - This transform matrix is defined if the game object is nested
 */
var SpineGameObjectCanvasRenderer = function (renderer, src, interpolationPercentage, camera, parentMatrix)
{
    var context = renderer.currentContext;

    var plugin = src.plugin;
    var skeleton = src.skeleton;
    var skeletonRenderer = plugin.skeletonRenderer;

    if (!skeleton || !SetTransform(renderer, context, src, camera, parentMatrix))
    {
        return;
    }

    skeletonRenderer.ctx = context;

    context.save();

    skeletonRenderer.draw(skeleton);

    if (plugin.drawDebug || src.drawDebug)
    {
        context.strokeStyle = '#00ff00';
        context.beginPath();
        context.moveTo(-1000, 0);
        context.lineTo(1000, 0);
        context.moveTo(0, -1000);
        context.lineTo(0, 1000);
        context.stroke();
    }

    context.restore();
};

module.exports = SpineGameObjectCanvasRenderer;


/***/ }),

/***/ "./gameobject/SpineGameObjectRender.js":
/*!*********************************************!*\
  !*** ./gameobject/SpineGameObjectRender.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var renderWebGL = __webpack_require__(/*! ../../../../src/utils/NOOP */ "../../../src/utils/NOOP.js");
var renderCanvas = __webpack_require__(/*! ../../../../src/utils/NOOP */ "../../../src/utils/NOOP.js");

if (true)
{
    renderWebGL = __webpack_require__(/*! ./SpineGameObjectWebGLRenderer */ "./gameobject/SpineGameObjectWebGLRenderer.js");
}

if (true)
{
    renderCanvas = __webpack_require__(/*! ./SpineGameObjectCanvasRenderer */ "./gameobject/SpineGameObjectCanvasRenderer.js");
}

module.exports = {

    renderWebGL: renderWebGL,
    renderCanvas: renderCanvas

};


/***/ }),

/***/ "./gameobject/SpineGameObjectWebGLRenderer.js":
/*!****************************************************!*\
  !*** ./gameobject/SpineGameObjectWebGLRenderer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var CounterClockwise = __webpack_require__(/*! ../../../../src/math/angle/CounterClockwise */ "../../../src/math/angle/CounterClockwise.js");
var RadToDeg = __webpack_require__(/*! ../../../../src/math/RadToDeg */ "../../../src/math/RadToDeg.js");

/**
 * Renders this Game Object with the Canvas Renderer to the given Camera.
 * The object will not render if any of its renderFlags are set or it is being actively filtered out by the Camera.
 * This method should not be called directly. It is a utility function of the Render module.
 *
 * @method Phaser.GameObjects.SpineGameObject#renderCanvas
 * @since 3.16.0
 * @private
 *
 * @param {Phaser.Renderer.Canvas.CanvasRenderer} renderer - A reference to the current active Canvas renderer.
 * @param {Phaser.GameObjects.SpineGameObject} src - The Game Object being rendered in this call.
 * @param {number} interpolationPercentage - Reserved for future use and custom pipelines.
 * @param {Phaser.Cameras.Scene2D.Camera} camera - The Camera that is rendering the Game Object.
 * @param {Phaser.GameObjects.Components.TransformMatrix} parentMatrix - This transform matrix is defined if the game object is nested
 */
var SpineGameObjectWebGLRenderer = function (renderer, src, interpolationPercentage, camera, parentMatrix)
{
    var plugin = src.plugin;
    var mvp = plugin.mvp;

    var shader = plugin.shader;
    var batcher = plugin.batcher;
    var runtime = plugin.runtime;
    var skeleton = src.skeleton;
    var skeletonRenderer = plugin.skeletonRenderer;

    if (!skeleton)
    {
        return;
    }

    if (renderer.newType)
    {
        renderer.clearPipeline();
    }

    var camMatrix = renderer._tempMatrix1;
    var spriteMatrix = renderer._tempMatrix2;
    var calcMatrix = renderer._tempMatrix3;

    //  - 90 degrees to account for the difference in Spine vs. Phaser rotation
    spriteMatrix.applyITRS(src.x, src.y, src.rotation - 1.5707963267948966, src.scaleX, src.scaleY);

    camMatrix.copyFrom(camera.matrix);

    if (parentMatrix)
    {
        //  Multiply the camera by the parent matrix
        camMatrix.multiplyWithOffset(parentMatrix, -camera.scrollX * src.scrollFactorX, -camera.scrollY * src.scrollFactorY);

        //  Undo the camera scroll
        spriteMatrix.e = src.x;
        spriteMatrix.f = src.y;

        //  Multiply by the Sprite matrix, store result in calcMatrix
        camMatrix.multiply(spriteMatrix, calcMatrix);
    }
    else
    {
        spriteMatrix.e -= camera.scrollX * src.scrollFactorX;
        spriteMatrix.f -= camera.scrollY * src.scrollFactorY;

        //  Multiply by the Sprite matrix, store result in calcMatrix
        camMatrix.multiply(spriteMatrix, calcMatrix);
    }

    var width = renderer.width;
    var height = renderer.height;

    skeleton.x = calcMatrix.tx;
    skeleton.scaleX = calcMatrix.scaleX;

    if (camera.renderToTexture)
    {
        skeleton.y = calcMatrix.ty;
        skeleton.scaleY = calcMatrix.scaleY * -1;
    }
    else
    {
        skeleton.y = height - calcMatrix.ty;
        skeleton.scaleY = calcMatrix.scaleY;
    }

    src.root.rotation = RadToDeg(CounterClockwise(calcMatrix.rotation));

    //  Add autoUpdate option
    skeleton.updateWorldTransform();

    if (renderer.newType)
    {
        mvp.ortho(0, width, 0, height, 0, 1);

        shader.bind();
        shader.setUniformi(runtime.Shader.SAMPLER, 0);
        shader.setUniform4x4f(runtime.Shader.MVP_MATRIX, mvp.val);

        batcher.begin(shader);

        skeletonRenderer.premultipliedAlpha = true;
    }

    if (renderer.nextTypeMatch)
    {
        batcher.isDrawing = false;
    }

    //  Draw the current skeleton
    skeletonRenderer.draw(batcher, skeleton);

    if (!renderer.nextTypeMatch)
    {
        //  The next object in the display list is not a Spine object, so we end the batch
        batcher.isDrawing = true;

        batcher.end();

        shader.unbind();

        renderer.rebindPipeline(renderer.pipelines.TextureTintPipeline);
    }

    /*
    var drawDebug = (plugin.drawDebug || src.drawDebug);

    if (drawDebug)
    {
        var debugShader = plugin.debugShader;
        var debugRenderer = plugin.debugRenderer;
        var shapes = plugin.shapes;

        debugShader.bind();
        debugShader.setUniform4x4f(runtime.Shader.MVP_MATRIX, mvp.val);

        shapes.begin(debugShader);

        debugRenderer.draw(shapes, skeleton);

        shapes.end();

        debugShader.unbind();
    }
    */
};

module.exports = SpineGameObjectWebGLRenderer;


/***/ }),

/***/ "./runtimes/spine-both.js":
/*!********************************!*\
  !*** ./runtimes/spine-both.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
(function() {

var __extends = (this && this.__extends) || (function () {
	var extendStatics = Object.setPrototypeOf ||
		({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
		function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	return function (d, b) {
		extendStatics(d, b);
		function __() { this.constructor = d; }
		d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
})();
var spine;
(function (spine) {
	var Animation = (function () {
		function Animation(name, timelines, duration) {
			if (name == null)
				throw new Error("name cannot be null.");
			if (timelines == null)
				throw new Error("timelines cannot be null.");
			this.name = name;
			this.timelines = timelines;
			this.duration = duration;
		}
		Animation.prototype.apply = function (skeleton, lastTime, time, loop, events, alpha, blend, direction) {
			if (skeleton == null)
				throw new Error("skeleton cannot be null.");
			if (loop && this.duration != 0) {
				time %= this.duration;
				if (lastTime > 0)
					lastTime %= this.duration;
			}
			var timelines = this.timelines;
			for (var i = 0, n = timelines.length; i < n; i++)
				timelines[i].apply(skeleton, lastTime, time, events, alpha, blend, direction);
		};
		Animation.binarySearch = function (values, target, step) {
			if (step === void 0) { step = 1; }
			var low = 0;
			var high = values.length / step - 2;
			if (high == 0)
				return step;
			var current = high >>> 1;
			while (true) {
				if (values[(current + 1) * step] <= target)
					low = current + 1;
				else
					high = current;
				if (low == high)
					return (low + 1) * step;
				current = (low + high) >>> 1;
			}
		};
		Animation.linearSearch = function (values, target, step) {
			for (var i = 0, last = values.length - step; i <= last; i += step)
				if (values[i] > target)
					return i;
			return -1;
		};
		return Animation;
	}());
	spine.Animation = Animation;
	var MixBlend;
	(function (MixBlend) {
		MixBlend[MixBlend["setup"] = 0] = "setup";
		MixBlend[MixBlend["first"] = 1] = "first";
		MixBlend[MixBlend["replace"] = 2] = "replace";
		MixBlend[MixBlend["add"] = 3] = "add";
	})(MixBlend = spine.MixBlend || (spine.MixBlend = {}));
	var MixDirection;
	(function (MixDirection) {
		MixDirection[MixDirection["in"] = 0] = "in";
		MixDirection[MixDirection["out"] = 1] = "out";
	})(MixDirection = spine.MixDirection || (spine.MixDirection = {}));
	var TimelineType;
	(function (TimelineType) {
		TimelineType[TimelineType["rotate"] = 0] = "rotate";
		TimelineType[TimelineType["translate"] = 1] = "translate";
		TimelineType[TimelineType["scale"] = 2] = "scale";
		TimelineType[TimelineType["shear"] = 3] = "shear";
		TimelineType[TimelineType["attachment"] = 4] = "attachment";
		TimelineType[TimelineType["color"] = 5] = "color";
		TimelineType[TimelineType["deform"] = 6] = "deform";
		TimelineType[TimelineType["event"] = 7] = "event";
		TimelineType[TimelineType["drawOrder"] = 8] = "drawOrder";
		TimelineType[TimelineType["ikConstraint"] = 9] = "ikConstraint";
		TimelineType[TimelineType["transformConstraint"] = 10] = "transformConstraint";
		TimelineType[TimelineType["pathConstraintPosition"] = 11] = "pathConstraintPosition";
		TimelineType[TimelineType["pathConstraintSpacing"] = 12] = "pathConstraintSpacing";
		TimelineType[TimelineType["pathConstraintMix"] = 13] = "pathConstraintMix";
		TimelineType[TimelineType["twoColor"] = 14] = "twoColor";
	})(TimelineType = spine.TimelineType || (spine.TimelineType = {}));
	var CurveTimeline = (function () {
		function CurveTimeline(frameCount) {
			if (frameCount <= 0)
				throw new Error("frameCount must be > 0: " + frameCount);
			this.curves = spine.Utils.newFloatArray((frameCount - 1) * CurveTimeline.BEZIER_SIZE);
		}
		CurveTimeline.prototype.getFrameCount = function () {
			return this.curves.length / CurveTimeline.BEZIER_SIZE + 1;
		};
		CurveTimeline.prototype.setLinear = function (frameIndex) {
			this.curves[frameIndex * CurveTimeline.BEZIER_SIZE] = CurveTimeline.LINEAR;
		};
		CurveTimeline.prototype.setStepped = function (frameIndex) {
			this.curves[frameIndex * CurveTimeline.BEZIER_SIZE] = CurveTimeline.STEPPED;
		};
		CurveTimeline.prototype.getCurveType = function (frameIndex) {
			var index = frameIndex * CurveTimeline.BEZIER_SIZE;
			if (index == this.curves.length)
				return CurveTimeline.LINEAR;
			var type = this.curves[index];
			if (type == CurveTimeline.LINEAR)
				return CurveTimeline.LINEAR;
			if (type == CurveTimeline.STEPPED)
				return CurveTimeline.STEPPED;
			return CurveTimeline.BEZIER;
		};
		CurveTimeline.prototype.setCurve = function (frameIndex, cx1, cy1, cx2, cy2) {
			var tmpx = (-cx1 * 2 + cx2) * 0.03, tmpy = (-cy1 * 2 + cy2) * 0.03;
			var dddfx = ((cx1 - cx2) * 3 + 1) * 0.006, dddfy = ((cy1 - cy2) * 3 + 1) * 0.006;
			var ddfx = tmpx * 2 + dddfx, ddfy = tmpy * 2 + dddfy;
			var dfx = cx1 * 0.3 + tmpx + dddfx * 0.16666667, dfy = cy1 * 0.3 + tmpy + dddfy * 0.16666667;
			var i = frameIndex * CurveTimeline.BEZIER_SIZE;
			var curves = this.curves;
			curves[i++] = CurveTimeline.BEZIER;
			var x = dfx, y = dfy;
			for (var n = i + CurveTimeline.BEZIER_SIZE - 1; i < n; i += 2) {
				curves[i] = x;
				curves[i + 1] = y;
				dfx += ddfx;
				dfy += ddfy;
				ddfx += dddfx;
				ddfy += dddfy;
				x += dfx;
				y += dfy;
			}
		};
		CurveTimeline.prototype.getCurvePercent = function (frameIndex, percent) {
			percent = spine.MathUtils.clamp(percent, 0, 1);
			var curves = this.curves;
			var i = frameIndex * CurveTimeline.BEZIER_SIZE;
			var type = curves[i];
			if (type == CurveTimeline.LINEAR)
				return percent;
			if (type == CurveTimeline.STEPPED)
				return 0;
			i++;
			var x = 0;
			for (var start = i, n = i + CurveTimeline.BEZIER_SIZE - 1; i < n; i += 2) {
				x = curves[i];
				if (x >= percent) {
					var prevX = void 0, prevY = void 0;
					if (i == start) {
						prevX = 0;
						prevY = 0;
					}
					else {
						prevX = curves[i - 2];
						prevY = curves[i - 1];
					}
					return prevY + (curves[i + 1] - prevY) * (percent - prevX) / (x - prevX);
				}
			}
			var y = curves[i - 1];
			return y + (1 - y) * (percent - x) / (1 - x);
		};
		CurveTimeline.LINEAR = 0;
		CurveTimeline.STEPPED = 1;
		CurveTimeline.BEZIER = 2;
		CurveTimeline.BEZIER_SIZE = 10 * 2 - 1;
		return CurveTimeline;
	}());
	spine.CurveTimeline = CurveTimeline;
	var RotateTimeline = (function (_super) {
		__extends(RotateTimeline, _super);
		function RotateTimeline(frameCount) {
			var _this = _super.call(this, frameCount) || this;
			_this.frames = spine.Utils.newFloatArray(frameCount << 1);
			return _this;
		}
		RotateTimeline.prototype.getPropertyId = function () {
			return (TimelineType.rotate << 24) + this.boneIndex;
		};
		RotateTimeline.prototype.setFrame = function (frameIndex, time, degrees) {
			frameIndex <<= 1;
			this.frames[frameIndex] = time;
			this.frames[frameIndex + RotateTimeline.ROTATION] = degrees;
		};
		RotateTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
			var frames = this.frames;
			var bone = skeleton.bones[this.boneIndex];
			if (time < frames[0]) {
				switch (blend) {
					case MixBlend.setup:
						bone.rotation = bone.data.rotation;
						return;
					case MixBlend.first:
						var r_1 = bone.data.rotation - bone.rotation;
						bone.rotation += (r_1 - (16384 - ((16384.499999999996 - r_1 / 360) | 0)) * 360) * alpha;
				}
				return;
			}
			if (time >= frames[frames.length - RotateTimeline.ENTRIES]) {
				var r_2 = frames[frames.length + RotateTimeline.PREV_ROTATION];
				switch (blend) {
					case MixBlend.setup:
						bone.rotation = bone.data.rotation + r_2 * alpha;
						break;
					case MixBlend.first:
					case MixBlend.replace:
						r_2 += bone.data.rotation - bone.rotation;
						r_2 -= (16384 - ((16384.499999999996 - r_2 / 360) | 0)) * 360;
					case MixBlend.add:
						bone.rotation += r_2 * alpha;
				}
				return;
			}
			var frame = Animation.binarySearch(frames, time, RotateTimeline.ENTRIES);
			var prevRotation = frames[frame + RotateTimeline.PREV_ROTATION];
			var frameTime = frames[frame];
			var percent = this.getCurvePercent((frame >> 1) - 1, 1 - (time - frameTime) / (frames[frame + RotateTimeline.PREV_TIME] - frameTime));
			var r = frames[frame + RotateTimeline.ROTATION] - prevRotation;
			r = prevRotation + (r - (16384 - ((16384.499999999996 - r / 360) | 0)) * 360) * percent;
			switch (blend) {
				case MixBlend.setup:
					bone.rotation = bone.data.rotation + (r - (16384 - ((16384.499999999996 - r / 360) | 0)) * 360) * alpha;
					break;
				case MixBlend.first:
				case MixBlend.replace:
					r += bone.data.rotation - bone.rotation;
				case MixBlend.add:
					bone.rotation += (r - (16384 - ((16384.499999999996 - r / 360) | 0)) * 360) * alpha;
			}
		};
		RotateTimeline.ENTRIES = 2;
		RotateTimeline.PREV_TIME = -2;
		RotateTimeline.PREV_ROTATION = -1;
		RotateTimeline.ROTATION = 1;
		return RotateTimeline;
	}(CurveTimeline));
	spine.RotateTimeline = RotateTimeline;
	var TranslateTimeline = (function (_super) {
		__extends(TranslateTimeline, _super);
		function TranslateTimeline(frameCount) {
			var _this = _super.call(this, frameCount) || this;
			_this.frames = spine.Utils.newFloatArray(frameCount * TranslateTimeline.ENTRIES);
			return _this;
		}
		TranslateTimeline.prototype.getPropertyId = function () {
			return (TimelineType.translate << 24) + this.boneIndex;
		};
		TranslateTimeline.prototype.setFrame = function (frameIndex, time, x, y) {
			frameIndex *= TranslateTimeline.ENTRIES;
			this.frames[frameIndex] = time;
			this.frames[frameIndex + TranslateTimeline.X] = x;
			this.frames[frameIndex + TranslateTimeline.Y] = y;
		};
		TranslateTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
			var frames = this.frames;
			var bone = skeleton.bones[this.boneIndex];
			if (time < frames[0]) {
				switch (blend) {
					case MixBlend.setup:
						bone.x = bone.data.x;
						bone.y = bone.data.y;
						return;
					case MixBlend.first:
						bone.x += (bone.data.x - bone.x) * alpha;
						bone.y += (bone.data.y - bone.y) * alpha;
				}
				return;
			}
			var x = 0, y = 0;
			if (time >= frames[frames.length - TranslateTimeline.ENTRIES]) {
				x = frames[frames.length + TranslateTimeline.PREV_X];
				y = frames[frames.length + TranslateTimeline.PREV_Y];
			}
			else {
				var frame = Animation.binarySearch(frames, time, TranslateTimeline.ENTRIES);
				x = frames[frame + TranslateTimeline.PREV_X];
				y = frames[frame + TranslateTimeline.PREV_Y];
				var frameTime = frames[frame];
				var percent = this.getCurvePercent(frame / TranslateTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + TranslateTimeline.PREV_TIME] - frameTime));
				x += (frames[frame + TranslateTimeline.X] - x) * percent;
				y += (frames[frame + TranslateTimeline.Y] - y) * percent;
			}
			switch (blend) {
				case MixBlend.setup:
					bone.x = bone.data.x + x * alpha;
					bone.y = bone.data.y + y * alpha;
					break;
				case MixBlend.first:
				case MixBlend.replace:
					bone.x += (bone.data.x + x - bone.x) * alpha;
					bone.y += (bone.data.y + y - bone.y) * alpha;
					break;
				case MixBlend.add:
					bone.x += x * alpha;
					bone.y += y * alpha;
			}
		};
		TranslateTimeline.ENTRIES = 3;
		TranslateTimeline.PREV_TIME = -3;
		TranslateTimeline.PREV_X = -2;
		TranslateTimeline.PREV_Y = -1;
		TranslateTimeline.X = 1;
		TranslateTimeline.Y = 2;
		return TranslateTimeline;
	}(CurveTimeline));
	spine.TranslateTimeline = TranslateTimeline;
	var ScaleTimeline = (function (_super) {
		__extends(ScaleTimeline, _super);
		function ScaleTimeline(frameCount) {
			return _super.call(this, frameCount) || this;
		}
		ScaleTimeline.prototype.getPropertyId = function () {
			return (TimelineType.scale << 24) + this.boneIndex;
		};
		ScaleTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
			var frames = this.frames;
			var bone = skeleton.bones[this.boneIndex];
			if (time < frames[0]) {
				switch (blend) {
					case MixBlend.setup:
						bone.scaleX = bone.data.scaleX;
						bone.scaleY = bone.data.scaleY;
						return;
					case MixBlend.first:
						bone.scaleX += (bone.data.scaleX - bone.scaleX) * alpha;
						bone.scaleY += (bone.data.scaleY - bone.scaleY) * alpha;
				}
				return;
			}
			var x = 0, y = 0;
			if (time >= frames[frames.length - ScaleTimeline.ENTRIES]) {
				x = frames[frames.length + ScaleTimeline.PREV_X] * bone.data.scaleX;
				y = frames[frames.length + ScaleTimeline.PREV_Y] * bone.data.scaleY;
			}
			else {
				var frame = Animation.binarySearch(frames, time, ScaleTimeline.ENTRIES);
				x = frames[frame + ScaleTimeline.PREV_X];
				y = frames[frame + ScaleTimeline.PREV_Y];
				var frameTime = frames[frame];
				var percent = this.getCurvePercent(frame / ScaleTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + ScaleTimeline.PREV_TIME] - frameTime));
				x = (x + (frames[frame + ScaleTimeline.X] - x) * percent) * bone.data.scaleX;
				y = (y + (frames[frame + ScaleTimeline.Y] - y) * percent) * bone.data.scaleY;
			}
			if (alpha == 1) {
				if (blend == MixBlend.add) {
					bone.scaleX += x - bone.data.scaleX;
					bone.scaleY += y - bone.data.scaleY;
				}
				else {
					bone.scaleX = x;
					bone.scaleY = y;
				}
			}
			else {
				var bx = 0, by = 0;
				if (direction == MixDirection.out) {
					switch (blend) {
						case MixBlend.setup:
							bx = bone.data.scaleX;
							by = bone.data.scaleY;
							bone.scaleX = bx + (Math.abs(x) * spine.MathUtils.signum(bx) - bx) * alpha;
							bone.scaleY = by + (Math.abs(y) * spine.MathUtils.signum(by) - by) * alpha;
							break;
						case MixBlend.first:
						case MixBlend.replace:
							bx = bone.scaleX;
							by = bone.scaleY;
							bone.scaleX = bx + (Math.abs(x) * spine.MathUtils.signum(bx) - bx) * alpha;
							bone.scaleY = by + (Math.abs(y) * spine.MathUtils.signum(by) - by) * alpha;
							break;
						case MixBlend.add:
							bx = bone.scaleX;
							by = bone.scaleY;
							bone.scaleX = bx + (Math.abs(x) * spine.MathUtils.signum(bx) - bone.data.scaleX) * alpha;
							bone.scaleY = by + (Math.abs(y) * spine.MathUtils.signum(by) - bone.data.scaleY) * alpha;
					}
				}
				else {
					switch (blend) {
						case MixBlend.setup:
							bx = Math.abs(bone.data.scaleX) * spine.MathUtils.signum(x);
							by = Math.abs(bone.data.scaleY) * spine.MathUtils.signum(y);
							bone.scaleX = bx + (x - bx) * alpha;
							bone.scaleY = by + (y - by) * alpha;
							break;
						case MixBlend.first:
						case MixBlend.replace:
							bx = Math.abs(bone.scaleX) * spine.MathUtils.signum(x);
							by = Math.abs(bone.scaleY) * spine.MathUtils.signum(y);
							bone.scaleX = bx + (x - bx) * alpha;
							bone.scaleY = by + (y - by) * alpha;
							break;
						case MixBlend.add:
							bx = spine.MathUtils.signum(x);
							by = spine.MathUtils.signum(y);
							bone.scaleX = Math.abs(bone.scaleX) * bx + (x - Math.abs(bone.data.scaleX) * bx) * alpha;
							bone.scaleY = Math.abs(bone.scaleY) * by + (y - Math.abs(bone.data.scaleY) * by) * alpha;
					}
				}
			}
		};
		return ScaleTimeline;
	}(TranslateTimeline));
	spine.ScaleTimeline = ScaleTimeline;
	var ShearTimeline = (function (_super) {
		__extends(ShearTimeline, _super);
		function ShearTimeline(frameCount) {
			return _super.call(this, frameCount) || this;
		}
		ShearTimeline.prototype.getPropertyId = function () {
			return (TimelineType.shear << 24) + this.boneIndex;
		};
		ShearTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
			var frames = this.frames;
			var bone = skeleton.bones[this.boneIndex];
			if (time < frames[0]) {
				switch (blend) {
					case MixBlend.setup:
						bone.shearX = bone.data.shearX;
						bone.shearY = bone.data.shearY;
						return;
					case MixBlend.first:
						bone.shearX += (bone.data.shearX - bone.shearX) * alpha;
						bone.shearY += (bone.data.shearY - bone.shearY) * alpha;
				}
				return;
			}
			var x = 0, y = 0;
			if (time >= frames[frames.length - ShearTimeline.ENTRIES]) {
				x = frames[frames.length + ShearTimeline.PREV_X];
				y = frames[frames.length + ShearTimeline.PREV_Y];
			}
			else {
				var frame = Animation.binarySearch(frames, time, ShearTimeline.ENTRIES);
				x = frames[frame + ShearTimeline.PREV_X];
				y = frames[frame + ShearTimeline.PREV_Y];
				var frameTime = frames[frame];
				var percent = this.getCurvePercent(frame / ShearTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + ShearTimeline.PREV_TIME] - frameTime));
				x = x + (frames[frame + ShearTimeline.X] - x) * percent;
				y = y + (frames[frame + ShearTimeline.Y] - y) * percent;
			}
			switch (blend) {
				case MixBlend.setup:
					bone.shearX = bone.data.shearX + x * alpha;
					bone.shearY = bone.data.shearY + y * alpha;
					break;
				case MixBlend.first:
				case MixBlend.replace:
					bone.shearX += (bone.data.shearX + x - bone.shearX) * alpha;
					bone.shearY += (bone.data.shearY + y - bone.shearY) * alpha;
					break;
				case MixBlend.add:
					bone.shearX += x * alpha;
					bone.shearY += y * alpha;
			}
		};
		return ShearTimeline;
	}(TranslateTimeline));
	spine.ShearTimeline = ShearTimeline;
	var ColorTimeline = (function (_super) {
		__extends(ColorTimeline, _super);
		function ColorTimeline(frameCount) {
			var _this = _super.call(this, frameCount) || this;
			_this.frames = spine.Utils.newFloatArray(frameCount * ColorTimeline.ENTRIES);
			return _this;
		}
		ColorTimeline.prototype.getPropertyId = function () {
			return (TimelineType.color << 24) + this.slotIndex;
		};
		ColorTimeline.prototype.setFrame = function (frameIndex, time, r, g, b, a) {
			frameIndex *= ColorTimeline.ENTRIES;
			this.frames[frameIndex] = time;
			this.frames[frameIndex + ColorTimeline.R] = r;
			this.frames[frameIndex + ColorTimeline.G] = g;
			this.frames[frameIndex + ColorTimeline.B] = b;
			this.frames[frameIndex + ColorTimeline.A] = a;
		};
		ColorTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
			var slot = skeleton.slots[this.slotIndex];
			var frames = this.frames;
			if (time < frames[0]) {
				switch (blend) {
					case MixBlend.setup:
						slot.color.setFromColor(slot.data.color);
						return;
					case MixBlend.first:
						var color = slot.color, setup = slot.data.color;
						color.add((setup.r - color.r) * alpha, (setup.g - color.g) * alpha, (setup.b - color.b) * alpha, (setup.a - color.a) * alpha);
				}
				return;
			}
			var r = 0, g = 0, b = 0, a = 0;
			if (time >= frames[frames.length - ColorTimeline.ENTRIES]) {
				var i = frames.length;
				r = frames[i + ColorTimeline.PREV_R];
				g = frames[i + ColorTimeline.PREV_G];
				b = frames[i + ColorTimeline.PREV_B];
				a = frames[i + ColorTimeline.PREV_A];
			}
			else {
				var frame = Animation.binarySearch(frames, time, ColorTimeline.ENTRIES);
				r = frames[frame + ColorTimeline.PREV_R];
				g = frames[frame + ColorTimeline.PREV_G];
				b = frames[frame + ColorTimeline.PREV_B];
				a = frames[frame + ColorTimeline.PREV_A];
				var frameTime = frames[frame];
				var percent = this.getCurvePercent(frame / ColorTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + ColorTimeline.PREV_TIME] - frameTime));
				r += (frames[frame + ColorTimeline.R] - r) * percent;
				g += (frames[frame + ColorTimeline.G] - g) * percent;
				b += (frames[frame + ColorTimeline.B] - b) * percent;
				a += (frames[frame + ColorTimeline.A] - a) * percent;
			}
			if (alpha == 1)
				slot.color.set(r, g, b, a);
			else {
				var color = slot.color;
				if (blend == MixBlend.setup)
					color.setFromColor(slot.data.color);
				color.add((r - color.r) * alpha, (g - color.g) * alpha, (b - color.b) * alpha, (a - color.a) * alpha);
			}
		};
		ColorTimeline.ENTRIES = 5;
		ColorTimeline.PREV_TIME = -5;
		ColorTimeline.PREV_R = -4;
		ColorTimeline.PREV_G = -3;
		ColorTimeline.PREV_B = -2;
		ColorTimeline.PREV_A = -1;
		ColorTimeline.R = 1;
		ColorTimeline.G = 2;
		ColorTimeline.B = 3;
		ColorTimeline.A = 4;
		return ColorTimeline;
	}(CurveTimeline));
	spine.ColorTimeline = ColorTimeline;
	var TwoColorTimeline = (function (_super) {
		__extends(TwoColorTimeline, _super);
		function TwoColorTimeline(frameCount) {
			var _this = _super.call(this, frameCount) || this;
			_this.frames = spine.Utils.newFloatArray(frameCount * TwoColorTimeline.ENTRIES);
			return _this;
		}
		TwoColorTimeline.prototype.getPropertyId = function () {
			return (TimelineType.twoColor << 24) + this.slotIndex;
		};
		TwoColorTimeline.prototype.setFrame = function (frameIndex, time, r, g, b, a, r2, g2, b2) {
			frameIndex *= TwoColorTimeline.ENTRIES;
			this.frames[frameIndex] = time;
			this.frames[frameIndex + TwoColorTimeline.R] = r;
			this.frames[frameIndex + TwoColorTimeline.G] = g;
			this.frames[frameIndex + TwoColorTimeline.B] = b;
			this.frames[frameIndex + TwoColorTimeline.A] = a;
			this.frames[frameIndex + TwoColorTimeline.R2] = r2;
			this.frames[frameIndex + TwoColorTimeline.G2] = g2;
			this.frames[frameIndex + TwoColorTimeline.B2] = b2;
		};
		TwoColorTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
			var slot = skeleton.slots[this.slotIndex];
			var frames = this.frames;
			if (time < frames[0]) {
				switch (blend) {
					case MixBlend.setup:
						slot.color.setFromColor(slot.data.color);
						slot.darkColor.setFromColor(slot.data.darkColor);
						return;
					case MixBlend.first:
						var light = slot.color, dark = slot.darkColor, setupLight = slot.data.color, setupDark = slot.data.darkColor;
						light.add((setupLight.r - light.r) * alpha, (setupLight.g - light.g) * alpha, (setupLight.b - light.b) * alpha, (setupLight.a - light.a) * alpha);
						dark.add((setupDark.r - dark.r) * alpha, (setupDark.g - dark.g) * alpha, (setupDark.b - dark.b) * alpha, 0);
				}
				return;
			}
			var r = 0, g = 0, b = 0, a = 0, r2 = 0, g2 = 0, b2 = 0;
			if (time >= frames[frames.length - TwoColorTimeline.ENTRIES]) {
				var i = frames.length;
				r = frames[i + TwoColorTimeline.PREV_R];
				g = frames[i + TwoColorTimeline.PREV_G];
				b = frames[i + TwoColorTimeline.PREV_B];
				a = frames[i + TwoColorTimeline.PREV_A];
				r2 = frames[i + TwoColorTimeline.PREV_R2];
				g2 = frames[i + TwoColorTimeline.PREV_G2];
				b2 = frames[i + TwoColorTimeline.PREV_B2];
			}
			else {
				var frame = Animation.binarySearch(frames, time, TwoColorTimeline.ENTRIES);
				r = frames[frame + TwoColorTimeline.PREV_R];
				g = frames[frame + TwoColorTimeline.PREV_G];
				b = frames[frame + TwoColorTimeline.PREV_B];
				a = frames[frame + TwoColorTimeline.PREV_A];
				r2 = frames[frame + TwoColorTimeline.PREV_R2];
				g2 = frames[frame + TwoColorTimeline.PREV_G2];
				b2 = frames[frame + TwoColorTimeline.PREV_B2];
				var frameTime = frames[frame];
				var percent = this.getCurvePercent(frame / TwoColorTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + TwoColorTimeline.PREV_TIME] - frameTime));
				r += (frames[frame + TwoColorTimeline.R] - r) * percent;
				g += (frames[frame + TwoColorTimeline.G] - g) * percent;
				b += (frames[frame + TwoColorTimeline.B] - b) * percent;
				a += (frames[frame + TwoColorTimeline.A] - a) * percent;
				r2 += (frames[frame + TwoColorTimeline.R2] - r2) * percent;
				g2 += (frames[frame + TwoColorTimeline.G2] - g2) * percent;
				b2 += (frames[frame + TwoColorTimeline.B2] - b2) * percent;
			}
			if (alpha == 1) {
				slot.color.set(r, g, b, a);
				slot.darkColor.set(r2, g2, b2, 1);
			}
			else {
				var light = slot.color, dark = slot.darkColor;
				if (blend == MixBlend.setup) {
					light.setFromColor(slot.data.color);
					dark.setFromColor(slot.data.darkColor);
				}
				light.add((r - light.r) * alpha, (g - light.g) * alpha, (b - light.b) * alpha, (a - light.a) * alpha);
				dark.add((r2 - dark.r) * alpha, (g2 - dark.g) * alpha, (b2 - dark.b) * alpha, 0);
			}
		};
		TwoColorTimeline.ENTRIES = 8;
		TwoColorTimeline.PREV_TIME = -8;
		TwoColorTimeline.PREV_R = -7;
		TwoColorTimeline.PREV_G = -6;
		TwoColorTimeline.PREV_B = -5;
		TwoColorTimeline.PREV_A = -4;
		TwoColorTimeline.PREV_R2 = -3;
		TwoColorTimeline.PREV_G2 = -2;
		TwoColorTimeline.PREV_B2 = -1;
		TwoColorTimeline.R = 1;
		TwoColorTimeline.G = 2;
		TwoColorTimeline.B = 3;
		TwoColorTimeline.A = 4;
		TwoColorTimeline.R2 = 5;
		TwoColorTimeline.G2 = 6;
		TwoColorTimeline.B2 = 7;
		return TwoColorTimeline;
	}(CurveTimeline));
	spine.TwoColorTimeline = TwoColorTimeline;
	var AttachmentTimeline = (function () {
		function AttachmentTimeline(frameCount) {
			this.frames = spine.Utils.newFloatArray(frameCount);
			this.attachmentNames = new Array(frameCount);
		}
		AttachmentTimeline.prototype.getPropertyId = function () {
			return (TimelineType.attachment << 24) + this.slotIndex;
		};
		AttachmentTimeline.prototype.getFrameCount = function () {
			return this.frames.length;
		};
		AttachmentTimeline.prototype.setFrame = function (frameIndex, time, attachmentName) {
			this.frames[frameIndex] = time;
			this.attachmentNames[frameIndex] = attachmentName;
		};
		AttachmentTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
			var slot = skeleton.slots[this.slotIndex];
			if (direction == MixDirection.out && blend == MixBlend.setup) {
				var attachmentName_1 = slot.data.attachmentName;
				slot.setAttachment(attachmentName_1 == null ? null : skeleton.getAttachment(this.slotIndex, attachmentName_1));
				return;
			}
			var frames = this.frames;
			if (time < frames[0]) {
				if (blend == MixBlend.setup || blend == MixBlend.first) {
					var attachmentName_2 = slot.data.attachmentName;
					slot.setAttachment(attachmentName_2 == null ? null : skeleton.getAttachment(this.slotIndex, attachmentName_2));
				}
				return;
			}
			var frameIndex = 0;
			if (time >= frames[frames.length - 1])
				frameIndex = frames.length - 1;
			else
				frameIndex = Animation.binarySearch(frames, time, 1) - 1;
			var attachmentName = this.attachmentNames[frameIndex];
			skeleton.slots[this.slotIndex]
				.setAttachment(attachmentName == null ? null : skeleton.getAttachment(this.slotIndex, attachmentName));
		};
		return AttachmentTimeline;
	}());
	spine.AttachmentTimeline = AttachmentTimeline;
	var zeros = null;
	var DeformTimeline = (function (_super) {
		__extends(DeformTimeline, _super);
		function DeformTimeline(frameCount) {
			var _this = _super.call(this, frameCount) || this;
			_this.frames = spine.Utils.newFloatArray(frameCount);
			_this.frameVertices = new Array(frameCount);
			if (zeros == null)
				zeros = spine.Utils.newFloatArray(64);
			return _this;
		}
		DeformTimeline.prototype.getPropertyId = function () {
			return (TimelineType.deform << 27) + +this.attachment.id + this.slotIndex;
		};
		DeformTimeline.prototype.setFrame = function (frameIndex, time, vertices) {
			this.frames[frameIndex] = time;
			this.frameVertices[frameIndex] = vertices;
		};
		DeformTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
			var slot = skeleton.slots[this.slotIndex];
			var slotAttachment = slot.getAttachment();
			if (!(slotAttachment instanceof spine.VertexAttachment) || !slotAttachment.applyDeform(this.attachment))
				return;
			var verticesArray = slot.attachmentVertices;
			if (verticesArray.length == 0)
				blend = MixBlend.setup;
			var frameVertices = this.frameVertices;
			var vertexCount = frameVertices[0].length;
			var frames = this.frames;
			if (time < frames[0]) {
				var vertexAttachment = slotAttachment;
				switch (blend) {
					case MixBlend.setup:
						verticesArray.length = 0;
						return;
					case MixBlend.first:
						if (alpha == 1) {
							verticesArray.length = 0;
							break;
						}
						var vertices_1 = spine.Utils.setArraySize(verticesArray, vertexCount);
						if (vertexAttachment.bones == null) {
							var setupVertices = vertexAttachment.vertices;
							for (var i = 0; i < vertexCount; i++)
								vertices_1[i] += (setupVertices[i] - vertices_1[i]) * alpha;
						}
						else {
							alpha = 1 - alpha;
							for (var i = 0; i < vertexCount; i++)
								vertices_1[i] *= alpha;
						}
				}
				return;
			}
			var vertices = spine.Utils.setArraySize(verticesArray, vertexCount);
			if (time >= frames[frames.length - 1]) {
				var lastVertices = frameVertices[frames.length - 1];
				if (alpha == 1) {
					if (blend == MixBlend.add) {
						var vertexAttachment = slotAttachment;
						if (vertexAttachment.bones == null) {
							var setupVertices = vertexAttachment.vertices;
							for (var i_1 = 0; i_1 < vertexCount; i_1++) {
								vertices[i_1] += lastVertices[i_1] - setupVertices[i_1];
							}
						}
						else {
							for (var i_2 = 0; i_2 < vertexCount; i_2++)
								vertices[i_2] += lastVertices[i_2];
						}
					}
					else {
						spine.Utils.arrayCopy(lastVertices, 0, vertices, 0, vertexCount);
					}
				}
				else {
					switch (blend) {
						case MixBlend.setup: {
							var vertexAttachment_1 = slotAttachment;
							if (vertexAttachment_1.bones == null) {
								var setupVertices = vertexAttachment_1.vertices;
								for (var i_3 = 0; i_3 < vertexCount; i_3++) {
									var setup = setupVertices[i_3];
									vertices[i_3] = setup + (lastVertices[i_3] - setup) * alpha;
								}
							}
							else {
								for (var i_4 = 0; i_4 < vertexCount; i_4++)
									vertices[i_4] = lastVertices[i_4] * alpha;
							}
							break;
						}
						case MixBlend.first:
						case MixBlend.replace:
							for (var i_5 = 0; i_5 < vertexCount; i_5++)
								vertices[i_5] += (lastVertices[i_5] - vertices[i_5]) * alpha;
						case MixBlend.add:
							var vertexAttachment = slotAttachment;
							if (vertexAttachment.bones == null) {
								var setupVertices = vertexAttachment.vertices;
								for (var i_6 = 0; i_6 < vertexCount; i_6++) {
									vertices[i_6] += (lastVertices[i_6] - setupVertices[i_6]) * alpha;
								}
							}
							else {
								for (var i_7 = 0; i_7 < vertexCount; i_7++)
									vertices[i_7] += lastVertices[i_7] * alpha;
							}
					}
				}
				return;
			}
			var frame = Animation.binarySearch(frames, time);
			var prevVertices = frameVertices[frame - 1];
			var nextVertices = frameVertices[frame];
			var frameTime = frames[frame];
			var percent = this.getCurvePercent(frame - 1, 1 - (time - frameTime) / (frames[frame - 1] - frameTime));
			if (alpha == 1) {
				if (blend == MixBlend.add) {
					var vertexAttachment = slotAttachment;
					if (vertexAttachment.bones == null) {
						var setupVertices = vertexAttachment.vertices;
						for (var i_8 = 0; i_8 < vertexCount; i_8++) {
							var prev = prevVertices[i_8];
							vertices[i_8] += prev + (nextVertices[i_8] - prev) * percent - setupVertices[i_8];
						}
					}
					else {
						for (var i_9 = 0; i_9 < vertexCount; i_9++) {
							var prev = prevVertices[i_9];
							vertices[i_9] += prev + (nextVertices[i_9] - prev) * percent;
						}
					}
				}
				else {
					for (var i_10 = 0; i_10 < vertexCount; i_10++) {
						var prev = prevVertices[i_10];
						vertices[i_10] = prev + (nextVertices[i_10] - prev) * percent;
					}
				}
			}
			else {
				switch (blend) {
					case MixBlend.setup: {
						var vertexAttachment_2 = slotAttachment;
						if (vertexAttachment_2.bones == null) {
							var setupVertices = vertexAttachment_2.vertices;
							for (var i_11 = 0; i_11 < vertexCount; i_11++) {
								var prev = prevVertices[i_11], setup = setupVertices[i_11];
								vertices[i_11] = setup + (prev + (nextVertices[i_11] - prev) * percent - setup) * alpha;
							}
						}
						else {
							for (var i_12 = 0; i_12 < vertexCount; i_12++) {
								var prev = prevVertices[i_12];
								vertices[i_12] = (prev + (nextVertices[i_12] - prev) * percent) * alpha;
							}
						}
						break;
					}
					case MixBlend.first:
					case MixBlend.replace:
						for (var i_13 = 0; i_13 < vertexCount; i_13++) {
							var prev = prevVertices[i_13];
							vertices[i_13] += (prev + (nextVertices[i_13] - prev) * percent - vertices[i_13]) * alpha;
						}
						break;
					case MixBlend.add:
						var vertexAttachment = slotAttachment;
						if (vertexAttachment.bones == null) {
							var setupVertices = vertexAttachment.vertices;
							for (var i_14 = 0; i_14 < vertexCount; i_14++) {
								var prev = prevVertices[i_14];
								vertices[i_14] += (prev + (nextVertices[i_14] - prev) * percent - setupVertices[i_14]) * alpha;
							}
						}
						else {
							for (var i_15 = 0; i_15 < vertexCount; i_15++) {
								var prev = prevVertices[i_15];
								vertices[i_15] += (prev + (nextVertices[i_15] - prev) * percent) * alpha;
							}
						}
				}
			}
		};
		return DeformTimeline;
	}(CurveTimeline));
	spine.DeformTimeline = DeformTimeline;
	var EventTimeline = (function () {
		function EventTimeline(frameCount) {
			this.frames = spine.Utils.newFloatArray(frameCount);
			this.events = new Array(frameCount);
		}
		EventTimeline.prototype.getPropertyId = function () {
			return TimelineType.event << 24;
		};
		EventTimeline.prototype.getFrameCount = function () {
			return this.frames.length;
		};
		EventTimeline.prototype.setFrame = function (frameIndex, event) {
			this.frames[frameIndex] = event.time;
			this.events[frameIndex] = event;
		};
		EventTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
			if (firedEvents == null)
				return;
			var frames = this.frames;
			var frameCount = this.frames.length;
			if (lastTime > time) {
				this.apply(skeleton, lastTime, Number.MAX_VALUE, firedEvents, alpha, blend, direction);
				lastTime = -1;
			}
			else if (lastTime >= frames[frameCount - 1])
				return;
			if (time < frames[0])
				return;
			var frame = 0;
			if (lastTime < frames[0])
				frame = 0;
			else {
				frame = Animation.binarySearch(frames, lastTime);
				var frameTime = frames[frame];
				while (frame > 0) {
					if (frames[frame - 1] != frameTime)
						break;
					frame--;
				}
			}
			for (; frame < frameCount && time >= frames[frame]; frame++)
				firedEvents.push(this.events[frame]);
		};
		return EventTimeline;
	}());
	spine.EventTimeline = EventTimeline;
	var DrawOrderTimeline = (function () {
		function DrawOrderTimeline(frameCount) {
			this.frames = spine.Utils.newFloatArray(frameCount);
			this.drawOrders = new Array(frameCount);
		}
		DrawOrderTimeline.prototype.getPropertyId = function () {
			return TimelineType.drawOrder << 24;
		};
		DrawOrderTimeline.prototype.getFrameCount = function () {
			return this.frames.length;
		};
		DrawOrderTimeline.prototype.setFrame = function (frameIndex, time, drawOrder) {
			this.frames[frameIndex] = time;
			this.drawOrders[frameIndex] = drawOrder;
		};
		DrawOrderTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
			var drawOrder = skeleton.drawOrder;
			var slots = skeleton.slots;
			if (direction == MixDirection.out && blend == MixBlend.setup) {
				spine.Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
				return;
			}
			var frames = this.frames;
			if (time < frames[0]) {
				if (blend == MixBlend.setup || blend == MixBlend.first)
					spine.Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
				return;
			}
			var frame = 0;
			if (time >= frames[frames.length - 1])
				frame = frames.length - 1;
			else
				frame = Animation.binarySearch(frames, time) - 1;
			var drawOrderToSetupIndex = this.drawOrders[frame];
			if (drawOrderToSetupIndex == null)
				spine.Utils.arrayCopy(slots, 0, drawOrder, 0, slots.length);
			else {
				for (var i = 0, n = drawOrderToSetupIndex.length; i < n; i++)
					drawOrder[i] = slots[drawOrderToSetupIndex[i]];
			}
		};
		return DrawOrderTimeline;
	}());
	spine.DrawOrderTimeline = DrawOrderTimeline;
	var IkConstraintTimeline = (function (_super) {
		__extends(IkConstraintTimeline, _super);
		function IkConstraintTimeline(frameCount) {
			var _this = _super.call(this, frameCount) || this;
			_this.frames = spine.Utils.newFloatArray(frameCount * IkConstraintTimeline.ENTRIES);
			return _this;
		}
		IkConstraintTimeline.prototype.getPropertyId = function () {
			return (TimelineType.ikConstraint << 24) + this.ikConstraintIndex;
		};
		IkConstraintTimeline.prototype.setFrame = function (frameIndex, time, mix, bendDirection, compress, stretch) {
			frameIndex *= IkConstraintTimeline.ENTRIES;
			this.frames[frameIndex] = time;
			this.frames[frameIndex + IkConstraintTimeline.MIX] = mix;
			this.frames[frameIndex + IkConstraintTimeline.BEND_DIRECTION] = bendDirection;
			this.frames[frameIndex + IkConstraintTimeline.COMPRESS] = compress ? 1 : 0;
			this.frames[frameIndex + IkConstraintTimeline.STRETCH] = stretch ? 1 : 0;
		};
		IkConstraintTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
			var frames = this.frames;
			var constraint = skeleton.ikConstraints[this.ikConstraintIndex];
			if (time < frames[0]) {
				switch (blend) {
					case MixBlend.setup:
						constraint.mix = constraint.data.mix;
						constraint.bendDirection = constraint.data.bendDirection;
						constraint.compress = constraint.data.compress;
						constraint.stretch = constraint.data.stretch;
						return;
					case MixBlend.first:
						constraint.mix += (constraint.data.mix - constraint.mix) * alpha;
						constraint.bendDirection = constraint.data.bendDirection;
						constraint.compress = constraint.data.compress;
						constraint.stretch = constraint.data.stretch;
				}
				return;
			}
			if (time >= frames[frames.length - IkConstraintTimeline.ENTRIES]) {
				if (blend == MixBlend.setup) {
					constraint.mix = constraint.data.mix + (frames[frames.length + IkConstraintTimeline.PREV_MIX] - constraint.data.mix) * alpha;
					if (direction == MixDirection.out) {
						constraint.bendDirection = constraint.data.bendDirection;
						constraint.compress = constraint.data.compress;
						constraint.stretch = constraint.data.stretch;
					}
					else {
						constraint.bendDirection = frames[frames.length + IkConstraintTimeline.PREV_BEND_DIRECTION];
						constraint.compress = frames[frames.length + IkConstraintTimeline.PREV_COMPRESS] != 0;
						constraint.stretch = frames[frames.length + IkConstraintTimeline.PREV_STRETCH] != 0;
					}
				}
				else {
					constraint.mix += (frames[frames.length + IkConstraintTimeline.PREV_MIX] - constraint.mix) * alpha;
					if (direction == MixDirection["in"]) {
						constraint.bendDirection = frames[frames.length + IkConstraintTimeline.PREV_BEND_DIRECTION];
						constraint.compress = frames[frames.length + IkConstraintTimeline.PREV_COMPRESS] != 0;
						constraint.stretch = frames[frames.length + IkConstraintTimeline.PREV_STRETCH] != 0;
					}
				}
				return;
			}
			var frame = Animation.binarySearch(frames, time, IkConstraintTimeline.ENTRIES);
			var mix = frames[frame + IkConstraintTimeline.PREV_MIX];
			var frameTime = frames[frame];
			var percent = this.getCurvePercent(frame / IkConstraintTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + IkConstraintTimeline.PREV_TIME] - frameTime));
			if (blend == MixBlend.setup) {
				constraint.mix = constraint.data.mix + (mix + (frames[frame + IkConstraintTimeline.MIX] - mix) * percent - constraint.data.mix) * alpha;
				if (direction == MixDirection.out) {
					constraint.bendDirection = constraint.data.bendDirection;
					constraint.compress = constraint.data.compress;
					constraint.stretch = constraint.data.stretch;
				}
				else {
					constraint.bendDirection = frames[frame + IkConstraintTimeline.PREV_BEND_DIRECTION];
					constraint.compress = frames[frame + IkConstraintTimeline.PREV_COMPRESS] != 0;
					constraint.stretch = frames[frame + IkConstraintTimeline.PREV_STRETCH] != 0;
				}
			}
			else {
				constraint.mix += (mix + (frames[frame + IkConstraintTimeline.MIX] - mix) * percent - constraint.mix) * alpha;
				if (direction == MixDirection["in"]) {
					constraint.bendDirection = frames[frame + IkConstraintTimeline.PREV_BEND_DIRECTION];
					constraint.compress = frames[frame + IkConstraintTimeline.PREV_COMPRESS] != 0;
					constraint.stretch = frames[frame + IkConstraintTimeline.PREV_STRETCH] != 0;
				}
			}
		};
		IkConstraintTimeline.ENTRIES = 5;
		IkConstraintTimeline.PREV_TIME = -5;
		IkConstraintTimeline.PREV_MIX = -4;
		IkConstraintTimeline.PREV_BEND_DIRECTION = -3;
		IkConstraintTimeline.PREV_COMPRESS = -2;
		IkConstraintTimeline.PREV_STRETCH = -1;
		IkConstraintTimeline.MIX = 1;
		IkConstraintTimeline.BEND_DIRECTION = 2;
		IkConstraintTimeline.COMPRESS = 3;
		IkConstraintTimeline.STRETCH = 4;
		return IkConstraintTimeline;
	}(CurveTimeline));
	spine.IkConstraintTimeline = IkConstraintTimeline;
	var TransformConstraintTimeline = (function (_super) {
		__extends(TransformConstraintTimeline, _super);
		function TransformConstraintTimeline(frameCount) {
			var _this = _super.call(this, frameCount) || this;
			_this.frames = spine.Utils.newFloatArray(frameCount * TransformConstraintTimeline.ENTRIES);
			return _this;
		}
		TransformConstraintTimeline.prototype.getPropertyId = function () {
			return (TimelineType.transformConstraint << 24) + this.transformConstraintIndex;
		};
		TransformConstraintTimeline.prototype.setFrame = function (frameIndex, time, rotateMix, translateMix, scaleMix, shearMix) {
			frameIndex *= TransformConstraintTimeline.ENTRIES;
			this.frames[frameIndex] = time;
			this.frames[frameIndex + TransformConstraintTimeline.ROTATE] = rotateMix;
			this.frames[frameIndex + TransformConstraintTimeline.TRANSLATE] = translateMix;
			this.frames[frameIndex + TransformConstraintTimeline.SCALE] = scaleMix;
			this.frames[frameIndex + TransformConstraintTimeline.SHEAR] = shearMix;
		};
		TransformConstraintTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
			var frames = this.frames;
			var constraint = skeleton.transformConstraints[this.transformConstraintIndex];
			if (time < frames[0]) {
				var data = constraint.data;
				switch (blend) {
					case MixBlend.setup:
						constraint.rotateMix = data.rotateMix;
						constraint.translateMix = data.translateMix;
						constraint.scaleMix = data.scaleMix;
						constraint.shearMix = data.shearMix;
						return;
					case MixBlend.first:
						constraint.rotateMix += (data.rotateMix - constraint.rotateMix) * alpha;
						constraint.translateMix += (data.translateMix - constraint.translateMix) * alpha;
						constraint.scaleMix += (data.scaleMix - constraint.scaleMix) * alpha;
						constraint.shearMix += (data.shearMix - constraint.shearMix) * alpha;
				}
				return;
			}
			var rotate = 0, translate = 0, scale = 0, shear = 0;
			if (time >= frames[frames.length - TransformConstraintTimeline.ENTRIES]) {
				var i = frames.length;
				rotate = frames[i + TransformConstraintTimeline.PREV_ROTATE];
				translate = frames[i + TransformConstraintTimeline.PREV_TRANSLATE];
				scale = frames[i + TransformConstraintTimeline.PREV_SCALE];
				shear = frames[i + TransformConstraintTimeline.PREV_SHEAR];
			}
			else {
				var frame = Animation.binarySearch(frames, time, TransformConstraintTimeline.ENTRIES);
				rotate = frames[frame + TransformConstraintTimeline.PREV_ROTATE];
				translate = frames[frame + TransformConstraintTimeline.PREV_TRANSLATE];
				scale = frames[frame + TransformConstraintTimeline.PREV_SCALE];
				shear = frames[frame + TransformConstraintTimeline.PREV_SHEAR];
				var frameTime = frames[frame];
				var percent = this.getCurvePercent(frame / TransformConstraintTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + TransformConstraintTimeline.PREV_TIME] - frameTime));
				rotate += (frames[frame + TransformConstraintTimeline.ROTATE] - rotate) * percent;
				translate += (frames[frame + TransformConstraintTimeline.TRANSLATE] - translate) * percent;
				scale += (frames[frame + TransformConstraintTimeline.SCALE] - scale) * percent;
				shear += (frames[frame + TransformConstraintTimeline.SHEAR] - shear) * percent;
			}
			if (blend == MixBlend.setup) {
				var data = constraint.data;
				constraint.rotateMix = data.rotateMix + (rotate - data.rotateMix) * alpha;
				constraint.translateMix = data.translateMix + (translate - data.translateMix) * alpha;
				constraint.scaleMix = data.scaleMix + (scale - data.scaleMix) * alpha;
				constraint.shearMix = data.shearMix + (shear - data.shearMix) * alpha;
			}
			else {
				constraint.rotateMix += (rotate - constraint.rotateMix) * alpha;
				constraint.translateMix += (translate - constraint.translateMix) * alpha;
				constraint.scaleMix += (scale - constraint.scaleMix) * alpha;
				constraint.shearMix += (shear - constraint.shearMix) * alpha;
			}
		};
		TransformConstraintTimeline.ENTRIES = 5;
		TransformConstraintTimeline.PREV_TIME = -5;
		TransformConstraintTimeline.PREV_ROTATE = -4;
		TransformConstraintTimeline.PREV_TRANSLATE = -3;
		TransformConstraintTimeline.PREV_SCALE = -2;
		TransformConstraintTimeline.PREV_SHEAR = -1;
		TransformConstraintTimeline.ROTATE = 1;
		TransformConstraintTimeline.TRANSLATE = 2;
		TransformConstraintTimeline.SCALE = 3;
		TransformConstraintTimeline.SHEAR = 4;
		return TransformConstraintTimeline;
	}(CurveTimeline));
	spine.TransformConstraintTimeline = TransformConstraintTimeline;
	var PathConstraintPositionTimeline = (function (_super) {
		__extends(PathConstraintPositionTimeline, _super);
		function PathConstraintPositionTimeline(frameCount) {
			var _this = _super.call(this, frameCount) || this;
			_this.frames = spine.Utils.newFloatArray(frameCount * PathConstraintPositionTimeline.ENTRIES);
			return _this;
		}
		PathConstraintPositionTimeline.prototype.getPropertyId = function () {
			return (TimelineType.pathConstraintPosition << 24) + this.pathConstraintIndex;
		};
		PathConstraintPositionTimeline.prototype.setFrame = function (frameIndex, time, value) {
			frameIndex *= PathConstraintPositionTimeline.ENTRIES;
			this.frames[frameIndex] = time;
			this.frames[frameIndex + PathConstraintPositionTimeline.VALUE] = value;
		};
		PathConstraintPositionTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
			var frames = this.frames;
			var constraint = skeleton.pathConstraints[this.pathConstraintIndex];
			if (time < frames[0]) {
				switch (blend) {
					case MixBlend.setup:
						constraint.position = constraint.data.position;
						return;
					case MixBlend.first:
						constraint.position += (constraint.data.position - constraint.position) * alpha;
				}
				return;
			}
			var position = 0;
			if (time >= frames[frames.length - PathConstraintPositionTimeline.ENTRIES])
				position = frames[frames.length + PathConstraintPositionTimeline.PREV_VALUE];
			else {
				var frame = Animation.binarySearch(frames, time, PathConstraintPositionTimeline.ENTRIES);
				position = frames[frame + PathConstraintPositionTimeline.PREV_VALUE];
				var frameTime = frames[frame];
				var percent = this.getCurvePercent(frame / PathConstraintPositionTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + PathConstraintPositionTimeline.PREV_TIME] - frameTime));
				position += (frames[frame + PathConstraintPositionTimeline.VALUE] - position) * percent;
			}
			if (blend == MixBlend.setup)
				constraint.position = constraint.data.position + (position - constraint.data.position) * alpha;
			else
				constraint.position += (position - constraint.position) * alpha;
		};
		PathConstraintPositionTimeline.ENTRIES = 2;
		PathConstraintPositionTimeline.PREV_TIME = -2;
		PathConstraintPositionTimeline.PREV_VALUE = -1;
		PathConstraintPositionTimeline.VALUE = 1;
		return PathConstraintPositionTimeline;
	}(CurveTimeline));
	spine.PathConstraintPositionTimeline = PathConstraintPositionTimeline;
	var PathConstraintSpacingTimeline = (function (_super) {
		__extends(PathConstraintSpacingTimeline, _super);
		function PathConstraintSpacingTimeline(frameCount) {
			return _super.call(this, frameCount) || this;
		}
		PathConstraintSpacingTimeline.prototype.getPropertyId = function () {
			return (TimelineType.pathConstraintSpacing << 24) + this.pathConstraintIndex;
		};
		PathConstraintSpacingTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
			var frames = this.frames;
			var constraint = skeleton.pathConstraints[this.pathConstraintIndex];
			if (time < frames[0]) {
				switch (blend) {
					case MixBlend.setup:
						constraint.spacing = constraint.data.spacing;
						return;
					case MixBlend.first:
						constraint.spacing += (constraint.data.spacing - constraint.spacing) * alpha;
				}
				return;
			}
			var spacing = 0;
			if (time >= frames[frames.length - PathConstraintSpacingTimeline.ENTRIES])
				spacing = frames[frames.length + PathConstraintSpacingTimeline.PREV_VALUE];
			else {
				var frame = Animation.binarySearch(frames, time, PathConstraintSpacingTimeline.ENTRIES);
				spacing = frames[frame + PathConstraintSpacingTimeline.PREV_VALUE];
				var frameTime = frames[frame];
				var percent = this.getCurvePercent(frame / PathConstraintSpacingTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + PathConstraintSpacingTimeline.PREV_TIME] - frameTime));
				spacing += (frames[frame + PathConstraintSpacingTimeline.VALUE] - spacing) * percent;
			}
			if (blend == MixBlend.setup)
				constraint.spacing = constraint.data.spacing + (spacing - constraint.data.spacing) * alpha;
			else
				constraint.spacing += (spacing - constraint.spacing) * alpha;
		};
		return PathConstraintSpacingTimeline;
	}(PathConstraintPositionTimeline));
	spine.PathConstraintSpacingTimeline = PathConstraintSpacingTimeline;
	var PathConstraintMixTimeline = (function (_super) {
		__extends(PathConstraintMixTimeline, _super);
		function PathConstraintMixTimeline(frameCount) {
			var _this = _super.call(this, frameCount) || this;
			_this.frames = spine.Utils.newFloatArray(frameCount * PathConstraintMixTimeline.ENTRIES);
			return _this;
		}
		PathConstraintMixTimeline.prototype.getPropertyId = function () {
			return (TimelineType.pathConstraintMix << 24) + this.pathConstraintIndex;
		};
		PathConstraintMixTimeline.prototype.setFrame = function (frameIndex, time, rotateMix, translateMix) {
			frameIndex *= PathConstraintMixTimeline.ENTRIES;
			this.frames[frameIndex] = time;
			this.frames[frameIndex + PathConstraintMixTimeline.ROTATE] = rotateMix;
			this.frames[frameIndex + PathConstraintMixTimeline.TRANSLATE] = translateMix;
		};
		PathConstraintMixTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
			var frames = this.frames;
			var constraint = skeleton.pathConstraints[this.pathConstraintIndex];
			if (time < frames[0]) {
				switch (blend) {
					case MixBlend.setup:
						constraint.rotateMix = constraint.data.rotateMix;
						constraint.translateMix = constraint.data.translateMix;
						return;
					case MixBlend.first:
						constraint.rotateMix += (constraint.data.rotateMix - constraint.rotateMix) * alpha;
						constraint.translateMix += (constraint.data.translateMix - constraint.translateMix) * alpha;
				}
				return;
			}
			var rotate = 0, translate = 0;
			if (time >= frames[frames.length - PathConstraintMixTimeline.ENTRIES]) {
				rotate = frames[frames.length + PathConstraintMixTimeline.PREV_ROTATE];
				translate = frames[frames.length + PathConstraintMixTimeline.PREV_TRANSLATE];
			}
			else {
				var frame = Animation.binarySearch(frames, time, PathConstraintMixTimeline.ENTRIES);
				rotate = frames[frame + PathConstraintMixTimeline.PREV_ROTATE];
				translate = frames[frame + PathConstraintMixTimeline.PREV_TRANSLATE];
				var frameTime = frames[frame];
				var percent = this.getCurvePercent(frame / PathConstraintMixTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + PathConstraintMixTimeline.PREV_TIME] - frameTime));
				rotate += (frames[frame + PathConstraintMixTimeline.ROTATE] - rotate) * percent;
				translate += (frames[frame + PathConstraintMixTimeline.TRANSLATE] - translate) * percent;
			}
			if (blend == MixBlend.setup) {
				constraint.rotateMix = constraint.data.rotateMix + (rotate - constraint.data.rotateMix) * alpha;
				constraint.translateMix = constraint.data.translateMix + (translate - constraint.data.translateMix) * alpha;
			}
			else {
				constraint.rotateMix += (rotate - constraint.rotateMix) * alpha;
				constraint.translateMix += (translate - constraint.translateMix) * alpha;
			}
		};
		PathConstraintMixTimeline.ENTRIES = 3;
		PathConstraintMixTimeline.PREV_TIME = -3;
		PathConstraintMixTimeline.PREV_ROTATE = -2;
		PathConstraintMixTimeline.PREV_TRANSLATE = -1;
		PathConstraintMixTimeline.ROTATE = 1;
		PathConstraintMixTimeline.TRANSLATE = 2;
		return PathConstraintMixTimeline;
	}(CurveTimeline));
	spine.PathConstraintMixTimeline = PathConstraintMixTimeline;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var AnimationState = (function () {
		function AnimationState(data) {
			this.tracks = new Array();
			this.events = new Array();
			this.listeners = new Array();
			this.queue = new EventQueue(this);
			this.propertyIDs = new spine.IntSet();
			this.animationsChanged = false;
			this.timeScale = 1;
			this.trackEntryPool = new spine.Pool(function () { return new TrackEntry(); });
			this.data = data;
		}
		AnimationState.prototype.update = function (delta) {
			delta *= this.timeScale;
			var tracks = this.tracks;
			for (var i = 0, n = tracks.length; i < n; i++) {
				var current = tracks[i];
				if (current == null)
					continue;
				current.animationLast = current.nextAnimationLast;
				current.trackLast = current.nextTrackLast;
				var currentDelta = delta * current.timeScale;
				if (current.delay > 0) {
					current.delay -= currentDelta;
					if (current.delay > 0)
						continue;
					currentDelta = -current.delay;
					current.delay = 0;
				}
				var next = current.next;
				if (next != null) {
					var nextTime = current.trackLast - next.delay;
					if (nextTime >= 0) {
						next.delay = 0;
						next.trackTime = current.timeScale == 0 ? 0 : (nextTime / current.timeScale + delta) * next.timeScale;
						current.trackTime += currentDelta;
						this.setCurrent(i, next, true);
						while (next.mixingFrom != null) {
							next.mixTime += delta;
							next = next.mixingFrom;
						}
						continue;
					}
				}
				else if (current.trackLast >= current.trackEnd && current.mixingFrom == null) {
					tracks[i] = null;
					this.queue.end(current);
					this.disposeNext(current);
					continue;
				}
				if (current.mixingFrom != null && this.updateMixingFrom(current, delta)) {
					var from = current.mixingFrom;
					current.mixingFrom = null;
					if (from != null)
						from.mixingTo = null;
					while (from != null) {
						this.queue.end(from);
						from = from.mixingFrom;
					}
				}
				current.trackTime += currentDelta;
			}
			this.queue.drain();
		};
		AnimationState.prototype.updateMixingFrom = function (to, delta) {
			var from = to.mixingFrom;
			if (from == null)
				return true;
			var finished = this.updateMixingFrom(from, delta);
			from.animationLast = from.nextAnimationLast;
			from.trackLast = from.nextTrackLast;
			if (to.mixTime > 0 && to.mixTime >= to.mixDuration) {
				if (from.totalAlpha == 0 || to.mixDuration == 0) {
					to.mixingFrom = from.mixingFrom;
					if (from.mixingFrom != null)
						from.mixingFrom.mixingTo = to;
					to.interruptAlpha = from.interruptAlpha;
					this.queue.end(from);
				}
				return finished;
			}
			from.trackTime += delta * from.timeScale;
			to.mixTime += delta;
			return false;
		};
		AnimationState.prototype.apply = function (skeleton) {
			if (skeleton == null)
				throw new Error("skeleton cannot be null.");
			if (this.animationsChanged)
				this._animationsChanged();
			var events = this.events;
			var tracks = this.tracks;
			var applied = false;
			for (var i = 0, n = tracks.length; i < n; i++) {
				var current = tracks[i];
				if (current == null || current.delay > 0)
					continue;
				applied = true;
				var blend = i == 0 ? spine.MixBlend.first : current.mixBlend;
				var mix = current.alpha;
				if (current.mixingFrom != null)
					mix *= this.applyMixingFrom(current, skeleton, blend);
				else if (current.trackTime >= current.trackEnd && current.next == null)
					mix = 0;
				var animationLast = current.animationLast, animationTime = current.getAnimationTime();
				var timelineCount = current.animation.timelines.length;
				var timelines = current.animation.timelines;
				if ((i == 0 && mix == 1) || blend == spine.MixBlend.add) {
					for (var ii = 0; ii < timelineCount; ii++)
						timelines[ii].apply(skeleton, animationLast, animationTime, events, mix, blend, spine.MixDirection["in"]);
				}
				else {
					var timelineMode = current.timelineMode;
					var firstFrame = current.timelinesRotation.length == 0;
					if (firstFrame)
						spine.Utils.setArraySize(current.timelinesRotation, timelineCount << 1, null);
					var timelinesRotation = current.timelinesRotation;
					for (var ii = 0; ii < timelineCount; ii++) {
						var timeline = timelines[ii];
						var timelineBlend = timelineMode[ii] == AnimationState.SUBSEQUENT ? blend : spine.MixBlend.setup;
						if (timeline instanceof spine.RotateTimeline) {
							this.applyRotateTimeline(timeline, skeleton, animationTime, mix, timelineBlend, timelinesRotation, ii << 1, firstFrame);
						}
						else {
							spine.Utils.webkit602BugfixHelper(mix, blend);
							timeline.apply(skeleton, animationLast, animationTime, events, mix, timelineBlend, spine.MixDirection["in"]);
						}
					}
				}
				this.queueEvents(current, animationTime);
				events.length = 0;
				current.nextAnimationLast = animationTime;
				current.nextTrackLast = current.trackTime;
			}
			this.queue.drain();
			return applied;
		};
		AnimationState.prototype.applyMixingFrom = function (to, skeleton, blend) {
			var from = to.mixingFrom;
			if (from.mixingFrom != null)
				this.applyMixingFrom(from, skeleton, blend);
			var mix = 0;
			if (to.mixDuration == 0) {
				mix = 1;
				if (blend == spine.MixBlend.first)
					blend = spine.MixBlend.setup;
			}
			else {
				mix = to.mixTime / to.mixDuration;
				if (mix > 1)
					mix = 1;
				if (blend != spine.MixBlend.first)
					blend = from.mixBlend;
			}
			var events = mix < from.eventThreshold ? this.events : null;
			var attachments = mix < from.attachmentThreshold, drawOrder = mix < from.drawOrderThreshold;
			var animationLast = from.animationLast, animationTime = from.getAnimationTime();
			var timelineCount = from.animation.timelines.length;
			var timelines = from.animation.timelines;
			var alphaHold = from.alpha * to.interruptAlpha, alphaMix = alphaHold * (1 - mix);
			if (blend == spine.MixBlend.add) {
				for (var i = 0; i < timelineCount; i++)
					timelines[i].apply(skeleton, animationLast, animationTime, events, alphaMix, blend, spine.MixDirection.out);
			}
			else {
				var timelineMode = from.timelineMode;
				var timelineHoldMix = from.timelineHoldMix;
				var firstFrame = from.timelinesRotation.length == 0;
				if (firstFrame)
					spine.Utils.setArraySize(from.timelinesRotation, timelineCount << 1, null);
				var timelinesRotation = from.timelinesRotation;
				from.totalAlpha = 0;
				for (var i = 0; i < timelineCount; i++) {
					var timeline = timelines[i];
					var direction = spine.MixDirection.out;
					var timelineBlend = void 0;
					var alpha = 0;
					switch (timelineMode[i]) {
						case AnimationState.SUBSEQUENT:
							if (!attachments && timeline instanceof spine.AttachmentTimeline)
								continue;
							if (!drawOrder && timeline instanceof spine.DrawOrderTimeline)
								continue;
							timelineBlend = blend;
							alpha = alphaMix;
							break;
						case AnimationState.FIRST:
							timelineBlend = spine.MixBlend.setup;
							alpha = alphaMix;
							break;
						case AnimationState.HOLD:
							timelineBlend = spine.MixBlend.setup;
							alpha = alphaHold;
							break;
						default:
							timelineBlend = spine.MixBlend.setup;
							var holdMix = timelineHoldMix[i];
							alpha = alphaHold * Math.max(0, 1 - holdMix.mixTime / holdMix.mixDuration);
							break;
					}
					from.totalAlpha += alpha;
					if (timeline instanceof spine.RotateTimeline)
						this.applyRotateTimeline(timeline, skeleton, animationTime, alpha, timelineBlend, timelinesRotation, i << 1, firstFrame);
					else {
						spine.Utils.webkit602BugfixHelper(alpha, blend);
						if (timelineBlend == spine.MixBlend.setup) {
							if (timeline instanceof spine.AttachmentTimeline) {
								if (attachments)
									direction = spine.MixDirection.out;
							}
							else if (timeline instanceof spine.DrawOrderTimeline) {
								if (drawOrder)
									direction = spine.MixDirection.out;
							}
						}
						timeline.apply(skeleton, animationLast, animationTime, events, alpha, timelineBlend, direction);
					}
				}
			}
			if (to.mixDuration > 0)
				this.queueEvents(from, animationTime);
			this.events.length = 0;
			from.nextAnimationLast = animationTime;
			from.nextTrackLast = from.trackTime;
			return mix;
		};
		AnimationState.prototype.applyRotateTimeline = function (timeline, skeleton, time, alpha, blend, timelinesRotation, i, firstFrame) {
			if (firstFrame)
				timelinesRotation[i] = 0;
			if (alpha == 1) {
				timeline.apply(skeleton, 0, time, null, 1, blend, spine.MixDirection["in"]);
				return;
			}
			var rotateTimeline = timeline;
			var frames = rotateTimeline.frames;
			var bone = skeleton.bones[rotateTimeline.boneIndex];
			var r1 = 0, r2 = 0;
			if (time < frames[0]) {
				switch (blend) {
					case spine.MixBlend.setup:
						bone.rotation = bone.data.rotation;
					default:
						return;
					case spine.MixBlend.first:
						r1 = bone.rotation;
						r2 = bone.data.rotation;
				}
			}
			else {
				r1 = blend == spine.MixBlend.setup ? bone.data.rotation : bone.rotation;
				if (time >= frames[frames.length - spine.RotateTimeline.ENTRIES])
					r2 = bone.data.rotation + frames[frames.length + spine.RotateTimeline.PREV_ROTATION];
				else {
					var frame = spine.Animation.binarySearch(frames, time, spine.RotateTimeline.ENTRIES);
					var prevRotation = frames[frame + spine.RotateTimeline.PREV_ROTATION];
					var frameTime = frames[frame];
					var percent = rotateTimeline.getCurvePercent((frame >> 1) - 1, 1 - (time - frameTime) / (frames[frame + spine.RotateTimeline.PREV_TIME] - frameTime));
					r2 = frames[frame + spine.RotateTimeline.ROTATION] - prevRotation;
					r2 -= (16384 - ((16384.499999999996 - r2 / 360) | 0)) * 360;
					r2 = prevRotation + r2 * percent + bone.data.rotation;
					r2 -= (16384 - ((16384.499999999996 - r2 / 360) | 0)) * 360;
				}
			}
			var total = 0, diff = r2 - r1;
			diff -= (16384 - ((16384.499999999996 - diff / 360) | 0)) * 360;
			if (diff == 0) {
				total = timelinesRotation[i];
			}
			else {
				var lastTotal = 0, lastDiff = 0;
				if (firstFrame) {
					lastTotal = 0;
					lastDiff = diff;
				}
				else {
					lastTotal = timelinesRotation[i];
					lastDiff = timelinesRotation[i + 1];
				}
				var current = diff > 0, dir = lastTotal >= 0;
				if (spine.MathUtils.signum(lastDiff) != spine.MathUtils.signum(diff) && Math.abs(lastDiff) <= 90) {
					if (Math.abs(lastTotal) > 180)
						lastTotal += 360 * spine.MathUtils.signum(lastTotal);
					dir = current;
				}
				total = diff + lastTotal - lastTotal % 360;
				if (dir != current)
					total += 360 * spine.MathUtils.signum(lastTotal);
				timelinesRotation[i] = total;
			}
			timelinesRotation[i + 1] = diff;
			r1 += total * alpha;
			bone.rotation = r1 - (16384 - ((16384.499999999996 - r1 / 360) | 0)) * 360;
		};
		AnimationState.prototype.queueEvents = function (entry, animationTime) {
			var animationStart = entry.animationStart, animationEnd = entry.animationEnd;
			var duration = animationEnd - animationStart;
			var trackLastWrapped = entry.trackLast % duration;
			var events = this.events;
			var i = 0, n = events.length;
			for (; i < n; i++) {
				var event_1 = events[i];
				if (event_1.time < trackLastWrapped)
					break;
				if (event_1.time > animationEnd)
					continue;
				this.queue.event(entry, event_1);
			}
			var complete = false;
			if (entry.loop)
				complete = duration == 0 || trackLastWrapped > entry.trackTime % duration;
			else
				complete = animationTime >= animationEnd && entry.animationLast < animationEnd;
			if (complete)
				this.queue.complete(entry);
			for (; i < n; i++) {
				var event_2 = events[i];
				if (event_2.time < animationStart)
					continue;
				this.queue.event(entry, events[i]);
			}
		};
		AnimationState.prototype.clearTracks = function () {
			var oldDrainDisabled = this.queue.drainDisabled;
			this.queue.drainDisabled = true;
			for (var i = 0, n = this.tracks.length; i < n; i++)
				this.clearTrack(i);
			this.tracks.length = 0;
			this.queue.drainDisabled = oldDrainDisabled;
			this.queue.drain();
		};
		AnimationState.prototype.clearTrack = function (trackIndex) {
			if (trackIndex >= this.tracks.length)
				return;
			var current = this.tracks[trackIndex];
			if (current == null)
				return;
			this.queue.end(current);
			this.disposeNext(current);
			var entry = current;
			while (true) {
				var from = entry.mixingFrom;
				if (from == null)
					break;
				this.queue.end(from);
				entry.mixingFrom = null;
				entry.mixingTo = null;
				entry = from;
			}
			this.tracks[current.trackIndex] = null;
			this.queue.drain();
		};
		AnimationState.prototype.setCurrent = function (index, current, interrupt) {
			var from = this.expandToIndex(index);
			this.tracks[index] = current;
			if (from != null) {
				if (interrupt)
					this.queue.interrupt(from);
				current.mixingFrom = from;
				from.mixingTo = current;
				current.mixTime = 0;
				if (from.mixingFrom != null && from.mixDuration > 0)
					current.interruptAlpha *= Math.min(1, from.mixTime / from.mixDuration);
				from.timelinesRotation.length = 0;
			}
			this.queue.start(current);
		};
		AnimationState.prototype.setAnimation = function (trackIndex, animationName, loop) {
			var animation = this.data.skeletonData.findAnimation(animationName);
			if (animation == null)
				throw new Error("Animation not found: " + animationName);
			return this.setAnimationWith(trackIndex, animation, loop);
		};
		AnimationState.prototype.setAnimationWith = function (trackIndex, animation, loop) {
			if (animation == null)
				throw new Error("animation cannot be null.");
			var interrupt = true;
			var current = this.expandToIndex(trackIndex);
			if (current != null) {
				if (current.nextTrackLast == -1) {
					this.tracks[trackIndex] = current.mixingFrom;
					this.queue.interrupt(current);
					this.queue.end(current);
					this.disposeNext(current);
					current = current.mixingFrom;
					interrupt = false;
				}
				else
					this.disposeNext(current);
			}
			var entry = this.trackEntry(trackIndex, animation, loop, current);
			this.setCurrent(trackIndex, entry, interrupt);
			this.queue.drain();
			return entry;
		};
		AnimationState.prototype.addAnimation = function (trackIndex, animationName, loop, delay) {
			var animation = this.data.skeletonData.findAnimation(animationName);
			if (animation == null)
				throw new Error("Animation not found: " + animationName);
			return this.addAnimationWith(trackIndex, animation, loop, delay);
		};
		AnimationState.prototype.addAnimationWith = function (trackIndex, animation, loop, delay) {
			if (animation == null)
				throw new Error("animation cannot be null.");
			var last = this.expandToIndex(trackIndex);
			if (last != null) {
				while (last.next != null)
					last = last.next;
			}
			var entry = this.trackEntry(trackIndex, animation, loop, last);
			if (last == null) {
				this.setCurrent(trackIndex, entry, true);
				this.queue.drain();
			}
			else {
				last.next = entry;
				if (delay <= 0) {
					var duration = last.animationEnd - last.animationStart;
					if (duration != 0) {
						if (last.loop)
							delay += duration * (1 + ((last.trackTime / duration) | 0));
						else
							delay += Math.max(duration, last.trackTime);
						delay -= this.data.getMix(last.animation, animation);
					}
					else
						delay = last.trackTime;
				}
			}
			entry.delay = delay;
			return entry;
		};
		AnimationState.prototype.setEmptyAnimation = function (trackIndex, mixDuration) {
			var entry = this.setAnimationWith(trackIndex, AnimationState.emptyAnimation, false);
			entry.mixDuration = mixDuration;
			entry.trackEnd = mixDuration;
			return entry;
		};
		AnimationState.prototype.addEmptyAnimation = function (trackIndex, mixDuration, delay) {
			if (delay <= 0)
				delay -= mixDuration;
			var entry = this.addAnimationWith(trackIndex, AnimationState.emptyAnimation, false, delay);
			entry.mixDuration = mixDuration;
			entry.trackEnd = mixDuration;
			return entry;
		};
		AnimationState.prototype.setEmptyAnimations = function (mixDuration) {
			var oldDrainDisabled = this.queue.drainDisabled;
			this.queue.drainDisabled = true;
			for (var i = 0, n = this.tracks.length; i < n; i++) {
				var current = this.tracks[i];
				if (current != null)
					this.setEmptyAnimation(current.trackIndex, mixDuration);
			}
			this.queue.drainDisabled = oldDrainDisabled;
			this.queue.drain();
		};
		AnimationState.prototype.expandToIndex = function (index) {
			if (index < this.tracks.length)
				return this.tracks[index];
			spine.Utils.ensureArrayCapacity(this.tracks, index + 1, null);
			this.tracks.length = index + 1;
			return null;
		};
		AnimationState.prototype.trackEntry = function (trackIndex, animation, loop, last) {
			var entry = this.trackEntryPool.obtain();
			entry.trackIndex = trackIndex;
			entry.animation = animation;
			entry.loop = loop;
			entry.holdPrevious = false;
			entry.eventThreshold = 0;
			entry.attachmentThreshold = 0;
			entry.drawOrderThreshold = 0;
			entry.animationStart = 0;
			entry.animationEnd = animation.duration;
			entry.animationLast = -1;
			entry.nextAnimationLast = -1;
			entry.delay = 0;
			entry.trackTime = 0;
			entry.trackLast = -1;
			entry.nextTrackLast = -1;
			entry.trackEnd = Number.MAX_VALUE;
			entry.timeScale = 1;
			entry.alpha = 1;
			entry.interruptAlpha = 1;
			entry.mixTime = 0;
			entry.mixDuration = last == null ? 0 : this.data.getMix(last.animation, animation);
			return entry;
		};
		AnimationState.prototype.disposeNext = function (entry) {
			var next = entry.next;
			while (next != null) {
				this.queue.dispose(next);
				next = next.next;
			}
			entry.next = null;
		};
		AnimationState.prototype._animationsChanged = function () {
			this.animationsChanged = false;
			this.propertyIDs.clear();
			for (var i = 0, n = this.tracks.length; i < n; i++) {
				var entry = this.tracks[i];
				if (entry == null)
					continue;
				while (entry.mixingFrom != null)
					entry = entry.mixingFrom;
				do {
					if (entry.mixingFrom == null || entry.mixBlend != spine.MixBlend.add)
						this.setTimelineModes(entry);
					entry = entry.mixingTo;
				} while (entry != null);
			}
		};
		AnimationState.prototype.setTimelineModes = function (entry) {
			var to = entry.mixingTo;
			var timelines = entry.animation.timelines;
			var timelinesCount = entry.animation.timelines.length;
			var timelineMode = spine.Utils.setArraySize(entry.timelineMode, timelinesCount);
			entry.timelineHoldMix.length = 0;
			var timelineDipMix = spine.Utils.setArraySize(entry.timelineHoldMix, timelinesCount);
			var propertyIDs = this.propertyIDs;
			if (to != null && to.holdPrevious) {
				for (var i = 0; i < timelinesCount; i++) {
					propertyIDs.add(timelines[i].getPropertyId());
					timelineMode[i] = AnimationState.HOLD;
				}
				return;
			}
			outer: for (var i = 0; i < timelinesCount; i++) {
				var id = timelines[i].getPropertyId();
				if (!propertyIDs.add(id))
					timelineMode[i] = AnimationState.SUBSEQUENT;
				else if (to == null || !this.hasTimeline(to, id))
					timelineMode[i] = AnimationState.FIRST;
				else {
					for (var next = to.mixingTo; next != null; next = next.mixingTo) {
						if (this.hasTimeline(next, id))
							continue;
						if (entry.mixDuration > 0) {
							timelineMode[i] = AnimationState.HOLD_MIX;
							timelineDipMix[i] = next;
							continue outer;
						}
						break;
					}
					timelineMode[i] = AnimationState.HOLD;
				}
			}
		};
		AnimationState.prototype.hasTimeline = function (entry, id) {
			var timelines = entry.animation.timelines;
			for (var i = 0, n = timelines.length; i < n; i++)
				if (timelines[i].getPropertyId() == id)
					return true;
			return false;
		};
		AnimationState.prototype.getCurrent = function (trackIndex) {
			if (trackIndex >= this.tracks.length)
				return null;
			return this.tracks[trackIndex];
		};
		AnimationState.prototype.addListener = function (listener) {
			if (listener == null)
				throw new Error("listener cannot be null.");
			this.listeners.push(listener);
		};
		AnimationState.prototype.removeListener = function (listener) {
			var index = this.listeners.indexOf(listener);
			if (index >= 0)
				this.listeners.splice(index, 1);
		};
		AnimationState.prototype.clearListeners = function () {
			this.listeners.length = 0;
		};
		AnimationState.prototype.clearListenerNotifications = function () {
			this.queue.clear();
		};
		AnimationState.emptyAnimation = new spine.Animation("<empty>", [], 0);
		AnimationState.SUBSEQUENT = 0;
		AnimationState.FIRST = 1;
		AnimationState.HOLD = 2;
		AnimationState.HOLD_MIX = 3;
		return AnimationState;
	}());
	spine.AnimationState = AnimationState;
	var TrackEntry = (function () {
		function TrackEntry() {
			this.mixBlend = spine.MixBlend.replace;
			this.timelineMode = new Array();
			this.timelineHoldMix = new Array();
			this.timelinesRotation = new Array();
		}
		TrackEntry.prototype.reset = function () {
			this.next = null;
			this.mixingFrom = null;
			this.mixingTo = null;
			this.animation = null;
			this.listener = null;
			this.timelineMode.length = 0;
			this.timelineHoldMix.length = 0;
			this.timelinesRotation.length = 0;
		};
		TrackEntry.prototype.getAnimationTime = function () {
			if (this.loop) {
				var duration = this.animationEnd - this.animationStart;
				if (duration == 0)
					return this.animationStart;
				return (this.trackTime % duration) + this.animationStart;
			}
			return Math.min(this.trackTime + this.animationStart, this.animationEnd);
		};
		TrackEntry.prototype.setAnimationLast = function (animationLast) {
			this.animationLast = animationLast;
			this.nextAnimationLast = animationLast;
		};
		TrackEntry.prototype.isComplete = function () {
			return this.trackTime >= this.animationEnd - this.animationStart;
		};
		TrackEntry.prototype.resetRotationDirections = function () {
			this.timelinesRotation.length = 0;
		};
		return TrackEntry;
	}());
	spine.TrackEntry = TrackEntry;
	var EventQueue = (function () {
		function EventQueue(animState) {
			this.objects = [];
			this.drainDisabled = false;
			this.animState = animState;
		}
		EventQueue.prototype.start = function (entry) {
			this.objects.push(EventType.start);
			this.objects.push(entry);
			this.animState.animationsChanged = true;
		};
		EventQueue.prototype.interrupt = function (entry) {
			this.objects.push(EventType.interrupt);
			this.objects.push(entry);
		};
		EventQueue.prototype.end = function (entry) {
			this.objects.push(EventType.end);
			this.objects.push(entry);
			this.animState.animationsChanged = true;
		};
		EventQueue.prototype.dispose = function (entry) {
			this.objects.push(EventType.dispose);
			this.objects.push(entry);
		};
		EventQueue.prototype.complete = function (entry) {
			this.objects.push(EventType.complete);
			this.objects.push(entry);
		};
		EventQueue.prototype.event = function (entry, event) {
			this.objects.push(EventType.event);
			this.objects.push(entry);
			this.objects.push(event);
		};
		EventQueue.prototype.drain = function () {
			if (this.drainDisabled)
				return;
			this.drainDisabled = true;
			var objects = this.objects;
			var listeners = this.animState.listeners;
			for (var i = 0; i < objects.length; i += 2) {
				var type = objects[i];
				var entry = objects[i + 1];
				switch (type) {
					case EventType.start:
						if (entry.listener != null && entry.listener.start)
							entry.listener.start(entry);
						for (var ii = 0; ii < listeners.length; ii++)
							if (listeners[ii].start)
								listeners[ii].start(entry);
						break;
					case EventType.interrupt:
						if (entry.listener != null && entry.listener.interrupt)
							entry.listener.interrupt(entry);
						for (var ii = 0; ii < listeners.length; ii++)
							if (listeners[ii].interrupt)
								listeners[ii].interrupt(entry);
						break;
					case EventType.end:
						if (entry.listener != null && entry.listener.end)
							entry.listener.end(entry);
						for (var ii = 0; ii < listeners.length; ii++)
							if (listeners[ii].end)
								listeners[ii].end(entry);
					case EventType.dispose:
						if (entry.listener != null && entry.listener.dispose)
							entry.listener.dispose(entry);
						for (var ii = 0; ii < listeners.length; ii++)
							if (listeners[ii].dispose)
								listeners[ii].dispose(entry);
						this.animState.trackEntryPool.free(entry);
						break;
					case EventType.complete:
						if (entry.listener != null && entry.listener.complete)
							entry.listener.complete(entry);
						for (var ii = 0; ii < listeners.length; ii++)
							if (listeners[ii].complete)
								listeners[ii].complete(entry);
						break;
					case EventType.event:
						var event_3 = objects[i++ + 2];
						if (entry.listener != null && entry.listener.event)
							entry.listener.event(entry, event_3);
						for (var ii = 0; ii < listeners.length; ii++)
							if (listeners[ii].event)
								listeners[ii].event(entry, event_3);
						break;
				}
			}
			this.clear();
			this.drainDisabled = false;
		};
		EventQueue.prototype.clear = function () {
			this.objects.length = 0;
		};
		return EventQueue;
	}());
	spine.EventQueue = EventQueue;
	var EventType;
	(function (EventType) {
		EventType[EventType["start"] = 0] = "start";
		EventType[EventType["interrupt"] = 1] = "interrupt";
		EventType[EventType["end"] = 2] = "end";
		EventType[EventType["dispose"] = 3] = "dispose";
		EventType[EventType["complete"] = 4] = "complete";
		EventType[EventType["event"] = 5] = "event";
	})(EventType = spine.EventType || (spine.EventType = {}));
	var AnimationStateAdapter2 = (function () {
		function AnimationStateAdapter2() {
		}
		AnimationStateAdapter2.prototype.start = function (entry) {
		};
		AnimationStateAdapter2.prototype.interrupt = function (entry) {
		};
		AnimationStateAdapter2.prototype.end = function (entry) {
		};
		AnimationStateAdapter2.prototype.dispose = function (entry) {
		};
		AnimationStateAdapter2.prototype.complete = function (entry) {
		};
		AnimationStateAdapter2.prototype.event = function (entry, event) {
		};
		return AnimationStateAdapter2;
	}());
	spine.AnimationStateAdapter2 = AnimationStateAdapter2;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var AnimationStateData = (function () {
		function AnimationStateData(skeletonData) {
			this.animationToMixTime = {};
			this.defaultMix = 0;
			if (skeletonData == null)
				throw new Error("skeletonData cannot be null.");
			this.skeletonData = skeletonData;
		}
		AnimationStateData.prototype.setMix = function (fromName, toName, duration) {
			var from = this.skeletonData.findAnimation(fromName);
			if (from == null)
				throw new Error("Animation not found: " + fromName);
			var to = this.skeletonData.findAnimation(toName);
			if (to == null)
				throw new Error("Animation not found: " + toName);
			this.setMixWith(from, to, duration);
		};
		AnimationStateData.prototype.setMixWith = function (from, to, duration) {
			if (from == null)
				throw new Error("from cannot be null.");
			if (to == null)
				throw new Error("to cannot be null.");
			var key = from.name + "." + to.name;
			this.animationToMixTime[key] = duration;
		};
		AnimationStateData.prototype.getMix = function (from, to) {
			var key = from.name + "." + to.name;
			var value = this.animationToMixTime[key];
			return value === undefined ? this.defaultMix : value;
		};
		return AnimationStateData;
	}());
	spine.AnimationStateData = AnimationStateData;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var AssetManager = (function () {
		function AssetManager(textureLoader, pathPrefix) {
			if (pathPrefix === void 0) { pathPrefix = ""; }
			this.assets = {};
			this.errors = {};
			this.toLoad = 0;
			this.loaded = 0;
			this.textureLoader = textureLoader;
			this.pathPrefix = pathPrefix;
		}
		AssetManager.downloadText = function (url, success, error) {
			var request = new XMLHttpRequest();
			request.open("GET", url, true);
			request.onload = function () {
				if (request.status == 200) {
					success(request.responseText);
				}
				else {
					error(request.status, request.responseText);
				}
			};
			request.onerror = function () {
				error(request.status, request.responseText);
			};
			request.send();
		};
		AssetManager.downloadBinary = function (url, success, error) {
			var request = new XMLHttpRequest();
			request.open("GET", url, true);
			request.responseType = "arraybuffer";
			request.onload = function () {
				if (request.status == 200) {
					success(new Uint8Array(request.response));
				}
				else {
					error(request.status, request.responseText);
				}
			};
			request.onerror = function () {
				error(request.status, request.responseText);
			};
			request.send();
		};
		AssetManager.prototype.loadText = function (path, success, error) {
			var _this = this;
			if (success === void 0) { success = null; }
			if (error === void 0) { error = null; }
			path = this.pathPrefix + path;
			this.toLoad++;
			AssetManager.downloadText(path, function (data) {
				_this.assets[path] = data;
				if (success)
					success(path, data);
				_this.toLoad--;
				_this.loaded++;
			}, function (state, responseText) {
				_this.errors[path] = "Couldn't load text " + path + ": status " + status + ", " + responseText;
				if (error)
					error(path, "Couldn't load text " + path + ": status " + status + ", " + responseText);
				_this.toLoad--;
				_this.loaded++;
			});
		};
		AssetManager.prototype.loadTexture = function (path, success, error) {
			var _this = this;
			if (success === void 0) { success = null; }
			if (error === void 0) { error = null; }
			path = this.pathPrefix + path;
			this.toLoad++;
			var img = new Image();
			img.crossOrigin = "anonymous";
			img.onload = function (ev) {
				var texture = _this.textureLoader(img);
				_this.assets[path] = texture;
				_this.toLoad--;
				_this.loaded++;
				if (success)
					success(path, img);
			};
			img.onerror = function (ev) {
				_this.errors[path] = "Couldn't load image " + path;
				_this.toLoad--;
				_this.loaded++;
				if (error)
					error(path, "Couldn't load image " + path);
			};
			img.src = path;
		};
		AssetManager.prototype.loadTextureData = function (path, data, success, error) {
			var _this = this;
			if (success === void 0) { success = null; }
			if (error === void 0) { error = null; }
			path = this.pathPrefix + path;
			this.toLoad++;
			var img = new Image();
			img.onload = function (ev) {
				var texture = _this.textureLoader(img);
				_this.assets[path] = texture;
				_this.toLoad--;
				_this.loaded++;
				if (success)
					success(path, img);
			};
			img.onerror = function (ev) {
				_this.errors[path] = "Couldn't load image " + path;
				_this.toLoad--;
				_this.loaded++;
				if (error)
					error(path, "Couldn't load image " + path);
			};
			img.src = data;
		};
		AssetManager.prototype.loadTextureAtlas = function (path, success, error) {
			var _this = this;
			if (success === void 0) { success = null; }
			if (error === void 0) { error = null; }
			var parent = path.lastIndexOf("/") >= 0 ? path.substring(0, path.lastIndexOf("/")) : "";
			path = this.pathPrefix + path;
			this.toLoad++;
			AssetManager.downloadText(path, function (atlasData) {
				var pagesLoaded = { count: 0 };
				var atlasPages = new Array();
				try {
					var atlas = new spine.TextureAtlas(atlasData, function (path) {
						atlasPages.push(parent + "/" + path);
						var image = document.createElement("img");
						image.width = 16;
						image.height = 16;
						return new spine.FakeTexture(image);
					});
				}
				catch (e) {
					var ex = e;
					_this.errors[path] = "Couldn't load texture atlas " + path + ": " + ex.message;
					if (error)
						error(path, "Couldn't load texture atlas " + path + ": " + ex.message);
					_this.toLoad--;
					_this.loaded++;
					return;
				}
				var _loop_1 = function (atlasPage) {
					var pageLoadError = false;
					_this.loadTexture(atlasPage, function (imagePath, image) {
						pagesLoaded.count++;
						if (pagesLoaded.count == atlasPages.length) {
							if (!pageLoadError) {
								try {
									var atlas = new spine.TextureAtlas(atlasData, function (path) {
										return _this.get(parent + "/" + path);
									});
									_this.assets[path] = atlas;
									if (success)
										success(path, atlas);
									_this.toLoad--;
									_this.loaded++;
								}
								catch (e) {
									var ex = e;
									_this.errors[path] = "Couldn't load texture atlas " + path + ": " + ex.message;
									if (error)
										error(path, "Couldn't load texture atlas " + path + ": " + ex.message);
									_this.toLoad--;
									_this.loaded++;
								}
							}
							else {
								_this.errors[path] = "Couldn't load texture atlas page " + imagePath + "} of atlas " + path;
								if (error)
									error(path, "Couldn't load texture atlas page " + imagePath + " of atlas " + path);
								_this.toLoad--;
								_this.loaded++;
							}
						}
					}, function (imagePath, errorMessage) {
						pageLoadError = true;
						pagesLoaded.count++;
						if (pagesLoaded.count == atlasPages.length) {
							_this.errors[path] = "Couldn't load texture atlas page " + imagePath + "} of atlas " + path;
							if (error)
								error(path, "Couldn't load texture atlas page " + imagePath + " of atlas " + path);
							_this.toLoad--;
							_this.loaded++;
						}
					});
				};
				for (var _i = 0, atlasPages_1 = atlasPages; _i < atlasPages_1.length; _i++) {
					var atlasPage = atlasPages_1[_i];
					_loop_1(atlasPage);
				}
			}, function (state, responseText) {
				_this.errors[path] = "Couldn't load texture atlas " + path + ": status " + status + ", " + responseText;
				if (error)
					error(path, "Couldn't load texture atlas " + path + ": status " + status + ", " + responseText);
				_this.toLoad--;
				_this.loaded++;
			});
		};
		AssetManager.prototype.get = function (path) {
			path = this.pathPrefix + path;
			return this.assets[path];
		};
		AssetManager.prototype.remove = function (path) {
			path = this.pathPrefix + path;
			var asset = this.assets[path];
			if (asset.dispose)
				asset.dispose();
			this.assets[path] = null;
		};
		AssetManager.prototype.removeAll = function () {
			for (var key in this.assets) {
				var asset = this.assets[key];
				if (asset.dispose)
					asset.dispose();
			}
			this.assets = {};
		};
		AssetManager.prototype.isLoadingComplete = function () {
			return this.toLoad == 0;
		};
		AssetManager.prototype.getToLoad = function () {
			return this.toLoad;
		};
		AssetManager.prototype.getLoaded = function () {
			return this.loaded;
		};
		AssetManager.prototype.dispose = function () {
			this.removeAll();
		};
		AssetManager.prototype.hasErrors = function () {
			return Object.keys(this.errors).length > 0;
		};
		AssetManager.prototype.getErrors = function () {
			return this.errors;
		};
		return AssetManager;
	}());
	spine.AssetManager = AssetManager;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var AtlasAttachmentLoader = (function () {
		function AtlasAttachmentLoader(atlas) {
			this.atlas = atlas;
		}
		AtlasAttachmentLoader.prototype.newRegionAttachment = function (skin, name, path) {
			var region = this.atlas.findRegion(path);
			if (region == null)
				throw new Error("Region not found in atlas: " + path + " (region attachment: " + name + ")");
			region.renderObject = region;
			var attachment = new spine.RegionAttachment(name);
			attachment.setRegion(region);
			return attachment;
		};
		AtlasAttachmentLoader.prototype.newMeshAttachment = function (skin, name, path) {
			var region = this.atlas.findRegion(path);
			if (region == null)
				throw new Error("Region not found in atlas: " + path + " (mesh attachment: " + name + ")");
			region.renderObject = region;
			var attachment = new spine.MeshAttachment(name);
			attachment.region = region;
			return attachment;
		};
		AtlasAttachmentLoader.prototype.newBoundingBoxAttachment = function (skin, name) {
			return new spine.BoundingBoxAttachment(name);
		};
		AtlasAttachmentLoader.prototype.newPathAttachment = function (skin, name) {
			return new spine.PathAttachment(name);
		};
		AtlasAttachmentLoader.prototype.newPointAttachment = function (skin, name) {
			return new spine.PointAttachment(name);
		};
		AtlasAttachmentLoader.prototype.newClippingAttachment = function (skin, name) {
			return new spine.ClippingAttachment(name);
		};
		return AtlasAttachmentLoader;
	}());
	spine.AtlasAttachmentLoader = AtlasAttachmentLoader;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var BlendMode;
	(function (BlendMode) {
		BlendMode[BlendMode["Normal"] = 0] = "Normal";
		BlendMode[BlendMode["Additive"] = 1] = "Additive";
		BlendMode[BlendMode["Multiply"] = 2] = "Multiply";
		BlendMode[BlendMode["Screen"] = 3] = "Screen";
	})(BlendMode = spine.BlendMode || (spine.BlendMode = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var Bone = (function () {
		function Bone(data, skeleton, parent) {
			this.children = new Array();
			this.x = 0;
			this.y = 0;
			this.rotation = 0;
			this.scaleX = 0;
			this.scaleY = 0;
			this.shearX = 0;
			this.shearY = 0;
			this.ax = 0;
			this.ay = 0;
			this.arotation = 0;
			this.ascaleX = 0;
			this.ascaleY = 0;
			this.ashearX = 0;
			this.ashearY = 0;
			this.appliedValid = false;
			this.a = 0;
			this.b = 0;
			this.worldX = 0;
			this.c = 0;
			this.d = 0;
			this.worldY = 0;
			this.sorted = false;
			if (data == null)
				throw new Error("data cannot be null.");
			if (skeleton == null)
				throw new Error("skeleton cannot be null.");
			this.data = data;
			this.skeleton = skeleton;
			this.parent = parent;
			this.setToSetupPose();
		}
		Bone.prototype.update = function () {
			this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY);
		};
		Bone.prototype.updateWorldTransform = function () {
			this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY);
		};
		Bone.prototype.updateWorldTransformWith = function (x, y, rotation, scaleX, scaleY, shearX, shearY) {
			this.ax = x;
			this.ay = y;
			this.arotation = rotation;
			this.ascaleX = scaleX;
			this.ascaleY = scaleY;
			this.ashearX = shearX;
			this.ashearY = shearY;
			this.appliedValid = true;
			var parent = this.parent;
			if (parent == null) {
				var skeleton = this.skeleton;
				var rotationY = rotation + 90 + shearY;
				var sx = skeleton.scaleX;
				var sy = skeleton.scaleY;
				this.a = spine.MathUtils.cosDeg(rotation + shearX) * scaleX * sx;
				this.b = spine.MathUtils.cosDeg(rotationY) * scaleY * sx;
				this.c = spine.MathUtils.sinDeg(rotation + shearX) * scaleX * sy;
				this.d = spine.MathUtils.sinDeg(rotationY) * scaleY * sy;
				this.worldX = x * sx + skeleton.x;
				this.worldY = y * sy + skeleton.y;
				return;
			}
			var pa = parent.a, pb = parent.b, pc = parent.c, pd = parent.d;
			this.worldX = pa * x + pb * y + parent.worldX;
			this.worldY = pc * x + pd * y + parent.worldY;
			switch (this.data.transformMode) {
				case spine.TransformMode.Normal: {
					var rotationY = rotation + 90 + shearY;
					var la = spine.MathUtils.cosDeg(rotation + shearX) * scaleX;
					var lb = spine.MathUtils.cosDeg(rotationY) * scaleY;
					var lc = spine.MathUtils.sinDeg(rotation + shearX) * scaleX;
					var ld = spine.MathUtils.sinDeg(rotationY) * scaleY;
					this.a = pa * la + pb * lc;
					this.b = pa * lb + pb * ld;
					this.c = pc * la + pd * lc;
					this.d = pc * lb + pd * ld;
					return;
				}
				case spine.TransformMode.OnlyTranslation: {
					var rotationY = rotation + 90 + shearY;
					this.a = spine.MathUtils.cosDeg(rotation + shearX) * scaleX;
					this.b = spine.MathUtils.cosDeg(rotationY) * scaleY;
					this.c = spine.MathUtils.sinDeg(rotation + shearX) * scaleX;
					this.d = spine.MathUtils.sinDeg(rotationY) * scaleY;
					break;
				}
				case spine.TransformMode.NoRotationOrReflection: {
					var s = pa * pa + pc * pc;
					var prx = 0;
					if (s > 0.0001) {
						s = Math.abs(pa * pd - pb * pc) / s;
						pb = pc * s;
						pd = pa * s;
						prx = Math.atan2(pc, pa) * spine.MathUtils.radDeg;
					}
					else {
						pa = 0;
						pc = 0;
						prx = 90 - Math.atan2(pd, pb) * spine.MathUtils.radDeg;
					}
					var rx = rotation + shearX - prx;
					var ry = rotation + shearY - prx + 90;
					var la = spine.MathUtils.cosDeg(rx) * scaleX;
					var lb = spine.MathUtils.cosDeg(ry) * scaleY;
					var lc = spine.MathUtils.sinDeg(rx) * scaleX;
					var ld = spine.MathUtils.sinDeg(ry) * scaleY;
					this.a = pa * la - pb * lc;
					this.b = pa * lb - pb * ld;
					this.c = pc * la + pd * lc;
					this.d = pc * lb + pd * ld;
					break;
				}
				case spine.TransformMode.NoScale:
				case spine.TransformMode.NoScaleOrReflection: {
					var cos = spine.MathUtils.cosDeg(rotation);
					var sin = spine.MathUtils.sinDeg(rotation);
					var za = (pa * cos + pb * sin) / this.skeleton.scaleX;
					var zc = (pc * cos + pd * sin) / this.skeleton.scaleY;
					var s = Math.sqrt(za * za + zc * zc);
					if (s > 0.00001)
						s = 1 / s;
					za *= s;
					zc *= s;
					s = Math.sqrt(za * za + zc * zc);
					if (this.data.transformMode == spine.TransformMode.NoScale
						&& (pa * pd - pb * pc < 0) != (this.skeleton.scaleX < 0 != this.skeleton.scaleY < 0))
						s = -s;
					var r = Math.PI / 2 + Math.atan2(zc, za);
					var zb = Math.cos(r) * s;
					var zd = Math.sin(r) * s;
					var la = spine.MathUtils.cosDeg(shearX) * scaleX;
					var lb = spine.MathUtils.cosDeg(90 + shearY) * scaleY;
					var lc = spine.MathUtils.sinDeg(shearX) * scaleX;
					var ld = spine.MathUtils.sinDeg(90 + shearY) * scaleY;
					this.a = za * la + zb * lc;
					this.b = za * lb + zb * ld;
					this.c = zc * la + zd * lc;
					this.d = zc * lb + zd * ld;
					break;
				}
			}
			this.a *= this.skeleton.scaleX;
			this.b *= this.skeleton.scaleX;
			this.c *= this.skeleton.scaleY;
			this.d *= this.skeleton.scaleY;
		};
		Bone.prototype.setToSetupPose = function () {
			var data = this.data;
			this.x = data.x;
			this.y = data.y;
			this.rotation = data.rotation;
			this.scaleX = data.scaleX;
			this.scaleY = data.scaleY;
			this.shearX = data.shearX;
			this.shearY = data.shearY;
		};
		Bone.prototype.getWorldRotationX = function () {
			return Math.atan2(this.c, this.a) * spine.MathUtils.radDeg;
		};
		Bone.prototype.getWorldRotationY = function () {
			return Math.atan2(this.d, this.b) * spine.MathUtils.radDeg;
		};
		Bone.prototype.getWorldScaleX = function () {
			return Math.sqrt(this.a * this.a + this.c * this.c);
		};
		Bone.prototype.getWorldScaleY = function () {
			return Math.sqrt(this.b * this.b + this.d * this.d);
		};
		Bone.prototype.updateAppliedTransform = function () {
			this.appliedValid = true;
			var parent = this.parent;
			if (parent == null) {
				this.ax = this.worldX;
				this.ay = this.worldY;
				this.arotation = Math.atan2(this.c, this.a) * spine.MathUtils.radDeg;
				this.ascaleX = Math.sqrt(this.a * this.a + this.c * this.c);
				this.ascaleY = Math.sqrt(this.b * this.b + this.d * this.d);
				this.ashearX = 0;
				this.ashearY = Math.atan2(this.a * this.b + this.c * this.d, this.a * this.d - this.b * this.c) * spine.MathUtils.radDeg;
				return;
			}
			var pa = parent.a, pb = parent.b, pc = parent.c, pd = parent.d;
			var pid = 1 / (pa * pd - pb * pc);
			var dx = this.worldX - parent.worldX, dy = this.worldY - parent.worldY;
			this.ax = (dx * pd * pid - dy * pb * pid);
			this.ay = (dy * pa * pid - dx * pc * pid);
			var ia = pid * pd;
			var id = pid * pa;
			var ib = pid * pb;
			var ic = pid * pc;
			var ra = ia * this.a - ib * this.c;
			var rb = ia * this.b - ib * this.d;
			var rc = id * this.c - ic * this.a;
			var rd = id * this.d - ic * this.b;
			this.ashearX = 0;
			this.ascaleX = Math.sqrt(ra * ra + rc * rc);
			if (this.ascaleX > 0.0001) {
				var det = ra * rd - rb * rc;
				this.ascaleY = det / this.ascaleX;
				this.ashearY = Math.atan2(ra * rb + rc * rd, det) * spine.MathUtils.radDeg;
				this.arotation = Math.atan2(rc, ra) * spine.MathUtils.radDeg;
			}
			else {
				this.ascaleX = 0;
				this.ascaleY = Math.sqrt(rb * rb + rd * rd);
				this.ashearY = 0;
				this.arotation = 90 - Math.atan2(rd, rb) * spine.MathUtils.radDeg;
			}
		};
		Bone.prototype.worldToLocal = function (world) {
			var a = this.a, b = this.b, c = this.c, d = this.d;
			var invDet = 1 / (a * d - b * c);
			var x = world.x - this.worldX, y = world.y - this.worldY;
			world.x = (x * d * invDet - y * b * invDet);
			world.y = (y * a * invDet - x * c * invDet);
			return world;
		};
		Bone.prototype.localToWorld = function (local) {
			var x = local.x, y = local.y;
			local.x = x * this.a + y * this.b + this.worldX;
			local.y = x * this.c + y * this.d + this.worldY;
			return local;
		};
		Bone.prototype.worldToLocalRotation = function (worldRotation) {
			var sin = spine.MathUtils.sinDeg(worldRotation), cos = spine.MathUtils.cosDeg(worldRotation);
			return Math.atan2(this.a * sin - this.c * cos, this.d * cos - this.b * sin) * spine.MathUtils.radDeg + this.rotation - this.shearX;
		};
		Bone.prototype.localToWorldRotation = function (localRotation) {
			localRotation -= this.rotation - this.shearX;
			var sin = spine.MathUtils.sinDeg(localRotation), cos = spine.MathUtils.cosDeg(localRotation);
			return Math.atan2(cos * this.c + sin * this.d, cos * this.a + sin * this.b) * spine.MathUtils.radDeg;
		};
		Bone.prototype.rotateWorld = function (degrees) {
			var a = this.a, b = this.b, c = this.c, d = this.d;
			var cos = spine.MathUtils.cosDeg(degrees), sin = spine.MathUtils.sinDeg(degrees);
			this.a = cos * a - sin * c;
			this.b = cos * b - sin * d;
			this.c = sin * a + cos * c;
			this.d = sin * b + cos * d;
			this.appliedValid = false;
		};
		return Bone;
	}());
	spine.Bone = Bone;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var BoneData = (function () {
		function BoneData(index, name, parent) {
			this.x = 0;
			this.y = 0;
			this.rotation = 0;
			this.scaleX = 1;
			this.scaleY = 1;
			this.shearX = 0;
			this.shearY = 0;
			this.transformMode = TransformMode.Normal;
			if (index < 0)
				throw new Error("index must be >= 0.");
			if (name == null)
				throw new Error("name cannot be null.");
			this.index = index;
			this.name = name;
			this.parent = parent;
		}
		return BoneData;
	}());
	spine.BoneData = BoneData;
	var TransformMode;
	(function (TransformMode) {
		TransformMode[TransformMode["Normal"] = 0] = "Normal";
		TransformMode[TransformMode["OnlyTranslation"] = 1] = "OnlyTranslation";
		TransformMode[TransformMode["NoRotationOrReflection"] = 2] = "NoRotationOrReflection";
		TransformMode[TransformMode["NoScale"] = 3] = "NoScale";
		TransformMode[TransformMode["NoScaleOrReflection"] = 4] = "NoScaleOrReflection";
	})(TransformMode = spine.TransformMode || (spine.TransformMode = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var Event = (function () {
		function Event(time, data) {
			if (data == null)
				throw new Error("data cannot be null.");
			this.time = time;
			this.data = data;
		}
		return Event;
	}());
	spine.Event = Event;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var EventData = (function () {
		function EventData(name) {
			this.name = name;
		}
		return EventData;
	}());
	spine.EventData = EventData;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var IkConstraint = (function () {
		function IkConstraint(data, skeleton) {
			this.bendDirection = 0;
			this.compress = false;
			this.stretch = false;
			this.mix = 1;
			if (data == null)
				throw new Error("data cannot be null.");
			if (skeleton == null)
				throw new Error("skeleton cannot be null.");
			this.data = data;
			this.mix = data.mix;
			this.bendDirection = data.bendDirection;
			this.compress = data.compress;
			this.stretch = data.stretch;
			this.bones = new Array();
			for (var i = 0; i < data.bones.length; i++)
				this.bones.push(skeleton.findBone(data.bones[i].name));
			this.target = skeleton.findBone(data.target.name);
		}
		IkConstraint.prototype.getOrder = function () {
			return this.data.order;
		};
		IkConstraint.prototype.apply = function () {
			this.update();
		};
		IkConstraint.prototype.update = function () {
			var target = this.target;
			var bones = this.bones;
			switch (bones.length) {
				case 1:
					this.apply1(bones[0], target.worldX, target.worldY, this.compress, this.stretch, this.data.uniform, this.mix);
					break;
				case 2:
					this.apply2(bones[0], bones[1], target.worldX, target.worldY, this.bendDirection, this.stretch, this.mix);
					break;
			}
		};
		IkConstraint.prototype.apply1 = function (bone, targetX, targetY, compress, stretch, uniform, alpha) {
			if (!bone.appliedValid)
				bone.updateAppliedTransform();
			var p = bone.parent;
			var id = 1 / (p.a * p.d - p.b * p.c);
			var x = targetX - p.worldX, y = targetY - p.worldY;
			var tx = (x * p.d - y * p.b) * id - bone.ax, ty = (y * p.a - x * p.c) * id - bone.ay;
			var rotationIK = Math.atan2(ty, tx) * spine.MathUtils.radDeg - bone.ashearX - bone.arotation;
			if (bone.ascaleX < 0)
				rotationIK += 180;
			if (rotationIK > 180)
				rotationIK -= 360;
			else if (rotationIK < -180)
				rotationIK += 360;
			var sx = bone.ascaleX, sy = bone.ascaleY;
			if (compress || stretch) {
				var b = bone.data.length * sx, dd = Math.sqrt(tx * tx + ty * ty);
				if ((compress && dd < b) || (stretch && dd > b) && b > 0.0001) {
					var s = (dd / b - 1) * alpha + 1;
					sx *= s;
					if (uniform)
						sy *= s;
				}
			}
			bone.updateWorldTransformWith(bone.ax, bone.ay, bone.arotation + rotationIK * alpha, sx, sy, bone.ashearX, bone.ashearY);
		};
		IkConstraint.prototype.apply2 = function (parent, child, targetX, targetY, bendDir, stretch, alpha) {
			if (alpha == 0) {
				child.updateWorldTransform();
				return;
			}
			if (!parent.appliedValid)
				parent.updateAppliedTransform();
			if (!child.appliedValid)
				child.updateAppliedTransform();
			var px = parent.ax, py = parent.ay, psx = parent.ascaleX, sx = psx, psy = parent.ascaleY, csx = child.ascaleX;
			var os1 = 0, os2 = 0, s2 = 0;
			if (psx < 0) {
				psx = -psx;
				os1 = 180;
				s2 = -1;
			}
			else {
				os1 = 0;
				s2 = 1;
			}
			if (psy < 0) {
				psy = -psy;
				s2 = -s2;
			}
			if (csx < 0) {
				csx = -csx;
				os2 = 180;
			}
			else
				os2 = 0;
			var cx = child.ax, cy = 0, cwx = 0, cwy = 0, a = parent.a, b = parent.b, c = parent.c, d = parent.d;
			var u = Math.abs(psx - psy) <= 0.0001;
			if (!u) {
				cy = 0;
				cwx = a * cx + parent.worldX;
				cwy = c * cx + parent.worldY;
			}
			else {
				cy = child.ay;
				cwx = a * cx + b * cy + parent.worldX;
				cwy = c * cx + d * cy + parent.worldY;
			}
			var pp = parent.parent;
			a = pp.a;
			b = pp.b;
			c = pp.c;
			d = pp.d;
			var id = 1 / (a * d - b * c), x = targetX - pp.worldX, y = targetY - pp.worldY;
			var tx = (x * d - y * b) * id - px, ty = (y * a - x * c) * id - py, dd = tx * tx + ty * ty;
			x = cwx - pp.worldX;
			y = cwy - pp.worldY;
			var dx = (x * d - y * b) * id - px, dy = (y * a - x * c) * id - py;
			var l1 = Math.sqrt(dx * dx + dy * dy), l2 = child.data.length * csx, a1 = 0, a2 = 0;
			outer: if (u) {
				l2 *= psx;
				var cos = (dd - l1 * l1 - l2 * l2) / (2 * l1 * l2);
				if (cos < -1)
					cos = -1;
				else if (cos > 1) {
					cos = 1;
					if (stretch && l1 + l2 > 0.0001)
						sx *= (Math.sqrt(dd) / (l1 + l2) - 1) * alpha + 1;
				}
				a2 = Math.acos(cos) * bendDir;
				a = l1 + l2 * cos;
				b = l2 * Math.sin(a2);
				a1 = Math.atan2(ty * a - tx * b, tx * a + ty * b);
			}
			else {
				a = psx * l2;
				b = psy * l2;
				var aa = a * a, bb = b * b, ta = Math.atan2(ty, tx);
				c = bb * l1 * l1 + aa * dd - aa * bb;
				var c1 = -2 * bb * l1, c2 = bb - aa;
				d = c1 * c1 - 4 * c2 * c;
				if (d >= 0) {
					var q = Math.sqrt(d);
					if (c1 < 0)
						q = -q;
					q = -(c1 + q) / 2;
					var r0 = q / c2, r1 = c / q;
					var r = Math.abs(r0) < Math.abs(r1) ? r0 : r1;
					if (r * r <= dd) {
						y = Math.sqrt(dd - r * r) * bendDir;
						a1 = ta - Math.atan2(y, r);
						a2 = Math.atan2(y / psy, (r - l1) / psx);
						break outer;
					}
				}
				var minAngle = spine.MathUtils.PI, minX = l1 - a, minDist = minX * minX, minY = 0;
				var maxAngle = 0, maxX = l1 + a, maxDist = maxX * maxX, maxY = 0;
				c = -a * l1 / (aa - bb);
				if (c >= -1 && c <= 1) {
					c = Math.acos(c);
					x = a * Math.cos(c) + l1;
					y = b * Math.sin(c);
					d = x * x + y * y;
					if (d < minDist) {
						minAngle = c;
						minDist = d;
						minX = x;
						minY = y;
					}
					if (d > maxDist) {
						maxAngle = c;
						maxDist = d;
						maxX = x;
						maxY = y;
					}
				}
				if (dd <= (minDist + maxDist) / 2) {
					a1 = ta - Math.atan2(minY * bendDir, minX);
					a2 = minAngle * bendDir;
				}
				else {
					a1 = ta - Math.atan2(maxY * bendDir, maxX);
					a2 = maxAngle * bendDir;
				}
			}
			var os = Math.atan2(cy, cx) * s2;
			var rotation = parent.arotation;
			a1 = (a1 - os) * spine.MathUtils.radDeg + os1 - rotation;
			if (a1 > 180)
				a1 -= 360;
			else if (a1 < -180)
				a1 += 360;
			parent.updateWorldTransformWith(px, py, rotation + a1 * alpha, sx, parent.ascaleY, 0, 0);
			rotation = child.arotation;
			a2 = ((a2 + os) * spine.MathUtils.radDeg - child.ashearX) * s2 + os2 - rotation;
			if (a2 > 180)
				a2 -= 360;
			else if (a2 < -180)
				a2 += 360;
			child.updateWorldTransformWith(cx, cy, rotation + a2 * alpha, child.ascaleX, child.ascaleY, child.ashearX, child.ashearY);
		};
		return IkConstraint;
	}());
	spine.IkConstraint = IkConstraint;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var IkConstraintData = (function () {
		function IkConstraintData(name) {
			this.order = 0;
			this.bones = new Array();
			this.bendDirection = 1;
			this.compress = false;
			this.stretch = false;
			this.uniform = false;
			this.mix = 1;
			this.name = name;
		}
		return IkConstraintData;
	}());
	spine.IkConstraintData = IkConstraintData;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var PathConstraint = (function () {
		function PathConstraint(data, skeleton) {
			this.position = 0;
			this.spacing = 0;
			this.rotateMix = 0;
			this.translateMix = 0;
			this.spaces = new Array();
			this.positions = new Array();
			this.world = new Array();
			this.curves = new Array();
			this.lengths = new Array();
			this.segments = new Array();
			if (data == null)
				throw new Error("data cannot be null.");
			if (skeleton == null)
				throw new Error("skeleton cannot be null.");
			this.data = data;
			this.bones = new Array();
			for (var i = 0, n = data.bones.length; i < n; i++)
				this.bones.push(skeleton.findBone(data.bones[i].name));
			this.target = skeleton.findSlot(data.target.name);
			this.position = data.position;
			this.spacing = data.spacing;
			this.rotateMix = data.rotateMix;
			this.translateMix = data.translateMix;
		}
		PathConstraint.prototype.apply = function () {
			this.update();
		};
		PathConstraint.prototype.update = function () {
			var attachment = this.target.getAttachment();
			if (!(attachment instanceof spine.PathAttachment))
				return;
			var rotateMix = this.rotateMix, translateMix = this.translateMix;
			var translate = translateMix > 0, rotate = rotateMix > 0;
			if (!translate && !rotate)
				return;
			var data = this.data;
			var percentSpacing = data.spacingMode == spine.SpacingMode.Percent;
			var rotateMode = data.rotateMode;
			var tangents = rotateMode == spine.RotateMode.Tangent, scale = rotateMode == spine.RotateMode.ChainScale;
			var boneCount = this.bones.length, spacesCount = tangents ? boneCount : boneCount + 1;
			var bones = this.bones;
			var spaces = spine.Utils.setArraySize(this.spaces, spacesCount), lengths = null;
			var spacing = this.spacing;
			if (scale || !percentSpacing) {
				if (scale)
					lengths = spine.Utils.setArraySize(this.lengths, boneCount);
				var lengthSpacing = data.spacingMode == spine.SpacingMode.Length;
				for (var i = 0, n = spacesCount - 1; i < n;) {
					var bone = bones[i];
					var setupLength = bone.data.length;
					if (setupLength < PathConstraint.epsilon) {
						if (scale)
							lengths[i] = 0;
						spaces[++i] = 0;
					}
					else if (percentSpacing) {
						if (scale) {
							var x = setupLength * bone.a, y = setupLength * bone.c;
							var length_1 = Math.sqrt(x * x + y * y);
							lengths[i] = length_1;
						}
						spaces[++i] = spacing;
					}
					else {
						var x = setupLength * bone.a, y = setupLength * bone.c;
						var length_2 = Math.sqrt(x * x + y * y);
						if (scale)
							lengths[i] = length_2;
						spaces[++i] = (lengthSpacing ? setupLength + spacing : spacing) * length_2 / setupLength;
					}
				}
			}
			else {
				for (var i = 1; i < spacesCount; i++)
					spaces[i] = spacing;
			}
			var positions = this.computeWorldPositions(attachment, spacesCount, tangents, data.positionMode == spine.PositionMode.Percent, percentSpacing);
			var boneX = positions[0], boneY = positions[1], offsetRotation = data.offsetRotation;
			var tip = false;
			if (offsetRotation == 0)
				tip = rotateMode == spine.RotateMode.Chain;
			else {
				tip = false;
				var p = this.target.bone;
				offsetRotation *= p.a * p.d - p.b * p.c > 0 ? spine.MathUtils.degRad : -spine.MathUtils.degRad;
			}
			for (var i = 0, p = 3; i < boneCount; i++, p += 3) {
				var bone = bones[i];
				bone.worldX += (boneX - bone.worldX) * translateMix;
				bone.worldY += (boneY - bone.worldY) * translateMix;
				var x = positions[p], y = positions[p + 1], dx = x - boneX, dy = y - boneY;
				if (scale) {
					var length_3 = lengths[i];
					if (length_3 != 0) {
						var s = (Math.sqrt(dx * dx + dy * dy) / length_3 - 1) * rotateMix + 1;
						bone.a *= s;
						bone.c *= s;
					}
				}
				boneX = x;
				boneY = y;
				if (rotate) {
					var a = bone.a, b = bone.b, c = bone.c, d = bone.d, r = 0, cos = 0, sin = 0;
					if (tangents)
						r = positions[p - 1];
					else if (spaces[i + 1] == 0)
						r = positions[p + 2];
					else
						r = Math.atan2(dy, dx);
					r -= Math.atan2(c, a);
					if (tip) {
						cos = Math.cos(r);
						sin = Math.sin(r);
						var length_4 = bone.data.length;
						boneX += (length_4 * (cos * a - sin * c) - dx) * rotateMix;
						boneY += (length_4 * (sin * a + cos * c) - dy) * rotateMix;
					}
					else {
						r += offsetRotation;
					}
					if (r > spine.MathUtils.PI)
						r -= spine.MathUtils.PI2;
					else if (r < -spine.MathUtils.PI)
						r += spine.MathUtils.PI2;
					r *= rotateMix;
					cos = Math.cos(r);
					sin = Math.sin(r);
					bone.a = cos * a - sin * c;
					bone.b = cos * b - sin * d;
					bone.c = sin * a + cos * c;
					bone.d = sin * b + cos * d;
				}
				bone.appliedValid = false;
			}
		};
		PathConstraint.prototype.computeWorldPositions = function (path, spacesCount, tangents, percentPosition, percentSpacing) {
			var target = this.target;
			var position = this.position;
			var spaces = this.spaces, out = spine.Utils.setArraySize(this.positions, spacesCount * 3 + 2), world = null;
			var closed = path.closed;
			var verticesLength = path.worldVerticesLength, curveCount = verticesLength / 6, prevCurve = PathConstraint.NONE;
			if (!path.constantSpeed) {
				var lengths = path.lengths;
				curveCount -= closed ? 1 : 2;
				var pathLength_1 = lengths[curveCount];
				if (percentPosition)
					position *= pathLength_1;
				if (percentSpacing) {
					for (var i = 1; i < spacesCount; i++)
						spaces[i] *= pathLength_1;
				}
				world = spine.Utils.setArraySize(this.world, 8);
				for (var i = 0, o = 0, curve = 0; i < spacesCount; i++, o += 3) {
					var space = spaces[i];
					position += space;
					var p = position;
					if (closed) {
						p %= pathLength_1;
						if (p < 0)
							p += pathLength_1;
						curve = 0;
					}
					else if (p < 0) {
						if (prevCurve != PathConstraint.BEFORE) {
							prevCurve = PathConstraint.BEFORE;
							path.computeWorldVertices(target, 2, 4, world, 0, 2);
						}
						this.addBeforePosition(p, world, 0, out, o);
						continue;
					}
					else if (p > pathLength_1) {
						if (prevCurve != PathConstraint.AFTER) {
							prevCurve = PathConstraint.AFTER;
							path.computeWorldVertices(target, verticesLength - 6, 4, world, 0, 2);
						}
						this.addAfterPosition(p - pathLength_1, world, 0, out, o);
						continue;
					}
					for (;; curve++) {
						var length_5 = lengths[curve];
						if (p > length_5)
							continue;
						if (curve == 0)
							p /= length_5;
						else {
							var prev = lengths[curve - 1];
							p = (p - prev) / (length_5 - prev);
						}
						break;
					}
					if (curve != prevCurve) {
						prevCurve = curve;
						if (closed && curve == curveCount) {
							path.computeWorldVertices(target, verticesLength - 4, 4, world, 0, 2);
							path.computeWorldVertices(target, 0, 4, world, 4, 2);
						}
						else
							path.computeWorldVertices(target, curve * 6 + 2, 8, world, 0, 2);
					}
					this.addCurvePosition(p, world[0], world[1], world[2], world[3], world[4], world[5], world[6], world[7], out, o, tangents || (i > 0 && space == 0));
				}
				return out;
			}
			if (closed) {
				verticesLength += 2;
				world = spine.Utils.setArraySize(this.world, verticesLength);
				path.computeWorldVertices(target, 2, verticesLength - 4, world, 0, 2);
				path.computeWorldVertices(target, 0, 2, world, verticesLength - 4, 2);
				world[verticesLength - 2] = world[0];
				world[verticesLength - 1] = world[1];
			}
			else {
				curveCount--;
				verticesLength -= 4;
				world = spine.Utils.setArraySize(this.world, verticesLength);
				path.computeWorldVertices(target, 2, verticesLength, world, 0, 2);
			}
			var curves = spine.Utils.setArraySize(this.curves, curveCount);
			var pathLength = 0;
			var x1 = world[0], y1 = world[1], cx1 = 0, cy1 = 0, cx2 = 0, cy2 = 0, x2 = 0, y2 = 0;
			var tmpx = 0, tmpy = 0, dddfx = 0, dddfy = 0, ddfx = 0, ddfy = 0, dfx = 0, dfy = 0;
			for (var i = 0, w = 2; i < curveCount; i++, w += 6) {
				cx1 = world[w];
				cy1 = world[w + 1];
				cx2 = world[w + 2];
				cy2 = world[w + 3];
				x2 = world[w + 4];
				y2 = world[w + 5];
				tmpx = (x1 - cx1 * 2 + cx2) * 0.1875;
				tmpy = (y1 - cy1 * 2 + cy2) * 0.1875;
				dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.09375;
				dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.09375;
				ddfx = tmpx * 2 + dddfx;
				ddfy = tmpy * 2 + dddfy;
				dfx = (cx1 - x1) * 0.75 + tmpx + dddfx * 0.16666667;
				dfy = (cy1 - y1) * 0.75 + tmpy + dddfy * 0.16666667;
				pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
				dfx += ddfx;
				dfy += ddfy;
				ddfx += dddfx;
				ddfy += dddfy;
				pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
				dfx += ddfx;
				dfy += ddfy;
				pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
				dfx += ddfx + dddfx;
				dfy += ddfy + dddfy;
				pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
				curves[i] = pathLength;
				x1 = x2;
				y1 = y2;
			}
			if (percentPosition)
				position *= pathLength;
			else
				position *= pathLength / path.lengths[curveCount - 1];
			if (percentSpacing) {
				for (var i = 1; i < spacesCount; i++)
					spaces[i] *= pathLength;
			}
			var segments = this.segments;
			var curveLength = 0;
			for (var i = 0, o = 0, curve = 0, segment = 0; i < spacesCount; i++, o += 3) {
				var space = spaces[i];
				position += space;
				var p = position;
				if (closed) {
					p %= pathLength;
					if (p < 0)
						p += pathLength;
					curve = 0;
				}
				else if (p < 0) {
					this.addBeforePosition(p, world, 0, out, o);
					continue;
				}
				else if (p > pathLength) {
					this.addAfterPosition(p - pathLength, world, verticesLength - 4, out, o);
					continue;
				}
				for (;; curve++) {
					var length_6 = curves[curve];
					if (p > length_6)
						continue;
					if (curve == 0)
						p /= length_6;
					else {
						var prev = curves[curve - 1];
						p = (p - prev) / (length_6 - prev);
					}
					break;
				}
				if (curve != prevCurve) {
					prevCurve = curve;
					var ii = curve * 6;
					x1 = world[ii];
					y1 = world[ii + 1];
					cx1 = world[ii + 2];
					cy1 = world[ii + 3];
					cx2 = world[ii + 4];
					cy2 = world[ii + 5];
					x2 = world[ii + 6];
					y2 = world[ii + 7];
					tmpx = (x1 - cx1 * 2 + cx2) * 0.03;
					tmpy = (y1 - cy1 * 2 + cy2) * 0.03;
					dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.006;
					dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.006;
					ddfx = tmpx * 2 + dddfx;
					ddfy = tmpy * 2 + dddfy;
					dfx = (cx1 - x1) * 0.3 + tmpx + dddfx * 0.16666667;
					dfy = (cy1 - y1) * 0.3 + tmpy + dddfy * 0.16666667;
					curveLength = Math.sqrt(dfx * dfx + dfy * dfy);
					segments[0] = curveLength;
					for (ii = 1; ii < 8; ii++) {
						dfx += ddfx;
						dfy += ddfy;
						ddfx += dddfx;
						ddfy += dddfy;
						curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
						segments[ii] = curveLength;
					}
					dfx += ddfx;
					dfy += ddfy;
					curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
					segments[8] = curveLength;
					dfx += ddfx + dddfx;
					dfy += ddfy + dddfy;
					curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
					segments[9] = curveLength;
					segment = 0;
				}
				p *= curveLength;
				for (;; segment++) {
					var length_7 = segments[segment];
					if (p > length_7)
						continue;
					if (segment == 0)
						p /= length_7;
					else {
						var prev = segments[segment - 1];
						p = segment + (p - prev) / (length_7 - prev);
					}
					break;
				}
				this.addCurvePosition(p * 0.1, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, o, tangents || (i > 0 && space == 0));
			}
			return out;
		};
		PathConstraint.prototype.addBeforePosition = function (p, temp, i, out, o) {
			var x1 = temp[i], y1 = temp[i + 1], dx = temp[i + 2] - x1, dy = temp[i + 3] - y1, r = Math.atan2(dy, dx);
			out[o] = x1 + p * Math.cos(r);
			out[o + 1] = y1 + p * Math.sin(r);
			out[o + 2] = r;
		};
		PathConstraint.prototype.addAfterPosition = function (p, temp, i, out, o) {
			var x1 = temp[i + 2], y1 = temp[i + 3], dx = x1 - temp[i], dy = y1 - temp[i + 1], r = Math.atan2(dy, dx);
			out[o] = x1 + p * Math.cos(r);
			out[o + 1] = y1 + p * Math.sin(r);
			out[o + 2] = r;
		};
		PathConstraint.prototype.addCurvePosition = function (p, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, o, tangents) {
			if (p == 0 || isNaN(p)) {
				out[o] = x1;
				out[o + 1] = y1;
				out[o + 2] = Math.atan2(cy1 - y1, cx1 - x1);
				return;
			}
			var tt = p * p, ttt = tt * p, u = 1 - p, uu = u * u, uuu = uu * u;
			var ut = u * p, ut3 = ut * 3, uut3 = u * ut3, utt3 = ut3 * p;
			var x = x1 * uuu + cx1 * uut3 + cx2 * utt3 + x2 * ttt, y = y1 * uuu + cy1 * uut3 + cy2 * utt3 + y2 * ttt;
			out[o] = x;
			out[o + 1] = y;
			if (tangents) {
				if (p < 0.001)
					out[o + 2] = Math.atan2(cy1 - y1, cx1 - x1);
				else
					out[o + 2] = Math.atan2(y - (y1 * uu + cy1 * ut * 2 + cy2 * tt), x - (x1 * uu + cx1 * ut * 2 + cx2 * tt));
			}
		};
		PathConstraint.prototype.getOrder = function () {
			return this.data.order;
		};
		PathConstraint.NONE = -1;
		PathConstraint.BEFORE = -2;
		PathConstraint.AFTER = -3;
		PathConstraint.epsilon = 0.00001;
		return PathConstraint;
	}());
	spine.PathConstraint = PathConstraint;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var PathConstraintData = (function () {
		function PathConstraintData(name) {
			this.order = 0;
			this.bones = new Array();
			this.name = name;
		}
		return PathConstraintData;
	}());
	spine.PathConstraintData = PathConstraintData;
	var PositionMode;
	(function (PositionMode) {
		PositionMode[PositionMode["Fixed"] = 0] = "Fixed";
		PositionMode[PositionMode["Percent"] = 1] = "Percent";
	})(PositionMode = spine.PositionMode || (spine.PositionMode = {}));
	var SpacingMode;
	(function (SpacingMode) {
		SpacingMode[SpacingMode["Length"] = 0] = "Length";
		SpacingMode[SpacingMode["Fixed"] = 1] = "Fixed";
		SpacingMode[SpacingMode["Percent"] = 2] = "Percent";
	})(SpacingMode = spine.SpacingMode || (spine.SpacingMode = {}));
	var RotateMode;
	(function (RotateMode) {
		RotateMode[RotateMode["Tangent"] = 0] = "Tangent";
		RotateMode[RotateMode["Chain"] = 1] = "Chain";
		RotateMode[RotateMode["ChainScale"] = 2] = "ChainScale";
	})(RotateMode = spine.RotateMode || (spine.RotateMode = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var Assets = (function () {
		function Assets(clientId) {
			this.toLoad = new Array();
			this.assets = {};
			this.clientId = clientId;
		}
		Assets.prototype.loaded = function () {
			var i = 0;
			for (var v in this.assets)
				i++;
			return i;
		};
		return Assets;
	}());
	var SharedAssetManager = (function () {
		function SharedAssetManager(pathPrefix) {
			if (pathPrefix === void 0) { pathPrefix = ""; }
			this.clientAssets = {};
			this.queuedAssets = {};
			this.rawAssets = {};
			this.errors = {};
			this.pathPrefix = pathPrefix;
		}
		SharedAssetManager.prototype.queueAsset = function (clientId, textureLoader, path) {
			var clientAssets = this.clientAssets[clientId];
			if (clientAssets === null || clientAssets === undefined) {
				clientAssets = new Assets(clientId);
				this.clientAssets[clientId] = clientAssets;
			}
			if (textureLoader !== null)
				clientAssets.textureLoader = textureLoader;
			clientAssets.toLoad.push(path);
			if (this.queuedAssets[path] === path) {
				return false;
			}
			else {
				this.queuedAssets[path] = path;
				return true;
			}
		};
		SharedAssetManager.prototype.loadText = function (clientId, path) {
			var _this = this;
			path = this.pathPrefix + path;
			if (!this.queueAsset(clientId, null, path))
				return;
			var request = new XMLHttpRequest();
			request.onreadystatechange = function () {
				if (request.readyState == XMLHttpRequest.DONE) {
					if (request.status >= 200 && request.status < 300) {
						_this.rawAssets[path] = request.responseText;
					}
					else {
						_this.errors[path] = "Couldn't load text " + path + ": status " + request.status + ", " + request.responseText;
					}
				}
			};
			request.open("GET", path, true);
			request.send();
		};
		SharedAssetManager.prototype.loadJson = function (clientId, path) {
			var _this = this;
			path = this.pathPrefix + path;
			if (!this.queueAsset(clientId, null, path))
				return;
			var request = new XMLHttpRequest();
			request.onreadystatechange = function () {
				if (request.readyState == XMLHttpRequest.DONE) {
					if (request.status >= 200 && request.status < 300) {
						_this.rawAssets[path] = JSON.parse(request.responseText);
					}
					else {
						_this.errors[path] = "Couldn't load text " + path + ": status " + request.status + ", " + request.responseText;
					}
				}
			};
			request.open("GET", path, true);
			request.send();
		};
		SharedAssetManager.prototype.loadTexture = function (clientId, textureLoader, path) {
			var _this = this;
			path = this.pathPrefix + path;
			if (!this.queueAsset(clientId, textureLoader, path))
				return;
			var img = new Image();
			img.src = path;
			img.crossOrigin = "anonymous";
			img.onload = function (ev) {
				_this.rawAssets[path] = img;
			};
			img.onerror = function (ev) {
				_this.errors[path] = "Couldn't load image " + path;
			};
		};
		SharedAssetManager.prototype.get = function (clientId, path) {
			path = this.pathPrefix + path;
			var clientAssets = this.clientAssets[clientId];
			if (clientAssets === null || clientAssets === undefined)
				return true;
			return clientAssets.assets[path];
		};
		SharedAssetManager.prototype.updateClientAssets = function (clientAssets) {
			for (var i = 0; i < clientAssets.toLoad.length; i++) {
				var path = clientAssets.toLoad[i];
				var asset = clientAssets.assets[path];
				if (asset === null || asset === undefined) {
					var rawAsset = this.rawAssets[path];
					if (rawAsset === null || rawAsset === undefined)
						continue;
					if (rawAsset instanceof HTMLImageElement) {
						clientAssets.assets[path] = clientAssets.textureLoader(rawAsset);
					}
					else {
						clientAssets.assets[path] = rawAsset;
					}
				}
			}
		};
		SharedAssetManager.prototype.isLoadingComplete = function (clientId) {
			var clientAssets = this.clientAssets[clientId];
			if (clientAssets === null || clientAssets === undefined)
				return true;
			this.updateClientAssets(clientAssets);
			return clientAssets.toLoad.length == clientAssets.loaded();
		};
		SharedAssetManager.prototype.dispose = function () {
		};
		SharedAssetManager.prototype.hasErrors = function () {
			return Object.keys(this.errors).length > 0;
		};
		SharedAssetManager.prototype.getErrors = function () {
			return this.errors;
		};
		return SharedAssetManager;
	}());
	spine.SharedAssetManager = SharedAssetManager;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var Skeleton = (function () {
		function Skeleton(data) {
			this._updateCache = new Array();
			this.updateCacheReset = new Array();
			this.time = 0;
			this.scaleX = 1;
			this.scaleY = 1;
			this.x = 0;
			this.y = 0;
			if (data == null)
				throw new Error("data cannot be null.");
			this.data = data;
			this.bones = new Array();
			for (var i = 0; i < data.bones.length; i++) {
				var boneData = data.bones[i];
				var bone = void 0;
				if (boneData.parent == null)
					bone = new spine.Bone(boneData, this, null);
				else {
					var parent_1 = this.bones[boneData.parent.index];
					bone = new spine.Bone(boneData, this, parent_1);
					parent_1.children.push(bone);
				}
				this.bones.push(bone);
			}
			this.slots = new Array();
			this.drawOrder = new Array();
			for (var i = 0; i < data.slots.length; i++) {
				var slotData = data.slots[i];
				var bone = this.bones[slotData.boneData.index];
				var slot = new spine.Slot(slotData, bone);
				this.slots.push(slot);
				this.drawOrder.push(slot);
			}
			this.ikConstraints = new Array();
			for (var i = 0; i < data.ikConstraints.length; i++) {
				var ikConstraintData = data.ikConstraints[i];
				this.ikConstraints.push(new spine.IkConstraint(ikConstraintData, this));
			}
			this.transformConstraints = new Array();
			for (var i = 0; i < data.transformConstraints.length; i++) {
				var transformConstraintData = data.transformConstraints[i];
				this.transformConstraints.push(new spine.TransformConstraint(transformConstraintData, this));
			}
			this.pathConstraints = new Array();
			for (var i = 0; i < data.pathConstraints.length; i++) {
				var pathConstraintData = data.pathConstraints[i];
				this.pathConstraints.push(new spine.PathConstraint(pathConstraintData, this));
			}
			this.color = new spine.Color(1, 1, 1, 1);
			this.updateCache();
		}
		Skeleton.prototype.updateCache = function () {
			var updateCache = this._updateCache;
			updateCache.length = 0;
			this.updateCacheReset.length = 0;
			var bones = this.bones;
			for (var i = 0, n = bones.length; i < n; i++)
				bones[i].sorted = false;
			var ikConstraints = this.ikConstraints;
			var transformConstraints = this.transformConstraints;
			var pathConstraints = this.pathConstraints;
			var ikCount = ikConstraints.length, transformCount = transformConstraints.length, pathCount = pathConstraints.length;
			var constraintCount = ikCount + transformCount + pathCount;
			outer: for (var i = 0; i < constraintCount; i++) {
				for (var ii = 0; ii < ikCount; ii++) {
					var constraint = ikConstraints[ii];
					if (constraint.data.order == i) {
						this.sortIkConstraint(constraint);
						continue outer;
					}
				}
				for (var ii = 0; ii < transformCount; ii++) {
					var constraint = transformConstraints[ii];
					if (constraint.data.order == i) {
						this.sortTransformConstraint(constraint);
						continue outer;
					}
				}
				for (var ii = 0; ii < pathCount; ii++) {
					var constraint = pathConstraints[ii];
					if (constraint.data.order == i) {
						this.sortPathConstraint(constraint);
						continue outer;
					}
				}
			}
			for (var i = 0, n = bones.length; i < n; i++)
				this.sortBone(bones[i]);
		};
		Skeleton.prototype.sortIkConstraint = function (constraint) {
			var target = constraint.target;
			this.sortBone(target);
			var constrained = constraint.bones;
			var parent = constrained[0];
			this.sortBone(parent);
			if (constrained.length > 1) {
				var child = constrained[constrained.length - 1];
				if (!(this._updateCache.indexOf(child) > -1))
					this.updateCacheReset.push(child);
			}
			this._updateCache.push(constraint);
			this.sortReset(parent.children);
			constrained[constrained.length - 1].sorted = true;
		};
		Skeleton.prototype.sortPathConstraint = function (constraint) {
			var slot = constraint.target;
			var slotIndex = slot.data.index;
			var slotBone = slot.bone;
			if (this.skin != null)
				this.sortPathConstraintAttachment(this.skin, slotIndex, slotBone);
			if (this.data.defaultSkin != null && this.data.defaultSkin != this.skin)
				this.sortPathConstraintAttachment(this.data.defaultSkin, slotIndex, slotBone);
			for (var i = 0, n = this.data.skins.length; i < n; i++)
				this.sortPathConstraintAttachment(this.data.skins[i], slotIndex, slotBone);
			var attachment = slot.getAttachment();
			if (attachment instanceof spine.PathAttachment)
				this.sortPathConstraintAttachmentWith(attachment, slotBone);
			var constrained = constraint.bones;
			var boneCount = constrained.length;
			for (var i = 0; i < boneCount; i++)
				this.sortBone(constrained[i]);
			this._updateCache.push(constraint);
			for (var i = 0; i < boneCount; i++)
				this.sortReset(constrained[i].children);
			for (var i = 0; i < boneCount; i++)
				constrained[i].sorted = true;
		};
		Skeleton.prototype.sortTransformConstraint = function (constraint) {
			this.sortBone(constraint.target);
			var constrained = constraint.bones;
			var boneCount = constrained.length;
			if (constraint.data.local) {
				for (var i = 0; i < boneCount; i++) {
					var child = constrained[i];
					this.sortBone(child.parent);
					if (!(this._updateCache.indexOf(child) > -1))
						this.updateCacheReset.push(child);
				}
			}
			else {
				for (var i = 0; i < boneCount; i++) {
					this.sortBone(constrained[i]);
				}
			}
			this._updateCache.push(constraint);
			for (var ii = 0; ii < boneCount; ii++)
				this.sortReset(constrained[ii].children);
			for (var ii = 0; ii < boneCount; ii++)
				constrained[ii].sorted = true;
		};
		Skeleton.prototype.sortPathConstraintAttachment = function (skin, slotIndex, slotBone) {
			var attachments = skin.attachments[slotIndex];
			if (!attachments)
				return;
			for (var key in attachments) {
				this.sortPathConstraintAttachmentWith(attachments[key], slotBone);
			}
		};
		Skeleton.prototype.sortPathConstraintAttachmentWith = function (attachment, slotBone) {
			if (!(attachment instanceof spine.PathAttachment))
				return;
			var pathBones = attachment.bones;
			if (pathBones == null)
				this.sortBone(slotBone);
			else {
				var bones = this.bones;
				var i = 0;
				while (i < pathBones.length) {
					var boneCount = pathBones[i++];
					for (var n = i + boneCount; i < n; i++) {
						var boneIndex = pathBones[i];
						this.sortBone(bones[boneIndex]);
					}
				}
			}
		};
		Skeleton.prototype.sortBone = function (bone) {
			if (bone.sorted)
				return;
			var parent = bone.parent;
			if (parent != null)
				this.sortBone(parent);
			bone.sorted = true;
			this._updateCache.push(bone);
		};
		Skeleton.prototype.sortReset = function (bones) {
			for (var i = 0, n = bones.length; i < n; i++) {
				var bone = bones[i];
				if (bone.sorted)
					this.sortReset(bone.children);
				bone.sorted = false;
			}
		};
		Skeleton.prototype.updateWorldTransform = function () {
			var updateCacheReset = this.updateCacheReset;
			for (var i = 0, n = updateCacheReset.length; i < n; i++) {
				var bone = updateCacheReset[i];
				bone.ax = bone.x;
				bone.ay = bone.y;
				bone.arotation = bone.rotation;
				bone.ascaleX = bone.scaleX;
				bone.ascaleY = bone.scaleY;
				bone.ashearX = bone.shearX;
				bone.ashearY = bone.shearY;
				bone.appliedValid = true;
			}
			var updateCache = this._updateCache;
			for (var i = 0, n = updateCache.length; i < n; i++)
				updateCache[i].update();
		};
		Skeleton.prototype.setToSetupPose = function () {
			this.setBonesToSetupPose();
			this.setSlotsToSetupPose();
		};
		Skeleton.prototype.setBonesToSetupPose = function () {
			var bones = this.bones;
			for (var i = 0, n = bones.length; i < n; i++)
				bones[i].setToSetupPose();
			var ikConstraints = this.ikConstraints;
			for (var i = 0, n = ikConstraints.length; i < n; i++) {
				var constraint = ikConstraints[i];
				constraint.mix = constraint.data.mix;
				constraint.bendDirection = constraint.data.bendDirection;
				constraint.compress = constraint.data.compress;
				constraint.stretch = constraint.data.stretch;
			}
			var transformConstraints = this.transformConstraints;
			for (var i = 0, n = transformConstraints.length; i < n; i++) {
				var constraint = transformConstraints[i];
				var data = constraint.data;
				constraint.rotateMix = data.rotateMix;
				constraint.translateMix = data.translateMix;
				constraint.scaleMix = data.scaleMix;
				constraint.shearMix = data.shearMix;
			}
			var pathConstraints = this.pathConstraints;
			for (var i = 0, n = pathConstraints.length; i < n; i++) {
				var constraint = pathConstraints[i];
				var data = constraint.data;
				constraint.position = data.position;
				constraint.spacing = data.spacing;
				constraint.rotateMix = data.rotateMix;
				constraint.translateMix = data.translateMix;
			}
		};
		Skeleton.prototype.setSlotsToSetupPose = function () {
			var slots = this.slots;
			spine.Utils.arrayCopy(slots, 0, this.drawOrder, 0, slots.length);
			for (var i = 0, n = slots.length; i < n; i++)
				slots[i].setToSetupPose();
		};
		Skeleton.prototype.getRootBone = function () {
			if (this.bones.length == 0)
				return null;
			return this.bones[0];
		};
		Skeleton.prototype.findBone = function (boneName) {
			if (boneName == null)
				throw new Error("boneName cannot be null.");
			var bones = this.bones;
			for (var i = 0, n = bones.length; i < n; i++) {
				var bone = bones[i];
				if (bone.data.name == boneName)
					return bone;
			}
			return null;
		};
		Skeleton.prototype.findBoneIndex = function (boneName) {
			if (boneName == null)
				throw new Error("boneName cannot be null.");
			var bones = this.bones;
			for (var i = 0, n = bones.length; i < n; i++)
				if (bones[i].data.name == boneName)
					return i;
			return -1;
		};
		Skeleton.prototype.findSlot = function (slotName) {
			if (slotName == null)
				throw new Error("slotName cannot be null.");
			var slots = this.slots;
			for (var i = 0, n = slots.length; i < n; i++) {
				var slot = slots[i];
				if (slot.data.name == slotName)
					return slot;
			}
			return null;
		};
		Skeleton.prototype.findSlotIndex = function (slotName) {
			if (slotName == null)
				throw new Error("slotName cannot be null.");
			var slots = this.slots;
			for (var i = 0, n = slots.length; i < n; i++)
				if (slots[i].data.name == slotName)
					return i;
			return -1;
		};
		Skeleton.prototype.setSkinByName = function (skinName) {
			var skin = this.data.findSkin(skinName);
			if (skin == null)
				throw new Error("Skin not found: " + skinName);
			this.setSkin(skin);
		};
		Skeleton.prototype.setSkin = function (newSkin) {
			if (newSkin != null) {
				if (this.skin != null)
					newSkin.attachAll(this, this.skin);
				else {
					var slots = this.slots;
					for (var i = 0, n = slots.length; i < n; i++) {
						var slot = slots[i];
						var name_1 = slot.data.attachmentName;
						if (name_1 != null) {
							var attachment = newSkin.getAttachment(i, name_1);
							if (attachment != null)
								slot.setAttachment(attachment);
						}
					}
				}
			}
			this.skin = newSkin;
		};
		Skeleton.prototype.getAttachmentByName = function (slotName, attachmentName) {
			return this.getAttachment(this.data.findSlotIndex(slotName), attachmentName);
		};
		Skeleton.prototype.getAttachment = function (slotIndex, attachmentName) {
			if (attachmentName == null)
				throw new Error("attachmentName cannot be null.");
			if (this.skin != null) {
				var attachment = this.skin.getAttachment(slotIndex, attachmentName);
				if (attachment != null)
					return attachment;
			}
			if (this.data.defaultSkin != null)
				return this.data.defaultSkin.getAttachment(slotIndex, attachmentName);
			return null;
		};
		Skeleton.prototype.setAttachment = function (slotName, attachmentName) {
			if (slotName == null)
				throw new Error("slotName cannot be null.");
			var slots = this.slots;
			for (var i = 0, n = slots.length; i < n; i++) {
				var slot = slots[i];
				if (slot.data.name == slotName) {
					var attachment = null;
					if (attachmentName != null) {
						attachment = this.getAttachment(i, attachmentName);
						if (attachment == null)
							throw new Error("Attachment not found: " + attachmentName + ", for slot: " + slotName);
					}
					slot.setAttachment(attachment);
					return;
				}
			}
			throw new Error("Slot not found: " + slotName);
		};
		Skeleton.prototype.findIkConstraint = function (constraintName) {
			if (constraintName == null)
				throw new Error("constraintName cannot be null.");
			var ikConstraints = this.ikConstraints;
			for (var i = 0, n = ikConstraints.length; i < n; i++) {
				var ikConstraint = ikConstraints[i];
				if (ikConstraint.data.name == constraintName)
					return ikConstraint;
			}
			return null;
		};
		Skeleton.prototype.findTransformConstraint = function (constraintName) {
			if (constraintName == null)
				throw new Error("constraintName cannot be null.");
			var transformConstraints = this.transformConstraints;
			for (var i = 0, n = transformConstraints.length; i < n; i++) {
				var constraint = transformConstraints[i];
				if (constraint.data.name == constraintName)
					return constraint;
			}
			return null;
		};
		Skeleton.prototype.findPathConstraint = function (constraintName) {
			if (constraintName == null)
				throw new Error("constraintName cannot be null.");
			var pathConstraints = this.pathConstraints;
			for (var i = 0, n = pathConstraints.length; i < n; i++) {
				var constraint = pathConstraints[i];
				if (constraint.data.name == constraintName)
					return constraint;
			}
			return null;
		};
		Skeleton.prototype.getBounds = function (offset, size, temp) {
			if (temp === void 0) { temp = new Array(2); }
			if (offset == null)
				throw new Error("offset cannot be null.");
			if (size == null)
				throw new Error("size cannot be null.");
			var drawOrder = this.drawOrder;
			var minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY;
			for (var i = 0, n = drawOrder.length; i < n; i++) {
				var slot = drawOrder[i];
				var verticesLength = 0;
				var vertices = null;
				var attachment = slot.getAttachment();
				if (attachment instanceof spine.RegionAttachment) {
					verticesLength = 8;
					vertices = spine.Utils.setArraySize(temp, verticesLength, 0);
					attachment.computeWorldVertices(slot.bone, vertices, 0, 2);
				}
				else if (attachment instanceof spine.MeshAttachment) {
					var mesh = attachment;
					verticesLength = mesh.worldVerticesLength;
					vertices = spine.Utils.setArraySize(temp, verticesLength, 0);
					mesh.computeWorldVertices(slot, 0, verticesLength, vertices, 0, 2);
				}
				if (vertices != null) {
					for (var ii = 0, nn = vertices.length; ii < nn; ii += 2) {
						var x = vertices[ii], y = vertices[ii + 1];
						minX = Math.min(minX, x);
						minY = Math.min(minY, y);
						maxX = Math.max(maxX, x);
						maxY = Math.max(maxY, y);
					}
				}
			}
			offset.set(minX, minY);
			size.set(maxX - minX, maxY - minY);
		};
		Skeleton.prototype.update = function (delta) {
			this.time += delta;
		};
		return Skeleton;
	}());
	spine.Skeleton = Skeleton;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var SkeletonBounds = (function () {
		function SkeletonBounds() {
			this.minX = 0;
			this.minY = 0;
			this.maxX = 0;
			this.maxY = 0;
			this.boundingBoxes = new Array();
			this.polygons = new Array();
			this.polygonPool = new spine.Pool(function () {
				return spine.Utils.newFloatArray(16);
			});
		}
		SkeletonBounds.prototype.update = function (skeleton, updateAabb) {
			if (skeleton == null)
				throw new Error("skeleton cannot be null.");
			var boundingBoxes = this.boundingBoxes;
			var polygons = this.polygons;
			var polygonPool = this.polygonPool;
			var slots = skeleton.slots;
			var slotCount = slots.length;
			boundingBoxes.length = 0;
			polygonPool.freeAll(polygons);
			polygons.length = 0;
			for (var i = 0; i < slotCount; i++) {
				var slot = slots[i];
				var attachment = slot.getAttachment();
				if (attachment instanceof spine.BoundingBoxAttachment) {
					var boundingBox = attachment;
					boundingBoxes.push(boundingBox);
					var polygon = polygonPool.obtain();
					if (polygon.length != boundingBox.worldVerticesLength) {
						polygon = spine.Utils.newFloatArray(boundingBox.worldVerticesLength);
					}
					polygons.push(polygon);
					boundingBox.computeWorldVertices(slot, 0, boundingBox.worldVerticesLength, polygon, 0, 2);
				}
			}
			if (updateAabb) {
				this.aabbCompute();
			}
			else {
				this.minX = Number.POSITIVE_INFINITY;
				this.minY = Number.POSITIVE_INFINITY;
				this.maxX = Number.NEGATIVE_INFINITY;
				this.maxY = Number.NEGATIVE_INFINITY;
			}
		};
		SkeletonBounds.prototype.aabbCompute = function () {
			var minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY;
			var polygons = this.polygons;
			for (var i = 0, n = polygons.length; i < n; i++) {
				var polygon = polygons[i];
				var vertices = polygon;
				for (var ii = 0, nn = polygon.length; ii < nn; ii += 2) {
					var x = vertices[ii];
					var y = vertices[ii + 1];
					minX = Math.min(minX, x);
					minY = Math.min(minY, y);
					maxX = Math.max(maxX, x);
					maxY = Math.max(maxY, y);
				}
			}
			this.minX = minX;
			this.minY = minY;
			this.maxX = maxX;
			this.maxY = maxY;
		};
		SkeletonBounds.prototype.aabbContainsPoint = function (x, y) {
			return x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY;
		};
		SkeletonBounds.prototype.aabbIntersectsSegment = function (x1, y1, x2, y2) {
			var minX = this.minX;
			var minY = this.minY;
			var maxX = this.maxX;
			var maxY = this.maxY;
			if ((x1 <= minX && x2 <= minX) || (y1 <= minY && y2 <= minY) || (x1 >= maxX && x2 >= maxX) || (y1 >= maxY && y2 >= maxY))
				return false;
			var m = (y2 - y1) / (x2 - x1);
			var y = m * (minX - x1) + y1;
			if (y > minY && y < maxY)
				return true;
			y = m * (maxX - x1) + y1;
			if (y > minY && y < maxY)
				return true;
			var x = (minY - y1) / m + x1;
			if (x > minX && x < maxX)
				return true;
			x = (maxY - y1) / m + x1;
			if (x > minX && x < maxX)
				return true;
			return false;
		};
		SkeletonBounds.prototype.aabbIntersectsSkeleton = function (bounds) {
			return this.minX < bounds.maxX && this.maxX > bounds.minX && this.minY < bounds.maxY && this.maxY > bounds.minY;
		};
		SkeletonBounds.prototype.containsPoint = function (x, y) {
			var polygons = this.polygons;
			for (var i = 0, n = polygons.length; i < n; i++)
				if (this.containsPointPolygon(polygons[i], x, y))
					return this.boundingBoxes[i];
			return null;
		};
		SkeletonBounds.prototype.containsPointPolygon = function (polygon, x, y) {
			var vertices = polygon;
			var nn = polygon.length;
			var prevIndex = nn - 2;
			var inside = false;
			for (var ii = 0; ii < nn; ii += 2) {
				var vertexY = vertices[ii + 1];
				var prevY = vertices[prevIndex + 1];
				if ((vertexY < y && prevY >= y) || (prevY < y && vertexY >= y)) {
					var vertexX = vertices[ii];
					if (vertexX + (y - vertexY) / (prevY - vertexY) * (vertices[prevIndex] - vertexX) < x)
						inside = !inside;
				}
				prevIndex = ii;
			}
			return inside;
		};
		SkeletonBounds.prototype.intersectsSegment = function (x1, y1, x2, y2) {
			var polygons = this.polygons;
			for (var i = 0, n = polygons.length; i < n; i++)
				if (this.intersectsSegmentPolygon(polygons[i], x1, y1, x2, y2))
					return this.boundingBoxes[i];
			return null;
		};
		SkeletonBounds.prototype.intersectsSegmentPolygon = function (polygon, x1, y1, x2, y2) {
			var vertices = polygon;
			var nn = polygon.length;
			var width12 = x1 - x2, height12 = y1 - y2;
			var det1 = x1 * y2 - y1 * x2;
			var x3 = vertices[nn - 2], y3 = vertices[nn - 1];
			for (var ii = 0; ii < nn; ii += 2) {
				var x4 = vertices[ii], y4 = vertices[ii + 1];
				var det2 = x3 * y4 - y3 * x4;
				var width34 = x3 - x4, height34 = y3 - y4;
				var det3 = width12 * height34 - height12 * width34;
				var x = (det1 * width34 - width12 * det2) / det3;
				if (((x >= x3 && x <= x4) || (x >= x4 && x <= x3)) && ((x >= x1 && x <= x2) || (x >= x2 && x <= x1))) {
					var y = (det1 * height34 - height12 * det2) / det3;
					if (((y >= y3 && y <= y4) || (y >= y4 && y <= y3)) && ((y >= y1 && y <= y2) || (y >= y2 && y <= y1)))
						return true;
				}
				x3 = x4;
				y3 = y4;
			}
			return false;
		};
		SkeletonBounds.prototype.getPolygon = function (boundingBox) {
			if (boundingBox == null)
				throw new Error("boundingBox cannot be null.");
			var index = this.boundingBoxes.indexOf(boundingBox);
			return index == -1 ? null : this.polygons[index];
		};
		SkeletonBounds.prototype.getWidth = function () {
			return this.maxX - this.minX;
		};
		SkeletonBounds.prototype.getHeight = function () {
			return this.maxY - this.minY;
		};
		return SkeletonBounds;
	}());
	spine.SkeletonBounds = SkeletonBounds;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var SkeletonClipping = (function () {
		function SkeletonClipping() {
			this.triangulator = new spine.Triangulator();
			this.clippingPolygon = new Array();
			this.clipOutput = new Array();
			this.clippedVertices = new Array();
			this.clippedTriangles = new Array();
			this.scratch = new Array();
		}
		SkeletonClipping.prototype.clipStart = function (slot, clip) {
			if (this.clipAttachment != null)
				return 0;
			this.clipAttachment = clip;
			var n = clip.worldVerticesLength;
			var vertices = spine.Utils.setArraySize(this.clippingPolygon, n);
			clip.computeWorldVertices(slot, 0, n, vertices, 0, 2);
			var clippingPolygon = this.clippingPolygon;
			SkeletonClipping.makeClockwise(clippingPolygon);
			var clippingPolygons = this.clippingPolygons = this.triangulator.decompose(clippingPolygon, this.triangulator.triangulate(clippingPolygon));
			for (var i = 0, n_1 = clippingPolygons.length; i < n_1; i++) {
				var polygon = clippingPolygons[i];
				SkeletonClipping.makeClockwise(polygon);
				polygon.push(polygon[0]);
				polygon.push(polygon[1]);
			}
			return clippingPolygons.length;
		};
		SkeletonClipping.prototype.clipEndWithSlot = function (slot) {
			if (this.clipAttachment != null && this.clipAttachment.endSlot == slot.data)
				this.clipEnd();
		};
		SkeletonClipping.prototype.clipEnd = function () {
			if (this.clipAttachment == null)
				return;
			this.clipAttachment = null;
			this.clippingPolygons = null;
			this.clippedVertices.length = 0;
			this.clippedTriangles.length = 0;
			this.clippingPolygon.length = 0;
		};
		SkeletonClipping.prototype.isClipping = function () {
			return this.clipAttachment != null;
		};
		SkeletonClipping.prototype.clipTriangles = function (vertices, verticesLength, triangles, trianglesLength, uvs, light, dark, twoColor) {
			var clipOutput = this.clipOutput, clippedVertices = this.clippedVertices;
			var clippedTriangles = this.clippedTriangles;
			var polygons = this.clippingPolygons;
			var polygonsCount = this.clippingPolygons.length;
			var vertexSize = twoColor ? 12 : 8;
			var index = 0;
			clippedVertices.length = 0;
			clippedTriangles.length = 0;
			outer: for (var i = 0; i < trianglesLength; i += 3) {
				var vertexOffset = triangles[i] << 1;
				var x1 = vertices[vertexOffset], y1 = vertices[vertexOffset + 1];
				var u1 = uvs[vertexOffset], v1 = uvs[vertexOffset + 1];
				vertexOffset = triangles[i + 1] << 1;
				var x2 = vertices[vertexOffset], y2 = vertices[vertexOffset + 1];
				var u2 = uvs[vertexOffset], v2 = uvs[vertexOffset + 1];
				vertexOffset = triangles[i + 2] << 1;
				var x3 = vertices[vertexOffset], y3 = vertices[vertexOffset + 1];
				var u3 = uvs[vertexOffset], v3 = uvs[vertexOffset + 1];
				for (var p = 0; p < polygonsCount; p++) {
					var s = clippedVertices.length;
					if (this.clip(x1, y1, x2, y2, x3, y3, polygons[p], clipOutput)) {
						var clipOutputLength = clipOutput.length;
						if (clipOutputLength == 0)
							continue;
						var d0 = y2 - y3, d1 = x3 - x2, d2 = x1 - x3, d4 = y3 - y1;
						var d = 1 / (d0 * d2 + d1 * (y1 - y3));
						var clipOutputCount = clipOutputLength >> 1;
						var clipOutputItems = this.clipOutput;
						var clippedVerticesItems = spine.Utils.setArraySize(clippedVertices, s + clipOutputCount * vertexSize);
						for (var ii = 0; ii < clipOutputLength; ii += 2) {
							var x = clipOutputItems[ii], y = clipOutputItems[ii + 1];
							clippedVerticesItems[s] = x;
							clippedVerticesItems[s + 1] = y;
							clippedVerticesItems[s + 2] = light.r;
							clippedVerticesItems[s + 3] = light.g;
							clippedVerticesItems[s + 4] = light.b;
							clippedVerticesItems[s + 5] = light.a;
							var c0 = x - x3, c1 = y - y3;
							var a = (d0 * c0 + d1 * c1) * d;
							var b = (d4 * c0 + d2 * c1) * d;
							var c = 1 - a - b;
							clippedVerticesItems[s + 6] = u1 * a + u2 * b + u3 * c;
							clippedVerticesItems[s + 7] = v1 * a + v2 * b + v3 * c;
							if (twoColor) {
								clippedVerticesItems[s + 8] = dark.r;
								clippedVerticesItems[s + 9] = dark.g;
								clippedVerticesItems[s + 10] = dark.b;
								clippedVerticesItems[s + 11] = dark.a;
							}
							s += vertexSize;
						}
						s = clippedTriangles.length;
						var clippedTrianglesItems = spine.Utils.setArraySize(clippedTriangles, s + 3 * (clipOutputCount - 2));
						clipOutputCount--;
						for (var ii = 1; ii < clipOutputCount; ii++) {
							clippedTrianglesItems[s] = index;
							clippedTrianglesItems[s + 1] = (index + ii);
							clippedTrianglesItems[s + 2] = (index + ii + 1);
							s += 3;
						}
						index += clipOutputCount + 1;
					}
					else {
						var clippedVerticesItems = spine.Utils.setArraySize(clippedVertices, s + 3 * vertexSize);
						clippedVerticesItems[s] = x1;
						clippedVerticesItems[s + 1] = y1;
						clippedVerticesItems[s + 2] = light.r;
						clippedVerticesItems[s + 3] = light.g;
						clippedVerticesItems[s + 4] = light.b;
						clippedVerticesItems[s + 5] = light.a;
						if (!twoColor) {
							clippedVerticesItems[s + 6] = u1;
							clippedVerticesItems[s + 7] = v1;
							clippedVerticesItems[s + 8] = x2;
							clippedVerticesItems[s + 9] = y2;
							clippedVerticesItems[s + 10] = light.r;
							clippedVerticesItems[s + 11] = light.g;
							clippedVerticesItems[s + 12] = light.b;
							clippedVerticesItems[s + 13] = light.a;
							clippedVerticesItems[s + 14] = u2;
							clippedVerticesItems[s + 15] = v2;
							clippedVerticesItems[s + 16] = x3;
							clippedVerticesItems[s + 17] = y3;
							clippedVerticesItems[s + 18] = light.r;
							clippedVerticesItems[s + 19] = light.g;
							clippedVerticesItems[s + 20] = light.b;
							clippedVerticesItems[s + 21] = light.a;
							clippedVerticesItems[s + 22] = u3;
							clippedVerticesItems[s + 23] = v3;
						}
						else {
							clippedVerticesItems[s + 6] = u1;
							clippedVerticesItems[s + 7] = v1;
							clippedVerticesItems[s + 8] = dark.r;
							clippedVerticesItems[s + 9] = dark.g;
							clippedVerticesItems[s + 10] = dark.b;
							clippedVerticesItems[s + 11] = dark.a;
							clippedVerticesItems[s + 12] = x2;
							clippedVerticesItems[s + 13] = y2;
							clippedVerticesItems[s + 14] = light.r;
							clippedVerticesItems[s + 15] = light.g;
							clippedVerticesItems[s + 16] = light.b;
							clippedVerticesItems[s + 17] = light.a;
							clippedVerticesItems[s + 18] = u2;
							clippedVerticesItems[s + 19] = v2;
							clippedVerticesItems[s + 20] = dark.r;
							clippedVerticesItems[s + 21] = dark.g;
							clippedVerticesItems[s + 22] = dark.b;
							clippedVerticesItems[s + 23] = dark.a;
							clippedVerticesItems[s + 24] = x3;
							clippedVerticesItems[s + 25] = y3;
							clippedVerticesItems[s + 26] = light.r;
							clippedVerticesItems[s + 27] = light.g;
							clippedVerticesItems[s + 28] = light.b;
							clippedVerticesItems[s + 29] = light.a;
							clippedVerticesItems[s + 30] = u3;
							clippedVerticesItems[s + 31] = v3;
							clippedVerticesItems[s + 32] = dark.r;
							clippedVerticesItems[s + 33] = dark.g;
							clippedVerticesItems[s + 34] = dark.b;
							clippedVerticesItems[s + 35] = dark.a;
						}
						s = clippedTriangles.length;
						var clippedTrianglesItems = spine.Utils.setArraySize(clippedTriangles, s + 3);
						clippedTrianglesItems[s] = index;
						clippedTrianglesItems[s + 1] = (index + 1);
						clippedTrianglesItems[s + 2] = (index + 2);
						index += 3;
						continue outer;
					}
				}
			}
		};
		SkeletonClipping.prototype.clip = function (x1, y1, x2, y2, x3, y3, clippingArea, output) {
			var originalOutput = output;
			var clipped = false;
			var input = null;
			if (clippingArea.length % 4 >= 2) {
				input = output;
				output = this.scratch;
			}
			else
				input = this.scratch;
			input.length = 0;
			input.push(x1);
			input.push(y1);
			input.push(x2);
			input.push(y2);
			input.push(x3);
			input.push(y3);
			input.push(x1);
			input.push(y1);
			output.length = 0;
			var clippingVertices = clippingArea;
			var clippingVerticesLast = clippingArea.length - 4;
			for (var i = 0;; i += 2) {
				var edgeX = clippingVertices[i], edgeY = clippingVertices[i + 1];
				var edgeX2 = clippingVertices[i + 2], edgeY2 = clippingVertices[i + 3];
				var deltaX = edgeX - edgeX2, deltaY = edgeY - edgeY2;
				var inputVertices = input;
				var inputVerticesLength = input.length - 2, outputStart = output.length;
				for (var ii = 0; ii < inputVerticesLength; ii += 2) {
					var inputX = inputVertices[ii], inputY = inputVertices[ii + 1];
					var inputX2 = inputVertices[ii + 2], inputY2 = inputVertices[ii + 3];
					var side2 = deltaX * (inputY2 - edgeY2) - deltaY * (inputX2 - edgeX2) > 0;
					if (deltaX * (inputY - edgeY2) - deltaY * (inputX - edgeX2) > 0) {
						if (side2) {
							output.push(inputX2);
							output.push(inputY2);
							continue;
						}
						var c0 = inputY2 - inputY, c2 = inputX2 - inputX;
						var s = c0 * (edgeX2 - edgeX) - c2 * (edgeY2 - edgeY);
						if (Math.abs(s) > 0.000001) {
							var ua = (c2 * (edgeY - inputY) - c0 * (edgeX - inputX)) / s;
							output.push(edgeX + (edgeX2 - edgeX) * ua);
							output.push(edgeY + (edgeY2 - edgeY) * ua);
						}
						else {
							output.push(edgeX);
							output.push(edgeY);
						}
					}
					else if (side2) {
						var c0 = inputY2 - inputY, c2 = inputX2 - inputX;
						var s = c0 * (edgeX2 - edgeX) - c2 * (edgeY2 - edgeY);
						if (Math.abs(s) > 0.000001) {
							var ua = (c2 * (edgeY - inputY) - c0 * (edgeX - inputX)) / s;
							output.push(edgeX + (edgeX2 - edgeX) * ua);
							output.push(edgeY + (edgeY2 - edgeY) * ua);
						}
						else {
							output.push(edgeX);
							output.push(edgeY);
						}
						output.push(inputX2);
						output.push(inputY2);
					}
					clipped = true;
				}
				if (outputStart == output.length) {
					originalOutput.length = 0;
					return true;
				}
				output.push(output[0]);
				output.push(output[1]);
				if (i == clippingVerticesLast)
					break;
				var temp = output;
				output = input;
				output.length = 0;
				input = temp;
			}
			if (originalOutput != output) {
				originalOutput.length = 0;
				for (var i = 0, n = output.length - 2; i < n; i++)
					originalOutput[i] = output[i];
			}
			else
				originalOutput.length = originalOutput.length - 2;
			return clipped;
		};
		SkeletonClipping.makeClockwise = function (polygon) {
			var vertices = polygon;
			var verticeslength = polygon.length;
			var area = vertices[verticeslength - 2] * vertices[1] - vertices[0] * vertices[verticeslength - 1], p1x = 0, p1y = 0, p2x = 0, p2y = 0;
			for (var i = 0, n = verticeslength - 3; i < n; i += 2) {
				p1x = vertices[i];
				p1y = vertices[i + 1];
				p2x = vertices[i + 2];
				p2y = vertices[i + 3];
				area += p1x * p2y - p2x * p1y;
			}
			if (area < 0)
				return;
			for (var i = 0, lastX = verticeslength - 2, n = verticeslength >> 1; i < n; i += 2) {
				var x = vertices[i], y = vertices[i + 1];
				var other = lastX - i;
				vertices[i] = vertices[other];
				vertices[i + 1] = vertices[other + 1];
				vertices[other] = x;
				vertices[other + 1] = y;
			}
		};
		return SkeletonClipping;
	}());
	spine.SkeletonClipping = SkeletonClipping;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var SkeletonData = (function () {
		function SkeletonData() {
			this.bones = new Array();
			this.slots = new Array();
			this.skins = new Array();
			this.events = new Array();
			this.animations = new Array();
			this.ikConstraints = new Array();
			this.transformConstraints = new Array();
			this.pathConstraints = new Array();
			this.fps = 0;
		}
		SkeletonData.prototype.findBone = function (boneName) {
			if (boneName == null)
				throw new Error("boneName cannot be null.");
			var bones = this.bones;
			for (var i = 0, n = bones.length; i < n; i++) {
				var bone = bones[i];
				if (bone.name == boneName)
					return bone;
			}
			return null;
		};
		SkeletonData.prototype.findBoneIndex = function (boneName) {
			if (boneName == null)
				throw new Error("boneName cannot be null.");
			var bones = this.bones;
			for (var i = 0, n = bones.length; i < n; i++)
				if (bones[i].name == boneName)
					return i;
			return -1;
		};
		SkeletonData.prototype.findSlot = function (slotName) {
			if (slotName == null)
				throw new Error("slotName cannot be null.");
			var slots = this.slots;
			for (var i = 0, n = slots.length; i < n; i++) {
				var slot = slots[i];
				if (slot.name == slotName)
					return slot;
			}
			return null;
		};
		SkeletonData.prototype.findSlotIndex = function (slotName) {
			if (slotName == null)
				throw new Error("slotName cannot be null.");
			var slots = this.slots;
			for (var i = 0, n = slots.length; i < n; i++)
				if (slots[i].name == slotName)
					return i;
			return -1;
		};
		SkeletonData.prototype.findSkin = function (skinName) {
			if (skinName == null)
				throw new Error("skinName cannot be null.");
			var skins = this.skins;
			for (var i = 0, n = skins.length; i < n; i++) {
				var skin = skins[i];
				if (skin.name == skinName)
					return skin;
			}
			return null;
		};
		SkeletonData.prototype.findEvent = function (eventDataName) {
			if (eventDataName == null)
				throw new Error("eventDataName cannot be null.");
			var events = this.events;
			for (var i = 0, n = events.length; i < n; i++) {
				var event_4 = events[i];
				if (event_4.name == eventDataName)
					return event_4;
			}
			return null;
		};
		SkeletonData.prototype.findAnimation = function (animationName) {
			if (animationName == null)
				throw new Error("animationName cannot be null.");
			var animations = this.animations;
			for (var i = 0, n = animations.length; i < n; i++) {
				var animation = animations[i];
				if (animation.name == animationName)
					return animation;
			}
			return null;
		};
		SkeletonData.prototype.findIkConstraint = function (constraintName) {
			if (constraintName == null)
				throw new Error("constraintName cannot be null.");
			var ikConstraints = this.ikConstraints;
			for (var i = 0, n = ikConstraints.length; i < n; i++) {
				var constraint = ikConstraints[i];
				if (constraint.name == constraintName)
					return constraint;
			}
			return null;
		};
		SkeletonData.prototype.findTransformConstraint = function (constraintName) {
			if (constraintName == null)
				throw new Error("constraintName cannot be null.");
			var transformConstraints = this.transformConstraints;
			for (var i = 0, n = transformConstraints.length; i < n; i++) {
				var constraint = transformConstraints[i];
				if (constraint.name == constraintName)
					return constraint;
			}
			return null;
		};
		SkeletonData.prototype.findPathConstraint = function (constraintName) {
			if (constraintName == null)
				throw new Error("constraintName cannot be null.");
			var pathConstraints = this.pathConstraints;
			for (var i = 0, n = pathConstraints.length; i < n; i++) {
				var constraint = pathConstraints[i];
				if (constraint.name == constraintName)
					return constraint;
			}
			return null;
		};
		SkeletonData.prototype.findPathConstraintIndex = function (pathConstraintName) {
			if (pathConstraintName == null)
				throw new Error("pathConstraintName cannot be null.");
			var pathConstraints = this.pathConstraints;
			for (var i = 0, n = pathConstraints.length; i < n; i++)
				if (pathConstraints[i].name == pathConstraintName)
					return i;
			return -1;
		};
		return SkeletonData;
	}());
	spine.SkeletonData = SkeletonData;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var SkeletonJson = (function () {
		function SkeletonJson(attachmentLoader) {
			this.scale = 1;
			this.linkedMeshes = new Array();
			this.attachmentLoader = attachmentLoader;
		}
		SkeletonJson.prototype.readSkeletonData = function (json) {
			var scale = this.scale;
			var skeletonData = new spine.SkeletonData();
			var root = typeof (json) === "string" ? JSON.parse(json) : json;
			var skeletonMap = root.skeleton;
			if (skeletonMap != null) {
				skeletonData.hash = skeletonMap.hash;
				skeletonData.version = skeletonMap.spine;
				skeletonData.width = skeletonMap.width;
				skeletonData.height = skeletonMap.height;
				skeletonData.fps = skeletonMap.fps;
				skeletonData.imagesPath = skeletonMap.images;
			}
			if (root.bones) {
				for (var i = 0; i < root.bones.length; i++) {
					var boneMap = root.bones[i];
					var parent_2 = null;
					var parentName = this.getValue(boneMap, "parent", null);
					if (parentName != null) {
						parent_2 = skeletonData.findBone(parentName);
						if (parent_2 == null)
							throw new Error("Parent bone not found: " + parentName);
					}
					var data = new spine.BoneData(skeletonData.bones.length, boneMap.name, parent_2);
					data.length = this.getValue(boneMap, "length", 0) * scale;
					data.x = this.getValue(boneMap, "x", 0) * scale;
					data.y = this.getValue(boneMap, "y", 0) * scale;
					data.rotation = this.getValue(boneMap, "rotation", 0);
					data.scaleX = this.getValue(boneMap, "scaleX", 1);
					data.scaleY = this.getValue(boneMap, "scaleY", 1);
					data.shearX = this.getValue(boneMap, "shearX", 0);
					data.shearY = this.getValue(boneMap, "shearY", 0);
					data.transformMode = SkeletonJson.transformModeFromString(this.getValue(boneMap, "transform", "normal"));
					skeletonData.bones.push(data);
				}
			}
			if (root.slots) {
				for (var i = 0; i < root.slots.length; i++) {
					var slotMap = root.slots[i];
					var slotName = slotMap.name;
					var boneName = slotMap.bone;
					var boneData = skeletonData.findBone(boneName);
					if (boneData == null)
						throw new Error("Slot bone not found: " + boneName);
					var data = new spine.SlotData(skeletonData.slots.length, slotName, boneData);
					var color = this.getValue(slotMap, "color", null);
					if (color != null)
						data.color.setFromString(color);
					var dark = this.getValue(slotMap, "dark", null);
					if (dark != null) {
						data.darkColor = new spine.Color(1, 1, 1, 1);
						data.darkColor.setFromString(dark);
					}
					data.attachmentName = this.getValue(slotMap, "attachment", null);
					data.blendMode = SkeletonJson.blendModeFromString(this.getValue(slotMap, "blend", "normal"));
					skeletonData.slots.push(data);
				}
			}
			if (root.ik) {
				for (var i = 0; i < root.ik.length; i++) {
					var constraintMap = root.ik[i];
					var data = new spine.IkConstraintData(constraintMap.name);
					data.order = this.getValue(constraintMap, "order", 0);
					for (var j = 0; j < constraintMap.bones.length; j++) {
						var boneName = constraintMap.bones[j];
						var bone = skeletonData.findBone(boneName);
						if (bone == null)
							throw new Error("IK bone not found: " + boneName);
						data.bones.push(bone);
					}
					var targetName = constraintMap.target;
					data.target = skeletonData.findBone(targetName);
					if (data.target == null)
						throw new Error("IK target bone not found: " + targetName);
					data.mix = this.getValue(constraintMap, "mix", 1);
					data.bendDirection = this.getValue(constraintMap, "bendPositive", true) ? 1 : -1;
					data.compress = this.getValue(constraintMap, "compress", false);
					data.stretch = this.getValue(constraintMap, "stretch", false);
					data.uniform = this.getValue(constraintMap, "uniform", false);
					skeletonData.ikConstraints.push(data);
				}
			}
			if (root.transform) {
				for (var i = 0; i < root.transform.length; i++) {
					var constraintMap = root.transform[i];
					var data = new spine.TransformConstraintData(constraintMap.name);
					data.order = this.getValue(constraintMap, "order", 0);
					for (var j = 0; j < constraintMap.bones.length; j++) {
						var boneName = constraintMap.bones[j];
						var bone = skeletonData.findBone(boneName);
						if (bone == null)
							throw new Error("Transform constraint bone not found: " + boneName);
						data.bones.push(bone);
					}
					var targetName = constraintMap.target;
					data.target = skeletonData.findBone(targetName);
					if (data.target == null)
						throw new Error("Transform constraint target bone not found: " + targetName);
					data.local = this.getValue(constraintMap, "local", false);
					data.relative = this.getValue(constraintMap, "relative", false);
					data.offsetRotation = this.getValue(constraintMap, "rotation", 0);
					data.offsetX = this.getValue(constraintMap, "x", 0) * scale;
					data.offsetY = this.getValue(constraintMap, "y", 0) * scale;
					data.offsetScaleX = this.getValue(constraintMap, "scaleX", 0);
					data.offsetScaleY = this.getValue(constraintMap, "scaleY", 0);
					data.offsetShearY = this.getValue(constraintMap, "shearY", 0);
					data.rotateMix = this.getValue(constraintMap, "rotateMix", 1);
					data.translateMix = this.getValue(constraintMap, "translateMix", 1);
					data.scaleMix = this.getValue(constraintMap, "scaleMix", 1);
					data.shearMix = this.getValue(constraintMap, "shearMix", 1);
					skeletonData.transformConstraints.push(data);
				}
			}
			if (root.path) {
				for (var i = 0; i < root.path.length; i++) {
					var constraintMap = root.path[i];
					var data = new spine.PathConstraintData(constraintMap.name);
					data.order = this.getValue(constraintMap, "order", 0);
					for (var j = 0; j < constraintMap.bones.length; j++) {
						var boneName = constraintMap.bones[j];
						var bone = skeletonData.findBone(boneName);
						if (bone == null)
							throw new Error("Transform constraint bone not found: " + boneName);
						data.bones.push(bone);
					}
					var targetName = constraintMap.target;
					data.target = skeletonData.findSlot(targetName);
					if (data.target == null)
						throw new Error("Path target slot not found: " + targetName);
					data.positionMode = SkeletonJson.positionModeFromString(this.getValue(constraintMap, "positionMode", "percent"));
					data.spacingMode = SkeletonJson.spacingModeFromString(this.getValue(constraintMap, "spacingMode", "length"));
					data.rotateMode = SkeletonJson.rotateModeFromString(this.getValue(constraintMap, "rotateMode", "tangent"));
					data.offsetRotation = this.getValue(constraintMap, "rotation", 0);
					data.position = this.getValue(constraintMap, "position", 0);
					if (data.positionMode == spine.PositionMode.Fixed)
						data.position *= scale;
					data.spacing = this.getValue(constraintMap, "spacing", 0);
					if (data.spacingMode == spine.SpacingMode.Length || data.spacingMode == spine.SpacingMode.Fixed)
						data.spacing *= scale;
					data.rotateMix = this.getValue(constraintMap, "rotateMix", 1);
					data.translateMix = this.getValue(constraintMap, "translateMix", 1);
					skeletonData.pathConstraints.push(data);
				}
			}
			if (root.skins) {
				for (var skinName in root.skins) {
					var skinMap = root.skins[skinName];
					var skin = new spine.Skin(skinName);
					for (var slotName in skinMap) {
						var slotIndex = skeletonData.findSlotIndex(slotName);
						if (slotIndex == -1)
							throw new Error("Slot not found: " + slotName);
						var slotMap = skinMap[slotName];
						for (var entryName in slotMap) {
							var attachment = this.readAttachment(slotMap[entryName], skin, slotIndex, entryName, skeletonData);
							if (attachment != null)
								skin.addAttachment(slotIndex, entryName, attachment);
						}
					}
					skeletonData.skins.push(skin);
					if (skin.name == "default")
						skeletonData.defaultSkin = skin;
				}
			}
			for (var i = 0, n = this.linkedMeshes.length; i < n; i++) {
				var linkedMesh = this.linkedMeshes[i];
				var skin = linkedMesh.skin == null ? skeletonData.defaultSkin : skeletonData.findSkin(linkedMesh.skin);
				if (skin == null)
					throw new Error("Skin not found: " + linkedMesh.skin);
				var parent_3 = skin.getAttachment(linkedMesh.slotIndex, linkedMesh.parent);
				if (parent_3 == null)
					throw new Error("Parent mesh not found: " + linkedMesh.parent);
				linkedMesh.mesh.setParentMesh(parent_3);
				linkedMesh.mesh.updateUVs();
			}
			this.linkedMeshes.length = 0;
			if (root.events) {
				for (var eventName in root.events) {
					var eventMap = root.events[eventName];
					var data = new spine.EventData(eventName);
					data.intValue = this.getValue(eventMap, "int", 0);
					data.floatValue = this.getValue(eventMap, "float", 0);
					data.stringValue = this.getValue(eventMap, "string", "");
					data.audioPath = this.getValue(eventMap, "audio", null);
					if (data.audioPath != null) {
						data.volume = this.getValue(eventMap, "volume", 1);
						data.balance = this.getValue(eventMap, "balance", 0);
					}
					skeletonData.events.push(data);
				}
			}
			if (root.animations) {
				for (var animationName in root.animations) {
					var animationMap = root.animations[animationName];
					this.readAnimation(animationMap, animationName, skeletonData);
				}
			}
			return skeletonData;
		};
		SkeletonJson.prototype.readAttachment = function (map, skin, slotIndex, name, skeletonData) {
			var scale = this.scale;
			name = this.getValue(map, "name", name);
			var type = this.getValue(map, "type", "region");
			switch (type) {
				case "region": {
					var path = this.getValue(map, "path", name);
					var region = this.attachmentLoader.newRegionAttachment(skin, name, path);
					if (region == null)
						return null;
					region.path = path;
					region.x = this.getValue(map, "x", 0) * scale;
					region.y = this.getValue(map, "y", 0) * scale;
					region.scaleX = this.getValue(map, "scaleX", 1);
					region.scaleY = this.getValue(map, "scaleY", 1);
					region.rotation = this.getValue(map, "rotation", 0);
					region.width = map.width * scale;
					region.height = map.height * scale;
					var color = this.getValue(map, "color", null);
					if (color != null)
						region.color.setFromString(color);
					region.updateOffset();
					return region;
				}
				case "boundingbox": {
					var box = this.attachmentLoader.newBoundingBoxAttachment(skin, name);
					if (box == null)
						return null;
					this.readVertices(map, box, map.vertexCount << 1);
					var color = this.getValue(map, "color", null);
					if (color != null)
						box.color.setFromString(color);
					return box;
				}
				case "mesh":
				case "linkedmesh": {
					var path = this.getValue(map, "path", name);
					var mesh = this.attachmentLoader.newMeshAttachment(skin, name, path);
					if (mesh == null)
						return null;
					mesh.path = path;
					var color = this.getValue(map, "color", null);
					if (color != null)
						mesh.color.setFromString(color);
					var parent_4 = this.getValue(map, "parent", null);
					if (parent_4 != null) {
						mesh.inheritDeform = this.getValue(map, "deform", true);
						this.linkedMeshes.push(new LinkedMesh(mesh, this.getValue(map, "skin", null), slotIndex, parent_4));
						return mesh;
					}
					var uvs = map.uvs;
					this.readVertices(map, mesh, uvs.length);
					mesh.triangles = map.triangles;
					mesh.regionUVs = uvs;
					mesh.updateUVs();
					mesh.hullLength = this.getValue(map, "hull", 0) * 2;
					return mesh;
				}
				case "path": {
					var path = this.attachmentLoader.newPathAttachment(skin, name);
					if (path == null)
						return null;
					path.closed = this.getValue(map, "closed", false);
					path.constantSpeed = this.getValue(map, "constantSpeed", true);
					var vertexCount = map.vertexCount;
					this.readVertices(map, path, vertexCount << 1);
					var lengths = spine.Utils.newArray(vertexCount / 3, 0);
					for (var i = 0; i < map.lengths.length; i++)
						lengths[i] = map.lengths[i] * scale;
					path.lengths = lengths;
					var color = this.getValue(map, "color", null);
					if (color != null)
						path.color.setFromString(color);
					return path;
				}
				case "point": {
					var point = this.attachmentLoader.newPointAttachment(skin, name);
					if (point == null)
						return null;
					point.x = this.getValue(map, "x", 0) * scale;
					point.y = this.getValue(map, "y", 0) * scale;
					point.rotation = this.getValue(map, "rotation", 0);
					var color = this.getValue(map, "color", null);
					if (color != null)
						point.color.setFromString(color);
					return point;
				}
				case "clipping": {
					var clip = this.attachmentLoader.newClippingAttachment(skin, name);
					if (clip == null)
						return null;
					var end = this.getValue(map, "end", null);
					if (end != null) {
						var slot = skeletonData.findSlot(end);
						if (slot == null)
							throw new Error("Clipping end slot not found: " + end);
						clip.endSlot = slot;
					}
					var vertexCount = map.vertexCount;
					this.readVertices(map, clip, vertexCount << 1);
					var color = this.getValue(map, "color", null);
					if (color != null)
						clip.color.setFromString(color);
					return clip;
				}
			}
			return null;
		};
		SkeletonJson.prototype.readVertices = function (map, attachment, verticesLength) {
			var scale = this.scale;
			attachment.worldVerticesLength = verticesLength;
			var vertices = map.vertices;
			if (verticesLength == vertices.length) {
				var scaledVertices = spine.Utils.toFloatArray(vertices);
				if (scale != 1) {
					for (var i = 0, n = vertices.length; i < n; i++)
						scaledVertices[i] *= scale;
				}
				attachment.vertices = scaledVertices;
				return;
			}
			var weights = new Array();
			var bones = new Array();
			for (var i = 0, n = vertices.length; i < n;) {
				var boneCount = vertices[i++];
				bones.push(boneCount);
				for (var nn = i + boneCount * 4; i < nn; i += 4) {
					bones.push(vertices[i]);
					weights.push(vertices[i + 1] * scale);
					weights.push(vertices[i + 2] * scale);
					weights.push(vertices[i + 3]);
				}
			}
			attachment.bones = bones;
			attachment.vertices = spine.Utils.toFloatArray(weights);
		};
		SkeletonJson.prototype.readAnimation = function (map, name, skeletonData) {
			var scale = this.scale;
			var timelines = new Array();
			var duration = 0;
			if (map.slots) {
				for (var slotName in map.slots) {
					var slotMap = map.slots[slotName];
					var slotIndex = skeletonData.findSlotIndex(slotName);
					if (slotIndex == -1)
						throw new Error("Slot not found: " + slotName);
					for (var timelineName in slotMap) {
						var timelineMap = slotMap[timelineName];
						if (timelineName == "attachment") {
							var timeline = new spine.AttachmentTimeline(timelineMap.length);
							timeline.slotIndex = slotIndex;
							var frameIndex = 0;
							for (var i = 0; i < timelineMap.length; i++) {
								var valueMap = timelineMap[i];
								timeline.setFrame(frameIndex++, valueMap.time, valueMap.name);
							}
							timelines.push(timeline);
							duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
						}
						else if (timelineName == "color") {
							var timeline = new spine.ColorTimeline(timelineMap.length);
							timeline.slotIndex = slotIndex;
							var frameIndex = 0;
							for (var i = 0; i < timelineMap.length; i++) {
								var valueMap = timelineMap[i];
								var color = new spine.Color();
								color.setFromString(valueMap.color);
								timeline.setFrame(frameIndex, valueMap.time, color.r, color.g, color.b, color.a);
								this.readCurve(valueMap, timeline, frameIndex);
								frameIndex++;
							}
							timelines.push(timeline);
							duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * spine.ColorTimeline.ENTRIES]);
						}
						else if (timelineName == "twoColor") {
							var timeline = new spine.TwoColorTimeline(timelineMap.length);
							timeline.slotIndex = slotIndex;
							var frameIndex = 0;
							for (var i = 0; i < timelineMap.length; i++) {
								var valueMap = timelineMap[i];
								var light = new spine.Color();
								var dark = new spine.Color();
								light.setFromString(valueMap.light);
								dark.setFromString(valueMap.dark);
								timeline.setFrame(frameIndex, valueMap.time, light.r, light.g, light.b, light.a, dark.r, dark.g, dark.b);
								this.readCurve(valueMap, timeline, frameIndex);
								frameIndex++;
							}
							timelines.push(timeline);
							duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * spine.TwoColorTimeline.ENTRIES]);
						}
						else
							throw new Error("Invalid timeline type for a slot: " + timelineName + " (" + slotName + ")");
					}
				}
			}
			if (map.bones) {
				for (var boneName in map.bones) {
					var boneMap = map.bones[boneName];
					var boneIndex = skeletonData.findBoneIndex(boneName);
					if (boneIndex == -1)
						throw new Error("Bone not found: " + boneName);
					for (var timelineName in boneMap) {
						var timelineMap = boneMap[timelineName];
						if (timelineName === "rotate") {
							var timeline = new spine.RotateTimeline(timelineMap.length);
							timeline.boneIndex = boneIndex;
							var frameIndex = 0;
							for (var i = 0; i < timelineMap.length; i++) {
								var valueMap = timelineMap[i];
								timeline.setFrame(frameIndex, valueMap.time, valueMap.angle);
								this.readCurve(valueMap, timeline, frameIndex);
								frameIndex++;
							}
							timelines.push(timeline);
							duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * spine.RotateTimeline.ENTRIES]);
						}
						else if (timelineName === "translate" || timelineName === "scale" || timelineName === "shear") {
							var timeline = null;
							var timelineScale = 1;
							if (timelineName === "scale")
								timeline = new spine.ScaleTimeline(timelineMap.length);
							else if (timelineName === "shear")
								timeline = new spine.ShearTimeline(timelineMap.length);
							else {
								timeline = new spine.TranslateTimeline(timelineMap.length);
								timelineScale = scale;
							}
							timeline.boneIndex = boneIndex;
							var frameIndex = 0;
							for (var i = 0; i < timelineMap.length; i++) {
								var valueMap = timelineMap[i];
								var x = this.getValue(valueMap, "x", 0), y = this.getValue(valueMap, "y", 0);
								timeline.setFrame(frameIndex, valueMap.time, x * timelineScale, y * timelineScale);
								this.readCurve(valueMap, timeline, frameIndex);
								frameIndex++;
							}
							timelines.push(timeline);
							duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * spine.TranslateTimeline.ENTRIES]);
						}
						else
							throw new Error("Invalid timeline type for a bone: " + timelineName + " (" + boneName + ")");
					}
				}
			}
			if (map.ik) {
				for (var constraintName in map.ik) {
					var constraintMap = map.ik[constraintName];
					var constraint = skeletonData.findIkConstraint(constraintName);
					var timeline = new spine.IkConstraintTimeline(constraintMap.length);
					timeline.ikConstraintIndex = skeletonData.ikConstraints.indexOf(constraint);
					var frameIndex = 0;
					for (var i = 0; i < constraintMap.length; i++) {
						var valueMap = constraintMap[i];
						timeline.setFrame(frameIndex, valueMap.time, this.getValue(valueMap, "mix", 1), this.getValue(valueMap, "bendPositive", true) ? 1 : -1, this.getValue(valueMap, "compress", false), this.getValue(valueMap, "stretch", false));
						this.readCurve(valueMap, timeline, frameIndex);
						frameIndex++;
					}
					timelines.push(timeline);
					duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * spine.IkConstraintTimeline.ENTRIES]);
				}
			}
			if (map.transform) {
				for (var constraintName in map.transform) {
					var constraintMap = map.transform[constraintName];
					var constraint = skeletonData.findTransformConstraint(constraintName);
					var timeline = new spine.TransformConstraintTimeline(constraintMap.length);
					timeline.transformConstraintIndex = skeletonData.transformConstraints.indexOf(constraint);
					var frameIndex = 0;
					for (var i = 0; i < constraintMap.length; i++) {
						var valueMap = constraintMap[i];
						timeline.setFrame(frameIndex, valueMap.time, this.getValue(valueMap, "rotateMix", 1), this.getValue(valueMap, "translateMix", 1), this.getValue(valueMap, "scaleMix", 1), this.getValue(valueMap, "shearMix", 1));
						this.readCurve(valueMap, timeline, frameIndex);
						frameIndex++;
					}
					timelines.push(timeline);
					duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * spine.TransformConstraintTimeline.ENTRIES]);
				}
			}
			if (map.paths) {
				for (var constraintName in map.paths) {
					var constraintMap = map.paths[constraintName];
					var index = skeletonData.findPathConstraintIndex(constraintName);
					if (index == -1)
						throw new Error("Path constraint not found: " + constraintName);
					var data = skeletonData.pathConstraints[index];
					for (var timelineName in constraintMap) {
						var timelineMap = constraintMap[timelineName];
						if (timelineName === "position" || timelineName === "spacing") {
							var timeline = null;
							var timelineScale = 1;
							if (timelineName === "spacing") {
								timeline = new spine.PathConstraintSpacingTimeline(timelineMap.length);
								if (data.spacingMode == spine.SpacingMode.Length || data.spacingMode == spine.SpacingMode.Fixed)
									timelineScale = scale;
							}
							else {
								timeline = new spine.PathConstraintPositionTimeline(timelineMap.length);
								if (data.positionMode == spine.PositionMode.Fixed)
									timelineScale = scale;
							}
							timeline.pathConstraintIndex = index;
							var frameIndex = 0;
							for (var i = 0; i < timelineMap.length; i++) {
								var valueMap = timelineMap[i];
								timeline.setFrame(frameIndex, valueMap.time, this.getValue(valueMap, timelineName, 0) * timelineScale);
								this.readCurve(valueMap, timeline, frameIndex);
								frameIndex++;
							}
							timelines.push(timeline);
							duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * spine.PathConstraintPositionTimeline.ENTRIES]);
						}
						else if (timelineName === "mix") {
							var timeline = new spine.PathConstraintMixTimeline(timelineMap.length);
							timeline.pathConstraintIndex = index;
							var frameIndex = 0;
							for (var i = 0; i < timelineMap.length; i++) {
								var valueMap = timelineMap[i];
								timeline.setFrame(frameIndex, valueMap.time, this.getValue(valueMap, "rotateMix", 1), this.getValue(valueMap, "translateMix", 1));
								this.readCurve(valueMap, timeline, frameIndex);
								frameIndex++;
							}
							timelines.push(timeline);
							duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * spine.PathConstraintMixTimeline.ENTRIES]);
						}
					}
				}
			}
			if (map.deform) {
				for (var deformName in map.deform) {
					var deformMap = map.deform[deformName];
					var skin = skeletonData.findSkin(deformName);
					if (skin == null)
						throw new Error("Skin not found: " + deformName);
					for (var slotName in deformMap) {
						var slotMap = deformMap[slotName];
						var slotIndex = skeletonData.findSlotIndex(slotName);
						if (slotIndex == -1)
							throw new Error("Slot not found: " + slotMap.name);
						for (var timelineName in slotMap) {
							var timelineMap = slotMap[timelineName];
							var attachment = skin.getAttachment(slotIndex, timelineName);
							if (attachment == null)
								throw new Error("Deform attachment not found: " + timelineMap.name);
							var weighted = attachment.bones != null;
							var vertices = attachment.vertices;
							var deformLength = weighted ? vertices.length / 3 * 2 : vertices.length;
							var timeline = new spine.DeformTimeline(timelineMap.length);
							timeline.slotIndex = slotIndex;
							timeline.attachment = attachment;
							var frameIndex = 0;
							for (var j = 0; j < timelineMap.length; j++) {
								var valueMap = timelineMap[j];
								var deform = void 0;
								var verticesValue = this.getValue(valueMap, "vertices", null);
								if (verticesValue == null)
									deform = weighted ? spine.Utils.newFloatArray(deformLength) : vertices;
								else {
									deform = spine.Utils.newFloatArray(deformLength);
									var start = this.getValue(valueMap, "offset", 0);
									spine.Utils.arrayCopy(verticesValue, 0, deform, start, verticesValue.length);
									if (scale != 1) {
										for (var i = start, n = i + verticesValue.length; i < n; i++)
											deform[i] *= scale;
									}
									if (!weighted) {
										for (var i = 0; i < deformLength; i++)
											deform[i] += vertices[i];
									}
								}
								timeline.setFrame(frameIndex, valueMap.time, deform);
								this.readCurve(valueMap, timeline, frameIndex);
								frameIndex++;
							}
							timelines.push(timeline);
							duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
						}
					}
				}
			}
			var drawOrderNode = map.drawOrder;
			if (drawOrderNode == null)
				drawOrderNode = map.draworder;
			if (drawOrderNode != null) {
				var timeline = new spine.DrawOrderTimeline(drawOrderNode.length);
				var slotCount = skeletonData.slots.length;
				var frameIndex = 0;
				for (var j = 0; j < drawOrderNode.length; j++) {
					var drawOrderMap = drawOrderNode[j];
					var drawOrder = null;
					var offsets = this.getValue(drawOrderMap, "offsets", null);
					if (offsets != null) {
						drawOrder = spine.Utils.newArray(slotCount, -1);
						var unchanged = spine.Utils.newArray(slotCount - offsets.length, 0);
						var originalIndex = 0, unchangedIndex = 0;
						for (var i = 0; i < offsets.length; i++) {
							var offsetMap = offsets[i];
							var slotIndex = skeletonData.findSlotIndex(offsetMap.slot);
							if (slotIndex == -1)
								throw new Error("Slot not found: " + offsetMap.slot);
							while (originalIndex != slotIndex)
								unchanged[unchangedIndex++] = originalIndex++;
							drawOrder[originalIndex + offsetMap.offset] = originalIndex++;
						}
						while (originalIndex < slotCount)
							unchanged[unchangedIndex++] = originalIndex++;
						for (var i = slotCount - 1; i >= 0; i--)
							if (drawOrder[i] == -1)
								drawOrder[i] = unchanged[--unchangedIndex];
					}
					timeline.setFrame(frameIndex++, drawOrderMap.time, drawOrder);
				}
				timelines.push(timeline);
				duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
			}
			if (map.events) {
				var timeline = new spine.EventTimeline(map.events.length);
				var frameIndex = 0;
				for (var i = 0; i < map.events.length; i++) {
					var eventMap = map.events[i];
					var eventData = skeletonData.findEvent(eventMap.name);
					if (eventData == null)
						throw new Error("Event not found: " + eventMap.name);
					var event_5 = new spine.Event(spine.Utils.toSinglePrecision(eventMap.time), eventData);
					event_5.intValue = this.getValue(eventMap, "int", eventData.intValue);
					event_5.floatValue = this.getValue(eventMap, "float", eventData.floatValue);
					event_5.stringValue = this.getValue(eventMap, "string", eventData.stringValue);
					if (event_5.data.audioPath != null) {
						event_5.volume = this.getValue(eventMap, "volume", 1);
						event_5.balance = this.getValue(eventMap, "balance", 0);
					}
					timeline.setFrame(frameIndex++, event_5);
				}
				timelines.push(timeline);
				duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
			}
			if (isNaN(duration)) {
				throw new Error("Error while parsing animation, duration is NaN");
			}
			skeletonData.animations.push(new spine.Animation(name, timelines, duration));
		};
		SkeletonJson.prototype.readCurve = function (map, timeline, frameIndex) {
			if (!map.curve)
				return;
			if (map.curve === "stepped")
				timeline.setStepped(frameIndex);
			else if (Object.prototype.toString.call(map.curve) === '[object Array]') {
				var curve = map.curve;
				timeline.setCurve(frameIndex, curve[0], curve[1], curve[2], curve[3]);
			}
		};
		SkeletonJson.prototype.getValue = function (map, prop, defaultValue) {
			return map[prop] !== undefined ? map[prop] : defaultValue;
		};
		SkeletonJson.blendModeFromString = function (str) {
			str = str.toLowerCase();
			if (str == "normal")
				return spine.BlendMode.Normal;
			if (str == "additive")
				return spine.BlendMode.Additive;
			if (str == "multiply")
				return spine.BlendMode.Multiply;
			if (str == "screen")
				return spine.BlendMode.Screen;
			throw new Error("Unknown blend mode: " + str);
		};
		SkeletonJson.positionModeFromString = function (str) {
			str = str.toLowerCase();
			if (str == "fixed")
				return spine.PositionMode.Fixed;
			if (str == "percent")
				return spine.PositionMode.Percent;
			throw new Error("Unknown position mode: " + str);
		};
		SkeletonJson.spacingModeFromString = function (str) {
			str = str.toLowerCase();
			if (str == "length")
				return spine.SpacingMode.Length;
			if (str == "fixed")
				return spine.SpacingMode.Fixed;
			if (str == "percent")
				return spine.SpacingMode.Percent;
			throw new Error("Unknown position mode: " + str);
		};
		SkeletonJson.rotateModeFromString = function (str) {
			str = str.toLowerCase();
			if (str == "tangent")
				return spine.RotateMode.Tangent;
			if (str == "chain")
				return spine.RotateMode.Chain;
			if (str == "chainscale")
				return spine.RotateMode.ChainScale;
			throw new Error("Unknown rotate mode: " + str);
		};
		SkeletonJson.transformModeFromString = function (str) {
			str = str.toLowerCase();
			if (str == "normal")
				return spine.TransformMode.Normal;
			if (str == "onlytranslation")
				return spine.TransformMode.OnlyTranslation;
			if (str == "norotationorreflection")
				return spine.TransformMode.NoRotationOrReflection;
			if (str == "noscale")
				return spine.TransformMode.NoScale;
			if (str == "noscaleorreflection")
				return spine.TransformMode.NoScaleOrReflection;
			throw new Error("Unknown transform mode: " + str);
		};
		return SkeletonJson;
	}());
	spine.SkeletonJson = SkeletonJson;
	var LinkedMesh = (function () {
		function LinkedMesh(mesh, skin, slotIndex, parent) {
			this.mesh = mesh;
			this.skin = skin;
			this.slotIndex = slotIndex;
			this.parent = parent;
		}
		return LinkedMesh;
	}());
})(spine || (spine = {}));
var spine;
(function (spine) {
	var Skin = (function () {
		function Skin(name) {
			this.attachments = new Array();
			if (name == null)
				throw new Error("name cannot be null.");
			this.name = name;
		}
		Skin.prototype.addAttachment = function (slotIndex, name, attachment) {
			if (attachment == null)
				throw new Error("attachment cannot be null.");
			var attachments = this.attachments;
			if (slotIndex >= attachments.length)
				attachments.length = slotIndex + 1;
			if (!attachments[slotIndex])
				attachments[slotIndex] = {};
			attachments[slotIndex][name] = attachment;
		};
		Skin.prototype.getAttachment = function (slotIndex, name) {
			var dictionary = this.attachments[slotIndex];
			return dictionary ? dictionary[name] : null;
		};
		Skin.prototype.attachAll = function (skeleton, oldSkin) {
			var slotIndex = 0;
			for (var i = 0; i < skeleton.slots.length; i++) {
				var slot = skeleton.slots[i];
				var slotAttachment = slot.getAttachment();
				if (slotAttachment && slotIndex < oldSkin.attachments.length) {
					var dictionary = oldSkin.attachments[slotIndex];
					for (var key in dictionary) {
						var skinAttachment = dictionary[key];
						if (slotAttachment == skinAttachment) {
							var attachment = this.getAttachment(slotIndex, key);
							if (attachment != null)
								slot.setAttachment(attachment);
							break;
						}
					}
				}
				slotIndex++;
			}
		};
		return Skin;
	}());
	spine.Skin = Skin;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var Slot = (function () {
		function Slot(data, bone) {
			this.attachmentVertices = new Array();
			if (data == null)
				throw new Error("data cannot be null.");
			if (bone == null)
				throw new Error("bone cannot be null.");
			this.data = data;
			this.bone = bone;
			this.color = new spine.Color();
			this.darkColor = data.darkColor == null ? null : new spine.Color();
			this.setToSetupPose();
		}
		Slot.prototype.getAttachment = function () {
			return this.attachment;
		};
		Slot.prototype.setAttachment = function (attachment) {
			if (this.attachment == attachment)
				return;
			this.attachment = attachment;
			this.attachmentTime = this.bone.skeleton.time;
			this.attachmentVertices.length = 0;
		};
		Slot.prototype.setAttachmentTime = function (time) {
			this.attachmentTime = this.bone.skeleton.time - time;
		};
		Slot.prototype.getAttachmentTime = function () {
			return this.bone.skeleton.time - this.attachmentTime;
		};
		Slot.prototype.setToSetupPose = function () {
			this.color.setFromColor(this.data.color);
			if (this.darkColor != null)
				this.darkColor.setFromColor(this.data.darkColor);
			if (this.data.attachmentName == null)
				this.attachment = null;
			else {
				this.attachment = null;
				this.setAttachment(this.bone.skeleton.getAttachment(this.data.index, this.data.attachmentName));
			}
		};
		return Slot;
	}());
	spine.Slot = Slot;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var SlotData = (function () {
		function SlotData(index, name, boneData) {
			this.color = new spine.Color(1, 1, 1, 1);
			if (index < 0)
				throw new Error("index must be >= 0.");
			if (name == null)
				throw new Error("name cannot be null.");
			if (boneData == null)
				throw new Error("boneData cannot be null.");
			this.index = index;
			this.name = name;
			this.boneData = boneData;
		}
		return SlotData;
	}());
	spine.SlotData = SlotData;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var Texture = (function () {
		function Texture(image) {
			this._image = image;
		}
		Texture.prototype.getImage = function () {
			return this._image;
		};
		Texture.filterFromString = function (text) {
			switch (text.toLowerCase()) {
				case "nearest": return TextureFilter.Nearest;
				case "linear": return TextureFilter.Linear;
				case "mipmap": return TextureFilter.MipMap;
				case "mipmapnearestnearest": return TextureFilter.MipMapNearestNearest;
				case "mipmaplinearnearest": return TextureFilter.MipMapLinearNearest;
				case "mipmapnearestlinear": return TextureFilter.MipMapNearestLinear;
				case "mipmaplinearlinear": return TextureFilter.MipMapLinearLinear;
				default: throw new Error("Unknown texture filter " + text);
			}
		};
		Texture.wrapFromString = function (text) {
			switch (text.toLowerCase()) {
				case "mirroredtepeat": return TextureWrap.MirroredRepeat;
				case "clamptoedge": return TextureWrap.ClampToEdge;
				case "repeat": return TextureWrap.Repeat;
				default: throw new Error("Unknown texture wrap " + text);
			}
		};
		return Texture;
	}());
	spine.Texture = Texture;
	var TextureFilter;
	(function (TextureFilter) {
		TextureFilter[TextureFilter["Nearest"] = 9728] = "Nearest";
		TextureFilter[TextureFilter["Linear"] = 9729] = "Linear";
		TextureFilter[TextureFilter["MipMap"] = 9987] = "MipMap";
		TextureFilter[TextureFilter["MipMapNearestNearest"] = 9984] = "MipMapNearestNearest";
		TextureFilter[TextureFilter["MipMapLinearNearest"] = 9985] = "MipMapLinearNearest";
		TextureFilter[TextureFilter["MipMapNearestLinear"] = 9986] = "MipMapNearestLinear";
		TextureFilter[TextureFilter["MipMapLinearLinear"] = 9987] = "MipMapLinearLinear";
	})(TextureFilter = spine.TextureFilter || (spine.TextureFilter = {}));
	var TextureWrap;
	(function (TextureWrap) {
		TextureWrap[TextureWrap["MirroredRepeat"] = 33648] = "MirroredRepeat";
		TextureWrap[TextureWrap["ClampToEdge"] = 33071] = "ClampToEdge";
		TextureWrap[TextureWrap["Repeat"] = 10497] = "Repeat";
	})(TextureWrap = spine.TextureWrap || (spine.TextureWrap = {}));
	var TextureRegion = (function () {
		function TextureRegion() {
			this.u = 0;
			this.v = 0;
			this.u2 = 0;
			this.v2 = 0;
			this.width = 0;
			this.height = 0;
			this.rotate = false;
			this.offsetX = 0;
			this.offsetY = 0;
			this.originalWidth = 0;
			this.originalHeight = 0;
		}
		return TextureRegion;
	}());
	spine.TextureRegion = TextureRegion;
	var FakeTexture = (function (_super) {
		__extends(FakeTexture, _super);
		function FakeTexture() {
			return _super !== null && _super.apply(this, arguments) || this;
		}
		FakeTexture.prototype.setFilters = function (minFilter, magFilter) { };
		FakeTexture.prototype.setWraps = function (uWrap, vWrap) { };
		FakeTexture.prototype.dispose = function () { };
		return FakeTexture;
	}(Texture));
	spine.FakeTexture = FakeTexture;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var TextureAtlas = (function () {
		function TextureAtlas(atlasText, textureLoader) {
			this.pages = new Array();
			this.regions = new Array();
			this.load(atlasText, textureLoader);
		}
		TextureAtlas.prototype.load = function (atlasText, textureLoader) {
			if (textureLoader == null)
				throw new Error("textureLoader cannot be null.");
			var reader = new TextureAtlasReader(atlasText);
			var tuple = new Array(4);
			var page = null;
			while (true) {
				var line = reader.readLine();
				if (line == null)
					break;
				line = line.trim();
				if (line.length == 0)
					page = null;
				else if (!page) {
					page = new TextureAtlasPage();
					page.name = line;
					if (reader.readTuple(tuple) == 2) {
						page.width = parseInt(tuple[0]);
						page.height = parseInt(tuple[1]);
						reader.readTuple(tuple);
					}
					reader.readTuple(tuple);
					page.minFilter = spine.Texture.filterFromString(tuple[0]);
					page.magFilter = spine.Texture.filterFromString(tuple[1]);
					var direction = reader.readValue();
					page.uWrap = spine.TextureWrap.ClampToEdge;
					page.vWrap = spine.TextureWrap.ClampToEdge;
					if (direction == "x")
						page.uWrap = spine.TextureWrap.Repeat;
					else if (direction == "y")
						page.vWrap = spine.TextureWrap.Repeat;
					else if (direction == "xy")
						page.uWrap = page.vWrap = spine.TextureWrap.Repeat;
					page.texture = textureLoader(line);
					page.texture.setFilters(page.minFilter, page.magFilter);
					page.texture.setWraps(page.uWrap, page.vWrap);
					page.width = page.texture.getImage().width;
					page.height = page.texture.getImage().height;
					this.pages.push(page);
				}
				else {
					var region = new TextureAtlasRegion();
					region.name = line;
					region.page = page;
					region.rotate = reader.readValue() == "true";
					reader.readTuple(tuple);
					var x = parseInt(tuple[0]);
					var y = parseInt(tuple[1]);
					reader.readTuple(tuple);
					var width = parseInt(tuple[0]);
					var height = parseInt(tuple[1]);
					region.u = x / page.width;
					region.v = y / page.height;
					if (region.rotate) {
						region.u2 = (x + height) / page.width;
						region.v2 = (y + width) / page.height;
					}
					else {
						region.u2 = (x + width) / page.width;
						region.v2 = (y + height) / page.height;
					}
					region.x = x;
					region.y = y;
					region.width = Math.abs(width);
					region.height = Math.abs(height);
					if (reader.readTuple(tuple) == 4) {
						if (reader.readTuple(tuple) == 4) {
							reader.readTuple(tuple);
						}
					}
					region.originalWidth = parseInt(tuple[0]);
					region.originalHeight = parseInt(tuple[1]);
					reader.readTuple(tuple);
					region.offsetX = parseInt(tuple[0]);
					region.offsetY = parseInt(tuple[1]);
					region.index = parseInt(reader.readValue());
					region.texture = page.texture;
					this.regions.push(region);
				}
			}
		};
		TextureAtlas.prototype.findRegion = function (name) {
			for (var i = 0; i < this.regions.length; i++) {
				if (this.regions[i].name == name) {
					return this.regions[i];
				}
			}
			return null;
		};
		TextureAtlas.prototype.dispose = function () {
			for (var i = 0; i < this.pages.length; i++) {
				this.pages[i].texture.dispose();
			}
		};
		return TextureAtlas;
	}());
	spine.TextureAtlas = TextureAtlas;
	var TextureAtlasReader = (function () {
		function TextureAtlasReader(text) {
			this.index = 0;
			this.lines = text.split(/\r\n|\r|\n/);
		}
		TextureAtlasReader.prototype.readLine = function () {
			if (this.index >= this.lines.length)
				return null;
			return this.lines[this.index++];
		};
		TextureAtlasReader.prototype.readValue = function () {
			var line = this.readLine();
			var colon = line.indexOf(":");
			if (colon == -1)
				throw new Error("Invalid line: " + line);
			return line.substring(colon + 1).trim();
		};
		TextureAtlasReader.prototype.readTuple = function (tuple) {
			var line = this.readLine();
			var colon = line.indexOf(":");
			if (colon == -1)
				throw new Error("Invalid line: " + line);
			var i = 0, lastMatch = colon + 1;
			for (; i < 3; i++) {
				var comma = line.indexOf(",", lastMatch);
				if (comma == -1)
					break;
				tuple[i] = line.substr(lastMatch, comma - lastMatch).trim();
				lastMatch = comma + 1;
			}
			tuple[i] = line.substring(lastMatch).trim();
			return i + 1;
		};
		return TextureAtlasReader;
	}());
	var TextureAtlasPage = (function () {
		function TextureAtlasPage() {
		}
		return TextureAtlasPage;
	}());
	spine.TextureAtlasPage = TextureAtlasPage;
	var TextureAtlasRegion = (function (_super) {
		__extends(TextureAtlasRegion, _super);
		function TextureAtlasRegion() {
			return _super !== null && _super.apply(this, arguments) || this;
		}
		return TextureAtlasRegion;
	}(spine.TextureRegion));
	spine.TextureAtlasRegion = TextureAtlasRegion;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var TransformConstraint = (function () {
		function TransformConstraint(data, skeleton) {
			this.rotateMix = 0;
			this.translateMix = 0;
			this.scaleMix = 0;
			this.shearMix = 0;
			this.temp = new spine.Vector2();
			if (data == null)
				throw new Error("data cannot be null.");
			if (skeleton == null)
				throw new Error("skeleton cannot be null.");
			this.data = data;
			this.rotateMix = data.rotateMix;
			this.translateMix = data.translateMix;
			this.scaleMix = data.scaleMix;
			this.shearMix = data.shearMix;
			this.bones = new Array();
			for (var i = 0; i < data.bones.length; i++)
				this.bones.push(skeleton.findBone(data.bones[i].name));
			this.target = skeleton.findBone(data.target.name);
		}
		TransformConstraint.prototype.apply = function () {
			this.update();
		};
		TransformConstraint.prototype.update = function () {
			if (this.data.local) {
				if (this.data.relative)
					this.applyRelativeLocal();
				else
					this.applyAbsoluteLocal();
			}
			else {
				if (this.data.relative)
					this.applyRelativeWorld();
				else
					this.applyAbsoluteWorld();
			}
		};
		TransformConstraint.prototype.applyAbsoluteWorld = function () {
			var rotateMix = this.rotateMix, translateMix = this.translateMix, scaleMix = this.scaleMix, shearMix = this.shearMix;
			var target = this.target;
			var ta = target.a, tb = target.b, tc = target.c, td = target.d;
			var degRadReflect = ta * td - tb * tc > 0 ? spine.MathUtils.degRad : -spine.MathUtils.degRad;
			var offsetRotation = this.data.offsetRotation * degRadReflect;
			var offsetShearY = this.data.offsetShearY * degRadReflect;
			var bones = this.bones;
			for (var i = 0, n = bones.length; i < n; i++) {
				var bone = bones[i];
				var modified = false;
				if (rotateMix != 0) {
					var a = bone.a, b = bone.b, c = bone.c, d = bone.d;
					var r = Math.atan2(tc, ta) - Math.atan2(c, a) + offsetRotation;
					if (r > spine.MathUtils.PI)
						r -= spine.MathUtils.PI2;
					else if (r < -spine.MathUtils.PI)
						r += spine.MathUtils.PI2;
					r *= rotateMix;
					var cos = Math.cos(r), sin = Math.sin(r);
					bone.a = cos * a - sin * c;
					bone.b = cos * b - sin * d;
					bone.c = sin * a + cos * c;
					bone.d = sin * b + cos * d;
					modified = true;
				}
				if (translateMix != 0) {
					var temp = this.temp;
					target.localToWorld(temp.set(this.data.offsetX, this.data.offsetY));
					bone.worldX += (temp.x - bone.worldX) * translateMix;
					bone.worldY += (temp.y - bone.worldY) * translateMix;
					modified = true;
				}
				if (scaleMix > 0) {
					var s = Math.sqrt(bone.a * bone.a + bone.c * bone.c);
					var ts = Math.sqrt(ta * ta + tc * tc);
					if (s > 0.00001)
						s = (s + (ts - s + this.data.offsetScaleX) * scaleMix) / s;
					bone.a *= s;
					bone.c *= s;
					s = Math.sqrt(bone.b * bone.b + bone.d * bone.d);
					ts = Math.sqrt(tb * tb + td * td);
					if (s > 0.00001)
						s = (s + (ts - s + this.data.offsetScaleY) * scaleMix) / s;
					bone.b *= s;
					bone.d *= s;
					modified = true;
				}
				if (shearMix > 0) {
					var b = bone.b, d = bone.d;
					var by = Math.atan2(d, b);
					var r = Math.atan2(td, tb) - Math.atan2(tc, ta) - (by - Math.atan2(bone.c, bone.a));
					if (r > spine.MathUtils.PI)
						r -= spine.MathUtils.PI2;
					else if (r < -spine.MathUtils.PI)
						r += spine.MathUtils.PI2;
					r = by + (r + offsetShearY) * shearMix;
					var s = Math.sqrt(b * b + d * d);
					bone.b = Math.cos(r) * s;
					bone.d = Math.sin(r) * s;
					modified = true;
				}
				if (modified)
					bone.appliedValid = false;
			}
		};
		TransformConstraint.prototype.applyRelativeWorld = function () {
			var rotateMix = this.rotateMix, translateMix = this.translateMix, scaleMix = this.scaleMix, shearMix = this.shearMix;
			var target = this.target;
			var ta = target.a, tb = target.b, tc = target.c, td = target.d;
			var degRadReflect = ta * td - tb * tc > 0 ? spine.MathUtils.degRad : -spine.MathUtils.degRad;
			var offsetRotation = this.data.offsetRotation * degRadReflect, offsetShearY = this.data.offsetShearY * degRadReflect;
			var bones = this.bones;
			for (var i = 0, n = bones.length; i < n; i++) {
				var bone = bones[i];
				var modified = false;
				if (rotateMix != 0) {
					var a = bone.a, b = bone.b, c = bone.c, d = bone.d;
					var r = Math.atan2(tc, ta) + offsetRotation;
					if (r > spine.MathUtils.PI)
						r -= spine.MathUtils.PI2;
					else if (r < -spine.MathUtils.PI)
						r += spine.MathUtils.PI2;
					r *= rotateMix;
					var cos = Math.cos(r), sin = Math.sin(r);
					bone.a = cos * a - sin * c;
					bone.b = cos * b - sin * d;
					bone.c = sin * a + cos * c;
					bone.d = sin * b + cos * d;
					modified = true;
				}
				if (translateMix != 0) {
					var temp = this.temp;
					target.localToWorld(temp.set(this.data.offsetX, this.data.offsetY));
					bone.worldX += temp.x * translateMix;
					bone.worldY += temp.y * translateMix;
					modified = true;
				}
				if (scaleMix > 0) {
					var s = (Math.sqrt(ta * ta + tc * tc) - 1 + this.data.offsetScaleX) * scaleMix + 1;
					bone.a *= s;
					bone.c *= s;
					s = (Math.sqrt(tb * tb + td * td) - 1 + this.data.offsetScaleY) * scaleMix + 1;
					bone.b *= s;
					bone.d *= s;
					modified = true;
				}
				if (shearMix > 0) {
					var r = Math.atan2(td, tb) - Math.atan2(tc, ta);
					if (r > spine.MathUtils.PI)
						r -= spine.MathUtils.PI2;
					else if (r < -spine.MathUtils.PI)
						r += spine.MathUtils.PI2;
					var b = bone.b, d = bone.d;
					r = Math.atan2(d, b) + (r - spine.MathUtils.PI / 2 + offsetShearY) * shearMix;
					var s = Math.sqrt(b * b + d * d);
					bone.b = Math.cos(r) * s;
					bone.d = Math.sin(r) * s;
					modified = true;
				}
				if (modified)
					bone.appliedValid = false;
			}
		};
		TransformConstraint.prototype.applyAbsoluteLocal = function () {
			var rotateMix = this.rotateMix, translateMix = this.translateMix, scaleMix = this.scaleMix, shearMix = this.shearMix;
			var target = this.target;
			if (!target.appliedValid)
				target.updateAppliedTransform();
			var bones = this.bones;
			for (var i = 0, n = bones.length; i < n; i++) {
				var bone = bones[i];
				if (!bone.appliedValid)
					bone.updateAppliedTransform();
				var rotation = bone.arotation;
				if (rotateMix != 0) {
					var r = target.arotation - rotation + this.data.offsetRotation;
					r -= (16384 - ((16384.499999999996 - r / 360) | 0)) * 360;
					rotation += r * rotateMix;
				}
				var x = bone.ax, y = bone.ay;
				if (translateMix != 0) {
					x += (target.ax - x + this.data.offsetX) * translateMix;
					y += (target.ay - y + this.data.offsetY) * translateMix;
				}
				var scaleX = bone.ascaleX, scaleY = bone.ascaleY;
				if (scaleMix != 0) {
					if (scaleX > 0.00001)
						scaleX = (scaleX + (target.ascaleX - scaleX + this.data.offsetScaleX) * scaleMix) / scaleX;
					if (scaleY > 0.00001)
						scaleY = (scaleY + (target.ascaleY - scaleY + this.data.offsetScaleY) * scaleMix) / scaleY;
				}
				var shearY = bone.ashearY;
				if (shearMix != 0) {
					var r = target.ashearY - shearY + this.data.offsetShearY;
					r -= (16384 - ((16384.499999999996 - r / 360) | 0)) * 360;
					bone.shearY += r * shearMix;
				}
				bone.updateWorldTransformWith(x, y, rotation, scaleX, scaleY, bone.ashearX, shearY);
			}
		};
		TransformConstraint.prototype.applyRelativeLocal = function () {
			var rotateMix = this.rotateMix, translateMix = this.translateMix, scaleMix = this.scaleMix, shearMix = this.shearMix;
			var target = this.target;
			if (!target.appliedValid)
				target.updateAppliedTransform();
			var bones = this.bones;
			for (var i = 0, n = bones.length; i < n; i++) {
				var bone = bones[i];
				if (!bone.appliedValid)
					bone.updateAppliedTransform();
				var rotation = bone.arotation;
				if (rotateMix != 0)
					rotation += (target.arotation + this.data.offsetRotation) * rotateMix;
				var x = bone.ax, y = bone.ay;
				if (translateMix != 0) {
					x += (target.ax + this.data.offsetX) * translateMix;
					y += (target.ay + this.data.offsetY) * translateMix;
				}
				var scaleX = bone.ascaleX, scaleY = bone.ascaleY;
				if (scaleMix != 0) {
					if (scaleX > 0.00001)
						scaleX *= ((target.ascaleX - 1 + this.data.offsetScaleX) * scaleMix) + 1;
					if (scaleY > 0.00001)
						scaleY *= ((target.ascaleY - 1 + this.data.offsetScaleY) * scaleMix) + 1;
				}
				var shearY = bone.ashearY;
				if (shearMix != 0)
					shearY += (target.ashearY + this.data.offsetShearY) * shearMix;
				bone.updateWorldTransformWith(x, y, rotation, scaleX, scaleY, bone.ashearX, shearY);
			}
		};
		TransformConstraint.prototype.getOrder = function () {
			return this.data.order;
		};
		return TransformConstraint;
	}());
	spine.TransformConstraint = TransformConstraint;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var TransformConstraintData = (function () {
		function TransformConstraintData(name) {
			this.order = 0;
			this.bones = new Array();
			this.rotateMix = 0;
			this.translateMix = 0;
			this.scaleMix = 0;
			this.shearMix = 0;
			this.offsetRotation = 0;
			this.offsetX = 0;
			this.offsetY = 0;
			this.offsetScaleX = 0;
			this.offsetScaleY = 0;
			this.offsetShearY = 0;
			this.relative = false;
			this.local = false;
			if (name == null)
				throw new Error("name cannot be null.");
			this.name = name;
		}
		return TransformConstraintData;
	}());
	spine.TransformConstraintData = TransformConstraintData;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var Triangulator = (function () {
		function Triangulator() {
			this.convexPolygons = new Array();
			this.convexPolygonsIndices = new Array();
			this.indicesArray = new Array();
			this.isConcaveArray = new Array();
			this.triangles = new Array();
			this.polygonPool = new spine.Pool(function () {
				return new Array();
			});
			this.polygonIndicesPool = new spine.Pool(function () {
				return new Array();
			});
		}
		Triangulator.prototype.triangulate = function (verticesArray) {
			var vertices = verticesArray;
			var vertexCount = verticesArray.length >> 1;
			var indices = this.indicesArray;
			indices.length = 0;
			for (var i = 0; i < vertexCount; i++)
				indices[i] = i;
			var isConcave = this.isConcaveArray;
			isConcave.length = 0;
			for (var i = 0, n = vertexCount; i < n; ++i)
				isConcave[i] = Triangulator.isConcave(i, vertexCount, vertices, indices);
			var triangles = this.triangles;
			triangles.length = 0;
			while (vertexCount > 3) {
				var previous = vertexCount - 1, i = 0, next = 1;
				while (true) {
					outer: if (!isConcave[i]) {
						var p1 = indices[previous] << 1, p2 = indices[i] << 1, p3 = indices[next] << 1;
						var p1x = vertices[p1], p1y = vertices[p1 + 1];
						var p2x = vertices[p2], p2y = vertices[p2 + 1];
						var p3x = vertices[p3], p3y = vertices[p3 + 1];
						for (var ii = (next + 1) % vertexCount; ii != previous; ii = (ii + 1) % vertexCount) {
							if (!isConcave[ii])
								continue;
							var v = indices[ii] << 1;
							var vx = vertices[v], vy = vertices[v + 1];
							if (Triangulator.positiveArea(p3x, p3y, p1x, p1y, vx, vy)) {
								if (Triangulator.positiveArea(p1x, p1y, p2x, p2y, vx, vy)) {
									if (Triangulator.positiveArea(p2x, p2y, p3x, p3y, vx, vy))
										break outer;
								}
							}
						}
						break;
					}
					if (next == 0) {
						do {
							if (!isConcave[i])
								break;
							i--;
						} while (i > 0);
						break;
					}
					previous = i;
					i = next;
					next = (next + 1) % vertexCount;
				}
				triangles.push(indices[(vertexCount + i - 1) % vertexCount]);
				triangles.push(indices[i]);
				triangles.push(indices[(i + 1) % vertexCount]);
				indices.splice(i, 1);
				isConcave.splice(i, 1);
				vertexCount--;
				var previousIndex = (vertexCount + i - 1) % vertexCount;
				var nextIndex = i == vertexCount ? 0 : i;
				isConcave[previousIndex] = Triangulator.isConcave(previousIndex, vertexCount, vertices, indices);
				isConcave[nextIndex] = Triangulator.isConcave(nextIndex, vertexCount, vertices, indices);
			}
			if (vertexCount == 3) {
				triangles.push(indices[2]);
				triangles.push(indices[0]);
				triangles.push(indices[1]);
			}
			return triangles;
		};
		Triangulator.prototype.decompose = function (verticesArray, triangles) {
			var vertices = verticesArray;
			var convexPolygons = this.convexPolygons;
			this.polygonPool.freeAll(convexPolygons);
			convexPolygons.length = 0;
			var convexPolygonsIndices = this.convexPolygonsIndices;
			this.polygonIndicesPool.freeAll(convexPolygonsIndices);
			convexPolygonsIndices.length = 0;
			var polygonIndices = this.polygonIndicesPool.obtain();
			polygonIndices.length = 0;
			var polygon = this.polygonPool.obtain();
			polygon.length = 0;
			var fanBaseIndex = -1, lastWinding = 0;
			for (var i = 0, n = triangles.length; i < n; i += 3) {
				var t1 = triangles[i] << 1, t2 = triangles[i + 1] << 1, t3 = triangles[i + 2] << 1;
				var x1 = vertices[t1], y1 = vertices[t1 + 1];
				var x2 = vertices[t2], y2 = vertices[t2 + 1];
				var x3 = vertices[t3], y3 = vertices[t3 + 1];
				var merged = false;
				if (fanBaseIndex == t1) {
					var o = polygon.length - 4;
					var winding1 = Triangulator.winding(polygon[o], polygon[o + 1], polygon[o + 2], polygon[o + 3], x3, y3);
					var winding2 = Triangulator.winding(x3, y3, polygon[0], polygon[1], polygon[2], polygon[3]);
					if (winding1 == lastWinding && winding2 == lastWinding) {
						polygon.push(x3);
						polygon.push(y3);
						polygonIndices.push(t3);
						merged = true;
					}
				}
				if (!merged) {
					if (polygon.length > 0) {
						convexPolygons.push(polygon);
						convexPolygonsIndices.push(polygonIndices);
					}
					else {
						this.polygonPool.free(polygon);
						this.polygonIndicesPool.free(polygonIndices);
					}
					polygon = this.polygonPool.obtain();
					polygon.length = 0;
					polygon.push(x1);
					polygon.push(y1);
					polygon.push(x2);
					polygon.push(y2);
					polygon.push(x3);
					polygon.push(y3);
					polygonIndices = this.polygonIndicesPool.obtain();
					polygonIndices.length = 0;
					polygonIndices.push(t1);
					polygonIndices.push(t2);
					polygonIndices.push(t3);
					lastWinding = Triangulator.winding(x1, y1, x2, y2, x3, y3);
					fanBaseIndex = t1;
				}
			}
			if (polygon.length > 0) {
				convexPolygons.push(polygon);
				convexPolygonsIndices.push(polygonIndices);
			}
			for (var i = 0, n = convexPolygons.length; i < n; i++) {
				polygonIndices = convexPolygonsIndices[i];
				if (polygonIndices.length == 0)
					continue;
				var firstIndex = polygonIndices[0];
				var lastIndex = polygonIndices[polygonIndices.length - 1];
				polygon = convexPolygons[i];
				var o = polygon.length - 4;
				var prevPrevX = polygon[o], prevPrevY = polygon[o + 1];
				var prevX = polygon[o + 2], prevY = polygon[o + 3];
				var firstX = polygon[0], firstY = polygon[1];
				var secondX = polygon[2], secondY = polygon[3];
				var winding = Triangulator.winding(prevPrevX, prevPrevY, prevX, prevY, firstX, firstY);
				for (var ii = 0; ii < n; ii++) {
					if (ii == i)
						continue;
					var otherIndices = convexPolygonsIndices[ii];
					if (otherIndices.length != 3)
						continue;
					var otherFirstIndex = otherIndices[0];
					var otherSecondIndex = otherIndices[1];
					var otherLastIndex = otherIndices[2];
					var otherPoly = convexPolygons[ii];
					var x3 = otherPoly[otherPoly.length - 2], y3 = otherPoly[otherPoly.length - 1];
					if (otherFirstIndex != firstIndex || otherSecondIndex != lastIndex)
						continue;
					var winding1 = Triangulator.winding(prevPrevX, prevPrevY, prevX, prevY, x3, y3);
					var winding2 = Triangulator.winding(x3, y3, firstX, firstY, secondX, secondY);
					if (winding1 == winding && winding2 == winding) {
						otherPoly.length = 0;
						otherIndices.length = 0;
						polygon.push(x3);
						polygon.push(y3);
						polygonIndices.push(otherLastIndex);
						prevPrevX = prevX;
						prevPrevY = prevY;
						prevX = x3;
						prevY = y3;
						ii = 0;
					}
				}
			}
			for (var i = convexPolygons.length - 1; i >= 0; i--) {
				polygon = convexPolygons[i];
				if (polygon.length == 0) {
					convexPolygons.splice(i, 1);
					this.polygonPool.free(polygon);
					polygonIndices = convexPolygonsIndices[i];
					convexPolygonsIndices.splice(i, 1);
					this.polygonIndicesPool.free(polygonIndices);
				}
			}
			return convexPolygons;
		};
		Triangulator.isConcave = function (index, vertexCount, vertices, indices) {
			var previous = indices[(vertexCount + index - 1) % vertexCount] << 1;
			var current = indices[index] << 1;
			var next = indices[(index + 1) % vertexCount] << 1;
			return !this.positiveArea(vertices[previous], vertices[previous + 1], vertices[current], vertices[current + 1], vertices[next], vertices[next + 1]);
		};
		Triangulator.positiveArea = function (p1x, p1y, p2x, p2y, p3x, p3y) {
			return p1x * (p3y - p2y) + p2x * (p1y - p3y) + p3x * (p2y - p1y) >= 0;
		};
		Triangulator.winding = function (p1x, p1y, p2x, p2y, p3x, p3y) {
			var px = p2x - p1x, py = p2y - p1y;
			return p3x * py - p3y * px + px * p1y - p1x * py >= 0 ? 1 : -1;
		};
		return Triangulator;
	}());
	spine.Triangulator = Triangulator;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var IntSet = (function () {
		function IntSet() {
			this.array = new Array();
		}
		IntSet.prototype.add = function (value) {
			var contains = this.contains(value);
			this.array[value | 0] = value | 0;
			return !contains;
		};
		IntSet.prototype.contains = function (value) {
			return this.array[value | 0] != undefined;
		};
		IntSet.prototype.remove = function (value) {
			this.array[value | 0] = undefined;
		};
		IntSet.prototype.clear = function () {
			this.array.length = 0;
		};
		return IntSet;
	}());
	spine.IntSet = IntSet;
	var Color = (function () {
		function Color(r, g, b, a) {
			if (r === void 0) { r = 0; }
			if (g === void 0) { g = 0; }
			if (b === void 0) { b = 0; }
			if (a === void 0) { a = 0; }
			this.r = r;
			this.g = g;
			this.b = b;
			this.a = a;
		}
		Color.prototype.set = function (r, g, b, a) {
			this.r = r;
			this.g = g;
			this.b = b;
			this.a = a;
			this.clamp();
			return this;
		};
		Color.prototype.setFromColor = function (c) {
			this.r = c.r;
			this.g = c.g;
			this.b = c.b;
			this.a = c.a;
			return this;
		};
		Color.prototype.setFromString = function (hex) {
			hex = hex.charAt(0) == '#' ? hex.substr(1) : hex;
			this.r = parseInt(hex.substr(0, 2), 16) / 255.0;
			this.g = parseInt(hex.substr(2, 2), 16) / 255.0;
			this.b = parseInt(hex.substr(4, 2), 16) / 255.0;
			this.a = (hex.length != 8 ? 255 : parseInt(hex.substr(6, 2), 16)) / 255.0;
			return this;
		};
		Color.prototype.add = function (r, g, b, a) {
			this.r += r;
			this.g += g;
			this.b += b;
			this.a += a;
			this.clamp();
			return this;
		};
		Color.prototype.clamp = function () {
			if (this.r < 0)
				this.r = 0;
			else if (this.r > 1)
				this.r = 1;
			if (this.g < 0)
				this.g = 0;
			else if (this.g > 1)
				this.g = 1;
			if (this.b < 0)
				this.b = 0;
			else if (this.b > 1)
				this.b = 1;
			if (this.a < 0)
				this.a = 0;
			else if (this.a > 1)
				this.a = 1;
			return this;
		};
		Color.WHITE = new Color(1, 1, 1, 1);
		Color.RED = new Color(1, 0, 0, 1);
		Color.GREEN = new Color(0, 1, 0, 1);
		Color.BLUE = new Color(0, 0, 1, 1);
		Color.MAGENTA = new Color(1, 0, 1, 1);
		return Color;
	}());
	spine.Color = Color;
	var MathUtils = (function () {
		function MathUtils() {
		}
		MathUtils.clamp = function (value, min, max) {
			if (value < min)
				return min;
			if (value > max)
				return max;
			return value;
		};
		MathUtils.cosDeg = function (degrees) {
			return Math.cos(degrees * MathUtils.degRad);
		};
		MathUtils.sinDeg = function (degrees) {
			return Math.sin(degrees * MathUtils.degRad);
		};
		MathUtils.signum = function (value) {
			return value > 0 ? 1 : value < 0 ? -1 : 0;
		};
		MathUtils.toInt = function (x) {
			return x > 0 ? Math.floor(x) : Math.ceil(x);
		};
		MathUtils.cbrt = function (x) {
			var y = Math.pow(Math.abs(x), 1 / 3);
			return x < 0 ? -y : y;
		};
		MathUtils.randomTriangular = function (min, max) {
			return MathUtils.randomTriangularWith(min, max, (min + max) * 0.5);
		};
		MathUtils.randomTriangularWith = function (min, max, mode) {
			var u = Math.random();
			var d = max - min;
			if (u <= (mode - min) / d)
				return min + Math.sqrt(u * d * (mode - min));
			return max - Math.sqrt((1 - u) * d * (max - mode));
		};
		MathUtils.PI = 3.1415927;
		MathUtils.PI2 = MathUtils.PI * 2;
		MathUtils.radiansToDegrees = 180 / MathUtils.PI;
		MathUtils.radDeg = MathUtils.radiansToDegrees;
		MathUtils.degreesToRadians = MathUtils.PI / 180;
		MathUtils.degRad = MathUtils.degreesToRadians;
		return MathUtils;
	}());
	spine.MathUtils = MathUtils;
	var Interpolation = (function () {
		function Interpolation() {
		}
		Interpolation.prototype.apply = function (start, end, a) {
			return start + (end - start) * this.applyInternal(a);
		};
		return Interpolation;
	}());
	spine.Interpolation = Interpolation;
	var Pow = (function (_super) {
		__extends(Pow, _super);
		function Pow(power) {
			var _this = _super.call(this) || this;
			_this.power = 2;
			_this.power = power;
			return _this;
		}
		Pow.prototype.applyInternal = function (a) {
			if (a <= 0.5)
				return Math.pow(a * 2, this.power) / 2;
			return Math.pow((a - 1) * 2, this.power) / (this.power % 2 == 0 ? -2 : 2) + 1;
		};
		return Pow;
	}(Interpolation));
	spine.Pow = Pow;
	var PowOut = (function (_super) {
		__extends(PowOut, _super);
		function PowOut(power) {
			return _super.call(this, power) || this;
		}
		PowOut.prototype.applyInternal = function (a) {
			return Math.pow(a - 1, this.power) * (this.power % 2 == 0 ? -1 : 1) + 1;
		};
		return PowOut;
	}(Pow));
	spine.PowOut = PowOut;
	var Utils = (function () {
		function Utils() {
		}
		Utils.arrayCopy = function (source, sourceStart, dest, destStart, numElements) {
			for (var i = sourceStart, j = destStart; i < sourceStart + numElements; i++, j++) {
				dest[j] = source[i];
			}
		};
		Utils.setArraySize = function (array, size, value) {
			if (value === void 0) { value = 0; }
			var oldSize = array.length;
			if (oldSize == size)
				return array;
			array.length = size;
			if (oldSize < size) {
				for (var i = oldSize; i < size; i++)
					array[i] = value;
			}
			return array;
		};
		Utils.ensureArrayCapacity = function (array, size, value) {
			if (value === void 0) { value = 0; }
			if (array.length >= size)
				return array;
			return Utils.setArraySize(array, size, value);
		};
		Utils.newArray = function (size, defaultValue) {
			var array = new Array(size);
			for (var i = 0; i < size; i++)
				array[i] = defaultValue;
			return array;
		};
		Utils.newFloatArray = function (size) {
			if (Utils.SUPPORTS_TYPED_ARRAYS) {
				return new Float32Array(size);
			}
			else {
				var array = new Array(size);
				for (var i = 0; i < array.length; i++)
					array[i] = 0;
				return array;
			}
		};
		Utils.newShortArray = function (size) {
			if (Utils.SUPPORTS_TYPED_ARRAYS) {
				return new Int16Array(size);
			}
			else {
				var array = new Array(size);
				for (var i = 0; i < array.length; i++)
					array[i] = 0;
				return array;
			}
		};
		Utils.toFloatArray = function (array) {
			return Utils.SUPPORTS_TYPED_ARRAYS ? new Float32Array(array) : array;
		};
		Utils.toSinglePrecision = function (value) {
			return Utils.SUPPORTS_TYPED_ARRAYS ? Math.fround(value) : value;
		};
		Utils.webkit602BugfixHelper = function (alpha, blend) {
		};
		Utils.SUPPORTS_TYPED_ARRAYS = typeof (Float32Array) !== "undefined";
		return Utils;
	}());
	spine.Utils = Utils;
	var DebugUtils = (function () {
		function DebugUtils() {
		}
		DebugUtils.logBones = function (skeleton) {
			for (var i = 0; i < skeleton.bones.length; i++) {
				var bone = skeleton.bones[i];
				console.log(bone.data.name + ", " + bone.a + ", " + bone.b + ", " + bone.c + ", " + bone.d + ", " + bone.worldX + ", " + bone.worldY);
			}
		};
		return DebugUtils;
	}());
	spine.DebugUtils = DebugUtils;
	var Pool = (function () {
		function Pool(instantiator) {
			this.items = new Array();
			this.instantiator = instantiator;
		}
		Pool.prototype.obtain = function () {
			return this.items.length > 0 ? this.items.pop() : this.instantiator();
		};
		Pool.prototype.free = function (item) {
			if (item.reset)
				item.reset();
			this.items.push(item);
		};
		Pool.prototype.freeAll = function (items) {
			for (var i = 0; i < items.length; i++) {
				if (items[i].reset)
					items[i].reset();
				this.items[i] = items[i];
			}
		};
		Pool.prototype.clear = function () {
			this.items.length = 0;
		};
		return Pool;
	}());
	spine.Pool = Pool;
	var Vector2 = (function () {
		function Vector2(x, y) {
			if (x === void 0) { x = 0; }
			if (y === void 0) { y = 0; }
			this.x = x;
			this.y = y;
		}
		Vector2.prototype.set = function (x, y) {
			this.x = x;
			this.y = y;
			return this;
		};
		Vector2.prototype.length = function () {
			var x = this.x;
			var y = this.y;
			return Math.sqrt(x * x + y * y);
		};
		Vector2.prototype.normalize = function () {
			var len = this.length();
			if (len != 0) {
				this.x /= len;
				this.y /= len;
			}
			return this;
		};
		return Vector2;
	}());
	spine.Vector2 = Vector2;
	var TimeKeeper = (function () {
		function TimeKeeper() {
			this.maxDelta = 0.064;
			this.framesPerSecond = 0;
			this.delta = 0;
			this.totalTime = 0;
			this.lastTime = Date.now() / 1000;
			this.frameCount = 0;
			this.frameTime = 0;
		}
		TimeKeeper.prototype.update = function () {
			var now = Date.now() / 1000;
			this.delta = now - this.lastTime;
			this.frameTime += this.delta;
			this.totalTime += this.delta;
			if (this.delta > this.maxDelta)
				this.delta = this.maxDelta;
			this.lastTime = now;
			this.frameCount++;
			if (this.frameTime > 1) {
				this.framesPerSecond = this.frameCount / this.frameTime;
				this.frameTime = 0;
				this.frameCount = 0;
			}
		};
		return TimeKeeper;
	}());
	spine.TimeKeeper = TimeKeeper;
	var WindowedMean = (function () {
		function WindowedMean(windowSize) {
			if (windowSize === void 0) { windowSize = 32; }
			this.addedValues = 0;
			this.lastValue = 0;
			this.mean = 0;
			this.dirty = true;
			this.values = new Array(windowSize);
		}
		WindowedMean.prototype.hasEnoughData = function () {
			return this.addedValues >= this.values.length;
		};
		WindowedMean.prototype.addValue = function (value) {
			if (this.addedValues < this.values.length)
				this.addedValues++;
			this.values[this.lastValue++] = value;
			if (this.lastValue > this.values.length - 1)
				this.lastValue = 0;
			this.dirty = true;
		};
		WindowedMean.prototype.getMean = function () {
			if (this.hasEnoughData()) {
				if (this.dirty) {
					var mean = 0;
					for (var i = 0; i < this.values.length; i++) {
						mean += this.values[i];
					}
					this.mean = mean / this.values.length;
					this.dirty = false;
				}
				return this.mean;
			}
			else {
				return 0;
			}
		};
		return WindowedMean;
	}());
	spine.WindowedMean = WindowedMean;
})(spine || (spine = {}));
(function () {
	if (!Math.fround) {
		Math.fround = (function (array) {
			return function (x) {
				return array[0] = x, array[0];
			};
		})(new Float32Array(1));
	}
})();
var spine;
(function (spine) {
	var Attachment = (function () {
		function Attachment(name) {
			if (name == null)
				throw new Error("name cannot be null.");
			this.name = name;
		}
		return Attachment;
	}());
	spine.Attachment = Attachment;
	var VertexAttachment = (function (_super) {
		__extends(VertexAttachment, _super);
		function VertexAttachment(name) {
			var _this = _super.call(this, name) || this;
			_this.id = (VertexAttachment.nextID++ & 65535) << 11;
			_this.worldVerticesLength = 0;
			return _this;
		}
		VertexAttachment.prototype.computeWorldVertices = function (slot, start, count, worldVertices, offset, stride) {
			count = offset + (count >> 1) * stride;
			var skeleton = slot.bone.skeleton;
			var deformArray = slot.attachmentVertices;
			var vertices = this.vertices;
			var bones = this.bones;
			if (bones == null) {
				if (deformArray.length > 0)
					vertices = deformArray;
				var bone = slot.bone;
				var x = bone.worldX;
				var y = bone.worldY;
				var a = bone.a, b = bone.b, c = bone.c, d = bone.d;
				for (var v_1 = start, w = offset; w < count; v_1 += 2, w += stride) {
					var vx = vertices[v_1], vy = vertices[v_1 + 1];
					worldVertices[w] = vx * a + vy * b + x;
					worldVertices[w + 1] = vx * c + vy * d + y;
				}
				return;
			}
			var v = 0, skip = 0;
			for (var i = 0; i < start; i += 2) {
				var n = bones[v];
				v += n + 1;
				skip += n;
			}
			var skeletonBones = skeleton.bones;
			if (deformArray.length == 0) {
				for (var w = offset, b = skip * 3; w < count; w += stride) {
					var wx = 0, wy = 0;
					var n = bones[v++];
					n += v;
					for (; v < n; v++, b += 3) {
						var bone = skeletonBones[bones[v]];
						var vx = vertices[b], vy = vertices[b + 1], weight = vertices[b + 2];
						wx += (vx * bone.a + vy * bone.b + bone.worldX) * weight;
						wy += (vx * bone.c + vy * bone.d + bone.worldY) * weight;
					}
					worldVertices[w] = wx;
					worldVertices[w + 1] = wy;
				}
			}
			else {
				var deform = deformArray;
				for (var w = offset, b = skip * 3, f = skip << 1; w < count; w += stride) {
					var wx = 0, wy = 0;
					var n = bones[v++];
					n += v;
					for (; v < n; v++, b += 3, f += 2) {
						var bone = skeletonBones[bones[v]];
						var vx = vertices[b] + deform[f], vy = vertices[b + 1] + deform[f + 1], weight = vertices[b + 2];
						wx += (vx * bone.a + vy * bone.b + bone.worldX) * weight;
						wy += (vx * bone.c + vy * bone.d + bone.worldY) * weight;
					}
					worldVertices[w] = wx;
					worldVertices[w + 1] = wy;
				}
			}
		};
		VertexAttachment.prototype.applyDeform = function (sourceAttachment) {
			return this == sourceAttachment;
		};
		VertexAttachment.nextID = 0;
		return VertexAttachment;
	}(Attachment));
	spine.VertexAttachment = VertexAttachment;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var AttachmentType;
	(function (AttachmentType) {
		AttachmentType[AttachmentType["Region"] = 0] = "Region";
		AttachmentType[AttachmentType["BoundingBox"] = 1] = "BoundingBox";
		AttachmentType[AttachmentType["Mesh"] = 2] = "Mesh";
		AttachmentType[AttachmentType["LinkedMesh"] = 3] = "LinkedMesh";
		AttachmentType[AttachmentType["Path"] = 4] = "Path";
		AttachmentType[AttachmentType["Point"] = 5] = "Point";
	})(AttachmentType = spine.AttachmentType || (spine.AttachmentType = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var BoundingBoxAttachment = (function (_super) {
		__extends(BoundingBoxAttachment, _super);
		function BoundingBoxAttachment(name) {
			var _this = _super.call(this, name) || this;
			_this.color = new spine.Color(1, 1, 1, 1);
			return _this;
		}
		return BoundingBoxAttachment;
	}(spine.VertexAttachment));
	spine.BoundingBoxAttachment = BoundingBoxAttachment;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var ClippingAttachment = (function (_super) {
		__extends(ClippingAttachment, _super);
		function ClippingAttachment(name) {
			var _this = _super.call(this, name) || this;
			_this.color = new spine.Color(0.2275, 0.2275, 0.8078, 1);
			return _this;
		}
		return ClippingAttachment;
	}(spine.VertexAttachment));
	spine.ClippingAttachment = ClippingAttachment;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var MeshAttachment = (function (_super) {
		__extends(MeshAttachment, _super);
		function MeshAttachment(name) {
			var _this = _super.call(this, name) || this;
			_this.color = new spine.Color(1, 1, 1, 1);
			_this.inheritDeform = false;
			_this.tempColor = new spine.Color(0, 0, 0, 0);
			return _this;
		}
		MeshAttachment.prototype.updateUVs = function () {
			var regionUVs = this.regionUVs;
			if (this.uvs == null || this.uvs.length != regionUVs.length)
				this.uvs = spine.Utils.newFloatArray(regionUVs.length);
			var uvs = this.uvs;
			var u = 0, v = 0, width = 0, height = 0;
			if (this.region instanceof spine.TextureAtlasRegion) {
				var region = this.region;
				var textureWidth = region.texture.getImage().width, textureHeight = region.texture.getImage().height;
				if (region.rotate) {
					u = region.u - (region.originalHeight - region.offsetY - region.height) / textureWidth;
					v = region.v - (region.originalWidth - region.offsetX - region.width) / textureHeight;
					width = region.originalHeight / textureWidth;
					height = region.originalWidth / textureHeight;
					for (var i = 0, n = uvs.length; i < n; i += 2) {
						uvs[i] = u + regionUVs[i + 1] * width;
						uvs[i + 1] = v + height - regionUVs[i] * height;
					}
					return;
				}
				u = region.u - region.offsetX / textureWidth;
				v = region.v - (region.originalHeight - region.offsetY - region.height) / textureHeight;
				width = region.originalWidth / textureWidth;
				height = region.originalHeight / textureHeight;
			}
			else if (this.region == null) {
				u = v = 0;
				width = height = 1;
			}
			else {
				u = this.region.u;
				v = this.region.v;
				width = this.region.u2 - u;
				height = this.region.v2 - v;
			}
			for (var i = 0, n = uvs.length; i < n; i += 2) {
				uvs[i] = u + regionUVs[i] * width;
				uvs[i + 1] = v + regionUVs[i + 1] * height;
			}
		};
		MeshAttachment.prototype.applyDeform = function (sourceAttachment) {
			return this == sourceAttachment || (this.inheritDeform && this.parentMesh == sourceAttachment);
		};
		MeshAttachment.prototype.getParentMesh = function () {
			return this.parentMesh;
		};
		MeshAttachment.prototype.setParentMesh = function (parentMesh) {
			this.parentMesh = parentMesh;
			if (parentMesh != null) {
				this.bones = parentMesh.bones;
				this.vertices = parentMesh.vertices;
				this.worldVerticesLength = parentMesh.worldVerticesLength;
				this.regionUVs = parentMesh.regionUVs;
				this.triangles = parentMesh.triangles;
				this.hullLength = parentMesh.hullLength;
				this.worldVerticesLength = parentMesh.worldVerticesLength;
			}
		};
		return MeshAttachment;
	}(spine.VertexAttachment));
	spine.MeshAttachment = MeshAttachment;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var PathAttachment = (function (_super) {
		__extends(PathAttachment, _super);
		function PathAttachment(name) {
			var _this = _super.call(this, name) || this;
			_this.closed = false;
			_this.constantSpeed = false;
			_this.color = new spine.Color(1, 1, 1, 1);
			return _this;
		}
		return PathAttachment;
	}(spine.VertexAttachment));
	spine.PathAttachment = PathAttachment;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var PointAttachment = (function (_super) {
		__extends(PointAttachment, _super);
		function PointAttachment(name) {
			var _this = _super.call(this, name) || this;
			_this.color = new spine.Color(0.38, 0.94, 0, 1);
			return _this;
		}
		PointAttachment.prototype.computeWorldPosition = function (bone, point) {
			point.x = this.x * bone.a + this.y * bone.b + bone.worldX;
			point.y = this.x * bone.c + this.y * bone.d + bone.worldY;
			return point;
		};
		PointAttachment.prototype.computeWorldRotation = function (bone) {
			var cos = spine.MathUtils.cosDeg(this.rotation), sin = spine.MathUtils.sinDeg(this.rotation);
			var x = cos * bone.a + sin * bone.b;
			var y = cos * bone.c + sin * bone.d;
			return Math.atan2(y, x) * spine.MathUtils.radDeg;
		};
		return PointAttachment;
	}(spine.VertexAttachment));
	spine.PointAttachment = PointAttachment;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var RegionAttachment = (function (_super) {
		__extends(RegionAttachment, _super);
		function RegionAttachment(name) {
			var _this = _super.call(this, name) || this;
			_this.x = 0;
			_this.y = 0;
			_this.scaleX = 1;
			_this.scaleY = 1;
			_this.rotation = 0;
			_this.width = 0;
			_this.height = 0;
			_this.color = new spine.Color(1, 1, 1, 1);
			_this.offset = spine.Utils.newFloatArray(8);
			_this.uvs = spine.Utils.newFloatArray(8);
			_this.tempColor = new spine.Color(1, 1, 1, 1);
			return _this;
		}
		RegionAttachment.prototype.updateOffset = function () {
			var regionScaleX = this.width / this.region.originalWidth * this.scaleX;
			var regionScaleY = this.height / this.region.originalHeight * this.scaleY;
			var localX = -this.width / 2 * this.scaleX + this.region.offsetX * regionScaleX;
			var localY = -this.height / 2 * this.scaleY + this.region.offsetY * regionScaleY;
			var localX2 = localX + this.region.width * regionScaleX;
			var localY2 = localY + this.region.height * regionScaleY;
			var radians = this.rotation * Math.PI / 180;
			var cos = Math.cos(radians);
			var sin = Math.sin(radians);
			var localXCos = localX * cos + this.x;
			var localXSin = localX * sin;
			var localYCos = localY * cos + this.y;
			var localYSin = localY * sin;
			var localX2Cos = localX2 * cos + this.x;
			var localX2Sin = localX2 * sin;
			var localY2Cos = localY2 * cos + this.y;
			var localY2Sin = localY2 * sin;
			var offset = this.offset;
			offset[RegionAttachment.OX1] = localXCos - localYSin;
			offset[RegionAttachment.OY1] = localYCos + localXSin;
			offset[RegionAttachment.OX2] = localXCos - localY2Sin;
			offset[RegionAttachment.OY2] = localY2Cos + localXSin;
			offset[RegionAttachment.OX3] = localX2Cos - localY2Sin;
			offset[RegionAttachment.OY3] = localY2Cos + localX2Sin;
			offset[RegionAttachment.OX4] = localX2Cos - localYSin;
			offset[RegionAttachment.OY4] = localYCos + localX2Sin;
		};
		RegionAttachment.prototype.setRegion = function (region) {
			this.region = region;
			var uvs = this.uvs;
			if (region.rotate) {
				uvs[2] = region.u;
				uvs[3] = region.v2;
				uvs[4] = region.u;
				uvs[5] = region.v;
				uvs[6] = region.u2;
				uvs[7] = region.v;
				uvs[0] = region.u2;
				uvs[1] = region.v2;
			}
			else {
				uvs[0] = region.u;
				uvs[1] = region.v2;
				uvs[2] = region.u;
				uvs[3] = region.v;
				uvs[4] = region.u2;
				uvs[5] = region.v;
				uvs[6] = region.u2;
				uvs[7] = region.v2;
			}
		};
		RegionAttachment.prototype.computeWorldVertices = function (bone, worldVertices, offset, stride) {
			var vertexOffset = this.offset;
			var x = bone.worldX, y = bone.worldY;
			var a = bone.a, b = bone.b, c = bone.c, d = bone.d;
			var offsetX = 0, offsetY = 0;
			offsetX = vertexOffset[RegionAttachment.OX1];
			offsetY = vertexOffset[RegionAttachment.OY1];
			worldVertices[offset] = offsetX * a + offsetY * b + x;
			worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
			offset += stride;
			offsetX = vertexOffset[RegionAttachment.OX2];
			offsetY = vertexOffset[RegionAttachment.OY2];
			worldVertices[offset] = offsetX * a + offsetY * b + x;
			worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
			offset += stride;
			offsetX = vertexOffset[RegionAttachment.OX3];
			offsetY = vertexOffset[RegionAttachment.OY3];
			worldVertices[offset] = offsetX * a + offsetY * b + x;
			worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
			offset += stride;
			offsetX = vertexOffset[RegionAttachment.OX4];
			offsetY = vertexOffset[RegionAttachment.OY4];
			worldVertices[offset] = offsetX * a + offsetY * b + x;
			worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
		};
		RegionAttachment.OX1 = 0;
		RegionAttachment.OY1 = 1;
		RegionAttachment.OX2 = 2;
		RegionAttachment.OY2 = 3;
		RegionAttachment.OX3 = 4;
		RegionAttachment.OY3 = 5;
		RegionAttachment.OX4 = 6;
		RegionAttachment.OY4 = 7;
		RegionAttachment.X1 = 0;
		RegionAttachment.Y1 = 1;
		RegionAttachment.C1R = 2;
		RegionAttachment.C1G = 3;
		RegionAttachment.C1B = 4;
		RegionAttachment.C1A = 5;
		RegionAttachment.U1 = 6;
		RegionAttachment.V1 = 7;
		RegionAttachment.X2 = 8;
		RegionAttachment.Y2 = 9;
		RegionAttachment.C2R = 10;
		RegionAttachment.C2G = 11;
		RegionAttachment.C2B = 12;
		RegionAttachment.C2A = 13;
		RegionAttachment.U2 = 14;
		RegionAttachment.V2 = 15;
		RegionAttachment.X3 = 16;
		RegionAttachment.Y3 = 17;
		RegionAttachment.C3R = 18;
		RegionAttachment.C3G = 19;
		RegionAttachment.C3B = 20;
		RegionAttachment.C3A = 21;
		RegionAttachment.U3 = 22;
		RegionAttachment.V3 = 23;
		RegionAttachment.X4 = 24;
		RegionAttachment.Y4 = 25;
		RegionAttachment.C4R = 26;
		RegionAttachment.C4G = 27;
		RegionAttachment.C4B = 28;
		RegionAttachment.C4A = 29;
		RegionAttachment.U4 = 30;
		RegionAttachment.V4 = 31;
		return RegionAttachment;
	}(spine.Attachment));
	spine.RegionAttachment = RegionAttachment;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var JitterEffect = (function () {
		function JitterEffect(jitterX, jitterY) {
			this.jitterX = 0;
			this.jitterY = 0;
			this.jitterX = jitterX;
			this.jitterY = jitterY;
		}
		JitterEffect.prototype.begin = function (skeleton) {
		};
		JitterEffect.prototype.transform = function (position, uv, light, dark) {
			position.x += spine.MathUtils.randomTriangular(-this.jitterX, this.jitterY);
			position.y += spine.MathUtils.randomTriangular(-this.jitterX, this.jitterY);
		};
		JitterEffect.prototype.end = function () {
		};
		return JitterEffect;
	}());
	spine.JitterEffect = JitterEffect;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var SwirlEffect = (function () {
		function SwirlEffect(radius) {
			this.centerX = 0;
			this.centerY = 0;
			this.radius = 0;
			this.angle = 0;
			this.worldX = 0;
			this.worldY = 0;
			this.radius = radius;
		}
		SwirlEffect.prototype.begin = function (skeleton) {
			this.worldX = skeleton.x + this.centerX;
			this.worldY = skeleton.y + this.centerY;
		};
		SwirlEffect.prototype.transform = function (position, uv, light, dark) {
			var radAngle = this.angle * spine.MathUtils.degreesToRadians;
			var x = position.x - this.worldX;
			var y = position.y - this.worldY;
			var dist = Math.sqrt(x * x + y * y);
			if (dist < this.radius) {
				var theta = SwirlEffect.interpolation.apply(0, radAngle, (this.radius - dist) / this.radius);
				var cos = Math.cos(theta);
				var sin = Math.sin(theta);
				position.x = cos * x - sin * y + this.worldX;
				position.y = sin * x + cos * y + this.worldY;
			}
		};
		SwirlEffect.prototype.end = function () {
		};
		SwirlEffect.interpolation = new spine.PowOut(2);
		return SwirlEffect;
	}());
	spine.SwirlEffect = SwirlEffect;
})(spine || (spine = {}));
var spine;
(function (spine) {
	var canvas;
	(function (canvas) {
		var AssetManager = (function (_super) {
			__extends(AssetManager, _super);
			function AssetManager(pathPrefix) {
				if (pathPrefix === void 0) { pathPrefix = ""; }
				return _super.call(this, function (image) { return new spine.canvas.CanvasTexture(image); }, pathPrefix) || this;
			}
			return AssetManager;
		}(spine.AssetManager));
		canvas.AssetManager = AssetManager;
	})(canvas = spine.canvas || (spine.canvas = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var canvas;
	(function (canvas) {
		var CanvasTexture = (function (_super) {
			__extends(CanvasTexture, _super);
			function CanvasTexture(image) {
				return _super.call(this, image) || this;
			}
			CanvasTexture.prototype.setFilters = function (minFilter, magFilter) { };
			CanvasTexture.prototype.setWraps = function (uWrap, vWrap) { };
			CanvasTexture.prototype.dispose = function () { };
			return CanvasTexture;
		}(spine.Texture));
		canvas.CanvasTexture = CanvasTexture;
	})(canvas = spine.canvas || (spine.canvas = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var canvas;
	(function (canvas) {
		var SkeletonRenderer = (function () {
			function SkeletonRenderer(context) {
				this.triangleRendering = false;
				this.debugRendering = false;
				this.vertices = spine.Utils.newFloatArray(8 * 1024);
				this.tempColor = new spine.Color();
				this.ctx = context;
			}
			SkeletonRenderer.prototype.draw = function (skeleton) {
				if (this.triangleRendering)
					this.drawTriangles(skeleton);
				else
					this.drawImages(skeleton);
			};
			SkeletonRenderer.prototype.drawImages = function (skeleton) {
				var ctx = this.ctx;
				var drawOrder = skeleton.drawOrder;
				if (this.debugRendering)
					ctx.strokeStyle = "green";
				ctx.save();
				for (var i = 0, n = drawOrder.length; i < n; i++) {
					var slot = drawOrder[i];
					var attachment = slot.getAttachment();
					var regionAttachment = null;
					var region = null;
					var image = null;
					if (attachment instanceof spine.RegionAttachment) {
						regionAttachment = attachment;
						region = regionAttachment.region;
						image = region.texture.getImage();
					}
					else
						continue;
					var skeleton_1 = slot.bone.skeleton;
					var skeletonColor = skeleton_1.color;
					var slotColor = slot.color;
					var regionColor = regionAttachment.color;
					var alpha = skeletonColor.a * slotColor.a * regionColor.a;
					var color = this.tempColor;
					color.set(skeletonColor.r * slotColor.r * regionColor.r, skeletonColor.g * slotColor.g * regionColor.g, skeletonColor.b * slotColor.b * regionColor.b, alpha);
					var att = attachment;
					var bone = slot.bone;
					var w = region.width;
					var h = region.height;
					ctx.save();
					ctx.transform(bone.a, bone.c, bone.b, bone.d, bone.worldX, bone.worldY);
					ctx.translate(attachment.offset[0], attachment.offset[1]);
					ctx.rotate(attachment.rotation * Math.PI / 180);
					var atlasScale = att.width / w;
					ctx.scale(atlasScale * attachment.scaleX, atlasScale * attachment.scaleY);
					ctx.translate(w / 2, h / 2);
					if (attachment.region.rotate) {
						var t = w;
						w = h;
						h = t;
						ctx.rotate(-Math.PI / 2);
					}
					ctx.scale(1, -1);
					ctx.translate(-w / 2, -h / 2);
					if (color.r != 1 || color.g != 1 || color.b != 1 || color.a != 1) {
						ctx.globalAlpha = color.a;
					}
					ctx.drawImage(image, region.x, region.y, w, h, 0, 0, w, h);
					if (this.debugRendering)
						ctx.strokeRect(0, 0, w, h);
					ctx.restore();
				}
				ctx.restore();
			};
			SkeletonRenderer.prototype.drawTriangles = function (skeleton) {
				var blendMode = null;
				var vertices = this.vertices;
				var triangles = null;
				var drawOrder = skeleton.drawOrder;
				for (var i = 0, n = drawOrder.length; i < n; i++) {
					var slot = drawOrder[i];
					var attachment = slot.getAttachment();
					var texture = null;
					var region = null;
					if (attachment instanceof spine.RegionAttachment) {
						var regionAttachment = attachment;
						vertices = this.computeRegionVertices(slot, regionAttachment, false);
						triangles = SkeletonRenderer.QUAD_TRIANGLES;
						region = regionAttachment.region;
						texture = region.texture.getImage();
					}
					else if (attachment instanceof spine.MeshAttachment) {
						var mesh = attachment;
						vertices = this.computeMeshVertices(slot, mesh, false);
						triangles = mesh.triangles;
						texture = mesh.region.renderObject.texture.getImage();
					}
					else
						continue;
					if (texture != null) {
						var slotBlendMode = slot.data.blendMode;
						if (slotBlendMode != blendMode) {
							blendMode = slotBlendMode;
						}
						var skeleton_2 = slot.bone.skeleton;
						var skeletonColor = skeleton_2.color;
						var slotColor = slot.color;
						var attachmentColor = attachment.color;
						var alpha = skeletonColor.a * slotColor.a * attachmentColor.a;
						var color = this.tempColor;
						color.set(skeletonColor.r * slotColor.r * attachmentColor.r, skeletonColor.g * slotColor.g * attachmentColor.g, skeletonColor.b * slotColor.b * attachmentColor.b, alpha);
						var ctx = this.ctx;
						if (color.r != 1 || color.g != 1 || color.b != 1 || color.a != 1) {
							ctx.globalAlpha = color.a;
						}
						for (var j = 0; j < triangles.length; j += 3) {
							var t1 = triangles[j] * 8, t2 = triangles[j + 1] * 8, t3 = triangles[j + 2] * 8;
							var x0 = vertices[t1], y0 = vertices[t1 + 1], u0 = vertices[t1 + 6], v0 = vertices[t1 + 7];
							var x1 = vertices[t2], y1 = vertices[t2 + 1], u1 = vertices[t2 + 6], v1 = vertices[t2 + 7];
							var x2 = vertices[t3], y2 = vertices[t3 + 1], u2 = vertices[t3 + 6], v2 = vertices[t3 + 7];
							this.drawTriangle(texture, x0, y0, u0, v0, x1, y1, u1, v1, x2, y2, u2, v2);
							if (this.debugRendering) {
								ctx.strokeStyle = "green";
								ctx.beginPath();
								ctx.moveTo(x0, y0);
								ctx.lineTo(x1, y1);
								ctx.lineTo(x2, y2);
								ctx.lineTo(x0, y0);
								ctx.stroke();
							}
						}
					}
				}
				this.ctx.globalAlpha = 1;
			};
			SkeletonRenderer.prototype.drawTriangle = function (img, x0, y0, u0, v0, x1, y1, u1, v1, x2, y2, u2, v2) {
				var ctx = this.ctx;
				u0 *= img.width;
				v0 *= img.height;
				u1 *= img.width;
				v1 *= img.height;
				u2 *= img.width;
				v2 *= img.height;
				ctx.beginPath();
				ctx.moveTo(x0, y0);
				ctx.lineTo(x1, y1);
				ctx.lineTo(x2, y2);
				ctx.closePath();
				x1 -= x0;
				y1 -= y0;
				x2 -= x0;
				y2 -= y0;
				u1 -= u0;
				v1 -= v0;
				u2 -= u0;
				v2 -= v0;
				var det = 1 / (u1 * v2 - u2 * v1), a = (v2 * x1 - v1 * x2) * det, b = (v2 * y1 - v1 * y2) * det, c = (u1 * x2 - u2 * x1) * det, d = (u1 * y2 - u2 * y1) * det, e = x0 - a * u0 - c * v0, f = y0 - b * u0 - d * v0;
				ctx.save();
				ctx.transform(a, b, c, d, e, f);
				ctx.clip();
				ctx.drawImage(img, 0, 0);
				ctx.restore();
			};
			SkeletonRenderer.prototype.computeRegionVertices = function (slot, region, pma) {
				var skeleton = slot.bone.skeleton;
				var skeletonColor = skeleton.color;
				var slotColor = slot.color;
				var regionColor = region.color;
				var alpha = skeletonColor.a * slotColor.a * regionColor.a;
				var multiplier = pma ? alpha : 1;
				var color = this.tempColor;
				color.set(skeletonColor.r * slotColor.r * regionColor.r * multiplier, skeletonColor.g * slotColor.g * regionColor.g * multiplier, skeletonColor.b * slotColor.b * regionColor.b * multiplier, alpha);
				region.computeWorldVertices(slot.bone, this.vertices, 0, SkeletonRenderer.VERTEX_SIZE);
				var vertices = this.vertices;
				var uvs = region.uvs;
				vertices[spine.RegionAttachment.C1R] = color.r;
				vertices[spine.RegionAttachment.C1G] = color.g;
				vertices[spine.RegionAttachment.C1B] = color.b;
				vertices[spine.RegionAttachment.C1A] = color.a;
				vertices[spine.RegionAttachment.U1] = uvs[0];
				vertices[spine.RegionAttachment.V1] = uvs[1];
				vertices[spine.RegionAttachment.C2R] = color.r;
				vertices[spine.RegionAttachment.C2G] = color.g;
				vertices[spine.RegionAttachment.C2B] = color.b;
				vertices[spine.RegionAttachment.C2A] = color.a;
				vertices[spine.RegionAttachment.U2] = uvs[2];
				vertices[spine.RegionAttachment.V2] = uvs[3];
				vertices[spine.RegionAttachment.C3R] = color.r;
				vertices[spine.RegionAttachment.C3G] = color.g;
				vertices[spine.RegionAttachment.C3B] = color.b;
				vertices[spine.RegionAttachment.C3A] = color.a;
				vertices[spine.RegionAttachment.U3] = uvs[4];
				vertices[spine.RegionAttachment.V3] = uvs[5];
				vertices[spine.RegionAttachment.C4R] = color.r;
				vertices[spine.RegionAttachment.C4G] = color.g;
				vertices[spine.RegionAttachment.C4B] = color.b;
				vertices[spine.RegionAttachment.C4A] = color.a;
				vertices[spine.RegionAttachment.U4] = uvs[6];
				vertices[spine.RegionAttachment.V4] = uvs[7];
				return vertices;
			};
			SkeletonRenderer.prototype.computeMeshVertices = function (slot, mesh, pma) {
				var skeleton = slot.bone.skeleton;
				var skeletonColor = skeleton.color;
				var slotColor = slot.color;
				var regionColor = mesh.color;
				var alpha = skeletonColor.a * slotColor.a * regionColor.a;
				var multiplier = pma ? alpha : 1;
				var color = this.tempColor;
				color.set(skeletonColor.r * slotColor.r * regionColor.r * multiplier, skeletonColor.g * slotColor.g * regionColor.g * multiplier, skeletonColor.b * slotColor.b * regionColor.b * multiplier, alpha);
				var numVertices = mesh.worldVerticesLength / 2;
				if (this.vertices.length < mesh.worldVerticesLength) {
					this.vertices = spine.Utils.newFloatArray(mesh.worldVerticesLength);
				}
				var vertices = this.vertices;
				mesh.computeWorldVertices(slot, 0, mesh.worldVerticesLength, vertices, 0, SkeletonRenderer.VERTEX_SIZE);
				var uvs = mesh.uvs;
				for (var i = 0, n = numVertices, u = 0, v = 2; i < n; i++) {
					vertices[v++] = color.r;
					vertices[v++] = color.g;
					vertices[v++] = color.b;
					vertices[v++] = color.a;
					vertices[v++] = uvs[u++];
					vertices[v++] = uvs[u++];
					v += 2;
				}
				return vertices;
			};
			SkeletonRenderer.QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0];
			SkeletonRenderer.VERTEX_SIZE = 2 + 2 + 4;
			return SkeletonRenderer;
		}());
		canvas.SkeletonRenderer = SkeletonRenderer;
	})(canvas = spine.canvas || (spine.canvas = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var webgl;
	(function (webgl) {
		var AssetManager = (function (_super) {
			__extends(AssetManager, _super);
			function AssetManager(context, pathPrefix) {
				if (pathPrefix === void 0) { pathPrefix = ""; }
				return _super.call(this, function (image) {
					return new spine.webgl.GLTexture(context, image);
				}, pathPrefix) || this;
			}
			return AssetManager;
		}(spine.AssetManager));
		webgl.AssetManager = AssetManager;
	})(webgl = spine.webgl || (spine.webgl = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var webgl;
	(function (webgl) {
		var OrthoCamera = (function () {
			function OrthoCamera(viewportWidth, viewportHeight) {
				this.position = new webgl.Vector3(0, 0, 0);
				this.direction = new webgl.Vector3(0, 0, -1);
				this.up = new webgl.Vector3(0, 1, 0);
				this.near = 0;
				this.far = 100;
				this.zoom = 1;
				this.viewportWidth = 0;
				this.viewportHeight = 0;
				this.projectionView = new webgl.Matrix4();
				this.inverseProjectionView = new webgl.Matrix4();
				this.projection = new webgl.Matrix4();
				this.view = new webgl.Matrix4();
				this.tmp = new webgl.Vector3();
				this.viewportWidth = viewportWidth;
				this.viewportHeight = viewportHeight;
				this.update();
			}
			OrthoCamera.prototype.update = function () {
				var projection = this.projection;
				var view = this.view;
				var projectionView = this.projectionView;
				var inverseProjectionView = this.inverseProjectionView;
				var zoom = this.zoom, viewportWidth = this.viewportWidth, viewportHeight = this.viewportHeight;
				projection.ortho(zoom * (-viewportWidth / 2), zoom * (viewportWidth / 2), zoom * (-viewportHeight / 2), zoom * (viewportHeight / 2), this.near, this.far);
				view.lookAt(this.position, this.direction, this.up);
				projectionView.set(projection.values);
				projectionView.multiply(view);
				inverseProjectionView.set(projectionView.values).invert();
			};
			OrthoCamera.prototype.screenToWorld = function (screenCoords, screenWidth, screenHeight) {
				var x = screenCoords.x, y = screenHeight - screenCoords.y - 1;
				var tmp = this.tmp;
				tmp.x = (2 * x) / screenWidth - 1;
				tmp.y = (2 * y) / screenHeight - 1;
				tmp.z = (2 * screenCoords.z) - 1;
				tmp.project(this.inverseProjectionView);
				screenCoords.set(tmp.x, tmp.y, tmp.z);
				return screenCoords;
			};
			OrthoCamera.prototype.setViewport = function (viewportWidth, viewportHeight) {
				this.viewportWidth = viewportWidth;
				this.viewportHeight = viewportHeight;
			};
			return OrthoCamera;
		}());
		webgl.OrthoCamera = OrthoCamera;
	})(webgl = spine.webgl || (spine.webgl = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var webgl;
	(function (webgl) {
		var GLTexture = (function (_super) {
			__extends(GLTexture, _super);
			function GLTexture(context, image, useMipMaps) {
				if (useMipMaps === void 0) { useMipMaps = false; }
				var _this = _super.call(this, image) || this;
				_this.texture = null;
				_this.boundUnit = 0;
				_this.useMipMaps = false;
				_this.context = context instanceof webgl.ManagedWebGLRenderingContext ? context : new webgl.ManagedWebGLRenderingContext(context);
				_this.useMipMaps = useMipMaps;
				_this.restore();
				_this.context.addRestorable(_this);
				return _this;
			}
			GLTexture.prototype.setFilters = function (minFilter, magFilter) {
				var gl = this.context.gl;
				this.bind();
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
			};
			GLTexture.prototype.setWraps = function (uWrap, vWrap) {
				var gl = this.context.gl;
				this.bind();
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, uWrap);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, vWrap);
			};
			GLTexture.prototype.update = function (useMipMaps) {
				var gl = this.context.gl;
				if (!this.texture) {
					this.texture = this.context.gl.createTexture();
				}
				this.bind();
				gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this._image);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, useMipMaps ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
				if (useMipMaps)
					gl.generateMipmap(gl.TEXTURE_2D);
			};
			GLTexture.prototype.restore = function () {
				this.texture = null;
				this.update(this.useMipMaps);
			};
			GLTexture.prototype.bind = function (unit) {
				if (unit === void 0) { unit = 0; }
				var gl = this.context.gl;
				this.boundUnit = unit;
				gl.activeTexture(gl.TEXTURE0 + unit);
				gl.bindTexture(gl.TEXTURE_2D, this.texture);
			};
			GLTexture.prototype.unbind = function () {
				var gl = this.context.gl;
				gl.activeTexture(gl.TEXTURE0 + this.boundUnit);
				gl.bindTexture(gl.TEXTURE_2D, null);
			};
			GLTexture.prototype.dispose = function () {
				this.context.removeRestorable(this);
				var gl = this.context.gl;
				gl.deleteTexture(this.texture);
			};
			return GLTexture;
		}(spine.Texture));
		webgl.GLTexture = GLTexture;
	})(webgl = spine.webgl || (spine.webgl = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var webgl;
	(function (webgl) {
		var Input = (function () {
			function Input(element) {
				this.lastX = 0;
				this.lastY = 0;
				this.buttonDown = false;
				this.currTouch = null;
				this.touchesPool = new spine.Pool(function () {
					return new spine.webgl.Touch(0, 0, 0);
				});
				this.listeners = new Array();
				this.element = element;
				this.setupCallbacks(element);
			}
			Input.prototype.setupCallbacks = function (element) {
				var _this = this;
				var mouseDown = function (ev) {
					if (ev instanceof MouseEvent) {
						var rect = element.getBoundingClientRect();
						var x = ev.clientX - rect.left;
						var y = ev.clientY - rect.top;
						var listeners = _this.listeners;
						for (var i = 0; i < listeners.length; i++) {
							listeners[i].down(x, y);
						}
						_this.lastX = x;
						_this.lastY = y;
						_this.buttonDown = true;
						document.addEventListener("mousemove", mouseMove);
						document.addEventListener("mouseup", mouseUp);
					}
				};
				var mouseMove = function (ev) {
					if (ev instanceof MouseEvent) {
						var rect = element.getBoundingClientRect();
						var x = ev.clientX - rect.left;
						var y = ev.clientY - rect.top;
						var listeners = _this.listeners;
						for (var i = 0; i < listeners.length; i++) {
							if (_this.buttonDown) {
								listeners[i].dragged(x, y);
							}
							else {
								listeners[i].moved(x, y);
							}
						}
						_this.lastX = x;
						_this.lastY = y;
					}
				};
				var mouseUp = function (ev) {
					if (ev instanceof MouseEvent) {
						var rect = element.getBoundingClientRect();
						var x = ev.clientX - rect.left;
						var y = ev.clientY - rect.top;
						var listeners = _this.listeners;
						for (var i = 0; i < listeners.length; i++) {
							listeners[i].up(x, y);
						}
						_this.lastX = x;
						_this.lastY = y;
						_this.buttonDown = false;
						document.removeEventListener("mousemove", mouseMove);
						document.removeEventListener("mouseup", mouseUp);
					}
				};
				element.addEventListener("mousedown", mouseDown, true);
				element.addEventListener("mousemove", mouseMove, true);
				element.addEventListener("mouseup", mouseUp, true);
				element.addEventListener("touchstart", function (ev) {
					if (_this.currTouch != null)
						return;
					var touches = ev.changedTouches;
					for (var i = 0; i < touches.length; i++) {
						var touch = touches[i];
						var rect = element.getBoundingClientRect();
						var x = touch.clientX - rect.left;
						var y = touch.clientY - rect.top;
						_this.currTouch = _this.touchesPool.obtain();
						_this.currTouch.identifier = touch.identifier;
						_this.currTouch.x = x;
						_this.currTouch.y = y;
						break;
					}
					var listeners = _this.listeners;
					for (var i_16 = 0; i_16 < listeners.length; i_16++) {
						listeners[i_16].down(_this.currTouch.x, _this.currTouch.y);
					}
					console.log("Start " + _this.currTouch.x + ", " + _this.currTouch.y);
					_this.lastX = _this.currTouch.x;
					_this.lastY = _this.currTouch.y;
					_this.buttonDown = true;
					ev.preventDefault();
				}, false);
				element.addEventListener("touchend", function (ev) {
					var touches = ev.changedTouches;
					for (var i = 0; i < touches.length; i++) {
						var touch = touches[i];
						if (_this.currTouch.identifier === touch.identifier) {
							var rect = element.getBoundingClientRect();
							var x = _this.currTouch.x = touch.clientX - rect.left;
							var y = _this.currTouch.y = touch.clientY - rect.top;
							_this.touchesPool.free(_this.currTouch);
							var listeners = _this.listeners;
							for (var i_17 = 0; i_17 < listeners.length; i_17++) {
								listeners[i_17].up(x, y);
							}
							console.log("End " + x + ", " + y);
							_this.lastX = x;
							_this.lastY = y;
							_this.buttonDown = false;
							_this.currTouch = null;
							break;
						}
					}
					ev.preventDefault();
				}, false);
				element.addEventListener("touchcancel", function (ev) {
					var touches = ev.changedTouches;
					for (var i = 0; i < touches.length; i++) {
						var touch = touches[i];
						if (_this.currTouch.identifier === touch.identifier) {
							var rect = element.getBoundingClientRect();
							var x = _this.currTouch.x = touch.clientX - rect.left;
							var y = _this.currTouch.y = touch.clientY - rect.top;
							_this.touchesPool.free(_this.currTouch);
							var listeners = _this.listeners;
							for (var i_18 = 0; i_18 < listeners.length; i_18++) {
								listeners[i_18].up(x, y);
							}
							console.log("End " + x + ", " + y);
							_this.lastX = x;
							_this.lastY = y;
							_this.buttonDown = false;
							_this.currTouch = null;
							break;
						}
					}
					ev.preventDefault();
				}, false);
				element.addEventListener("touchmove", function (ev) {
					if (_this.currTouch == null)
						return;
					var touches = ev.changedTouches;
					for (var i = 0; i < touches.length; i++) {
						var touch = touches[i];
						if (_this.currTouch.identifier === touch.identifier) {
							var rect = element.getBoundingClientRect();
							var x = touch.clientX - rect.left;
							var y = touch.clientY - rect.top;
							var listeners = _this.listeners;
							for (var i_19 = 0; i_19 < listeners.length; i_19++) {
								listeners[i_19].dragged(x, y);
							}
							console.log("Drag " + x + ", " + y);
							_this.lastX = _this.currTouch.x = x;
							_this.lastY = _this.currTouch.y = y;
							break;
						}
					}
					ev.preventDefault();
				}, false);
			};
			Input.prototype.addListener = function (listener) {
				this.listeners.push(listener);
			};
			Input.prototype.removeListener = function (listener) {
				var idx = this.listeners.indexOf(listener);
				if (idx > -1) {
					this.listeners.splice(idx, 1);
				}
			};
			return Input;
		}());
		webgl.Input = Input;
		var Touch = (function () {
			function Touch(identifier, x, y) {
				this.identifier = identifier;
				this.x = x;
				this.y = y;
			}
			return Touch;
		}());
		webgl.Touch = Touch;
	})(webgl = spine.webgl || (spine.webgl = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var webgl;
	(function (webgl) {
		var LoadingScreen = (function () {
			function LoadingScreen(renderer) {
				this.logo = null;
				this.spinner = null;
				this.angle = 0;
				this.fadeOut = 0;
				this.timeKeeper = new spine.TimeKeeper();
				this.backgroundColor = new spine.Color(0.135, 0.135, 0.135, 1);
				this.tempColor = new spine.Color();
				this.firstDraw = 0;
				this.renderer = renderer;
				this.timeKeeper.maxDelta = 9;
				if (LoadingScreen.logoImg === null) {
					var isSafari = navigator.userAgent.indexOf("Safari") > -1;
					LoadingScreen.logoImg = new Image();
					LoadingScreen.logoImg.src = LoadingScreen.SPINE_LOGO_DATA;
					if (!isSafari)
						LoadingScreen.logoImg.crossOrigin = "anonymous";
					LoadingScreen.logoImg.onload = function (ev) {
						LoadingScreen.loaded++;
					};
					LoadingScreen.spinnerImg = new Image();
					LoadingScreen.spinnerImg.src = LoadingScreen.SPINNER_DATA;
					if (!isSafari)
						LoadingScreen.spinnerImg.crossOrigin = "anonymous";
					LoadingScreen.spinnerImg.onload = function (ev) {
						LoadingScreen.loaded++;
					};
				}
			}
			LoadingScreen.prototype.draw = function (complete) {
				if (complete === void 0) { complete = false; }
				if (complete && this.fadeOut > LoadingScreen.FADE_SECONDS)
					return;
				this.timeKeeper.update();
				var a = Math.abs(Math.sin(this.timeKeeper.totalTime + 0.75));
				this.angle -= this.timeKeeper.delta / 1.4 * 360 * (1 + 1.5 * Math.pow(a, 5));
				var renderer = this.renderer;
				var canvas = renderer.canvas;
				var gl = renderer.context.gl;
				renderer.resize(webgl.ResizeMode.Stretch);
				var oldX = renderer.camera.position.x, oldY = renderer.camera.position.y;
				renderer.camera.position.set(canvas.width / 2, canvas.height / 2, 0);
				renderer.camera.viewportWidth = canvas.width;
				renderer.camera.viewportHeight = canvas.height;
				if (!complete) {
					gl.clearColor(this.backgroundColor.r, this.backgroundColor.g, this.backgroundColor.b, this.backgroundColor.a);
					gl.clear(gl.COLOR_BUFFER_BIT);
					this.tempColor.a = 1;
				}
				else {
					this.fadeOut += this.timeKeeper.delta * (this.timeKeeper.totalTime < 1 ? 2 : 1);
					if (this.fadeOut > LoadingScreen.FADE_SECONDS) {
						renderer.camera.position.set(oldX, oldY, 0);
						return;
					}
					a = 1 - this.fadeOut / LoadingScreen.FADE_SECONDS;
					this.tempColor.setFromColor(this.backgroundColor);
					this.tempColor.a = 1 - (a - 1) * (a - 1);
					renderer.begin();
					renderer.quad(true, 0, 0, canvas.width, 0, canvas.width, canvas.height, 0, canvas.height, this.tempColor, this.tempColor, this.tempColor, this.tempColor);
					renderer.end();
				}
				this.tempColor.set(1, 1, 1, this.tempColor.a);
				if (LoadingScreen.loaded != 2)
					return;
				if (this.logo === null) {
					this.logo = new webgl.GLTexture(renderer.context, LoadingScreen.logoImg);
					this.spinner = new webgl.GLTexture(renderer.context, LoadingScreen.spinnerImg);
				}
				this.logo.update(false);
				this.spinner.update(false);
				var logoWidth = this.logo.getImage().width;
				var logoHeight = this.logo.getImage().height;
				var spinnerWidth = this.spinner.getImage().width;
				var spinnerHeight = this.spinner.getImage().height;
				renderer.batcher.setBlendMode(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
				renderer.begin();
				renderer.drawTexture(this.logo, (canvas.width - logoWidth) / 2, (canvas.height - logoHeight) / 2, logoWidth, logoHeight, this.tempColor);
				renderer.drawTextureRotated(this.spinner, (canvas.width - spinnerWidth) / 2, (canvas.height - spinnerHeight) / 2, spinnerWidth, spinnerHeight, spinnerWidth / 2, spinnerHeight / 2, this.angle, this.tempColor);
				renderer.end();
				renderer.camera.position.set(oldX, oldY, 0);
			};
			LoadingScreen.FADE_SECONDS = 1;
			LoadingScreen.loaded = 0;
			LoadingScreen.spinnerImg = null;
			LoadingScreen.logoImg = null;
			LoadingScreen.SPINNER_DATA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACjCAYAAADmbK6AAAAACXBIWXMAAAsTAAALEwEAmpwYAAALB2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTYtMDktMDhUMTQ6MjU6MTIrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMTEtMTVUMTY6NDA6NTkrMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTExLTE1VDE2OjQwOjU5KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmZDhlNTljMC02NGJjLTIxNGQtODAyZi1jZDlhODJjM2ZjMGMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmYmNmZWJlYS03MjY2LWE0NGQtOTI4NS0wOTJmNGNhYzk4ZWEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowODMzNWIyYy04NzYyLWQzNGMtOTBhOS02ODJjYjJmYTQ2M2UiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iMjk3IiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMjQyIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowODMzNWIyYy04NzYyLWQzNGMtOTBhOS02ODJjYjJmYTQ2M2UiIHN0RXZ0OndoZW49IjIwMTYtMDktMDhUMTQ6MjU6MTIrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1LjUgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiNThlMTlkNi0xYTRjLTQyNDEtODU0ZC01MDVlZjYxMjRhODQiIHN0RXZ0OndoZW49IjIwMTgtMTEtMTVUMTY6NDA6MjMrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ3YzYzYzIwLWJkYjgtYzM0YS1hYzMyLWQ5MDdjOWEyOTA0MCIgc3RFdnQ6d2hlbj0iMjAxOC0xMS0xNVQxNjo0MDo1OSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmQ4ZTU5YzAtNjRiYy0yMTRkLTgwMmYtY2Q5YTgyYzNmYzBjIiBzdEV2dDp3aGVuPSIyMDE4LTExLTE1VDE2OjQwOjU5KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0N2M2M2MyMC1iZGI4LWMzNGEtYWMzMi1kOTA3YzlhMjkwNDAiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2OWRmZjljYy01YzFiLWE5NDctOTc3OS03ODgxZjM0ODk3MDMiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowODMzNWIyYy04NzYyLWQzNGMtOTBhOS02ODJjYjJmYTQ2M2UiLz4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+eG1wLmRpZDowODMzNWIyYy04NzYyLWQzNGMtOTBhOS02ODJjYjJmYTQ2M2U8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7qS4aQAAAKZElEQVR42u2de4xVxR3HP8dd3rQryPKo4dGNbtVAQRa1YB93E1tTS7VYqCBiSWhsqGltSx+0xD60tKBorYnNkkBtFUt9xJaGNGlty6EqRAK1KlalshK2C8tzpcIigpz+MbPr5e5y987dM2fv4/tJbjC7v3P2+JvPnTMzZ85MEEURQhQClUpB7gRBAECUYiYwH6gDqoEKoA1oBDYCy4OQJgB92R3yq2S5yRilWASs6CZ0DzA5CNmn/ObOOUpB7kQpRgNLcwj9AHCnMiYZfXIT0C/H2DlRSs0gyeiPaQ6xg4FapUwy+mKUY/wwpUwy+uK4Y/xhpUwy+mKfY3yTUiYZfdHiENsahBxRyiSjL5odYncpXZLRJ3sdYhuVLslYKDKqZpSMBXObVs0oGQumA6OaUTL6Iwg5CBzNMXy7MiYZffNCDjH7g5DdSpVk9M36mGKEZOwxq4Fj3cT8UmmSjEm0Gw8At2UJaQhCtilTeeRWM5EdkmVfOwCIUtQBE4AqILC1ZQuwPgjpSKryWwgy1gfZfjsQ886IKFY2xO9N0jOR69srDOAtzCyYFuCUSrcg6AOcBIYCY4C3gVeT+uNJyvg94GPAxzFjcDuBl4C/AP+UBwXBR4AaYDYwDvgr8Drwi1KScRnwXfut6wNcYT+7Ma97LgX+JRd6jfOAucAXgCvTfl4DvAuMtJVJ0cu41IoYWRHTGWM/1TZmq/2fF8nR14r4U2BQF7+LgMW2k7bY54X4Htr5EvD99s5SlriPArcAY+VGsh1YYDpwMzAgSwy2svhWscpYA/wkx9gKm5S5wBA5kgjnAJcDX7NNpVxcWAZMLUYZJwHDHeKrgXnAdWjZlSS4BLgVuMzRlxt9eeNTxsG2veFyy7gQWAR8Sq54byfeYDssAx3LqLabJldBytgMHMjjuPHAQvTOsU++aJtE/fI4dpevTqZPGV+2veN8+DTwIHCBr29hmVJhJXwA+GAex7cBjxZjm7EFWAL8DfeX39s7NPOy9PKEO7XAV+k8xJYLrcDPgL8Xo4xgJqIuA7bkeXw9ZsBVxMMMYEqex64FfuO7e++bTcAPgD8Bpx2PvRSYKIdi61DOs3edXImAV4Cv2zJsKnYZ24B/AJ+xteRrwAmHBF4mj2JhEnCRg4QnrYh3YZ5NH/J9gUmP5zXYtsdsW+Pl8vffkEex8I5D7HHgGeBhe0dLhKRlbMJM298NXI8Z68rGk8AGeRQLu4DHMGOL2dgJPA78AXguyQvsjScdrTYp2zBDPzfbXl7mmNc64B7MFCbRc/bbfPYHrs343WnbZHsG+BXwZ8y65JS6jOnfwPuBg8BnMQtxjsWsh/0IsNJ2fkR8bAHutbfhG2x7vp9tDzZiFs5/Non2YaHJ2N6OWQf8BxiBeRx4EDPZ9nm544WNVsLtwFWYJ2Wh/fmO3ryw3noHpiv6YyZ5NsuXROhrRypeAv7nfHQJvAOTjbclYuJ3pWcL6YL03rSQjEJIRiEZhZCMQjIKIRmFZBRCMgrJKIRkFJJRCMkoJKMQklFIRiEkoxCSUUhGISSjkIxCSEYhGYWQjEIyCiEZhWQUQjIKySiEZBSSUQjJKCSjEAVCJUAQmCWPoxSjgZuAaZgF348D+zD7ADYDe+2nGWgJQg52dVJvSzOLgqHdmU5ln2IYZou9861Do+x/j8Ss2z7AOrQJWBOEZtetKIrMmt5BEBClWAQsxW3b16OY/QHXA6uD0GzpG0VRPmt6i2KSMeyQrxpYgNl4dCJmV7NcOQEsCULu6ZCR+mAmZiOannAMuC0IWS0Zy0PGKMUCzFZug3p4ullsiJ5obzPOj+H6BgGrohR1KqrSx5bzqhhE7PCvXcY4BZqgoioL4iznunQZq2M8cZXKqSyIs5yr02WsiPHEaiyWSbMxxnNVpMvYFuOJj6mcyoI4y7ktXcbGGE/conIqC+Is58Z0GTfGdNIGzJijKH3W2/KOg43pMi4n//2F92P2KJ4ShCwMQvT4pRwajCFRELIQmGLLf3+ep9pj/TvjCcwI4E5gDp1H0VsxO7k3Zvy7PQjZnXl2DXqXhYydiFKMAcYD44CajH+HZIQfBdYCtwch+854HJh2wkqgFhgGHAaagpAjLhcqGctTxqxOpKgCRgNDMXuK7whCTqU7U9khz3ucAv59xomUe9FVhePGEfs5q1eaQiYKBskoJKMQklFIRiEko5CMQkhGIRmFkIxCMgohGYVkFEIyCskohGQUklEIySiEZBSSUQjJKCSjEJJRSEYhJKOQjEJIRiEZhZCMQjIKIRmFZBSijGXMvIZ+KpZEaF8qeygwHOjb2xdUWQBJqQL6ADOBi4GHMGuGH5Iv3hiG2SJtIWaV4mZgB/AadF6jvVxkvAKzv3UdMNX+bDJm9fx10PV+1qLHIl4P3GLzfh3QBLwKbAZ+DJwuFxkDm5CZmN0Vzsv4/TTMyviVwGOYnRZEPAwBZgDfAC5K+/lo+5kKXAjcBzwPnCz1NuP77LfxO12I2M7FNmFXE+++huVOPfDNDBEz25FzgHuBa4Bzk8x/0jJeCiwCFmP2BsnGh4BbgYFyKDZmZRExnTpbGcywHZySuk0PsbeAG4HZDt+2C6yMb8mjWHgXs+NFd5v09Ac+AYzC7An0EPBKqdSM1wDfBqY7Vvubk263lDhPYHamypVa4MvAHUCq2GvGgcB8YAEwKQ/5nwa33blEVrYDLwJXOhxzLvBJzDhkK/BCMdaMA4C5wF2Y4RrXv7UF+KO9tYh42A08msfoRxVwLfBDYGwxyliLGUMclMexL9rOy075EyvvAKuBlcCbeTa3Pl+MMk7GbP/qyiHg18BWueOFNnu3ymeP8X62h11dbDKm7K3a9Zv7e+BJOeOVRmCNvQO5cgmdt4AueBkH5zCE0FWHpQH4r3zxzlPAw3kcdxg4VmwybnaMfx1YAWxTpyURjtj24wpHuZ7C0yNanzL+FnjZIX4lsEGOJEorcDewKcf4vTb+ZLHJuAeYBxzvJm4/8CPg58AJ+ZE4BzBDNk93k//jwOeAN4qxNw1m5sdV9jZwtlvv48ADujX3GpFtUt0OhPZnJzN63wdtOW7xeSFJPJvehBnBv8/2ricAp2wb8UHgETRvsRDYCiy3IrbPCWi0Mt4BPOf7AoIoivycub5TR/rDmBkjs4Df2fbHJjlQcLwfuNyW13rMXILOkyQ2REUtI5jnnG+mNRFOF3Gh1dlavgozhHUMaLEFGJWImBVnbT4VlYwlSBCYL1iUYgGw6ixhDUHIwo4GmfIrGX3JGKWotj3KbM/cpwQh2yRjYfWmS5EFdD/54ytKk2RMgukxxQjJ2GMm5hAzPEoxRqmSjN6IUgwj9xkr45UxyeiTkQ6x45QuyeiT8x1ia5QuyeiTUaoZJWMxyqiaUTIWzG1aNaNkLJgOzJAoRZVSJhl9McIxfrRSJhl94fq241ClTDL6Yq9jvCYNS0ZvuEwGPopZmlhIRi+sIfeXxtYGIaeUMsnohSCkCViSQ+gezAtOwiW/mvzpkKz3ZnrPxCz1V4dZd6YC8+JSI2YNm+VWXE2ulYyiGPk/nslB8d6ayMkAAAAASUVORK5CYII=";
			LoadingScreen.SPINE_LOGO_DATA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAABsCAYAAAALzHKmAAAACXBIWXMAAAsTAAALEwEAmpwYAAALB2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTYtMDktMDhUMTQ6MjU6MTIrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMTEtMTVUMTY6NDA6NTkrMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTExLTE1VDE2OjQwOjU5KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMTdhZGQ3Ni04OTZlLThlNGUtYmM5MS00ZjEyNjI1YjA3MjgiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplMTViNGE2ZS1hMDg3LWEzNDktODdhOS1mNDYzYjE2MzQ0Y2MiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowODMzNWIyYy04NzYyLWQzNGMtOTBhOS02ODJjYjJmYTQ2M2UiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iMjk3IiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMjQyIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowODMzNWIyYy04NzYyLWQzNGMtOTBhOS02ODJjYjJmYTQ2M2UiIHN0RXZ0OndoZW49IjIwMTYtMDktMDhUMTQ6MjU6MTIrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1LjUgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiNThlMTlkNi0xYTRjLTQyNDEtODU0ZC01MDVlZjYxMjRhODQiIHN0RXZ0OndoZW49IjIwMTgtMTEtMTVUMTY6NDA6MjMrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJlNjJiMWM2LWIxYzQtNDk0MC04MDMxLWU4ZDkyNTBmODJjNSIgc3RFdnQ6d2hlbj0iMjAxOC0xMS0xNVQxNjo0MDo1OSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDE3YWRkNzYtODk2ZS04ZTRlLWJjOTEtNGYxMjYyNWIwNzI4IiBzdEV2dDp3aGVuPSIyMDE4LTExLTE1VDE2OjQwOjU5KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyZTYyYjFjNi1iMWM0LTQ5NDAtODAzMS1lOGQ5MjUwZjgyYzUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2OWRmZjljYy01YzFiLWE5NDctOTc3OS03ODgxZjM0ODk3MDMiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowODMzNWIyYy04NzYyLWQzNGMtOTBhOS02ODJjYjJmYTQ2M2UiLz4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+eG1wLmRpZDowODMzNWIyYy04NzYyLWQzNGMtOTBhOS02ODJjYjJmYTQ2M2U8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ayrctAAATYUlEQVR42u2dfVQV553Hv88AXq5uAAlJ0CBem912jQh60kZ8y0tdC5soJnoaXzC4Tdz4cjya1GN206Zqsu3Jpm6yeM5uTG3iaYGoJNFdEY3GaFGD0p4mqS9AXpoV0OZFUOHS3usFuc/+Idde8M7M8zr3gsw5HOCZZ2aemecz39/LPPMMMLAMLDG2kIFzjqmFDiDZP6AkN3gf0gEob8x2kj4MCx2AMnbb1BcVld6IwJJ+0oYb2YTT/gYq6WPHJP3gmtA+Biztr1CSKLevLytprCkh7ctQkj4KsK590hiGlsbSOcVCR5I+BC7pA6BEAzQaq1DqhFFH3Vg16TSG4KHRgNPpyFd1XdIHAyrdCkhjADgaTSiJw/VIP1BSp6GhUQSOOgmlkzASxSqq2zpQB+ClGiGlUb65tAUZOmDUAa5u5XRSgajibVRCR3VCSRyoQwSBE/EvYy3YkYGESuwrpuAkDgPJCg4RhFVUNUkMw6hK6agDcFInoSQxAqNqWHVdD6fUhQqUsfiaVCN41IlOUBEx88JIJCCU8T+tttOR6pEFUgRQXoCVrydRAJJw/G+2jig6llN+p0wnsZpYXsAoxzGognYzryeagBRRR8L5t4iCRsvflDHnIopINcCpGkzlUOoCkqWcKABdlznXZa5lTK7Z/6zlvMeXXqdTCVWoI696ygZN0YZSp/KxQCijmiJgUp3gyQBpVy4Kq4gPqhpWlQrCCxgPeLz70wqmyqcksgELS5kKQEWCIBn1FEn7qFBKKgmnajCloZQtlwWSZR0PoCJBkJMDMnT4iSxlsQCmFJQidVUASQS3ZSlXadqhWDVkTCoLiDKw8t40XOU6oFQBJMtvkSBJ1ITLqKaOgIbVF+y9jd3/omAqVUtViigTTfMAyKqqKnxOlWZcFEzVZjrSb11gaodSRiVVAikCo4hKyjzpkh3No8tf1AUmrxnXCmW0gSSCcIqki4hipbTqGNU+IwuMqsAUfSLVoywezi46gGSFU8Sk86bBKOd1oJzrwuuEQLIbBU8sfiPC37DYhuW8pEfex3NcQBUqyVrO+7edeZdNIfFCSi22oZwdSkzUk1jAaQcrGMA0O34kUJXAaAYl0aSMkRQMjODxAArGct6onPf68CgLbGCkNv4r4axrp4wwUUc7CAnDdkzXJ14SNFHVEQFNRjHtbg7ZoMfuOlHGDiG9/DPCCDgLjDBROFgon50ZV6mQ1/YVzwmgSniJhFryAMpybB4TLjJLRqTOZPUbZYIrwmiqZYC02lboXOIV0C3qm5nVZQGSSCiuaETOe5PygEg4AbXyM1lhJIxqqiWYUQklUaiShMGc2gFpBbDdcXl9StHXka38KVZ/i8V35DXzZibcClIWtRS90ZQpJa/ysZhtHiBV+pk8imm2TjTFwxsQWIHL42PaRd4iroW0ksZLKAFv5MoKbyQQVZl1mShc5LxYOo4Fxt4KyZPysXMhrOrwqKWyHGa8wiCHVSXtzDaxgYSA36xDEk4V5lvGpxRVIZb8pZ0Z571x7My6Up9S17SBhMGvjASfocCUi0TkvOaZMJh11vSPGVSEcT0s1JYyKKnu1BABQOMloeJ9ssMCg53phoKUkVDQs2MMcvNSsZICwfYufPZVB+o/86HxbAAXP/ah9Z2LuPSnAK5wqB1PLlIkmGEBkzVbwKuWolkE6ddXeYeb2akfEfwRTRnZRf89/r84Bf81NB73WtDQ+VUHKocfw1ob35J3QAXrYApq8X94edBmvVUZS9si/Qbr/wacWXgeN/LCCAHAQ+sNhvqhOiQOcNucZMKwQXh42XCkM95AELjZRFNjRCAPSxSmAbXlKXlNOlF0wj2WoqKi5Hnz5mdTGiQA8OCDDx4T6aiNGzeOufnmm5MBoKysrHbfvn3tVhf40hX8MSked1u1LUhx+e1mXGBIz1znC77xxtaJhmFQwzDo3LmPHBdJ6ezZs2cqIVf3UVt7unH16tWNsB4gwpItsPKdlSfTZd4EZH1MKKJkEX8WLfqnlPXr1/8oNTV1QQ8QgsG2pqamX+TkZG+OtP/y8jcn5efnb+nq6vKmpg7NfeONrZOmT5++3uVyZYTvp76+vjg3d8IWs2vy2DDcsunvUDrIQLrZBT3fgXduO4ZnrEx1aWlpbkHBrM0AkJyclFVZWZl3990TngpvT1dXl7e29vRLU6dOLTcxmT3+P3Hi5NLMzMwlhmEkh7fH7/cfraqqemHevLknTMy10yZci/mO2rR5GzZs2JaamrogGAy2Xbx4cWtTU9OLXq93r2EYyR6P52kLdQQAxMXFJR05cvSRGTNmvOZyuTJ8Pl+d1+utCa0fPXr0kydOnHzSzFRu+RLNM09j7qc+vHY5iIbe7Wu7gt8t+wwbGG9YAEBV1eHvT516z0uh9vj9/tpQW7Ozc54rL39zkt1Dh6+/Pl/h8XieNgwjORAInGpqanqxvb19TzAYbHO73VPz8vK2vfXW29kKUnuOLIZitYWFryjlq1RXV890uVxjAWD37oqFo0Z5fjR2bNYvRozIWLFx48b7zpw5s8EmqgYA5OTkrA8EAud2767452HD0ueOGJHxxLp16x7w+Xx1AODxeB5buXLlCDOf9d2L8H7rd3jFfQSzv/MBpjx7BrP/4yzmP1qP76W8j6U7m3HJzpoEg8Fr5ePHj1/n8/nqtmx5fe6wYemPpKffNreysnJxaP2999672sqi/eEPJ5YkJiZmAcDhw1WP3nrrLQVjx2Ztysi4ffmqVSunBAKBU4ZhJE+bNu1VDj81qosRZfVjyU0CABk6dGgmAHR2djYVFRWdCl+3du1Pzo0bl7PZDPxwCHw+X11R0aOPLFy4sCa0vrj4P8+9++7+jaE6P/jBY3NYgrTft8P3s0Y0rPkcn5R9jRaGtNR159zdnieeeuqpulBZYeGCmsbGxtcBwO12jzFT3Iceejh55MiRTwBAQ0PDzwsKCqrDj1NSUuL98MMPX+hW3pHvvXdwqoK+1jELs3KlVGHmbZPVgUBHGwAkJCRklpSUjBW9MB988PvXwwKaa3UWLVpUEwgEzgFAamrqnWYppZ+Owt8eHoeCfdmY/vYYTH43B9/76Nt4tP5uLHlrDCbyntd77x0oPnDggLd3nbNnz9aG/i4vf3NipG1XrFgxKeRD7tq1a2+k4+Tn570fDAbbAOD222/P5uwTJ9/41BJ9izaOKXVQXFxcWVxc/IxhGMmzZj20+5NPPn21vLx8+9q1Pzlrd/xwpWxtbfWawev3+//kcrkyUlJSJpi1618z8cs4guRIx/mmG34Aky2i0+si1bC29VgX1s4e7Q+vl5aWNiJUmJ2dnVlRUTGiWxUpAISi8M7OzqaQ66O4r7UM4HDyxTEpn+XXv/5V2/Tp/1CYn/+PryQkJGSmp6cvXbVq1dLFixdX19TUbJ49++Fjsvm1L774oqYbSMtcpOk6YrqOuwND6S7W/dx///0l6CdLfBQVkntZuHDhqfnz58/84Q9XP5iZmbkgMTExa8iQIZOnTZs2+fPP/2/7HXd8Y63uNrR04vitgzAt0rqvOnAADgyCjbScOXNmAyGEAoBhGNd+E4Jrqrl//77KGwlK6hSY27Zta922bdtWANsrKiomT5iQ+y+JiYlZaWlp83bs2LlvzpzZx0X3PXz48Nyr/utV3zLS8vgn+Onr3wK9ZRDuI93X7wpFW9Nl7J51GpsQpY+4jxuX8yqsHy9SxMAH5p1KCfGAq3R/BQUF1cuXLy8KOfKjRo3KipDQ7bGkpKQkmbXrpptuGg0AXq+33uyglRfQdtsxPJ15HJOL6pE/4xS+m3AY373jt3j59F/gtzn369oUUrXedQn5a3lYnR7n5fP5rvmdW7ZsyXKYHW1fVjMcbqjyLyjs2PF2W0dHx1nWHdx117cfz8vLS+q9r4MHD82Ji4tLAoDm5uY6WM/6gHMBdJZ+jfN7LqAVzn0cqceyb9871X/NZ9433+6GjCXwoqWUvJ1hCUFjY9O/19XVLSssLOwR+R469JsHQsnjy5cvtyHSY6swNRo8ePCdpaVl5WVlZbmhstLS0gnjx49fBVx9vPfssz/eEaFN17VrrQee34zDA59OwIrWKdjsvwf/uysL90TYhjKCyzPvOH3++efPtrS0bO+OxOedOHFyaaR9VldXz2hsbHpRQf9R8E05I8RFvNM+oY1Pavpik8vlykxJSSl85ZVNz7z00svvB4NBEhcXlxwG5OlJkyZuh/mLUSGTVzd48OA7Z84s+OX5883nuvd97Znz0aNH/u3gwYPeCBexRwDzq7/HXYvS8VrvE5mSjO8DOGzRCT0nc+oOTnp3bASzHrFD16xZs2HTpk1ZiYmJWR6P5+lLl1qXBAKBU6H1brd7Snh1sD2rjqqJNxw6sOzkobSqquoFv99/NHShhwwZMjkEZEtLy/Zly5YtMrubwzv40KFDL3/00UfPdXV1eV0uV0YIyEAgcK6iYtcTs2bN2m+iCD3KvuyAN1LDr1D8xSSwuFYW3p7m5mavHRQXLlxoM1FdunPnjtbly5cXNTQ0/DwYDLYZhpHsdrunhH6Aq4MyPv744yWM6kwZ1VFr7tDub7P/HR8lBIAUFRWlRBi2Fn6DXXec0CghAKisrFxcWLjgOABSVlY2MQRG92M+rhfHGnKxZmQiFgAgXRTeLzuwf+Vn+O//aUErg2ljnemMdZQOBUBLSkrGpqXdkhQCPz8/7wjYBveKjBLinenN1nIAoCpHnvNOEGD2zo0RATKrdbZvPJaXvzk5BOXevXsfnz9/Xg3jednlYsnEJAz5hhvuPRdwsfUKuhhUHzYdZjWvJAuwlBE8ltHoVnDa3UDCUKp8omM3QwPrdlb7sVuHSD5luLns/ttquhIzGCP6eMe9aD/uRTtnMAfoeSXCDkie9rGabuX+qFOPGSMFHdREgVjA6w0N7xt2PLNWUCur8ZwHnu8kYWTbFfiS4zHY3wX/nFr8llEZRGG0U1Fq4xebKR+PD6kN1mg80bEC1Awyq1dCbUG0UEpWv9sUrCcz8OOkePR4Xp79N7jr5J8RsIFSdo5yW//SQkV5VZIKmmKhaDxeEkKr90/AYM5Z1NIOFtuX4ktLS08TQhZRSklpaWkt+N+tNl28XfhjOJS+LtSf/DMuC4Aoo5i8QFKbDIFTSfbIT7M4Ah2WYEck+FH9Zh/AN+EVU6RtBuo3B2PQ1tGYlZYAT3sXvljXgMqdzWiTMN0qfEuegEVHlC38eq1IR7BOJgAOIKEATqt9mKWw7CJuFZPx83x+xA5Klq8+iAIJsL8kZrdOGso4zo5gnQhV9qsOVuMheYbYs3yvmmc9lagn+iUGarMPVsW0y5FSAUXXYuLjBXZMBLdhmU02UtBjFQzx+ps850EtoLfzpbnVgUN5VOQxWdVR9MtmUiki1Skhq3wiTIBkgRMCKR/CWM6bV+W581kHL7DkMXk+1sQKJK9VcWQEEq/5FjXhIsGF7Ddt7MDhufAqTBYFlHzuWORLYpRBSXnNtowvKaWULDN42W3D+hkNMOQhAfNEN8/stay5U5nv3/AGPLI5TFa/kgrUlb05uW7gOEF1UqWWdhOk8kS9Ks0uT3BDGbbn8Sl54VTla1qZZ542Sy9xnGkgcAAkOoMukQBT1L+TMfci7gGvOecxsSzmXTaYYTk/nuvODSVLmchH5cH5t+hMuyyjuFmdedFXGyij/waoiXhlHlOyHgsMbY5q9G3le/LOu83ywSHRNBXLY1GRtA9vwMPaqU59wVZFG6DoWkkppajS8XyHW8V3t4lEekP09VS7kTp2Ebmsvyli0kWyBSqsyHVlcYIAyviWsmASThhVBjY84wtZ9suaK5RJy4iaaNa8pVKVNINSRi11gSkSheu4o82UkAVmnhymKIgi0TnA/8hRNPKmqqHkVUsnwBR91Meqjiocd5ZASgQKFT4nT1DDA6TUdSOaymXAFEkniZp7FSOBdAU9LOkVqgBQp4BkLieKgLUqkzXvVuDx7EMEQl35URHoIAmODMAqFJIZyjjNKqriE8a8yXynAxsIdgRrp/KabxkYow6kjFKIqqjKZDnhvAFELYNO8w3Jjuc15yLmmjWoUQZlnIT5UgGmjGqyjLtUrXy6oGRRTl2QivqwrJaJG2KZ5DQvsKwmmccHZVVD2fSSLmXk6XxRSHgVU5U6iqqnFJSyYKqAU+QGiJVAh2oClUdhqeLjSgOpSjFkTbwOVRXNGEDB9aCSwFIFHa3DFZBRfi1Q6gBTFk4Rs63zGijrFIg/ylRt7lW3m6kOUagQqiJ5orFONKJtHR0ok/vUAaPKOrbRt2owZZVTJmhRDaKOYW26I1st06yoBFKmk4jD61UCShSfq1OdpTLgUDW6R8t87rqcfZ1BlMr6uq6Vjhf2owGvozDKmG9dyiQCeTSAiwXVdNIP1A2uls7QkYhW/fgzVgIeXVOe6ISFOnSOjjn+uuHsK5F2NM1hLG/jSGfpjoSdjLSJg7Cp7FjaR7ZzXEGcinBJDF8DnZ1Ho7wPrYNadHdINGCLdVMdrU6nMdimqHYgiaF2kn4IXJ8FMJY6iPRxsPqTksbc55ZJP2vHgOnuYwD2tU4k/eycaT891g0F5YDZ7qfQ3SidTAZgG4By4FwHgBtYBpYbZ/l/2EJnC9N0gaQAAAAASUVORK5CYII=";
			return LoadingScreen;
		}());
		webgl.LoadingScreen = LoadingScreen;
	})(webgl = spine.webgl || (spine.webgl = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var webgl;
	(function (webgl) {
		webgl.M00 = 0;
		webgl.M01 = 4;
		webgl.M02 = 8;
		webgl.M03 = 12;
		webgl.M10 = 1;
		webgl.M11 = 5;
		webgl.M12 = 9;
		webgl.M13 = 13;
		webgl.M20 = 2;
		webgl.M21 = 6;
		webgl.M22 = 10;
		webgl.M23 = 14;
		webgl.M30 = 3;
		webgl.M31 = 7;
		webgl.M32 = 11;
		webgl.M33 = 15;
		var Matrix4 = (function () {
			function Matrix4() {
				this.temp = new Float32Array(16);
				this.values = new Float32Array(16);
				var v = this.values;
				v[webgl.M00] = 1;
				v[webgl.M11] = 1;
				v[webgl.M22] = 1;
				v[webgl.M33] = 1;
			}
			Matrix4.prototype.set = function (values) {
				this.values.set(values);
				return this;
			};
			Matrix4.prototype.transpose = function () {
				var t = this.temp;
				var v = this.values;
				t[webgl.M00] = v[webgl.M00];
				t[webgl.M01] = v[webgl.M10];
				t[webgl.M02] = v[webgl.M20];
				t[webgl.M03] = v[webgl.M30];
				t[webgl.M10] = v[webgl.M01];
				t[webgl.M11] = v[webgl.M11];
				t[webgl.M12] = v[webgl.M21];
				t[webgl.M13] = v[webgl.M31];
				t[webgl.M20] = v[webgl.M02];
				t[webgl.M21] = v[webgl.M12];
				t[webgl.M22] = v[webgl.M22];
				t[webgl.M23] = v[webgl.M32];
				t[webgl.M30] = v[webgl.M03];
				t[webgl.M31] = v[webgl.M13];
				t[webgl.M32] = v[webgl.M23];
				t[webgl.M33] = v[webgl.M33];
				return this.set(t);
			};
			Matrix4.prototype.identity = function () {
				var v = this.values;
				v[webgl.M00] = 1;
				v[webgl.M01] = 0;
				v[webgl.M02] = 0;
				v[webgl.M03] = 0;
				v[webgl.M10] = 0;
				v[webgl.M11] = 1;
				v[webgl.M12] = 0;
				v[webgl.M13] = 0;
				v[webgl.M20] = 0;
				v[webgl.M21] = 0;
				v[webgl.M22] = 1;
				v[webgl.M23] = 0;
				v[webgl.M30] = 0;
				v[webgl.M31] = 0;
				v[webgl.M32] = 0;
				v[webgl.M33] = 1;
				return this;
			};
			Matrix4.prototype.invert = function () {
				var v = this.values;
				var t = this.temp;
				var l_det = v[webgl.M30] * v[webgl.M21] * v[webgl.M12] * v[webgl.M03] - v[webgl.M20] * v[webgl.M31] * v[webgl.M12] * v[webgl.M03] - v[webgl.M30] * v[webgl.M11] * v[webgl.M22] * v[webgl.M03]
					+ v[webgl.M10] * v[webgl.M31] * v[webgl.M22] * v[webgl.M03] + v[webgl.M20] * v[webgl.M11] * v[webgl.M32] * v[webgl.M03] - v[webgl.M10] * v[webgl.M21] * v[webgl.M32] * v[webgl.M03]
					- v[webgl.M30] * v[webgl.M21] * v[webgl.M02] * v[webgl.M13] + v[webgl.M20] * v[webgl.M31] * v[webgl.M02] * v[webgl.M13] + v[webgl.M30] * v[webgl.M01] * v[webgl.M22] * v[webgl.M13]
					- v[webgl.M00] * v[webgl.M31] * v[webgl.M22] * v[webgl.M13] - v[webgl.M20] * v[webgl.M01] * v[webgl.M32] * v[webgl.M13] + v[webgl.M00] * v[webgl.M21] * v[webgl.M32] * v[webgl.M13]
					+ v[webgl.M30] * v[webgl.M11] * v[webgl.M02] * v[webgl.M23] - v[webgl.M10] * v[webgl.M31] * v[webgl.M02] * v[webgl.M23] - v[webgl.M30] * v[webgl.M01] * v[webgl.M12] * v[webgl.M23]
					+ v[webgl.M00] * v[webgl.M31] * v[webgl.M12] * v[webgl.M23] + v[webgl.M10] * v[webgl.M01] * v[webgl.M32] * v[webgl.M23] - v[webgl.M00] * v[webgl.M11] * v[webgl.M32] * v[webgl.M23]
					- v[webgl.M20] * v[webgl.M11] * v[webgl.M02] * v[webgl.M33] + v[webgl.M10] * v[webgl.M21] * v[webgl.M02] * v[webgl.M33] + v[webgl.M20] * v[webgl.M01] * v[webgl.M12] * v[webgl.M33]
					- v[webgl.M00] * v[webgl.M21] * v[webgl.M12] * v[webgl.M33] - v[webgl.M10] * v[webgl.M01] * v[webgl.M22] * v[webgl.M33] + v[webgl.M00] * v[webgl.M11] * v[webgl.M22] * v[webgl.M33];
				if (l_det == 0)
					throw new Error("non-invertible matrix");
				var inv_det = 1.0 / l_det;
				t[webgl.M00] = v[webgl.M12] * v[webgl.M23] * v[webgl.M31] - v[webgl.M13] * v[webgl.M22] * v[webgl.M31] + v[webgl.M13] * v[webgl.M21] * v[webgl.M32]
					- v[webgl.M11] * v[webgl.M23] * v[webgl.M32] - v[webgl.M12] * v[webgl.M21] * v[webgl.M33] + v[webgl.M11] * v[webgl.M22] * v[webgl.M33];
				t[webgl.M01] = v[webgl.M03] * v[webgl.M22] * v[webgl.M31] - v[webgl.M02] * v[webgl.M23] * v[webgl.M31] - v[webgl.M03] * v[webgl.M21] * v[webgl.M32]
					+ v[webgl.M01] * v[webgl.M23] * v[webgl.M32] + v[webgl.M02] * v[webgl.M21] * v[webgl.M33] - v[webgl.M01] * v[webgl.M22] * v[webgl.M33];
				t[webgl.M02] = v[webgl.M02] * v[webgl.M13] * v[webgl.M31] - v[webgl.M03] * v[webgl.M12] * v[webgl.M31] + v[webgl.M03] * v[webgl.M11] * v[webgl.M32]
					- v[webgl.M01] * v[webgl.M13] * v[webgl.M32] - v[webgl.M02] * v[webgl.M11] * v[webgl.M33] + v[webgl.M01] * v[webgl.M12] * v[webgl.M33];
				t[webgl.M03] = v[webgl.M03] * v[webgl.M12] * v[webgl.M21] - v[webgl.M02] * v[webgl.M13] * v[webgl.M21] - v[webgl.M03] * v[webgl.M11] * v[webgl.M22]
					+ v[webgl.M01] * v[webgl.M13] * v[webgl.M22] + v[webgl.M02] * v[webgl.M11] * v[webgl.M23] - v[webgl.M01] * v[webgl.M12] * v[webgl.M23];
				t[webgl.M10] = v[webgl.M13] * v[webgl.M22] * v[webgl.M30] - v[webgl.M12] * v[webgl.M23] * v[webgl.M30] - v[webgl.M13] * v[webgl.M20] * v[webgl.M32]
					+ v[webgl.M10] * v[webgl.M23] * v[webgl.M32] + v[webgl.M12] * v[webgl.M20] * v[webgl.M33] - v[webgl.M10] * v[webgl.M22] * v[webgl.M33];
				t[webgl.M11] = v[webgl.M02] * v[webgl.M23] * v[webgl.M30] - v[webgl.M03] * v[webgl.M22] * v[webgl.M30] + v[webgl.M03] * v[webgl.M20] * v[webgl.M32]
					- v[webgl.M00] * v[webgl.M23] * v[webgl.M32] - v[webgl.M02] * v[webgl.M20] * v[webgl.M33] + v[webgl.M00] * v[webgl.M22] * v[webgl.M33];
				t[webgl.M12] = v[webgl.M03] * v[webgl.M12] * v[webgl.M30] - v[webgl.M02] * v[webgl.M13] * v[webgl.M30] - v[webgl.M03] * v[webgl.M10] * v[webgl.M32]
					+ v[webgl.M00] * v[webgl.M13] * v[webgl.M32] + v[webgl.M02] * v[webgl.M10] * v[webgl.M33] - v[webgl.M00] * v[webgl.M12] * v[webgl.M33];
				t[webgl.M13] = v[webgl.M02] * v[webgl.M13] * v[webgl.M20] - v[webgl.M03] * v[webgl.M12] * v[webgl.M20] + v[webgl.M03] * v[webgl.M10] * v[webgl.M22]
					- v[webgl.M00] * v[webgl.M13] * v[webgl.M22] - v[webgl.M02] * v[webgl.M10] * v[webgl.M23] + v[webgl.M00] * v[webgl.M12] * v[webgl.M23];
				t[webgl.M20] = v[webgl.M11] * v[webgl.M23] * v[webgl.M30] - v[webgl.M13] * v[webgl.M21] * v[webgl.M30] + v[webgl.M13] * v[webgl.M20] * v[webgl.M31]
					- v[webgl.M10] * v[webgl.M23] * v[webgl.M31] - v[webgl.M11] * v[webgl.M20] * v[webgl.M33] + v[webgl.M10] * v[webgl.M21] * v[webgl.M33];
				t[webgl.M21] = v[webgl.M03] * v[webgl.M21] * v[webgl.M30] - v[webgl.M01] * v[webgl.M23] * v[webgl.M30] - v[webgl.M03] * v[webgl.M20] * v[webgl.M31]
					+ v[webgl.M00] * v[webgl.M23] * v[webgl.M31] + v[webgl.M01] * v[webgl.M20] * v[webgl.M33] - v[webgl.M00] * v[webgl.M21] * v[webgl.M33];
				t[webgl.M22] = v[webgl.M01] * v[webgl.M13] * v[webgl.M30] - v[webgl.M03] * v[webgl.M11] * v[webgl.M30] + v[webgl.M03] * v[webgl.M10] * v[webgl.M31]
					- v[webgl.M00] * v[webgl.M13] * v[webgl.M31] - v[webgl.M01] * v[webgl.M10] * v[webgl.M33] + v[webgl.M00] * v[webgl.M11] * v[webgl.M33];
				t[webgl.M23] = v[webgl.M03] * v[webgl.M11] * v[webgl.M20] - v[webgl.M01] * v[webgl.M13] * v[webgl.M20] - v[webgl.M03] * v[webgl.M10] * v[webgl.M21]
					+ v[webgl.M00] * v[webgl.M13] * v[webgl.M21] + v[webgl.M01] * v[webgl.M10] * v[webgl.M23] - v[webgl.M00] * v[webgl.M11] * v[webgl.M23];
				t[webgl.M30] = v[webgl.M12] * v[webgl.M21] * v[webgl.M30] - v[webgl.M11] * v[webgl.M22] * v[webgl.M30] - v[webgl.M12] * v[webgl.M20] * v[webgl.M31]
					+ v[webgl.M10] * v[webgl.M22] * v[webgl.M31] + v[webgl.M11] * v[webgl.M20] * v[webgl.M32] - v[webgl.M10] * v[webgl.M21] * v[webgl.M32];
				t[webgl.M31] = v[webgl.M01] * v[webgl.M22] * v[webgl.M30] - v[webgl.M02] * v[webgl.M21] * v[webgl.M30] + v[webgl.M02] * v[webgl.M20] * v[webgl.M31]
					- v[webgl.M00] * v[webgl.M22] * v[webgl.M31] - v[webgl.M01] * v[webgl.M20] * v[webgl.M32] + v[webgl.M00] * v[webgl.M21] * v[webgl.M32];
				t[webgl.M32] = v[webgl.M02] * v[webgl.M11] * v[webgl.M30] - v[webgl.M01] * v[webgl.M12] * v[webgl.M30] - v[webgl.M02] * v[webgl.M10] * v[webgl.M31]
					+ v[webgl.M00] * v[webgl.M12] * v[webgl.M31] + v[webgl.M01] * v[webgl.M10] * v[webgl.M32] - v[webgl.M00] * v[webgl.M11] * v[webgl.M32];
				t[webgl.M33] = v[webgl.M01] * v[webgl.M12] * v[webgl.M20] - v[webgl.M02] * v[webgl.M11] * v[webgl.M20] + v[webgl.M02] * v[webgl.M10] * v[webgl.M21]
					- v[webgl.M00] * v[webgl.M12] * v[webgl.M21] - v[webgl.M01] * v[webgl.M10] * v[webgl.M22] + v[webgl.M00] * v[webgl.M11] * v[webgl.M22];
				v[webgl.M00] = t[webgl.M00] * inv_det;
				v[webgl.M01] = t[webgl.M01] * inv_det;
				v[webgl.M02] = t[webgl.M02] * inv_det;
				v[webgl.M03] = t[webgl.M03] * inv_det;
				v[webgl.M10] = t[webgl.M10] * inv_det;
				v[webgl.M11] = t[webgl.M11] * inv_det;
				v[webgl.M12] = t[webgl.M12] * inv_det;
				v[webgl.M13] = t[webgl.M13] * inv_det;
				v[webgl.M20] = t[webgl.M20] * inv_det;
				v[webgl.M21] = t[webgl.M21] * inv_det;
				v[webgl.M22] = t[webgl.M22] * inv_det;
				v[webgl.M23] = t[webgl.M23] * inv_det;
				v[webgl.M30] = t[webgl.M30] * inv_det;
				v[webgl.M31] = t[webgl.M31] * inv_det;
				v[webgl.M32] = t[webgl.M32] * inv_det;
				v[webgl.M33] = t[webgl.M33] * inv_det;
				return this;
			};
			Matrix4.prototype.determinant = function () {
				var v = this.values;
				return v[webgl.M30] * v[webgl.M21] * v[webgl.M12] * v[webgl.M03] - v[webgl.M20] * v[webgl.M31] * v[webgl.M12] * v[webgl.M03] - v[webgl.M30] * v[webgl.M11] * v[webgl.M22] * v[webgl.M03]
					+ v[webgl.M10] * v[webgl.M31] * v[webgl.M22] * v[webgl.M03] + v[webgl.M20] * v[webgl.M11] * v[webgl.M32] * v[webgl.M03] - v[webgl.M10] * v[webgl.M21] * v[webgl.M32] * v[webgl.M03]
					- v[webgl.M30] * v[webgl.M21] * v[webgl.M02] * v[webgl.M13] + v[webgl.M20] * v[webgl.M31] * v[webgl.M02] * v[webgl.M13] + v[webgl.M30] * v[webgl.M01] * v[webgl.M22] * v[webgl.M13]
					- v[webgl.M00] * v[webgl.M31] * v[webgl.M22] * v[webgl.M13] - v[webgl.M20] * v[webgl.M01] * v[webgl.M32] * v[webgl.M13] + v[webgl.M00] * v[webgl.M21] * v[webgl.M32] * v[webgl.M13]
					+ v[webgl.M30] * v[webgl.M11] * v[webgl.M02] * v[webgl.M23] - v[webgl.M10] * v[webgl.M31] * v[webgl.M02] * v[webgl.M23] - v[webgl.M30] * v[webgl.M01] * v[webgl.M12] * v[webgl.M23]
					+ v[webgl.M00] * v[webgl.M31] * v[webgl.M12] * v[webgl.M23] + v[webgl.M10] * v[webgl.M01] * v[webgl.M32] * v[webgl.M23] - v[webgl.M00] * v[webgl.M11] * v[webgl.M32] * v[webgl.M23]
					- v[webgl.M20] * v[webgl.M11] * v[webgl.M02] * v[webgl.M33] + v[webgl.M10] * v[webgl.M21] * v[webgl.M02] * v[webgl.M33] + v[webgl.M20] * v[webgl.M01] * v[webgl.M12] * v[webgl.M33]
					- v[webgl.M00] * v[webgl.M21] * v[webgl.M12] * v[webgl.M33] - v[webgl.M10] * v[webgl.M01] * v[webgl.M22] * v[webgl.M33] + v[webgl.M00] * v[webgl.M11] * v[webgl.M22] * v[webgl.M33];
			};
			Matrix4.prototype.translate = function (x, y, z) {
				var v = this.values;
				v[webgl.M03] += x;
				v[webgl.M13] += y;
				v[webgl.M23] += z;
				return this;
			};
			Matrix4.prototype.copy = function () {
				return new Matrix4().set(this.values);
			};
			Matrix4.prototype.projection = function (near, far, fovy, aspectRatio) {
				this.identity();
				var l_fd = (1.0 / Math.tan((fovy * (Math.PI / 180)) / 2.0));
				var l_a1 = (far + near) / (near - far);
				var l_a2 = (2 * far * near) / (near - far);
				var v = this.values;
				v[webgl.M00] = l_fd / aspectRatio;
				v[webgl.M10] = 0;
				v[webgl.M20] = 0;
				v[webgl.M30] = 0;
				v[webgl.M01] = 0;
				v[webgl.M11] = l_fd;
				v[webgl.M21] = 0;
				v[webgl.M31] = 0;
				v[webgl.M02] = 0;
				v[webgl.M12] = 0;
				v[webgl.M22] = l_a1;
				v[webgl.M32] = -1;
				v[webgl.M03] = 0;
				v[webgl.M13] = 0;
				v[webgl.M23] = l_a2;
				v[webgl.M33] = 0;
				return this;
			};
			Matrix4.prototype.ortho2d = function (x, y, width, height) {
				return this.ortho(x, x + width, y, y + height, 0, 1);
			};
			Matrix4.prototype.ortho = function (left, right, bottom, top, near, far) {
				this.identity();
				var x_orth = 2 / (right - left);
				var y_orth = 2 / (top - bottom);
				var z_orth = -2 / (far - near);
				var tx = -(right + left) / (right - left);
				var ty = -(top + bottom) / (top - bottom);
				var tz = -(far + near) / (far - near);
				var v = this.values;
				v[webgl.M00] = x_orth;
				v[webgl.M10] = 0;
				v[webgl.M20] = 0;
				v[webgl.M30] = 0;
				v[webgl.M01] = 0;
				v[webgl.M11] = y_orth;
				v[webgl.M21] = 0;
				v[webgl.M31] = 0;
				v[webgl.M02] = 0;
				v[webgl.M12] = 0;
				v[webgl.M22] = z_orth;
				v[webgl.M32] = 0;
				v[webgl.M03] = tx;
				v[webgl.M13] = ty;
				v[webgl.M23] = tz;
				v[webgl.M33] = 1;
				return this;
			};
			Matrix4.prototype.multiply = function (matrix) {
				var t = this.temp;
				var v = this.values;
				var m = matrix.values;
				t[webgl.M00] = v[webgl.M00] * m[webgl.M00] + v[webgl.M01] * m[webgl.M10] + v[webgl.M02] * m[webgl.M20] + v[webgl.M03] * m[webgl.M30];
				t[webgl.M01] = v[webgl.M00] * m[webgl.M01] + v[webgl.M01] * m[webgl.M11] + v[webgl.M02] * m[webgl.M21] + v[webgl.M03] * m[webgl.M31];
				t[webgl.M02] = v[webgl.M00] * m[webgl.M02] + v[webgl.M01] * m[webgl.M12] + v[webgl.M02] * m[webgl.M22] + v[webgl.M03] * m[webgl.M32];
				t[webgl.M03] = v[webgl.M00] * m[webgl.M03] + v[webgl.M01] * m[webgl.M13] + v[webgl.M02] * m[webgl.M23] + v[webgl.M03] * m[webgl.M33];
				t[webgl.M10] = v[webgl.M10] * m[webgl.M00] + v[webgl.M11] * m[webgl.M10] + v[webgl.M12] * m[webgl.M20] + v[webgl.M13] * m[webgl.M30];
				t[webgl.M11] = v[webgl.M10] * m[webgl.M01] + v[webgl.M11] * m[webgl.M11] + v[webgl.M12] * m[webgl.M21] + v[webgl.M13] * m[webgl.M31];
				t[webgl.M12] = v[webgl.M10] * m[webgl.M02] + v[webgl.M11] * m[webgl.M12] + v[webgl.M12] * m[webgl.M22] + v[webgl.M13] * m[webgl.M32];
				t[webgl.M13] = v[webgl.M10] * m[webgl.M03] + v[webgl.M11] * m[webgl.M13] + v[webgl.M12] * m[webgl.M23] + v[webgl.M13] * m[webgl.M33];
				t[webgl.M20] = v[webgl.M20] * m[webgl.M00] + v[webgl.M21] * m[webgl.M10] + v[webgl.M22] * m[webgl.M20] + v[webgl.M23] * m[webgl.M30];
				t[webgl.M21] = v[webgl.M20] * m[webgl.M01] + v[webgl.M21] * m[webgl.M11] + v[webgl.M22] * m[webgl.M21] + v[webgl.M23] * m[webgl.M31];
				t[webgl.M22] = v[webgl.M20] * m[webgl.M02] + v[webgl.M21] * m[webgl.M12] + v[webgl.M22] * m[webgl.M22] + v[webgl.M23] * m[webgl.M32];
				t[webgl.M23] = v[webgl.M20] * m[webgl.M03] + v[webgl.M21] * m[webgl.M13] + v[webgl.M22] * m[webgl.M23] + v[webgl.M23] * m[webgl.M33];
				t[webgl.M30] = v[webgl.M30] * m[webgl.M00] + v[webgl.M31] * m[webgl.M10] + v[webgl.M32] * m[webgl.M20] + v[webgl.M33] * m[webgl.M30];
				t[webgl.M31] = v[webgl.M30] * m[webgl.M01] + v[webgl.M31] * m[webgl.M11] + v[webgl.M32] * m[webgl.M21] + v[webgl.M33] * m[webgl.M31];
				t[webgl.M32] = v[webgl.M30] * m[webgl.M02] + v[webgl.M31] * m[webgl.M12] + v[webgl.M32] * m[webgl.M22] + v[webgl.M33] * m[webgl.M32];
				t[webgl.M33] = v[webgl.M30] * m[webgl.M03] + v[webgl.M31] * m[webgl.M13] + v[webgl.M32] * m[webgl.M23] + v[webgl.M33] * m[webgl.M33];
				return this.set(this.temp);
			};
			Matrix4.prototype.multiplyLeft = function (matrix) {
				var t = this.temp;
				var v = this.values;
				var m = matrix.values;
				t[webgl.M00] = m[webgl.M00] * v[webgl.M00] + m[webgl.M01] * v[webgl.M10] + m[webgl.M02] * v[webgl.M20] + m[webgl.M03] * v[webgl.M30];
				t[webgl.M01] = m[webgl.M00] * v[webgl.M01] + m[webgl.M01] * v[webgl.M11] + m[webgl.M02] * v[webgl.M21] + m[webgl.M03] * v[webgl.M31];
				t[webgl.M02] = m[webgl.M00] * v[webgl.M02] + m[webgl.M01] * v[webgl.M12] + m[webgl.M02] * v[webgl.M22] + m[webgl.M03] * v[webgl.M32];
				t[webgl.M03] = m[webgl.M00] * v[webgl.M03] + m[webgl.M01] * v[webgl.M13] + m[webgl.M02] * v[webgl.M23] + m[webgl.M03] * v[webgl.M33];
				t[webgl.M10] = m[webgl.M10] * v[webgl.M00] + m[webgl.M11] * v[webgl.M10] + m[webgl.M12] * v[webgl.M20] + m[webgl.M13] * v[webgl.M30];
				t[webgl.M11] = m[webgl.M10] * v[webgl.M01] + m[webgl.M11] * v[webgl.M11] + m[webgl.M12] * v[webgl.M21] + m[webgl.M13] * v[webgl.M31];
				t[webgl.M12] = m[webgl.M10] * v[webgl.M02] + m[webgl.M11] * v[webgl.M12] + m[webgl.M12] * v[webgl.M22] + m[webgl.M13] * v[webgl.M32];
				t[webgl.M13] = m[webgl.M10] * v[webgl.M03] + m[webgl.M11] * v[webgl.M13] + m[webgl.M12] * v[webgl.M23] + m[webgl.M13] * v[webgl.M33];
				t[webgl.M20] = m[webgl.M20] * v[webgl.M00] + m[webgl.M21] * v[webgl.M10] + m[webgl.M22] * v[webgl.M20] + m[webgl.M23] * v[webgl.M30];
				t[webgl.M21] = m[webgl.M20] * v[webgl.M01] + m[webgl.M21] * v[webgl.M11] + m[webgl.M22] * v[webgl.M21] + m[webgl.M23] * v[webgl.M31];
				t[webgl.M22] = m[webgl.M20] * v[webgl.M02] + m[webgl.M21] * v[webgl.M12] + m[webgl.M22] * v[webgl.M22] + m[webgl.M23] * v[webgl.M32];
				t[webgl.M23] = m[webgl.M20] * v[webgl.M03] + m[webgl.M21] * v[webgl.M13] + m[webgl.M22] * v[webgl.M23] + m[webgl.M23] * v[webgl.M33];
				t[webgl.M30] = m[webgl.M30] * v[webgl.M00] + m[webgl.M31] * v[webgl.M10] + m[webgl.M32] * v[webgl.M20] + m[webgl.M33] * v[webgl.M30];
				t[webgl.M31] = m[webgl.M30] * v[webgl.M01] + m[webgl.M31] * v[webgl.M11] + m[webgl.M32] * v[webgl.M21] + m[webgl.M33] * v[webgl.M31];
				t[webgl.M32] = m[webgl.M30] * v[webgl.M02] + m[webgl.M31] * v[webgl.M12] + m[webgl.M32] * v[webgl.M22] + m[webgl.M33] * v[webgl.M32];
				t[webgl.M33] = m[webgl.M30] * v[webgl.M03] + m[webgl.M31] * v[webgl.M13] + m[webgl.M32] * v[webgl.M23] + m[webgl.M33] * v[webgl.M33];
				return this.set(this.temp);
			};
			Matrix4.prototype.lookAt = function (position, direction, up) {
				Matrix4.initTemps();
				var xAxis = Matrix4.xAxis, yAxis = Matrix4.yAxis, zAxis = Matrix4.zAxis;
				zAxis.setFrom(direction).normalize();
				xAxis.setFrom(direction).normalize();
				xAxis.cross(up).normalize();
				yAxis.setFrom(xAxis).cross(zAxis).normalize();
				this.identity();
				var val = this.values;
				val[webgl.M00] = xAxis.x;
				val[webgl.M01] = xAxis.y;
				val[webgl.M02] = xAxis.z;
				val[webgl.M10] = yAxis.x;
				val[webgl.M11] = yAxis.y;
				val[webgl.M12] = yAxis.z;
				val[webgl.M20] = -zAxis.x;
				val[webgl.M21] = -zAxis.y;
				val[webgl.M22] = -zAxis.z;
				Matrix4.tmpMatrix.identity();
				Matrix4.tmpMatrix.values[webgl.M03] = -position.x;
				Matrix4.tmpMatrix.values[webgl.M13] = -position.y;
				Matrix4.tmpMatrix.values[webgl.M23] = -position.z;
				this.multiply(Matrix4.tmpMatrix);
				return this;
			};
			Matrix4.initTemps = function () {
				if (Matrix4.xAxis === null)
					Matrix4.xAxis = new webgl.Vector3();
				if (Matrix4.yAxis === null)
					Matrix4.yAxis = new webgl.Vector3();
				if (Matrix4.zAxis === null)
					Matrix4.zAxis = new webgl.Vector3();
			};
			Matrix4.xAxis = null;
			Matrix4.yAxis = null;
			Matrix4.zAxis = null;
			Matrix4.tmpMatrix = new Matrix4();
			return Matrix4;
		}());
		webgl.Matrix4 = Matrix4;
	})(webgl = spine.webgl || (spine.webgl = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var webgl;
	(function (webgl) {
		var Mesh = (function () {
			function Mesh(context, attributes, maxVertices, maxIndices) {
				this.attributes = attributes;
				this.verticesLength = 0;
				this.dirtyVertices = false;
				this.indicesLength = 0;
				this.dirtyIndices = false;
				this.elementsPerVertex = 0;
				this.context = context instanceof webgl.ManagedWebGLRenderingContext ? context : new webgl.ManagedWebGLRenderingContext(context);
				this.elementsPerVertex = 0;
				for (var i = 0; i < attributes.length; i++) {
					this.elementsPerVertex += attributes[i].numElements;
				}
				this.vertices = new Float32Array(maxVertices * this.elementsPerVertex);
				this.indices = new Uint16Array(maxIndices);
				this.context.addRestorable(this);
			}
			Mesh.prototype.getAttributes = function () { return this.attributes; };
			Mesh.prototype.maxVertices = function () { return this.vertices.length / this.elementsPerVertex; };
			Mesh.prototype.numVertices = function () { return this.verticesLength / this.elementsPerVertex; };
			Mesh.prototype.setVerticesLength = function (length) {
				this.dirtyVertices = true;
				this.verticesLength = length;
			};
			Mesh.prototype.getVertices = function () { return this.vertices; };
			Mesh.prototype.maxIndices = function () { return this.indices.length; };
			Mesh.prototype.numIndices = function () { return this.indicesLength; };
			Mesh.prototype.setIndicesLength = function (length) {
				this.dirtyIndices = true;
				this.indicesLength = length;
			};
			Mesh.prototype.getIndices = function () { return this.indices; };
			;
			Mesh.prototype.getVertexSizeInFloats = function () {
				var size = 0;
				for (var i = 0; i < this.attributes.length; i++) {
					var attribute = this.attributes[i];
					size += attribute.numElements;
				}
				return size;
			};
			Mesh.prototype.setVertices = function (vertices) {
				this.dirtyVertices = true;
				if (vertices.length > this.vertices.length)
					throw Error("Mesh can't store more than " + this.maxVertices() + " vertices");
				this.vertices.set(vertices, 0);
				this.verticesLength = vertices.length;
			};
			Mesh.prototype.setIndices = function (indices) {
				this.dirtyIndices = true;
				if (indices.length > this.indices.length)
					throw Error("Mesh can't store more than " + this.maxIndices() + " indices");
				this.indices.set(indices, 0);
				this.indicesLength = indices.length;
			};
			Mesh.prototype.draw = function (shader, primitiveType) {
				this.drawWithOffset(shader, primitiveType, 0, this.indicesLength > 0 ? this.indicesLength : this.verticesLength / this.elementsPerVertex);
			};
			Mesh.prototype.drawWithOffset = function (shader, primitiveType, offset, count) {
				var gl = this.context.gl;
				if (this.dirtyVertices || this.dirtyIndices)
					this.update();
				this.bind(shader);
				if (this.indicesLength > 0) {
					gl.drawElements(primitiveType, count, gl.UNSIGNED_SHORT, offset * 2);
				}
				else {
					gl.drawArrays(primitiveType, offset, count);
				}
				this.unbind(shader);
			};
			Mesh.prototype.bind = function (shader) {
				var gl = this.context.gl;
				gl.bindBuffer(gl.ARRAY_BUFFER, this.verticesBuffer);
				var offset = 0;
				for (var i = 0; i < this.attributes.length; i++) {
					var attrib = this.attributes[i];
					var location_1 = shader.getAttributeLocation(attrib.name);
					gl.enableVertexAttribArray(location_1);
					gl.vertexAttribPointer(location_1, attrib.numElements, gl.FLOAT, false, this.elementsPerVertex * 4, offset * 4);
					offset += attrib.numElements;
				}
				if (this.indicesLength > 0)
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
			};
			Mesh.prototype.unbind = function (shader) {
				var gl = this.context.gl;
				for (var i = 0; i < this.attributes.length; i++) {
					var attrib = this.attributes[i];
					var location_2 = shader.getAttributeLocation(attrib.name);
					gl.disableVertexAttribArray(location_2);
				}
				gl.bindBuffer(gl.ARRAY_BUFFER, null);
				if (this.indicesLength > 0)
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
			};
			Mesh.prototype.update = function () {
				var gl = this.context.gl;
				if (this.dirtyVertices) {
					if (!this.verticesBuffer) {
						this.verticesBuffer = gl.createBuffer();
					}
					gl.bindBuffer(gl.ARRAY_BUFFER, this.verticesBuffer);
					gl.bufferData(gl.ARRAY_BUFFER, this.vertices.subarray(0, this.verticesLength), gl.DYNAMIC_DRAW);
					this.dirtyVertices = false;
				}
				if (this.dirtyIndices) {
					if (!this.indicesBuffer) {
						this.indicesBuffer = gl.createBuffer();
					}
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
					gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices.subarray(0, this.indicesLength), gl.DYNAMIC_DRAW);
					this.dirtyIndices = false;
				}
			};
			Mesh.prototype.restore = function () {
				this.verticesBuffer = null;
				this.indicesBuffer = null;
				this.update();
			};
			Mesh.prototype.dispose = function () {
				this.context.removeRestorable(this);
				var gl = this.context.gl;
				gl.deleteBuffer(this.verticesBuffer);
				gl.deleteBuffer(this.indicesBuffer);
			};
			return Mesh;
		}());
		webgl.Mesh = Mesh;
		var VertexAttribute = (function () {
			function VertexAttribute(name, type, numElements) {
				this.name = name;
				this.type = type;
				this.numElements = numElements;
			}
			return VertexAttribute;
		}());
		webgl.VertexAttribute = VertexAttribute;
		var Position2Attribute = (function (_super) {
			__extends(Position2Attribute, _super);
			function Position2Attribute() {
				return _super.call(this, webgl.Shader.POSITION, VertexAttributeType.Float, 2) || this;
			}
			return Position2Attribute;
		}(VertexAttribute));
		webgl.Position2Attribute = Position2Attribute;
		var Position3Attribute = (function (_super) {
			__extends(Position3Attribute, _super);
			function Position3Attribute() {
				return _super.call(this, webgl.Shader.POSITION, VertexAttributeType.Float, 3) || this;
			}
			return Position3Attribute;
		}(VertexAttribute));
		webgl.Position3Attribute = Position3Attribute;
		var TexCoordAttribute = (function (_super) {
			__extends(TexCoordAttribute, _super);
			function TexCoordAttribute(unit) {
				if (unit === void 0) { unit = 0; }
				return _super.call(this, webgl.Shader.TEXCOORDS + (unit == 0 ? "" : unit), VertexAttributeType.Float, 2) || this;
			}
			return TexCoordAttribute;
		}(VertexAttribute));
		webgl.TexCoordAttribute = TexCoordAttribute;
		var ColorAttribute = (function (_super) {
			__extends(ColorAttribute, _super);
			function ColorAttribute() {
				return _super.call(this, webgl.Shader.COLOR, VertexAttributeType.Float, 4) || this;
			}
			return ColorAttribute;
		}(VertexAttribute));
		webgl.ColorAttribute = ColorAttribute;
		var Color2Attribute = (function (_super) {
			__extends(Color2Attribute, _super);
			function Color2Attribute() {
				return _super.call(this, webgl.Shader.COLOR2, VertexAttributeType.Float, 4) || this;
			}
			return Color2Attribute;
		}(VertexAttribute));
		webgl.Color2Attribute = Color2Attribute;
		var VertexAttributeType;
		(function (VertexAttributeType) {
			VertexAttributeType[VertexAttributeType["Float"] = 0] = "Float";
		})(VertexAttributeType = webgl.VertexAttributeType || (webgl.VertexAttributeType = {}));
	})(webgl = spine.webgl || (spine.webgl = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var webgl;
	(function (webgl) {
		var PolygonBatcher = (function () {
			function PolygonBatcher(context, twoColorTint, maxVertices) {
				if (twoColorTint === void 0) { twoColorTint = true; }
				if (maxVertices === void 0) { maxVertices = 10920; }
				this.isDrawing = false;
				this.shader = null;
				this.lastTexture = null;
				this.verticesLength = 0;
				this.indicesLength = 0;
				if (maxVertices > 10920)
					throw new Error("Can't have more than 10920 triangles per batch: " + maxVertices);
				this.context = context instanceof webgl.ManagedWebGLRenderingContext ? context : new webgl.ManagedWebGLRenderingContext(context);
				var attributes = twoColorTint ?
					[new webgl.Position2Attribute(), new webgl.ColorAttribute(), new webgl.TexCoordAttribute(), new webgl.Color2Attribute()] :
					[new webgl.Position2Attribute(), new webgl.ColorAttribute(), new webgl.TexCoordAttribute()];
				this.mesh = new webgl.Mesh(context, attributes, maxVertices, maxVertices * 3);
				this.srcBlend = this.context.gl.SRC_ALPHA;
				this.dstBlend = this.context.gl.ONE_MINUS_SRC_ALPHA;
			}
			PolygonBatcher.prototype.begin = function (shader) {
				var gl = this.context.gl;
				if (this.isDrawing)
					throw new Error("PolygonBatch is already drawing. Call PolygonBatch.end() before calling PolygonBatch.begin()");
				this.drawCalls = 0;
				this.shader = shader;
				this.lastTexture = null;
				this.isDrawing = true;
				gl.enable(gl.BLEND);
				gl.blendFunc(this.srcBlend, this.dstBlend);
			};
			PolygonBatcher.prototype.setBlendMode = function (srcBlend, dstBlend) {
				var gl = this.context.gl;
				this.srcBlend = srcBlend;
				this.dstBlend = dstBlend;
				if (this.isDrawing) {
					this.flush();
					gl.blendFunc(this.srcBlend, this.dstBlend);
				}
			};
			PolygonBatcher.prototype.draw = function (texture, vertices, indices) {
				if (texture != this.lastTexture) {
					this.flush();
					this.lastTexture = texture;
				}
				else if (this.verticesLength + vertices.length > this.mesh.getVertices().length ||
					this.indicesLength + indices.length > this.mesh.getIndices().length) {
					this.flush();
				}
				var indexStart = this.mesh.numVertices();
				this.mesh.getVertices().set(vertices, this.verticesLength);
				this.verticesLength += vertices.length;
				this.mesh.setVerticesLength(this.verticesLength);
				var indicesArray = this.mesh.getIndices();
				for (var i = this.indicesLength, j = 0; j < indices.length; i++, j++)
					indicesArray[i] = indices[j] + indexStart;
				this.indicesLength += indices.length;
				this.mesh.setIndicesLength(this.indicesLength);
			};
			PolygonBatcher.prototype.flush = function () {
				var gl = this.context.gl;
				if (this.verticesLength == 0)
					return;
				this.lastTexture.bind();
				this.mesh.draw(this.shader, gl.TRIANGLES);
				this.verticesLength = 0;
				this.indicesLength = 0;
				this.mesh.setVerticesLength(0);
				this.mesh.setIndicesLength(0);
				this.drawCalls++;
			};
			PolygonBatcher.prototype.end = function () {
				var gl = this.context.gl;
				if (!this.isDrawing)
					throw new Error("PolygonBatch is not drawing. Call PolygonBatch.begin() before calling PolygonBatch.end()");
				if (this.verticesLength > 0 || this.indicesLength > 0)
					this.flush();
				this.shader = null;
				this.lastTexture = null;
				this.isDrawing = false;
				gl.disable(gl.BLEND);
			};
			PolygonBatcher.prototype.getDrawCalls = function () { return this.drawCalls; };
			PolygonBatcher.prototype.dispose = function () {
				this.mesh.dispose();
			};
			return PolygonBatcher;
		}());
		webgl.PolygonBatcher = PolygonBatcher;
	})(webgl = spine.webgl || (spine.webgl = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var webgl;
	(function (webgl) {
		var SceneRenderer = (function () {
			function SceneRenderer(canvas, context, twoColorTint) {
				if (twoColorTint === void 0) { twoColorTint = true; }
				this.twoColorTint = false;
				this.activeRenderer = null;
				this.QUAD = [
					0, 0, 1, 1, 1, 1, 0, 0,
					0, 0, 1, 1, 1, 1, 0, 0,
					0, 0, 1, 1, 1, 1, 0, 0,
					0, 0, 1, 1, 1, 1, 0, 0,
				];
				this.QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0];
				this.WHITE = new spine.Color(1, 1, 1, 1);
				this.canvas = canvas;
				this.context = context instanceof webgl.ManagedWebGLRenderingContext ? context : new webgl.ManagedWebGLRenderingContext(context);
				this.twoColorTint = twoColorTint;
				this.camera = new webgl.OrthoCamera(canvas.width, canvas.height);
				this.batcherShader = twoColorTint ? webgl.Shader.newTwoColoredTextured(this.context) : webgl.Shader.newColoredTextured(this.context);
				this.batcher = new webgl.PolygonBatcher(this.context, twoColorTint);
				this.shapesShader = webgl.Shader.newColored(this.context);
				this.shapes = new webgl.ShapeRenderer(this.context);
				this.skeletonRenderer = new webgl.SkeletonRenderer(this.context, twoColorTint);
				this.skeletonDebugRenderer = new webgl.SkeletonDebugRenderer(this.context);
			}
			SceneRenderer.prototype.begin = function () {
				this.camera.update();
				this.enableRenderer(this.batcher);
			};
			SceneRenderer.prototype.drawSkeleton = function (skeleton, premultipliedAlpha, slotRangeStart, slotRangeEnd) {
				if (premultipliedAlpha === void 0) { premultipliedAlpha = false; }
				if (slotRangeStart === void 0) { slotRangeStart = -1; }
				if (slotRangeEnd === void 0) { slotRangeEnd = -1; }
				this.enableRenderer(this.batcher);
				this.skeletonRenderer.premultipliedAlpha = premultipliedAlpha;
				this.skeletonRenderer.draw(this.batcher, skeleton, slotRangeStart, slotRangeEnd);
			};
			SceneRenderer.prototype.drawSkeletonDebug = function (skeleton, premultipliedAlpha, ignoredBones) {
				if (premultipliedAlpha === void 0) { premultipliedAlpha = false; }
				if (ignoredBones === void 0) { ignoredBones = null; }
				this.enableRenderer(this.shapes);
				this.skeletonDebugRenderer.premultipliedAlpha = premultipliedAlpha;
				this.skeletonDebugRenderer.draw(this.shapes, skeleton, ignoredBones);
			};
			SceneRenderer.prototype.drawTexture = function (texture, x, y, width, height, color) {
				if (color === void 0) { color = null; }
				this.enableRenderer(this.batcher);
				if (color === null)
					color = this.WHITE;
				var quad = this.QUAD;
				var i = 0;
				quad[i++] = x;
				quad[i++] = y;
				quad[i++] = color.r;
				quad[i++] = color.g;
				quad[i++] = color.b;
				quad[i++] = color.a;
				quad[i++] = 0;
				quad[i++] = 1;
				if (this.twoColorTint) {
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
				}
				quad[i++] = x + width;
				quad[i++] = y;
				quad[i++] = color.r;
				quad[i++] = color.g;
				quad[i++] = color.b;
				quad[i++] = color.a;
				quad[i++] = 1;
				quad[i++] = 1;
				if (this.twoColorTint) {
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
				}
				quad[i++] = x + width;
				quad[i++] = y + height;
				quad[i++] = color.r;
				quad[i++] = color.g;
				quad[i++] = color.b;
				quad[i++] = color.a;
				quad[i++] = 1;
				quad[i++] = 0;
				if (this.twoColorTint) {
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
				}
				quad[i++] = x;
				quad[i++] = y + height;
				quad[i++] = color.r;
				quad[i++] = color.g;
				quad[i++] = color.b;
				quad[i++] = color.a;
				quad[i++] = 0;
				quad[i++] = 0;
				if (this.twoColorTint) {
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
				}
				this.batcher.draw(texture, quad, this.QUAD_TRIANGLES);
			};
			SceneRenderer.prototype.drawTextureUV = function (texture, x, y, width, height, u, v, u2, v2, color) {
				if (color === void 0) { color = null; }
				this.enableRenderer(this.batcher);
				if (color === null)
					color = this.WHITE;
				var quad = this.QUAD;
				var i = 0;
				quad[i++] = x;
				quad[i++] = y;
				quad[i++] = color.r;
				quad[i++] = color.g;
				quad[i++] = color.b;
				quad[i++] = color.a;
				quad[i++] = u;
				quad[i++] = v;
				if (this.twoColorTint) {
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
				}
				quad[i++] = x + width;
				quad[i++] = y;
				quad[i++] = color.r;
				quad[i++] = color.g;
				quad[i++] = color.b;
				quad[i++] = color.a;
				quad[i++] = u2;
				quad[i++] = v;
				if (this.twoColorTint) {
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
				}
				quad[i++] = x + width;
				quad[i++] = y + height;
				quad[i++] = color.r;
				quad[i++] = color.g;
				quad[i++] = color.b;
				quad[i++] = color.a;
				quad[i++] = u2;
				quad[i++] = v2;
				if (this.twoColorTint) {
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
				}
				quad[i++] = x;
				quad[i++] = y + height;
				quad[i++] = color.r;
				quad[i++] = color.g;
				quad[i++] = color.b;
				quad[i++] = color.a;
				quad[i++] = u;
				quad[i++] = v2;
				if (this.twoColorTint) {
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
				}
				this.batcher.draw(texture, quad, this.QUAD_TRIANGLES);
			};
			SceneRenderer.prototype.drawTextureRotated = function (texture, x, y, width, height, pivotX, pivotY, angle, color, premultipliedAlpha) {
				if (color === void 0) { color = null; }
				if (premultipliedAlpha === void 0) { premultipliedAlpha = false; }
				this.enableRenderer(this.batcher);
				if (color === null)
					color = this.WHITE;
				var quad = this.QUAD;
				var worldOriginX = x + pivotX;
				var worldOriginY = y + pivotY;
				var fx = -pivotX;
				var fy = -pivotY;
				var fx2 = width - pivotX;
				var fy2 = height - pivotY;
				var p1x = fx;
				var p1y = fy;
				var p2x = fx;
				var p2y = fy2;
				var p3x = fx2;
				var p3y = fy2;
				var p4x = fx2;
				var p4y = fy;
				var x1 = 0;
				var y1 = 0;
				var x2 = 0;
				var y2 = 0;
				var x3 = 0;
				var y3 = 0;
				var x4 = 0;
				var y4 = 0;
				if (angle != 0) {
					var cos = spine.MathUtils.cosDeg(angle);
					var sin = spine.MathUtils.sinDeg(angle);
					x1 = cos * p1x - sin * p1y;
					y1 = sin * p1x + cos * p1y;
					x4 = cos * p2x - sin * p2y;
					y4 = sin * p2x + cos * p2y;
					x3 = cos * p3x - sin * p3y;
					y3 = sin * p3x + cos * p3y;
					x2 = x3 + (x1 - x4);
					y2 = y3 + (y1 - y4);
				}
				else {
					x1 = p1x;
					y1 = p1y;
					x4 = p2x;
					y4 = p2y;
					x3 = p3x;
					y3 = p3y;
					x2 = p4x;
					y2 = p4y;
				}
				x1 += worldOriginX;
				y1 += worldOriginY;
				x2 += worldOriginX;
				y2 += worldOriginY;
				x3 += worldOriginX;
				y3 += worldOriginY;
				x4 += worldOriginX;
				y4 += worldOriginY;
				var i = 0;
				quad[i++] = x1;
				quad[i++] = y1;
				quad[i++] = color.r;
				quad[i++] = color.g;
				quad[i++] = color.b;
				quad[i++] = color.a;
				quad[i++] = 0;
				quad[i++] = 1;
				if (this.twoColorTint) {
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
				}
				quad[i++] = x2;
				quad[i++] = y2;
				quad[i++] = color.r;
				quad[i++] = color.g;
				quad[i++] = color.b;
				quad[i++] = color.a;
				quad[i++] = 1;
				quad[i++] = 1;
				if (this.twoColorTint) {
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
				}
				quad[i++] = x3;
				quad[i++] = y3;
				quad[i++] = color.r;
				quad[i++] = color.g;
				quad[i++] = color.b;
				quad[i++] = color.a;
				quad[i++] = 1;
				quad[i++] = 0;
				if (this.twoColorTint) {
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
				}
				quad[i++] = x4;
				quad[i++] = y4;
				quad[i++] = color.r;
				quad[i++] = color.g;
				quad[i++] = color.b;
				quad[i++] = color.a;
				quad[i++] = 0;
				quad[i++] = 0;
				if (this.twoColorTint) {
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
				}
				this.batcher.draw(texture, quad, this.QUAD_TRIANGLES);
			};
			SceneRenderer.prototype.drawRegion = function (region, x, y, width, height, color, premultipliedAlpha) {
				if (color === void 0) { color = null; }
				if (premultipliedAlpha === void 0) { premultipliedAlpha = false; }
				this.enableRenderer(this.batcher);
				if (color === null)
					color = this.WHITE;
				var quad = this.QUAD;
				var i = 0;
				quad[i++] = x;
				quad[i++] = y;
				quad[i++] = color.r;
				quad[i++] = color.g;
				quad[i++] = color.b;
				quad[i++] = color.a;
				quad[i++] = region.u;
				quad[i++] = region.v2;
				if (this.twoColorTint) {
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
				}
				quad[i++] = x + width;
				quad[i++] = y;
				quad[i++] = color.r;
				quad[i++] = color.g;
				quad[i++] = color.b;
				quad[i++] = color.a;
				quad[i++] = region.u2;
				quad[i++] = region.v2;
				if (this.twoColorTint) {
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
				}
				quad[i++] = x + width;
				quad[i++] = y + height;
				quad[i++] = color.r;
				quad[i++] = color.g;
				quad[i++] = color.b;
				quad[i++] = color.a;
				quad[i++] = region.u2;
				quad[i++] = region.v;
				if (this.twoColorTint) {
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
				}
				quad[i++] = x;
				quad[i++] = y + height;
				quad[i++] = color.r;
				quad[i++] = color.g;
				quad[i++] = color.b;
				quad[i++] = color.a;
				quad[i++] = region.u;
				quad[i++] = region.v;
				if (this.twoColorTint) {
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
					quad[i++] = 0;
				}
				this.batcher.draw(region.texture, quad, this.QUAD_TRIANGLES);
			};
			SceneRenderer.prototype.line = function (x, y, x2, y2, color, color2) {
				if (color === void 0) { color = null; }
				if (color2 === void 0) { color2 = null; }
				this.enableRenderer(this.shapes);
				this.shapes.line(x, y, x2, y2, color);
			};
			SceneRenderer.prototype.triangle = function (filled, x, y, x2, y2, x3, y3, color, color2, color3) {
				if (color === void 0) { color = null; }
				if (color2 === void 0) { color2 = null; }
				if (color3 === void 0) { color3 = null; }
				this.enableRenderer(this.shapes);
				this.shapes.triangle(filled, x, y, x2, y2, x3, y3, color, color2, color3);
			};
			SceneRenderer.prototype.quad = function (filled, x, y, x2, y2, x3, y3, x4, y4, color, color2, color3, color4) {
				if (color === void 0) { color = null; }
				if (color2 === void 0) { color2 = null; }
				if (color3 === void 0) { color3 = null; }
				if (color4 === void 0) { color4 = null; }
				this.enableRenderer(this.shapes);
				this.shapes.quad(filled, x, y, x2, y2, x3, y3, x4, y4, color, color2, color3, color4);
			};
			SceneRenderer.prototype.rect = function (filled, x, y, width, height, color) {
				if (color === void 0) { color = null; }
				this.enableRenderer(this.shapes);
				this.shapes.rect(filled, x, y, width, height, color);
			};
			SceneRenderer.prototype.rectLine = function (filled, x1, y1, x2, y2, width, color) {
				if (color === void 0) { color = null; }
				this.enableRenderer(this.shapes);
				this.shapes.rectLine(filled, x1, y1, x2, y2, width, color);
			};
			SceneRenderer.prototype.polygon = function (polygonVertices, offset, count, color) {
				if (color === void 0) { color = null; }
				this.enableRenderer(this.shapes);
				this.shapes.polygon(polygonVertices, offset, count, color);
			};
			SceneRenderer.prototype.circle = function (filled, x, y, radius, color, segments) {
				if (color === void 0) { color = null; }
				if (segments === void 0) { segments = 0; }
				this.enableRenderer(this.shapes);
				this.shapes.circle(filled, x, y, radius, color, segments);
			};
			SceneRenderer.prototype.curve = function (x1, y1, cx1, cy1, cx2, cy2, x2, y2, segments, color) {
				if (color === void 0) { color = null; }
				this.enableRenderer(this.shapes);
				this.shapes.curve(x1, y1, cx1, cy1, cx2, cy2, x2, y2, segments, color);
			};
			SceneRenderer.prototype.end = function () {
				if (this.activeRenderer === this.batcher)
					this.batcher.end();
				else if (this.activeRenderer === this.shapes)
					this.shapes.end();
				this.activeRenderer = null;
			};
			SceneRenderer.prototype.resize = function (resizeMode) {
				var canvas = this.canvas;
				var w = canvas.clientWidth;
				var h = canvas.clientHeight;
				if (canvas.width != w || canvas.height != h) {
					canvas.width = w;
					canvas.height = h;
				}
				this.context.gl.viewport(0, 0, canvas.width, canvas.height);
				if (resizeMode === ResizeMode.Stretch) {
				}
				else if (resizeMode === ResizeMode.Expand) {
					this.camera.setViewport(w, h);
				}
				else if (resizeMode === ResizeMode.Fit) {
					var sourceWidth = canvas.width, sourceHeight = canvas.height;
					var targetWidth = this.camera.viewportWidth, targetHeight = this.camera.viewportHeight;
					var targetRatio = targetHeight / targetWidth;
					var sourceRatio = sourceHeight / sourceWidth;
					var scale = targetRatio < sourceRatio ? targetWidth / sourceWidth : targetHeight / sourceHeight;
					this.camera.viewportWidth = sourceWidth * scale;
					this.camera.viewportHeight = sourceHeight * scale;
				}
				this.camera.update();
			};
			SceneRenderer.prototype.enableRenderer = function (renderer) {
				if (this.activeRenderer === renderer)
					return;
				this.end();
				if (renderer instanceof webgl.PolygonBatcher) {
					this.batcherShader.bind();
					this.batcherShader.setUniform4x4f(webgl.Shader.MVP_MATRIX, this.camera.projectionView.values);
					this.batcherShader.setUniformi("u_texture", 0);
					this.batcher.begin(this.batcherShader);
					this.activeRenderer = this.batcher;
				}
				else if (renderer instanceof webgl.ShapeRenderer) {
					this.shapesShader.bind();
					this.shapesShader.setUniform4x4f(webgl.Shader.MVP_MATRIX, this.camera.projectionView.values);
					this.shapes.begin(this.shapesShader);
					this.activeRenderer = this.shapes;
				}
				else {
					this.activeRenderer = this.skeletonDebugRenderer;
				}
			};
			SceneRenderer.prototype.dispose = function () {
				this.batcher.dispose();
				this.batcherShader.dispose();
				this.shapes.dispose();
				this.shapesShader.dispose();
				this.skeletonDebugRenderer.dispose();
			};
			return SceneRenderer;
		}());
		webgl.SceneRenderer = SceneRenderer;
		var ResizeMode;
		(function (ResizeMode) {
			ResizeMode[ResizeMode["Stretch"] = 0] = "Stretch";
			ResizeMode[ResizeMode["Expand"] = 1] = "Expand";
			ResizeMode[ResizeMode["Fit"] = 2] = "Fit";
		})(ResizeMode = webgl.ResizeMode || (webgl.ResizeMode = {}));
	})(webgl = spine.webgl || (spine.webgl = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var webgl;
	(function (webgl) {
		var Shader = (function () {
			function Shader(context, vertexShader, fragmentShader) {
				this.vertexShader = vertexShader;
				this.fragmentShader = fragmentShader;
				this.vs = null;
				this.fs = null;
				this.program = null;
				this.tmp2x2 = new Float32Array(2 * 2);
				this.tmp3x3 = new Float32Array(3 * 3);
				this.tmp4x4 = new Float32Array(4 * 4);
				this.vsSource = vertexShader;
				this.fsSource = fragmentShader;
				this.context = context instanceof webgl.ManagedWebGLRenderingContext ? context : new webgl.ManagedWebGLRenderingContext(context);
				this.context.addRestorable(this);
				this.compile();
			}
			Shader.prototype.getProgram = function () { return this.program; };
			Shader.prototype.getVertexShader = function () { return this.vertexShader; };
			Shader.prototype.getFragmentShader = function () { return this.fragmentShader; };
			Shader.prototype.getVertexShaderSource = function () { return this.vsSource; };
			Shader.prototype.getFragmentSource = function () { return this.fsSource; };
			Shader.prototype.compile = function () {
				var gl = this.context.gl;
				try {
					this.vs = this.compileShader(gl.VERTEX_SHADER, this.vertexShader);
					this.fs = this.compileShader(gl.FRAGMENT_SHADER, this.fragmentShader);
					this.program = this.compileProgram(this.vs, this.fs);
				}
				catch (e) {
					this.dispose();
					throw e;
				}
			};
			Shader.prototype.compileShader = function (type, source) {
				var gl = this.context.gl;
				var shader = gl.createShader(type);
				gl.shaderSource(shader, source);
				gl.compileShader(shader);
				if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
					var error = "Couldn't compile shader: " + gl.getShaderInfoLog(shader);
					gl.deleteShader(shader);
					if (!gl.isContextLost())
						throw new Error(error);
				}
				return shader;
			};
			Shader.prototype.compileProgram = function (vs, fs) {
				var gl = this.context.gl;
				var program = gl.createProgram();
				gl.attachShader(program, vs);
				gl.attachShader(program, fs);
				gl.linkProgram(program);
				if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
					var error = "Couldn't compile shader program: " + gl.getProgramInfoLog(program);
					gl.deleteProgram(program);
					if (!gl.isContextLost())
						throw new Error(error);
				}
				return program;
			};
			Shader.prototype.restore = function () {
				this.compile();
			};
			Shader.prototype.bind = function () {
				this.context.gl.useProgram(this.program);
			};
			Shader.prototype.unbind = function () {
				this.context.gl.useProgram(null);
			};
			Shader.prototype.setUniformi = function (uniform, value) {
				this.context.gl.uniform1i(this.getUniformLocation(uniform), value);
			};
			Shader.prototype.setUniformf = function (uniform, value) {
				this.context.gl.uniform1f(this.getUniformLocation(uniform), value);
			};
			Shader.prototype.setUniform2f = function (uniform, value, value2) {
				this.context.gl.uniform2f(this.getUniformLocation(uniform), value, value2);
			};
			Shader.prototype.setUniform3f = function (uniform, value, value2, value3) {
				this.context.gl.uniform3f(this.getUniformLocation(uniform), value, value2, value3);
			};
			Shader.prototype.setUniform4f = function (uniform, value, value2, value3, value4) {
				this.context.gl.uniform4f(this.getUniformLocation(uniform), value, value2, value3, value4);
			};
			Shader.prototype.setUniform2x2f = function (uniform, value) {
				var gl = this.context.gl;
				this.tmp2x2.set(value);
				gl.uniformMatrix2fv(this.getUniformLocation(uniform), false, this.tmp2x2);
			};
			Shader.prototype.setUniform3x3f = function (uniform, value) {
				var gl = this.context.gl;
				this.tmp3x3.set(value);
				gl.uniformMatrix3fv(this.getUniformLocation(uniform), false, this.tmp3x3);
			};
			Shader.prototype.setUniform4x4f = function (uniform, value) {
				var gl = this.context.gl;
				this.tmp4x4.set(value);
				gl.uniformMatrix4fv(this.getUniformLocation(uniform), false, this.tmp4x4);
			};
			Shader.prototype.getUniformLocation = function (uniform) {
				var gl = this.context.gl;
				var location = gl.getUniformLocation(this.program, uniform);
				if (!location && !gl.isContextLost())
					throw new Error("Couldn't find location for uniform " + uniform);
				return location;
			};
			Shader.prototype.getAttributeLocation = function (attribute) {
				var gl = this.context.gl;
				var location = gl.getAttribLocation(this.program, attribute);
				if (location == -1 && !gl.isContextLost())
					throw new Error("Couldn't find location for attribute " + attribute);
				return location;
			};
			Shader.prototype.dispose = function () {
				this.context.removeRestorable(this);
				var gl = this.context.gl;
				if (this.vs) {
					gl.deleteShader(this.vs);
					this.vs = null;
				}
				if (this.fs) {
					gl.deleteShader(this.fs);
					this.fs = null;
				}
				if (this.program) {
					gl.deleteProgram(this.program);
					this.program = null;
				}
			};
			Shader.newColoredTextured = function (context) {
				var vs = "\n\t\t\t\tattribute vec4 " + Shader.POSITION + ";\n\t\t\t\tattribute vec4 " + Shader.COLOR + ";\n\t\t\t\tattribute vec2 " + Shader.TEXCOORDS + ";\n\t\t\t\tuniform mat4 " + Shader.MVP_MATRIX + ";\n\t\t\t\tvarying vec4 v_color;\n\t\t\t\tvarying vec2 v_texCoords;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tv_color = " + Shader.COLOR + ";\n\t\t\t\t\tv_texCoords = " + Shader.TEXCOORDS + ";\n\t\t\t\t\tgl_Position = " + Shader.MVP_MATRIX + " * " + Shader.POSITION + ";\n\t\t\t\t}\n\t\t\t";
				var fs = "\n\t\t\t\t#ifdef GL_ES\n\t\t\t\t\t#define LOWP lowp\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t#else\n\t\t\t\t\t#define LOWP\n\t\t\t\t#endif\n\t\t\t\tvarying LOWP vec4 v_color;\n\t\t\t\tvarying vec2 v_texCoords;\n\t\t\t\tuniform sampler2D u_texture;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tgl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n\t\t\t\t}\n\t\t\t";
				return new Shader(context, vs, fs);
			};
			Shader.newTwoColoredTextured = function (context) {
				var vs = "\n\t\t\t\tattribute vec4 " + Shader.POSITION + ";\n\t\t\t\tattribute vec4 " + Shader.COLOR + ";\n\t\t\t\tattribute vec4 " + Shader.COLOR2 + ";\n\t\t\t\tattribute vec2 " + Shader.TEXCOORDS + ";\n\t\t\t\tuniform mat4 " + Shader.MVP_MATRIX + ";\n\t\t\t\tvarying vec4 v_light;\n\t\t\t\tvarying vec4 v_dark;\n\t\t\t\tvarying vec2 v_texCoords;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tv_light = " + Shader.COLOR + ";\n\t\t\t\t\tv_dark = " + Shader.COLOR2 + ";\n\t\t\t\t\tv_texCoords = " + Shader.TEXCOORDS + ";\n\t\t\t\t\tgl_Position = " + Shader.MVP_MATRIX + " * " + Shader.POSITION + ";\n\t\t\t\t}\n\t\t\t";
				var fs = "\n\t\t\t\t#ifdef GL_ES\n\t\t\t\t\t#define LOWP lowp\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t#else\n\t\t\t\t\t#define LOWP\n\t\t\t\t#endif\n\t\t\t\tvarying LOWP vec4 v_light;\n\t\t\t\tvarying LOWP vec4 v_dark;\n\t\t\t\tvarying vec2 v_texCoords;\n\t\t\t\tuniform sampler2D u_texture;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tvec4 texColor = texture2D(u_texture, v_texCoords);\n\t\t\t\t\tgl_FragColor.a = texColor.a * v_light.a;\n\t\t\t\t\tgl_FragColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n\t\t\t\t}\n\t\t\t";
				return new Shader(context, vs, fs);
			};
			Shader.newColored = function (context) {
				var vs = "\n\t\t\t\tattribute vec4 " + Shader.POSITION + ";\n\t\t\t\tattribute vec4 " + Shader.COLOR + ";\n\t\t\t\tuniform mat4 " + Shader.MVP_MATRIX + ";\n\t\t\t\tvarying vec4 v_color;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tv_color = " + Shader.COLOR + ";\n\t\t\t\t\tgl_Position = " + Shader.MVP_MATRIX + " * " + Shader.POSITION + ";\n\t\t\t\t}\n\t\t\t";
				var fs = "\n\t\t\t\t#ifdef GL_ES\n\t\t\t\t\t#define LOWP lowp\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t#else\n\t\t\t\t\t#define LOWP\n\t\t\t\t#endif\n\t\t\t\tvarying LOWP vec4 v_color;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tgl_FragColor = v_color;\n\t\t\t\t}\n\t\t\t";
				return new Shader(context, vs, fs);
			};
			Shader.MVP_MATRIX = "u_projTrans";
			Shader.POSITION = "a_position";
			Shader.COLOR = "a_color";
			Shader.COLOR2 = "a_color2";
			Shader.TEXCOORDS = "a_texCoords";
			Shader.SAMPLER = "u_texture";
			return Shader;
		}());
		webgl.Shader = Shader;
	})(webgl = spine.webgl || (spine.webgl = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var webgl;
	(function (webgl) {
		var ShapeRenderer = (function () {
			function ShapeRenderer(context, maxVertices) {
				if (maxVertices === void 0) { maxVertices = 10920; }
				this.isDrawing = false;
				this.shapeType = ShapeType.Filled;
				this.color = new spine.Color(1, 1, 1, 1);
				this.vertexIndex = 0;
				this.tmp = new spine.Vector2();
				if (maxVertices > 10920)
					throw new Error("Can't have more than 10920 triangles per batch: " + maxVertices);
				this.context = context instanceof webgl.ManagedWebGLRenderingContext ? context : new webgl.ManagedWebGLRenderingContext(context);
				this.mesh = new webgl.Mesh(context, [new webgl.Position2Attribute(), new webgl.ColorAttribute()], maxVertices, 0);
				this.srcBlend = this.context.gl.SRC_ALPHA;
				this.dstBlend = this.context.gl.ONE_MINUS_SRC_ALPHA;
			}
			ShapeRenderer.prototype.begin = function (shader) {
				if (this.isDrawing)
					throw new Error("ShapeRenderer.begin() has already been called");
				this.shader = shader;
				this.vertexIndex = 0;
				this.isDrawing = true;
				var gl = this.context.gl;
				gl.enable(gl.BLEND);
				gl.blendFunc(this.srcBlend, this.dstBlend);
			};
			ShapeRenderer.prototype.setBlendMode = function (srcBlend, dstBlend) {
				var gl = this.context.gl;
				this.srcBlend = srcBlend;
				this.dstBlend = dstBlend;
				if (this.isDrawing) {
					this.flush();
					gl.blendFunc(this.srcBlend, this.dstBlend);
				}
			};
			ShapeRenderer.prototype.setColor = function (color) {
				this.color.setFromColor(color);
			};
			ShapeRenderer.prototype.setColorWith = function (r, g, b, a) {
				this.color.set(r, g, b, a);
			};
			ShapeRenderer.prototype.point = function (x, y, color) {
				if (color === void 0) { color = null; }
				this.check(ShapeType.Point, 1);
				if (color === null)
					color = this.color;
				this.vertex(x, y, color);
			};
			ShapeRenderer.prototype.line = function (x, y, x2, y2, color) {
				if (color === void 0) { color = null; }
				this.check(ShapeType.Line, 2);
				var vertices = this.mesh.getVertices();
				var idx = this.vertexIndex;
				if (color === null)
					color = this.color;
				this.vertex(x, y, color);
				this.vertex(x2, y2, color);
			};
			ShapeRenderer.prototype.triangle = function (filled, x, y, x2, y2, x3, y3, color, color2, color3) {
				if (color === void 0) { color = null; }
				if (color2 === void 0) { color2 = null; }
				if (color3 === void 0) { color3 = null; }
				this.check(filled ? ShapeType.Filled : ShapeType.Line, 3);
				var vertices = this.mesh.getVertices();
				var idx = this.vertexIndex;
				if (color === null)
					color = this.color;
				if (color2 === null)
					color2 = this.color;
				if (color3 === null)
					color3 = this.color;
				if (filled) {
					this.vertex(x, y, color);
					this.vertex(x2, y2, color2);
					this.vertex(x3, y3, color3);
				}
				else {
					this.vertex(x, y, color);
					this.vertex(x2, y2, color2);
					this.vertex(x2, y2, color);
					this.vertex(x3, y3, color2);
					this.vertex(x3, y3, color);
					this.vertex(x, y, color2);
				}
			};
			ShapeRenderer.prototype.quad = function (filled, x, y, x2, y2, x3, y3, x4, y4, color, color2, color3, color4) {
				if (color === void 0) { color = null; }
				if (color2 === void 0) { color2 = null; }
				if (color3 === void 0) { color3 = null; }
				if (color4 === void 0) { color4 = null; }
				this.check(filled ? ShapeType.Filled : ShapeType.Line, 3);
				var vertices = this.mesh.getVertices();
				var idx = this.vertexIndex;
				if (color === null)
					color = this.color;
				if (color2 === null)
					color2 = this.color;
				if (color3 === null)
					color3 = this.color;
				if (color4 === null)
					color4 = this.color;
				if (filled) {
					this.vertex(x, y, color);
					this.vertex(x2, y2, color2);
					this.vertex(x3, y3, color3);
					this.vertex(x3, y3, color3);
					this.vertex(x4, y4, color4);
					this.vertex(x, y, color);
				}
				else {
					this.vertex(x, y, color);
					this.vertex(x2, y2, color2);
					this.vertex(x2, y2, color2);
					this.vertex(x3, y3, color3);
					this.vertex(x3, y3, color3);
					this.vertex(x4, y4, color4);
					this.vertex(x4, y4, color4);
					this.vertex(x, y, color);
				}
			};
			ShapeRenderer.prototype.rect = function (filled, x, y, width, height, color) {
				if (color === void 0) { color = null; }
				this.quad(filled, x, y, x + width, y, x + width, y + height, x, y + height, color, color, color, color);
			};
			ShapeRenderer.prototype.rectLine = function (filled, x1, y1, x2, y2, width, color) {
				if (color === void 0) { color = null; }
				this.check(filled ? ShapeType.Filled : ShapeType.Line, 8);
				if (color === null)
					color = this.color;
				var t = this.tmp.set(y2 - y1, x1 - x2);
				t.normalize();
				width *= 0.5;
				var tx = t.x * width;
				var ty = t.y * width;
				if (!filled) {
					this.vertex(x1 + tx, y1 + ty, color);
					this.vertex(x1 - tx, y1 - ty, color);
					this.vertex(x2 + tx, y2 + ty, color);
					this.vertex(x2 - tx, y2 - ty, color);
					this.vertex(x2 + tx, y2 + ty, color);
					this.vertex(x1 + tx, y1 + ty, color);
					this.vertex(x2 - tx, y2 - ty, color);
					this.vertex(x1 - tx, y1 - ty, color);
				}
				else {
					this.vertex(x1 + tx, y1 + ty, color);
					this.vertex(x1 - tx, y1 - ty, color);
					this.vertex(x2 + tx, y2 + ty, color);
					this.vertex(x2 - tx, y2 - ty, color);
					this.vertex(x2 + tx, y2 + ty, color);
					this.vertex(x1 - tx, y1 - ty, color);
				}
			};
			ShapeRenderer.prototype.x = function (x, y, size) {
				this.line(x - size, y - size, x + size, y + size);
				this.line(x - size, y + size, x + size, y - size);
			};
			ShapeRenderer.prototype.polygon = function (polygonVertices, offset, count, color) {
				if (color === void 0) { color = null; }
				if (count < 3)
					throw new Error("Polygon must contain at least 3 vertices");
				this.check(ShapeType.Line, count * 2);
				if (color === null)
					color = this.color;
				var vertices = this.mesh.getVertices();
				var idx = this.vertexIndex;
				offset <<= 1;
				count <<= 1;
				var firstX = polygonVertices[offset];
				var firstY = polygonVertices[offset + 1];
				var last = offset + count;
				for (var i = offset, n = offset + count - 2; i < n; i += 2) {
					var x1 = polygonVertices[i];
					var y1 = polygonVertices[i + 1];
					var x2 = 0;
					var y2 = 0;
					if (i + 2 >= last) {
						x2 = firstX;
						y2 = firstY;
					}
					else {
						x2 = polygonVertices[i + 2];
						y2 = polygonVertices[i + 3];
					}
					this.vertex(x1, y1, color);
					this.vertex(x2, y2, color);
				}
			};
			ShapeRenderer.prototype.circle = function (filled, x, y, radius, color, segments) {
				if (color === void 0) { color = null; }
				if (segments === void 0) { segments = 0; }
				if (segments === 0)
					segments = Math.max(1, (6 * spine.MathUtils.cbrt(radius)) | 0);
				if (segments <= 0)
					throw new Error("segments must be > 0.");
				if (color === null)
					color = this.color;
				var angle = 2 * spine.MathUtils.PI / segments;
				var cos = Math.cos(angle);
				var sin = Math.sin(angle);
				var cx = radius, cy = 0;
				if (!filled) {
					this.check(ShapeType.Line, segments * 2 + 2);
					for (var i = 0; i < segments; i++) {
						this.vertex(x + cx, y + cy, color);
						var temp_1 = cx;
						cx = cos * cx - sin * cy;
						cy = sin * temp_1 + cos * cy;
						this.vertex(x + cx, y + cy, color);
					}
					this.vertex(x + cx, y + cy, color);
				}
				else {
					this.check(ShapeType.Filled, segments * 3 + 3);
					segments--;
					for (var i = 0; i < segments; i++) {
						this.vertex(x, y, color);
						this.vertex(x + cx, y + cy, color);
						var temp_2 = cx;
						cx = cos * cx - sin * cy;
						cy = sin * temp_2 + cos * cy;
						this.vertex(x + cx, y + cy, color);
					}
					this.vertex(x, y, color);
					this.vertex(x + cx, y + cy, color);
				}
				var temp = cx;
				cx = radius;
				cy = 0;
				this.vertex(x + cx, y + cy, color);
			};
			ShapeRenderer.prototype.curve = function (x1, y1, cx1, cy1, cx2, cy2, x2, y2, segments, color) {
				if (color === void 0) { color = null; }
				this.check(ShapeType.Line, segments * 2 + 2);
				if (color === null)
					color = this.color;
				var subdiv_step = 1 / segments;
				var subdiv_step2 = subdiv_step * subdiv_step;
				var subdiv_step3 = subdiv_step * subdiv_step * subdiv_step;
				var pre1 = 3 * subdiv_step;
				var pre2 = 3 * subdiv_step2;
				var pre4 = 6 * subdiv_step2;
				var pre5 = 6 * subdiv_step3;
				var tmp1x = x1 - cx1 * 2 + cx2;
				var tmp1y = y1 - cy1 * 2 + cy2;
				var tmp2x = (cx1 - cx2) * 3 - x1 + x2;
				var tmp2y = (cy1 - cy2) * 3 - y1 + y2;
				var fx = x1;
				var fy = y1;
				var dfx = (cx1 - x1) * pre1 + tmp1x * pre2 + tmp2x * subdiv_step3;
				var dfy = (cy1 - y1) * pre1 + tmp1y * pre2 + tmp2y * subdiv_step3;
				var ddfx = tmp1x * pre4 + tmp2x * pre5;
				var ddfy = tmp1y * pre4 + tmp2y * pre5;
				var dddfx = tmp2x * pre5;
				var dddfy = tmp2y * pre5;
				while (segments-- > 0) {
					this.vertex(fx, fy, color);
					fx += dfx;
					fy += dfy;
					dfx += ddfx;
					dfy += ddfy;
					ddfx += dddfx;
					ddfy += dddfy;
					this.vertex(fx, fy, color);
				}
				this.vertex(fx, fy, color);
				this.vertex(x2, y2, color);
			};
			ShapeRenderer.prototype.vertex = function (x, y, color) {
				var idx = this.vertexIndex;
				var vertices = this.mesh.getVertices();
				vertices[idx++] = x;
				vertices[idx++] = y;
				vertices[idx++] = color.r;
				vertices[idx++] = color.g;
				vertices[idx++] = color.b;
				vertices[idx++] = color.a;
				this.vertexIndex = idx;
			};
			ShapeRenderer.prototype.end = function () {
				if (!this.isDrawing)
					throw new Error("ShapeRenderer.begin() has not been called");
				this.flush();
				this.context.gl.disable(this.context.gl.BLEND);
				this.isDrawing = false;
			};
			ShapeRenderer.prototype.flush = function () {
				if (this.vertexIndex == 0)
					return;
				this.mesh.setVerticesLength(this.vertexIndex);
				this.mesh.draw(this.shader, this.shapeType);
				this.vertexIndex = 0;
			};
			ShapeRenderer.prototype.check = function (shapeType, numVertices) {
				if (!this.isDrawing)
					throw new Error("ShapeRenderer.begin() has not been called");
				if (this.shapeType == shapeType) {
					if (this.mesh.maxVertices() - this.mesh.numVertices() < numVertices)
						this.flush();
					else
						return;
				}
				else {
					this.flush();
					this.shapeType = shapeType;
				}
			};
			ShapeRenderer.prototype.dispose = function () {
				this.mesh.dispose();
			};
			return ShapeRenderer;
		}());
		webgl.ShapeRenderer = ShapeRenderer;
		var ShapeType;
		(function (ShapeType) {
			ShapeType[ShapeType["Point"] = 0] = "Point";
			ShapeType[ShapeType["Line"] = 1] = "Line";
			ShapeType[ShapeType["Filled"] = 4] = "Filled";
		})(ShapeType = webgl.ShapeType || (webgl.ShapeType = {}));
	})(webgl = spine.webgl || (spine.webgl = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var webgl;
	(function (webgl) {
		var SkeletonDebugRenderer = (function () {
			function SkeletonDebugRenderer(context) {
				this.boneLineColor = new spine.Color(1, 0, 0, 1);
				this.boneOriginColor = new spine.Color(0, 1, 0, 1);
				this.attachmentLineColor = new spine.Color(0, 0, 1, 0.5);
				this.triangleLineColor = new spine.Color(1, 0.64, 0, 0.5);
				this.pathColor = new spine.Color().setFromString("FF7F00");
				this.clipColor = new spine.Color(0.8, 0, 0, 2);
				this.aabbColor = new spine.Color(0, 1, 0, 0.5);
				this.drawBones = true;
				this.drawRegionAttachments = true;
				this.drawBoundingBoxes = true;
				this.drawMeshHull = true;
				this.drawMeshTriangles = true;
				this.drawPaths = true;
				this.drawSkeletonXY = false;
				this.drawClipping = true;
				this.premultipliedAlpha = false;
				this.scale = 1;
				this.boneWidth = 2;
				this.bounds = new spine.SkeletonBounds();
				this.temp = new Array();
				this.vertices = spine.Utils.newFloatArray(2 * 1024);
				this.context = context instanceof webgl.ManagedWebGLRenderingContext ? context : new webgl.ManagedWebGLRenderingContext(context);
			}
			SkeletonDebugRenderer.prototype.draw = function (shapes, skeleton, ignoredBones) {
				if (ignoredBones === void 0) { ignoredBones = null; }
				var skeletonX = skeleton.x;
				var skeletonY = skeleton.y;
				var gl = this.context.gl;
				var srcFunc = this.premultipliedAlpha ? gl.ONE : gl.SRC_ALPHA;
				shapes.setBlendMode(srcFunc, gl.ONE_MINUS_SRC_ALPHA);
				var bones = skeleton.bones;
				if (this.drawBones) {
					shapes.setColor(this.boneLineColor);
					for (var i = 0, n = bones.length; i < n; i++) {
						var bone = bones[i];
						if (ignoredBones && ignoredBones.indexOf(bone.data.name) > -1)
							continue;
						if (bone.parent == null)
							continue;
						var x = skeletonX + bone.data.length * bone.a + bone.worldX;
						var y = skeletonY + bone.data.length * bone.c + bone.worldY;
						shapes.rectLine(true, skeletonX + bone.worldX, skeletonY + bone.worldY, x, y, this.boneWidth * this.scale);
					}
					if (this.drawSkeletonXY)
						shapes.x(skeletonX, skeletonY, 4 * this.scale);
				}
				if (this.drawRegionAttachments) {
					shapes.setColor(this.attachmentLineColor);
					var slots = skeleton.slots;
					for (var i = 0, n = slots.length; i < n; i++) {
						var slot = slots[i];
						var attachment = slot.getAttachment();
						if (attachment instanceof spine.RegionAttachment) {
							var regionAttachment = attachment;
							var vertices = this.vertices;
							regionAttachment.computeWorldVertices(slot.bone, vertices, 0, 2);
							shapes.line(vertices[0], vertices[1], vertices[2], vertices[3]);
							shapes.line(vertices[2], vertices[3], vertices[4], vertices[5]);
							shapes.line(vertices[4], vertices[5], vertices[6], vertices[7]);
							shapes.line(vertices[6], vertices[7], vertices[0], vertices[1]);
						}
					}
				}
				if (this.drawMeshHull || this.drawMeshTriangles) {
					var slots = skeleton.slots;
					for (var i = 0, n = slots.length; i < n; i++) {
						var slot = slots[i];
						var attachment = slot.getAttachment();
						if (!(attachment instanceof spine.MeshAttachment))
							continue;
						var mesh = attachment;
						var vertices = this.vertices;
						mesh.computeWorldVertices(slot, 0, mesh.worldVerticesLength, vertices, 0, 2);
						var triangles = mesh.triangles;
						var hullLength = mesh.hullLength;
						if (this.drawMeshTriangles) {
							shapes.setColor(this.triangleLineColor);
							for (var ii = 0, nn = triangles.length; ii < nn; ii += 3) {
								var v1 = triangles[ii] * 2, v2 = triangles[ii + 1] * 2, v3 = triangles[ii + 2] * 2;
								shapes.triangle(false, vertices[v1], vertices[v1 + 1], vertices[v2], vertices[v2 + 1], vertices[v3], vertices[v3 + 1]);
							}
						}
						if (this.drawMeshHull && hullLength > 0) {
							shapes.setColor(this.attachmentLineColor);
							hullLength = (hullLength >> 1) * 2;
							var lastX = vertices[hullLength - 2], lastY = vertices[hullLength - 1];
							for (var ii = 0, nn = hullLength; ii < nn; ii += 2) {
								var x = vertices[ii], y = vertices[ii + 1];
								shapes.line(x, y, lastX, lastY);
								lastX = x;
								lastY = y;
							}
						}
					}
				}
				if (this.drawBoundingBoxes) {
					var bounds = this.bounds;
					bounds.update(skeleton, true);
					shapes.setColor(this.aabbColor);
					shapes.rect(false, bounds.minX, bounds.minY, bounds.getWidth(), bounds.getHeight());
					var polygons = bounds.polygons;
					var boxes = bounds.boundingBoxes;
					for (var i = 0, n = polygons.length; i < n; i++) {
						var polygon = polygons[i];
						shapes.setColor(boxes[i].color);
						shapes.polygon(polygon, 0, polygon.length);
					}
				}
				if (this.drawPaths) {
					var slots = skeleton.slots;
					for (var i = 0, n = slots.length; i < n; i++) {
						var slot = slots[i];
						var attachment = slot.getAttachment();
						if (!(attachment instanceof spine.PathAttachment))
							continue;
						var path = attachment;
						var nn = path.worldVerticesLength;
						var world = this.temp = spine.Utils.setArraySize(this.temp, nn, 0);
						path.computeWorldVertices(slot, 0, nn, world, 0, 2);
						var color = this.pathColor;
						var x1 = world[2], y1 = world[3], x2 = 0, y2 = 0;
						if (path.closed) {
							shapes.setColor(color);
							var cx1 = world[0], cy1 = world[1], cx2 = world[nn - 2], cy2 = world[nn - 1];
							x2 = world[nn - 4];
							y2 = world[nn - 3];
							shapes.curve(x1, y1, cx1, cy1, cx2, cy2, x2, y2, 32);
							shapes.setColor(SkeletonDebugRenderer.LIGHT_GRAY);
							shapes.line(x1, y1, cx1, cy1);
							shapes.line(x2, y2, cx2, cy2);
						}
						nn -= 4;
						for (var ii = 4; ii < nn; ii += 6) {
							var cx1 = world[ii], cy1 = world[ii + 1], cx2 = world[ii + 2], cy2 = world[ii + 3];
							x2 = world[ii + 4];
							y2 = world[ii + 5];
							shapes.setColor(color);
							shapes.curve(x1, y1, cx1, cy1, cx2, cy2, x2, y2, 32);
							shapes.setColor(SkeletonDebugRenderer.LIGHT_GRAY);
							shapes.line(x1, y1, cx1, cy1);
							shapes.line(x2, y2, cx2, cy2);
							x1 = x2;
							y1 = y2;
						}
					}
				}
				if (this.drawBones) {
					shapes.setColor(this.boneOriginColor);
					for (var i = 0, n = bones.length; i < n; i++) {
						var bone = bones[i];
						if (ignoredBones && ignoredBones.indexOf(bone.data.name) > -1)
							continue;
						shapes.circle(true, skeletonX + bone.worldX, skeletonY + bone.worldY, 3 * this.scale, SkeletonDebugRenderer.GREEN, 8);
					}
				}
				if (this.drawClipping) {
					var slots = skeleton.slots;
					shapes.setColor(this.clipColor);
					for (var i = 0, n = slots.length; i < n; i++) {
						var slot = slots[i];
						var attachment = slot.getAttachment();
						if (!(attachment instanceof spine.ClippingAttachment))
							continue;
						var clip = attachment;
						var nn = clip.worldVerticesLength;
						var world = this.temp = spine.Utils.setArraySize(this.temp, nn, 0);
						clip.computeWorldVertices(slot, 0, nn, world, 0, 2);
						for (var i_20 = 0, n_2 = world.length; i_20 < n_2; i_20 += 2) {
							var x = world[i_20];
							var y = world[i_20 + 1];
							var x2 = world[(i_20 + 2) % world.length];
							var y2 = world[(i_20 + 3) % world.length];
							shapes.line(x, y, x2, y2);
						}
					}
				}
			};
			SkeletonDebugRenderer.prototype.dispose = function () {
			};
			SkeletonDebugRenderer.LIGHT_GRAY = new spine.Color(192 / 255, 192 / 255, 192 / 255, 1);
			SkeletonDebugRenderer.GREEN = new spine.Color(0, 1, 0, 1);
			return SkeletonDebugRenderer;
		}());
		webgl.SkeletonDebugRenderer = SkeletonDebugRenderer;
	})(webgl = spine.webgl || (spine.webgl = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var webgl;
	(function (webgl) {
		var Renderable = (function () {
			function Renderable(vertices, numVertices, numFloats) {
				this.vertices = vertices;
				this.numVertices = numVertices;
				this.numFloats = numFloats;
			}
			return Renderable;
		}());
		;
		var SkeletonRenderer = (function () {
			function SkeletonRenderer(context, twoColorTint) {
				if (twoColorTint === void 0) { twoColorTint = true; }
				this.premultipliedAlpha = false;
				this.vertexEffect = null;
				this.tempColor = new spine.Color();
				this.tempColor2 = new spine.Color();
				this.vertexSize = 2 + 2 + 4;
				this.twoColorTint = false;
				this.renderable = new Renderable(null, 0, 0);
				this.clipper = new spine.SkeletonClipping();
				this.temp = new spine.Vector2();
				this.temp2 = new spine.Vector2();
				this.temp3 = new spine.Color();
				this.temp4 = new spine.Color();
				this.twoColorTint = twoColorTint;
				if (twoColorTint)
					this.vertexSize += 4;
				this.vertices = spine.Utils.newFloatArray(this.vertexSize * 1024);
			}
			SkeletonRenderer.prototype.draw = function (batcher, skeleton, slotRangeStart, slotRangeEnd) {
				if (slotRangeStart === void 0) { slotRangeStart = -1; }
				if (slotRangeEnd === void 0) { slotRangeEnd = -1; }
				var clipper = this.clipper;
				var premultipliedAlpha = this.premultipliedAlpha;
				var twoColorTint = this.twoColorTint;
				var blendMode = null;
				var tempPos = this.temp;
				var tempUv = this.temp2;
				var tempLight = this.temp3;
				var tempDark = this.temp4;
				var renderable = this.renderable;
				var uvs = null;
				var triangles = null;
				var drawOrder = skeleton.drawOrder;
				var attachmentColor = null;
				var skeletonColor = skeleton.color;
				var vertexSize = twoColorTint ? 12 : 8;
				var inRange = false;
				if (slotRangeStart == -1)
					inRange = true;
				for (var i = 0, n = drawOrder.length; i < n; i++) {
					var clippedVertexSize = clipper.isClipping() ? 2 : vertexSize;
					var slot = drawOrder[i];
					if (slotRangeStart >= 0 && slotRangeStart == slot.data.index) {
						inRange = true;
					}
					if (!inRange) {
						clipper.clipEndWithSlot(slot);
						continue;
					}
					if (slotRangeEnd >= 0 && slotRangeEnd == slot.data.index) {
						inRange = false;
					}
					var attachment = slot.getAttachment();
					var texture = null;
					if (attachment instanceof spine.RegionAttachment) {
						var region = attachment;
						renderable.vertices = this.vertices;
						renderable.numVertices = 4;
						renderable.numFloats = clippedVertexSize << 2;
						region.computeWorldVertices(slot.bone, renderable.vertices, 0, clippedVertexSize);
						triangles = SkeletonRenderer.QUAD_TRIANGLES;
						uvs = region.uvs;
						texture = region.region.renderObject.texture;
						attachmentColor = region.color;
					}
					else if (attachment instanceof spine.MeshAttachment) {
						var mesh = attachment;
						renderable.vertices = this.vertices;
						renderable.numVertices = (mesh.worldVerticesLength >> 1);
						renderable.numFloats = renderable.numVertices * clippedVertexSize;
						if (renderable.numFloats > renderable.vertices.length) {
							renderable.vertices = this.vertices = spine.Utils.newFloatArray(renderable.numFloats);
						}
						mesh.computeWorldVertices(slot, 0, mesh.worldVerticesLength, renderable.vertices, 0, clippedVertexSize);
						triangles = mesh.triangles;
						texture = mesh.region.renderObject.texture;
						uvs = mesh.uvs;
						attachmentColor = mesh.color;
					}
					else if (attachment instanceof spine.ClippingAttachment) {
						var clip = (attachment);
						clipper.clipStart(slot, clip);
						continue;
					}
					else {
						clipper.clipEndWithSlot(slot);
						continue;
					}
					if (texture != null) {
						var slotColor = slot.color;
						var finalColor = this.tempColor;
						finalColor.r = skeletonColor.r * slotColor.r * attachmentColor.r;
						finalColor.g = skeletonColor.g * slotColor.g * attachmentColor.g;
						finalColor.b = skeletonColor.b * slotColor.b * attachmentColor.b;
						finalColor.a = skeletonColor.a * slotColor.a * attachmentColor.a;
						if (premultipliedAlpha) {
							finalColor.r *= finalColor.a;
							finalColor.g *= finalColor.a;
							finalColor.b *= finalColor.a;
						}
						var darkColor = this.tempColor2;
						if (slot.darkColor == null)
							darkColor.set(0, 0, 0, 1.0);
						else {
							if (premultipliedAlpha) {
								darkColor.r = slot.darkColor.r * finalColor.a;
								darkColor.g = slot.darkColor.g * finalColor.a;
								darkColor.b = slot.darkColor.b * finalColor.a;
							}
							else {
								darkColor.setFromColor(slot.darkColor);
							}
							darkColor.a = premultipliedAlpha ? 1.0 : 0.0;
						}
						var slotBlendMode = slot.data.blendMode;
						if (slotBlendMode != blendMode) {
							blendMode = slotBlendMode;
							batcher.setBlendMode(webgl.WebGLBlendModeConverter.getSourceGLBlendMode(blendMode, premultipliedAlpha), webgl.WebGLBlendModeConverter.getDestGLBlendMode(blendMode));
						}
						if (clipper.isClipping()) {
							clipper.clipTriangles(renderable.vertices, renderable.numFloats, triangles, triangles.length, uvs, finalColor, darkColor, twoColorTint);
							var clippedVertices = new Float32Array(clipper.clippedVertices);
							var clippedTriangles = clipper.clippedTriangles;
							if (this.vertexEffect != null) {
								var vertexEffect = this.vertexEffect;
								var verts = clippedVertices;
								if (!twoColorTint) {
									for (var v = 0, n_3 = clippedVertices.length; v < n_3; v += vertexSize) {
										tempPos.x = verts[v];
										tempPos.y = verts[v + 1];
										tempLight.set(verts[v + 2], verts[v + 3], verts[v + 4], verts[v + 5]);
										tempUv.x = verts[v + 6];
										tempUv.y = verts[v + 7];
										tempDark.set(0, 0, 0, 0);
										vertexEffect.transform(tempPos, tempUv, tempLight, tempDark);
										verts[v] = tempPos.x;
										verts[v + 1] = tempPos.y;
										verts[v + 2] = tempLight.r;
										verts[v + 3] = tempLight.g;
										verts[v + 4] = tempLight.b;
										verts[v + 5] = tempLight.a;
										verts[v + 6] = tempUv.x;
										verts[v + 7] = tempUv.y;
									}
								}
								else {
									for (var v = 0, n_4 = clippedVertices.length; v < n_4; v += vertexSize) {
										tempPos.x = verts[v];
										tempPos.y = verts[v + 1];
										tempLight.set(verts[v + 2], verts[v + 3], verts[v + 4], verts[v + 5]);
										tempUv.x = verts[v + 6];
										tempUv.y = verts[v + 7];
										tempDark.set(verts[v + 8], verts[v + 9], verts[v + 10], verts[v + 11]);
										vertexEffect.transform(tempPos, tempUv, tempLight, tempDark);
										verts[v] = tempPos.x;
										verts[v + 1] = tempPos.y;
										verts[v + 2] = tempLight.r;
										verts[v + 3] = tempLight.g;
										verts[v + 4] = tempLight.b;
										verts[v + 5] = tempLight.a;
										verts[v + 6] = tempUv.x;
										verts[v + 7] = tempUv.y;
										verts[v + 8] = tempDark.r;
										verts[v + 9] = tempDark.g;
										verts[v + 10] = tempDark.b;
										verts[v + 11] = tempDark.a;
									}
								}
							}
							batcher.draw(texture, clippedVertices, clippedTriangles);
						}
						else {
							var verts = renderable.vertices;
							if (this.vertexEffect != null) {
								var vertexEffect = this.vertexEffect;
								if (!twoColorTint) {
									for (var v = 0, u = 0, n_5 = renderable.numFloats; v < n_5; v += vertexSize, u += 2) {
										tempPos.x = verts[v];
										tempPos.y = verts[v + 1];
										tempUv.x = uvs[u];
										tempUv.y = uvs[u + 1];
										tempLight.setFromColor(finalColor);
										tempDark.set(0, 0, 0, 0);
										vertexEffect.transform(tempPos, tempUv, tempLight, tempDark);
										verts[v] = tempPos.x;
										verts[v + 1] = tempPos.y;
										verts[v + 2] = tempLight.r;
										verts[v + 3] = tempLight.g;
										verts[v + 4] = tempLight.b;
										verts[v + 5] = tempLight.a;
										verts[v + 6] = tempUv.x;
										verts[v + 7] = tempUv.y;
									}
								}
								else {
									for (var v = 0, u = 0, n_6 = renderable.numFloats; v < n_6; v += vertexSize, u += 2) {
										tempPos.x = verts[v];
										tempPos.y = verts[v + 1];
										tempUv.x = uvs[u];
										tempUv.y = uvs[u + 1];
										tempLight.setFromColor(finalColor);
										tempDark.setFromColor(darkColor);
										vertexEffect.transform(tempPos, tempUv, tempLight, tempDark);
										verts[v] = tempPos.x;
										verts[v + 1] = tempPos.y;
										verts[v + 2] = tempLight.r;
										verts[v + 3] = tempLight.g;
										verts[v + 4] = tempLight.b;
										verts[v + 5] = tempLight.a;
										verts[v + 6] = tempUv.x;
										verts[v + 7] = tempUv.y;
										verts[v + 8] = tempDark.r;
										verts[v + 9] = tempDark.g;
										verts[v + 10] = tempDark.b;
										verts[v + 11] = tempDark.a;
									}
								}
							}
							else {
								if (!twoColorTint) {
									for (var v = 2, u = 0, n_7 = renderable.numFloats; v < n_7; v += vertexSize, u += 2) {
										verts[v] = finalColor.r;
										verts[v + 1] = finalColor.g;
										verts[v + 2] = finalColor.b;
										verts[v + 3] = finalColor.a;
										verts[v + 4] = uvs[u];
										verts[v + 5] = uvs[u + 1];
									}
								}
								else {
									for (var v = 2, u = 0, n_8 = renderable.numFloats; v < n_8; v += vertexSize, u += 2) {
										verts[v] = finalColor.r;
										verts[v + 1] = finalColor.g;
										verts[v + 2] = finalColor.b;
										verts[v + 3] = finalColor.a;
										verts[v + 4] = uvs[u];
										verts[v + 5] = uvs[u + 1];
										verts[v + 6] = darkColor.r;
										verts[v + 7] = darkColor.g;
										verts[v + 8] = darkColor.b;
										verts[v + 9] = darkColor.a;
									}
								}
							}
							var view = renderable.vertices.subarray(0, renderable.numFloats);
							batcher.draw(texture, view, triangles);
						}
					}
					clipper.clipEndWithSlot(slot);
				}
				clipper.clipEnd();
			};
			SkeletonRenderer.QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0];
			return SkeletonRenderer;
		}());
		webgl.SkeletonRenderer = SkeletonRenderer;
	})(webgl = spine.webgl || (spine.webgl = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var webgl;
	(function (webgl) {
		var Vector3 = (function () {
			function Vector3(x, y, z) {
				if (x === void 0) { x = 0; }
				if (y === void 0) { y = 0; }
				if (z === void 0) { z = 0; }
				this.x = 0;
				this.y = 0;
				this.z = 0;
				this.x = x;
				this.y = y;
				this.z = z;
			}
			Vector3.prototype.setFrom = function (v) {
				this.x = v.x;
				this.y = v.y;
				this.z = v.z;
				return this;
			};
			Vector3.prototype.set = function (x, y, z) {
				this.x = x;
				this.y = y;
				this.z = z;
				return this;
			};
			Vector3.prototype.add = function (v) {
				this.x += v.x;
				this.y += v.y;
				this.z += v.z;
				return this;
			};
			Vector3.prototype.sub = function (v) {
				this.x -= v.x;
				this.y -= v.y;
				this.z -= v.z;
				return this;
			};
			Vector3.prototype.scale = function (s) {
				this.x *= s;
				this.y *= s;
				this.z *= s;
				return this;
			};
			Vector3.prototype.normalize = function () {
				var len = this.length();
				if (len == 0)
					return this;
				len = 1 / len;
				this.x *= len;
				this.y *= len;
				this.z *= len;
				return this;
			};
			Vector3.prototype.cross = function (v) {
				return this.set(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
			};
			Vector3.prototype.multiply = function (matrix) {
				var l_mat = matrix.values;
				return this.set(this.x * l_mat[webgl.M00] + this.y * l_mat[webgl.M01] + this.z * l_mat[webgl.M02] + l_mat[webgl.M03], this.x * l_mat[webgl.M10] + this.y * l_mat[webgl.M11] + this.z * l_mat[webgl.M12] + l_mat[webgl.M13], this.x * l_mat[webgl.M20] + this.y * l_mat[webgl.M21] + this.z * l_mat[webgl.M22] + l_mat[webgl.M23]);
			};
			Vector3.prototype.project = function (matrix) {
				var l_mat = matrix.values;
				var l_w = 1 / (this.x * l_mat[webgl.M30] + this.y * l_mat[webgl.M31] + this.z * l_mat[webgl.M32] + l_mat[webgl.M33]);
				return this.set((this.x * l_mat[webgl.M00] + this.y * l_mat[webgl.M01] + this.z * l_mat[webgl.M02] + l_mat[webgl.M03]) * l_w, (this.x * l_mat[webgl.M10] + this.y * l_mat[webgl.M11] + this.z * l_mat[webgl.M12] + l_mat[webgl.M13]) * l_w, (this.x * l_mat[webgl.M20] + this.y * l_mat[webgl.M21] + this.z * l_mat[webgl.M22] + l_mat[webgl.M23]) * l_w);
			};
			Vector3.prototype.dot = function (v) {
				return this.x * v.x + this.y * v.y + this.z * v.z;
			};
			Vector3.prototype.length = function () {
				return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
			};
			Vector3.prototype.distance = function (v) {
				var a = v.x - this.x;
				var b = v.y - this.y;
				var c = v.z - this.z;
				return Math.sqrt(a * a + b * b + c * c);
			};
			return Vector3;
		}());
		webgl.Vector3 = Vector3;
	})(webgl = spine.webgl || (spine.webgl = {}));
})(spine || (spine = {}));
var spine;
(function (spine) {
	var webgl;
	(function (webgl) {
		var ManagedWebGLRenderingContext = (function () {
			function ManagedWebGLRenderingContext(canvasOrContext, contextConfig) {
				if (contextConfig === void 0) { contextConfig = { alpha: "true" }; }
				var _this = this;
				this.restorables = new Array();
				if (canvasOrContext instanceof HTMLCanvasElement) {
					var canvas_1 = canvasOrContext;
					this.gl = (canvas_1.getContext("webgl", contextConfig) || canvas_1.getContext("experimental-webgl", contextConfig));
					this.canvas = canvas_1;
					canvas_1.addEventListener("webglcontextlost", function (e) {
						var event = e;
						if (e) {
							e.preventDefault();
						}
					});
					canvas_1.addEventListener("webglcontextrestored", function (e) {
						for (var i = 0, n = _this.restorables.length; i < n; i++) {
							_this.restorables[i].restore();
						}
					});
				}
				else {
					this.gl = canvasOrContext;
					this.canvas = this.gl.canvas;
				}
			}
			ManagedWebGLRenderingContext.prototype.addRestorable = function (restorable) {
				this.restorables.push(restorable);
			};
			ManagedWebGLRenderingContext.prototype.removeRestorable = function (restorable) {
				var index = this.restorables.indexOf(restorable);
				if (index > -1)
					this.restorables.splice(index, 1);
			};
			return ManagedWebGLRenderingContext;
		}());
		webgl.ManagedWebGLRenderingContext = ManagedWebGLRenderingContext;
		var WebGLBlendModeConverter = (function () {
			function WebGLBlendModeConverter() {
			}
			WebGLBlendModeConverter.getDestGLBlendMode = function (blendMode) {
				switch (blendMode) {
					case spine.BlendMode.Normal: return WebGLBlendModeConverter.ONE_MINUS_SRC_ALPHA;
					case spine.BlendMode.Additive: return WebGLBlendModeConverter.ONE;
					case spine.BlendMode.Multiply: return WebGLBlendModeConverter.ONE_MINUS_SRC_ALPHA;
					case spine.BlendMode.Screen: return WebGLBlendModeConverter.ONE_MINUS_SRC_ALPHA;
					default: throw new Error("Unknown blend mode: " + blendMode);
				}
			};
			WebGLBlendModeConverter.getSourceGLBlendMode = function (blendMode, premultipliedAlpha) {
				if (premultipliedAlpha === void 0) { premultipliedAlpha = false; }
				switch (blendMode) {
					case spine.BlendMode.Normal: return premultipliedAlpha ? WebGLBlendModeConverter.ONE : WebGLBlendModeConverter.SRC_ALPHA;
					case spine.BlendMode.Additive: return premultipliedAlpha ? WebGLBlendModeConverter.ONE : WebGLBlendModeConverter.SRC_ALPHA;
					case spine.BlendMode.Multiply: return WebGLBlendModeConverter.DST_COLOR;
					case spine.BlendMode.Screen: return WebGLBlendModeConverter.ONE;
					default: throw new Error("Unknown blend mode: " + blendMode);
				}
			};
			WebGLBlendModeConverter.ZERO = 0;
			WebGLBlendModeConverter.ONE = 1;
			WebGLBlendModeConverter.SRC_COLOR = 0x0300;
			WebGLBlendModeConverter.ONE_MINUS_SRC_COLOR = 0x0301;
			WebGLBlendModeConverter.SRC_ALPHA = 0x0302;
			WebGLBlendModeConverter.ONE_MINUS_SRC_ALPHA = 0x0303;
			WebGLBlendModeConverter.DST_ALPHA = 0x0304;
			WebGLBlendModeConverter.ONE_MINUS_DST_ALPHA = 0x0305;
			WebGLBlendModeConverter.DST_COLOR = 0x0306;
			return WebGLBlendModeConverter;
		}());
		webgl.WebGLBlendModeConverter = WebGLBlendModeConverter;
	})(webgl = spine.webgl || (spine.webgl = {}));
})(spine || (spine = {}));


/*** EXPORTS FROM exports-loader ***/
module.exports = spine;
}.call(window));

/***/ })

/******/ });
});
//# sourceMappingURL=SpinePlugin.js.map