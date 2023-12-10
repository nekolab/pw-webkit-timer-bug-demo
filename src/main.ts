import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Kongponents from '@kong/kongponents'

// Styles
import './normalize.css'
import './reboot.scss'

// Dependencies
import '@kong-ui-public/entities-snis/dist/style.css'
import '@kong/kongponents/dist/style.css'

import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'default', path: '/', component: { template: '<template/>' }, meta: { title: 'Example' } },
    { name: 'other', path: '/other', component: { template: '<template/>' }, meta: { title: 'Other' } },
  ]
})


const app = createApp({
  components: { App },
  template: '<App/>',
})

app.use(Kongponents)
app.use(router)
app.mount('#app')   // comment this out the timer will back to normal

let previous = Date.now()
setInterval(() => {
  const n = Date.now()
  console.log(`[${n}] On page reference one second tick: ${ n - previous }`)
  previous = n
}, 1000)
