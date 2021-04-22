import Vue from 'vue'

Vue.filter('filterCourseData', function (data, field) {
  // console.log(field)
  const _data = data.filter((item) => {
    if (field === 'all') {
      return true
    }
    return item.field == field
  })
  // console.log(_data)
  return _data.slice(0, 4)
})
