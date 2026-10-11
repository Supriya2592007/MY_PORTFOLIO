import { journeyStages } from '../data/journey'

function Journey() {
  return (
    <section className="journey-section" id="experience" aria-labelledby="journey-title">
      <div className="journey-shell">
        <div className="section-heading journey-heading">
          <div>
            <p className="section-kicker"><span /> ACADEMIC &amp; TECHNICAL GROWTH</p>
            <h2 id="journey-title">Education &amp; Technical Journey</h2>
          </div>
          <p className="section-description">A semester-wise journey of my technical training, programming skills, and development experience.</p>
        </div>

        <div className="journey-timeline">
          <span className="journey-line" aria-hidden="true" />
          <ol className="journey-list">
            {journeyStages.map((stage) => (
              <li className="journey-item" key={stage.label}>
                <span className={`journey-marker${stage.current ? ' is-current' : ''}`} aria-hidden="true"><i /></span>
                <article className={`journey-card${stage.current ? ' is-current' : ''}`}>
                  <p className="journey-stage">{stage.label}</p>
                  <h3>{stage.title}</h3>
                  <div className="journey-tags" aria-label="Relevant technologies">
                    {stage.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Journey