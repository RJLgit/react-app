import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutReact from './AboutReact.js'
import FunctionalComponents from './FunctionalComponents';

function App() {
  return (
    <div>
      <AboutReact />
      <FunctionalComponents title="About Functional Components"/>
      <FunctionalComponents title="About Class Components"/>
      <FunctionalComponents title="About Props"/>
      <FunctionalComponents title="React state"/>
      <FunctionalComponents title="Conditional rendering"/>
      <FunctionalComponents title="React hooks"/>
    </div>
    
  );
}

export default App;
