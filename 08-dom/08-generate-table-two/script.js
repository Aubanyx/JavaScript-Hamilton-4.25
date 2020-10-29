/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
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
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let theadTr = document.createElement("tr");


    target.append(tableau);
    tableau.append(thead);
    tableau.append(tbody);
    thead.append(theadTr);


    for (let i = 0; i <= 9; i++) {
        let th = document.createElement("th");
        theadTr.append(th);
        th.appendChild(document.createTextNode("Table " + (i + 1)));
    }

    for (let i = 0; i <= 9; i++) {
        let tr = document.createElement("tr");
        tbody.append(tr);

        for (let j = 0; j <= 9; j++) {
            let td = document.createElement("td");
            let resultat = (i + 1) * (j + 1);
            td.appendChild(document.createTextNode((i + 1) + " x " + (j + 1) + " = " + resultat));
            tr.append(td);
        }
    }

})();
