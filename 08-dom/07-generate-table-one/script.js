/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let target = document.getElementById("target");
    let tableau = document.createElement("table");

    for (let i = 0; i <= 9; i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.appendChild(document.createTextNode("text " + i));
        target.append(tr);
        tr.append(td);
    }

})();
