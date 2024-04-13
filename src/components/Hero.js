import { StyledHero } from "../styles/Hero.styled.js";
import bgLight from "./../assets/background_light.png";
import bgDark from "./../assets/background_dark.png";

export default function Hero() {
    return (
        <StyledHero background={bgLight} className="hero d-flex flex-column justify-content-center align-items-center">
            <h4>Welcome to the creative corner of</h4>
            <div className="title pb-4">Melissa Deng</div>
            <h3 className="pb-5">Software Engineer • Front-End Developer • UI/UX Designer • Traditional Artist</h3>
        </StyledHero>
    );
};