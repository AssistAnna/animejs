<template>
    <div class="all">
        <div class="fade fade-up">
            <p>Fade-left</p>
        </div>
    </div>
    
</template>

<script setup lang="ts">
    const { $anime } = useNuxtApp()
    function sayHello(): void {
        console.log('hello fucking world !')
    }
    onMounted(() => {
        sayHello();
        $anime({ 
            targets: '.fade-up',
            translateX: 30,
            duration: 980,
            easing: 'linear',
            opacity: [0, 1],
            loop: false   
        })
    });
</script>

<style lang="scss" scoped>
.all {
    position: relative;
    height: 20rem;
}
    .fade {
        background-color: var(--blue-light);
        margin: 8rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        /* basic css */
        height: 12rem;
        width: 60%;
        position: absolute;
        left: -30px;

        

        p {
            color: white;
            font-weight: bold;
            font-size: 2rem;
        }
    }
</style>