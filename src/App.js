import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Profile from './pages/Profile';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';
import SignInSide from './pages/SignInSide';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import LoginOne from './pages/LoginOne';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {

  const [empName, setEmpName] = useState('');
  const [pernr, setPernr] = useState('');
  const [emp, setEmp] = useState('');

  const setEmployee = (emp) => {
    setEmp(emp);
    console.log("App.js emp: ", emp);
  };


  return (
    <div >
      <Switch>
        <Route path="/" exact>
          {/* <LoginOne onLogin={setEmployee} /> */}
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        {/* mostafa profile */}
        <Route path="/profilepage">
          <ProfilePage emp={emp} />
        </Route>
        <Route path="/login">
          <LoginOne onLogin={setEmployee} />
        </Route>
        {/* <Route path="*">
          <NotFound />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
