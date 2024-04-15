import { StyledHero } from "../styles/Hero.styled.js";
import bgLight from "./../assets/background_light.png";
import bgDark from "./../assets/background_dark.png";
import bgCloud from "./../assets/clouds.png";

export default function Hero() {
    return (
        <StyledHero background={bgLight} className="hero d-flex flex-column justify-content-center align-items-center">
            <img className="bgLightCloud" src={bgCloud} />
            <h4 style={{ zIndex: "0" }}>Welcome to the creative corner of</h4>
            <div style={{ zIndex: "1" }} className="title pb-4">Melissa Deng</div>
            <h3 style={{ zIndex: "1" }} className="pb-5">Software Engineer • Front-End Developer • UI/UX Designer • Traditional Artist</h3>
        </StyledHero>
    );
};