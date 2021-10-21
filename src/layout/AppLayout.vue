<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <AppMenu />
      </el-aside>
      <el-main>
        <!-- 子路由出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AppMenu from '@/layout/AppMenu.vue'
</script>

<style scoped lang="scss">
.el-container {
  height: 100vh;
}
.el-aside {
  background-color: #545c64;
}
</style>
