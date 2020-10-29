/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
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

        let tableau = [];

        for (let i = 0; i <= 9; i++) {
            tableau.push(Math.floor(Math.random() * 100) + 1);
            console.log(tableau);
            document.getElementById("n-" + Number(i + 1)).innerHTML = tableau[i];
        }

        let minTableau = Math.min(...tableau);
        let maxTableau = Math.max(...tableau);
        const sum = arr => arr.reduce((a, b) => a + b, 0);
        let sumTableau = sum(tableau);
        const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
        let averageTableau = average(tableau);


        document.getElementById("min").innerHTML = minTableau;
        document.getElementById("max").innerHTML = maxTableau;
        document.getElementById("sum").innerHTML = sumTableau;
        document.getElementById("average").innerHTML = averageTableau;

    });


})();
