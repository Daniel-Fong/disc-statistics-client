import React, {Component} from 'react';
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import AddDiscRoute from '../../routes/AddDiscRoute/AddDiscRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import DiscsRoute from '../../routes/DiscsRoute/DiscsRoute';
import { DiscViewRoute } from '../../routes/DiscViewRoute/DiscViewRoute';
import AddCourseRoute from '../../routes/AddCourseRoute/AddCourseRoute';

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
          <PrivateRoute exact path={'/addDisc'} component={AddDiscRoute} /> 
          <PrivateRoute exact path={'/addCourse'} component={AddCourseRoute} /> 
          <PrivateRoute exact path={'/'} component={DashboardRoute} />
          <PrivateRoute exact path={'/discs'} component={DiscsRoute} />
          <PrivateRoute exact path={'/discs/:id'} component={DiscViewRoute} />
          <PublicOnlyRoute exact path={'/login'} component={LoginRoute} />
          <PublicOnlyRoute exact path={'/register'} component={RegistrationRoute} />
        </Switch>
      </main>
    </div>
    )};
}
