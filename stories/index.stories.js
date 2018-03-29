import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withScreenshot } from 'storybook-chrome-screenshot';
import Hello from '../src/Hello';

module.exports = storiesOf('Welcome', module)
  .addDecorator(withKnobs)
  .addDecorator(withScreenshot())
  .add('Hello with Intl  value', () => <Hello />)
  .add('Hello with message', () => (
    <Hello message={text('message', 'Hello Brave New World')} />
  ));
