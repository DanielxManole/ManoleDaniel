window.addEventListener("scroll", function() {
  const button = document.getElementById("back-to-top");
  if (window.scrollY > 100) { 
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
});

// Scroll lin la apăsarea butonului
document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("back-to-top");
  button.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

const rainContainer = document.querySelector('.code-rain');
const columns = 100; // câte „linii de cod” simultan

for (let i = 0; i < columns; i++) {
    let span = document.createElement('span');
    span.style.left = Math.random() * window.innerWidth + 'px';
    span.style.animationDuration = (Math.random() * 5 + 5) + 's';
    span.style.fontSize = (Math.random() * 12 + 10) + 'px';
    span.textContent = Math.random().toString(36).substring(2, 8); // cod random
    rainContainer.appendChild(span);
}
