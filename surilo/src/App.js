import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Login from './components/Form/Login/Login';
import Reg from './components/Form/Registration/Reg';

import Home from './components/Home/Home';
import MainDisplay from './components/artistPage/MainDisplay';
import React from 'react';
import MusicBar from './components/musicBar/MusicBar';
import AboutUs from './components/About Us/AboutUs.js'
class App extends React.Component {

  render(){
    return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path ="/">
            <Login></Login>

          </Route>
          <Route path ="/register">
            <Reg/>
          </Route>

          <Route path ="/home">
            <Home/> 
            <MusicBar/> 
          </Route>

          <Route path="/artistDisplay">
            <MainDisplay/>
            <MusicBar/> 
          </Route>


          <Route path="/aboutUs">
            <AboutUs/>
            <MusicBar/> 
          </Route>

        </Switch>

    </div>

    </Router>
    
  );  
}
}

export default App;
