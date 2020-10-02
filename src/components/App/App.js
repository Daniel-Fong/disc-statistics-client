import React, {Component} from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }
  render() {
    return (
    <div className="App">
      <Route />
      <main>
        <PublicOnlyRoute exact path={'/'} component={Dashboard} />
        <PublicOnlyRoute exact path={'/login'} component={LoginForm} />
        <PublicOnlyRoute exact path={'/register'} component={RegistrationForm} />
      </main>
    </div>
    )};
}
