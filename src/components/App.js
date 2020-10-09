import React from 'react';
import TopBar from './TopBar';
import Main from './Main';
import '../styles/App.css';

class App extends React.Component {

  render() {
    return <div className="App">
      <TopBar />
      <Main />
    </div>
  };
}

export default App;
