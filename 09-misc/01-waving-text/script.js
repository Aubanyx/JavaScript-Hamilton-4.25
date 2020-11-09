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
    let lettre = [];
    let cpt = 0;

    console.log(phrase.length);

    for (let i = 0; i <= phrase.length; i++) {
        console.log(phrase[i]);
        lettre.push(phrase[i]);
    }
    console.log(lettre);

    lettre[0].fontsize(8);
    lettre[1].style.fontsize = "25px";

    // function changeFontSize() {
    //     console.log(cpt);
    //     console.log(lettre[cpt]);
    //     if (lettre[cpt] <= 74) {
    //         lettre[cpt].fontsize(8);
    //     }
    //     else {
    //         cpt++;
    //     }
    // }

    // phrase.forEach(item => console.log(item));

        // let time = setInterval(changeFontSize, 1000);



    // const target = document.getElementById("target");
    // const text = [...target.innerText].map(x => `<span>${x}</span>`).join("");
    // let waver = 0;
    //
    // target.innerHTML = text;
    //
    // setInterval(wave, 100, target);
    //
    // function wave(target){
    //
    //     for (let i=target.childNodes.length-1 ; i>0 ; i--) {
    //         target.childNodes[i].style.fontSize = target.childNodes[i-1].style.fontSize;
    //     }
    //     waver+=0.3;
    //     target.childNodes[0].style.fontSize = `${2 + Math.sin(waver)}rem`;
    // }

})();
