<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Naissance</th>
                    <th>Espèce</th>
                    <th>Maturation</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(animal, index) in animals" :key="animal.id">
                    <td>{{ animal.name }}</td>
                    <td>{{ animal.creationDate }}</td>
                    <td>{{ animal.species }}</td>
                    <td>{{ animal.end }}</td>
                    <td>
                        <button @click.prevent="animalsStore.deleteAnimal(index)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { useAnimalsStore } from '@/stores/animalsStore';

const animalsStore = useAnimalsStore();
const animals = animalsStore.animals;

</script>

<style lang="scss" scoped>
table {
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 320px;

    thead {


        tr {

            display: flex;
            align-items: center;
            justify-content: center;

            th {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 10px;
                width: 75px;
            }
        }
    }

    tbody {

        tr {

            display: flex;
            align-items: center;
            justify-content: center;

            td {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 10px;
                width: 75px;
            }
        }
    }
}
</style>