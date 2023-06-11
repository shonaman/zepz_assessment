import * as types from './Users.types';

describe('Redux Users Action Types', () => {
  it('FETCH_USERS type should match the expected value', () => {
    expect(types.FETCH_USERS).toEqual('Users.FETCH_USERS');
  });

  it('UPDATE_USERS type should match the expected value', () => {
    expect(types.UPDATE_USERS).toEqual('Users.UPDATE_USERS');
  });
});
