/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get getName(){
            return this.firstname + " " + this.lastname;
        }

        set setName(newName){

            let nameDivided = newName.split(' ');

            this.firstname = nameDivided[0];
            this.lastname = nameDivided[1];
        }
    }

    let button = document.getElementById("run");
    button.addEventListener ("click", function () {

        let auban = new Person("Auban", "Labie");
        console.log(auban.getName);

        auban.setName = "Jonathan Maillard";
        console.log(auban.getName);

    });


})();
