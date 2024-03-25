<template>
    <form @submit.prevent="submitForm" id="add-form">
        <input v-model="animal.name" type="text" placeholder="Nom">
        <input v-model="animal.creationDate" type="date" placeholder="Date de création" required>
        <input v-model="animal.species" type="text" placeholder="Espèce" required>
        <select v-model="animal.sex" required>
            <option disabled value="">Sexe</option>
            <option>Mâle</option>
            <option>Femelle</option>
        </select>
        <button type="submit">Ajouter</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useAnimalsStore } from '@/stores/animalsStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useAnimalsStore();

const animal = ref({
    name: '',
    creationDate: '',
    species: '',
    sex: '',
    end: '',
});

const submitForm = () => {
    store.addAnimal({
        name: animal.value.name,
        creationDate: animal.value.creationDate,
        species: animal.value.species,
        sex: animal.value.sex,
        end: new Date(new Date(animal.value.creationDate).setMonth(new Date(animal.value.creationDate).getMonth() + 6)).toISOString().split('T')[0],
    });
    router.push({ name: 'calendar' }); // Adjust the route name as needed
    // Additional logic to handle FullCalendar event creation goes here
};
</script>


<style scoped>
#add-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: calc(100vh - 100px);
    margin: 0 auto;

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
    }

    button {
        background-color: transparent;
        border: none;
        padding: 10px;
    }

}
</style>