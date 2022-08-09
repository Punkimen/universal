"use strict";
$('select').on('change', function () {
  $(this).css('color', '#18192F');
})
const maxLengthStop = (value, maxLength) => {
  if (value.length > maxLength) {
    return value.slice(0, maxLength)
  } else {
    return value
  }
}

const inputs = document.querySelectorAll('.main-block__input')
inputs.forEach(input => {
  if (input.getAttribute('data-length')) {
    input.addEventListener('input', e => {
      e.target.value = maxLengthStop(e.target.value, e.target.getAttribute('data-length'))
    })
  }
})
if ($('.contracts__content').length > 0) {
  $('.contracts__content').mCustomScrollbar({
    axis: "y",
  });
}
if ($('.pep-content').length > 0) {
  $('.pep-content').mCustomScrollbar({
    axis: "y",
  });
}
(function () {
  async function clipboardCopy(text) {
    await navigator.clipboard.writeText(text);
  }

  const copyBtns = document.querySelectorAll('.copy-btn')
  console.log(copyBtns);
  copyBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const copyedText = e.target
        .closest(".copy-text").textContent;
      clipboardCopy(copyedText.replace(/ /g, ''));
    });
  })
})();

// validation
const numInputs = document.querySelectorAll('.only-num')
const dateInputs = document.querySelectorAll('.date-input')
numInputs.forEach(el => {
  el.addEventListener('input', e => {
    let value = e.target.value
    e.target.value = value.replace(/[^0-9\.]+/g, '');
  })
})

dateInputs.forEach(el => {
  el.addEventListener('input', e => {
    const value = e.target.value
    const str = value.split('')

    if (str.join('').replace(/\./g, '').split('').length % 2 === 0 && str.length < 6) {
      str.push('.')
    }
    e.target.value = str.join('')
  })
})

