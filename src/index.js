import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

import store from './store/store';


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


