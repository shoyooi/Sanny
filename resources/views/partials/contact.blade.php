@php
$socials = [
  ['platform' => 'Instagram', 'handle' => '@sannyx13',    'href' => 'https://instagram.com/sannyx13'],
  ['platform' => 'TikTok',    'handle' => '@urmanshuzo_', 'href' => 'https://tiktok.com/@urmanshuzo_'],
  ['platform' => 'Facebook',  'handle' => '@Sanny Sabio', 'href' => 'https://facebook.com/Sanny.Sabio'],
];
@endphp

<section id="contact" class="section about-section">
    <div class="container">
        <div class="section-header reveal">
            <span class="section-num">03</span>
            <h2 class="section-title">Contact Me</h2>
            <div class="section-line"></div>
        </div>

        <div class="contact-wrap">
            <div class="contact-left reveal">
                <h3 class="contact-tagline">Let's work<br /><span>together.</span></h3>
                <p class="contact-desc">
                    Have a project in mind? Feel free to reach out via social media or the form.
                </p>
                <div class="social-list">
                    @foreach($socials as $s)
                        <a href="{{ $s['href'] }}" class="social-item" target="_blank" rel="noopener noreferrer">
                            <div class="social-icon">{{ $s['platform'][0] }}</div>
                            <div class="social-info">
                                <span class="social-platform">{{ $s['platform'] }}</span>
                                <span class="social-handle">{{ $s['handle'] }}</span>
                            </div>
                            <span class="social-arrow">↗</span>
                        </a>
                    @endforeach
                </div>
            </div>

            <form class="contact-form reveal reveal-delay-2" action="{{ route('messages.store') }}" method="POST">
                @csrf
                
                <div class="form-group">
                    <label class="form-label" for="name">Your Name</label>
                    <input class="form-input" id="name" name="name" type="text" placeholder="John Doe" value="{{ old('name') }}" required />
                    @error('name') <div class="form-error" style="display: block;">{{ $message }}</div> @enderror
                </div>
                
                <div class="form-group">
                    <label class="form-label" for="email">Email Address</label>
                    <input class="form-input" id="email" name="email" type="email" placeholder="john@example.com" value="{{ old('email') }}" required />
                    @error('email') <div class="form-error" style="display: block;">{{ $message }}</div> @enderror
                </div>

                <div class="form-group">
                    <label class="form-label" for="message">Message</label>
                    <textarea class="form-textarea" id="message" name="message" placeholder="Tell me about your project…" required>{{ old('message') }}</textarea>
                    @error('message') <div class="form-error" style="display: block;">{{ $message }}</div> @enderror
                </div>
                
                @if(session('success'))
                    <div class="form-success show">✓ {{ session('success') }}</div>
                @endif
                
                <button class="form-btn" type="submit">
                    Send Message →
                </button>
            </form>
        </div>
    </div>
</section>
