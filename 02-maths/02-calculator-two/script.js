/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let a = document.getElementById("op-one").value;
        let b = document.getElementById("op-two").value;
        let c = 0;

        switch (operation) {
            case "addition":
                c = Number(a) + Number(b);
                alert(c);
                break;
            case "substraction":
                c = a - b;
                alert(c);
                break;

            case "multiplication":
                c = a * b;
                alert(c);
                break;

            case "division":
                c = a / b;
                alert(c);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
