var burger = document.getElementById("menu-trigger");
var closeBurger = document.getElementById("close-trigger");
var menu = document.getElementById("mobile-menu");
burger.addEventListener("click",
    (open = () => {
        menu.classList.remove("none");
    })
)
closeBurger.addEventListener("click",
(close = () => {
    menu.classList.add("none");
})
)

////// DROPDOWN

var dropper = document.getElementById("dropper");
var dropTarget = document.getElementById("drop-target");
dropper.addEventListener("click",
    (drop = () => {
        dropTarget.classList.toggle("dropIt");
    })
)

var mDropper = document.getElementById("mobile-dropper");
var mDropTarget = document.getElementById("mobile-drop-target");
mDropper.addEventListener("click",
    (mDrop = () => {
        mDropTarget.classList.toggle("mDropIt");
    })
)