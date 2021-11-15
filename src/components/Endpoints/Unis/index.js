import React, { useState, useEffect } from 'react';

// Url
import { fiveServers, myUrl } from '../../../settings';

// Facade
import { facade } from '../../../apiFacade';

// Styles
import { MyBody, Container } from './Unis.styles';

function Unis({ checked }) {
  const [unis, setUnis] = useState([{}]);

  const fetchMyData = async () => {
    const response = await fetch(myUrl + fiveServers, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data[2][0].name);
    setUnis(data[2]);
    console.log(unis[1]);
  };
  useEffect(() => {
    fetchMyData();
  }, []);
  return (
    <MyBody checked={checked}>
      <div>
        <h1>Universities</h1>
      </div>
      <Container>
        {unis.map((item) => (
          <div className="uni" key={Math.floor(Math.random() * 1000)}>
            <h3>{item.name}</h3>
            <h4>{item.country}</h4>
          </div>
        ))}
      </Container>
    </MyBody>
  );
}

export default Unis;
