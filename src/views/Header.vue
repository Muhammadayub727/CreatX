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
        <a href="#" @mouseover="showModal = 'women'" @mouseleave="showModal = ''" class="text-gray-800 hover:text-black">Women</a>
        <a href="#" @mouseover="showModal = 'men'" @mouseleave="showModal = ''" class="text-gray-800 hover:text-black">Men</a>
        <a href="#" @mouseover="showModal = 'girls'" @mouseleave="showModal = ''" class="text-gray-800 hover:text-black">Girls</a>
        <a href="#" @mouseover="showModal = 'boys'" @mouseleave="showModal = ''" class="text-gray-800 hover:text-black">Boys</a>
        <a href="#" @mouseover="showModal = 'sale'" @mouseleave="showModal = ''" class="text-red-600 font-bold hover:text-red-700">Sale</a>
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
          <span class="bg-[#03CEA4]  w-4 h-4 flex items-center justify-center" style="color: white; font-size: 10px;">4</span>
        </div>
      </div>
    </div>

    <!-- Full-width Modal -->
    <div v-if="showModal" class="full-width-modal ">
      <div class="modal-content">
        <div v-if="showModal === 'women'" class="modal-section">
          <p>Women's collection</p>
          <div class="flex space-x-4 text-sm text-gray-600 mt-4 mb-4 font-bold">
            <div class="w-[250px] h-[400px]">
              <p class="ml-10 mt-4">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
            </div>
            <div class="w-[250px] h-[400px]">
              <p class="ml-10 mt-4">CLOTHES</p>
              <p class="ml-14 mt-2">SHOES</p>
              <p class="ml-14 mt-2">ACCESORIES</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
            </div>
            <div class="w-[250px] h-[400px]">
              <p class="ml-10 mt-4">SHOES</p>
              <p class="ml-14 mt-2">ACCESORIES</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
            </div>
            <div class="w-[250px] h-[400px]">
              <p class="ml-10 mt-4">ACCESORIES</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
            </div>
          </div>
        </div>
        <div v-if="showModal === 'men'" class="modal-section">
          <p>Men's collection</p>
          <div class="flex space-x-4 text-sm text-gray-600 mt-4 mb-4 font-bold">
            <div class="w-[250px] h-[400px] ">
              <p class="ml-10 mt-4">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
            </div>
            <div class="w-[250px] h-[400px]">
              <p class="ml-10 mt-4">CLOTHES</p>
              <p class="ml-14 mt-2">SHOES</p>
              <p class="ml-14 mt-2">ACCESORIES</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
            </div>
            <div class="w-[250px] h-[400px] ">
              <p class="ml-10 mt-4">SHOES</p>
              <p class="ml-14 mt-2">ACCESORIES</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
            </div>
            <div class="w-[250px] h-[400px] ">
              <p class="ml-10 mt-4">ACCESORIES</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
            </div>
          </div>
        </div>
        <div v-if="showModal === 'girls'" class="modal-section">
          <p>Girl's collection</p>
          <div class="flex space-x-4 text-sm text-gray-600 mt-4 mb-4 font-bold">
            <div class="w-[250px] h-[400px] ">
              <p class="ml-10 mt-4">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
            </div>
            <div class="w-[250px] h-[400px]">
              <p class="ml-10 mt-4">CLOTHES</p>
              <p class="ml-14 mt-2">SHOES</p>
              <p class="ml-14 mt-2">ACCESORIES</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
            </div>
            <div class="w-[250px] h-[400px] ">
              <p class="ml-10 mt-4">SHOES</p>
              <p class="ml-14 mt-2">ACCESORIES</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
            </div>
            <div class="w-[250px] h-[400px] ">
              <p class="ml-10 mt-4">ACCESORIES</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
            </div>
          </div>
        </div>
        <div v-if="showModal === 'boys'" class="modal-section">
          <p>Boy's collection</p>
          <div class="flex space-x-4 text-sm text-gray-600 mt-4 mb-4 font-bold">
            <div class="w-[250px] h-[400px] ">
              <p class="ml-10 mt-4">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
            </div>
            <div class="w-[250px] h-[400px]">
              <p class="ml-10 mt-4">CLOTHES</p>
              <p class="ml-14 mt-2">SHOES</p>
              <p class="ml-14 mt-2">ACCESORIES</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
            </div>
            <div class="w-[250px] h-[400px] ">
              <p class="ml-10 mt-4">SHOES</p>
              <p class="ml-14 mt-2">ACCESORIES</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
            </div>
            <div class="w-[250px] h-[400px] ">
              <p class="ml-10 mt-4">ACCESORIES</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
            </div>
          </div>
        </div>
        <div v-if="showModal === 'sale'" class="modal-section">
          <p>Sale</p>
          <div class="flex space-x-4 text-sm text-gray-600 mt-4 mb-4 font-bold">
            <div class="w-[250px] h-[400px] ">
              <p class="ml-10 mt-4">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
            </div>
            <div class="w-[250px] h-[400px]">
              <p class="ml-10 mt-4">CLOTHES</p>
              <p class="ml-14 mt-2">SHOES</p>
              <p class="ml-14 mt-2">ACCESORIES</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
            </div>
            <div class="w-[250px] h-[400px] ">
              <p class="ml-10 mt-4">SHOES</p>
              <p class="ml-14 mt-2">ACCESORIES</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
            </div>
            <div class="w-[250px] h-[400px] ">
              <p class="ml-10 mt-4">ACCESORIES</p>
              <p class="ml-14 mt-2">Sale up to 70%</p>
              <p class="ml-14 mt-2">New Collection</p>
              <p class="ml-14 mt-2">Best Sellers</p>
              <p class="ml-14 mt-2">Shop All</p>
            </div>
          </div>
        </div>
        <div class="bottom-content">
          <div class="vertical-line"></div>
          <div class="mr-[150px]">
            <img src="../assets/img/modal-img.png" alt="Sale" class="sale-image">
            <p class="sale-text">Back to school. Sale up to 50%</p>
            <button class="see-offers-btn"> See offers<i class="fas fa-arrow-right ml-2 mt-1"></i></button>
          </div>
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
      showModal: '',
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
  /* position: fixed; */
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
  border-radius: 4px;
  outline: none;
  width: 350px;
  transition: border-color 0.3s ease-in-out;
}

.search-input::placeholder {
  color: #9ca3af;
}

.search-icon {
  position: absolute;
  right: 22px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  font-size: 1rem;
}

.flex.items-center .fas {
  font-size: 1rem;
  color: #a0aec0;
}

.flex.items-center span {
  color: #a0aec0;
}

.full-width-modal {
  position: absolute;
  top: 110px;
  left: 0;
  width: 100%;
  background-color: white;
  border-top: 1px solid #e5e7eb;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 999;

}

.modal-content {
  display: flex;
  justify-content: space-between;
}

.modal-section {
  flex: 1;
  padding: 0 20px;
  
}

.bottom-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.vertical-line {
  width: 1px;
  height: 400px;
  background-color: #e5e7eb;
  margin-right: 30px;
}

.sale-image {
  width: 250px;
  height: 300px;
}

.sale-text {
  font-size: 1rem;
  font-weight: bold;
}

.see-offers-btn {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  color: #17696A;
  border: 2px solid #17696A;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
}

.see-offers-btn i {
  margin-right: 8px;
}
</style>
