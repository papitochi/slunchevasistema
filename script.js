const sun = document.querySelector(".sun");
const orbits = document.querySelectorAll(".orbit");

sun.addEventListener("click", () => {
  orbits.forEach((orbit) => {
    orbit.classList.toggle("paused");
  });
});
