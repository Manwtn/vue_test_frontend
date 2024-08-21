import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddStudent from '../views/AddStudent.vue'
import EditStudent from '../views/EditStudent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/addstudent',
      name: 'addstudent',
      component: AddStudent
    },
    {
      path: '/editstudent/:id',
      name: 'editstudent',
      component: EditStudent
    }
  ]
})

export default router
