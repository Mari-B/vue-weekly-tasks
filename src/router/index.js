import { createRouter, createWebHashHistory } from 'vue-router'
import WeeklyPlanner from '@/views/WeeklyPlanner.vue'
import WikiPage from '@/views/WikiPage.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: WeeklyPlanner
  // },
  {
    path: '/weekly-planner',
    name: 'weekly-planner',
    component: WeeklyPlanner
  },
  {
    path: '/wiki',
    name: 'wiki',
    component: WikiPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
