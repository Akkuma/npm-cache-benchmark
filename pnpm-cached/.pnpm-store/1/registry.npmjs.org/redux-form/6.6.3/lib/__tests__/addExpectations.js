'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Takes expectations and extends expect with them. Cannot use expect.extends due to the
 * asynchronous nature of the tests.
 * @param expectations Expectations to add
 */
var addExpectations = function addExpectations(expectations) {
  var decorate = function decorate(dest) {
    var wrap = function wrap(value, key) {
      if (typeof value === 'function' && key !== 'actual') {
        dest[key] = function () {
          for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
            params[_key] = arguments[_key];
          }

          return decorate(value.apply(dest, params));
        };
      }
    };
    for (var key in dest) {
      if (Object.prototype.hasOwnProperty.call(dest, key)) {
        wrap(dest[key], key);
      }
    }
    for (var _key2 in expectations) {
      if (Object.prototype.hasOwnProperty.call(expectations, _key2)) {
        wrap(expectations[_key2], _key2);
      }
    }
    return dest;
  };
  return function () {
    return decorate(_expect2.default.apply(undefined, arguments));
  };
};

exports.default = addExpectations;