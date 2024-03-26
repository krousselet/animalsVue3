import { defineStore } from 'pinia';

export const useAnimalsStore = defineStore('animals', {
    state: () => ({
        animals: JSON.parse(localStorage.getItem('animals')) || [],
        monthColorMapping: {
            0: ['#FFB6C1', '#FFC0CB', '#DC143C', '#FF69B4'], // January
            1: ['#ADD8E6', '#87CEEB', '#87CEFA', '#00BFFF'], // February
            2: ['#98FB98', '#00FF7F', '#00FA9A', '#90EE90'], // March
            3: ['#FFDAB9', '#E9967A', '#FA8072', '#FFA07A'], // April
            4: ['#F0E68C', '#FFFF00', '#FFD700', '#FFA500'], // May
            5: ['#20B2AA', '#48D1CC', '#40E0D0', '#00CED1'], // June
            6: ['#FFA07A', '#FA8072', '#E9967A', '#FF7F50'], // July
            7: ['#B0E0E6', '#87CEFA', '#87CEEB', '#ADD8E6'], // August
            8: ['#98FB98', '#00FF7F', '#00FA9A', '#90EE90'], // September
            9: ['#FFDAB9', '#E9967A', '#FA8072', '#FFA07A'], // October
            10: ['#F0E68C', '#FFFF00', '#FFD700', '#FFA500'], // November
            11: ['#20B2AA', '#48D1CC', '#40E0D0', '#00CED1']  // December
        },
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
