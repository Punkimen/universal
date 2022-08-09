const timer = (sec, el, cb) => {
  const timerIner = document.querySelector(el);
  const timerInterval = setInterval(() => {
    timerIner.innerText = sec < 10 ? `0${sec}` : sec
    sec--
    if (sec < 0) {
      cb(true)
      clearInterval(timerInterval)
    }
  }, 1000)
}

const repeatBtn = document.querySelector('#repeate-code')
const smsTimerInner = document.querySelector('.sms-code__timer')

function showBtn(done) {
  if (done) {
    repeatBtn.style.display = 'block'
    smsTimerInner.style.display = 'none'
  } else {
    repeatBtn.style.display = 'none'
    smsTimerInner.style.display = 'block'
  }
}
timer(30, '#sms-timer', showBtn)
repeatBtn.addEventListener('click', e => {
  e.preventDefault()
  showBtn(false)
  timer(30, '#sms-timer', showBtn)
})

const inputCode = document.querySelector('#code-field')

inputCode.addEventListener('input', e => {
  const target = e.target
  let str = target.value.split('')
  if (str.join('').replace(/-/g, '').split('').length % 2 === 0 && str.length < 6) {
    str.push('-')
  }
  target.value = str.join('')
  // target.value = maxLengthStop(target.value, 8)
})