@extends('layouts.app')

@section('content')
    @include('partials.navbar')
    
    <main>
        @include('partials.hero')
        @include('partials.about')
        @include('partials.projects')
        @include('partials.contact')
    </main>

    @include('partials.footer')
@endsection
