<template>
  <div class="main">
    <div class="scroll-wrapper" ref="wrapper">
      <div class="scroll-content">
        <index-swiper
          :swiperDate='swiperData'
        ></index-swiper>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import IndexSwiper from './IndexSwiper/index'
import IndexModel from '../../models/index'
const indexModel = new IndexModel()
export default {
  name: 'IndexScrollWrapper',
  components: {
    IndexSwiper
  },
  data () {
    return {
      swiperData: [],
      fieldData: [],
      courseDate: [],
      recomCourseDate: []
    }
  },
  mounted () {
    // console.log(this.scroll)
    this.getCourseDatas()
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      mouseWheel: true,
      click: true,
      tap: true
    })
    // console.log(this.scroll)
  },
  methods: {
    async getCourseDatas () {
      const data = await indexModel.getCourseDates()
      const res = data.result
      this.swiperData = res.swipers
      this.fieldData = res.fields
      this.courseDate = res.courses
      this.recomCourseDate = res.recomCourses
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
height: calc(100% - 0.44rem);
display: flex;
flex-direction: column;
}
</style>
