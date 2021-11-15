import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: radial-gradient(
    circle,
    #cf7e15,
    #da6c1d,
    #e2562a,
    #e83c39,
    #eb124b
  );
  text-align: center;
  p {
    max-inline-size: 500px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
