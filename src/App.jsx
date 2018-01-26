import React, { Component } from 'react';
import './App.css';
import {Route, HashRouter, Switch} from 'react-router-dom'
import Home from './components/home';  
import NotHome from './components/notHome'; 
import veryFarFromHome from './components/veryFarFromHome';   

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
        <Switch>
          <Route path = '/farfrom/:id' component={veryFarFromHome}/> 
          <Route path = '/nothome' component={NotHome}/> 
          <Route path = '/' component={Home}/> 
        </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
