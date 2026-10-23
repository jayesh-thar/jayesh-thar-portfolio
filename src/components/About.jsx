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
              I build software that is reliable, secure, and easy to use.
            </p>
            <p className="reveal">
              I’m in my final year at Marwadi University. I focus on the backend: API design, databases, 
              testing and deployment. I also build the React frontend, so I can take an app from idea to 
              AWS on my own. I practice DSA on LeetCode regularly.
            </p>
            <p className="reveal">
              My main projects are Researcher Campus, a research workflow built on the Gemini API, 
              and VaultX, a password manager where the server never sees your data. I use AI tools 
              while coding, and I make sure I understand every part I ship.
            </p>
            <div className="about-meta reveal">
              <div>
                <strong>Marwadi University</strong>
                B.Tech Computer Engineering
                <br />
                2023 &ndash; 2027 &middot; CGPA 8.33
              </div>
              <div>
                <strong>Focus</strong>
                Backend, APIs, Full-stack web
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
