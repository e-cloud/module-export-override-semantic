'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _b = require('./b');

Object.keys(_b).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _b[key];
    }
  });
});
var foo = exports.foo = 'a-foo';