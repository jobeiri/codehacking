var elixir = require('laravel-elixir');
var gulp = require('gulp');



/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss')

    .styles([
        'resources/assets/css/libs/blog-post.css',
        'resources/assets/css/libs/bootstrap.css',
        'resources/assets/css/libs/bootstrap.min.css',
        'resources/assets/css/libs/font-awesome.css',
        'resources/assets/css/libs/metisMenu.css',
        'resources/assets/css/libs/sb-admin-2.css',
        'resources/assets/css/libs/styles.css'

    ], './public/css/libs.css')

    .scripts([
        'resources/assets/js/libs/bootstrap.js',
        'resources/assets/js/libs/bootstrap.min.js',
        'resources/assets/js/libs/jquery.js',
        'resources/assets/js/libs/metisMenu.js',
        'resources/assets/js/libs/sb-admin-2.js',
        'resources/assets/js/libs/scripts.js'

    ], './public/js/libs.js')

    // .styles([
    //
    //     'blog-post.css',
    //     'bootstrap.css',
    //     'bootstrap.min.css',
    //     'font-awesome.css',
    //     'metisMenu.css',
    //     'sb-admin-2.css',
    //     'styles.css'
    //
    // ], './public/css/libs.css')
    //
    // .scripts([
    //
    //     'bootstrap.js',
    //     'bootstrap.min.js',
    //     'jquery.js',
    //     'metisMenu.js',
    //     'sb-admin-2.js',
    //     'scripts.js'
    //
    // ], './public/js/libs.js')

});
