import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UsersPage from './components/pages/UsersPage';
import ReportsPage from './components/pages/ReportsPage';
import AnalyticsPage from './components/pages/AnalyticsPage';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/users" element={<UsersPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
    </Routes>
  );
};

export default AppRoutes;
