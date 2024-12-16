// function sum(a,b){
//     return a+b;
// }

// console.log(sum(4,3))

function getUserNameFromEmail(email){
    return email.slice(0,email.indexOf("@"));
}

console.log(getUserNameFromEmail("sivanavaneeth@gmail.com"))

//creating a function built in function and user defined function and return a ..
//function as a anonymous name and it store it in a variable name FOR EXAMPLE

const harii=function (email){
    return email.slice(0,email.indexOf("@"));
}

console.log(harii("Kalai@gmail.com"))

//Arrow function

const hello=(email) =>{
    return email.slice(0,email.indexOf("@"));
}

console.log(hello("Azar@gmail.com"))
    