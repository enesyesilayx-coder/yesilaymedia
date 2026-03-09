export default function Home() {
  return (
    <>
      {/* Header */}
      <header>
        <div className="header-inner">
          <a href="#" className="logo">Yesilay Media</a>
          <nav>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <h1>Content. AI Voice.<br/>Human Operations.</h1>
        <p className="subtitle">We build media ecosystems that combine content, AI, and human communication.</p>
      </section>

      <div className="divider"></div>

      {/* Ecosystem */}
      <section>
        <p className="section-title">Our Model</p>
        
        <div className="ecosystem-diagram">
          <div className="ecosystem-item">
            <h3>Content</h3>
            <p>Global audiences</p>
          </div>
          <div className="ecosystem-arrow">→</div>
          <div className="ecosystem-item">
            <h3>AI Voice</h3>
            <p>Multilingual production</p>
          </div>
          <div className="ecosystem-arrow">→</div>
          <div className="ecosystem-item">
            <h3>Human Ops</h3>
            <p>Scalable support</p>
          </div>
        </div>

        <p className="ecosystem-description">
          Three integrated systems working together. Content attracts audiences. AI voice scales production. Human operations convert opportunity.
        </p>
      </section>

      <div className="divider"></div>

      {/* Services */}
      <section>
        <p className="section-title">What We Do</p>
        
        <div className="services-grid">
          <div className="service">
            <h3>YouTube Media</h3>
            <p>Educational content on psychology, philosophy, and cognitive transformation. Two channels reaching global audiences through cinematic storytelling.</p>
          </div>
          
          <div className="service">
            <h3>Digital Products</h3>
            <p>Ebooks and mobile applications that transform engaged audiences into customers. Knowledge products extending impact beyond the screen.</p>
          </div>
          
          <div className="service">
            <h3>Call Center</h3>
            <p>Human agents working alongside AI voice systems for multilingual, 24/7 customer support. Combining human expertise with AI scalability.</p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Team */}
      <section>
        <p className="section-title">The Team</p>
        
        <div className="team-content">
          <div className="team-members">
            <div className="team-member">
              <h3>👨 R. Enes Yesilay</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <h3>👩 Begum Yesilay</h3>
              <p>VP of Operations</p>
            </div>
          </div>
          
          <p className="team-tagline">Two people. One vision. AI-native execution.</p>
        </div>
      </section>

      <div className="divider"></div>

      {/* Contact */}
      <section className="contact" id="contact">
        <h2>Get in Touch</h2>
        <a href="mailto:enes@yesilaymedia.com">enes@yesilaymedia.com</a>
        <p className="contact-note">We respond within 24 hours.</p>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p className="footer-left">© 2026 Yesilay Media</p>
          <div className="footer-links">
            <a href="https://www.youtube.com/@CarlJungunAnahtari" target="_blank" rel="noopener noreferrer">Carl Jung&apos;un Anahtarı</a>
            <a href="https://www.youtube.com/@uzakdogufelsefesi" target="_blank" rel="noopener noreferrer">Uzak Doğu Felsefesi</a>
            <a href="https://carljungunanahtari.com" target="_blank" rel="noopener noreferrer">Carl Jung&apos;un Anahtarı Shop</a>
          </div>
        </div>
      </footer>
    </>
  )
}
