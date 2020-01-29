import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import faker from 'faker';
// Example component import
import Modal from '../src/index';

const stories = storiesOf('Modal', module);

// add simple story with knobs (component props)
stories.add('Modal', () => (
  <Modal
    width={text('width', '50%')}
    height={text('height', '50%')}
  >
    <Modal.Header>
      Header Text
    </Modal.Header>
    <Modal.Body
      isBorderVisible={boolean('isBorderVisible', false)}
    >
      {faker.lorem.paragraphs(20)}
    </Modal.Body>
    <Modal.Footer>
      Footer Text
    </Modal.Footer>
  </Modal>
));
