import { styled } from "styled-components";

export const StyledHeader = styled.div`
  width: 100vw !important;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;

  #logo {
    font-weight: 700 !important;
    letter-spacing: 5%;
    cursor: pointer;
  }
  .tabs{
    width: 45%;
  }
  .settings{
    width: 10%;
  }
  #darkModeIcon{
    cursor: pointer;
  }

  #lightModeIcon{
    cursor: pointer;
    display: none;
  }
`;

export const StyledNav = styled.h4`
  cursor: pointer;
`;