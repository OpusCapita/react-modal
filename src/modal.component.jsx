import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './header.component';
import Body from './body.component';
import Footer from './footer.component';
import ButtonContainer from './button-container.component';

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: rgba(255, 255, 255, 255);
  padding: 20px;
`;

class Modal extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    id: 'oc-modal',
    className: 'oc-modal',
    isOpen: true,
    width: '100%',
    height: '100%',
  }

  render() {
    const {
      children,
      id,
      className,
      isOpen,
      width,
      height,
    } = this.props;
    if (!isOpen) {
      return null;
    }
    return (
      <Backdrop className="oc-modal-backdrop">
        <ModalContainer
          id={id}
          className={className}
          role="dialog"
          aria-hidden="true"
          width={width}
          height={height}
        >
          {children}
        </ModalContainer>
      </Backdrop>
    );
  }
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
Modal.ButtonContainer = ButtonContainer;

export default Modal;
