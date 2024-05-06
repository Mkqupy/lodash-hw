// const sliderInput = document.querySelector('.slider__input');
// const sliderImage = document.querySelector('.slider__image');

// function updateImageSize() {
//   const value = sliderInput.value;
//   sliderImage.style.width = `${value}%`;
// }

// let timeout;
// function debouncedUpdateImageSize() {
//   clearTimeout(timeout);
//   timeout = setTimeout(updateImageSize, 100); 
// }

// sliderInput.addEventListener('input', debouncedUpdateImageSize);

// 2
const box = document.getElementById('box');
import { debounce } from 'lodash';
function updatePosition(event) {
  const x = event.clientX;
  const y = event.clientY;
  box.style.left = `${x - box.offsetWidth / 2}px`;
  box.style.top = `${y - box.offsetHeight / 2}px`;
}
const debouncedUpdatePosition = debounce(updatePosition, 100);
box.addEventListener('mousemove', debouncedUpdatePosition);
