export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact-media" style={{ backgroundImage: "url('/images/triple-banner.jpg')" }} />
        <div className="contact-scrim" />
        <div className="wrap contact-inner">
          <div className="kicker reveal" style={{ color: 'var(--gold-soft)' }}>✦ Get in touch</div>
          <h2 className="contact-title reveal">
            Let&apos;s build something<br />worth shipping. <span className="star">✦</span>
          </h2>
          <div className="contact-row reveal">
            <a className="contact-email" href="mailto:jayeshthar1409@gmail.com">jayeshthar1409@gmail.com</a>
            <div className="contact-links">
              <a href="https://jayeshthar.me" target="_blank" rel="noopener noreferrer">Website</a>
              <a href="https://github.com/jayesh-thar" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/jayesh-thar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="tel:+917202005106">+91 72020 05106</a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div>© 2026 Jayesh Thar</div>
        <div>Built with intent.</div>
      </footer>
    </>
  )
}
