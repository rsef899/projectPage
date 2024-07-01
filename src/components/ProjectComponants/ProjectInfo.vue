<template>
    <v-card>
      <v-card-item>
        <v-card-title class="text-wrap">{{ specficProject.Title }}</v-card-title>
        <v-card-subtitle>{{ projectType }}</v-card-subtitle>
        <div class="flex flex-wrap items-center my-2">
          <a target="_blank" rel="noopener noreferrer" class="px-2">
            <img src="https://skillicons.dev/icons?i=tensorflow" alt="Tensorflow" title="TensorFlow">
          </a>
          <a target="_blank" rel="noopener noreferrer" class="px-2">
            <img src="https://skillicons.dev/icons?i=pytorch" alt="Pytorch" title="Pytorch">
          </a>
          <a target="_blank" rel="noopener noreferrer" class="px-2">
            <img src="../../assets/icons/jupyter.png" alt="Jupyter" title="Jupyter">
          </a>
        </div>
      </v-card-item>
      <v-card-text v-html="specficProject.Description"></v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { useProjectsStore } from '../../stores/ProjectsStore';
  import { computed, onMounted } from 'vue';
  
  // Import Vuetify components
  import { VCard, VCardItem, VCardTitle, VCardSubtitle, VCardText } from 'vuetify/lib/components/index.mjs';
  
  const jsonStore = useProjectsStore();
  const projectJsonData = computed(() => jsonStore.getJsonData);
  const specficProject = computed(() => jsonStore.getProjectWanted);
  const projectType = computed(() => jsonStore.getTypeWanted);

  
  
  onMounted(() => {
    // Any required setup
  });
  </script>
  
  
  