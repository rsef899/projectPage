<template>
    <v-card class="shadow-xl">
      <v-card-item>
        <v-card-title class="text-wrap">{{ specficProject.Title }}</v-card-title>
        <v-card-subtitle>{{ projectType }}</v-card-subtitle>
        <div class="flex flex-wrap items-center my-2">
          <a
            v-for="(icon, index) in specficProject.Icons"
            :key="index"
            target="_blank"
            rel="noopener noreferrer"
            class="px-2"
          >
            <img :src="icon" :alt="icon.name" :title="icon.name">
          </a>
        </div>
      </v-card-item>
      <v-card-text v-html="specficProject.Description"></v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { useProjectsStore } from '../../stores/ProjectsStore';
  import { computed } from 'vue';
  
  // Import Vuetify components
  import { VCard, VCardItem, VCardTitle, VCardSubtitle, VCardText } from 'vuetify/lib/components/index.mjs';
  
  const jsonStore = useProjectsStore();
  const projectJsonData = computed(() => jsonStore.getJsonData);
  const specficProject = computed(() => jsonStore.getProjectWanted);
  const projectType = computed(() => jsonStore.getTypeWanted);
  </script>
  
  
  