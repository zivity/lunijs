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
      var pymOpts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var child = new _pym2.default.Child(pymOpts);
      child.sendHeight();
      return new this(child);
    }
  }]);

  return Lunicorn;
}();

exports.Lunicorn = Lunicorn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTTtBQUNKLFdBREksUUFDSixDQUFZLGFBQVosRUFBMkI7MEJBRHZCLFVBQ3VCOztBQUN6QixTQUFLLGFBQUwsR0FBcUIsYUFBckIsQ0FEeUI7R0FBM0I7O2VBREk7O2dDQUtRLGFBQWEsU0FBUTtBQUMvQixnQkFBVSxXQUFXLEVBQVg7QUFEcUIsVUFFL0IsQ0FBSyxhQUFMLENBQW1CLFdBQW5CLENBQStCLFdBQS9CLEVBQTRDLEtBQUssU0FBTCxDQUFlLE9BQWYsQ0FBNUMsRUFGK0I7Ozs7K0JBS3RCLGFBQWEsSUFBSTtBQUMxQixXQUFLLGFBQUwsQ0FBbUIsU0FBbkIsQ0FBNkIsV0FBN0IsRUFBMEMsVUFBUyxJQUFULEVBQWM7QUFDdEQsV0FBRyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQUgsRUFEc0Q7T0FBZCxDQUExQyxDQUQwQjs7OztpQ0FNUixhQUFhLFdBQVc7QUFDMUMsYUFBTyxJQUFJLElBQUosQ0FBUyxJQUFJLGNBQUksTUFBSixDQUFXLFdBQWYsRUFBNEIsU0FBNUIsRUFBdUMsRUFBdkMsQ0FBVCxDQUFQLENBRDBDOzs7O29DQUlYO1VBQVosZ0VBQVEsa0JBQUk7O0FBQy9CLFVBQUksUUFBUSxJQUFJLGNBQUksS0FBSixDQUFVLE9BQWQsQ0FBUixDQUQyQjtBQUUvQixZQUFNLFVBQU4sR0FGK0I7QUFHL0IsYUFBTyxJQUFJLElBQUosQ0FBUyxLQUFULENBQVAsQ0FIK0I7Ozs7U0FwQjdCOzs7UUEyQkciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHltIGZyb20gXCJweW0uanNcIlxuXG5jbGFzcyBMdW5pY29ybiB7XG4gIGNvbnN0cnVjdG9yKGlmcmFtZUNyb3NzZXIpIHtcbiAgICB0aGlzLmlmcmFtZUNyb3NzZXIgPSBpZnJhbWVDcm9zc2VyXG4gIH1cblxuICBzZW5kTWVzc2FnZShtZXNzYWdlVHlwZSwgbWVzc2FnZSl7XG4gICAgbWVzc2FnZSA9IG1lc3NhZ2UgfHwge30gLy9weW0gZG9lc24gZmlyZSB0aGUgY2FsbGJhY2sgaWYgbWVzc2FnZSBpcyB1bmRlZmluZWRcbiAgICB0aGlzLmlmcmFtZUNyb3NzZXIuc2VuZE1lc3NhZ2UobWVzc2FnZVR5cGUsIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKVxuICB9XG5cbiAgYWRkSGFuZGxlcihtZXNzYWdlVHlwZSwgY2IpIHtcbiAgICB0aGlzLmlmcmFtZUNyb3NzZXIub25NZXNzYWdlKG1lc3NhZ2VUeXBlLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgIGNiKEpTT04ucGFyc2UoZGF0YSkpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVJZnJhbWUocGFyZW50RG9tSUQsIGlmcmFtZVVybCkge1xuICAgIHJldHVybiBuZXcgdGhpcyhuZXcgcHltLlBhcmVudChwYXJlbnREb21JRCwgaWZyYW1lVXJsLCB7fSkpXG4gIH1cblxuICBzdGF0aWMgY29uc3VtZUlmcmFtZShweW1PcHRzPXt9KSB7XG4gICAgbGV0IGNoaWxkID0gbmV3IHB5bS5DaGlsZChweW1PcHRzKVxuICAgIGNoaWxkLnNlbmRIZWlnaHQoKVxuICAgIHJldHVybiBuZXcgdGhpcyhjaGlsZClcbiAgfVxufVxuXG5leHBvcnQgeyBMdW5pY29ybiB9XG4iXX0=