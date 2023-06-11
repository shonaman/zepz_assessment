import { renderHook } from '@testing-library/react';
import useUsersData from './useUsersData';
import { MockInitialState as UsersState } from '../store/Users/Users.mocks';
import * as usersSelectors from '../store/Users/Users.selectors';
import { User } from '../store/Users/Users.interface';
import MockReduxWrapper from '../utils/MockReduxWrapper';

let hook;

interface SetupProps {
  users?: User[];
  pageSize?: number;
}

const defaultProps: SetupProps = {
  users: UsersState.users.items,
  pageSize: 20,
};

const setup = ({ users, pageSize }: SetupProps = defaultProps) => {
  jest.spyOn(usersSelectors, 'usersSelector').mockReturnValue(users || []);

  hook = renderHook(() => useUsersData({ pageSize }), {
    wrapper: MockReduxWrapper,
  });
};

describe('useUsersData Hook', () => {
  beforeEach(() => {
    setup();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set isLoading to true when users is empty array', () => {
    setup({ ...defaultProps, users: [] });
    expect(hook.result.current.isLoading).toBeTruthy();
  });

  it('should return users when called', () => {
    const { result } = hook;
    expect(result.current.users).toBeTruthy();
  });

  it('should return isLoading called', () => {
    const { result } = hook;
    expect(result.current.isLoading).toBeTruthy();
  });
});
