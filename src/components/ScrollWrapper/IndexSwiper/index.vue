<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <swiper :options="swiperOptions" ref="indexSwiper">
        <swiper-slide v-for="(item, index) of swiperDate" :key="index">
          <slider-inner :data="item"></slider-inner>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper.min.css'
import SliderInner from './SliderInner.vue'
export default {
  name: 'IndexSwiper',
  props: {
    swiperDate: Array
  },
  components: { Swiper, SwiperSlide, SliderInner },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        loopedSlides: 1,
        autoplay: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-wrapper >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}
</style>
