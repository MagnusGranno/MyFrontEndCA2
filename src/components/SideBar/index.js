import React from 'react';

// Routing
import { Link } from 'react-router-dom';

// Styles
import { Wrapper, Content, Navs } from './SideBar.styles';

function SideBar() {
  return (
    <Wrapper>
      <Content>
        <Link to="/unis">
          <Navs>Universities</Navs>
        </Link>
        <Link to="/users">
          <Navs>Users</Navs>
        </Link>
        <Link to="/chuck">
          <Navs>Chuck Norris Jokes</Navs>
        </Link>
      </Content>
    </Wrapper>
  );
}

export default SideBar;
