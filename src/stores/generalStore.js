import { defineStore } from "pinia";
export const useGeneralStore = defineStore('generalStore', {
    state: () => ({
        // SOLO VARIABLES
        hamburgerMobileMenuIsActive: 0,
        activePage: 0,
        logoUrl: require('@/assets/images/mobile/logo.svg'),
        test: 'test',
        //ARRAYS
        hamburgerClasses: ['upper', 'middle', 'lower'],
        //OBJECTS
        pages: [
            //HOME PAGE
            {
                label: 'home',
                path: '/',
                catch: 'Manger bien, manger serein'

            },
            // ADD PAGE
            {
                label: 'ajouter',
                path: '/add',
            },
            //ANIMALS PAGE
            {
                label: 'animaux',
                path: '/animals',
            },
            //CALENDAR
            {
                label: 'Calendrier',
                path: '/calendar',
            },
        ],

        // FOOTER
        dev: 'Réalisé par Kevin Rousselet'
    }),
    actions: {
        setMobileMenuActive() {
            if (this.hamburgerMobileMenuIsActive === 0) {
                this.hamburgerMobileMenuIsActive = 1
            } else this.hamburgerMobileMenuIsActive = 0
        }
    }
})