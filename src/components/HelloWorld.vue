<template>
  
  <div class="h-screen w-full flex justify-center items-center bg-slate-50">
    <Enterance/>
  </div>
  <div class="w-full h-500px flex justify-center items-center py-20">
      <Skills/>
  </div>  
  <div class="w-full flex justify-center items-center py-20  bg-slate-50">
    <Projects/>
  </div>
  <div class="w-full flex justify-center items-center bg-zinc-800">
    <p class="font-googlePoppins font-medium leading-loose text-slate-50">Robert Sefaj</p>
  </div>
</template>

<script setup>
import Enterance from './Enterance.vue'
import Skills from './Skills.vue'
import Projects from './Projects.vue'
</script>

