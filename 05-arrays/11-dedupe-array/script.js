/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    let button = document.getElementById("run");
    button.addEventListener ("click", function () {


        const uniqueSet = new Set(fruits);
        const uniqueSetToArray = [...uniqueSet];


        console.log(uniqueSetToArray);
        uniqueSetToArray.forEach(fruit => console.log(fruit));



    });

})();
