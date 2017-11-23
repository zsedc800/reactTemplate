import anime from 'animejs'
function addZero (num) {
  return num > 9 ? num : `0${num}`
}

export function className (arr) {
  return arr.join(' ').trim()
}

export function Toast (msg='', expire=1500, callback) {
  let masker = document.createElement('div')
  masker.style.position = 'fixed'
  masker.style.top = 0
  masker.style.left = 0
  masker.style.width = '100%'
  masker.style.height = '100%'
  let toast = document.createElement('div')
  toast.setAttribute ('class', 'toast')
  masker.appendChild(toast)
  masker.style.zIndex = 99999
  toast.style.zIndex = 100000
  document.body.appendChild(masker)
  toast.innerHTML = msg
  anime({
    targets: toast,
    scale: [{ value: 0.7, duration: 0 }, { value: 1, duration: 500 }],
    opacity: [{ value: 0, duration: 0 }, { value: 0.7, duration: 500 }],
    translateX: [{ value: '-50%'}],
    translateY: [{ value: '-50%'}]
  })

  setTimeout(() => {
    anime({
      targets: toast,
      opacity: 0,
      scale: 0.5,
      translateX: '-50%',
      translateY: '-50%',
      complete: () => {
        document.body.removeChild(masker)
        callback && callback()
      }
    })
  }, expire)
}

export function formatPhone (phone='') {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

export function loading (show=false) {
  let loading = document.querySelector('#loading')
  if (!loading) {
    loading = document.createElement('div')
    loading.setAttribute('id', 'loading')
    document.body.appendChild(loading)
  }
  if (show) {
    loading.style.display = 'block'
  } else {
    loading.style.display = 'none'
  }
}

export function backTop () {
  var target = document.body.scrollTop==0 ? document.documentElement : document.body
  anime({
    targets: target,
    scrollTop: 0,
    ease: 'easeInOutQuart',
    duration: 1200
  })
}

export function dateFmt (ts, mark) {
    // mark = mark.replace(/\d/g, '').charAt(0)
    ts = parseInt(ts)
    mark = mark ? mark : '-'
    let date = new Date(ts)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    month = month > 9 ? month : `0${month}`
    day = day > 9 ? day : `0${day}`
    return `${year}${mark}${month}${mark}${day}`
}
export function dateFmt2 (ts, mark) {
    // mark = mark.replace(/\d/g, '').charAt(0)
    mark = mark ? mark : '-'
    let date = new Date(ts)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = addZero(date.getHours())
    let min = addZero(date.getMinutes())
    let sec = addZero(date.getSeconds())
    month = month > 9 ? month : `0${month}`
    day = day > 9 ? day : `0${day}`
    return `${year}${mark}${month}${mark}${day} ${hour}:${min}:${sec}`
}

export function queryHref (key) {
  let data = window.location.href.split('?')
  let value = null
  if (!data[1]) {
    return null
  }
  data = data[1].split('&')
  data.forEach(str => {
    let arr = str.split('=')
    if (key === arr[0]) {
      value = arr[1]
    }
  })
  return value
}

export function classMerge (classStr, options) {
  let classList = []
  if (typeof options === 'object') {
    for (let key in options) {
      if (options[key]) {
        classList.push(key)
      }
    }
  }
  let suffix = classList.join(' ')
  suffix = suffix ? ' ' + suffix : ''
  return `${classStr}${suffix}`
}

export function meaStrLen (str='') {
  let reg = /[\u0391-\uFFE5]/g
  let tempStr = str.replace(reg, 'aa')
  return Math.ceil(tempStr.length / 2)
}
