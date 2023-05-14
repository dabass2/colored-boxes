<template>
  <v-container class="py-0">
    <v-app-bar border elevation="0" :color=theme.current.value.colors.background>
      <template v-slot:append>
        <v-btn :icon=btnIcon @click="toggleTheme"></v-btn>
      </template>
    </v-app-bar>
  </v-container>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';
import { ref } from 'vue';

const theme = useTheme()
const btnIcon = ref(theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-brightness-2')

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  btnIcon.value = theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-brightness-2'
}
</script>