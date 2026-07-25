import { useEffect } from 'react'

const RESUME_SRC = '/resume.pdf'

export default function ResumeModal({ open, onClose, lenisRef }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      lenisRef?.current?.stop()
    } else {
      document.body.style.overflow = ''
      lenisRef?.current?.start()
    }
  }, [open, lenisRef])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && open) onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <div
      className={`modal-backdrop${open ? ' open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-panel">
        <div className="modal-head">
          <div className="modal-title"><span className="star">✦</span> Resume</div>
          <div className="modal-actions">
            <a className="modal-download" href={RESUME_SRC} download="Jayesh_Thar_Resume.pdf">Download ↓</a>
            <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
          </div>
        </div>
        <div className="modal-body">
          {open && <iframe title="Jayesh Thar Resume" src={`${RESUME_SRC}#toolbar=1`} />}
        </div>
      </div>
    </div>
  )
}
