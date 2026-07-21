<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function index()
    {
        $projects = Project::orderBy('created_at', 'desc')->get();

        if ($projects->isEmpty()) {
            $projects = collect([
                (object)[
                    'id' => 1, 'slug' => 'cyberpunk-neon-portrait', 'title' => 'Cyberpunk Neon Portrait', 
                    'description' => 'A vibrant neon-lit cyberpunk style portrait for a local DJ.', 
                    'image_url' => '/projects/p1.jpg', 'video_url' => null, 'category' => 'graphic', 'span' => 'tall',
                    'software_used' => 'Adobe Photoshop', 'duration' => '4 hours', 'client_name' => 'DJ Rex'
                ],
                (object)[
                    'id' => 2, 'slug' => 'urban-streetwear-brand', 'title' => 'Urban Streetwear Brand', 
                    'description' => 'Social media post design for an upcoming streetwear brand.', 
                    'image_url' => '/projects/p2.jpg', 'video_url' => null, 'category' => 'graphic', 'span' => 'normal',
                    'software_used' => 'Adobe Photoshop & Illustrator', 'duration' => '3 hours', 'client_name' => 'Vibe Clothing'
                ],
                (object)[
                    'id' => 3, 'slug' => 'music-festival-poster', 'title' => 'Music Festival Poster', 
                    'description' => 'Event poster design focusing on typography and vibrant colors.', 
                    'image_url' => '/projects/p3.jpg', 'video_url' => null, 'category' => 'graphic', 'span' => 'normal',
                    'software_used' => 'Adobe Illustrator', 'duration' => '5 hours', 'client_name' => 'SoundWave Fest'
                ],
                (object)[
                    'id' => 4, 'slug' => 'tiktok-travel-vlog', 'title' => 'TikTok Travel Vlog', 
                    'description' => 'Fast-paced travel montage optimized for TikTok/Reels.', 
                    'image_url' => null, 'video_url' => '/projects/v4.mp4', 'category' => 'video', 'span' => 'normal',
                    'software_used' => 'CapCut & DaVinci Resolve', 'duration' => '1 day', 'client_name' => 'Personal Project'
                ],
                (object)[
                    'id' => 5, 'slug' => 'cinematic-product-promo', 'title' => 'Cinematic Product Promo', 
                    'description' => 'A sleek, cinematic product showcase for a tech client.', 
                    'image_url' => null, 'video_url' => '/projects/v5.mp4', 'category' => 'video', 'span' => 'wide',
                    'software_used' => 'Premiere Pro & After Effects', 'duration' => '3 days', 'client_name' => 'TechGear'
                ],
                (object)[
                    'id' => 6, 'slug' => 'vintage-movie-poster', 'title' => 'Vintage Movie Poster', 
                    'description' => 'Retro-style movie poster design with authentic textures.', 
                    'image_url' => '/projects/p6.jpg', 'video_url' => null, 'category' => 'graphic', 'span' => 'normal',
                    'software_used' => 'Adobe Photoshop', 'duration' => '6 hours', 'client_name' => 'Indie Films'
                ],
                (object)[
                    'id' => 7, 'slug' => 'modern-tech-logo', 'title' => 'Modern Tech Logo', 
                    'description' => 'Minimalist logo design for a startup tech company.', 
                    'image_url' => '/projects/p7.jpg', 'video_url' => null, 'category' => 'logo', 'span' => 'normal',
                    'software_used' => 'Adobe Illustrator', 'duration' => '2 days', 'client_name' => 'InnovateX'
                ],
                (object)[
                    'id' => 8, 'slug' => 'social-media-campaign', 'title' => 'Social Media Campaign', 
                    'description' => 'A cohesive Instagram feed design for a coffee shop.', 
                    'image_url' => '/projects/p8.jpg', 'video_url' => null, 'category' => 'graphic', 'span' => 'normal',
                    'software_used' => 'Figma', 'duration' => '1.5 days', 'client_name' => 'Brewed Awakening'
                ],
                (object)[
                    'id' => 9, 'slug' => 'youtube-intro-animation', 'title' => 'YouTube Intro Animation', 
                    'description' => 'Energetic logo sting and intro for a gaming channel.', 
                    'image_url' => null, 'video_url' => '/projects/v9.mp4', 'category' => 'video', 'span' => 'normal',
                    'software_used' => 'After Effects', 'duration' => '2 days', 'client_name' => 'GamerPro'
                ],
            ]);
        }

        return view('portfolio.index', compact('projects'));
    }

    public function show($slug)
    {
        $project = Project::where('slug', $slug)->first();

        // Fallback for dummy data if DB is empty
        if (!$project) {
            $dummyProjects = [
                'cyberpunk-neon-portrait' => (object)[
                    'id' => 1, 'slug' => 'cyberpunk-neon-portrait', 'title' => 'Cyberpunk Neon Portrait', 
                    'description' => 'A vibrant neon-lit cyberpunk style portrait for a local DJ.', 
                    'image_url' => '/projects/p1.jpg', 'video_url' => null, 'category' => 'graphic', 'span' => 'tall',
                    'software_used' => 'Adobe Photoshop', 'duration' => '4 hours', 'client_name' => 'DJ Rex'
                ],
                'urban-streetwear-brand' => (object)[
                    'id' => 2, 'slug' => 'urban-streetwear-brand', 'title' => 'Urban Streetwear Brand', 
                    'description' => 'Social media post design for an upcoming streetwear brand.', 
                    'image_url' => '/projects/p2.jpg', 'video_url' => null, 'category' => 'graphic', 'span' => 'normal',
                    'software_used' => 'Adobe Photoshop & Illustrator', 'duration' => '3 hours', 'client_name' => 'Vibe Clothing'
                ],
                'music-festival-poster' => (object)[
                    'id' => 3, 'slug' => 'music-festival-poster', 'title' => 'Music Festival Poster', 
                    'description' => 'Event poster design focusing on typography and vibrant colors.', 
                    'image_url' => '/projects/p3.jpg', 'video_url' => null, 'category' => 'graphic', 'span' => 'normal',
                    'software_used' => 'Adobe Illustrator', 'duration' => '5 hours', 'client_name' => 'SoundWave Fest'
                ],
                'tiktok-travel-vlog' => (object)[
                    'id' => 4, 'slug' => 'tiktok-travel-vlog', 'title' => 'TikTok Travel Vlog', 
                    'description' => 'Fast-paced travel montage optimized for TikTok/Reels.', 
                    'image_url' => null, 'video_url' => '/projects/v4.mp4', 'category' => 'video', 'span' => 'normal',
                    'software_used' => 'CapCut & DaVinci Resolve', 'duration' => '1 day', 'client_name' => 'Personal Project'
                ],
                'cinematic-product-promo' => (object)[
                    'id' => 5, 'slug' => 'cinematic-product-promo', 'title' => 'Cinematic Product Promo', 
                    'description' => 'A sleek, cinematic product showcase for a tech client.', 
                    'image_url' => null, 'video_url' => '/projects/v5.mp4', 'category' => 'video', 'span' => 'wide',
                    'software_used' => 'Premiere Pro & After Effects', 'duration' => '3 days', 'client_name' => 'TechGear'
                ],
                'vintage-movie-poster' => (object)[
                    'id' => 6, 'slug' => 'vintage-movie-poster', 'title' => 'Vintage Movie Poster', 
                    'description' => 'Retro-style movie poster design with authentic textures.', 
                    'image_url' => '/projects/p6.jpg', 'video_url' => null, 'category' => 'graphic', 'span' => 'normal',
                    'software_used' => 'Adobe Photoshop', 'duration' => '6 hours', 'client_name' => 'Indie Films'
                ],
                'modern-tech-logo' => (object)[
                    'id' => 7, 'slug' => 'modern-tech-logo', 'title' => 'Modern Tech Logo', 
                    'description' => 'Minimalist logo design for a startup tech company.', 
                    'image_url' => '/projects/p7.jpg', 'video_url' => null, 'category' => 'logo', 'span' => 'normal',
                    'software_used' => 'Adobe Illustrator', 'duration' => '2 days', 'client_name' => 'InnovateX'
                ],
                'social-media-campaign' => (object)[
                    'id' => 8, 'slug' => 'social-media-campaign', 'title' => 'Social Media Campaign', 
                    'description' => 'A cohesive Instagram feed design for a coffee shop.', 
                    'image_url' => '/projects/p8.jpg', 'video_url' => null, 'category' => 'graphic', 'span' => 'normal',
                    'software_used' => 'Figma', 'duration' => '1.5 days', 'client_name' => 'Brewed Awakening'
                ],
                'youtube-intro-animation' => (object)[
                    'id' => 9, 'slug' => 'youtube-intro-animation', 'title' => 'YouTube Intro Animation', 
                    'description' => 'Energetic logo sting and intro for a gaming channel.', 
                    'image_url' => null, 'video_url' => '/projects/v9.mp4', 'category' => 'video', 'span' => 'normal',
                    'software_used' => 'After Effects', 'duration' => '2 days', 'client_name' => 'GamerPro'
                ]
            ];

            $project = $dummyProjects[$slug] ?? null;

            if (!$project) {
                abort(404);
            }
        }

        return view('portfolio.show', compact('project'));
    }

    public function storeMessage(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        Message::create($validated);

        return redirect()->back()->with('success', 'Message sent successfully!');
    }
}
