const container = document.querySelector(".container");
const links = [...document.getElementsByClassName("link")];
const nav = ["CONTACT", "WORKS", "INTEREST", "ABOUT"];

setInterval(() => {
  let el = nav.shift();
  nav.push(el);
  links.forEach((link, index) => {
    link.textContent = nav[index];
    link.href = `${nav[index].toLowerCase()}.html`;
    link.style.display = "none";
    setTimeout(() => {
      link.style.display = "block";
      link.style.transform = "rotate(170deg)";
      setTimeout(() => {
        link.style.transform = "rotate(180deg)";
      }, 600);
    }, 1000);
  });
}, 6000);
