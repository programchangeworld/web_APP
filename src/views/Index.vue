<template>
  <div class="container">
    <page-header
      :backIconShow='false'
      :listIconShow='true'
      ></page-header>
      <index-scroll-wrapper/>
  </div>
</template>

<script>
import PageHeader from '../components/Header'
import IndexScrollWrapper from '../components/ScrollWrapper/Index'
export default {
  name: 'IndexPage',
  components: { PageHeader, IndexScrollWrapper }
}
</script>
