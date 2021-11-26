import { createRouter, createWebHashHistory } from 'vue-router'
import Quizz from "../views/Quizz.vue";
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/quizz/:id', name: 'Quizz', component: Quizz }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
