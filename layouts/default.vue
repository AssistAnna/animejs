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
html {
    height: 100%;
}
    body {
        margin: 0 !important;
        padding: 0 !important;
        font-family: 'Roboto', serif;
        --blue-medium: #567BDA;
        --blue-light: #86D7F3;
        --blue-dark: #1F2346;
        --orange: #FEB858;
        --beige: #FCF2E3;
    }
    .all-project {
        overflow-y: hidden;
        overflow-x: hidden;
        width: 100%;
        display: flex;
        .navbar {
            width: 11rem;
            height: 100%;
            position: fixed;

        }
        .pages {
            width: 82%;
            position: absolute;
            right: 0;
        }
    }
</style>