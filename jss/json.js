const myObj={
    name:"Aasiq",
    rollno:45,
    passed_out:true,
    arr:["HTML","C","CSS","PYTHON"]
}

const myjson=JSON.stringify(myObj);
console.log(myjson.name)
console.log(typeof(myjson))

const myparse=JSON.parse(myjson);
console.log(myparse.name)
console.log(typeof(myparse))