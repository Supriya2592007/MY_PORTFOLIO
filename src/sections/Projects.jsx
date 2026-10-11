import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-shell">
        <div className="section-heading">
          <div>
            <p className="section-kicker"><span /> MY PROJECTS</p>
            <h2 id="projects-title">My <span>Projects</span></h2>
          </div>
          <p className="section-description">Some of the projects I&apos;ve built while exploring software development, AI, and real-world problem solving.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export default Projects