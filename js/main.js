import { students, guesses } from "./config.js";

// last img; first draw
document.querySelector(".solo1").querySelector("img").src=`${students[0].src}`;
document.querySelector("[id='16']").querySelector("h2").innerHTML = students[0].name;
// Opacity Changer
const divs = document.querySelectorAll(".pos1");
for (const div of divs) {
    div.addEventListener("click", (event)=>{
        event.currentTarget.classList.toggle("opacity");
    })
}
// Draws Imgs
const imgs = document.querySelectorAll(".pos1");
let k = 0;
for (let img of imgs){
    img = document.querySelector(`[id='${k + 1}']`).querySelector("img").src=`${students[k].src}`;
    k++
}
// Draws Text
const people = document.querySelectorAll(".pos2");
let v = 0;
for (let person of people){
    person = document.querySelector(`[id='${v + 1}']`).querySelector("h2");
    person.innerHTML = students[v].name;
    v++
}
// Cicle of students on click
const card = document.querySelector(".solo1");
let lastImg = document.querySelector(".solo1").querySelector("img");
let name = document.querySelector("[id='16']").querySelector("h2");

let i = 1;
card.addEventListener("click", ()=>{
    if(i == guesses){
        i = 0;
    };
    lastImg.src=`${students[i].src}`
    name.innerHTML = students[i].name;
    i++;
})

