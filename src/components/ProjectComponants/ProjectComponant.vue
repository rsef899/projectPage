<template>
    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center w-screen">
        <div class="lg:w-3/5 flex justify-start">
          <ProjectTypeSelector></ProjectTypeSelector>
        </div>
        <div class="flex flex-row gap-4 w-full lg:w-3/5">
          <ProjectInfo class="rounded-2xl lg:w-2/5 "></ProjectInfo>
          <ProjectImage class="rounded-2xl lg:w-3/5"></ProjectImage>
        </div>
        <div class="lg:w-3/5 flex justify-start">
          <ProjectSelector></ProjectSelector>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import ProjectImage from './ProjectImage.vue';
  import ProjectInfo from './ProjectInfo.vue';
  import ProjectSelector from './ProjectSelector.vue';
  import ProjectTypeSelector from './ProjectTypeSelector.vue'
  </script>
  