function CertificationPreview({ certification }) {
  if (certification.image) {
    return <img className="certificate-preview-image" src={certification.image} alt={`${certification.title} certificate`} />
  }

  return (
    <div className="certificate-preview-placeholder" aria-label={`${certification.title} certificate preview placeholder`}>
      <span className="certificate-mark" aria-hidden="true">CERT</span>
      <span className="certificate-placeholder-label">CERTIFICATE PREVIEW</span>
      <span className="certificate-placeholder-line" aria-hidden="true" />
    </div>
  )
}

function CertificationCard({ certification, index }) {
  return (
    <article className="certification-card">
      <div className="certificate-preview">
        <CertificationPreview certification={certification} />
        <span className="certificate-index" aria-hidden="true">0{index + 1}</span>
      </div>
      <div className="certification-card-body">
        <p className="certification-label">LEARNING MILESTONE</p>
        <h3>{certification.title}</h3>
        <p className="certification-provider"><span>Provider</span>{certification.provider || 'To be confirmed'}</p>
        {certification.certificateFile && (
          <a className="certificate-link" href={certification.certificateFile} target="_blank" rel="noopener noreferrer">
            View Certificate <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  )
}

export default CertificationCard