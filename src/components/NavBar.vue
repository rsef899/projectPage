<template>
    <v-card class="mx-auto" color="grey-lighten-3" max-width="448">
      <v-layout>
        <v-app-bar
          color="white"
          class="h-20 flex justify-center"
        >
        <v-btn
            class="font-googlePoppins font-bold leading-loose text-zinc-800"
            variant="text"
            :ripple="false"
            @click="scrollToSection('Home')"
        >Home</v-btn>
        <v-btn
            class="font-googlePoppins font-bold leading-loose text-zinc-800"
            variant="text"
            :ripple="false"
            @click="scrollToSection('Skills')"
        >Skills</v-btn>
        <v-btn
            class="no-hover font-googlePoppins font-bold leading-loose text-zinc-800"
            
            :ripple="false"
            @click="scrollToSection('Skills')"
        >Projects</v-btn>
    
        <template v-slot:prepend>
        <v-btn
            class="font-googlePoppins font-bold leading-loose text-zinc-800 lg:text-xl"
            variant="text"
            :ripple="false"
            @click="scrollToSection('Home')"
        >Robert</v-btn>
        </template>
        
        </v-app-bar>
  
      </v-layout>
    </v-card>
  </template>
  

<script setup>
import {
  VAppBar,
  VBtn,
  VCard,
  VLayout,
} from 'vuetify/lib/components/index.mjs';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

</script>

<style scoped>
.no-hover {
  transition: none !important;
}
.no-hover::before {
  background-color: rgb(255, 255, 255) !important;
  opacity: 1 !important;
}

.no-hover:hover {
  background-color: rgb(255, 255, 255) !important;
  opacity: 1 !important;
}
</style>