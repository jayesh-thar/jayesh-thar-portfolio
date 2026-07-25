export default function About() {
  return (
    <section className="paper" id="about">
      <div className="wrap pad">
        <div className="kicker reveal">✦ About</div>
        <div className="about-grid">
          <div className="about-img reveal">
            <img src="/images/profile-side.jpg" alt="Jayesh Thar" />
          </div>
          <div className="about-text">
            <p className="reveal">
              I build software the way I&apos;d want to use it — fast, secure by default, and
              honest about what it does.
            </p>
            <p className="reveal">
              Currently in my final year at Marwadi University, splitting my time between
              production React/Next.js interfaces and the Node/Express systems behind them —
              encryption, auth, and database design included, not bolted on later. I lean on AI
              tooling deliberately, as a multiplier for judgment rather than a replacement for it.
            </p>
            <div className="about-meta reveal">
              <div>
                <strong>Marwadi University</strong>
                B.Tech Computer Engineering
                <br />
                2023 &ndash; 2027 &middot; CGPA 8.37
              </div>
              <div>
                <strong>Focus</strong>
                MERN &amp; PERN, Secure Systems
              </div>
              <div>
                <strong>Based in</strong>
                Rajkot, Gujarat, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
