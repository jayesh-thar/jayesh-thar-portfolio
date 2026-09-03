export default function Nav({ onResumeClick }) {
  return (
    <header className="nav">
      <div className="nav-mark"><span className="star">✦</span> Jayesh Thar</div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#achievements">Achievements</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#" className="resume-btn" onClick={(e) => { e.preventDefault(); onResumeClick() }}>
        Resume ↗
      </a>
    </header>
  )
}
