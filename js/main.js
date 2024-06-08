//! First Problem
// function reverse() {
//     let myArr1 = [].slice.call(arguments)
//     let myArr2 = [].slice.apply(arguments)
//     console.log(myArr1.reverse());
//     console.log(myArr2.reverse());
// }



//! Second Problem
// let masterObject = {

//     description: 'ay 7aga',

//     getSetGen: function () {
//         for (var key in this) {
//             if (typeof this[key] != 'function') {
//                 this['set' + key.charAt(0).toUpperCase() + key.slice(1)] = function (newValue) {
//                     return this[key] = newValue
//                 }
//                 this['get' + key.charAt(0).toUpperCase() + key.slice(1)] = function () {
//                     return this[key]
//                 }
//             }
//         }
//     }
// }

// let dependantObj = {
//     userName: 'Amr',
//     age: 26,
//     gender: 'Male',
//     fun: function () {
//         console.log('bla bla');
//     }
// }

// masterObject.getSetGen.call(dependantObj);