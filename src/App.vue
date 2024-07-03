<template>
  <v-app>
    <v-main>
        <NavBar class="z-10"/>
        <HelloWorld class=""/>
        
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    NavBar,
  },

  data: () => ({
    //
  }),
}
</script>
