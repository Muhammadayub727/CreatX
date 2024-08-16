<template>
  <div>
    <!-- Top Header -->
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
              class="text-white text-sm border-none"
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
              @click="openModal('login')"
              class="text-white text-sm flex items-center"
            >
              <i class="fas fa-user" style="margin-right: 5px"></i> Login
            </button>
            <span class="text-white">/</span>
            <button
              @click="openModal('register')"
              class="text-white text-sm flex items-center"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Login Modal -->
    <div v-if="showModal === 'login'" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button @click="closeModal" class="modal-close-btn">
          <i class="fas fa-times"></i>
        </button>
        <h2 class="modal-title mt-6">Sign in</h2>
        <p class="modal-subtitle">Sign in to your account using email and password provided during registration.</p>
        <form @submit.prevent="submitLogin">
          <div class="input-group align-left">
            <label for="login-email">Email</label>
            <input type="email" id="login-email" v-model="loginEmail" placeholder="Your working email" required />
          </div>
          
          <div class="input-group align-left">
            <label for="login-password">Password</label>
            <input type="password" id="login-password" v-model="loginPassword" placeholder="••••••••••" required />
          </div>

          <div class="checkbox-wrapper">
            <input type="checkbox" id="login-remember" v-model="loginRemember" />
            <label for="login-remember">Keep me signed in</label>
          </div>

          <a href="#" class="forgot-password">Forgot password?</a>
          <button type="submit" class="modal-btn">Sign in</button>
        </form>

        <!-- Horizontal Line -->
        <p class="switch-auth">Don't have an account? <a @click="openModal('register')">Sign up</a></p>
        <div class="horizontal-line"></div>

        <div class="social-login">
          <p>Or sign in with</p>
          <div class="social-icons">
            <button class="social-btn">
              <i class="fab fa-facebook ml-1"></i>
            </button>
            <button class="social-btn">
              <i class="fab fa-google ml-1"></i>
            </button>
            <button class="social-btn">
              <i class="fab fa-twitter ml-1"></i>
            </button>
            <button class="social-btn">
              <i class="fab fa-linkedin ml-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Register Modal -->
    <div v-if="showModal === 'register'" class="modal-overlay" @click="closeModal">
      <div class="modal-content auto-height" @click.stop>
        <button @click="closeModal" class="modal-close-btn">
          <i class="fas fa-times"></i>
        </button>
        <h2 class="modal-title">Sign up</h2>
        <p class="modal-subtitle">Registration takes less than a minute but gives you full control over your orders.</p>
        <form @submit.prevent="submitRegister">
          <div class="input-group align-left">
            <label for="register-name">Full Name</label>
            <input type="text" id="register-name" v-model="registerName" placeholder="Your full name" required />
          </div>
          
          <div class="input-group align-left">
            <label for="register-email">Email</label>
            <input type="email" id="register-email" v-model="registerEmail" placeholder="Your working email" required />
          </div>
          
          <div class="input-group align-left">
            <label for="register-password">Password</label>
            <input type="password" id="register-password" v-model="registerPassword" placeholder="••••••••••" required />
          </div>
          
          <div class="input-group align-left">
            <label for="register-confirm-password">Confirm Password</label>
            <input type="password" id="register-confirm-password" v-model="registerConfirmPassword" placeholder="••••••••••" required />
          </div>
          
          <div class="checkbox-wrapper">
            <input type="checkbox" id="register-remember" v-model="registerRemember" />
            <label for="register-remember">Remember me</label>
          </div>
          <button type="submit" class="modal-btn">Sign up</button>
        </form>
        <p class="switch-auth">Already have an account? <a @click="openModal('login')">Sign in</a></p>

        <!-- Horizontal Line -->
        <div class="horizontal-line"></div>

        <div class="social-login">
          <p>Or sign up with</p>
          <div class="social-icons">
            <button class="social-btn">
              <i class="fab fa-facebook ml-1"></i>
            </button>
            <button class="social-btn">
              <i class="fab fa-google ml-1"></i>
            </button>
            <button class="social-btn">
              <i class="fab fa-twitter ml-1"></i>
            </button>
            <button class="social-btn">
              <i class="fab fa-linkedin ml-1"></i>
            </button>
          </div>
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
      showModal: null,
      loginEmail: '',
      loginPassword: '',
      loginRemember: false,
      registerName: '',
      registerEmail: '',
      registerPassword: '',
      registerConfirmPassword: '',
      registerRemember: false,
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
      // Implement selection change logic here
    },
    openModal(type) {
      this.showModal = type;
    },
    closeModal() {
      this.showModal = null;
    },
    submitLogin() {
      // Handle login submission
    },
    submitRegister() {
      // Handle registration submission
    },
  },
};
</script>

<style scoped>
/* Base styles */
body {
  background-color: #f5f5f5;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  background-color: #1e212c;
  color: white;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  width: 350px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  text-align: center;
}

.auto-height {
  height: auto;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.modal-subtitle {
  font-size: 0.875rem;
  margin-bottom: 20px;
}

.modal-close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
}

.modal-btn {
  background-color: #0f766e;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
  font-size: 1rem;
}

.modal-btn:hover {
  background-color: #0d4f44;
}

/* Label and input styling */
.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #4b5563;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  font-size: 1rem;
}

.input-group input:focus {
  outline: none;
  border-color: #0f766e;
}

/* Checkbox and forgot password styles */
.checkbox-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-align: left;
}

.forgot-password {
  display: block;
  margin-bottom: 10px;
  color: #0f766e;
  font-size: 0.875rem;
}

/* Align submit button after forgot password */
.modal-btn {
  margin-top: 0;
}

/* Actions styling */
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

/* Switch auth styles */
.switch-auth {
  font-size: 0.875rem;
  margin-top: 20px;
}

.switch-auth a {
  color: #0f766e;
  cursor: pointer;
}

/* Social login styles */
.social-login {
  margin-top: 20px;
}

.social-login p {
  margin-bottom: 10px;
  font-size: 0.875rem;
}

.social-icons {
  display: flex;
  justify-content: space-around;
}

.social-btn {
  background-color: #e5e7eb;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.social-btn:hover {
  background-color: #d1d5db;
}

.social-btn i {
  font-size: 1.25rem;
}

/* Horizontal line above the social login section */
.horizontal-line {
  width: 100%;
  height: 1px;
  background-color: #e5e7eb;
  margin: 20px 0;
}
</style>
