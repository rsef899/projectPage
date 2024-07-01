<template>
    <div class="flex flex-row gap-2">
      <v-chip
        class="ma-2 font-bold"
        color="#15803d"
        variant="tonal"
        v-for="(key) in Object.keys(projectTypes)"
        :key="key"
        @click="handleClick(key)"
      >
        {{ key }}
      </v-chip>
    </div>
  </template>
  
  <script setup>
  import { useProjectsStore } from '../../stores/ProjectsStore';
  import { computed } from 'vue';
  import { VChip } from 'vuetify/lib/components/index.mjs';
  
  const jsonStore = useProjectsStore();
  const projectTypes = computed(() => jsonStore.getProjectTypes);
  
  const handleClick = (projectType) => {
    jsonStore.setProjectType(projectType);
    jsonStore.setProject(0);
  };
  </script>
  