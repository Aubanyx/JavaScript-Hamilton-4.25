/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let validity = document.getElementById("validity");
    let mdpOne = document.getElementById("pass-one");
    let nbreCara = mdpOne.value.length;


    mdpOne.addEventListener ("keyup", function () {
        nbreCara = mdpOne.value.length;
        let pwd = mdpOne.value.replace(/[^0-9]/g,"").length;

        if (nbreCara >= 8 && pwd >= 2) {
            validity.textContent = "ok";
        }
        else {
            validity.textContent = "not ok";
        }

    });

})();
