const GROUPS = [
  { title: 'Frontend', tags: ['React.js', 'Next.js', 'Redux / Context API', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { title: 'Backend', tags: ['Node.js', 'Express.js', 'RESTful API Design', 'JWT Auth', 'Rate Limiting', 'Input Validation'] },
  { title: 'DevOps & Cloud', tags: ['Docker', 'GitHub Actions (CI/CD)', 'AWS (EC2 / ECS / ECR / RDS)', 'Terraform', 'Git / GitHub'] },
  { title: 'Databases', tags: ['MongoDB', 'PostgreSQL', 'Redis'] },
  { title: 'Languages', tags: ['JavaScript', 'TypeScript', 'Java', 'C', 'Python'] },
  { title: 'Testing', tags: ['Vitest', 'Jest', 'Unit & Integration Testing'] },
  { title: 'Security', tags: ['AES-256-GCM', 'Argon2id', 'bcrypt', 'OAuth / JWT Flows'] },
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
