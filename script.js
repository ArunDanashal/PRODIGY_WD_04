// Scroll fade-in animation
const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.3,
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("fade-in");
    observer.unobserve(entry.target);
  });
}, options);

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});
