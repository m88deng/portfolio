import { StyledAboutSection, StyledHobby, StyledTechnology, StyledTechSection } from "../styles/About.styled";

import PaletteIcon from '@mui/icons-material/Palette';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

export default function About() {
    return (
        <StyledAboutSection>
            <h1>About</h1>
            <div className="d-flex justify-content-between pb-2">
                <div className="col-6 d-flex flex-column justify-content-center pr-5 pl-0">
                    <p>My name is Melissa Deng. I am software engineering student at the University of Waterloo by day and an artist at night.
                    </p>
                    <br />
                    <p className="pb-2">Passionate for imagination and problem-solving, I thrive to deliver smooth web experience to users. My ultimate goal is to bridge the gap between creativity and functionality, turning ideas into realities through my coding skills.</p>
                </div>
                <div className="col-6 d-flex align-items-center ml-2" style={{ position: "relative" }}>
                    <div id="profilepic"></div>
                    <StyledHobby id="hobbyArt"><PaletteIcon sx={{ fontSize: "35px" }} style={{ color: "FFFFFF" }} /></StyledHobby>
                    <StyledHobby id="hobbyMusic"><MusicNoteIcon sx={{ fontSize: "35px" }} style={{ color: "FFFFFF" }} /></StyledHobby>
                    <StyledHobby id="hobbyGame"><SportsEsportsIcon sx={{ fontSize: "35px" }} style={{ color: "FFFFFF" }} /></StyledHobby>
                    <StyledHobby id="hobbyPhoto"><PhotoCameraIcon sx={{ fontSize: "35px" }} style={{ color: "FFFFFF" }} /></StyledHobby>
                    <small id="hobbyArtText" className="hobbyText">Arts & Craft</small>
                    <small id="hobbyMusicText" className="hobbyText">Music</small>
                    <small id="hobbyGameText" className="hobbyText">Gaming</small>
                    <small id="hobbyPhotoText" className="hobbyText">Photography</small>
                </div>
            </div>
            <h2>Languages</h2>
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
            <h2>Technologies</h2>
            <StyledTechSection >
                <StyledTechnology>React</StyledTechnology>
                <StyledTechnology>GraphQL</StyledTechnology>
                <StyledTechnology>Next.js</StyledTechnology>
                <StyledTechnology>Bootstrap</StyledTechnology>
                <StyledTechnology>Node.js</StyledTechnology>
                <StyledTechnology>Vite</StyledTechnology>
                <StyledTechnology>OpenCV</StyledTechnology>
            </StyledTechSection>
            <h2>Design</h2>
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