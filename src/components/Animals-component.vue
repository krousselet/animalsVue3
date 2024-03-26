<!-- <template>
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
</template> -->

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
            <transition-group name="fade" tag="tbody">
                <tr v-for="(animal, index) in animals" :key="animal.id">
                    <td>{{ animal.name }}</td>
                    <td>{{ animal.creationDate }}</td>
                    <td>{{ animal.species }}</td>
                    <td>{{ animal.end }}</td>
                    <td>
                        <button @click.prevent="animalsStore.deleteAnimal(index)">Delete</button>
                    </td>
                </tr>
            </transition-group>
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
    height: calc(100vh - 100px);
    margin: 0 auto;

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
                width: 100px;
                height: 25px;
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
                width: 100px;
                height: 25px;
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}
</style>