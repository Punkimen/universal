const canvas = document.querySelector("#signature");
const clearBtn = document.querySelector(".signature__clear")
const signaBtn = document.querySelector("#sign")
const signInpFile = document.querySelector('#sign-file')
const parts = [];
const signaturePad = new SignaturePad(canvas);
clearBtn.addEventListener("click", e => {
  signaturePad.clear();
})
signaBtn.addEventListener("click", e => {
  const signInp = document.querySelector('#sign-url')
  const url = signaturePad.toDataURL()
  signInp.value = url;
  console.log(signInp.value);
})
