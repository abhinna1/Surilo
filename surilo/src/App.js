import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Reg1 from './components/forms/Reg1';
import Login from './components/forms/Login';
import Reg from './components/forms/Reg1';
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


        </Switch>
      
      
    </div>
    </Router>
  );  
}

export default App;
