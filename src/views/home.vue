<template>
  <h1>首页</h1>
</template>

<script setup lang="ts">
import { getSysPermissionList } from '@/api/permission'
import { onMounted } from '@vue/runtime-core'

onMounted(() => {
  getSysPermissionList().then(res => {
    console.log(res)
  })
})
</script>

<style scoped lang="scss">
h1 {
  color: $red;
}
</style>
