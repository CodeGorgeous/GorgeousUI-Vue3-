import { createApp } from 'vue'
import "./lib/CgUI/style/index.css"
import CgUI from './lib/CgUI'
import App from './App.vue'

createApp(App).use(CgUI).mount('#app')
