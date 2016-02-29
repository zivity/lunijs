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
  function Lunicorn(parentDomID, iframeUrl) {
    _classCallCheck(this, Lunicorn);

    this.parentDomID = parentDomID;
    this.iframeUrl = iframeUrl;
    this.iframeCrosser = this.createIframeCrosser();
  }

  _createClass(Lunicorn, [{
    key: "createIframeCrosser",
    value: function createIframeCrosser() {
      return new _pym2.default.Parent(this.parentDomID, this.iframeUrl, {});
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(messageType, message) {
      this.iframeCrosser.sendMessage(messageType, JSON.stringify(message));
    }
  }, {
    key: "addHandler",
    value: function addHandler(messageType, cb) {
      this.iframeCrosser.onMessage(messageType, function (data) {
        cb(JSON.parse(data));
      });
    }
  }]);

  return Lunicorn;
}();

Lunicorn.Consumer = _pym2.default.Child;

exports.Lunicorn = Lunicorn;