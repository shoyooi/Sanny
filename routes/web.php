<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;

Route::get('/', [PortfolioController::class, 'index'])->name('home');
Route::post('/messages', [PortfolioController::class, 'storeMessage'])->name('messages.store');
