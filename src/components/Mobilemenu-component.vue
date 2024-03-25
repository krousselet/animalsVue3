<template>
    <div class="mobile-menu">
        <ul>
            <li v-for="(item, itemIndex) in generalStore.pages" :key="itemIndex"><router-link :to="item.path"
                    @click.prevent="generalStore.setMobileMenuActive">{{
                item.label }}</router-link></li>
        </ul>
    </div>
</template>

<script setup>
import { useGeneralStore } from '@/stores/generalStore';
const generalStore = useGeneralStore();
</script>

<style lang="scss" scoped>
.mobile-menu {
    position: absolute;
    opacity: 0;
    z-index: 15;
    width: 100vw;
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(20, 20, 20, 0.308);
    margin: auto;
    animation: appear .3s .1s forwards;
    backdrop-filter: blur(10px);

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        li {
            margin-bottom: 10px;

            a {
                text-transform: capitalize;
                font-size: 20px;
                text-decoration: none;
                color: black;
                position: relative;
                transition: .5s ease;
            }
        }
    }
}

@keyframes appear {
    100% {
        opacity: 1;
    }
}

@keyframes disappear {
    100% {
        opacity: 0;
    }
}
</style>