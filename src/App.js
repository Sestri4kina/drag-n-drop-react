import React, { Component } from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel'


class App extends Component {
  render() {
    return (
      <div>
        <LeftPanel />
        <RightPanel />
      </div>
    );
  }
}

export default App;
