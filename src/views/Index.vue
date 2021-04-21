<template>
  <div>
    <page-header
      :backIconShow='false'
      :listIconShow='true'
      ></page-header>
  </div>
</template>

<script>
import PageHeader from '../components/Header'
export default {
  name: 'IndexPage',
  components: { PageHeader }
}
</script>
