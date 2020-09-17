import React, {Component} from 'react';
import Dashboard from '../Dashboard/Dashboard'

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }
  render() {
    return (
    <div className="App">
      <Dashboard></Dashboard>
    </div>
    )};
}
