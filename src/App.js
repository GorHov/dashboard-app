import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import AppRoutes from './routes';

const App = () => (
  <Router>
    <Sidebar />
    <MainContent>
      <AppRoutes />
    </MainContent>
  </Router>
);

export default App;
