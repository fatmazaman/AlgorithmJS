// How to check two objects are same in javaScript? 
// Are objects of same properties and values equal ?? - No , variables have different addresses in memory.
// Implemenetation of property-based equality.
// Javascript applications uses utility libraries such as lodash, underscore's function to check two object values strictly.
const isEquivalent = (a, b) => {
    // array of properties name 
    var aprop = Object.getOwnPropertyNames(a)
    var bprop = Object.getOwnPropertyNames(b)

    // if length diffreent then false 
    if (aprop.length != bprop.length) return false

    // check each property to match
    for (var i=0 ; i<aprop.length; i++){
        let propName = aprop[i]

        //value of property are diffreent
        if (a[propName] !== b[propName]){
         return false   
        } 
    }
    // everything mactched correctly 
    return true
}

module.exports = isEquivalent
