import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Login from './components/forms/Login';
import Reg from './components/forms/Reg';

import Home from './components/Home/Home';
import MainDisplay from './components/artistPage/MainDisplay';


function App() {

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
          </Route>

          <Route path="/artistDisplay">
            <MainDisplay/>
          </Route>
        
        </Switch>
      

    </div>
    </Router>
    
  );  
}

export default App;
