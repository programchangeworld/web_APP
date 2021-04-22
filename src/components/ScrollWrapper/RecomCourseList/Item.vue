<template>
  <div class="course-item">
    <a href="'https://ke.qq.com/course/' + data.course_id">
      <div class="img-wrap">
        <img :src="data.course_img" :alt="data.course_name" />
      </div>
    </a>
    <div class="info-wrap">
      <h1 class="course-name">{{ data.course_name }}</h1>
      <p class="teacher-info">
        <img :src="data.teacher_img" :alt="data.teacher_name" />
        <span>{{ data.teacher_name }}</span>
      </p>
      <p class="course-price">￥{{ data.price }}.00</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecomCourseItem',
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
.course-item {
  position: relative;
  display: flex;
  height: 0.8rem;
  margin-bottom: 0.1rem;
  background-color: #fff;
  border-bottom: 1px solid #eee;

  .img-wrap {
    width: 1.43rem;
    height: 100%;
  }

  .info-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0.05rem 0.1rem 0.05rem 1.53rem;
    box-sizing: border-box;

    .course-name {
      font-size: 0.14rem;
      line-height: 0.18rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .teacher-info {
      margin-top: 0.03rem;
      img {
        width: 0.25rem;
        height: 0.25rem;
        border-radius: 50%;
      }

      span {
        font-size: 0.12rem;
        color: #666;
        vertical-align: middle;
      }
    }

    .course-price {
      margin-top: 0.06rem;
      font-size: 0.14rem;
      color: #f40;
    }
  }
}
</style>
