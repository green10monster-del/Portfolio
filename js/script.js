document.addEventListener("DOMContentLoaded", () => {
  const blurTexts = document.querySelectorAll(".blur-text");

  if (!blurTexts.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  blurTexts.forEach((text) => {
    observer.observe(text);
  });
});
