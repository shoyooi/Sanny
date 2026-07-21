@php
$socials = [
  ['icon' => 'I', 'platform' => 'Instagram', 'handle' => '@sannyx13',    'href' => 'https://instagram.com/sannyx13'],
  ['icon' => 'T', 'platform' => 'TikTok',    'handle' => '@urmanshuzo_', 'href' => 'https://tiktok.com/@urmanshuzo_'],
  ['icon' => 'F', 'platform' => 'Facebook',  'handle' => '@Sanny Sabio', 'href' => 'https://facebook.com/Sanny.Sabio'],
];

$prevPortfolios = [
  ['year' => '2023', 'image' => '/prev-2023.jpg', 'label' => 'PORTOFOLIO.'],
  ['year' => '2024', 'image' => '/prev-2024.jpg', 'label' => 'DESIGN PORTFOLIO'],
];
@endphp

<footer class="footer" id="footer">
    <!-- ── CLOSING SECTION ─────────────────────────────────── -->
    <div class="closing-wrap">
        <div class="container">
            <div class="closing-grid">
                <!-- Left — avatar + socials -->
                <div class="closing-left reveal">
                    <div class="closing-avatar-wrap">
                        <img src="{{ asset('portrait-new.jpg') }}?t=20260323-final" alt="Sanz" class="closing-avatar" />
                    </div>
                    <p class="closing-name">
                        SANNY SABIO<br /><span>Content Creator</span>
                    </p>
                    <div class="closing-socials">
                        @foreach($socials as $s)
                            <a href="{{ $s['href'] }}" class="closing-social-row" target="_blank" rel="noopener noreferrer">
                                <span class="closing-social-icon">{{ $s['icon'] }}</span>
                                <span class="closing-social-handle">{{ $s['handle'] }}</span>
                            </a>
                        @endforeach
                    </div>
                </div>

                <!-- Right — THANK YOU -->
                <div class="closing-right reveal reveal-delay-2">
                    <div class="thankyou-text">
                        <span class="thankyou-main">THANK YOU!</span>
                        <span class="thankyou-year">FOR INQUIRY</span>
                    </div>
                    <div class="film-strip">
                        @for($i = 0; $i < 8; $i++)
                            <div class="film-hole"></div>
                        @endfor
                    </div>
                </div>
            </div>

            <!-- ── Previous portfolios ──────────────────────────── -->
            <div class="prev-portfolios reveal">
                @foreach($prevPortfolios as $p)
                    <div class="prev-card">
                        <div class="prev-img-wrap">
                            <img src="{{ asset($p['image']) }}" alt="Portfolio {{ $p['year'] }}" class="prev-img" onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');" />
                            <div class="prev-placeholder hidden">
                                <span>{{ $p['label'] }}</span>
                            </div>
                        </div>
                        <span class="prev-year">{{ $p['year'] }}</span>
                    </div>
                @endforeach

                <!-- Decorative cassette -->
                <div class="prev-deco">
                    <div class="deco-cassette">
                        <div class="cassette-reel"></div>
                        <div class="cassette-reel"></div>
                    </div>
                    <div class="deco-filmstrip">
                        @for($i = 0; $i < 6; $i++)
                            <div class="film-frame"></div>
                        @endfor
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ── Bottom bar ─────────────────────────────────────── -->
    <div class="footer-bar">
        <div class="container">
            <div class="footer-bottom">
                <div class="footer-copy">© 2026 <span>Sanny Sabio</span>. All rights reserved.</div>
                <ul class="footer-links">
                    <li><a href="#hero">Top</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
