<template>
    <router-view />
</template>
<script>
    import Vue from "vue"
    import { IconsPlugin } from "bootstrap-vue"

    // Import Bootstrap and BootstrapVue CSS files (order is important)
    import "bootstrap-vue/dist/bootstrap-vue.css"

    // Make BootstrapVue available throughout your project
    // Optionally install the BootstrapVue icon components plugin
    Vue.use(IconsPlugin)
    export default {
        name: "App",
        components: {
        },
    }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
    * {
        font-family: 'Fredoka One', cursive;
    }
    body {
        min-height: 100vh ;
        background-image: url("https://i.pinimg.com/originals/98/00/ff/9800ff153c8f538c15d6dbfb53b76b39.png");
        background-repeat: repeat;
        background-position: top;
        background-attachment: fixed;
    }
</style>