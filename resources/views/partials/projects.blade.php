<section id="projects" class="section">
    <div class="container">
        <!-- Header -->
        <div class="section-header reveal">
            <span class="section-num">02</span>
            <h2 class="section-title">Projects</h2>
            <span class="proj-badge">NO AI</span>
            <div class="section-line"></div>
        </div>

        <!-- Filter tabs -->
        <div class="projects-filter reveal">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="graphic">Graphic</button>
            <button class="filter-btn" data-filter="video">Video</button>
            <button class="filter-btn" data-filter="logo">Logo</button>
        </div>

        <!-- Masonry grid -->
        <div class="proj-masonry reveal" id="projects-grid">
            @foreach($projects as $project)
                <a href="{{ route('project.show', $project->slug ?? $project->id) }}" 
                   class="proj-cell proj-cell--{{ $project->span }} reveal reveal-delay-{{ $loop->index % 3 }}" 
                   data-category="{{ $project->category }}">
                    
                    @if($project->video_url)
                        <video src="{{ asset($project->video_url) }}" class="proj-img" autoplay muted loop playsinline></video>
                    @else
                        <img src="{{ asset($project->image_url) }}" alt="{{ $project->title }}" class="proj-img" loading="lazy">
                    @endif

                    <div class="proj-hover-overlay">
                        <span class="proj-hover-cat">{{ ucfirst($project->category) }}</span>
                        <h3 class="proj-hover-title">{{ $project->title ?? 'Project View' }}</h3>
                    </div>
                </a>
            @endforeach
        </div>
    </div>

    <!-- Lightbox -->
    <div id="lightbox" class="lightbox" style="display: none;">
        <button id="lightbox-close" class="lightbox-close">✕</button>
        <div id="lightbox-content"></div>
    </div>
</section>
