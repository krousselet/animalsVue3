<template>
    <footer>
        <div id="test">
            <p>{{ generalStore.dev }}</p>
        </div>
    </footer>
</template>

<script setup>
import { useGeneralStore } from '@/stores/generalStore';
const generalStore = useGeneralStore();
</script>

<style scoped>
footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: sticky;
    left: 50%;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: rgba(128, 128, 128, 0.801);
    border-radius: 7px 7px 0 0;
    box-shadow: 0 0 15px black;
    z-index: 50;


    p {
        font-size: 18px;
    }
}
</style>