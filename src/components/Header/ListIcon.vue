<template>
  <div class="list-icon">
    <div class="link-wrap" @click="onRouterTo('all')">
      <i class="iconfont icon-cc-list" v-show="listIconShow"></i>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    listIconShow: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  name: 'HeaderListIcon',
  methods: {
    ...mapMutations(['selectField']),
    onRouterTo (field) {
      this.selectField(field)
      this.$router.push('./list')
    }
  }
}
</script>

<style lang="scss" scoped>
.list-icon {
  display: flex;
  width: 0.44rem;
  height: 0.44rem;
  align-items: center;
  align-content: center;
  .iconfont {
    font-size: 0.2rem;
  }
}
</style>
