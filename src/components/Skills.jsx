const GROUPS = [
  { title: 'Languages', tags: ['JavaScript', 'TypeScript', 'Java', 'C'] },
  { title: 'Frontend', tags: ['React.js', 'Next.js', 'Redux / Context API', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { title: 'Backend', tags: ['Node.js', 'Express.js'] },
  { title: 'Data', tags: ['MongoDB', 'PostgreSQL', 'Redis'] },
  { title: 'DevOps & Tools', tags: ['Docker', 'CI / CD', 'Git / GitHub'] },
  { title: 'Systems & Concepts', tags: ['Secure Auth Flows', 'RESTful API Design', 'DB Modelling', 'System Design'] },
]

export default function Skills() {
  return (
    <section className="dark pad" id="skills">
      <div className="wrap">
        <div className="kicker reveal">✦ Toolkit</div>
        <h2 className="h-title reveal">What I build with.</h2>
        <div className="skills-grid">
          {GROUPS.map((g) => (
            <div className="skill-cell reveal" key={g.title}>
              <h3>{g.title}</h3>
              <div className="skill-tags">
                {g.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
