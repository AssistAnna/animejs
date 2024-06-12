<template>
    <div class="navbar">
        <h1>Animati<span>o</span>ns</h1>
        <h2>avec Anime<span>js</span></h2>
        <ul v-for="item in navItems" :key="item.name">
            <li><nuxt-link :to="item.link">
                <h3>{{ item.name }}</h3>
            </nuxt-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navItems : [
                    {
                        name: 'Accueil',
                        link: '/'
                    },
                    {
                        name: 'Animations on-scroll',
                        link: '/elements-onscroll'
                    },
                    {
                        name: 'Parallax',
                        link: '/parallax'
                    }
                ]
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.navbar {
    padding: 0.3rem;
    background-color: var(--blue-dark);
    color: white;
    h1 {
        font-size: 1.5rem;
        text-align: center;
        span {
            color: var(--orange);
        }   
    }
    h2 {
        font-size: 1.1rem;
        text-align: center;
        span {
            color: var(--blue-light);
        } 
    }
    ul {
        margin-top: 2rem;
        list-style-type: none;
        padding-left: 0.3rem;
        a {
            text-decoration: none;
            color: white;
            font-size: 0.7rem;
        }
    }
}
</style>