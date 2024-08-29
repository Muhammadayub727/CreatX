<template>
    <div class="w-full h-full">
      <Navbar />
      <Header />
      <ShopOur />
    </div>
  </template>
  
  <script>
  import Navbar from "./Navbar.vue";
  import Header from "./Header.vue";
  import ShopOur from "./ShopOur.vue";
  
  export default {
    components: {
      Navbar,
      Header,
      ShopOur
    }
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  