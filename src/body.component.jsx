import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: ${(props) => (props.isBorderVisible ? 'hidden' : 'auto')};
  min-height: 0%;
  width: 100%;
  border: ${(props) => (props.isBorderVisible ? '1px solid #c3cbd6' : 'none')};
`;

export default class Body extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    isBorderVisible: PropTypes.bool,
    isPerfectScrollbar: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    id: 'oc-modal-body',
    className: 'oc-modal-body',
    isBorderVisible: false,
    isPerfectScrollbar: true,
  }

  render() {
    const {
      children,
      id,
      className,
      isBorderVisible,
      isPerfectScrollbar,
    } = this.props;
    return (
      <BodyContainer
        id={id}
        className={className}
        isBorderVisible={isBorderVisible}
        isPerfectScrollbar={isPerfectScrollbar}
      >
        { isPerfectScrollbar
          ? (
            <PerfectScrollbar>
              {children}
            </PerfectScrollbar>
          ) : (
            children
          )}
      </BodyContainer>
    );
  }
}
