const morebands = Array.from(document.querySelectorAll(".morebands"));
const morebutton = Array.from(document.querySelectorAll(".morebutton"));
if (window.innerWidth < 480) {
    for (let i = 0; i < morebands.length; i++) {
        morebands[i].style.display = "none";
    }
}

for (let i = 0; i < morebutton.length; i++) {
    morebutton[i].addEventListener("click", readMore);
}

function readMore(e) {
    let txt = e.target.previousElementSibling;

    if (txt.style.display === "inline-block") {
        txt.style.display = "none";
        e.target.textContent = "See full list...";
    } else {
        txt.style.display = "inline-block";
        e.target.textContent = "Hide full list...";
    }
}