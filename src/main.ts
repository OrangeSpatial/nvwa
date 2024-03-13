import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import antdv from './antdv' 
import router from './router'

const app = createApp(App)
antdv(app);
app.use(router);
app.mount('#app')
