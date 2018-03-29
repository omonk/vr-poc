import React from 'react';
import { FormattedMessage } from 'react-intl';

export default ({ message }) => (
  <div>
    {message && message.length ? message : <FormattedMessage id="world" />}
    FOOOOOO!
    BAAAAAR!
  </div>
);
