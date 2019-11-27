
var imageWidth = 400;
var imageCount = document.getElementById("carousel-image-wrapper").childElementCount;
var carouselImageWrapperWidth = imageCount * imageWidth;
var carouselImageWrapper = document.getElementById("carousel-image-wrapper");
carouselImageWrapper.style.width = carouselImageWrapperWidth + "px";
carouselImageWrapper.style.height = 200 + "px";
var imageindex = 0;
for (var i = 0; i <= imageCount - 1; i++) {
  var span = document.createElement("span");
  span.classList.add("dot");
  span.setAttribute("onclick", "dotClick(" + i + ")");
  document.getElementById("dot-wrapper").appendChild(span);
}
var span = document.getElementById("dot-wrapper").children;
renderDot();
function plusSlides(n, c) {

  if (n === -1) {
    imageindex++;
    changePos();
  }
  if (n === 1) {
    imageindex--;
    changePos();
  }
  
}

function changePos() {
  var index = Math.abs(imageindex) % imageCount;
  carouselImageWrapper.style.left = -(index * imageWidth) + "px";
  renderDot();
}
function repeat() {
  plusSlides(1, 0);
}

function activeDot() {
  var dotindex = Math.abs(imageindex) % imageCount;
  return dotindex;
}
function renderDot() {
  for (var i = 0; i <= imageCount - 1; i++) {
    if (i === activeDot()) {
      span[i].style["background-color"] = "red";
    } else {
      span[i].style["background-color"] = "black";
    }
  }
}

function dotClick(index) {
  imageindex = index;
  changePos();
}

var timer= setInterval(repeat,3000);
