/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    // your code here

    let button = document.getElementById("run");
    button.addEventListener ("click", function () {

        let personKeys = Object.keys(person);
        let personValues = Object.values(person);

        personKeys.forEach(item => console.log(item));
        personValues.forEach(item => console.log(item));


    });
})();
