"use strict";

let cookys = document.querySelectorAll('.cooky-container');

for (let cooky of cookys) {
    cooky.style.left = document.documentElement.clientWidth / 2 - cooky.offsetWidth / 2 + 'px';
    cooky.style.top = document.documentElement.clientHeight + 'px';
}

whereCooky.onclick = function (event) {
    for (let cooky of cookys) {
        cooky.style.top = 0;
        cooky.style.transform = 'rotate(-720deg)';
    }
};

haveAte.onclick = function (event) {
    for (let cooky of cookys) {
        cooky.style.top = document.documentElement.clientHeight + 'px';;
        cooky.style.transform = 'rotate(720deg)';
    }
};