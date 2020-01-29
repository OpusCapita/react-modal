"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _header = _interopRequireDefault(require("./header.component"));

var _body = _interopRequireDefault(require("./body.component"));

var _footer = _interopRequireDefault(require("./footer.component"));

var _buttonContainer = _interopRequireDefault(require("./button-container.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  width: ", ";\n  height: ", ";\n  background-color: rgba(255, 255, 255, 255);\n  padding: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  padding: 20px;\n  background-color: rgba(0, 0, 0, 0.5);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Backdrop = _styledComponents["default"].div(_templateObject());

var ModalContainer = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.width;
}, function (props) {
  return props.height;
});

var Modal =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Modal, _React$PureComponent);

  function Modal() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Modal.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        id = _this$props.id,
        className = _this$props.className,
        isOpen = _this$props.isOpen,
        width = _this$props.width,
        height = _this$props.height;

    if (!isOpen) {
      return null;
    }

    return _react["default"].createElement(Backdrop, {
      className: "oc-modal-backdrop"
    }, _react["default"].createElement(ModalContainer, {
      id: id,
      className: className,
      role: "dialog",
      "aria-hidden": "true",
      width: width,
      height: height
    }, children));
  };

  return Modal;
}(_react["default"].PureComponent);

_defineProperty(Modal, "defaultProps", {
  children: null,
  id: 'oc-modal',
  className: 'oc-modal',
  isOpen: true,
  width: '100%',
  height: '100%'
});

Modal.Header = _header["default"];
Modal.Body = _body["default"];
Modal.Footer = _footer["default"];
Modal.ButtonContainer = _buttonContainer["default"];
var _default = Modal;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RhbC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkJhY2tkcm9wIiwic3R5bGVkIiwiZGl2IiwiTW9kYWxDb250YWluZXIiLCJwcm9wcyIsIndpZHRoIiwiaGVpZ2h0IiwiTW9kYWwiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImlkIiwiY2xhc3NOYW1lIiwiaXNPcGVuIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiSGVhZGVyIiwiQm9keSIsIkZvb3RlciIsIkJ1dHRvbkNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyw2QkFBT0MsR0FBVixtQkFBZDs7QUFXQSxJQUFNQyxjQUFjLEdBQUdGLDZCQUFPQyxHQUFWLHFCQUlULFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQWpCO0FBQUEsQ0FKUyxFQUtSLFVBQUNELEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNFLE1BQWpCO0FBQUEsQ0FMUSxDQUFwQjs7SUFVTUMsSzs7Ozs7Ozs7Ozs7U0FtQkpDLE0sR0FBQSxrQkFBUztBQUFBLHNCQVFILEtBQUtKLEtBUkY7QUFBQSxRQUVMSyxRQUZLLGVBRUxBLFFBRks7QUFBQSxRQUdMQyxFQUhLLGVBR0xBLEVBSEs7QUFBQSxRQUlMQyxTQUpLLGVBSUxBLFNBSks7QUFBQSxRQUtMQyxNQUxLLGVBS0xBLE1BTEs7QUFBQSxRQU1MUCxLQU5LLGVBTUxBLEtBTks7QUFBQSxRQU9MQyxNQVBLLGVBT0xBLE1BUEs7O0FBU1AsUUFBSSxDQUFDTSxNQUFMLEVBQWE7QUFDWCxhQUFPLElBQVA7QUFDRDs7QUFDRCxXQUNFLGdDQUFDLFFBQUQ7QUFBVSxNQUFBLFNBQVMsRUFBQztBQUFwQixPQUNFLGdDQUFDLGNBQUQ7QUFDRSxNQUFBLEVBQUUsRUFBRUYsRUFETjtBQUVFLE1BQUEsU0FBUyxFQUFFQyxTQUZiO0FBR0UsTUFBQSxJQUFJLEVBQUMsUUFIUDtBQUlFLHFCQUFZLE1BSmQ7QUFLRSxNQUFBLEtBQUssRUFBRU4sS0FMVDtBQU1FLE1BQUEsTUFBTSxFQUFFQztBQU5WLE9BUUdHLFFBUkgsQ0FERixDQURGO0FBY0QsRzs7O0VBN0NpQkksa0JBQU1DLGE7O2dCQUFwQlAsSyxrQkFVa0I7QUFDcEJFLEVBQUFBLFFBQVEsRUFBRSxJQURVO0FBRXBCQyxFQUFBQSxFQUFFLEVBQUUsVUFGZ0I7QUFHcEJDLEVBQUFBLFNBQVMsRUFBRSxVQUhTO0FBSXBCQyxFQUFBQSxNQUFNLEVBQUUsSUFKWTtBQUtwQlAsRUFBQUEsS0FBSyxFQUFFLE1BTGE7QUFNcEJDLEVBQUFBLE1BQU0sRUFBRTtBQU5ZLEM7O0FBc0N4QkMsS0FBSyxDQUFDUSxNQUFOLEdBQWVBLGtCQUFmO0FBQ0FSLEtBQUssQ0FBQ1MsSUFBTixHQUFhQSxnQkFBYjtBQUNBVCxLQUFLLENBQUNVLE1BQU4sR0FBZUEsa0JBQWY7QUFDQVYsS0FBSyxDQUFDVyxlQUFOLEdBQXdCQSwyQkFBeEI7ZUFFZVgsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCBCb2R5IGZyb20gJy4vYm9keS5jb21wb25lbnQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IEJ1dHRvbkNvbnRhaW5lciBmcm9tICcuL2J1dHRvbi1jb250YWluZXIuY29tcG9uZW50JztcblxuY29uc3QgQmFja2Ryb3AgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA0MDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuYDtcblxuY29uc3QgTW9kYWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aH07XG4gIGhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLmhlaWdodH07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMjU1KTtcbiAgcGFkZGluZzogMjBweDtcbmA7XG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpc09wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IG51bGwsXG4gICAgaWQ6ICdvYy1tb2RhbCcsXG4gICAgY2xhc3NOYW1lOiAnb2MtbW9kYWwnLFxuICAgIGlzT3BlbjogdHJ1ZSxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaWQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpc09wZW4sXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWlzT3Blbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8QmFja2Ryb3AgY2xhc3NOYW1lPVwib2MtbW9kYWwtYmFja2Ryb3BcIj5cbiAgICAgICAgPE1vZGFsQ29udGFpbmVyXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L01vZGFsQ29udGFpbmVyPlxuICAgICAgPC9CYWNrZHJvcD5cbiAgICApO1xuICB9XG59XG5cbk1vZGFsLkhlYWRlciA9IEhlYWRlcjtcbk1vZGFsLkJvZHkgPSBCb2R5O1xuTW9kYWwuRm9vdGVyID0gRm9vdGVyO1xuTW9kYWwuQnV0dG9uQ29udGFpbmVyID0gQnV0dG9uQ29udGFpbmVyO1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiJdfQ==