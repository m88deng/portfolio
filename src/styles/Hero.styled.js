import { styled } from "styled-components";

export const StyledHero = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${({ background }) => background}), -webkit-linear-gradient(
    bottom,
    rgba(233, 237, 242, 1) 0%,
    rgba(233, 237, 242, 1) 1%,
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 0, 0, 0) 100%
  );
  background-blend-mode: color;

  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;

  margin: 0;
  padding: 0;
  
  .bgLightCloud{
    width: 80%;
    opacity: 0.8;
    position: absolute;
    z-index: 1;
    animation: clouds 15s infinite;
  }

  @keyframes clouds {
    0%{ scale: 1; transform: translateY(0px)} 
    50%{scale: 1.05; transform: translateY(40px)}
    100%{scale: 1; transform: translateY(0px)}
  }
`;
