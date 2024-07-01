<template>
  <v-carousel hide-delimiters class="shadow-xl">
    <template v-for="(item, index) in specficProject.images" :key="index">
      <v-window-item class="v-carousel-item" v-if="isVideo(item)">
        <video controls style="width: 100%; height: 100%; object-fit: cover;">
          <source :src="item" type="video/mp4" />
        </video>
      </v-window-item>
      <v-carousel-item v-else :src="item" cover></v-carousel-item>
    </template>
  </v-carousel>
</template>

<script setup>
import { computed } from 'vue';
import { useProjectsStore } from '../../stores/ProjectsStore';
import {
  VCarousel,
  VCarouselItem,
  VWindowItem
} from 'vuetify/lib/components/index.mjs';

const jsonStore = useProjectsStore();
const specficProject = computed(() => jsonStore.getProjectWanted);

const isVideo = (file) => {
  const videoExtensions = ['.mp4', '.webm', '.ogg'];
  return videoExtensions.some((ext) => file.endsWith(ext));
};
</script>

<style>
/* Add any necessary styles here */
</style>
