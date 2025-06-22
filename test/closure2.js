let myObj = (function() {
    let privateProp1 = 1;
    let privateProp2 = "test";
    let setPrivate1 = function(val1) {privateProp1 = val1;}
    let compute = function() {return privateProp1 + privateProp2;}
    return {compute: compute, setPrivate1: setPrivate1}
})();

console.log(typeof myObj);
console.log(Object.keys(myObj));
console.log(myObj.compute());