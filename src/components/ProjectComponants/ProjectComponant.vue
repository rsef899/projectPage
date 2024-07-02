<template>
  <div class="flex flex-col items-center">
        <ProjectTypeSelector class="p-2"></ProjectTypeSelector>
      <div class="flex flex-row gap-7">
        <ProjectInfo class="rounded-2xl w-2/5 lg:w-[385px] lg:h-[500px]"></ProjectInfo>
        <ProjectImage class="rounded-2xl w-3/5 lg:w-[600px] lg:h-[500px]"></ProjectImage>
      </div>
        <ProjectSelector class="p-2"></ProjectSelector> 
  </div>
</template>

<script setup>
import ProjectImage from './ProjectImage.vue';
import ProjectInfo from './ProjectInfo.vue';
import ProjectSelector from './ProjectSelector.vue';
import ProjectTypeSelector from './ProjectTypeSelector.vue';
</script>
