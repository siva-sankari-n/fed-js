let strg="Vinsup"
console.log(strg)

console.log(strg.toUpperCase())
console.log(strg.toLowerCase())

console.log(strg.includes("u"))
console.log(strg.includes("a"))


console.log(strg.length)

console.log(strg.charAt(4))

strg="Aravindswamy"
let count=0
for (let i=0;i<strg.length;i++){
    if(strg.includes("a")){
        count+=1
    }
}
console.log(count)

let sli=strg.slice(0,7)
console.log(sli)

let largeString="Aravind Siva Aasiq"

console.log(largeString.split(" "))

let rev="12345"
let revv=""
for(let i=rev.length-1;i>=0;i--){
    revv+=rev.charAt(i)
}
console.log(revv)


for (let i=1;i<=10;i++){
    console.log(i*3)
}