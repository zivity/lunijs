"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lunicorn = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pym = require("pym.js");

var _pym2 = _interopRequireDefault(_pym);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lunicorn = function () {
  function Lunicorn(iframeCrosser) {
    _classCallCheck(this, Lunicorn);

    this.iframeCrosser = iframeCrosser;
  }

  _createClass(Lunicorn, [{
    key: "sendMessage",
    value: function sendMessage(messageType, message) {
      message = message || {}; //pym doesn fire the callback if message is undefined
      this.iframeCrosser.sendMessage(messageType, JSON.stringify(message));
    }
  }, {
    key: "addHandler",
    value: function addHandler(messageType, cb) {
      this.iframeCrosser.onMessage(messageType, function (data) {
        cb(JSON.parse(data));
      });
    }
  }], [{
    key: "createIframe",
    value: function createIframe(parentDomID, iframeUrl) {
      return new this(new _pym2.default.Parent(parentDomID, iframeUrl, {}));
    }
  }, {
    key: "consumeIframe",
    value: function consumeIframe() {
      var pollingInterval = arguments.length <= 0 || arguments[0] === undefined ? 2000 : arguments[0];

      var child = new _pym2.default.Child({ polling: pollingInterval });
      child.sendHeight();
      return new this(child);
    }
  }]);

  return Lunicorn;
}();

exports.Lunicorn = Lunicorn;