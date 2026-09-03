const BADGES = [
  { name: 'Becoming an Agentblazer', cat: 'agentforce' },
  { name: 'Agentforce for Service', cat: 'agentforce' },
  { name: 'The Agentforce Trust Layer', cat: 'trust' },
  { name: 'Prompt Builder Basics', cat: 'ai' },
  { name: 'Large Language Models', cat: 'ai' },
  { name: 'Generative AI Basics', cat: 'ai' },
]
const TOTAL_BADGES = 26

const CAT_LABEL = { agentforce: 'Agentforce', ai: 'AI', trust: 'Trust & Ethics' }

const EVENTS = [
  {
    title: 'Hack the Mountain',
    tag: 'Hackathon',
    desc: 'Participated in a competitive hackathon; designed and built a working prototype under strict time constraints.',
    img: '/images/hack-the-mountain.jpg',
    cert: 'https://drive.google.com/file/d/1eg0v542A7hiwdPwYPaupw-y_arjwZX7U/view?usp=sharing',
  },
  {
    title: 'Elite Coder — Open Source Event',
    tag: 'Open Source',
    desc: 'Participated in an open-source contribution event, collaborating on live codebases.',
    img: '/images/elite-coder-opensource.png',
    cert: 'https://drive.google.com/file/d/1tczuTIPQ83ZmmeUmZ4cX-nk-B3gEPBf9/view?usp=sharing',
  },
]

function BadgeBar({ b }) {
  return (
    <div className={`badge-bar reveal cat-${b.cat}`}>
      <span className="badge-bar-icon">✦</span>
      <span className="badge-bar-name">{b.name}</span>
      <span className="badge-bar-tag">{CAT_LABEL[b.cat]}</span>
    </div>
  )
}

function EventCard({ ev }) {
  return (
    <div className="cert-card reveal">
      <div className="cert-card-img">
        <img src={ev.img} alt={ev.title} loading="lazy" />
      </div>
      <div className="cert-card-body">
        <span className="cert-card-tag">{ev.tag}</span>
        <div className="cert-card-name">{ev.title}</div>
        <p className="cert-card-desc">{ev.desc}</p>
        <a href={ev.cert} target="_blank" rel="noopener noreferrer" className="cert-card-link">View certificate ↗</a>
      </div>
    </div>
  )
}

export default function Achievements() {
  const remaining = TOTAL_BADGES - BADGES.length
  return (
    <section className="dark pad" id="achievements">
      <div className="wrap">
        <div className="kicker reveal">✦ Achievements</div>
        <h2 className="h-title reveal">Badges, hackathons,<br />and open-source wins.</h2>
        <p className="badges-sub reveal">
          {TOTAL_BADGES} Salesforce Trailhead badges earned across the Agentforce, Prompt Builder,
          and Applied AI trails — a few highlights below, full profile and verification on Trailblazer.
        </p>

        <div className="trailhead-head reveal">
          <div className="trailhead-count"><strong>{TOTAL_BADGES} +</strong> badges earned</div>
          <a
            className="trailhead-link"
            href="https://www.salesforce.com/trailblazer/jayesh-thar-1409"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Trailblazer Profile ↗
          </a>
        </div>

        <div className="badge-bars">
          {BADGES.map((b) => <BadgeBar key={b.name} b={b} />)}
          <a
            className="badge-bar badge-bar-more"
            href="https://www.salesforce.com/trailblazer/jayesh-thar-1409"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="badge-bar-icon">✦</span>
            <span className="badge-bar-name">+{remaining} more badges on Trailblazer</span>
            <span className="badge-bar-tag">View all ↗</span>
          </a>
        </div>

        <div className="achieve-divider reveal" />

        <h3 className="achieve-sub-title reveal">Hackathons &amp; Open Source</h3>
        <div className="achieve-certs">
          {EVENTS.map((ev) => <EventCard key={ev.title} ev={ev} />)}
        </div>
      </div>
    </section>
  )
}