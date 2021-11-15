import React from 'react';

// Routing
import { NavLink, useNavigate } from 'react-router-dom';

// Facade
import { facade } from '../../apiFacade';

// Styles
import { Wrapper, Content, Menu, StyledLogout } from './Header.styles';

function Header({ loggedIn, setLoggedIn, setLoginCredentials }) {
  const navigate = useNavigate();
  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setLoginCredentials({ username: '', password: '' });
    navigate('/');
  };

  return (
    <Wrapper>
      <Content>
        <h1>CA2 | Granno</h1>
        {loggedIn && (
          <h3>
            Hello {sessionStorage.username} your roles:{' '}
            {sessionStorage.getItem('roles').split(',').join(', ')}
          </h3>
        )}
        <Menu>
          <NavLink to="/">Home</NavLink>
          {!loggedIn ? (
            <NavLink to="/login">Login</NavLink>
          ) : (
            <StyledLogout onClick={logout}>Logout</StyledLogout>
          )}
        </Menu>
      </Content>
    </Wrapper>
  );
}

export default Header;
