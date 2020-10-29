/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Cat extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = "Chaous";
    }

    class Dog extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = "Chienous";
    }

    let button = document.getElementById("run");
    button.addEventListener ("click", function () {

        const cat1 = new Cat("Jonathan");
        const dog1 = new Dog("Tanya");

        console.log(cat1.sayHello());
        console.log(dog1.sayHello());

    });

})();
