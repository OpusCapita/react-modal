"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n  overflow: hidden;\n  min-height: 0%;\n  width: 100%;\n  padding-top: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var FooterContainer = _styledComponents["default"].div(_templateObject());

var Footer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Footer, _React$PureComponent);

  function Footer() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Footer.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        id = _this$props.id,
        className = _this$props.className;
    return _react["default"].createElement(FooterContainer, {
      id: id,
      className: className
    }, children);
  };

  return Footer;
}(_react["default"].PureComponent);

exports["default"] = Footer;

_defineProperty(Footer, "defaultProps", {
  children: null,
  id: 'oc-modal-footer',
  className: 'oc-modal-footer'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb290ZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJGb290ZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb290ZXIiLCJyZW5kZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiaWQiLCJjbGFzc05hbWUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHQyw2QkFBT0MsR0FBVixtQkFBckI7O0lBVXFCQyxNOzs7Ozs7Ozs7OztTQWFuQkMsTSxHQUFBLGtCQUFTO0FBQUEsc0JBS0gsS0FBS0MsS0FMRjtBQUFBLFFBRUxDLFFBRkssZUFFTEEsUUFGSztBQUFBLFFBR0xDLEVBSEssZUFHTEEsRUFISztBQUFBLFFBSUxDLFNBSkssZUFJTEEsU0FKSztBQU1QLFdBQ0UsZ0NBQUMsZUFBRDtBQUFpQixNQUFBLEVBQUUsRUFBRUQsRUFBckI7QUFBeUIsTUFBQSxTQUFTLEVBQUVDO0FBQXBDLE9BQ0dGLFFBREgsQ0FERjtBQUtELEc7OztFQXhCaUNHLGtCQUFNQyxhOzs7O2dCQUFyQlAsTSxrQkFPRztBQUNwQkcsRUFBQUEsUUFBUSxFQUFFLElBRFU7QUFFcEJDLEVBQUFBLEVBQUUsRUFBRSxpQkFGZ0I7QUFHcEJDLEVBQUFBLFNBQVMsRUFBRTtBQUhTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBGb290ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLWhlaWdodDogMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGlkOiAnb2MtbW9kYWwtZm9vdGVyJyxcbiAgICBjbGFzc05hbWU6ICdvYy1tb2RhbC1mb290ZXInLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaWQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb290ZXJDb250YWluZXIgaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvRm9vdGVyQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==