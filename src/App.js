import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import RegisterFormFN from './components/register/RegisterFormFn';
import TransactionFn from './components/transaction/TransactionFn';
import MyProfileFn from './components/myprofile/MyProfile';
import DashboardFn from './components/dashboard/dashboard';
import LoginFn from './components/login/loginFn';

function App() {
  return (
      <Router>
      <Navbar/>
      <Switch>
        <Route path='/signup' component={RegisterFormFN}/>
        <Route path='/transaction' component={TransactionFn}/>
        <Route path='/myprofile' component={MyProfileFn}/>
        <Route path='/dashboard' component={DashboardFn}/>
        <Route path='/login' component={LoginFn}/>
        <Route path='/' component={LoginFn}/>
      </Switch>
      </Router>
  );
}

export default App;
