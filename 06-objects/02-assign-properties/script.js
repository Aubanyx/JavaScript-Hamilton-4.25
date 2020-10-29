/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    // your code here

    let button = document.getElementById("run");
    button.addEventListener ("click", function () {


        // computers.forEach(item => {
        //     if(item.hasOwnProperty('available') === false){
        //         item = Object.defineProperty(item, 'availabe', {value: true});
        //     }
        //
        //     if(item.hasOwnProperty('os') === false){
        //         item = Object.defineProperty(item, 'os', {value: "linux"});
        //     }
        //
        //     if(item.hasOwnProperty('user') === false){
        //         item = Object.defineProperty(item, 'user', {value: null});
        //     }
        // });
        // console.log(computers);


        computers.forEach((computer) => {
            computer.user = computer.user || defaultProps.user;
            computer.os = computer.os || defaultProps.os;
            computer.available = computer.available || defaultProps.available;

            console.table(computer);
        });
    });
})();
