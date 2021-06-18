//Extract single character using index
export const charAtString = (stringName, checkValue) => {
    return stringName.charAt(checkValue)
}

//Concat two string 
export const concatString = (stringName1, stringName2) => {
    return stringName1.concat(stringName2)
}

//Check where if the string ends with the specified value
export const endsWithString = (stringName, checkValue) => {
    return stringName.endsWith(checkValue)
}

//Check where if the string start with the specified value
export const startsWithString = (stringName, checkValue) => {
    return stringName.startsWith(checkValue)
}

//Check word inclue in String
export const includesString = (stringName, checkValue) => {
    return stringName.includes(checkValue)
}

//Find index of word,chracter[Here you can use both return method][It must be return first index of duplicate word or character,also return index of starting word]
export const indexOfString = (stringName, checkValue) => {
    return stringName.indexOf(checkValue)
    //    return stringName.search(checkValue)
}


//Find index of word,chracter[It must be return last index of duplicate word or character,also return index of Ending word]
export const lastIndexOfString = (stringName, checkValue) => {
    return stringName.lastIndexOf(checkValue)
}

//Find length of String
export const lengthString = (stringName) => {
    return stringName.length
}

//Extract multiple word  of String['g' use for case  sensitive,gi use for case-insensitive]
export const matchString = (stringName, checkValue) => {
    return stringName.match(checkValue)
}

//Number of time repet the String
export const repeatString = (stringName, checkValue) => {
    return stringName.repeat(checkValue)
}

//Replace of String
export const replaceString = (stringName, oldValue, newValue) => {
    return stringName.replace(oldValue, newValue)
}

//Extract starting to Ending parts in String 
//start must be 0 and Ending must be geterthan starting value
export const sliceString = (stringName, start, end) => {
    return stringName.slice(start, end)
}

//convert string value in Array
export const splitString = (stringName) => {
    return stringName.split(" ")
}

//Extract starting to Ending parts in String 
//start must be 0 and Ending must be End index value
export const substrString = (stringName, start, end) => {
    return stringName.substr(start, end)
}

//Convert LowerCase
export const lowerCaseString = (stringName) => {
    return stringName.toLowerCase()
}

//Convert LowerCase
export const upperCaseString = (stringName) => {
    return stringName.toUpperCase()
}

//Convert to String 
export const convertString = (stringName) => {
    return stringName.toString()
}

//Remove Space of to String [remove starting ending space in first Method,remove extra space in second method ]
export const Stringtrim = (stringName) => {
    return stringName.trim()
    // return stringName.replace(/\s+/g, " ");
}