import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../../redux/actions/userActions';
import UserList from '../users/UserList';
import UserDetails from '../users/UserDetails';
import { fetchReportsRequest } from '../../redux/actions/reportActions';
import { UsersContainer } from '../users/UserStiles';
import Loading from '../common/Loading';
import ErrorComponent from '../common/ErrorMessage';

const UsersPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state.users);
  const { reports } = useSelector((state) => state.reports);
  
  useEffect(() => {
    if(!users.length){
      dispatch(fetchUsersRequest());
    }
  }, [dispatch, users.length]);

  const handleSelectUser = async (user) => {
    setSelectedUser(user);
  
    const userReports = reports.filter(report => report.userId === user.id);
  
    if (userReports.length === 0) {

      try {
        await dispatch(fetchReportsRequest());
      } catch (error) {
        console.log(error)
      }
    }
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
  };

  return (
    <UsersContainer>
      {loading && <Loading/>}
      {error && <ErrorComponent message={error} />}
      {selectedUser ? (
        <UserDetails user={selectedUser} reports={reports} onClose={handleCloseDetails} />
      ) : (
        <UserList users={users} onSelectUser={handleSelectUser} />
      )}
    </UsersContainer>
  );
};

export default UsersPage;
