let mainNav = document.querySelector('#js-menu');
let navBarToggle = document.querySelector('#js-navbar-toggle');

const numberLoad = document.querySelector('.number-load');
const introImg = document.querySelector('.introduction-image');

// When user clicks on the toggle icon, a class is added to display nav items.
navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

let load = 0;
let int = setInterval(blurring, 40);

function blurring() {
  load++;
  if(load > 99) {
    clearInterval(int);
  }
  numberLoad.innerText = `${load}%`;
  numberLoad.style.opacity = scale(load, 0, 100, 1, 0);
  introImg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}


const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}