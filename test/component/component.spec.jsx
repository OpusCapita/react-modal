/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Modal from '../../src/index';

describe('Modal component', () => {
  it('is rendered', () => {
    const wrapper = mount(<Modal />);
    expect(wrapper).to.exist;
  });
});
