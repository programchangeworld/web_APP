function ImgLoad (scroll, ImgNode) {
  const img = ImgNode
  let count = 0
  const length = img.length
  if (length) {
    const timer = setInterval(() => {
      if (count === length) {
        scroll.refresh() // bs提供的刷新的方法，详见官网
        clearInterval(timer)
      } else if (img[count].complete) {
        count++
      }
    }, 100)
  }
}

function findFieldIndex (data, field) {
  return data.findIndex(item => item.field === field)
}

function scrollToPosition (target) {
  const offsetLeft = target.offsetLeft
  const scrollEl = target.parentNode.parentNode

  scrollEl.scrollTo(offsetLeft, 0)
}

export {
  ImgLoad,
  findFieldIndex,
  scrollToPosition
}
