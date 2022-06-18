import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Feed from './components/Home/Feed/Feed';
import LeftSide from './components/Home/LeftSide/LeftSide';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <LeftSide />
        <Feed />
      </div>
    </div> 
  );
}

export default App;
