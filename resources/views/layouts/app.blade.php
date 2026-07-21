<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- Primary Meta Tags -->
        <title>{{ config('app.name', 'Portfolio 2026 - Sanz') }}</title>
        <meta name="title" content="{{ config('app.name', 'Portfolio 2026 - Sanz') }}">
        <meta name="description" content="Sanny Sabio — Graphic designer, video editor & content creator from Philippines.">
        <meta name="keywords" content="Sanny Sabio, portfolio, graphic designer, video editor, content creator, Philippines, Sanz">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:title" content="{{ config('app.name', 'Portfolio 2026 - Sanz') }}">
        <meta property="og:description" content="Sanny Sabio — Graphic designer, video editor & content creator from Philippines.">
        <meta property="og:image" content="{{ asset('portrait-new.jpg') }}">

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="{{ url()->current() }}">
        <meta property="twitter:title" content="{{ config('app.name', 'Portfolio 2026 - Sanz') }}">
        <meta property="twitter:description" content="Sanny Sabio — Graphic designer, video editor & content creator from Philippines.">
        <meta property="twitter:image" content="{{ asset('portrait-new.jpg') }}">

        <!-- Favicon -->
        <link rel="icon" type="image/jpeg" href="{{ asset('portrait-new.jpg') }}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=inter:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="font-sans antialiased text-white bg-slate-900 selection:bg-cyan-500/30">
        <!-- Preloader -->
        <div id="preloader" class="preloader">
            <div class="preloader-content">
                <span class="preloader-logo">SAN<span>Z</span></span>
                <div class="preloader-bar-wrap">
                    <div class="preloader-bar"></div>
                </div>
            </div>
        </div>

        <!-- Custom Cursor -->
        <div id="cursor" class="cursor-dot"></div>
        <div id="cursor-ring" class="cursor-ring"></div>
        
        @yield('content')
    </body>
</html>
