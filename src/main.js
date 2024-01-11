import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import BootstrapVue3 from 'bootstrap-vue-3'
import {BootstrapIconsPlugin} from "bootstrap-icons-vue"
import { createPinia } from 'pinia';


const pinia = createPinia()
const app = createApp(App);

app.use(router); 
app.use(BootstrapVue3)
app.use(BootstrapIconsPlugin);
const pinia = createPinia();


app.use(pinia)
app.mount('#app');
app.use(pinia);

