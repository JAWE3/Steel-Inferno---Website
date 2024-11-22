// JavaScript Document
"use strict"; 
var menu = document.querySelector("nav ul");
var burger = document.querySelector("#burger");
burger.addEventListener("click", function () {
    mobilMenu();
});

function mobilMenu() {
    if (menu.style.display !== "flex") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}

const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;