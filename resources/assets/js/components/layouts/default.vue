<template>
    <div id="wrapper">
        <Navbar></Navbar>
        <Sidebar></Sidebar>
    </div>
</template>
<style>
</style>
<script>
    import Navbar from './partials/Navbar.vue'
    import Sidebar from './partials/Sidebar.vue'
    export default{
        data(){
            return{
            }
        },
        components:{
            Navbar,
            Sidebar,
        }
    }
</script>