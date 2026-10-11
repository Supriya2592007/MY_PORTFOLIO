function ProjectLink({ href, children, disabled = false }) {
  if (disabled) {
    return (
      <span className="project-link is-disabled" aria-disabled="true" title="Link not provided">
        {children}
      </span>
    )
  }

  return (
    <a className="project-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card" style={{ '--card-index': index }}>
      <div className="project-visual" aria-label={`${project.title} project preview placeholder`}>
        <div className="project-visual-grid" aria-hidden="true" />
        <div className="project-monogram" aria-hidden="true">{project.shortTitle}</div>
        <span className="project-placeholder-label">PROJECT PREVIEW</span>
        <span className="project-index">0{index + 1}</span>
      </div>

      <div className="project-card-body">
        <div className="project-card-heading">
          <span className="project-type">FEATURED PROJECT</span>
          <h3>{project.title}</h3>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-tags" aria-label="Technologies used">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <div className="project-links">
          <ProjectLink href={project.github} disabled={!project.github}>GitHub <span aria-hidden="true">↗</span></ProjectLink>
          {project.liveDemo && <ProjectLink href={project.liveDemo}>Live Demo <span aria-hidden="true">↗</span></ProjectLink>}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard