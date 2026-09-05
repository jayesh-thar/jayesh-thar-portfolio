const CERTS = [
  {
    name: 'AWS Academy Graduate — Cloud Foundations',
    tag: 'AWS',
    img: '/images/aws-academy-cloud-foundations.png',
    link: 'https://drive.google.com/file/d/1cVJAaMqGrQnHVbQowuIiEx_vUXRlXgeP/view?usp=drive_link',
  },
  {
    name: 'DevOps Fundamentals — Infosys Springboard',
    tag: 'DevOps',
    img: '/images/devops-fundamentals-infosys.png',
    link: 'https://drive.google.com/file/d/1BSSqY2Az8K_lTvPIFpn3gFI-5tNtbqsE/view?usp=sharing',
  },
  {
    name: 'Trailhead: AI Associate Trail (Badge)',
    tag: 'AI',
    img: '/images/trailhead-ai-associate.png',
    link: 'https://www.salesforce.com/trailblazer/jayesh-thar-1409',
  },
  {
    name: 'CCNA: Introduction to Networks — Cisco Networking Academy program',
    tag: 'Networking',
    img: '/images/ccna.png',
    link: 'https://drive.google.com/file/d/10xnpehuycs78KaupD7KhbbRo4ts300-O/view?usp=drive_link',
  },
  {
    name: 'Linux Essentials — Cisco Networking Academy program',
    tag: 'Linux',
    img: '/images/linux.png',
    link: 'https://drive.google.com/file/d/1ICwTRuCOl3KS4KrcGucJStgCrqpMZSGj/view?usp=sharing',
  },
  {
    name: 'Salesforce Administration — Infosys Springboard',
    tag: 'Salesforce',
    img: '/images/salesforce_admin.png',
    link: 'https://drive.google.com/file/d/166BBlOOyUFkBvONgPWpdJQBYaHCCIYpj/view?usp=drive_link',
  },
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
          <div className="cert-card-grid">
            {CERTS.map((c) => (
              <a
                className="cert-card"
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                key={c.name}
              >
                <div className="cert-card-img">
                  <img src={c.img} alt={c.name} loading="lazy" />
                </div>
                <div className="cert-card-body">
                  <span className="cert-card-tag">{c.tag}</span>
                  <div className="cert-card-name">{c.name}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
