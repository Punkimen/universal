const snapPhoto = (webcam, canvas) => {
  webcam.snap();
  $(canvas).addClass('show')
  $('.take-photo__instruction').hide()
  $('.take-photo__repeat').addClass('show')
}

const webcamStartFirst = () => {
  const webcamElement = document.querySelector('#webcam');
  const canvasElement = document.querySelector('#canvas');
  const snap = document.querySelector('#photo-do')
  const webcam = new Webcam(webcamElement, 'user', canvasElement);
  webcam.start()
    .then(result => {
      console.log("webcam started");
      $('.take-photo__error').hide()
    })
    .catch(err => {
      $('.take-photo__error').show()
      console.log(err);
    });
  snap.addEventListener('click', function () {
    snapPhoto(webcam, '#canvas')
  })
  snap.textContent = "Зберегти"
};
const repeatPhoto = () => {
  $(canvas).removeClass('show')
  webcamStartFirst()
  $('.take-photo__instruction').show()
  $('.take-photo__repeat').removeClass('show')
}
$('.take-photo__repeat').on('click', e => {
  repeatPhoto()
})
webcamStartFirst()