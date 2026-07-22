import React, { Component } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

class App extends Component {

  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };
  }

  login = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  logout = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  render() {

    if (this.state.isLoggedIn) {
      return (
        <UserPage onLogout={this.logout} />
      );
    }
    else {
      return (
        <GuestPage onLogin={this.login} />
      );
    }

  }
}

export default App;