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

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';
var BodyContainer = styled.div(_templateObject(), function (props) {
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
    return React.createElement(BodyContainer, {
      id: id,
      className: className,
      isBorderVisible: isBorderVisible
    }, React.createElement(PerfectScrollbar, null, children));
  };

  return Body;
}(React.PureComponent);

_defineProperty(Body, "defaultProps", {
  children: null,
  id: 'oc-modal-body',
  className: 'oc-modal-body',
  isBorderVisible: false
});

export { Body as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib2R5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJQZXJmZWN0U2Nyb2xsYmFyIiwiQm9keUNvbnRhaW5lciIsImRpdiIsInByb3BzIiwiaXNCb3JkZXJWaXNpYmxlIiwiQm9keSIsInJlbmRlciIsImNoaWxkcmVuIiwiaWQiLCJjbGFzc05hbWUiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLHFDQUE3QjtBQUVBLElBQU1DLGFBQWEsR0FBR0YsTUFBTSxDQUFDRyxHQUFWLG9CQU9QLFVBQUNDLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLGVBQU4sR0FBd0IsbUJBQXhCLEdBQThDLE1BQTFEO0FBQUEsQ0FQTyxDQUFuQjs7SUFVcUJDLEk7Ozs7Ozs7Ozs7O1NBZW5CQyxNLEdBQUEsa0JBQVM7QUFBQSxzQkFNSCxLQUFLSCxLQU5GO0FBQUEsUUFFTEksUUFGSyxlQUVMQSxRQUZLO0FBQUEsUUFHTEMsRUFISyxlQUdMQSxFQUhLO0FBQUEsUUFJTEMsU0FKSyxlQUlMQSxTQUpLO0FBQUEsUUFLTEwsZUFMSyxlQUtMQSxlQUxLO0FBT1AsV0FDRSxvQkFBQyxhQUFEO0FBQ0UsTUFBQSxFQUFFLEVBQUVJLEVBRE47QUFFRSxNQUFBLFNBQVMsRUFBRUMsU0FGYjtBQUdFLE1BQUEsZUFBZSxFQUFFTDtBQUhuQixPQUtFLG9CQUFDLGdCQUFELFFBQ0dHLFFBREgsQ0FMRixDQURGO0FBV0QsRzs7O0VBakMrQlYsS0FBSyxDQUFDYSxhOztnQkFBbkJMLEksa0JBUUc7QUFDcEJFLEVBQUFBLFFBQVEsRUFBRSxJQURVO0FBRXBCQyxFQUFBQSxFQUFFLEVBQUUsZUFGZ0I7QUFHcEJDLEVBQUFBLFNBQVMsRUFBRSxlQUhTO0FBSXBCTCxFQUFBQSxlQUFlLEVBQUU7QUFKRyxDOztTQVJIQyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcblxuY29uc3QgQm9keUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogJHsocHJvcHMpID0+IChwcm9wcy5pc0JvcmRlclZpc2libGUgPyAnMXB4IHNvbGlkICNjM2NiZDYnIDogJ25vbmUnKX07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2R5IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpc0JvcmRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgICBpZDogJ29jLW1vZGFsLWJvZHknLFxuICAgIGNsYXNzTmFtZTogJ29jLW1vZGFsLWJvZHknLFxuICAgIGlzQm9yZGVyVmlzaWJsZTogZmFsc2UsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGlzQm9yZGVyVmlzaWJsZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEJvZHlDb250YWluZXJcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgaXNCb3JkZXJWaXNpYmxlPXtpc0JvcmRlclZpc2libGV9XG4gICAgICA+XG4gICAgICAgIDxQZXJmZWN0U2Nyb2xsYmFyPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9QZXJmZWN0U2Nyb2xsYmFyPlxuICAgICAgPC9Cb2R5Q29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==