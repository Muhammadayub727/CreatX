<template>
  <div class="slider-container">
    <swiper
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 1000 }"
      :pagination="{
        clickable: true,
        renderBullet: renderBullet
      }"
      ref="swiperRef"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="slide-content">
          <img :src="slide.image" alt="Slide Image" class="slide-image" />
          <div class="slide-overlay">
            <h2>{{ slide.title }}</h2>
            <div class="buttons">
              <button @click="goNext">Shop Sale</button>
              <button @click="goPrev">Shop the Menswear</button>
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

    const restartAutoplay = () => {
      if (swiperRef.value && swiperRef.value.swiper) { 
        swiperRef.value.swiper.autoplay.stop();
        swiperRef.value.swiper.autoplay.start();
      }
    };

    onMounted(() => {
      if (swiperRef.value) {
        console.log('Swiper initialized', swiperRef.value.swiper);
      }
    });

    return {
      swiperRef,
      goNext,
      goPrev,
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
  },
  methods: {
    renderBullet(index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  },
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  color: white;
}

.slide-overlay h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #0284c7;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #0369a1;
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

.swiper-pagination-bullet {
  background-color: #333;
  width: 12px;
  height: 12px;
  margin: 0 5px;
}

.swiper-pagination-bullet-active {
  background-color: #0284c7;
}
</style>