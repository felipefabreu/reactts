import React from 'react';
import Title from "./components/Title";
import Jumbotron from "./components/Jumbotron";

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Title />
      <Jumbotron />
      
    </div>
  );
}

export default App;
