import React from 'react';
import Title from "./components/Title";
import Jumbotron from "./components/Jumbotron";
import List from "./components/List";

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Title />
      <Jumbotron />
      <List/>
    </div>
  );
}

export default App;
