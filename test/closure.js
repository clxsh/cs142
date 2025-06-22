let globalVar = 1;
function localFunc(argVar) {
    let localVar = 0;
    function embedFunc() {return ++localVar + argVar + globalVar;}
    return embedFunc;
}

let myFunc = localFunc(10);
let num1 = myFunc();
let num2 = myFunc();

globalVar = 10;

let num3 = myFunc();

console.log(num1, num2, num3);