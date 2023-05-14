<template>
  <v-app>
    <TopBar />
    <!-- <TestCanvas /> -->
    <WorkGrid />
  </v-app>
</template>

<script setup lang="ts">
import TopBar from './components/TopBar.vue'
// import TestCanvas from './vizus/TestCanvas.vue';
import WorkGrid from './components/WorkGrid.vue'
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
