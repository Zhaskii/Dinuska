let videoElement;

function moveButton() {
  let button = document.getElementById("no-btn");
  let x = Math.random() * (window.innerWidth - 100);
  let y = Math.random() * (window.innerHeight - 50);
  button.style.position = "absolute";
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

function showLossAlert() {
  alert("YOUR LOSS! 😢");
}

function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");
  document.getElementById("bg").style.opacity = "1";
  document.getElementById("headline").style.color = "yellow";
  startKissShower();
  document.getElementById("ring").style.display = "none";

  videoElement = document.getElementById("love-video");
  if (videoElement) {
    videoElement.play();
  }

  setTimeout(() => {
    document.getElementById("thank-you-btn").classList.remove("hidden");
  }, 1000);
}

function sayThankYou() {
  let music = document.getElementById("love-music");
  music.play();

  let video = document.getElementById("love-video");
  if (video) {
    video.pause();
    video.currentTime = 0;
  }

  document.getElementById("content").classList.add("fade-out");
  setTimeout(() => {
    document.getElementById("content").style.display = "none";
    displayLoveMessage();
  }, 1500);
}

function displayLoveMessage() {
  const loveMessageContainer = document.createElement("div");
  loveMessageContainer.classList.add(
    "love-message-container",
    "absolute",
    "top-1/2",
    "left-1/2",
    "transform",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "text-center",
    "font-medium",
    "text-[red]",
    "bg-opacity-70",
    "p-8",
    "rounded-lg",
    "text-8xl",
    "transition-opacity",
    "opacity-100"
  );
  loveMessageContainer.innerHTML = "<p>I LOVE YOU LUV! ❤️🌹</p>";

  document.body.appendChild(loveMessageContainer);

  setTimeout(() => {
    loveMessageContainer.style.opacity = "0";
  }, 4000);

  setTimeout(() => {
    loveMessageContainer.remove();
    startSlideshow();
  }, 5000);

  startFlowerShower();
}

function startFlowerShower() {
  const flowerContainer = document.createElement("div");
  flowerContainer.classList.add("flower-container");
  document.body.appendChild(flowerContainer);

  setInterval(() => {
    let flower = document.createElement("div");
    flower.classList.add("falling-item");
    flower.innerHTML = "🌹";
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = 3 + Math.random() * 2 + "s";
    flowerContainer.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 5000);
  }, 300);
}

function startKissShower() {
  const kissContainer = document.createElement("div");
  kissContainer.classList.add("kiss-container");
  document.body.appendChild(kissContainer);

  setInterval(() => {
    let kiss = document.createElement("div");
    kiss.classList.add("falling-item");
    kiss.innerHTML = Math.random() > 0.5 ? "😘" : "💋";
    kiss.style.left = Math.random() * window.innerWidth + "px";
    kiss.style.animationDuration = 2 + Math.random() * 3 + "s";
    kiss.style.fontSize = 20 + Math.random() * 30 + "px";
    kissContainer.appendChild(kiss);

    setTimeout(() => {
      kiss.remove();
    }, 5000);
  }, 200);
}

function startSlideshow() {
  const images = [
    "https://i.postimg.cc/qvt6vYf5/1.jpg",
    "https://i.postimg.cc/YSH2Bytg/2.jpg",
    "https://i.postimg.cc/wBXvtYw0/3.jpg",
    "https://i.postimg.cc/BnDZyGf4/4.jpg",
    "https://i.postimg.cc/0jWr8GVv/5.jpg",
    "https://i.postimg.cc/1RCzVHKh/6.jpg",
    "https://i.postimg.cc/PxftPpp5/7.jpg",
    "https://i.postimg.cc/8z8NLnJ3/8.jpg",
    "https://i.postimg.cc/tJwySBrs/9.jpg",
    "https://i.postimg.cc/LsDSK9CK/10.jpg",
    "https://i.postimg.cc/V6Hcv7PK/11.jpg",
    "https://i.postimg.cc/bJvhq7WG/12.jpg",
    "https://i.postimg.cc/XY06rGt6/13.jpg",
    "https://i.postimg.cc/d04bNW3J/14.jpg",
    "https://i.postimg.cc/Vk1s3Vft/15.jpg",
    "https://i.postimg.cc/J7DhJXYs/16.jpg",
    "https://i.postimg.cc/Zq5bqvyK/17.jpg",
    "https://i.postimg.cc/PxLdWG4g/18.jpg",
    "https://i.postimg.cc/nz6pTdSC/19.jpg",
    "https://i.postimg.cc/zGJ5dH7S/20.jpg",
    "https://i.postimg.cc/zDgJ3r3W/21.jpg",
    "https://i.postimg.cc/C1fVZGMY/22.jpg",
    "https://i.postimg.cc/QMCDDLRF/23.jpg",
    "https://i.postimg.cc/qvjrWBZf/24.jpg",
    "https://i.postimg.cc/CK2gLPgm/25.jpg",
    "https://i.postimg.cc/SR6Fdmzv/27.jpg",
    "https://i.postimg.cc/8cQgL7sv/28.jpg",
    "https://i.postimg.cc/VkLQ9QsK/29.jpg",
    "https://i.postimg.cc/CxPymPzS/30.jpg",
  ];
  let index = 0;
  const slideshowContainer = document.createElement("div");
  slideshowContainer.classList.add("slideshow-container");
  document.body.appendChild(slideshowContainer);

  const imgElement = document.createElement("img");
  imgElement.classList.add("slideshow-image");
  slideshowContainer.appendChild(imgElement);

  imgElement.src = images[index];

  const slideshowInterval = setInterval(() => {
    index = (index + 1) % images.length;
    imgElement.src = images[index];
  }, 5000);

  const thankYouAgainButton = document.createElement("button");
  thankYouAgainButton.innerHTML = "Thank You Again Luv!";
  thankYouAgainButton.classList.add(
    "px-6",
    "py-3",
    "text-lg",
    "font-bold",
    "text-white",
    "bg-red-500",
    "rounded-lg",
    "shadow-lg",
    "hover:bg-blue-700",
    "transition"
  );
  thankYouAgainButton.onclick = function () {
    resetEverything();
    document.getElementById("ring").style.display = "block";
    thankYouAgainButton.remove();
  };

  thankYouAgainButton.style.position = "fixed";
  thankYouAgainButton.style.bottom = "20px";
  thankYouAgainButton.style.right = "20px";

  document.body.appendChild(thankYouAgainButton);
}

function resetEverything() {
  document.getElementById("content").style.display = "block";
  document.getElementById("content").classList.remove("fade-out");
  document.getElementById("surprise").classList.add("hidden");

  document.getElementById("bg").style.opacity = "0";

  document.getElementById("love-music").pause();
  if (videoElement) {
    videoElement.pause();
    videoElement.currentTime = 0; // Reset video
  }

  // Remove any previous flower, kiss, slideshow containers
  const flowerContainer = document.querySelector(".flower-container");
  if (flowerContainer) flowerContainer.remove();

  const kissContainer = document.querySelector(".kiss-container");
  if (kissContainer) kissContainer.remove();

  const slideshowContainer = document.querySelector(".slideshow-container");
  if (slideshowContainer) slideshowContainer.remove();

  // Reset headline color and heart animation
  document.getElementById("headline").style.color = "black";
  document.querySelector(".heart").style.display = "flex";
  document.querySelector(".heart").style.animation = "none"; // Reset heart animation
  document.querySelector(".heart").style.animation =
    "heartBeat 1s infinite alternate";

  // Clear any existing video container
  const existingVideoContainer = document.querySelector(".video-container");
  if (existingVideoContainer) {
    existingVideoContainer.remove(); // Remove previous video container
  }

  // Add the new video
  const surpriseContainer = document.getElementById("surprise");
  const newVideo = document.createElement("video");
  newVideo.id = "love-video";
  newVideo.src =
    "https://www.dropbox.com/scl/fi/hjjn4w8ixp9uqp94g56ov/K.mp4?rlkey=ixsnd1gx9ed05j0zi1aftyg5z&st=ljdcq4f2&raw=1";
  newVideo.loop = true;
  const videoContainer = document.createElement("div");
  videoContainer.classList.add("video-container");
  videoContainer.appendChild(newVideo);
  surpriseContainer.appendChild(videoContainer);
}
