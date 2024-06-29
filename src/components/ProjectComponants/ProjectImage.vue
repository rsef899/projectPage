<template>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item, index) in items"
        :key="index"
        :src="item.url"
        :alt="item.alt"
        cover
      ></v-carousel-item>
    </v-carousel>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import {
    VCarousel,
    VCarouselItem
    } from 'vuetify/lib/components/index.mjs';
  
  const items = ref([
    { url: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', alt: 'Image 1' },
    { url: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', alt: 'Image 2' },
    { url: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', alt: 'Image 3' },
  ]);
  </script>
  