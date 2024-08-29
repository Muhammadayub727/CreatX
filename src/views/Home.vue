<template>
    <div class="w-full h-full">
      <Navbar />
      <Header />
      <ShopOur />
      <Banner />
    </div>
  </template>
  
  <script>
  import Navbar from "./Navbar.vue";
  import Header from "./Header.vue";
  import ShopOur from "./ShopOur.vue";
  import Banner from "./Banner.vue";
  
  export default {
    components: {
      Navbar,
      Header,
      ShopOur,
      Banner
    }
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  