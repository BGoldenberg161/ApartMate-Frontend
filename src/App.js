import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import HomePage from './components/HomePage'
import About from './components/About'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import './App.css';
import CreateGroup from './components/CreateGroup';
import GroupUrl from './components/GroupUrl';
import AcceptInvite from './components/AcceptInvite'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
      primary: {
          main: blue[700],
      },
      secondary: {
          main: '#a2a3ac',
      },
      success: {
        main: '#66BB6A',
      },
    },
});

const PrivateRoute = ({ component: Component, ...rest}) => {
  const user = localStorage.getItem('jwtToken')
  return <Route {...rest} render={(props) => {
    return user ? <Component {...rest} {...props} /> : <Redirect to="/login" />
  }} />
}

function App() {
  let [currentUser, setCurrentUser] = useState('')
  let [isAuthenticated, setIsAuthenticated] = useState(true)

  useEffect(() => {
    let token
    if(!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false)
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'))
      setAuthToken(localStorage.jwtToken)
      setCurrentUser(token)
      setIsAuthenticated(true)
    }
  }, [])

  const nowCurrentUser = (userData) => {
    console.log('nowCurrentUser is working...')
    setCurrentUser(userData)
    setIsAuthenticated(true)
  }

  const handleLogout =() => {
    if(localStorage.getItem('jwtToken')){
      localStorage.removeItem('jwtToken')
      setCurrentUser(null)
      setIsAuthenticated(false)
    }
  }
  
  return (
    <div>
      <ThemeProvider theme={theme}>
      <NavBar handleLogout={handleLogout} isAuth={isAuthenticated}/>
      <div className="container mt-5">
        <Switch>
          <Route path="/register" component={ Register } />
          <Route
            path="/login"
            render={ (props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />}
          />
          {/* Need to add a CreateGroup route somehwere here...might also be a nav */}
          <Route path="/about" component={ About } />
          <PrivateRoute path="/profile" component={ Profile } user={currentUser} />
          <Route exact path="/" component={ HomePage } />
          <Route path="/creategroup" component={ CreateGroup }/>
          <Route path="/groupurl" component={ GroupUrl } />
          <Route path="/acceptinvite" component={ AcceptInvite }/>
        </Switch>
      </div>
      <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;