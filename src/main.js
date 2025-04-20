import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import axios from 'axios'
import './mock/Book'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.provide('axios', axios)

app.use(router)

app.mount('#app')

app.use(vuetify)
