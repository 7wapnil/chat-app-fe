import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ConversationsList from '../components/ConversationsList';
import LoginForm from '../components/users/LoginForm';
import RegisterForm from '../components/users/RegisterForm';
import PrivateRoute from '../hoc/routes/PrivateRoute';

const AppRouter = () => (
  <Router>
    <Switch>
      <PrivateRoute exact path="/" component={ConversationsList} />
      <Route path="/register" component={RegisterForm} />
      <Route exact path="/login" component={LoginForm} />
    </Switch>
  </Router>
);

export default AppRouter;