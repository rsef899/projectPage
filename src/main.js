import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './assets/styles.css'
import { createPinia } from 'pinia'
import { useProjectsStore } from './stores/ProjectsStore';

loadFonts()

createApp(App)
  .use(vuetify)
  .use(createPinia())
  .mount('#app')


