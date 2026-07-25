const PROJECTS = [
  {
    name: 'VaultX',
    status: 'Completed',
    desc: <>Zero-knowledge, privacy-first identity vault. <b>Client-side AES-256-GCM encryption</b> and <b>Argon2id</b> key derivation mean plaintext never reaches the server. Custom React frontend with secure autofill, password health analysis, and session-based access control.</>,
    links: [
      { label: 'Live →', href: 'https://vault-x.xyz' },
      { label: 'Repo →', href: 'https://github.com/jayesh-thar/vault-x' },
    ],
  },
  {
    name: 'HookBin',
    status: 'In Progress',
    desc: <>Real-time webhook inspection, debugging, and replay platform. Node/Express backend logging and replaying payloads live; frontend with searchable request history, one-click replay, and an <b>AI-assisted payload explanation</b> engine.</>,
    links: [{ label: 'GitHub →', href: 'https://github.com/jayesh-thar' }],
  },
  {
    name: 'Rent-a-Tool Community Library',
    status: 'Capstone',
    desc: <>Hybrid MERN peer-to-peer tool rental and community library platform. <b>Google OAuth</b>, phone-verification guards, time-based overdue fine engine, in-app notifications, and a full admin panel — deployed across Vercel, Render, and MongoDB Atlas.</>,
    links: [{ label: 'GitHub →', href: 'https://github.com/jayesh-thar' }],
  },
  {
    name: 'Authentication API',
    status: 'Completed',
    desc: <>Secure, reusable auth service. <b>JWT</b> access tokens with httpOnly refresh rotation, bcrypt hashing, rate-limited endpoints, and role-based access control — consistent error schemas and zero hardcoded secrets.</>,
    links: [{ label: 'Repo →', href: 'https://github.com/jayesh-thar/auth-api' }],
  },
]

function ProjectRow({ p }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <div className="proj reveal" onMouseMove={onMove}>
      <div className="proj-glow" />
      <div className="star">✦</div>
      <div>
        <div className="proj-name">{p.name}</div>
        <span className="proj-status">{p.status}</span>
      </div>
      <div className="proj-desc">{p.desc}</div>
      <div className="proj-links">
        {p.links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
        ))}
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section className="dark pad" id="work">
      <div className="wrap">
        <div className="kicker reveal">✦ Selected Work</div>
        <h2 className="h-title reveal">Four things I&apos;ve shipped<br />or am still shipping.</h2>
        <div className="proj-list">
          {PROJECTS.map((p) => <ProjectRow key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  )
}
