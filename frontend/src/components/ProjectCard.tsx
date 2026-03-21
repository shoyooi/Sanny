import type { Project } from '../types';

interface Props {
  project: Project;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      className="project-card"
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title}`}
      onKeyDown={e => { if (e.key === 'Enter') onClick(project); }}
    >
      {project.image_url
        ? <img src={project.image_url} alt={project.title} className="project-thumb" />
        : <div className="card-placeholder">{project.title.slice(0, 3).toUpperCase()}</div>
      }
      <div className="project-overlay">
        <div className="project-cat">{project.category}</div>
        <div className="project-name">{project.title}</div>
        <div className="project-year">{project.year}</div>
      </div>
      <div className="project-arrow">↗</div>
    </div>
  );
}
