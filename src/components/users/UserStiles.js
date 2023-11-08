import styled from 'styled-components';

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserDetailsContainer = styled.div`
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0.5em 1em;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(211, 47, 47, 0.5);
  }
`;


export const ReportItem = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const UserInfo = styled.div`
  margin-left: 10px;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;