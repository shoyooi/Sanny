<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;

Route::get('/', [PortfolioController::class, 'index'])->name('home');
Route::get('/project/{slug}', [PortfolioController::class, 'show'])->name('project.show');
Route::post('/messages', [PortfolioController::class, 'storeMessage'])->name('messages.store');
