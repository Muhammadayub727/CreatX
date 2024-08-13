<template>
  <div
    class="w-full h-[40px] border-b bg-[#1E212C] flex items-center justify-center"
  >
    <div class="container flex items-center justify-between px-4">
      <div>
        <p class="text-white text-sm">Available 24/7 at (405) 555-0128</p>
      </div>
      <div>
        <ul class="flex space-x-4 text-white text-sm">
          <li><a href="#">Delivery & returns</a></li>
          <li><a href="#">Track order</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </div>
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-2">
          <img :src="selectedFlag" alt="flag" class="w-6 h-4" />
          <select
            v-model="selectedCountry"
            @change="updateSelection"
            class="text-white bg-[#1E212C] text-sm border-none"
          >
            <option
              v-for="country in countries"
              :value="country.code"
              :key="country.code"
            >
              {{ country.language }} / {{ country.currency }} {{ country.code }}
            </option>
          </select>
        </div>
        <div class="flex items-center space-x-2">
          <button
            @click="goToLogin"
            class="text-white text-sm flex items-center"
          >
            <i class="fas fa-user" style="margin-right: 5px"></i> Login
          </button>
          <span class="text-white">/</span>
          <button
            @click="goToRegister"
            class="text-white text-sm flex items-center"
          >
          Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flagUSA from "../assets/img/flag-usa.png";
import flagUZB from "../assets/img/flag-uzb.png";
import flagRUS from "../assets/img/flag-rus.png";
import flagTUR from "../assets/img/flag-tur.png";

export default {
  data() {
    return {
      selectedCountry: "US",
      countries: [
        {
          code: "US",
          name: "United States",
          flag: flagUSA,
          currency: "$",
          language: "Eng",
        },
        {
          code: "UZ",
          name: "Uzbekistan",
          flag: flagUZB,
          currency: "UZS",
          language: "Uzb",
        },
        {
          code: "RU",
          name: "Russia",
          flag: flagRUS,
          currency: "₽",
          language: "Рус",
        },
        {
          code: "TR",
          name: "Turkey",
          flag: flagTUR,
          currency: "₺",
          language: "Türk",
        },
      ],
    };
  },
  computed: {
    selectedFlag() {
      return this.countries.find(
        (country) => country.code === this.selectedCountry
      ).flag;
    },
  },
  methods: {
    updateSelection() {
    },
    goToLogin() {
      window.location.href = "/login";
    },
    goToRegister() {
      window.location.href = "/register";
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

select {
  background-color: #1e212c;
  color: white;
  padding: 5px;
  cursor: pointer;
  appearance: none;
  border: none;
  font-size: 0.875rem;
}

select option {
  color: black;
}

select::-ms-expand {
  display: none;
}

select:focus {
  outline: none;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}

button i {
  margin-right: 4px;
}

button:focus {
  outline: none;
}
</style>
