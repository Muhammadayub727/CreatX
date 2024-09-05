<template>
  <div class="slider-container">
    <swiper
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 1000 }"
      :pagination="false"
      ref="swiperRef"
      @slideChange="updatePagination"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="slide-content">
          <img :src="slide.image" alt="Slide Image" class="slide-image" />
          <div class="slide-overlay">
            <p class="subtitle">NEW COLLECTION</p>
            <h2>{{ slide.title }}</h2>
            <div class="buttons">
              <button @click="goNext" class="outline-button">Shop sale</button>
              <button @click="goPrev" class="filled-button">Shop the menswear</button>
            </div>
            <!-- Custom Pagination -->
            <div class="custom-pagination">
              <span
                v-for="(slide, index) in slides"
                :key="index"
                :class="['pagination-number', { active: activeIndex === index }]"
                @click="setActive(index)"
              >
                {{ index + 1 < 10 ? `0${index + 1}` : index + 1 }}
              </span>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="custom-swiper-button-prev" @click="goPrev">
      <i class="fas fa-arrow-left"></i>
    </div>
    <div class="custom-swiper-button-next" @click="goNext">
      <i class="fas fa-arrow-right"></i>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { ref, onMounted } from 'vue';
import SliderImage from '../assets/img/Slider.png';


export default {
  name: 'SliderComponents',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperRef = ref(null);
    const activeIndex = ref(0);

    const goNext = () => {
      if (swiperRef.value && swiperRef.value.swiper) {
        swiperRef.value.swiper.slideNext();
        restartAutoplay();
      }
    };

    const goPrev = () => {
      if (swiperRef.value && swiperRef.value.swiper) {
        swiperRef.value.swiper.slidePrev();
        restartAutoplay();
      }
    };

    const goToSlide = (index) => {
      if (swiperRef.value && swiperRef.value.swiper) {
        swiperRef.value.swiper.slideToLoop(index);
        restartAutoplay();
      }
    };

    const updatePagination = () => {
      if (swiperRef.value && swiperRef.value.swiper) {
        activeIndex.value = swiperRef.value.swiper.realIndex || 0;
      }
    };

    const restartAutoplay = () => {
      if (swiperRef.value && swiperRef.value.swiper) {
        swiperRef.value.swiper.autoplay.stop();
        swiperRef.value.swiper.autoplay.start();
      }
    };

    const setActive = (index) => {
      goToSlide(index);
      activeIndex.value = index;
    };

    onMounted(() => {
      if (swiperRef.value && swiperRef.value.swiper) {
        updatePagination();
      }
    });

    return {
      swiperRef,
      activeIndex,
      goNext,
      goPrev,
      goToSlide,
      updatePagination,
      setActive,
    };
  },
  data() {
    return {
      slides: [
        { image: SliderImage, title: 'Menswear 2020' },
        { image: SliderImage, title: 'New Arrivals' },
        { image: SliderImage, title: 'Winter Collection' },
        { image: SliderImage, title: 'Summer Sale' },
      ],
    };
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.slider-container {
  width: 100%;
  height: 600px;
  position: relative;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.slide-content {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-overlay {
  position: absolute;
  top: 40%;
  left: 10%;
  transform: translateY(-50%);
  text-align: left;
  color: #333;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: -1rem;
  font-weight: bold;
  color: #333;
  margin-top: 4rem;
}

.slide-overlay h2 {
  font-size: 55px;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 900;
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
}

.buttons {
  display: flex;
  gap: 10px;
}

button {
  padding: 10px 20px;
  border: 2px solid #333;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 15px;
}

.outline-button {
  background-color: transparent;
  border: 1px solid #17696A;
  color: #17696A;
}

.outline-button:hover {
  background-color: #17696A;
  color: white;
}

.filled-button {
  background-color: #17696A;
  color: white;
  border: none;
}

.filled-button:hover {
  background-color: #17696A;
}

.custom-swiper-button-prev,
.custom-swiper-button-next {
  background-color: white;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  cursor: pointer;
}

.custom-swiper-button-prev {
  left: 10px;
}

.custom-swiper-button-next {
  right: 10px;
}

.custom-pagination {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 20px;
  font-size: 1.8rem;
  margin-top: 100px;
}

.pagination-number {
  width: 145px;
  min-height: 55px;
  color: gray;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  position: relative;
}

.pagination-number::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: gray;
}

.pagination-number.active {
  color: #000;
}

.pagination-number.active::after {
  background-color: #000;
}
</style>
