const myVariable="Sivasankari";

// length property
console.log(myVariable.length)
console.log("Sivasankari".length)

//index position to call the character in string

console.log(myVariable.charAt(2))

// give group of character in a string to find first character position or index of the  string 

console.log(myVariable.indexOf("ank")) 

// give group of character in a string to find position or index of the last element in string 

console.log(myVariable.lastIndexOf("ank"))

//slice method

console.log(myVariable.slice(0,4))

//uppercase

console.log(myVariable.toUpperCase())

//lowercase

console.log(myVariable.toLowerCase())

// include method check whether the  goup of character or character are present are not and returns in boolean

console.log(myVariable.includes("ank"))
console.log(myVariable.includes("mut"))

//split method

console.log(myVariable.split("a"))
console.log(myVariable.split(""))

patt="1234"
paty=""
for (let i=patt.length-1;i>=0;i--){
    paty+=patt.charAt(i)
}
console.log(paty)
