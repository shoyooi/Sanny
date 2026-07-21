@php
$skills = ['Photoshop', 'DaVinci Resolve', 'CapCut', 'Figma'];
$langs  = [
    ['name' => 'Tagalog', 'pct' => 100],
    ['name' => 'English', 'pct' => 50],
];
@endphp

<section id="about" class="section about-section">
    <div class="container">
        <div class="section-header reveal">
            <span class="section-num">01</span>
            <h2 class="section-title">About Me</h2>
            <div class="section-line"></div>
        </div>

        <div class="about-grid">
            <div class="about-img-wrap reveal">
                <img src="{{ asset('portrait-new.jpg') }}?t=20260323-final" alt="Sanny" class="about-img" />
                <div class="about-img-caption">Sanny Sabio· ID</div>
            </div>

            <div class="about-content">
                <p class="about-intro reveal">
                    Hi, I'm Sanny Sabio. I'm back making a portfolio at the end of the year.
                    I learned a lot of things from editing — from graphic design, video, typography,
                    and others. I learned from 2018 autodidactically, and I have a little editing skill
                    that I learned from year to year.
                </p>

                <div class="reveal reveal-delay-1">
                    <span class="about-label">Software Skills</span>
                    <div class="skills-row">
                        @foreach($skills as $s)
                            <div class="skill-chip">
                                <div class="skill-dot"></div>{{ $s }}
                            </div>
                        @endforeach
                    </div>
                </div>

                <div class="info-grid reveal reveal-delay-2">
                    <div class="info-block">
                        <div class="info-title">Education</div>
                        <div class="info-item">
                            <strong>2023 – 2027</strong>
                            Cor Jesu College, Inc.<br />Bachelor Science in Information Technology
                        </div>
                    </div>
                    <div class="info-block">
                        <div class="info-title">Experience</div>
                        <div class="info-item">
                            <strong>TikTok Content</strong>
                            Got Followers 20,000+<br />Content football cartoon version
                        </div>
                    </div>
                </div>

                <div class="reveal reveal-delay-3">
                    <span class="about-label">Language Proficiency</span>
                    <div class="lang-list">
                        @foreach($langs as $l)
                            <div class="lang-row">
                                <span class="lang-name">{{ $l['name'] }}</span>
                                <div class="lang-bar">
                                    <div class="lang-fill" style="width: {{ $l['pct'] }}%"></div>
                                </div>
                                <span class="lang-pct">{{ $l['pct'] }}%</span>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
