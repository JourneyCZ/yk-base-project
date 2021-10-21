<template>
  <h1>首页</h1>
  <el-button>11</el-button>
</template>

<script setup lang="ts">
import { getSysPermissionList } from '@/api/permission'
import { onMounted } from '@vue/runtime-core'

onMounted(() => {
  getSysPermissionList().then(res => {
    const msg = res.msg
    console.log(res, msg)
  })
})
</script>

<style scoped lang="scss">
h1 {
  color: $red;
}
</style>
