<template>
  <v-app>
    <v-main class="flex flex-col">
        <NavBar class="z-10"/>
        <HelloWorld class="h-screen bg-slate-50"/>
        <div style="height: 1000px; background-color: aqua;">

        </div>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import NavBar from './components/NavBar.vue';
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
    NavBar
  },

  data: () => ({
    //
  }),
}
</script>
