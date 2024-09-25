import React, { useContext } from "react";
import { StyledHeader, StyledNav } from "../styles/Header.styled";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "./LanguageContext";

export default function Header() {
    const { language, setLanguage } = useContext(LanguageContext);
    const [t, i18n] = useTranslation("global");

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };
    return (
        <StyledHeader className="header d-flex justify-content-between align-items-center pt-4 pb-3 px-5" style={{ zIndex: "4" }}>
            <div className="d-flex tabs flex-row justify-content-between align-items-center">
                <h4 id="logo">Melissa</h4>
                <h3 id="placeholder">|</h3>
                <StyledNav>{t("navbar.home")}</StyledNav>
                <StyledNav>{t("navbar.illustrations")}</StyledNav>
                <StyledNav>{t("navbar.shop")}</StyledNav>
            </div>

            <div className="tabs d-flex flex-row justify-content-between align-items-center">

            </div>
            <div className="settings d-flex flex-row justify-content-end align-items-center">

                <StyledNav className="pr-4">
                    <Select value={language} onChange={handleChange}
                        sx={{
                            border: 'none',
                            boxShadow: 'none',
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none'
                            }
                        }}>
                        <MenuItem value={"English"}>English</MenuItem>
                        <MenuItem value={"Français"}>Français</MenuItem>
                        <MenuItem value={"中文"}>中文</MenuItem>
                    </Select>
                </StyledNav>
                {/* <DarkModeOutlinedIcon id="darkModeIcon" /> */}
                <LightModeOutlinedIcon id="lightModeIcon" />
            </div>
        </StyledHeader>
    );
};