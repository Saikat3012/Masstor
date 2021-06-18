import _ from 'lodash';

//Maping Array
export const mapArray = (array) => {
    return array.map(item => { return item })
}

//Sort Array in Ascending order
export const sortascendingArray = (array) => {
    return array.sort((a, b) => { return a - b })
}

//Sort Array in Descending order
export const sortdescendingArray = (array) => {
    return array.sort((a, b) => { return b - a })
}

//concat Array
export const concatArray = (array, concatArray) => {
    return array.concat(concatArray);
}

//Filter Array [Second params check filter condition it must be function]
export const filterArray = (array, checkValue) => {
    return array.filter(checkValue)
}

//Find Value inside Array using find
//[it's must be return first element in the array ]
//[Here you can use both return method ,If you want to use first method then only pass check parms from callback function,If you want to use second method them must pass check function from callback function]
export const findArray = (array, checkValue) => {
    // return array.find(item => { return item.name == checkValue })
    return array.find(checkValue)
}

//Find indexof  Array Elemnet
//[it's must be return index of first element in the array ]
export const findindexArray = (array, checkValue) => {
    return array.findIndex(checkValue)
}

//Create Array from String 
export const createArray = (stringvalue) => {
    return Array.from(stringvalue)
}

//Check if an array includes value
export const includeArray = (array, checkValue) => {
    return array.includes(checkValue)
}

//Find indexof  Array Elemnet using indexOf
export const findindexelementArray = (array, checkValue) => {
    return array.indexOf(checkValue)
}

// Create string from Array[Convert the elements of an array into a string:]
//Here both return value same
export const createStringToArray = (array) => {
    return array.join()
    // return array.toString();
}

//Find Legnth of Array
export const lengthArray = (array) => {
    return array.length;
}

//Find last index of  Array Elemnet 
export const findlastindexArray = (array, checkValue) => {
    return array.lastIndexOf(checkValue)
}

//Remove Last Element from Array
export const removelastElementArray = (array) => {
    return array.pop()
}

//Remove First Element from Array
export const removefirstElementArray = (array) => {
    return array.shift()
}

//Add element in Array
export const addElementArray = (array, addValue) => {
    var arr = _.filter(array, addValue);
    // console.log("-----------------------------------");
    // console.log(arr);
    // console.log("-----------------------------------");
    if (!_.isEmpty(arr)) {
        return array;
    }
    return array.push(addValue)
}

//Add element is first  in Array
export const addfirstElementArray = (array, addValue) => {
    return array.unshift(addValue)
}

//Reduce Array
export const reduceArray = (array, checkValue) => {
    // return array.reduce(checkValue) //starting left to right
    return array.reduceRight(checkValue) //starting right to left
}

//Revers Array
export const reverseArray = (array) => {
    return array.reverse()
}

//Extract starting to Ending value in Array 
//start must be 0 and Ending must be geterthan starting value
export const sliceArray = (array, start, end) => {
    return array.slice(start, end)
}

//Remove value starting to Ending value in Array 
//pass number of value remove in end parms
export const spliceArray = (array, start, end) => {
    return array.splice(start, end)
}