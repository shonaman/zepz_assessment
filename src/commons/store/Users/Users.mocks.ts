import { IGetUsersData, IUsersStore } from './Users.interface';

export const MockInitialState: IUsersStore = {
  users: {
    items: [
      {
        badgeCounts: {
          bronze: 0,
          silver: 1,
          gold: 2,
        },
        accountId: 12,
        isEmployee: false,
        lastModifiedDate: 1,
        lastAccessDate: 2,
        reputationChangeYear: 1,
        reputationChangeQuarter: 1,
        reputationChangeMonth: 1,
        reputationChangeWeek: 1,
        reputationChangeDay: 1,
        reputation: 23,
        creationDate: 45,
        userType: 'registered',
        userId: 1,
        acceptRate: 3,
        location: 'Johannesburg',
        websiteUrl: 'mock-url',
        link: 'link-url',
        profileImage: 'image-url',
        displayName: 'Jeff',
      },
    ],
    hasMore: true,
    quotaMax: 1,
    quotaRemaining: 0,
  },
};

export const FetchUsersMockData: IGetUsersData = {
  site: 'stackoverflow',
  pageSize: 10,
  order: 'desc',
  sort: 'reputation',
  apiUrl: 'mock.com',
  onLoad: jest.fn(),
};

export const MockPayLoadUsersUpdate = {
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
};
