"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactPerfectScrollbar = _interopRequireDefault(require("@opuscapita/react-perfect-scrollbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  overflow: hidden;\n  min-height: 0%;\n  width: 100%;\n  border: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var BodyContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.isBorderVisible ? '1px solid #c3cbd6' : 'none';
});

var Body =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Body, _React$PureComponent);

  function Body() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Body.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        id = _this$props.id,
        className = _this$props.className,
        isBorderVisible = _this$props.isBorderVisible;
    return _react["default"].createElement(BodyContainer, {
      id: id,
      className: className,
      isBorderVisible: isBorderVisible
    }, _react["default"].createElement(_reactPerfectScrollbar["default"], null, children));
  };

  return Body;
}(_react["default"].PureComponent);

exports["default"] = Body;

_defineProperty(Body, "defaultProps", {
  children: null,
  id: 'oc-modal-body',
  className: 'oc-modal-body',
  isBorderVisible: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib2R5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiQm9keUNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaXNCb3JkZXJWaXNpYmxlIiwiQm9keSIsInJlbmRlciIsImNoaWxkcmVuIiwiaWQiLCJjbGFzc05hbWUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQyw2QkFBT0MsR0FBVixvQkFPUCxVQUFDQyxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDQyxlQUFOLEdBQXdCLG1CQUF4QixHQUE4QyxNQUExRDtBQUFBLENBUE8sQ0FBbkI7O0lBVXFCQyxJOzs7Ozs7Ozs7OztTQWVuQkMsTSxHQUFBLGtCQUFTO0FBQUEsc0JBTUgsS0FBS0gsS0FORjtBQUFBLFFBRUxJLFFBRkssZUFFTEEsUUFGSztBQUFBLFFBR0xDLEVBSEssZUFHTEEsRUFISztBQUFBLFFBSUxDLFNBSkssZUFJTEEsU0FKSztBQUFBLFFBS0xMLGVBTEssZUFLTEEsZUFMSztBQU9QLFdBQ0UsZ0NBQUMsYUFBRDtBQUNFLE1BQUEsRUFBRSxFQUFFSSxFQUROO0FBRUUsTUFBQSxTQUFTLEVBQUVDLFNBRmI7QUFHRSxNQUFBLGVBQWUsRUFBRUw7QUFIbkIsT0FLRSxnQ0FBQyxpQ0FBRCxRQUNHRyxRQURILENBTEYsQ0FERjtBQVdELEc7OztFQWpDK0JHLGtCQUFNQyxhOzs7O2dCQUFuQk4sSSxrQkFRRztBQUNwQkUsRUFBQUEsUUFBUSxFQUFFLElBRFU7QUFFcEJDLEVBQUFBLEVBQUUsRUFBRSxlQUZnQjtBQUdwQkMsRUFBQUEsU0FBUyxFQUFFLGVBSFM7QUFJcEJMLEVBQUFBLGVBQWUsRUFBRTtBQUpHLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xuXG5jb25zdCBCb2R5Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMSAxIGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzQm9yZGVyVmlzaWJsZSA/ICcxcHggc29saWQgI2MzY2JkNicgOiAnbm9uZScpfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvZHkgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlzQm9yZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGlkOiAnb2MtbW9kYWwtYm9keScsXG4gICAgY2xhc3NOYW1lOiAnb2MtbW9kYWwtYm9keScsXG4gICAgaXNCb3JkZXJWaXNpYmxlOiBmYWxzZSxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlkLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaXNCb3JkZXJWaXNpYmxlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Qm9keUNvbnRhaW5lclxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBpc0JvcmRlclZpc2libGU9e2lzQm9yZGVyVmlzaWJsZX1cbiAgICAgID5cbiAgICAgICAgPFBlcmZlY3RTY3JvbGxiYXI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1BlcmZlY3RTY3JvbGxiYXI+XG4gICAgICA8L0JvZHlDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuIl19