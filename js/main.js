var burger = document.getElementById("menu-trigger");
var closeBurger = document.getElementById("close-trigger");
var menu = document.getElementById("mobile-menu");
burger.addEventListener(
  "click",
  (open = () => {
    menu.classList.remove("none");
  })
);
closeBurger.addEventListener(
  "click",
  (close = () => {
    menu.classList.add("none");
  })
);

////// DROPDOWN

// DESKTOP

var menuItems = document.querySelectorAll(".menu-links > .menu-item");
menuItems.forEach((item) => {
  item.appendChild(document.createElement("hr"));
});
var dropper = document.getElementById("dropper");
var dropTarget = document.getElementById("drop-target");
dropper.addEventListener(
  "click",
  (drop = () => {
    dropTarget.classList.toggle("dropIt");
    dropper.classList.toggle("active");
  })
);

// MOBILE

var mDropper = document.getElementById("mobile-dropper");
var mDropTarget = mDropper.parentNode;
// var mDropTarget = document.getElementById("mobile-drop-target");
mDropper.addEventListener(
  "click",
  (mDrop = () => {
    mDropTarget.classList.toggle("mDropIt");
  })
);

var mDropActive = document.querySelector(".drop-active > .drop-icon");
var mDropActiveIcon = document.createElement("img");
mDropActiveIcon.setAttribute("src", "./images/check-icon.png");
mDropActive.appendChild(mDropActiveIcon);
