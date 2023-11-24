import styled from "styled-components";

export const TimerWrapper = styled.div`
  width: 300px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #121530;
  margin: 100px auto;
  position: relative;
  svg {
    width: 300px;
    aspect-ratio: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    circle {
      &:first-of-type {
        fill: none;
        stroke: #3498db;
        opacity: 25%;
      }
      &:last-of-type {
        fill: none;
        stroke: #3498db; /* Progress color */
        stroke-linecap: round;
        transition: stroke-dashoffset 0.3s ease;
      }
    }
    text {
      stroke: white;
      fill: white;
      font-size: 50px;
    }
  }
  button {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    background-color: transparent;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
`;
