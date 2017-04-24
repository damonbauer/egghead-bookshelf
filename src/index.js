import React from 'react';
import ReactDOM from 'react-dom';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import es from 'react-intl/locale-data/es';

import messages from './messages';

import App from './App';
import './index.css';

addLocaleData([...en, ...fr, ...es]);

let locale = (navigator.languages && navigator.languages[0])
             || navigator.language
             || navigator.userLanguage
             || 'en-US';

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages[locale]}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);