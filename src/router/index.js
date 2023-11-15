import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import AboutPage from '@/components/AboutPage.vue';
import RoomPage from '@/components/RoomPage.vue';

import ImpressumPage from '@/components/ImpressumPage.vue';
import BookPage from '@/components/BookPage.vue';
import HistoryPage from '@/components/HistoryPage.vue';
import LoginPage from '@/components/LoginPage.vue';
import ChoiceRoom_Booking from '@/components/ChoiceRoom_Booking.vue';


const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/room', component: RoomPage },

    { path: '/impressum', component: ImpressumPage },
    { path: '/book/:roomId/:roomsName', name: 'book', component: BookPage },
    { path: '/history', component: HistoryPage },

    { path: '/booking', component: ChoiceRoom_Booking },
    { path: '/login', component: LoginPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
