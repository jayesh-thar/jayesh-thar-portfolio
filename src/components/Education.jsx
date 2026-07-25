const CERTS = [
  { name: 'AWS Academy Graduate — Cloud Foundations', tag: 'AWS' },
  { name: 'Machine Learning using Python', tag: 'ML' },
  { name: 'Automate Software Testing in Software Engineering', tag: 'QA' },
  { name: 'CCNA — Introduction to Networks', tag: 'NET' },
  { name: 'Linux Essentials', tag: 'OS' },
]

export default function Education() {
  return (
    <section className="paper" id="education">
      <div className="wrap pad">
        <div className="kicker reveal">✦ Background</div>
        <h2 className="h-title reveal">Education &amp; certificates.</h2>

        <div className="tl">
          <div className="tl-row reveal">
            <div className="tl-year">2023 &ndash; 2027</div>
            <div>
              <div className="tl-role">B.Tech, Computer Engineering</div>
              <div className="tl-sub">Marwadi University, Rajkot &middot; CGPA 8.37 &middot; No Backlog</div>
            </div>
          </div>
        </div>

        <div className="cert-list reveal">
          <h3>Certificates</h3>
          <div className="cert-grid">
            {CERTS.map((c) => (
              <div key={c.name}>{c.name} <span>{c.tag}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
