import React, {Component} from 'react';
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import AddDiscForm from '../AddDiscForm/AddDiscForm';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }
  render() {
    const {hasError} = this.state;
    return (
    <div className="App">
      <Route />
      <main>
        {hasError && <p>There was an error! Oh no!</p>}
        <Switch>
          <PrivateRoute exact path={'/addDisc'} component={AddDiscForm} /> 
          <PrivateRoute exact path={'/'} component={DashboardRoute} />
          <PublicOnlyRoute exact path={'/login'} component={LoginRoute} />
          <PublicOnlyRoute exact path={'/register'} component={RegistrationRoute} />
        </Switch>
      </main>
    </div>
    )};
}
