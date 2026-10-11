import { socialLinks } from '../data/contact'

function FooterLink({ link }) {
  if (!link.href) return <span className="footer-link is-placeholder">{link.label}</span>
  return <a className="footer-link" href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <span>© 2026 Supriya</span>
        <span>Built with React</span>
        <div className="footer-socials">
          {socialLinks.map((link) => <FooterLink key={link.label} link={link} />)}
        </div>
      </div>
    </footer>
  )
}

export default Footer