document.addEventListener("DOMContentLoaded", function () {
  var banner = document.querySelector(".banner");
  var bannerImage = document.querySelector(".banner .left-img");
  var bannerHeading = document.querySelector(".banner .left-banner h1");
  var bannerText = document.querySelector(".banner .left-banner p");

  banner.style.backgroundImage = "url(images/banner1.svg)";
  bannerImage.setAttribute("src", "images/image.png");
  bannerHeading.textContent = "Deep Focus";
  bannerText.textContent = "Keep your focus and enjoy the serenity";
});

function playAll(songNumber) {
  var audioElement = document.getElementById("song");
  var playBtn = document.getElementById("play-pause");
  var songFileName = "music/" + songNumber + ".mp3";
  var currentRow = document.getElementById("song" + songNumber);
  var banner = document.querySelector(".banner");
  var bannerImage = document.querySelector(".banner .left-img");
  var bannerHeading = document.querySelector(".banner .left-banner h1");
  var bannerText = document.querySelector(".banner .left-banner p");

  if (
    audioElement.getAttribute("src") == songFileName &&
    !audioElement.paused
  ) {
    audioElement.pause();
    playBtn.innerHTML = '<img src="images/play-button.svg">';
    banner.style.backgroundImage = "url(images/banner1.svg)";
    bannerImage.setAttribute("src", "images/image.png");
    bannerHeading.textContent = "Deep Focus";
    bannerText.textContent = "Keep your focus and enjoy the serenity";
  } else {
    audioElement.setAttribute("src", songFileName);
    audioElement.play();
    playBtn.innerHTML = '<img src="images/pause-button.svg">';

    switch (songNumber) {
      case 1:
        banner.style.backgroundImage = "url(images/b01.png)";
        bannerImage.setAttribute("src", "images/image1.png");
        bannerHeading.textContent = "Fall into Me";
        bannerText.textContent = "By Forest Blakk";
        break;
      case 2:
        banner.style.backgroundImage = "url(images/b02.png)";
        bannerImage.setAttribute("src", "images/image2.png");
        bannerHeading.textContent = "God's Plan";
        bannerText.textContent = "By Drake";
        break;
      case 3:
        banner.style.backgroundImage = "url(images/b03.png)";
        bannerImage.setAttribute("src", "images/image3.png");
        bannerHeading.textContent = "Shivers";
        bannerText.textContent = "By Ed Sheeran";
        break;
      case 4:
        banner.style.backgroundImage = "url(images/b04.png)";
        bannerImage.setAttribute("src", "images/image4.jpg");
        bannerHeading.textContent = "Rescue Me";
        bannerText.textContent = "By OneRepublic";
        break;
      case 5:
        banner.style.backgroundImage = "url(images/b05.png)";
        bannerImage.setAttribute("src", "images/image5.png");
        bannerHeading.textContent = "Senorita";
        bannerText.textContent = "By Shawn Mendes and Camilla Cabello";
        break;
      case 6:
        banner.style.backgroundImage = "url(images/b06.png)";
        bannerImage.setAttribute("src", "images/image6.png");
        bannerHeading.textContent = "Treat You Better";
        bannerText.textContent = "By Shawn Mendes";
        break;
      case 7:
        banner.style.backgroundImage = "url(images/b07.png)";
        bannerImage.setAttribute("src", "images/image7.png");
        bannerHeading.textContent = "Daylight";
        bannerText.textContent = "By David Kushner";
        break;
      case 8:
        banner.style.backgroundImage = "url(images/b08.png)";
        bannerImage.setAttribute("src", "images/image8.png");
        bannerHeading.textContent = "2002";
        bannerText.textContent = "By Anne-Marie";
        break;
      case 9:
        banner.style.backgroundImage = "url(images/b09.png)";
        bannerImage.setAttribute("src", "images/image9.png");
        bannerHeading.textContent = "All of Me";
        bannerText.textContent = "By John Legend";
        break;
      case 10:
        banner.style.backgroundImage = "url(images/b10.png)";
        bannerImage.setAttribute("src", "images/image10.png");
        bannerHeading.textContent = "Anti-Hero";
        bannerText.textContent = "By Taylor Swift";
        break;
      case 11:
        banner.style.backgroundImage = "url(images/b11.png)";
        bannerImage.setAttribute("src", "images/image11.png");
        bannerHeading.textContent = "Wish You the Best";
        bannerText.textContent = "By Lewis Capaldi";
        break;
    }
  }
}

function playaudio() {
  console.log("hi");
  var audio = document.getElementById("song");
  var playBtn = document.getElementById("play-pause");
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '<img src="images/pause-button.svg">';
  } else {
    audio.pause();
    playBtn.innerHTML = '<img src="images/play-button.svg">';
  }
}
