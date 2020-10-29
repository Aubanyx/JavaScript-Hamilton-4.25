/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let button = document.getElementById("run");
    button.addEventListener ("click", function () {

        let mdpOne = document.getElementById("pass-one");
        let mdpTwo = document.getElementById("pass-two");


        if (mdpOne.value === mdpTwo.value) {
            mdpOne.style.borderColor = "green";
            mdpTwo.style.borderColor = "green";
        }
        else {
            mdpOne.style.borderColor = "red";
            mdpTwo.style.borderColor = "red";

        }

    });

})();
