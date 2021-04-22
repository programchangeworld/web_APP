<template>
  <div class="main">
    <div class="scroll-wrapper" ref="wrapper">
      <div class="scroll-content">
        <index-swiper
          :swiperDate='swiperData'
        ></index-swiper>
        <main-title
          :data="{field_name: '推荐课程',field:'all'}"
        ></main-title>
        <recom-course-list
          :recomCourseData='recomCourseData'
        ></recom-course-list>
        <div v-if="fieldData.length > 0 && courseData.length > 0">
          <div v-for='(item,index) of fieldData' :key='index'>
            <main-title
              :data='item'
            ></main-title>
            <course-list
              :courseData='courseData | filterCourseData(index)'
            ></course-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import IndexSwiper from './IndexSwiper/index'
import IndexModel from '../../models/index'
import MainTitle from './MainTitle/index'
import RecomCourseList from './RecomCourseList/index'
import CourseList from './CourseList/index'

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
  },
  updated () {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      mouseWheel: true,
      click: true,
      tap: true
    })
  },
  methods: {
    async getCourseDatas () {
      const data = await indexModel.getCourseDatas()
      const res = data.result
      this.swiperData = res.swipers
      this.fieldData = res.fields
      this.courseData = res.courses
      this.recomCourseData = res.recomCourses
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
height: calc(100% - .44rem);
// height: 500px;
display: flex;
flex-direction: column;
}
</style>
