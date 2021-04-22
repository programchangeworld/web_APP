<template>
  <div class="main-title">
    <h1>{{data.field_name}}</h1>
    <router-link :to="{path: '/list', query:{field:data.field}}">
      <span>更多课程<i class="iconfont icon-arrow-right"></i></span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MainTitle',
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
.main-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.44rem;
  padding: 0 .1rem;
  box-sizing: border-box;
  line-height: .44rem;
  a{
    margin-top: -.05rem;
  }
  h1{
    font-size: 0.16rem;
  }
  span{
    font-size: .12rem;
    color: #999;
    .iconfont{
      font-size: .1rem;
    }
  }
}
</style>
