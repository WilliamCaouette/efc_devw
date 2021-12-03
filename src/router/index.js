import { createRouter, createWebHashHistory } from 'vue-router'
import Quizz from "../views/Quizz.vue";
import Home from '../views/Home.vue'
import AddQuizzForm from '../views/AddQuizzForm.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/quizz/:id', name: 'Quizz', component: Quizz },
  { path: '/addquizzform', name: 'AddQuizzForm', component: AddQuizzForm }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
