import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import { addLocaleData } from 'react-intl';
import { initScreenshot } from 'storybook-chrome-screenshot';
import enLocaleData from 'react-intl/locale-data/en';
import ptLocaleData from 'react-intl/locale-data/pt';
import en from '../i18n/en';
import pt from '../i18n/pt';

// Set up i18n
const messages = {
  en,
  pt,
};

addDecorator(initScreenshot());

addLocaleData(enLocaleData);
addLocaleData(ptLocaleData);
setIntlConfig({
  locales: ['en', 'pt'],
  defaultLocale: 'en',
  getMessages: locale => messages[locale],
});

addDecorator(withIntl);

// Set up axe-core
if (process && process.browser) {
  const axe = require('axe-core');
  axe.configure(require('../axe-config.json'));
  addDecorator(checkA11y);
}

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
