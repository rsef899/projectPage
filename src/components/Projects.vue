<template>
    <div class="flex flex-col items-center ">
    <h2 class="text-green-700 font-googlePoppins font-bold text-lg lg:pt-5">My Projects</h2>
    
    <div class="flex flex-row w-2/3">
        <ProjectComponant class="lg: w-2/5"></ProjectComponant>
        <ProjectImage class="lg: pl-5 w-3/5"></ProjectImage>
    </div>
    
</div>



</template>

<script setup>
import ProjectComponant from './ProjectComponants/ProjectComponant.vue'
import ProjectImage from './ProjectComponants/ProjectImage.vue';

</script>