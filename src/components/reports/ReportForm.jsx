import React from 'react';
import { Button, Input, TextArea } from './ReportsStyle';
import ErrorComponent from '../common/ErrorMessage';

export const ReportForm = ({ newReport, setNewReport, handleCreate, validationError, setShowCreateForm }) => (
  <div>
    {validationError && <ErrorComponent message={validationError} />}
    <Input
      type="text"
      value={newReport.title}
      onChange={(e) => setNewReport({ ...newReport, title: e.target.value })}
      placeholder="Report Title"
    />
    <TextArea
      value={newReport.content}
      onChange={(e) => setNewReport({ ...newReport, content: e.target.value })}
      placeholder="Report Content"
    />
    <Button onClick={handleCreate}>Submit Report</Button>
    <Button onClick={() => setShowCreateForm(false)}>Cancel</Button>
  </div>
);
