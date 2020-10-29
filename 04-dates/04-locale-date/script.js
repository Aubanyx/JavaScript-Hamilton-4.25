/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    // your code here
    let target = document.getElementById("target");

    let now = new Date();

    let year = now.getFullYear();
    let month = now.getMonth();
    let dayOfWeek = now.getDay();
    let day = now.getDate();
    let hour = now.getHours();
    let minutes = now.getMinutes();

    let daylist = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

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

    target.innerHTML = daylist[dayOfWeek] + " " + day + " " + monthlist[month] + " " + year + ", " + hour + "h" + minutes;



})();
