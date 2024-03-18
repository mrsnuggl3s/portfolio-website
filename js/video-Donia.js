document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.querySelector(".img-overlay-video");
  var video = document.querySelector(".video-hidden");
  var video_Donia = document.querySelector(".video-Donia");
  var video_overlay = document.querySelector('.video-overlay')

  overlay.addEventListener("click", function () {
    overlay.style.display = "none";
    video.style.display = "block";
    video_Donia.classList.add("add-margin-bottom");
    video_overlay.classList.add('hide-zIndex')
  });
});
