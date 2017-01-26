const del = require('del');
const elixir = require('laravel-elixir');
const task = elixir.Task;

require('laravel-elixir-vue-2');

elixir.extend('remove', (path)=> {
    new task('remove', ()=> {
        return del(path);
    });
});
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir((mix) => {
    mix
        .remove([
            'public/css',
            'public/js',
            'public/fonts',
            'public/images',
            'public/videos',
            'public/packages',
            'public/build',
        ])
        .sass('app.scss')
        .sass('auth.scss')
        .sass('./node_modules/bulma/bulma.sass')
        .styles([
            'public/css/app.css',
            'public/css/bulma.css',
            'resources/assets/css/style.css',
        ], 'public/css/app.css', './')
        .styles([
            'public/css/auth.css',
            'public/css/bulma.css',
        ], 'public/css/auth.css', './')
        .webpack('app.js')
        .webpack('auth.js')
        .version([
            'public/js', 'public/css',
        ])
        .copy('node_modules/font-awesome/fonts', 'public/fonts/')
        .copy('resources/assets/images', 'public/images/')
        .copy('public/fonts', 'public/build/fonts/')
        .copy('public/images', 'public/build/images/')

});
