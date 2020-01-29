function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n  overflow: hidden;\n  min-height: 0%;\n  width: 100%;\n  padding-bottom: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
var HeaderContainer = styled.div(_templateObject());

var Header =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Header, _React$PureComponent);

  function Header() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Header.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        id = _this$props.id,
        className = _this$props.className;
    return React.createElement(HeaderContainer, {
      id: id,
      className: className
    }, children);
  };

  return Header;
}(React.PureComponent);

_defineProperty(Header, "defaultProps", {
  children: null,
  id: 'oc-modal-header',
  className: 'oc-modal-header'
});

export { Header as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFkZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIkhlYWRlckNvbnRhaW5lciIsImRpdiIsIkhlYWRlciIsInJlbmRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJpZCIsImNsYXNzTmFtZSIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBRUEsSUFBTUMsZUFBZSxHQUFHRCxNQUFNLENBQUNFLEdBQVYsbUJBQXJCOztJQVVxQkMsTTs7Ozs7Ozs7Ozs7U0FhbkJDLE0sR0FBQSxrQkFBUztBQUFBLHNCQUtILEtBQUtDLEtBTEY7QUFBQSxRQUVMQyxRQUZLLGVBRUxBLFFBRks7QUFBQSxRQUdMQyxFQUhLLGVBR0xBLEVBSEs7QUFBQSxRQUlMQyxTQUpLLGVBSUxBLFNBSks7QUFNUCxXQUNFLG9CQUFDLGVBQUQ7QUFBaUIsTUFBQSxFQUFFLEVBQUVELEVBQXJCO0FBQXlCLE1BQUEsU0FBUyxFQUFFQztBQUFwQyxPQUNHRixRQURILENBREY7QUFLRCxHOzs7RUF4QmlDUixLQUFLLENBQUNXLGE7O2dCQUFyQk4sTSxrQkFPRztBQUNwQkcsRUFBQUEsUUFBUSxFQUFFLElBRFU7QUFFcEJDLEVBQUFBLEVBQUUsRUFBRSxpQkFGZ0I7QUFHcEJDLEVBQUFBLFNBQVMsRUFBRTtBQUhTLEM7O1NBUEhMLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLWhlaWdodDogMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGlkOiAnb2MtbW9kYWwtaGVhZGVyJyxcbiAgICBjbGFzc05hbWU6ICdvYy1tb2RhbC1oZWFkZXInLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaWQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkZXJDb250YWluZXIgaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvSGVhZGVyQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==