import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: hsl(var(--primary-color));
  height: 100px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  position: sticky;
  z-index: 5;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  h2 {
    font-size: var(--fs-400);
  }
`;

export const Logo = styled.div`
  text-align: center;
  color: white;
  margin: 10px;
  text-shadow: 1px 2px 2px black;
  h1 {
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
`;
export const Burger = styled.div`
  position: relative;
  margin-right: 15px;
  display: block;
  z-index: 6;

  -webkit-user-select: none;
  user-select: none;

  a {
    text-decoration: none;
    color: #232323;

    transition: color 0.3s ease;
  }
  input {
    display: block;
    width: 70px;
    height: 60px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 7; /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }
  span {
    display: block;
    width: 70px;
    height: 8px;
    margin-bottom: 10px;
    position: relative;

    background: hsl(var(--secondary-color));
    border-radius: 3px;

    z-index: 7;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  span:first-child {
    transform-origin: 0% 0%;
  }
  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  input:checked ~ span {
    opacity: 1;
    transform: rotate(-45deg) translate(-5px, 2px);
    background: #fff;
  }

  input:checked ~ span:nth-last-child(3) {
    opacity: 1;
    transform: rotate(45deg) translate(2px, -2px);
  }

  input:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
`;

export const StyledLogout = styled.div`
  cursor: pointer;
  text-align: center;
  justify-content: center;
  font-size: var(--fs-400);
`;
