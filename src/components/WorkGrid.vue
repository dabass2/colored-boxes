<template>
  <v-container class="fill-height">
    <v-responsive v-if="!showWork">
      <v-row>
        <v-col v-for="(proj, i) in projects" :key="i" cols="12" sm="6" md="4">
          <v-card>
            <v-img :src="proj.imageUrl" cover height="300" />
            <v-card-title>{{ proj.name }}</v-card-title>
            <v-card-subtitle v-if="proj.subtitle">{{ proj.subtitle }}</v-card-subtitle>
            <v-card-text>
              {{ proj.projText }}
            </v-card-text>
            <v-card-actions>
              <v-btn @click="showWork = true">Show</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>

    <v-responsive v-if="showWork" width="80vw" height="80vh">
      <TestCanvas />
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TestCanvas from '../vizus/TestCanvas.vue';

const showWork = ref<boolean>(false)

interface Project {
  name: string,
  subtitle?: string,
  imageUrl: string,
  projText: string
}

const projects = ref<Project[]>(
  [
    {
      name: 'test',
      subtitle: 'How\'s it hangin\'',
      imageUrl: "https://leinad.dev/images/edward/edward_secretimage.jpg",
      projText: "This is the text for the card. Text goes here. I like having text here."
    }
  ]
)
</script>
