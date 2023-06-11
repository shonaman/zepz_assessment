export interface IUsersStore {
  users: IUsers;
}

export interface IUsers {
  items: User[];
  hasMore: boolean;
  quotaMax: number;
  quotaRemaining: number;
}

export interface User {
  badgeCounts: BadgeCounts;
  accountId: number;
  isEmployee: boolean;
  lastModifiedDate: number;
  lastAccessDate: number;
  reputationChangeYear: number;
  reputationChangeQuarter: number;
  reputationChangeMonth: number;
  reputationChangeWeek: number;
  reputationChangeDay: number;
  reputation: number;
  creationDate: number;
  userType: string;
  userId: number;
  acceptRate?: number;
  location?: string;
  websiteUrl: string;
  link: string;
  profileImage: string;
  displayName: string;
}

export interface BadgeCounts {
  bronze: number;
  silver: number;
  gold: number;
}

export enum UserType {
  Moderator = 'moderator',
  Registered = 'registered',
}

export interface IGetUsersData {
  site?: string;
  pageSize?: number;
  order?: string;
  sort?: string;
  apiUrl: string;
  onLoad: () => void;
}

export interface IResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
