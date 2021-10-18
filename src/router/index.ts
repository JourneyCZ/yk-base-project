import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'

// 路由规则
const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'home',
    component: () => import('@/views/home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(), // 路由模式
  routes // 路由规则
})

export default router
