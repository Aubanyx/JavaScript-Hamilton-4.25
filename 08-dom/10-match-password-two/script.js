/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
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


        if (mdpOne.value !== mdpTwo.value) {
            mdpOne.classList.add("error");
            mdpTwo.classList.add("error");
        }
        else {
            mdpOne.classList.remove("error");
            mdpTwo.classList.remove("error");

        }
    });

})();
