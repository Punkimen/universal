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
  console.log('w');
  $('.contracts__content').mCustomScrollbar({
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