import React from 'react';
import './App.css';
import LinearSearch from './LinearSearch';
import BinarySearch from './BinarySearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <LinearSearch />
       <BinarySearch />
      </header>
    </div>
  );
}

export default App;
