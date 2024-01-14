import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import RoomPage from '@/views/RoomPage.vue';
import CheckRoomAvailability from '@/views/CheckRoomAvailabilityPage.vue';
import ImpressumPage from '@/views/ImpressumPage.vue';
import BookPage from '@/views/BookPage.vue';
import HistoryPage from '@/views/HistoryPage.vue';
import ChoiceRoom_Booking from '@/views/ChoiceRoom_BookingPage.vue';
import ConfirmationPage from '@/views/ConfirmationPage.vue'; // Adjust the path as needed
import UserPage from '@/views/UserPage.vue';
import SignIn from '@/views/SignInPage.vue';
import MyProfile from '@/views/MyProfilePage.vue';


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
    path: '/confirmation/', 
    name: 'confirmation', 
    component: ConfirmationPage, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
