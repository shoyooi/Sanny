import './bootstrap';

// Single IntersectionObserver for all .reveal elements
function initRevealObserver() {
    const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add('visible');
        }),
        { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

// Custom Cursor Logic
function initCursor() {
    const cursor = document.getElementById('cursor');
    const ring   = document.getElementById('cursor-ring');
    if (!cursor || !ring) return;

    let cx = 0, cy = 0, rx = 0, ry = 0;

    const onMove = (e) => {
        cx = e.clientX; cy = e.clientY;
        cursor.style.left = cx + 'px';
        cursor.style.top  = cy + 'px';
    };

    const loop = () => {
        rx += (cx - rx) * 0.12;
        ry += (cy - ry) * 0.12;
        ring.style.left = rx + 'px';
        ring.style.top  = ry + 'px';
        requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMove);
    requestAnimationFrame(loop);

    // Add hover states for interactive elements (optional, but good for UX)
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .proj-cell');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '24px';
            cursor.style.height = '24px';
            ring.style.borderColor = 'rgba(192,57,43,0.8)';
            ring.style.width = '48px';
            ring.style.height = '48px';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '12px';
            cursor.style.height = '12px';
            ring.style.borderColor = 'rgba(192,57,43,0.5)';
            ring.style.width = '36px';
            ring.style.height = '36px';
        });
    });
}

function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link logic
        const ids = ['hero', 'about', 'projects', 'contact'];
        let current = '';
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top < 120) current = id;
        });

        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            navbar.classList.toggle('mobile-open');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            hamburgerBtn?.classList.remove('active');
            navbar.classList.remove('mobile-open');
            const targetId = link.getAttribute('href');
            setTimeout(() => {
                document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        });
    });
}

function initProjectsFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCells = document.querySelectorAll('.proj-cell');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCells.forEach(cell => {
                if (filter === 'all' || cell.getAttribute('data-category') === filter) {
                    cell.style.display = 'block'; // Or however you were displaying them (e.g. block/flex)
                } else {
                    cell.style.display = 'none';
                }
            });
        });
    });
}

function initLightbox() {
    const projectCells = document.querySelectorAll('.proj-cell');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    const lightboxClose = document.getElementById('lightbox-close');

    if (!lightbox || !lightboxContent || !lightboxClose) return;

    projectCells.forEach(cell => {
        cell.addEventListener('click', () => {
            const src = cell.getAttribute('data-src');
            const type = cell.getAttribute('data-type');
            
            if (!src) return;

            lightboxContent.innerHTML = '';
            if (type === 'image') {
                const img = document.createElement('img');
                img.src = src;
                img.alt = 'Project preview';
                img.className = 'lightbox-img';
                lightboxContent.appendChild(img);
            } else if (type === 'video') {
                const video = document.createElement('video');
                video.src = src;
                video.className = 'lightbox-img';
                video.controls = true;
                video.autoplay = true;
                lightboxContent.appendChild(video);
            }

            lightbox.style.display = 'flex';
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxContent.innerHTML = ''; // Stop video playback
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            lightboxContent.innerHTML = '';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initRevealObserver();
    initCursor();
    initNavbar();
    initProjectsFilter();
    initLightbox();
});
