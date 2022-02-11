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

import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './AdminPanel/components/Dashboard/Dashboard'
import MusicPanel from './AdminPanel/components/MusicPanel/MusicPanel'
import ArtistPanel from './AdminPanel/components/ArtistPanel/ArtistPanel'


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
            <MusicBar/> 
          </Route>

          <Route path ="/home">
            <Home/>
            <MusicBar/> 

          </Route>
            <Route path="/artistDisplay">
              <MainDisplay/>
              <MusicBar/> 
            </Route>


            <Route path="/admin/dashboard">
              <Dashboard/>
            </Route>

            <Route path="/admin/artistpanel">
              <ArtistPanel/>
            </Route>

            <Route path="/admin/songpanel">
              <MusicPanel/>
            </Route>
        </Switch>
      </PlayerState>
    </div>

    </Router>
    
  );  

}

export default App;
