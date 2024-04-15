import { StyledExperienceTimeline } from "../styles/Experience.styled";
import { StyledTechSection, StyledTechnology } from "../styles/About.styled";

export default function ExperienceTimeline() {
    return (
        <StyledExperienceTimeline>
            <div className="outer">
                <div className="card py-4 experienceCard">
                    <h2 className="card-title px-4 py-0 mb-1 experienceTitle">Front End Developer • The Altitude Platform</h2>
                    <small className="card-body px-4 py-0">Jan 2024 - Apr 2024 • Toronto, ON • Hybrid</small>
                    <StyledTechSection className="card-body px-4 tech-gap">
                        <StyledTechnology>Javascript</StyledTechnology>
                        <StyledTechnology>HTML</StyledTechnology>
                        <StyledTechnology>CSS</StyledTechnology>
                        <StyledTechnology>React</StyledTechnology>
                        <StyledTechnology>Vite</StyledTechnology>
                        <StyledTechnology>Bootstrap</StyledTechnology>
                        <StyledTechnology>UI/UX</StyledTechnology>
                    </StyledTechSection>
                    <p className="card-body px-4 py-0 mb-3">bla bla this is some text</p>
                    <p className="text-muted px-4" style={{ cursor: "pointer" }}>Learn More</p>

                    {/* <ul>
                        <li>Point 1 very long very long</li>
                        <li>Point 2</li>
                    </ul> */}
                </div>
                <div className="card py-4 experienceCard">
                    <h2 className="card-title px-4 py-0 mb-1 experienceTitle">Software Quality Analyst • Infrastructures for Information (i4i)</h2>
                    <small className="card-body px-4 py-0">May 2023 - Sep 2023 • Toronto, ON • Remote</small>
                    <StyledTechSection className="card-body px-4 tech-gap">
                        <StyledTechnology>Python</StyledTechnology>
                        <StyledTechnology>XML</StyledTechnology>
                        <StyledTechnology>XSLT</StyledTechnology>
                        <StyledTechnology>Software Testing</StyledTechnology>
                        <StyledTechnology>Documentation</StyledTechnology>
                        <StyledTechnology>SDLC</StyledTechnology>
                        <StyledTechnology>Zoho</StyledTechnology>
                    </StyledTechSection>
                    <p className="card-body px-4 py-0 mb-3">i4i is an independent software company specialized in the delivery of XML / SGML document processing based in Toronto. Besides manual testing, I also worked on an internal tool that simplifies the conversion of Excel data into structured content with unique code numbers, eliminating the need for manual data entry. </p>
                    <p className="text-muted px-4" style={{ cursor: "pointer" }}>Learn More</p>
                    {/* <ul>
                        <li>Identified 10% of software defects and confirmed 15% of resolved issues using Zoho bug tracking</li>
                        <li>Delved into different testing types including functional, non-functional, regression, and performance testing</li>
                        <li>Used XML for configuration and Python (ElementTree) to convert Excel data into structured content with unique code numbers</li>
                        <li>Enhanced project's portability by standardizing file paths and file I/O</li>
                        <li>Improved the user interface using Python (Tkinter) to be more user-friendly</li>
                    </ul> */}
                </div>
            </div>
        </StyledExperienceTimeline >
    );
}