import styled, { keyframes } from 'styled-components'
const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const Wave = styled.div`
  &,
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 250vw;
    height: 250vw;
    margin-left: -125vw;
    transform-origin: 50% 50%;
    background-color: transparent;
    border-radius: 38% 42%;
    box-shadow: inset 0 0 10vw rgba(85, 76, 255, 0.8);
    animation: ${spin} 16s infinite linear;
    mix-blend-mode: multiply;
  }

  &:before {
    width: 105%;
    height: 95%;
    margin-top: -125vw;
    transform-origin: 49% 51%;
    border-radius: 40% 38%;
    box-shadow: inset 0 0 10vw rgba(25, 160, 255, 0.8);
    animation: ${spin} 13s infinite linear;
  }

  &:after {
    width: 102%;
    height: 98%;
    margin-top: -125vw;
    transform-origin: 51% 49%;
    border-radius: 48% 42%;
    box-shadow: inset 0 0 10vw rgba(0, 255, 255, 0.8);
    animation: ${spin} 10s infinite linear;
  }
`

export default Wave
