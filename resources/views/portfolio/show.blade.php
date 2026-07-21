@extends('layouts.app')

@section('content')
<div class="case-study-page">
    <nav class="case-nav">
        <a href="{{ route('home') }}" class="back-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Portfolio
        </a>
    </nav>

    <div class="case-hero">
        @if($project->video_url)
            <div class="case-media video-container">
                <video src="{{ asset($project->video_url) }}" controls autoplay muted loop playsinline></video>
            </div>
        @else
            <div class="case-media image-container">
                <img src="{{ asset($project->image_url) }}" alt="{{ $project->title }}">
            </div>
        @endif
    </div>

    <div class="case-content container">
        <div class="case-header reveal">
            <span class="case-category">{{ strtoupper($project->category) }}</span>
            <h1 class="case-title">{{ $project->title }}</h1>
        </div>

        <div class="case-grid">
            <div class="case-main reveal reveal-delay-1">
                <h2>Project Overview</h2>
                <p>{{ $project->description }}</p>
            </div>

            <div class="case-sidebar reveal reveal-delay-2">
                @if($project->client_name)
                <div class="meta-item">
                    <span class="meta-label">Client</span>
                    <span class="meta-value">{{ $project->client_name }}</span>
                </div>
                @endif
                
                @if($project->software_used)
                <div class="meta-item">
                    <span class="meta-label">Software</span>
                    <span class="meta-value">{{ $project->software_used }}</span>
                </div>
                @endif
                
                @if($project->duration)
                <div class="meta-item">
                    <span class="meta-label">Duration</span>
                    <span class="meta-value">{{ $project->duration }}</span>
                </div>
                @endif
            </div>
        </div>
    </div>
</div>
@endsection
