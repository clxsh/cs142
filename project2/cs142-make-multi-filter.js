"use strict";

function cs142MakeMultiFilter(originalArray) {
    let currentArray = [...originalArray];

    let arrayFilterer =  function(filterCriteria, callback) {
        if (typeof filterCriteria !== 'function') {
            return currentArray;
        }
        let filteredArray = [];
        for (let i = 0; i < currentArray.length; i++) {
            if (filterCriteria(currentArray[i])) {
                filteredArray.push(currentArray[i]);
            }
        }
        currentArray = filteredArray;

        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }

        return arrayFilterer
    };

    return arrayFilterer
}