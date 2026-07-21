<section id="projects" class="section">
    <div class="container">
        <!-- Header -->
        <div class="section-header reveal">
            <span class="section-num">02</span>
            <h2 class="section-title">Recap Project 2025</h2>
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
            @foreach($projects as $p)
                @php
                    $isImage = !empty($p->image_url);
                    $src = $isImage ? $p->image_url : $p->video_url;
                @endphp
                <div class="proj-cell proj-cell--{{ $p->span }}" data-category="{{ $p->category }}" data-src="{{ asset($src) }}" data-type="{{ $isImage ? 'image' : 'video' }}">
                    @if($isImage)
                        <img src="{{ asset($src) }}" alt="Project {{ $p->id }}" class="proj-img" onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');" />
                    @else
                        <div class="proj-video-container">
                            <video src="{{ asset($src) }}" class="proj-img" onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');"></video>
                            <div class="proj-video-play">▶</div>
                        </div>
                    @endif
                    
                    <div class="proj-placeholder hidden">
                        <span class="proj-placeholder-num">P{{ $p->id }}</span>
                        <span class="proj-placeholder-hint">Add {{ $src }}</span>
                    </div>
                    
                    <div class="proj-hover-overlay">
                        <span class="proj-hover-cat">{{ ucfirst($p->category) }}</span>
                        <span class="proj-hover-zoom">{{ $isImage ? '⊕' : '▶' }}</span>
                    </div>
                </div>
            @endforeach
        </div>
    </div>

    <!-- Lightbox -->
    <div id="lightbox" class="lightbox" style="display: none;">
        <button id="lightbox-close" class="lightbox-close">✕</button>
        <div id="lightbox-content"></div>
    </div>
</section>
