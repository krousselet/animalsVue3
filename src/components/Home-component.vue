<template>
    <main>
        <div class="title-container">
            <h1>{{ generalStore.pages[0].catch }}</h1>
        </div>
        <div class="catch-container">
            <p>Le gaec de la Nine et du Didier</p>
        </div>
    </main>

</template>

<script setup>
import { useGeneralStore } from '@/stores/generalStore'
const generalStore = useGeneralStore()
</script>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    height: calc(100vh - 100px);
    width: 100%;
    margin: 0 auto;

    .title-container {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        h1 {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translateY(-250px);
            animation: appear-top 1s .3s forwards;

            &::before {
                content: "";
                width: 0;
                height: 2px;
                background: linear-gradient(rgb(255, 196, 0), rgb(255, 217, 0));
                position: absolute;
                left: 50%;
                top: 100%;
                transform: translateX(-50%);
                animation: underlining .5s 1s forwards;
            }
        }
    }

    .catch-container {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin: 0 auto;

        p {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translateY(250px);
            animation: appear-top 1s .7s forwards;
            font-size: 2rem;

            &::before {
                content: "";
                width: 0;
                height: 2px;
                background: linear-gradient(rgb(255, 196, 0), rgb(255, 217, 0));
                position: absolute;
                left: 50%;
                top: 100%;
                transform: translateX(-50%);
                animation: underlining .5s 1.5s forwards;
            }
        }
    }
}
</style>