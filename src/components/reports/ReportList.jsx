import React from 'react';
import { Report } from './Report';

export const ReportList = ({ reports, handleUpdate, handleDelete }) => (
  <div>
    {reports.map((report) => (
      <Report
        key={report.id}
        report={report}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    ))}
  </div>
);
