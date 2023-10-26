var menuBtn = document.querySelector("#menu-bar");
var navBar = document.querySelector(".navbar");

menuBtn.onclick = () => {
menuBtn.classList.toggle("fa-times");
navBar.classList.toggle("active");
};
window.onscroll = () => {
menuBtn.classList.remove("fa-times");
navBar.classList.remove("active");
themeToggler.classList.remove("active")
};




var themeToggler = document.querySelector(".theme-toggler");
var themeBtn = document.querySelector(".toggle-btn");

themeBtn.onclick = () => {
themeToggler.classList.toggle("active");
}

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
btn.onclick = () => {
let color = btn.style.background;
document.querySelector(":root").style.setProperty("--theme-color", color);
}
})