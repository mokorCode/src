<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup name='App'>
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import router from './router';
</script>

<style scoped></style>