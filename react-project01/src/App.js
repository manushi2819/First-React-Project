
import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <routes>
          <Route path='/' exact/>
        </routes>
      </Router>
      
    </>
  );
}


export default App;
