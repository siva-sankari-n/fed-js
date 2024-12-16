const myNumber=42;
console.log(myNumber)

const myfloats=42.151
console.log(myfloats===myNumber)

const myString="42";
//casting
//const ms=Number(myString)
//OR
console.log(Number(myString)+3)

console.log(Number("Dave"))  //Output =NaN -> Not a Number for defining a undefined value or a string

console.log(Number(true))// output:1
console.log(Number(false))

//Number methods

//isInteger()
const  min=45

console.log(Number.isInteger(min))// true
man=42.134
console.log(Number.isInteger(man))//false


//parseFloat()
console.log(Number.parseFloat(myfloats))//return float vlaue

const max="42.321fvc"
console.log(Number.parseFloat(max)) //output:42.321 filters the number

//toFixed()
console.log(Number.parseFloat(max).toFixed(2))//42.32
console.log(man.toFixed(2))//42.13
const mann="32.151"
console.log(myfloats.toFixed(2)) 


//parseInt()
console.log(Number.parseInt(myString))

//toString()
console.log(myfloats.toString())  
console.log(42.1245.toFixed())