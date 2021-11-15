import React, { useState, useEffect } from 'react';

// Styles
import { Content, Wrapper } from './Home.styles';

// Facade
import { facade } from '../../apiFacade';

function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState('Loading...');

  useEffect(() => {
    facade
      .fetchData()
      .then((data) => setDataFromServer(data.msg))
      .catch((error) => {
        console.log(error);
      });
  }, [dataFromServer]);

  return (
    <div>
      <h2>Welcome</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </p>
    </div>
  );
}

function Home({ loggedIn }) {
  return (
    <Wrapper>
      <Content>
        {!loggedIn && (
          <div>
            <h1>Magnus Granno</h1>
            <h3>Login to use API's</h3>
          </div>
        )}

        <p></p>
        {loggedIn && <LoggedIn />}
      </Content>
    </Wrapper>
  );
}

export default Home;
