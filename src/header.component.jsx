import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  overflow: hidden;
  min-height: 0%;
  width: 100%;
  padding-bottom: 10px;
`;

export default class Header extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    id: 'oc-modal-header',
    className: 'oc-modal-header',
  }

  render() {
    const {
      children,
      id,
      className,
    } = this.props;
    return (
      <HeaderContainer id={id} className={className}>
        {children}
      </HeaderContainer>
    );
  }
}
