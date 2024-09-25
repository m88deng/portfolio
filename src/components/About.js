import { StyledAboutSection, StyledHobby, StyledTechnology, StyledTechSection } from "../styles/About.styled";

import PaletteIcon from '@mui/icons-material/Palette';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useTranslation } from "react-i18next";

export default function About() {
    const [t, i18n] = useTranslation("global")

    return (
        <StyledAboutSection>
            <h1>{t("navbar.about")}</h1>
            <div className="d-flex justify-content-between pb-2">
                <div className="col-6 d-flex flex-column justify-content-center pr-5 pl-0">
                    <p>{t("about.description1")}
                    </p>
                    <br />
                    <p className="pb-2">{t("about.description2")}</p>
                </div>
                <div className="col-6 d-flex align-items-center ml-2" style={{ position: "relative" }}>
                    <div id="profilepic"></div>
                    <StyledHobby id="hobbyArt"><PaletteIcon sx={{ fontSize: "35px" }} style={{ color: "FFFFFF" }} /></StyledHobby>
                    <StyledHobby id="hobbyMusic"><MusicNoteIcon sx={{ fontSize: "35px" }} style={{ color: "FFFFFF" }} /></StyledHobby>
                    <StyledHobby id="hobbyGame"><SportsEsportsIcon sx={{ fontSize: "35px" }} style={{ color: "FFFFFF" }} /></StyledHobby>
                    <StyledHobby id="hobbyPhoto"><PhotoCameraIcon sx={{ fontSize: "35px" }} style={{ color: "FFFFFF" }} /></StyledHobby>
                    <small id="hobbyArtText" className="hobbyText">{t("about.art")}</small>
                    <small id="hobbyMusicText" className="hobbyText">{t("about.music")}</small>
                    <small id="hobbyGameText" className="hobbyText">{t("about.gaming")}</small>
                    <small id="hobbyPhotoText" className="hobbyText">{t("about.photography")}</small>
                </div>
            </div>
            <h2>{t("about.languages")}</h2>
            <StyledTechSection>
                <StyledTechnology>Python</StyledTechnology>
                <StyledTechnology>C</StyledTechnology>
                <StyledTechnology>C++</StyledTechnology>
                <StyledTechnology>Java</StyledTechnology>
                <StyledTechnology>Javascript</StyledTechnology>
                <StyledTechnology>Typescript</StyledTechnology>
                <StyledTechnology>HTML</StyledTechnology>
                <StyledTechnology>CSS</StyledTechnology>
            </StyledTechSection>
            <h2>{t("about.technologies")}</h2>
            <StyledTechSection >
                <StyledTechnology>React</StyledTechnology>
                <StyledTechnology>GraphQL</StyledTechnology>
                <StyledTechnology>Next.js</StyledTechnology>
                <StyledTechnology>Bootstrap</StyledTechnology>
                <StyledTechnology>Node.js</StyledTechnology>
                <StyledTechnology>Vite</StyledTechnology>
                <StyledTechnology>OpenCV</StyledTechnology>
            </StyledTechSection>
            <h2>{t("about.design")}</h2>
            <StyledTechSection>
                <StyledTechnology>Figma</StyledTechnology>
                <StyledTechnology>Photoshop</StyledTechnology>
                <StyledTechnology>Clip Studio Paint</StyledTechnology>
                <StyledTechnology>Procreate</StyledTechnology>
                <StyledTechnology>Final Cut Pro</StyledTechnology>
            </StyledTechSection>
        </StyledAboutSection>
    )
}