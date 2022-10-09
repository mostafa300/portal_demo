import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

import SignInSide from './pages/SignInSide';

import { Route , Switch, Redirect} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Switch>
         <Route path="/" exact>
            <Redirect to="/login"/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/login">
            <SignInSide />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
