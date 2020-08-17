import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutReact from './AboutReact.js'
import FunctionalComponents from './FunctionalComponents';
import Understood from './Understood';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 6,
      understood_total: 0,
      understand: [false, false, false, false, false, false]
    }
  }

  render() {
   return (
    <div>
      <AboutReact />
      <Understood total={this.state.total} understood_total={this.state.understood_total}/>
      <FunctionalComponents title="About Functional Components" />
      <FunctionalComponents title="About Class Components"/>
      <FunctionalComponents title="About Props"/>
      <FunctionalComponents title="React state"/>
      <FunctionalComponents title="Conditional rendering"/>
      <FunctionalComponents title="React hooks"/>
    </div>
    
  ); 
  }
  
}

export default App;
