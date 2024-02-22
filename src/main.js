import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

const app = createApp(App)

app.use(router)

app.mount('#app')
