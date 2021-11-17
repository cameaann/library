import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/styles/style.scss'
import './assets/css/fonts.css'

createApp(App).use(router).mount('#app')
