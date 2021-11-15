import styled from 'styled-components';

export const MyBody = styled.div`
  margin-left: 200px;

  text-align: center;

  h1 {
    text-shadow: 0 1px 1px 20px black;
  }
  @media (max-width: 900px) {
    margin-left: 0px;
    ${({ checked }) => checked && 'margin-left: 200px;'}
  }
`;

export const Container = styled.div`
  width: 100%;
  color: #000;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-image: linear-gradient(
    to right bottom,
    #15cfaf,
    #6cb95d,
    #a59909,
    #d46a07,
    #eb124b
  );
  border-radius: 8px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .uni {
    border-radius: 8px;

    overflow: hidden;
    text-align: center;

    border: 1px solid black;
  }
`;
