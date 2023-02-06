const switchBtn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

switchBtn.addEventListener('click', function () {
  if (!switchBtn.classList.contains('slide')) {
    switchBtn.classList.add('slide');
    video.pause();
  } else {
    switchBtn.classList.remove('slide');
    video.play();
  }
});

//PRELOADER GIF
//DOMContentLoaded event fires when the intial HTML document has been completley loaded and parsed,without waiting
//for stylesheets,images and subframes to finish loading.
//BUT Loaded event is fired when the whole page has loaded including all dependent resources such as stylesheets and images
const preloader = document.querySelector('.preloader');
window.addEventListener('load', function () {
  preloader.classList.add('hide-preloader'); //when it finshes loading it will hide preloader
});
