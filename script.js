const cursor = document.getElementById("custom-cursor");
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.left = `${x - 20}px`;
  cursor.style.top = `${y - 20}px`;
  const hoveredElement = document.elementFromPoint(x, y);
  const hoveredH1 = hoveredElement?.closest("h1");
  const hoveredEm = hoveredElement?.closest("em");
  const hoveredArticle = hoveredElement?.closest("article");
  const hoveredAnchor = hoveredElement?.closest("a.anchors > strong");
  document
    .querySelectorAll("h1")
    .forEach((h1) => h1.classList.remove("enlarged"));
  document
    .querySelectorAll("p")
    .forEach((em) => em.classList.remove("enlarged"));
  if (hoveredH1 || hoveredEm || hoveredArticle) {
    cursor.classList.add("hovering-p");
    hoveredP.classList.add("enlarged");
  } else {
    cursor.classList.remove("hovering-p");
  }
});
// scroll functionality
const container = document.getElementById("scroll-container");
const sections = document.querySelectorAll("section");
const totalSections = sections.length;
let currentIndex = 0;
let isScrolling = false;

function scrollToSection(index) {
  isScrolling = true;
  container.style.transform = `translateY(-${index * 100}vh)`;
  sections.forEach((section, i) =>
    section.classList.toggle("active", i === index)
  );
  setTimeout(() => {
    isScrolling = false;
  }, 800);
}

window.addEventListener("wheel", (e) => {
  if (isScrolling) return;
  if (e.deltaY > 0 && currentIndex < totalSections - 1) {
    currentIndex++;
    scrollToSection(currentIndex);
  } else if (e.deltaY < 0 && currentIndex > 0) {
    currentIndex--;
    scrollToSection(currentIndex);
  }
});
// Optional: keyboard navigation
window.addEventListener("keydown", (e) => {
  if (isScrolling) return;

  if (e.key === "ArrowDown" && currentIndex < totalSections - 1) {
    currentIndex++;
    scrollToSection(currentIndex);
  } else if (e.key === "ArrowUp" && currentIndex > 0) {
    currentIndex--;
    scrollToSection(currentIndex);
  }
});
