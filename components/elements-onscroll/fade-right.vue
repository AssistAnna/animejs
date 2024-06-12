<template>
    <div class="fade">
        <p>Fade-right</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .fade {
        background-color: var(--blue-light);
        height: 12rem;
        width: 60%;
        margin: 8rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            color: white;
            font-weight: bold;
            font-size: 2rem;
        }
    }
</style>