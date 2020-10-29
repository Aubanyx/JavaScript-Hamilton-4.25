/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    function getSelectValue(selectId)
    {
        let selectElmt = document.getElementById(selectId);

        return selectElmt.value;
    }



    document.getElementById("run").addEventListener("click", function() {
        let day = getSelectValue('dob-day');
        let month = getSelectValue('dob-month');
        let year = getSelectValue('dob-year');

        alert("Ton anniversaire est le " + day + " " + month + " " + year);
    });



})();
