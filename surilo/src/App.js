import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Login from './components/Form/Login/Login';
import Reg from './components/Form/Registration/Reg';

import Home from './components/Home/Home';
import MainDisplay from './components/artistPage/MainDisplay';
import React from 'react';
import MusicBar from './components/musicBar/MusicBar';
import AlbumForm from './components/Album/albumform';
import MusicForm from './components/Music/Musicform';
class App extends React.Component {

  render(){
    return (
    <Router>
      <div className="App">
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
            {/* <MusicBar/>  */}
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

    </div>

    </Router>
    
  );  
}
}

export default App;
