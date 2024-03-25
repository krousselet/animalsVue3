<template>
    <nav id="main-navigation">
        <div id="logo-container">
            <img :src="generalStore.logoUrl" alt="logo de poulet">
        </div>
        <div class="hamburger" @click.prevent="generalStore.setMobileMenuActive()">
            <div :class="generalStore.hamburgerClasses[0]"></div>
            <div :class="generalStore.hamburgerClasses[1]"></div>
            <div :class="generalStore.hamburgerClasses[2]"></div>
        </div>
        <div class="desktop-menu">
            <ul>
                <li><router-link v-for="(item, routerIndex) in generalStore.pages" :to="item.path" :key="routerIndex">
                        {{ item.label }}</router-link></li>

            </ul>
        </div>
    </nav>
</template>
<script setup>
import { useGeneralStore } from '@/stores/generalStore';
const generalStore = useGeneralStore();
</script>
<style>
#main-navigation {
    min-width: 320px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin: 5px; */
    background-color: rgba(128, 128, 128, 0.801);
    border-radius: 0 0 7px 7px;
    box-shadow: 0 0 15px black;

    #logo-container {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hamburger {
        display: none;

        @media (min-width:320px) and (max-width: 551px) {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            margin-right: 15px;
            cursor: pointer;

            .upper,
            .middle,
            .lower {
                position: absolute;
                width: 25px;
                height: 2px;
                background-color: black;
                top: 25%;
                transition: .3s ease;
            }

            .middle {
                top: 50%;
            }

            .lower {
                top: 75%;
            }
        }
    }

    .desktop-menu {
        display: none;

        @media (min-width: 550px) and (max-width: 8000px) {
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;

            ul {
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin: 0 auto;

                li {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    margin: 0 auto;

                    a {
                        margin: 0 5vw;
                        text-transform: capitalize;
                        font-size: 20px;
                        text-decoration: none;
                        color: black;
                        position: relative;
                        z-index: 20;


                        &::before {
                            content: "";
                            position: absolute;
                            width: 0;
                            height: 2px;
                            background: linear-gradient(rgb(255, 196, 0), rgb(255, 217, 0));
                            left: 50%;
                            bottom: 0;
                            transform: translateX(-50%);
                            transition: .5s ease;
                            z-index: 20;
                        }

                        &::before:hover {
                            transition: .5s ease;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>