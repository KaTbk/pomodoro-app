import styled from "styled-components";

export const StylednNav = styled.nav`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledMenu = styled.menu`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  border: 1px solid black;
  padding: 8px;
  border-radius: 30px;
  background-color: green;
  position: relative;
  z-index: 1;
  li {
    flex: 1;
    position: relative;
    button {
      padding: 18px 0;
      width: 100%;
      border: none;
      border-radius: 30px;
      background-color: transparent;
      cursor: pointer;
      transition: color 0.2s;
      &[active="false"] {
        color: gray;
      }
    }
    &:first-of-type::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: red;
      border-radius: 30px;
      z-index: -1;
      transform: ${({ mode }) => `translateX(calc(100% * ${mode}))`};
      transition: transform 0.5s ease-out;
    }
  }
`;
