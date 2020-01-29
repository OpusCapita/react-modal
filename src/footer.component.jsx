import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  overflow: hidden;
  min-height: 0%;
  width: 100%;
  padding-top: 10px;
`;

export default class Footer extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    id: 'oc-modal-footer',
    className: 'oc-modal-footer',
  }

  render() {
    const {
      children,
      id,
      className,
    } = this.props;
    return (
      <FooterContainer id={id} className={className}>
        {children}
      </FooterContainer>
    );
  }
}
