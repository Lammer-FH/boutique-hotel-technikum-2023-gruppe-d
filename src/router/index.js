import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import AboutPage from '@/components/AboutPage.vue';
import RoomPage from '@/components/RoomPage.vue';
import CheckRoomAvailability from '@/components/CheckRoomAvailability.vue';
import ImpressumPage from '@/components/ImpressumPage.vue';
import BookPage from '@/components/BookPage.vue';
import HistoryPage from '@/components/HistoryPage.vue';
import ChoiceRoom_Booking from '@/components/ChoiceRoom_Booking.vue';
import ConfirmationPage from '@/components/ConfirmationPage.vue'; // Adjust the path as needed
import UserPage from '@/components/UserPage.vue';
import SignIn from '@/components/SignIn.vue';
import MyProfile from '@/components/MyProfile.vue';


const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/room', component: RoomPage },
  { path: '/impressum', component: ImpressumPage },
  { path: '/book/:roomId/:roomsName/:fromDate?/:toDate?', name: 'book', component: BookPage },
  { path: '/availability/:roomId/:roomsName', name: 'Availability',
   component: CheckRoomAvailability },
  { path: '/history', component: HistoryPage },
  { path: '/booking', component: ChoiceRoom_Booking },
  { path: '/register', component: UserPage },
  { path: '/signin', component: SignIn },
  { path: '/myprofile', component: MyProfile },


  {
    path: '/confirmation/', // Define the path for ConfirmationPage
    name: 'confirmation', // Give it a unique name
    component: ConfirmationPage, // Specify the component to render
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
