import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchReportsRequest,
  createReportRequest,
  updateReportRequest,
  deleteReportRequest,
} from "../../redux/actions/reportActions";
import { Button, Input, Message, ReportsContainer } from "../reports/ReportsStyle";
import { ReportForm } from "../reports/ReportForm";
import { ReportList } from "../reports/ReportList";
import ErrorComponent from "../common/ErrorMessage";
import Loading from "../common/Loading";


const ReportsPage = () => {
  const dispatch = useDispatch();
  const { reports ,loading, error} = useSelector((state) => state.reports);
  
  const [newReport, setNewReport] = useState({ title: '', content: '' , userId: 1,
  dateCreated: new Date().toISOString() });
  const [validationError, setValidationError] = useState('');
  const [filterUserId, setFilterUserId] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [updateData, setUpdteData] = useState(false);

  useEffect(() => {
    if(!reports.length || updateData){
      dispatch(fetchReportsRequest());
      setUpdteData(false)
    }

  }, [dispatch,reports.length, updateData]);

 const handleCreate = () => {
    if (!newReport.title.trim() || !newReport.content.trim()) {
      setValidationError('Both title and content are required.');
      return;
    }
    
    dispatch(createReportRequest(newReport));
    setNewReport({ title: '', content: '', userId: 1,
    dateCreated: new Date().toISOString() });
    setShowCreateForm(false);
    setValidationError('');
    setUpdteData(true)
  };

  const handleUserIdFilterChange = (e) => {
    setFilterUserId(e.target.value);
  };
  
  const filteredReports = filterUserId
    ? reports.filter(report => report.userId.toString() === filterUserId)
    : reports;
    
    const handleDelete = (reportId) => {
      // Confirm before deleting
      if (window.confirm("Are you sure you want to delete this report?")) {
        dispatch(deleteReportRequest(reportId));
      }
    };
    
    const handleUpdate = (report) => {
      const updatedTitle = prompt("Enter new title:", report.title);
      const updatedContent = prompt("Enter new content:", report.content);
    
      if (updatedTitle && updatedContent) {
        dispatch(updateReportRequest({ ...report, title: updatedTitle, content: updatedContent }));
      }
    };
  
    return (
      <ReportsContainer>
        {loading && <Loading/>}
        {error && <ErrorComponent message={error} />}
        <Input
          type="number"
          value={filterUserId}
          onChange={handleUserIdFilterChange}
          placeholder="Filter by User ID"
        />
        {showCreateForm ? (
          <ReportForm
            newReport={newReport}
            setNewReport={setNewReport}
            handleCreate={handleCreate}
            validationError={validationError}
            setShowCreateForm={setShowCreateForm}
          />
        ) : (
          <Button onClick={() => setShowCreateForm(true)}>New Report</Button>
        )}
        {filteredReports.length ? (
          <ReportList
            reports={filteredReports}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ) : (
          <Message>No reports found.</Message>
        )}
      </ReportsContainer>
    );
  };
  
  export default ReportsPage;