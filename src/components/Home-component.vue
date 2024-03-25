<template>
    <main>
        <div class="title-container">
            <h1>{{ generalStore.pages[0].catch }}</h1>
        </div>
        <div class="image-container">
            <img src="#" alt="image à venir">
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
    margin: 15px auto;

    .title-container {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            &::before {
                content: "";
                width: 0;
                height: 2px;
                background: linear-gradient(rgb(255, 196, 0), rgb(255, 217, 0));
                position: absolute;
                left: 50%;
                top: 100%;
                transform: translateX(-50%);
                animation: underlining .5s .5s forwards;
            }
        }
    }

    .image-container {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>