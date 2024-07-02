<template>
  <div class="flex flex-col items-center">
    <div class="w-screen flex flex-col items-center">
      <div class="w-3/5 flex flex-col items-center">
        <div class="flex items-center justify-start w-full">
          <h2 class="text-green-700 font-googlePoppins font-bold text-lg">My Projects</h2>
        </div>
        <ProjectComponant></ProjectComponant>
      </div>
    </div>
  </div>
</template>


<script setup>
    import ProjectComponant from './ProjectComponants/ProjectComponant.vue'
</script>