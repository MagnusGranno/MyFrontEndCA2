import { useState, useEffect } from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Unis from './components/Endpoints/Unis';
import Home from './components/Home';
import Login from './components/Login';
import SideBar from './components/SideBar';
import UserEndPoint from './components/Endpoints/UserEndPoint';
import ChuckJokes from './components/Endpoints/ChuckJokes';
import MobileHeader from './components/MobileHeader';
// Styles
import { GlobalStyle } from './GlobalStyle';

// Facade
import { facade } from './apiFacade';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [checked, setChecked] = useState(false);
  const initialState = {
    username: '',
    password: '',
  };
  const [loggedIn, setLoggedIn] = useState(facade.loggedIn);
  const [loginCredentials, setLoginCredentials] = useState(initialState);

  useEffect(() => {
    if (sessionStorage.getItem('username') && facade.loggedIn) {
      setLoggedIn(true);
    }
  }, []);

  const resize = () => {
    setWidth(window.innerWidth);
  };
  window.addEventListener('resize', resize);
  return (
    <Router>
      {width >= 900 ? (
        <Header
          loggedIn={loggedIn}
          loginCredentials={loginCredentials}
          setLoginCredentials={setLoginCredentials}
          setLoggedIn={setLoggedIn}
        />
      ) : (
        <MobileHeader
          loggedIn={loggedIn}
          loginCredentials={loginCredentials}
          setLoginCredentials={setLoginCredentials}
          setLoggedIn={setLoggedIn}
          checked={checked}
          setChecked={setChecked}
        />
      )}
      {width >= 900 ? loggedIn && <SideBar /> : checked && <SideBar />}

      <Routes>
        <Route exact path="/" element={<Home loggedIn={loggedIn} />} />
        <Route
          path="/login"
          element={
            <Login
              loginCredentials={loginCredentials}
              setLoginCredentials={setLoginCredentials}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route path="/unis" element={<Unis checked={checked} />} />
        <Route path="/users" element={<UserEndPoint checked={checked} />} />
        <Route path="/chuck" element={<ChuckJokes checked={checked} />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
