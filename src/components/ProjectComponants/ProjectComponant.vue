<template>
    <div class="flex flex-row w-2/3 gap-4">
        <ProjectInfo  class="lg: w-2/5 rounded-2xl"></ProjectInfo >
        <ProjectImage class="lg:  w-3/5 rounded-2xl"></ProjectImage>
    </div>
</template>

<script setup>
    import ProjectImage from './ProjectImage.vue';
    import ProjectInfo from './ProjectInfo.vue'
</script>