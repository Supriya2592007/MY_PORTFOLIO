import { useRef, useState } from 'react'
import { contactDetails } from '../data/contact'

const initialForm = { name: '', email: '', message: '' }
const web3FormsEndpoint = 'https://api.web3forms.com/submit'

function ContactDetail({ detail }) {
  return (
    <div className="contact-detail">
      <span className="contact-detail-label">{detail.label}</span>
      {detail.href ? (
        <a
          className="contact-detail-value"
          href={detail.href}
          target={detail.external ? '_blank' : undefined}
          rel={detail.external ? 'noopener noreferrer' : undefined}
          aria-label={`${detail.label}: ${detail.value}`}
        >
          {detail.value}
        </a>
      ) : (
        <span className="contact-detail-value is-placeholder">{detail.value}</span>
      )}
    </div>
  )
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submissionInProgress = useRef(false)

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }))
    setStatus(null)
  }

  const submitForm = async (event) => {
    event.preventDefault()
    if (submissionInProgress.current) return

    const nextErrors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim()) nextErrors.email = 'Please enter your email.'
    else if (!emailPattern.test(form.email.trim())) nextErrors.email = 'Please enter a valid email.'
    if (!form.message.trim()) nextErrors.message = 'Please enter a message.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus({ type: 'error', message: 'Please correct the highlighted fields.' })
      return
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setStatus({
        type: 'error',
        message: 'Contact form setup is incomplete. Configure VITE_WEB3FORMS_ACCESS_KEY with your Web3Forms access key, or email me directly.',
      })
      return
    }

    submissionInProgress.current = true
    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch(web3FormsEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      })
      const result = await response.json()

      if (!response.ok || result.success !== true) {
        throw new Error(result.message || `Web3Forms returned HTTP ${response.status}.`)
      }

      setStatus({ type: 'success', message: 'Thanks! Your message was sent successfully.' })
      setForm(initialForm)
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setStatus({
        type: 'error',
        message: 'Your message could not be sent. Please try again or contact me directly by email.',
      })
    } finally {
      submissionInProgress.current = false
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-shell">
        <div className="contact-heading">
          <p className="section-kicker"><span /> GET IN TOUCH</p>
          <h2 id="contact-title">Let&apos;s Work Together</h2>
          <p className="contact-intro">I&apos;m open to internship opportunities, collaborations, hackathons, and interesting software projects. Feel free to reach out through email, phone, or my professional profiles.</p>
          <div className="contact-details">
            {contactDetails.map((detail) => <ContactDetail detail={detail} key={detail.label} />)}
          </div>
        </div>

        <form className="contact-form" onSubmit={submitForm} noValidate autoComplete="off">
          <div className="form-field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" value={form.name} onChange={updateField} placeholder="Enter your name" autoComplete="off" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
            {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" value={form.email} onChange={updateField} placeholder="Enter your email" autoComplete="off" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
            {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="6" value={form.message} onChange={updateField} placeholder="Write your message" autoComplete="off" required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
            {errors.message && <span className="field-error" id="message-error">{errors.message}</span>}
          </div>
          <button className="contact-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'} <span aria-hidden="true">↗</span>
          </button>
          {status && <p className={`form-status ${status.type}`} role="status">{status.message}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact