import React from 'react';
import {
  ReportItem,
  ReportTitle,
  ReportContent,
  ReportDate,
  ActionButtons,
  DeleteButton,
  UpdateButton,
} from './ReportsStyle';

export const Report = ({ report, handleUpdate, handleDelete }) => (
  <ReportItem>
    <ReportTitle>{report.title}</ReportTitle>
    <ReportContent>{report.content}</ReportContent>
    <ReportDate>Date Created: {new Date(report.dateCreated).toLocaleString()}</ReportDate>
    <ActionButtons>
      <UpdateButton onClick={() => handleUpdate(report)}>Update</UpdateButton>
      <DeleteButton onClick={() => handleDelete(report.id)}>Delete</DeleteButton>
    </ActionButtons>
  </ReportItem>
);
