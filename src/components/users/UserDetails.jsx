import React from 'react';
import { CloseButton, ReportItem, UserDetailsContainer } from './UserStiles';

const UserDetails = ({ user, reports, onClose }) => {
  if (!user) return <div>Select a user to see details</div>;

  const userReports = reports.filter(report => report.userId === user.id);

  return (
    <UserDetailsContainer>
      <CloseButton onClick={onClose}>Close</CloseButton>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <h3>Reports:</h3>
      {userReports.length > 0 ? (
        userReports.map(report => (
          <ReportItem key={report.id}>
            <h4>{report.title}</h4>
            <p>{report.content}</p>
            <p>Date Created: {new Date(report.dateCreated).toLocaleDateString()}</p>
          </ReportItem>
        ))
      ) : (
        <p>No reports found for this user.</p>
      )}
    </UserDetailsContainer>
  );
};

export default UserDetails;
