import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import routes from './routes';


class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
