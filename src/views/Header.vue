<template>
    <div :class="['header-container', { 'header-scrolled': isScrolled }]">
      <div class="container flex items-center justify-between px-4">
        <!-- Logo -->
        <div class="flex items-center">
            <p class="text-[#1E212C] font-bold text-lg">CREATE</p>
          <img src="../assets/icon/X.png" alt="Logo" class="h-4">
        </div>
  
        <!-- Navigation Links -->
        <div class="flex space-x-6 mt-2">
          <a href="#" class="text-gray-800 hover:text-black">Women</a>
          <a href="#" class="text-gray-800 hover:text-black">Men</a>
          <a href="#" class="text-gray-800 hover:text-black">Girls</a>
          <a href="#" class="text-gray-800 hover:text-black">Boys</a>
          <a href="#" class="text-red-600 font-bold hover:text-red-700">Sale</a>
        </div>
  
        <!-- Search Bar -->
        <div class="relative mt-2">
          <input type="text" placeholder="Search for products..." class="search-input" />
          <i class="fas fa-search search-icon"></i>
        </div>
  
        <!-- Wishlist and Cart -->
        <div class="flex items-center space-x-4 mt-2">
          <div class="flex items-center space-x-2 text-gray-600">
            <i class="fas fa-heart"></i>
            <span>2</span>
          </div>
          <span>|</span>
          <div class="flex items-center space-x-2 text-gray-600">
            <i class="fas fa-shopping-cart"></i>
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        isScrolled: false,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.isScrolled = window.scrollY > 50;
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  a {
    font-size: 0.875rem;
    text-decoration: none;
  }
  
  .header-container {
    width: 100%;
    height: 60px;
    position: fixed;
    /* top: 0; */
    z-index: 1000;
    background-color: white;
    border-bottom: 1px solid #e5e7eb;
    transition: background-color 0.3s ease-in-out;
  }
  
  .header-scrolled {
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .search-input {
    padding: 10px 40px 10px 20px;
    border: 1px solid #e5e7eb;
    border-radius: 9999px;
    outline: none;
    width: 250px;
    transition: border-color 0.3s ease-in-out;
  }
  
  .search-input::placeholder {
    color: #9ca3af;
  }
  
  .search-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    font-size: 1rem;
  }
  
  .search-input:focus {
    border-color: #a0aec0;
  }
  
  .flex.items-center .fas {
    font-size: 1rem;
    color: #a0aec0;
  }
  
  .flex.items-center span {
    color: #a0aec0;
  }
  </style>
  