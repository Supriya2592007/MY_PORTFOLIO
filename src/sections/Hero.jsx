function ProfilePlaceholder() {
  return (
    <div className="profile-visual" aria-label="Profile image placeholder">
      <div className="visual-grid" aria-hidden="true" />
      <div className="visual-frame">
        <div className="visual-frame-top">
          <span className="window-dot" /><span className="window-dot" /><span className="window-dot" />
          <span className="visual-label">profile_visual</span>
        </div>
        <img className="profile-image" src="/portfolio_assets/Profile_pic.png" alt="Supriya profile" />
      </div>
      <span className="visual-corner corner-top" aria-hidden="true" />
      <span className="visual-corner corner-bottom" aria-hidden="true" />
      <span className="visual-status"><i /> available to connect</span>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-shell">
        <ProfilePlaceholder />
        <div className="hero-content">
          <p className="eyebrow"><span /> COMPUTER SCIENCE &amp; DATA SCIENCE</p>
          <p className="intro-line">Hello, I&apos;m</p>
          <h1 id="hero-title">Supriya<span className="accent-mark">.</span></h1>
          <p className="role">Python Full-Stack <span>Developer</span></p>
          <p className="hero-description">I&apos;m a Computer Science &amp; Data Science student focused on Python, full-stack development, AI, and problem solving. I enjoy turning ideas into practical applications and building solutions through projects, hackathons, and continuous learning.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View My Work <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="/portfolio_assets/my_resume_%20(2).pdf" target="_blank" rel="noopener noreferrer">Download Resume <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-meta"><span className="meta-line" /><span>PYTHON · AI · FULL STACK · DSA</span></div>
        </div>
      </div>
      <a className="scroll-cue" href="#projects"><span>SCROLL TO EXPLORE</span><i aria-hidden="true">↓</i></a>
    </section>
  )
}

export default Hero