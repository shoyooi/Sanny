import { useEffect, useState } from 'react';
import { fetchProjects } from '../services/api';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';
import Modal from './Modal';

type Filter = 'all' | 'graphic' | 'video' | 'logo';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter]     = useState<Filter>('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch(() => setError('Failed to load projects.'))
      .finally(() => setLoading(false));
  }, []);

  const visible = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-num">02</span>
          <h2 className="section-title">Recap Project 2025</h2>
          <div className="section-line" />
        </div>

        <div className="projects-filter reveal">
          {(['all', 'graphic', 'video', 'logo'] as Filter[]).map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {loading && <p className="status-msg">Loading projects…</p>}
        {error   && <p className="status-msg error">{error}</p>}
        {!loading && !error && (
          <div className="projects-grid reveal">
            {visible.map(p => (
              <ProjectCard key={p.id} project={p} onClick={setSelected} />
            ))}
          </div>
        )}
      </div>
      <Modal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
