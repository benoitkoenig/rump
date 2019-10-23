import React from 'react'
import { Provider } from 'react-redux'

import App from './components/app';
import store from './redux/store';

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
