import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RegisterFormFN from './components/register/RegisterFormFn';
import TransactionFn from './components/transaction/TransactionFn';
import MyProfileFn from './components/myprofile/MyProfile';
import DashboardFn from './components/dashboard/dashboard';
import LoginFn from './components/login/loginFn';
import { useSelector } from 'react-redux';

function App() {
  const currentUser = useSelector(state => state.currentUser.user)
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/signup' component={RegisterFormFN} />
        <Route path='/transaction' component={currentUser.username ? TransactionFn : LoginFn} />
        <Route path='/myprofile' component={currentUser.username ? MyProfileFn : LoginFn} />
        {/* <Route path='/dashboard' component={DashboardFn}/> */}
        <Route path='/login' component={LoginFn} />
        <Route path='/' component={currentUser.username ? DashboardFn : LoginFn} />
      </Switch>
    </Router>
  );
}

export default App;
