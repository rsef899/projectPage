<template>
  <div class="hello-sun">
    <NavBar />
    <h1>Hello</h1>
    <img src="https://t4.ftcdn.net/jpg/01/25/86/35/360_F_125863509_jaISqQt7MOfhOT3UxRTHZoEbMmmFYIr8.jpg" alt="Sun" />
  </div>
</template>

<script setup>
import NavBar from './NavBar.vue';
// Here we can import external data or components if needed.
// The setup script tag is where we can use the Composition API features.
</script>

<style scoped>
.hello-sun {
  text-align: center;
  margin-top: 20px;
}

h1 {
  color: #f9a825; /* A sunny color */
}

img {
  width: 100px; /* Adjust the size as needed */
  height: auto;
}
</style>
