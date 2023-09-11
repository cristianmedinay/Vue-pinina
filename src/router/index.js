import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/Courses/Index.vue')
    }
      ,
    {
      path: '/course/:id',
      name: 'course',
      component: () => import('../views/Courses/Detail.vue')
    }
      ,
    {
      path: '/courses/create',
      name: 'courses-create',
      component: () => import('../views/Courses/Create.vue')
    },
    {
      path: '/course/:id/edit',
      name: 'course-edit',
      component: () => import('../views/Courses/Edit.vue')
    },
  ]
})

export default router
