<nav class="navbar" id="navbar">
    <a href="#hero" class="nav-logo">SAN<span>Z</span></a>
    
    <!-- Desktop Navigation -->
    <ul class="nav-links">
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
    </ul>
    <button class="nav-cta" onclick="document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })">
        Hire Me
    </button>

    <!-- Mobile Hamburger Button -->
    <button class="hamburger" id="hamburger-btn" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
    </button>

    <!-- Mobile Navigation Menu -->
    <div class="mobile-menu" id="mobile-menu">
        <ul class="mobile-nav-links">
            <li><a href="#about" class="mobile-nav-link">About</a></li>
            <li><a href="#projects" class="mobile-nav-link">Projects</a></li>
            <li><a href="#contact" class="mobile-nav-link">Contact</a></li>
        </ul>
        <button class="mobile-nav-cta" onclick="document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })">
            Hire Me
        </button>
    </div>
</nav>
