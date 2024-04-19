<template>
  <v-app>
    <v-main>
        <NavBar class="z-10"/>
        <HelloWorld class=""/>
        
        <!-- <TesterComponant/> -->
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import NavBar from './components/NavBar.vue';
import TesterComponant from './components/TesterComponant.vue';
import {
  VContainer,
  VRow,
  VCol,
  VSpacer

} from 'vuetify/lib/components/index.mjs';

export default {
  name: 'App',

  components: {
    HelloWorld,
    NavBar,
    TesterComponant

  },

  data: () => ({
    //
  }),
}
</script>
