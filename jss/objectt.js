let a ={
    first_name:"Siva",
    last_name:"sankari",
    age:22,
    trainer:true,
    dir:[1,2,3],
    abc: function () {
        return this.first_name
    }
}

console.log(a.age)

console.log(a["last_name"])

const b=a
console.log(b.trainer)
b.mark=34

console.log(b)

const c= Object.create(a)
console.log(c.last_name)
console.log(c)

const {age : Year, trainer: Decade}=a
console.log(Year)

console.log(Object.keys(a))
console.log(Object.values(a))


console.log(a.hasOwnProperty("age"))

for (let i in a){
    console.log(`${a[i]} is value and key is ${i}`)
}

as=[1,2,"siva"]

for (i in as){
   console.log(as[i])
}
