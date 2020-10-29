/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

while (true) {
    let age = prompt("Quel age avez-vous ?");
    let gender = prompt("Etes-vous un homme ou une femme ?");
    let town = prompt("Où habitez-vous ?");

    alert(
        "Vous avez " + age + " ans.\n" +
        "Vous etes un(e) " + gender + ".\n" +
        "Vous habitez à " + town + "."
    );

    let confirm = prompt("Vous confirmez ? (oui ou non)");

    if (confirm === "oui") {
        break;
    }
}
})();
