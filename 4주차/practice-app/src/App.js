import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <>
      <MainPage/>
        <Switch>
          <Route component={LoginPage} path="/login"/>
          <Route component={RegisterPage} path="/register" />
          <Route component={WritePage} path="/write" />
        </Switch>
    </>
  );
};

export default App;
