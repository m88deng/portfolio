import Hero from "../components/Hero"
import About from "../components/About"
import ExperienceSection from "../components/Experience"
import ProjectSection from "../components/Projects"
import Footer from "../components/Footer"

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <ExperienceSection />
            <ProjectSection />
            <Footer />
        </>
    )
}