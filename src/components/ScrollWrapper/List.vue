<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <course-list :courseData="courseData"> </course-list>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import CourseList from './CourseList/index'
import { ImgLoad } from '../../utils/tools'
export default {
  props: {
    courseData: Array
  },
  name: 'ListScrollWrapper',
  components: { CourseList },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      mouseWheel: true,
      click: true,
      tap: true
    })
  },
  updated () {
    ImgLoad(this.scroll, this.$refs.wrapper.getElementsByTagName('img'))
  }
}
</script>

<style lang="scss" scoped>
</style>
