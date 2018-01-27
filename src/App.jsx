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
          <Route exact path = '/' component={Home}/> 
          <Route path = '/farfrom/:id' component={veryFarFromHome}/> 
          <Route path = '/nothome' component={NotHome}/> 
        </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
