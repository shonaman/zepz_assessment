import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/Users/Users.actions';
import { usersSelector } from '../store/Users/Users.selectors';
import { User } from '../store/Users/Users.interface';

interface useUsersDataProps {
  pageSize?: number;
}

const useUsersData = ({ pageSize }: useUsersDataProps) => {
  const users: User[] = useSelector(usersSelector);
  const [apiUrl, setApiUrl] = useState<string | undefined>(undefined);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setApiUrl(process.env.REACT_APP_API_URL);
  }, []);

  useEffect(() => {
    if (apiUrl !== undefined) {
      dispatch(
        fetchUsers({
          site: 'stackoverflow',
          pageSize: pageSize,
          order: 'desc',
          sort: 'reputation',
          apiUrl,
          onLoad: () => setIsLoading(false),
        })
      );
    }
  }, [apiUrl, dispatch, pageSize]);

  return { users, isLoading };
};

export default useUsersData;
