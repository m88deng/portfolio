import { StyledProjectSection } from "../styles/Projects.styled";
import ProjectCard from "./ProjectCard";
import Emolock from "./../assets/projects/emolock_cover.png"

export default function ProjectSection() {
    return (
        <StyledProjectSection>
            <h1>Personal Projects</h1>
            <ProjectCard name={"Emolock Event Application"} imgCover={Emolock}></ProjectCard>
            <ProjectCard name={"Hack The North Challenge"} imgCover={Emolock}></ProjectCard>

        </StyledProjectSection >
    )
}