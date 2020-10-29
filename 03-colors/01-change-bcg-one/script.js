/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let red = document.getElementById("red");
    let green = document.getElementById("green");
    let yellow = document.getElementById("yellow");
    let blue = document.getElementById("blue");


    red.addEventListener ("click", function () {
        red.style.background='red';
    })

    green.addEventListener ("click", function () {
        green.style.background='green';
    })

    yellow.addEventListener ("click", function () {
        yellow.style.background='yellow';
    })

    blue.addEventListener ("click", function () {
        blue.style.background='blue';
    })

})();
