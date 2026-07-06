console.log("IDRISIAJS website loaded");

const cards = document.querySelectorAll(".video-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    window.open("https://www.youtube.com/@idrisiajs", "_blank");
  });
});
