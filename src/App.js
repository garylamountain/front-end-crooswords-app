import React from 'react';
import logo from './logo.svg';
import './App.css';
import Crossword from './components/Crossword'
import Login from './components/Login'

class App extends React.Component {

  state = {
    auth: {}
  }

  handleLogin(user){
    this.setState({
      auth: user
    })
  }

  handleLogout(){
    this.setState({
      auth: {} 
    })
  }

  render(){
    return (
      <div className="App">
        {this.state.auth.username && this.state.auth.username != undefined ? 
        <Crossword />
        :
        <Login Login handleLogin={(user) => this.handleLogin(user)}/>
        }
      </div>
    );
  }
}

export default App;
