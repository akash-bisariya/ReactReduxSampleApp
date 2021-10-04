import './App.css';
// import RegisterFormFn from './components/RegisterFormFn';
import Navbar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import RegisterFormFN from './components/RegisterFormFn';

function App() {
  return (
      <Router>
      <Navbar/>
      <Switch>
        <Route path='/signup' component={RegisterFormFN}/>
      </Switch>
      </Router>
  );
}

export default App;
