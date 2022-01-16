import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import MultipleInputs from './components/forms/multipleInputs';
import InfoReg from './components/forms/InfoReg';
import Otp from './components/forms/Otp'
import Login from './components/forms/Login';
import Home from './components/home/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path ="/">
            <Login></Login>

          </Route>
          <Route path ="/signUp1">
            <MultipleInputs/>

          </Route>
          <Route path ="/signUp2">
            <InfoReg/>

          </Route>
          <Route path ="/home">
            <Home/>

          </Route>
        </Switch>
      
      
    </div>
    </Router>
  );  
}

export default App;
