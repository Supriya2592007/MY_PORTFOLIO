import CertificationCard from '../components/CertificationCard'
import { certifications } from '../data/certifications'

function Certifications() {
  return (
    <section className="certifications-section" id="certifications" aria-labelledby="certifications-title">
      <div className="certifications-shell">
        <div className="section-heading certifications-heading">
          <div>
            <p className="section-kicker"><span /> VERIFIED LEARNING</p>
            <h2 id="certifications-title">Certifications</h2>
          </div>
          <p className="section-description">Certifications and learning milestones from my technical journey.</p>
        </div>
        <div className="certifications-grid">
          {certifications.map((certification, index) => (
            <CertificationCard key={certification.title} certification={certification} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications