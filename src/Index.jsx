import React from 'react';
import { useSelector } from 'react-redux';
import NavMenu from './components/common/NavMenu';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import ProtectedRoute from './utils/ProtectedRoute';
import Home from './components/pages/Home';

function Index() {
  const isAuthenticated = localStorage.getItem('user') ? true : false;

  return (
    <div>
      <NavMenu isAuthenticated={isAuthenticated} />
      <Switch>
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Home} />      
      </Switch>
    </div>
  );
}

export default Index;