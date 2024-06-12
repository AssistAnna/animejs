<template>
    <div class="all-project">
        <Navbar class="navbar"/>
        <NuxtPage class="pages"/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    body {
            margin: 0 !important;
            padding: 0 !important;
    }
    .all-project {
        overflow-y: hidden;
        overflow-x: hidden;
        width: 100%;
        display: flex;
        .navbar {
            width: 20%;
            border: 1px solid black;
            height: 100vh;
        }
        .pages {
            width: 80%;
        }
    }
</style>