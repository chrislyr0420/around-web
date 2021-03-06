import React from 'react';
import TopBar from './TopBar';
import Main from './Main';
import '../styles/App.css';

import { TOKEN_KEY } from '../constants';

class App extends React.Component {
  state = {
    isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY))
  }

  handleLoginSucceed = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    return <div className="App">
      <TopBar isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
      <Main 
        isLoggedIn={this.state.isLoggedIn} 
        handleLoginSucceed={this.handleLoginSucceed}
      />
    </div>
  };
}

export default App;
