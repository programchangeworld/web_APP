<template>
  <div class="list-icon">
    <router-link to="List">
      <i class="iconfont icon-cc-list" v-show="listIconShow"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    listIconShow: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  name: 'HeaderListIcon'
}
</script>

<style lang="scss" scoped>
  .list-icon{
    display: flex;
    width: .44rem;
    height: .44rem;
    align-items: center;
    align-content: center;
    .iconfont{
      font-size: .2rem;
    }
  }
</style>
