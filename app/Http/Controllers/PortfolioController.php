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
                (object)['id' => 1, 'image_url' => '/projects/p1.jpg', 'video_url' => null, 'category' => 'graphic', 'span' => 'tall'],
                (object)['id' => 2, 'image_url' => '/projects/p2.jpg', 'video_url' => null, 'category' => 'graphic', 'span' => 'normal'],
                (object)['id' => 3, 'image_url' => '/projects/p3.jpg', 'video_url' => null, 'category' => 'graphic', 'span' => 'normal'],
                (object)['id' => 4, 'image_url' => null, 'video_url' => '/projects/v4.mp4', 'category' => 'video', 'span' => 'normal'],
                (object)['id' => 5, 'image_url' => null, 'video_url' => '/projects/v5.mp4', 'category' => 'video', 'span' => 'wide'],
                (object)['id' => 6, 'image_url' => '/projects/p6.jpg', 'video_url' => null, 'category' => 'graphic', 'span' => 'normal'],
                (object)['id' => 7, 'image_url' => '/projects/p7.jpg', 'video_url' => null, 'category' => 'logo', 'span' => 'normal'],
                (object)['id' => 8, 'image_url' => '/projects/p8.jpg', 'video_url' => null, 'category' => 'graphic', 'span' => 'normal'],
                (object)['id' => 9, 'image_url' => null, 'video_url' => '/projects/v9.mp4', 'category' => 'video', 'span' => 'normal'],
            ]);
        }

        return view('portfolio.index', compact('projects'));
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
