import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Register from './components/register';


import './App.css';


class App extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/register">Register</NavLink>
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route path="/register" component={Register} />
        </main>
      </>
    );
  }
  logout = () => {
    localStorage.removeItem('jwt');

    this.props.history.push('/login');
  };

}

export default withRouter(App);
