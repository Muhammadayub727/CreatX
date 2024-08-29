import { createApp } from 'vue'
import router from './router'
import store from './store'
import './style.css'
import App from './App.vue'
import 'swiper/swiper-bundle.css';


createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
