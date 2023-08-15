const sneaker = document.getElementById('sneaker');
const pipe = document.getElementById('pipe');
let sneakerPosition = 50;
let sneakerVelocity = 0;
const gravity = 1.5;
const jumpStrength = -15;

function gameLoop() {
  sneakerVelocity += gravity;
  sneakerPosition += sneakerVelocity;
  
  if (sneakerPosition >= 550) {
    sneakerPosition = 550;
  }
  
  sneaker.style.transform = `translateY(${sneakerPosition}px)`;
  
  requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32) {
    sneakerVelocity = jumpStrength;
  }
});

gameLoop();
