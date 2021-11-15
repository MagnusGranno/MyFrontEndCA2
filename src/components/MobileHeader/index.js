import { useState } from 'react';
// Styles
import {
  Wrapper,
  Content,
  Logo,
  Burger,
  StyledLogout,
} from './MobileHeader.styles';
// facade
import { facade } from '../../apiFacade';
// Routing
import { NavLink, useNavigate } from 'react-router-dom';

const MobileHeader = ({
  checked,
  setChecked,
  loggedIn,
  setLoggedIn,
  setLoginCredentials,
}) => {
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
        <Logo>
          <NavLink to="/">
            <h1>CA2</h1>
          </NavLink>
        </Logo>
        <NavLink to="/">Home</NavLink>
        {!loggedIn ? (
          <NavLink to="/login">
            <h2>Login</h2>
          </NavLink>
        ) : (
          <StyledLogout onClick={logout}>Logout</StyledLogout>
        )}

        <Burger>
          <input
            type="checkbox"
            onClick={() => {
              setChecked(!checked);
            }}
          />
          <span></span>
          <span></span>
          <span></span>
        </Burger>
      </Content>
    </Wrapper>
  );
};

export default MobileHeader;
