import { IUsersStore } from './Users.interface';
import { MockPayLoadUsersUpdate } from './Users.mocks';
import reducer, { INITIAL_STATE } from './Users.reducer';
import * as types from './Users.types';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should update users when UPDATE_USERS action is fired', () => {
    const initialState: IUsersStore = {
      users: {
        items: [],
        hasMore: false,
        quotaMax: 0,
        quotaRemaining: 0,
      },
    };

    const action = {
      type: types.UPDATE_USERS,
      payload: MockPayLoadUsersUpdate,
    };

    const expectedState: IUsersStore = {
      users: {
        items: [
          {
            badgeCounts: {
              bronze: 0,
              silver: 0,
              gold: 0,
            },
            accountId: 123,
            isEmployee: false,
            lastModifiedDate: 1627024000,
            lastAccessDate: 1627024000,
            reputationChangeYear: 100,
            reputationChangeQuarter: 50,
            reputationChangeMonth: 20,
            reputationChangeWeek: 10,
            reputationChangeDay: 5,
            reputation: 1000,
            creationDate: 1627024000,
            userType: 'registered',
            userId: 123,
            websiteUrl: 'web-url.com',
            link: 'mock-link',
            profileImage: 'jeff.jpg',
            displayName: 'Jeff',
          },
        ],
        hasMore: true,
        quotaMax: 1000,
        quotaRemaining: 500,
      },
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
