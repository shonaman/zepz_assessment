import { all, call } from 'redux-saga/effects';
import UsersSagas from './Users/Users.sagas';

function* rootSaga() {
  const sagas = [UsersSagas];

  yield all(
    sagas.map(function* allSagas(saga) {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {}
      }
    })
  );
}

export default rootSaga;
