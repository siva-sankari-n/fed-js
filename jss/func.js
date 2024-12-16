// function add(a,b){
//     return a+b;
// }
// function multiply(a,b){
//     return a*b;
// }
// let siva=add(3,5)
// console.log(siva)
// console.log(multiply(siva,6))

// let an=function(d){
//     return d
// }
// console.log(an(4))

// console.log(multiply(siva,an(5))) 

// let arr= (e,f) => {
//     return add(e,f)
// }

// console.log(arr(4,5))


let arr1=["Sivabalan",21,9.8,true]

console.log(arr1)
arr1.push("panipuri")
console.log(arr1)
arr1.unshift(56)
console.log(arr1)
arr1[2]=34
console.log(arr1)

console.log(arr1.length)

//delete operation

arr1.pop()
console.log(arr1)
arr1.shift()
console.log(arr1)

// delete arr1[2]
// console.log(arr1)

arr1.splice(1,0,"demon")
console.log(arr1)

arr1=[1,2,3];
let arr2=[2,3,4]

let arr3=[arr1,arr2]
console.log(arr3[0][2])

arr3=[...arr1,...arr2]
console.log(arr3)

arr3=arr1.concat(arr2)
console.log(arr3)

