import { Quasar } from "quasar";
import { quasar_options } from "./plugins/quasar";
import i18n from './plugins/i18n';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import DpmgUIKit from "dpmg-ui-kit";


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, quasar_options)
app.use(i18n)
// app.use(DpmgUIKit);

app.mount('#app')
