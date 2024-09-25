import { useTranslation } from "react-i18next";
import { StyledExperienceSection } from "../styles/Experience.styled";
import ExperienceTimeline from "./ExperienceTimeline";

export default function ExperienceSection() {
    const [t, i18n] = useTranslation("global");
    return (
        <StyledExperienceSection>
            <h1>{t("navbar.experiences")}</h1>
            <ExperienceTimeline />
        </StyledExperienceSection>
    )
}