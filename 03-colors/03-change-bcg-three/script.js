/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
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

        let background = document.body;
        let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

        background.style.background = color;
    })

})();
