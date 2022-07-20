const inputCode = document.querySelector('#card-trim')
inputCode.addEventListener('input', e => {
  const target = e.target
  let str = target.value.split('')
  if (str.join('').replace(/\//g, '').split('').length % 2 === 0) {
    str.push('/')
  }
  target.value = str.join('')
  target.value = maxLengthStop(target.value, 5)
})