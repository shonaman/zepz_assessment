import { fetchUsers } from './Users.actions';
import { FetchUsersMockData } from './Users.mocks';
import * as types from './Users.types';

describe('Redux Users Actions Tests', () => {
  it('should return an object with the correct type and data for fetch users', () => {
    const data = FetchUsersMockData;

    const expectedAction = {
      type: types.FETCH_USERS,
      data,
    };

    expect(fetchUsers(data)).toEqual(expectedAction);
  });

  it('should have the correct data items needed to fetch users', () => {
    const data = FetchUsersMockData;

    expect(data.site).toEqual('stackoverflow');
    expect(data.pageSize).toEqual(10);
    expect(data.order).toEqual('desc');
    expect(data.sort).toEqual('reputation');
    expect(data.apiUrl).toEqual('mock.com');
    expect(typeof data.onLoad).toEqual('function');
  });
});
