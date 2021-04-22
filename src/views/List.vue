<template>
  <div class="container">
    <page-header
      :backIconShow='true'
      :listIconShow='false'
      ></page-header>
    <list-tab :fieldData='fieldData'></list-tab>
    <list-scroll-wrapper
      :courseData='courseData'
    ></list-scroll-wrapper>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import PageHeader from '../components/Header'
import ListModel from '../models/list'
import ListTab from '../components/ListTap/Index'
import ListScrollWrapper from '../components/ScrollWrapper/List'
import { findFieldIndex } from '../utils/tools'

const listModel = new ListModel()
export default {
  name: 'ListPage',
  components: { PageHeader, ListTab, ListScrollWrapper },
  computed: {
    ...mapState(['field', 'tabIndex'])
  },
  async mounted () {
    await this.getCourseFields()
    this.getCourse(this.field)
    this.currentTabIndex = this.tabIndex
    this.changeTabIndex(findFieldIndex(this.fieldData, this.field) + 1)
  },
  data () {
    return {
      fieldData: [],
      courseData: [],
      currentTabIndex: -1
    }
  },
  methods: {
    ...mapMutations(['changeTabIndex']),
    async getCourseFields () {
      const data = await listModel.getCourseFields()
      this.fieldData = data.result
    },
    async getCourse (field) {
      const data = await listModel.getCourses(field)
      this.courseData = data.result
    }
  },
  activated () {
    if (this.currentTabIndex !== this.tabIndex) {
      this.currentTabIndex = this.tabIndex
      this.changeTabIndex(findFieldIndex(this.fieldData, this.field) + 1)
    }
  },
  watch: {
    field () {
      this.getCourse(this.field)
    }
  }
}
</script>
