/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let counter = document.getElementById("counter");
    let mdpOne = document.getElementById("pass-one");
    let nbreCara = mdpOne.value.length;

    mdpOne.addEventListener ("keyup", function () {
        nbreCara = mdpOne.value.length;
        counter.textContent = nbreCara + "/10";


        if (nbreCara === 10) {
            mdpOne.setAttribute("readonly", true)
        }

    });

})();
