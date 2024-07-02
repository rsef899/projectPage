<template>
  <v-carousel v-model="activeIndex" hide-delimiters class="shadow-xl">
    <template v-for="(item, index) in specficProject.images" :key="index">
      <v-carousel-item>
        <template v-if="isVideo(item)">
          <video ref="videoRefs" controls style="width: 100%; height: 100%; object-fit: cover;">
            <source :src="item" type="video/mp4" />
          </video>
        </template>
        <template v-else>
          <img :src="item" style="width: 100%; height: 100%; object-fit: cover;" />
        </template>
      </v-carousel-item>
    </template>
  </v-carousel>
</template>

<script setup>
import { ref, watch, computed, nextTick } from 'vue';
import { useProjectsStore } from '../../stores/ProjectsStore';
import { VCarousel, VCarouselItem } from 'vuetify/lib/components/index.mjs';

const jsonStore = useProjectsStore();
const specficProject = computed(() => jsonStore.getProjectWanted);
const activeIndex = ref(0); // Track the active carousel item index
const videoRefs = ref([]); // Store video refs

const isVideo = (file) => {
  const videoExtensions = ['.mp4', '.webm', '.ogg'];
  return videoExtensions.some((ext) => file.endsWith(ext));
};

// Watch activeIndex and pause all videos when it changes
watch(activeIndex, async () => {
  await nextTick(); // Ensure the DOM is updated before accessing video elements
  videoRefs.value.forEach((video) => {
      video.pause(); 
  });
});
</script>