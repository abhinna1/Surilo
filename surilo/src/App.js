import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Login from './components/Form/Login/Login';
import Reg from './components/Form/Registration/Reg';
import Home from './components/home/Home';


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

          {/* <Route path ="/signUp2">
            <Reg2/>
          </Route> */}


          <Route path ="/home">
            <Home/>

          </Route>
        </Switch>
      
      
    </div>
    </Router>
  );  
}

export default App;
