import { defineStore } from 'pinia';

export const useAnimalsStore = defineStore('animals', {
    state: () => ({
        animals: JSON.parse(localStorage.getItem('animals')) || [],
    }),
    getters: {
        calendarEvents: (state) => state.animals.map(animal => ({
            title: animal.name,
            start: animal.creationDate,
            end: new Date(new Date(animal.creationDate).setMonth(new Date(animal.creationDate).getMonth() + 6)).toISOString().split('T')[0],
        })),
    },
    actions: {
        loadAnimals() {
            this.animals = JSON.parse(localStorage.getItem('animals')) || [];
        },
        addAnimal(animal) {
            this.animals.push(animal);
            localStorage.setItem('animals', JSON.stringify(this.animals));
            this.loadAnimals(); // Ensures the local component state is updated
        },
        deleteAnimal(animalIndex) {
            this.animals.splice(animalIndex, 1);
            localStorage.setItem('animals', JSON.stringify(this.animals));
        },
    },
});
