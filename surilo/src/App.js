import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Login from './components/Form/Login/Login';
import Reg from './components/Form/Registration/Reg';

import Home from './components/Home/Home';
import MainDisplay from './components/artistPage/MainDisplay';
import React, { createContext, useContext, useState } from 'react';
import MusicBar from './components/musicBar/MusicBar';
import AlbumForm from './components/Album/albumform';
import MusicForm from './components/Music/Musicform';
import PlayerState from './components/PlayerContext/playerState';
import playerContext from './components/PlayerContext/playerContext';


const App = ()=>{

    return (
    <Router>
      
      <div className="App">
        <PlayerState>
        <Switch>
          <Route exact path ="/login">
            <Login></Login>
          </Route>
          <Route path ="/register">
            <Reg/>
          </Route>

          <Route path ="/albumForm">
            <AlbumForm/> 
            <MusicBar/> 
          </Route>

          <Route path ="/musicform">
            <MusicForm/> 
          </Route>

          <Route path ="/">
            <Home/>
            <MusicBar/> 

          </Route>
            <Route path="/artistDisplay">
              <MainDisplay/>
              
              <MusicBar/> 
            </Route>

        </Switch>
      </PlayerState>
    </div>

    </Router>
    
  );  

}

export default App;
