<template>
    <v-carousel hide-delimiters class="shadow-xl">
      <v-carousel-item
        v-for="(item, index) in specficProject.images"
        :key="index"
        :src="item"
        cover
      ></v-carousel-item>
    </v-carousel>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue';
  import { useProjectsStore } from '../../stores/ProjectsStore';
  import {
    VCarousel,
    VCarouselItem
    } from 'vuetify/lib/components/index.mjs';
  
    const jsonStore = useProjectsStore();
    const specficProject = computed(() => jsonStore.getProjectWanted);


  </script>
  