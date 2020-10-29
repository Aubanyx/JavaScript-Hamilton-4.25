/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let target = document.getElementById("target");
    let phrase = document.getElementById("target").innerHTML;
    console.log(phrase.length);

    for (let i = 0; i <= phrase.length; i++) {
        console.log(phrase[i]);
    }


    let lettre = 0;
    console.log(lettre);

    function changeFontSize() {
        phrase[lettre].style.fontSize = "25px";
        console.log("test");
        console.log(phrase[lettre]);
        lettre++;
        console.log(lettre);

    }

        // let time = setInterval(changeFontSize, 1000);

})();
