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

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
var ModalButtonContainer = styled.div(_templateObject());

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
    return React.createElement(ModalButtonContainer, {
      id: id,
      className: className
    }, children);
  };

  return ButtonContainer;
}(React.PureComponent);

_defineProperty(ButtonContainer, "defaultProps", {
  children: null,
  id: 'oc-modal-button-container',
  className: 'oc-modal-button-container'
});

export { ButtonContainer as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24tY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJNb2RhbEJ1dHRvbkNvbnRhaW5lciIsImRpdiIsIkJ1dHRvbkNvbnRhaW5lciIsInJlbmRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJpZCIsImNsYXNzTmFtZSIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBRUEsSUFBTUMsb0JBQW9CLEdBQUdELE1BQU0sQ0FBQ0UsR0FBVixtQkFBMUI7O0lBT3FCQyxlOzs7Ozs7Ozs7OztTQWFuQkMsTSxHQUFBLGtCQUFTO0FBQUEsc0JBS0gsS0FBS0MsS0FMRjtBQUFBLFFBRUxDLFFBRkssZUFFTEEsUUFGSztBQUFBLFFBR0xDLEVBSEssZUFHTEEsRUFISztBQUFBLFFBSUxDLFNBSkssZUFJTEEsU0FKSztBQU1QLFdBQ0Usb0JBQUMsb0JBQUQ7QUFBc0IsTUFBQSxFQUFFLEVBQUVELEVBQTFCO0FBQThCLE1BQUEsU0FBUyxFQUFFQztBQUF6QyxPQUNHRixRQURILENBREY7QUFLRCxHOzs7RUF4QjBDUixLQUFLLENBQUNXLGE7O2dCQUE5Qk4sZSxrQkFPRztBQUNwQkcsRUFBQUEsUUFBUSxFQUFFLElBRFU7QUFFcEJDLEVBQUFBLEVBQUUsRUFBRSwyQkFGZ0I7QUFHcEJDLEVBQUFBLFNBQVMsRUFBRTtBQUhTLEM7O1NBUEhMLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBNb2RhbEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDAgMCBhdXRvO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgbWluLXdpZHRoOiAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkNvbnRhaW5lciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGlkOiAnb2MtbW9kYWwtYnV0dG9uLWNvbnRhaW5lcicsXG4gICAgY2xhc3NOYW1lOiAnb2MtbW9kYWwtYnV0dG9uLWNvbnRhaW5lcicsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsQnV0dG9uQ29udGFpbmVyIGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L01vZGFsQnV0dG9uQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==