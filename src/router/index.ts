import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

// 路由规则
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(), // 路由模式
  routes // 路由规则
})

export default router
