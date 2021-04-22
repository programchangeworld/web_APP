<template>
  <div class="container">
    <page-header
      :backIconShow='false'
      :listIconShow='true'
      ></page-header>
      <index-scroll-wrapper
        @onPullingDown='onPullingDown'
        @onFinishedPullDown='onFinishedPullDown'
        @onResetLoadingText='onResetLoadingText'
      />
      <pulling-down-loading
        :loadingText='loadingText'
      ></pulling-down-loading>
  </div>
</template>

<script>
import PageHeader from '../components/Header'
import IndexScrollWrapper from '../components/ScrollWrapper/Index'
import PullingDownLoading from '../components/PullDownLoading/index'

export default {
  name: 'IndexPage',
  components: { PageHeader, IndexScrollWrapper, PullingDownLoading },
  data () {
    return {
      loadingText: ''
    }
  },
  methods: {
    onPullingDown (text) {
      this.loadingText = text
    },
    onFinishedPullDown (text) {
      this.loadingText = text
    },
    onResetLoadingText (text) {
      this.loadingText = text
    }
  }
}
</script>
