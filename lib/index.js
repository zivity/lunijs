"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lunicorn = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _flash_factory = require("./flash_factory");

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
  }, {
    key: "addFlashHandler",
    value: function addFlashHandler() {
      var _this = this;

      this.addHandler("flash", function (data) {
        var kind = undefined;
        for (kind in data) {
          _this.addFlash(kind, data[kind]);
        }
      });
    }
  }, {
    key: "addFlash",
    value: function addFlash(kind, message) {
      this._flashFactory = this._flashFactory || new _flash_factory.FlashFactory();
      return this._flashFactory.addFlash(kind, message);
    }
  }], [{
    key: "createIframe",
    value: function createIframe(parentDomID, iframeUrl) {
      var lunicorn = new this(new _pym2.default.Parent(parentDomID, iframeUrl, {}));
      lunicorn.addFlashHandler();
      return lunicorn;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNO0FBQ0osV0FESSxRQUNKLENBQVksYUFBWixFQUEyQjswQkFEdkIsVUFDdUI7O0FBQ3pCLFNBQUssYUFBTCxHQUFxQixhQUFyQixDQUR5QjtHQUEzQjs7ZUFESTs7Z0NBS1EsYUFBYSxTQUFTO0FBQ2hDLGdCQUFVLFdBQVcsRUFBWDtBQURzQixVQUVoQyxDQUFLLGFBQUwsQ0FBbUIsV0FBbkIsQ0FBK0IsV0FBL0IsRUFBNEMsS0FBSyxTQUFMLENBQWUsT0FBZixDQUE1QyxFQUZnQzs7OzsrQkFLdkIsYUFBYSxJQUFJO0FBQzFCLFdBQUssYUFBTCxDQUFtQixTQUFuQixDQUE2QixXQUE3QixFQUEwQyxVQUFTLElBQVQsRUFBZTtBQUN2RCxXQUFHLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBSCxFQUR1RDtPQUFmLENBQTFDLENBRDBCOzs7O3NDQU1WOzs7QUFDaEIsV0FBSyxVQUFMLENBQWdCLE9BQWhCLEVBQXlCLFVBQUMsSUFBRCxFQUFTO0FBQ2hDLFlBQUksZ0JBQUosQ0FEZ0M7QUFFaEMsYUFBSyxJQUFMLElBQWEsSUFBYixFQUFtQjtBQUNqQixnQkFBSyxRQUFMLENBQWMsSUFBZCxFQUFvQixLQUFLLElBQUwsQ0FBcEIsRUFEaUI7U0FBbkI7T0FGdUIsQ0FBekIsQ0FEZ0I7Ozs7NkJBU1QsTUFBTSxTQUFTO0FBQ3RCLFdBQUssYUFBTCxHQUFxQixLQUFLLGFBQUwsSUFBc0IsaUNBQXRCLENBREM7QUFFdEIsYUFBTyxLQUFLLGFBQUwsQ0FBbUIsUUFBbkIsQ0FBNEIsSUFBNUIsRUFBa0MsT0FBbEMsQ0FBUCxDQUZzQjs7OztpQ0FLSixhQUFhLFdBQVc7QUFDMUMsVUFBTSxXQUFXLElBQUksSUFBSixDQUFTLElBQUksY0FBSSxNQUFKLENBQVcsV0FBZixFQUE0QixTQUE1QixFQUF1QyxFQUF2QyxDQUFULENBQVgsQ0FEb0M7QUFFMUMsZUFBUyxlQUFULEdBRjBDO0FBRzFDLGFBQU8sUUFBUCxDQUgwQzs7OztvQ0FPVDtVQUFkLGdFQUFVLGtCQUFJOztBQUNqQyxVQUFJLFFBQVEsSUFBSSxjQUFJLEtBQUosQ0FBVSxPQUFkLENBQVIsQ0FENkI7QUFFakMsWUFBTSxVQUFOLEdBRmlDO0FBR2pDLGFBQU8sSUFBSSxJQUFKLENBQVMsS0FBVCxDQUFQLENBSGlDOzs7O1NBckMvQjs7O1FBNENHIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhc2hGYWN0b3J5IH0gZnJvbSBcIi4vZmxhc2hfZmFjdG9yeVwiXG5pbXBvcnQgcHltIGZyb20gXCJweW0uanNcIlxuXG5jbGFzcyBMdW5pY29ybiB7XG4gIGNvbnN0cnVjdG9yKGlmcmFtZUNyb3NzZXIpIHtcbiAgICB0aGlzLmlmcmFtZUNyb3NzZXIgPSBpZnJhbWVDcm9zc2VyXG4gIH1cblxuICBzZW5kTWVzc2FnZShtZXNzYWdlVHlwZSwgbWVzc2FnZSkge1xuICAgIG1lc3NhZ2UgPSBtZXNzYWdlIHx8IHt9IC8vcHltIGRvZXNuIGZpcmUgdGhlIGNhbGxiYWNrIGlmIG1lc3NhZ2UgaXMgdW5kZWZpbmVkXG4gICAgdGhpcy5pZnJhbWVDcm9zc2VyLnNlbmRNZXNzYWdlKG1lc3NhZ2VUeXBlLCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSlcbiAgfVxuXG4gIGFkZEhhbmRsZXIobWVzc2FnZVR5cGUsIGNiKSB7XG4gICAgdGhpcy5pZnJhbWVDcm9zc2VyLm9uTWVzc2FnZShtZXNzYWdlVHlwZSwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgY2IoSlNPTi5wYXJzZShkYXRhKSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRmxhc2hIYW5kbGVyKCkge1xuICAgIHRoaXMuYWRkSGFuZGxlcihcImZsYXNoXCIsIChkYXRhKT0+IHtcbiAgICAgIGxldCBraW5kO1xuICAgICAgZm9yIChraW5kIGluIGRhdGEpIHtcbiAgICAgICAgdGhpcy5hZGRGbGFzaChraW5kLCBkYXRhW2tpbmRdKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGRGbGFzaChraW5kLCBtZXNzYWdlKSB7XG4gICAgdGhpcy5fZmxhc2hGYWN0b3J5ID0gdGhpcy5fZmxhc2hGYWN0b3J5IHx8IG5ldyBGbGFzaEZhY3RvcnkoKVxuICAgIHJldHVybiB0aGlzLl9mbGFzaEZhY3RvcnkuYWRkRmxhc2goa2luZCwgbWVzc2FnZSlcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVJZnJhbWUocGFyZW50RG9tSUQsIGlmcmFtZVVybCkge1xuICAgIGNvbnN0IGx1bmljb3JuID0gbmV3IHRoaXMobmV3IHB5bS5QYXJlbnQocGFyZW50RG9tSUQsIGlmcmFtZVVybCwge30pKVxuICAgIGx1bmljb3JuLmFkZEZsYXNoSGFuZGxlcigpXG4gICAgcmV0dXJuIGx1bmljb3JuXG4gIH1cblxuXG4gIHN0YXRpYyBjb25zdW1lSWZyYW1lKHB5bU9wdHMgPSB7fSkge1xuICAgIGxldCBjaGlsZCA9IG5ldyBweW0uQ2hpbGQocHltT3B0cylcbiAgICBjaGlsZC5zZW5kSGVpZ2h0KClcbiAgICByZXR1cm4gbmV3IHRoaXMoY2hpbGQpXG4gIH1cbn1cblxuZXhwb3J0IHsgTHVuaWNvcm4gfVxuIl19