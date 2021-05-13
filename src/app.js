const container = document.querySelector(".container");
const links = [...document.querySelectorAll(".link")];
const nav = ["CONTACT", "PROJECTS", "INTEREST", "ABOUT"];
let intervalId;
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    clearInterval(intervalId);
  });
});
links.forEach((link) => {
  link.addEventListener("mouseout", () => {
    startInterval();
  });
});
function startInterval() {
  intervalId = setInterval(() => {
    let el = nav.shift();
    nav.push(el);
    links.forEach((link, index) => {
      link.textContent = nav[index];
      link.href = `${nav[index].toLowerCase()}.html`;
      link.style.display = "none";
      setTimeout(() => {
        link.style.display = "block";
        link.style.transform = "rotate(150deg)";
        setTimeout(() => {
          link.style.transform = "rotate(180deg)";
        }, 600);
      }, 1000);
    });
  }, 6000);
}

startInterval();
