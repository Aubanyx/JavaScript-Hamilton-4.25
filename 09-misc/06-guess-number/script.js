/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);

    function guessTheNumber() {
        let i = 1;
        let askingTheNumber = prompt("Guess the number bettween 0 and 100!");

        if (askingTheNumber < randomNumber) {
            let newTry = prompt("Wrong guess, it's more, try again. This was try number " + i);

            while (true) {
                i++;
                if (newTry < randomNumber) {
                    let stillWrong = prompt("Still wrong, it's more, try again. This was try number " + i);
                }

                else if (newTry > randomNumber) {
                    let stillWrong = prompt("Still wrong, it's less, try again. This was try number " + i);
                }

                else if (newTry == randomNumber) {
                    alert ("Great, the number was ideed " + randomNumber + " You needed " + i + " tries");
                    break;
                }
            }
        }


        else if (askingTheNumber > randomNumber) {
            let newTry = prompt("Wrong guess, it's less, try again. This was try number " + i);

            while (true) {
                i++;
                if (newTry < randomNumber) {
                    let stillWrong = prompt("Still wrong, it's more, try again. This was try number " + i);
                }

                else if (newTry > randomNumber) {
                    let stillWrong = prompt("Still wrong, it's less, try again. This was try number " + i);
                }

                else if (newTry == randomNumber) {
                    alert ("Great, the number was ideed " + randomNumber + " You needed " + i + " tries");
                    break;
                }
            }
        }
        else {
            alert ("Waow, first try, that's amazing!!!");
        }
    }

    guessTheNumber();

})();
