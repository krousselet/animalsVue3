<template>
    <form @submit.prevent="submitForm" id="add-form">
        <input v-model="animal.name" type="text" placeholder="Nom" class="delay-0">
        <input v-model="animal.creationDate" type="date" placeholder="Date de création" required class="delay-1">
        <input v-model="animal.species" type="text" placeholder="Espèce" required class="delay-2">
        <select v-model="animal.sex" required class="delay-3">
            <option disabled value="">Sexe</option>
            <option>Mâle</option>
            <option>Femelle</option>
        </select>
        <button type="submit" class="delay-4">Ajouter</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useAnimalsStore } from '@/stores/animalsStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useAnimalsStore();

// BE SURE NOT TO EXCEED THE ARRAY OF COLORS
const getWeekOfMonth = (date) => {
    return Math.ceil(date.getDate() / 7) - 1;
};

const animal = ref({
    name: '',
    creationDate: '',
    species: '',
    sex: '',
    end: '',
});

//BE ADVISED THE COLOR IS IN THE ANIMALS STORE

const submitForm = () => {
    const date = new Date(animal.value.creationDate);
    const month = date.getMonth();
    const weekOfMonth = getWeekOfMonth(date);
    const safeWeekOfMonth = Math.min(weekOfMonth, store.monthColorMapping[month].length - 1);
    const backgroundColor = store.monthColorMapping[month][safeWeekOfMonth];
    store.addAnimal({
        name: animal.value.name,
        creationDate: animal.value.creationDate,
        species: animal.value.species,
        sex: animal.value.sex,
        end: new Date(new Date(animal.value.creationDate).setMonth(new Date(animal.value.creationDate).getMonth() + 6)).toISOString().split('T')[0],
        backgroundColor,
    });
    router.push({ name: 'calendar' });
    // Additional logic to handle FullCalendar event creation goes here
};
</script>


<style lang="scss" scoped>
#add-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: calc(100vh - 100px);
    margin: 0 auto;
    opacity: 0;
    animation: appear .5s .3s forwards;

    @media (min-width: 320px) and (max-width: 991px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    label,
    input,
    select {
        width: 150px;
        border: 0;
        margin-bottom: 15px;
        background-color: transparent;
        border-bottom: 2px solid black;
        opacity: 0;
    }

    button {
        background-color: transparent;
        border: none;
        padding: 10px;
        opacity: 0;
        background-color: rgb(177, 171, 171);
        border-radius: 7px;
        cursor: pointer;
        transition: .3s ease;

        &:hover {
            transition: .3s ease;
            box-shadow: 0 0 15px black;
        }

        &:active {
            transition: .1s ease;
            box-shadow: 0 0 30px black;
            transform: scale(.9);
        }
    }

}

@for $i from 0 through 5 {
    .delay-#{$i} {
        animation: appear 0.5s (0.6s + 0.3s * ($i - 1)) forwards;
    }
}
</style>