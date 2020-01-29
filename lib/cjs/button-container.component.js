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
  var data = _taggedTemplateLiteralLoose(["\n  flex: 0 0 auto;\n  align-self: flex-end;\n  min-width: 0%;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var ModalButtonContainer = _styledComponents["default"].div(_templateObject());

var ButtonContainer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ButtonContainer, _React$PureComponent);

  function ButtonContainer() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ButtonContainer.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        id = _this$props.id,
        className = _this$props.className;
    return _react["default"].createElement(ModalButtonContainer, {
      id: id,
      className: className
    }, children);
  };

  return ButtonContainer;
}(_react["default"].PureComponent);

exports["default"] = ButtonContainer;

_defineProperty(ButtonContainer, "defaultProps", {
  children: null,
  id: 'oc-modal-button-container',
  className: 'oc-modal-button-container'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24tY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTW9kYWxCdXR0b25Db250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJCdXR0b25Db250YWluZXIiLCJyZW5kZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiaWQiLCJjbGFzc05hbWUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUExQjs7SUFPcUJDLGU7Ozs7Ozs7Ozs7O1NBYW5CQyxNLEdBQUEsa0JBQVM7QUFBQSxzQkFLSCxLQUFLQyxLQUxGO0FBQUEsUUFFTEMsUUFGSyxlQUVMQSxRQUZLO0FBQUEsUUFHTEMsRUFISyxlQUdMQSxFQUhLO0FBQUEsUUFJTEMsU0FKSyxlQUlMQSxTQUpLO0FBTVAsV0FDRSxnQ0FBQyxvQkFBRDtBQUFzQixNQUFBLEVBQUUsRUFBRUQsRUFBMUI7QUFBOEIsTUFBQSxTQUFTLEVBQUVDO0FBQXpDLE9BQ0dGLFFBREgsQ0FERjtBQUtELEc7OztFQXhCMENHLGtCQUFNQyxhOzs7O2dCQUE5QlAsZSxrQkFPRztBQUNwQkcsRUFBQUEsUUFBUSxFQUFFLElBRFU7QUFFcEJDLEVBQUFBLEVBQUUsRUFBRSwyQkFGZ0I7QUFHcEJDLEVBQUFBLFNBQVMsRUFBRTtBQUhTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBNb2RhbEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDAgMCBhdXRvO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgbWluLXdpZHRoOiAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkNvbnRhaW5lciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGlkOiAnb2MtbW9kYWwtYnV0dG9uLWNvbnRhaW5lcicsXG4gICAgY2xhc3NOYW1lOiAnb2MtbW9kYWwtYnV0dG9uLWNvbnRhaW5lcicsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsQnV0dG9uQ29udGFpbmVyIGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L01vZGFsQnV0dG9uQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==