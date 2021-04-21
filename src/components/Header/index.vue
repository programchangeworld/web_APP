<template>
  <div class="header">
    <header-back-icon :backIconShow='backIconShow'/>
    <header-logo/>
    <header-list-icon :listIconShow='listIconShow'/>
  </div>
</template>

<script>
import HeaderBackIcon from './BackIcon'
import HeaderLogo from './Logo'
import HeaderListIcon from './ListIcon'
export default {
  name: 'Header',
  props: {
    backIconShow: {
      type: Boolean,
      default () {
        return false
      }
    },
    listIconShow: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  components: { HeaderBackIcon, HeaderLogo, HeaderListIcon }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 0.44rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
