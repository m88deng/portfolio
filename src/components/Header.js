import { StyledHeader, StyledNav } from "../styles/Header.styled";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export default function Header() {
    return (
        <StyledHeader className="header d-flex justify-content-between align-items-center pt-4 pb-3 px-5 ">
            <div>
                <h4 id="logo">Melissa</h4>
            </div>

            <div className="tabs d-flex flex-row justify-content-between align-items-center">
                <StyledNav>About</StyledNav>
                <StyledNav>Experience</StyledNav>
                <StyledNav>Projects</StyledNav>
                <StyledNav>Illustrations</StyledNav>
                <StyledNav>Shop</StyledNav>
            </div>
            <div className="settings d-flex flex-row justify-content-end align-items-center">
                <StyledNav className="pr-3">English</StyledNav>
                <DarkModeOutlinedIcon id="darkModeIcon" />
                <LightModeOutlinedIcon id="lightModeIcon" />
            </div>
        </StyledHeader>
    );
};