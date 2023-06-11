import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  // Add your reducers to the root reducer
});

const MockReduxWrapper = ({ children }) => {
  const store = createStore(rootReducer);

  return <Provider store={store}>{children}</Provider>;
};

export default MockReduxWrapper;
