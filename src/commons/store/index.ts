import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import Users from './Users/Users.reducer';
import Notifications from './Notifications/Notifications.reducer';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  Users,
  Notifications,
});

// Create the Redux store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export default store;
