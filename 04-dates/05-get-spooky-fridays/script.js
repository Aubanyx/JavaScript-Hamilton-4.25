/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let button = document.getElementById("run");
    let fridayMonth = [];
    let monthlist = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    function numberOfFridayThe13thsIn() {
        let inputYear = document.getElementById("year").value;

        for (let month=0; month<12; month++) {

            let dayOfWeek = new Date(inputYear, month,13);

            if (dayOfWeek.getDay() == 5) {
                fridayMonth.push(monthlist[month]);
            }
        }
        return fridayMonth;
    }

    button.addEventListener ("click", function () {
        numberOfFridayThe13thsIn();
        alert(fridayMonth);
    });

})();
