<template>
    <nav class="navbar"></nav>
</template>
<style>
    body {
        background-color: #ff0000;
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        mounted: function () {
            console.info("navbar mounted");
        }
    }
</script>
