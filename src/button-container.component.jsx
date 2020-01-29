import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalButtonContainer = styled.div`
  flex: 0 0 auto;
  align-self: flex-end;
  min-width: 0%;
  overflow: hidden;
`;

export default class ButtonContainer extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    id: 'oc-modal-button-container',
    className: 'oc-modal-button-container',
  }

  render() {
    const {
      children,
      id,
      className,
    } = this.props;
    return (
      <ModalButtonContainer id={id} className={className}>
        {children}
      </ModalButtonContainer>
    );
  }
}
