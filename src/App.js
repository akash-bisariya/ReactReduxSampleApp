import './App.css';
import Navbar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import RegisterFormFN from './components/RegisterFormFn';
import TransactionFn from './components/Transaction/TransactionFn';

function App() {
  return (
      <Router>
      <Navbar/>
      <Switch>
        <Route path='/signup' component={RegisterFormFN}/>
        <Route path='/transaction' component={TransactionFn}/>
      </Switch>
      </Router>
  );
}

export default App;
