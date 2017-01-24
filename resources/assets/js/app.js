/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('sidebar', require('./components/layouts/Sidebar.vue'));
Vue.component('navbar', require('./components/layouts/Navbar.vue'));

const app = new Vue({
    el: '#app',
    data: {
        first_name: "",
        last_name: "",
    },
    methods: {},
    computed: {
        full_name: function () {
            return this.first_name + ' ' + this.last_name;
        },
    },
    components: {
        'e-header': {
            template: '#e-header-template',
        },
        'e-content': {
            template: '#e-content-template',
        },
        'e-footer': {
            template: '#e-footer-template'
        },
    }
});
