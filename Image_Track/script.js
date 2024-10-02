const track = document.getElementById("image-track");
const images = track.getElementsByClassName("image");


const updatePosition = (nextPercentage) => {
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, {
    duration: 1200,
    fill: "forwards"
  });

  for (const image of images) {
    image.animate({
      objectPosition: `${nextPercentage + 100}% center`
    }, {
      duration: 1200,
      fill: "forwards"
    });
  }
};


const handleMove = (delta, sensitivity) => {
  const maxDelta = window.innerWidth / 2;
  const percentage = (delta / maxDelta) * sensitivity;
  const nextPercentRaw = parseFloat(track.dataset.prevPercentage || "0") + percentage;


  const nextPercentage = Math.max(Math.min(nextPercentRaw, 0), -100);


  track.dataset.percentage = nextPercentage;

  updatePosition(nextPercentage);
};


window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};


window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};


window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  handleMove(mouseDelta, -100);
};


let scrollTimeout;

window.onwheel = (e) => {
  e.preventDefault();
  clearTimeout(scrollTimeout);


  handleMove(e.deltaY, -150);


  scrollTimeout = setTimeout(() => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  }, 150);
};


window.addEventListener('touchmove', (e) => {
  e.preventDefault();
}, { passive: false });


let touchStartX = 0;
let touchEndX = 0;

window.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

window.addEventListener('touchmove', (e) => {
  touchEndX = e.touches[0].clientX;
  const deltaX = touchStartX - touchEndX;
  handleMove(deltaX, -100);
});


window.addEventListener('touchend', () => {
  track.dataset.prevPercentage = track.dataset.percentage;
});
