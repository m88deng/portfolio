import { StyledProjectCard } from "../styles/Projects.styled";
import { StyledTechSection, StyledTechnology } from "../styles/About.styled";

export default function ProjectCard({ project, imgCover }) {

    return (
        <StyledProjectCard>
            <div className="card projectCard">
                <h2 className="card-title px-4 pt-4 mb-1">{project.name}</h2>
                <div className="card-body px-4 pb-4 row">
                    <div className="col-6 d-flex flex-column py-0 justify-content-start">
                        <p className="py-2">{project.description}</p>
                        <StyledTechSection>
                            <StyledTechnology>Python</StyledTechnology>
                            <StyledTechnology>C++</StyledTechnology>
                            <StyledTechnology>Arduino Mega</StyledTechnology>
                            <StyledTechnology>OpenCV</StyledTechnology>
                            <StyledTechnology>System Integration</StyledTechnology>
                            <StyledTechnology>Git</StyledTechnology>
                        </StyledTechSection>
                    </div>
                    <div className="col-6 pl-0">
                        <img src={imgCover} alt="project cover" />
                    </div>

                </div>

            </div>
        </StyledProjectCard>
    )

}