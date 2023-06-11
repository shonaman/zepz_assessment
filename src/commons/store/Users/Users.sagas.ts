import { takeEvery, put } from 'redux-saga/effects';
import * as Effects from 'redux-saga/effects';
import * as types from './Users.types';
import { IGetUsersData, IResponseGenerator } from './Users.interface';
import { getWithHeaders } from '../../../api';
import { RESPONSE_TYPE } from '../../constants/responsetype';
import { addNotification } from '../Notifications/Notifications.actions';

const call: any = Effects.call;

export const getHttpHeader = () => {
  const httpOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return httpOptions;
};

interface fetchUsersSagaInterface {
  type: string;
  data: IGetUsersData;
}

export function* fetchUsers({ data }: fetchUsersSagaInterface) {
  const { site, pageSize, order, sort, apiUrl, onLoad } = data;

  const url: string = `${apiUrl}/2.2/users?pageSize=${pageSize}&order=${order}&sort=${sort}&site=${site}`;

  try {
    const response: IResponseGenerator = yield call(getWithHeaders, {
      url,
      headers: getHttpHeader(),
    });

    if (response.status === RESPONSE_TYPE.success && response.data) {
      yield put({ type: types.UPDATE_USERS, payload: response.data });
    } else {
      yield put(
        addNotification({ type: 'danger', text: `Failed to fetch users` })
      );
    }
  } catch (error: any) {
    yield put(
      addNotification({
        type: 'danger',
        text: `Failed to fetch users: ${error?.message}`,
      })
    );
  } finally {
    onLoad();
  }
}

function* UsersSagas() {
  yield takeEvery(types.FETCH_USERS, fetchUsers);
}

export default UsersSagas;
