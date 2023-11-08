import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchUsersRequest } from '../../redux/actions/userActions';
import avatar from '../../assets/img/avatar.jpg'
import { UserAvatar, UserInfo, UserItem } from './UserStiles';
import Loading from '../common/Loading';

const UserList = ({ onSelectUser }) => {
  const dispatch = useDispatch();
  const { users, hasMore } = useSelector((state) => state.users);

  const fetchMoreUsers = () => {
    if (hasMore) {
      dispatch(fetchUsersRequest());
    }
  };

  return (
    <InfiniteScroll
      dataLength={users.length}
      next={fetchMoreUsers}
      hasMore={hasMore}
      loader={<Loading/>}
    >
      {users.map((user) => (
        <UserItem key={user.id} onClick={() => onSelectUser(user)}>
          <UserAvatar src={user.avatarUrl || avatar} alt={user.name} />
          <UserInfo>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </UserInfo>
        </UserItem>
      ))}
    </InfiniteScroll>
  );
};

export default UserList;
