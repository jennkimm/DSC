import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <>
      <Route component={LoginPage} path="/login" exact/>
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
    </>
  );
};

export default App;
