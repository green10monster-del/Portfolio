const text = document.querySelector(".blur-text");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const trigger = window.innerHeight / 1.3;
    const textTop = text.getBoundingClientRect().top;
    if (textTop < trigger) {
      text.classList.add("show");
    } else {
      text.classList.remove("show");
    }
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