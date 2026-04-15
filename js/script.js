const blurTexts = document.querySelectorAll(".blur-text");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight / 1.3;
  blurTexts.forEach((el) => {
    const textTop = el.getBoundingClientRect().top;
    if (textTop < trigger) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
});

  window.addEventListener('scroll', function(){
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;

  const boxes = document.querySelectorAll('.about-content');

  boxes.forEach(function(box) {
    const distanceToBox = box.offsetTop;
    if(scroll + windowHeight > distanceToBox) {
      box.classList.add('is-active');
    }
  });
});


window.addEventListener('scroll', function(){
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;

  const boxes = document.querySelectorAll('.work-item');

  boxes.forEach(function(box) {
    const distanceToBox = box.offsetTop;
    if(scroll + windowHeight > distanceToBox) {
      box.classList.add('is-active');
    }
  });
});


window.addEventListener('scroll', function(){
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;

  const boxes = document.querySelectorAll('.skills-content');

  boxes.forEach(function(box) {
    const distanceToBox = box.offsetTop;
    if(scroll + windowHeight > distanceToBox) {
      box.classList.add('is-active');
    }
  });
});