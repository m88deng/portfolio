import { styled } from "styled-components";

export const StyledHeader = styled.div`
  width: 100vw !important;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0;

  #logo {
    font-weight: 700 !important;
    letter-spacing: 5%;
    cursor: pointer;
  }
  .tabs{
    width: 30%;
  }
  .settings{
    width: 15%;
  }
  #placeholder{
    user-select: none;
    -webkit-user-select: none;
  }
  #darkModeIcon{
    cursor: pointer;
  }

  #lightModeIcon{
    cursor: pointer;
  }
`;

export const StyledNav = styled.h4`
  cursor: pointer;
`;