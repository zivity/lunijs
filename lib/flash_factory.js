"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlashFactory = function () {
  function FlashFactory() {
    var containerId = arguments.length <= 0 || arguments[0] === undefined ? "lunicorn_flash" : arguments[0];

    _classCallCheck(this, FlashFactory);

    this.container = this.createContainer(containerId);
  }

  _createClass(FlashFactory, [{
    key: "addFlash",
    value: function addFlash(kind, message) {
      var flashTimeoutMS = arguments.length <= 2 || arguments[2] === undefined ? 7000 : arguments[2];

      var flash = new FlashMessage(kind, message);
      this.container.appendChild(flash.el);
      flash.scrollTo();
      setTimeout(flash.remove.bind(flash), flashTimeoutMS);
      return flash;
    }
  }, {
    key: "createContainer",
    value: function createContainer(containerId) {
      var container = document.createElement("div");
      container.id = containerId;
      document.body.insertBefore(container, document.body.childNodes[0]);
      return container;
    }
  }]);

  return FlashFactory;
}();

var FlashMessage = function () {
  function FlashMessage(kind, text) {
    _classCallCheck(this, FlashMessage);

    this.el = this.createElement(kind);
    this.message = this.sanitizeMessage(text);
    this.el.appendChild(this.message);
  }

  _createClass(FlashMessage, [{
    key: "sanitizeMessage",
    value: function sanitizeMessage(text) {
      return document.createTextNode(text);
    }
  }, {
    key: "createElement",
    value: function createElement(kind) {
      var element = document.createElement("div");
      element.className = kind;
      return element;
    }
  }, {
    key: "scrollTo",
    value: function scrollTo() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "remove",
    value: function remove() {
      console.log("wats");
      this.el.remove();
    }
  }]);

  return FlashMessage;
}();

exports.FlashFactory = FlashFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mbGFzaF9mYWN0b3J5LmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU07QUFDSixXQURJLFlBQ0osR0FBeUM7UUFBN0Isb0VBQVksZ0NBQWlCOzswQkFEckMsY0FDcUM7O0FBQ3ZDLFNBQUssU0FBTCxHQUFpQixLQUFLLGVBQUwsQ0FBcUIsV0FBckIsQ0FBakIsQ0FEdUM7R0FBekM7O2VBREk7OzZCQUtLLE1BQU0sU0FBOEI7VUFBckIsdUVBQWUsb0JBQU07O0FBQzNDLFVBQU0sUUFBUSxJQUFJLFlBQUosQ0FBaUIsSUFBakIsRUFBdUIsT0FBdkIsQ0FBUixDQURxQztBQUUzQyxXQUFLLFNBQUwsQ0FBZSxXQUFmLENBQTJCLE1BQU0sRUFBTixDQUEzQixDQUYyQztBQUczQyxZQUFNLFFBQU4sR0FIMkM7QUFJM0MsaUJBQVcsTUFBTSxNQUFOLENBQWEsSUFBYixDQUFrQixLQUFsQixDQUFYLEVBQXFDLGNBQXJDLEVBSjJDO0FBSzNDLGFBQU8sS0FBUCxDQUwyQzs7OztvQ0FRN0IsYUFBWTtBQUMxQixVQUFNLFlBQVksU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQVosQ0FEb0I7QUFFMUIsZ0JBQVUsRUFBVixHQUFlLFdBQWYsQ0FGMEI7QUFHMUIsZUFBUyxJQUFULENBQWMsWUFBZCxDQUEyQixTQUEzQixFQUFzQyxTQUFTLElBQVQsQ0FBYyxVQUFkLENBQXlCLENBQXpCLENBQXRDLEVBSDBCO0FBSTFCLGFBQU8sU0FBUCxDQUowQjs7OztTQWJ4Qjs7O0lBcUJBO0FBQ0osV0FESSxZQUNKLENBQVksSUFBWixFQUFrQixJQUFsQixFQUF3QjswQkFEcEIsY0FDb0I7O0FBQ3RCLFNBQUssRUFBTCxHQUFVLEtBQUssYUFBTCxDQUFtQixJQUFuQixDQUFWLENBRHNCO0FBRXRCLFNBQUssT0FBTCxHQUFlLEtBQUssZUFBTCxDQUFxQixJQUFyQixDQUFmLENBRnNCO0FBR3RCLFNBQUssRUFBTCxDQUFRLFdBQVIsQ0FBb0IsS0FBSyxPQUFMLENBQXBCLENBSHNCO0dBQXhCOztlQURJOztvQ0FPWSxNQUFLO0FBQ25CLGFBQU8sU0FBUyxjQUFULENBQXdCLElBQXhCLENBQVAsQ0FEbUI7Ozs7a0NBSVAsTUFBSztBQUNqQixVQUFNLFVBQVUsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQVYsQ0FEVztBQUVqQixjQUFRLFNBQVIsR0FBb0IsSUFBcEIsQ0FGaUI7QUFHakIsYUFBTyxPQUFQLENBSGlCOzs7OytCQU1UO0FBQ1IsYUFBTyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBRFE7Ozs7NkJBSUQ7QUFDUCxjQUFRLEdBQVIsQ0FBWSxNQUFaLEVBRE87QUFFUCxXQUFLLEVBQUwsQ0FBUSxNQUFSLEdBRk87Ozs7U0FyQkw7OztRQTJCRyIsImZpbGUiOiJmbGFzaF9mYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRmxhc2hGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoY29udGFpbmVySWQ9XCJsdW5pY29ybl9mbGFzaFwiKXtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY3JlYXRlQ29udGFpbmVyKGNvbnRhaW5lcklkKVxuICB9XG5cbiAgYWRkRmxhc2goa2luZCwgbWVzc2FnZSwgZmxhc2hUaW1lb3V0TVM9NzAwMCkge1xuICAgIGNvbnN0IGZsYXNoID0gbmV3IEZsYXNoTWVzc2FnZShraW5kLCBtZXNzYWdlKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGZsYXNoLmVsKVxuICAgIGZsYXNoLnNjcm9sbFRvKClcbiAgICBzZXRUaW1lb3V0KGZsYXNoLnJlbW92ZS5iaW5kKGZsYXNoKSwgZmxhc2hUaW1lb3V0TVMpXG4gICAgcmV0dXJuIGZsYXNoXG4gIH1cblxuICBjcmVhdGVDb250YWluZXIoY29udGFpbmVySWQpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXIuaWQgPSBjb250YWluZXJJZFxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzBdKVxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxufVxuXG5jbGFzcyBGbGFzaE1lc3NhZ2V7XG4gIGNvbnN0cnVjdG9yKGtpbmQsIHRleHQpIHtcbiAgICB0aGlzLmVsID0gdGhpcy5jcmVhdGVFbGVtZW50KGtpbmQpXG4gICAgdGhpcy5tZXNzYWdlID0gdGhpcy5zYW5pdGl6ZU1lc3NhZ2UodGV4dClcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZSlcbiAgfVxuXG4gIHNhbml0aXplTWVzc2FnZSh0ZXh0KXtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dClcbiAgfVxuXG4gIGNyZWF0ZUVsZW1lbnQoa2luZCl7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGtpbmRcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgc2Nyb2xsVG8oKXtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIndhdHNcIilcbiAgICB0aGlzLmVsLnJlbW92ZSgpXG4gIH1cbn1cblxuZXhwb3J0IHsgRmxhc2hGYWN0b3J5IH1cbiJdfQ==