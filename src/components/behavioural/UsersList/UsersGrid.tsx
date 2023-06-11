import { useMemo, useState } from 'react';
import UserCard from './UserCard';
import { ErrorMessage, UserGrid } from './styles';
import React from 'react';
import { useSelector } from 'react-redux';
import useUsersData from '../../../commons/hooks/useUsersData';
import { notificationsSelector } from '../../../commons/store/Notifications/Notifications.selectors';
import { INotification } from '../../../commons/store/Notifications/Notifications.interface';
import Notifications from '../../presentational/Notification';
import Loading from '../../presentational/Loading';
import Pagination from '../../presentational/Pagination';
import SearchInput from '../../presentational/SearchInput';

const UsersGrid = () => {
  const { users, isLoading } = useUsersData({ pageSize: 100 });
  const notifications: INotification[] = useSelector(notificationsSelector);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const notification: INotification = useMemo(
    () => notifications[0],
    [notifications]
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredUsers = users.filter((user) =>
    user?.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      {!isLoading && !currentItems.length && (
        <ErrorMessage>No users found</ErrorMessage>
      )}
      {!isLoading && currentItems.length > 0 && (
        <>
          <SearchInput value={searchTerm} onChange={handleSearchInputChange} />
          <UserGrid>
            {currentItems.map((user) => (
              <UserCard key={user.userId} user={user} />
            ))}
          </UserGrid>
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={users.length}
            onPageChange={handlePageChange}
          />
        </>
      )}
      {notification !== undefined && (
        <Notifications notification={notification} />
      )}
    </React.Fragment>
  );
};

export default UsersGrid;
