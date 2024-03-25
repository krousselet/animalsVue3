<template>
    <div ref="calendarEl"></div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import frLocale from '@fullcalendar/core/locales/fr';
import { onBeforeUnmount } from 'vue';
import '@fullcalendar/core/index.js';
import { useAnimalsStore } from '@/stores/animalsStore';
const animalsStore = useAnimalsStore();

let calendar;

onMounted(() => {
    initCalendar();
});

onBeforeUnmount(() => {
    if (calendar) {
        calendar.destroy();
    }
});

const calendarEl = ref(null);

onMounted(() => {
    initCalendar();
});

function initCalendar() {
    if (!calendarEl.value) return;

    let calendarEvents = animalsStore.animals.map(animal => ({
        title: animal.name,
        start: animal.creationDate,
        end: new Date(new Date(animal.creationDate).setMonth(new Date(animal.creationDate).getMonth() + 6)).toISOString().split('T')[0],
    }));


    let calendar = new Calendar(calendarEl.value, {
        plugins: [dayGridPlugin, listPlugin],
        initialView: 'dayGridMonth',
        locale: frLocale,
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,listWeek'
        },
        events: calendarEvents,
    });

    calendar.render();
}
</script>