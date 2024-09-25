import { useTranslation } from "react-i18next";
import { StyledHero } from "../styles/Hero.styled.js";
import bgLight from "./../assets/background_light.png";
// import bgDark from "./../assets/background_dark.png";
import bgCloud from "./../assets/clouds.png";

export default function Hero() {
    const [t, i18n] = useTranslation("global")
    return (
        <StyledHero background={bgLight} className="hero d-flex flex-column justify-content-center align-items-center">
            <img className="bgLightCloud" src={bgCloud} alt="cloud" />
            <h4 style={{ zIndex: "0" }}>{t("hero.welcome")}</h4>
            <div style={{ zIndex: "1" }} className="title pb-4">Melissa Deng</div>
            <h3 style={{ zIndex: "1" }} className="pb-5">{t("hero.titles.softwareEngineer")} • {t("hero.titles.frontendDeveloper")} • {t("hero.titles.uiuxDesigner")} • {t("hero.titles.traditionalArtist")}</h3>
        </StyledHero>
    );
};