import { useEffect } from 'react';
import type { Project } from '../types';

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function Modal({ project, onClose }: ModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  return (
    <div
      className={`modal-backdrop ${project ? 'open' : ''}`}
      onClick={e => { if (e.currentTarget === e.target) onClose(); }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-cat">{project?.category}</div>
        <div className="modal-title">{project?.title}</div>
        <p className="modal-desc">{project?.description}</p>
        {project?.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-link">
            View Project ↗
          </a>
        )}
      </div>
    </div>
  );
}
