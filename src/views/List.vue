<template>
  <div>
    <page-header
      :backIconShow='true'
      :listIconShow='false'
      ></page-header>
  </div>
</template>

<script>
import PageHeader from '../components/Header'
export default {
  name: 'ListPage',
  components: { PageHeader }
}
</script>
