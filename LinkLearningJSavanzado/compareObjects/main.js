'use strict'

//Write a function that determines if 2 objects are equal

function equal(obj1, obj2){
    
    if(Array.isArray(obj1) && Array.isArray(obj2)){
        for(let i = 0; i < obj1.length; i++){
            if(!equal(obj1[i], obj2[i])){
                return false
            }
        }
        return true
    }


    if(typeof obj1 === 'object' && typeof obj2 === 'object'){
        const keys = Object.keys(obj1)
        for(let key of keys){
            if(!equal(obj1[key], obj2[key])){
                return false
            }
        }
        return true
    }
    

    return obj1 === obj2
}



//All console.log must return true
console.log(equal(2,2));
console.log(equal([1,2,3], [1,2,3]));
console.log(equal({a:1, b:2}, {a:1, b:2}));
console.log(equal([{a:1, b:2}], [{a:1, b:2}]));
console.log(equal([{a:[100,200], b:2}], [{a:[100,200], b:2}]));
console.log(equal([{a:[100,200], b:{x:'ABC'}}], [{a:[100,200], b:{x:'ABC'}}]));