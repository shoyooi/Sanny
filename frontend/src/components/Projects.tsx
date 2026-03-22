// frontend/src/components/Projects.tsx
import { useState } from 'react';

// ── Add images to frontend/public/projects/
// ── Name them: p1.jpg, p2.jpg ... p9.jpg
// ── For videos: v1.mp4, v2.mp4, ... v9.mp4

interface Project {
  id: number;
  image?: string;
  video?: string;
  category: 'graphic' | 'video' | 'logo';
  span: 'tall' | 'normal' | 'wide';
}

const PROJECT_DATA: Project[] = [
  { id: 1, image: '/projects/p1.jpg', category: 'graphic', span: 'tall'   },
  { id: 2, image: '/projects/p2.jpg', category: 'graphic', span: 'normal' },
  { id: 3, image: '/projects/p3.jpg', category: 'graphic', span: 'normal' },
  { id: 4, video: '/projects/v4.mp4', category: 'video',   span: 'normal' },
  { id: 5, video: '/projects/v5.mp4', category: 'video',   span: 'wide'   },
  { id: 6, image: '/projects/p6.jpg', category: 'graphic', span: 'normal' },
  { id: 7, image: '/projects/p7.jpg', category: 'logo',    span: 'normal' },
  { id: 8, image: '/projects/p8.jpg', category: 'graphic', span: 'normal' },
  { id: 9, video: '/projects/v9.mp4', category: 'video',   span: 'normal' },
];

type Filter = 'all' | 'graphic' | 'video' | 'logo';

type LightboxContent = {
  type: 'image' | 'video';
  src: string;
} | null;

export default function Projects() {
  const [filter, setFilter]     = useState<Filter>('all');
  const [lightbox, setLightbox] = useState<LightboxContent>(null);

  const visible = filter === 'all'
    ? PROJECT_DATA
    : PROJECT_DATA.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <span className="section-num">02</span>
          <h2 className="section-title">Recap Project 2025</h2>
          <span className="proj-badge">NO AI</span>
          <div className="section-line" />
        </div>

        {/* Filter tabs */}
        <div className="projects-filter reveal">
          {(['all', 'graphic', 'video', 'logo'] as Filter[]).map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="proj-masonry reveal">
          {visible.map(p => (
            <div
              key={p.id}
              className={`proj-cell proj-cell--${p.span}`}
              onClick={() => {
                const src = p.image || p.video;
                const type = p.image ? 'image' : 'video';
                setLightbox({ type: type as 'image' | 'video', src: src || '' });
              }}
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={`Project ${p.id}`}
                  className="proj-img"
                  onError={e => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const next = (e.target as HTMLImageElement).nextElementSibling;
                    next?.classList.remove('hidden');
                  }}
                />
              ) : (
                <div className="proj-video-container">
                  <video
                    src={p.video}
                    className="proj-img"
                    onError={e => {
                      (e.target as HTMLVideoElement).style.display = 'none';
                      const next = (e.target as HTMLVideoElement).nextElementSibling;
                      next?.classList.remove('hidden');
                    }}
                  />
                  <div className="proj-video-play">▶</div>
                </div>
              )}
              <div className="proj-placeholder hidden">
                <span className="proj-placeholder-num">P{p.id}</span>
                <span className="proj-placeholder-hint">Add /projects/{p.image ? `p${p.id}.jpg` : `v${p.id}.mp4`}</span>
              </div>
              <div className="proj-hover-overlay">
                <span className="proj-hover-cat">{p.category}</span>
                <span className="proj-hover-zoom">{p.video ? '▶' : '⊕'}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="proj-add-hint reveal">
          Drop images into <code>frontend/public/projects/</code> named <code>p1.jpg … p9.jpg</code> or videos like <code>v1.mp4, v9.mp4</code>
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          {lightbox.type === 'image' ? (
            <img src={lightbox.src} alt="Project preview" className="lightbox-img" />
          ) : (
            <video src={lightbox.src} className="lightbox-img" controls autoPlay />
          )}
        </div>
      )}
    </section>
  );
}
