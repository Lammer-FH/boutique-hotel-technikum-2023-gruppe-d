import { createApp, ref } from 'vue';
import App from './App.vue';

const app = createApp(App);

const currentPage = ref('Home');

app.config.globalProperties.$currentPage = currentPage;
app.mount('#app');
