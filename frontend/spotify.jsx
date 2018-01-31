import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { logout } from './actions/session_actions';



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  //--------------------Bootstrap Current User-----------------------//
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //-----------------------------------------------------------------//




  //------------------TESTS------------------//

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.logout = () => store.dispatch(logout());

  //-----------------------------------------//



  ReactDOM.render(<Root store={store} />, root);
});
