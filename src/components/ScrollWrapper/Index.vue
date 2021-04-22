<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <index-swiper :swiperDate="swiperData"></index-swiper>
      <main-title :data="{ field_name: '推荐课程', field: 'all' }"></main-title>
      <recom-course-list :recomCourseData="recomCourseData"></recom-course-list>
      <div v-if="fieldData.length > 0 && courseData.length > 0">
        <div v-for="(item, index) of fieldData" :key="index">
          <main-title :data="item"></main-title>
          <course-list
            :courseData="courseData | filterCourseData(index)"
          ></course-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PULL_DOWN_TEXT } from '../../utils/config'
import BetterScroll from 'better-scroll'
import IndexSwiper from './IndexSwiper/index'
import IndexModel from '../../models/index'
import MainTitle from './MainTitle/index'
import RecomCourseList from './RecomCourseList/index'
import CourseList from './CourseList/index'

import { ImgLoad } from '../../utils/tools'
const indexModel = new IndexModel()
export default {
  name: 'IndexScrollWrapper',
  components: {
    IndexSwiper,
    MainTitle,
    RecomCourseList,
    CourseList
  },
  data () {
    return {
      swiperData: [],
      fieldData: [],
      courseData: [],
      recomCourseData: []
    }
  },
  mounted () {
    this.getCourseDatas()
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      mouseWheel: true,
      click: true,
      tap: true,
      pullDownRefresh: {
        threshold: 50,
        stop: 50
      }
    })
    this.scroll.on('pullingDown', this.onPullingDown)
  },
  updated () {
    ImgLoad(this.scroll, this.$refs.wrapper.getElementsByTagName('img'))
  },
  methods: {
    async getCourseDatas () {
      const data = await indexModel.getCourseDatas()
      const res = data.result
      this.swiperData = res.swipers
      this.fieldData = res.fields
      this.courseData = res.courses
      this.recomCourseData = res.recomCourses
    },
    onPullingDown () {
      this.$emit('onPullingDown', PULL_DOWN_TEXT.PULLING)
      this.getCourseDatas()
      setTimeout(() => {
        this.$emit('onFinishedPullDown', PULL_DOWN_TEXT.FINISHED)
        setTimeout(() => {
          this.$emit('onResetLoadingText', PULL_DOWN_TEXT.ORIGIN)
          this.scroll.finishPullDown()
          this.scroll.refresh()
        }, 500)
      }, 1500)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
