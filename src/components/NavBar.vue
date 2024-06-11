<template>
    <v-card class="mx-auto" color="grey-lighten-3" max-width="448">
      <v-layout>
        <v-app-bar
          color="white"
          class="h-20 flex justify-center"
        >
        <v-btn
            variant="plain"
            :ripple="false"
        >Home</v-btn>
        <v-btn
            variant="plain"
            :ripple="false"
        >Skills</v-btn>
        <v-btn
            variant="plain"
            :ripple="false"
        >Projects</v-btn>
    
        <template v-slot:prepend>
        <v-btn
            variant="plain"
            :ripple="false"
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

</script>