// schedule={
//     alive:true,
//     answer:42,
//     hobbies:["Eat","sleep","repeat"],
//     beverage:{mrng : "coffee" , evng : "tea"}
// }

// //calling  a value using keys

// //way 1
// console.log(schedule.answer)

// //way 2
// console.log(schedule["alive"])

// see={
//     arey:false,
//     ans:22,
//     hobby:"getting possesive",
//     mood:["en piranthai","en vazhanthai"],
//     abc :  function(){
//         return `Time for ${this.mood[0]}`;
//     }
// };

// const hear= Object.create(see);
// hear.mindset="off";
// console.log(hear);
// console.log(hear.hobby); //Inheritance
// hear.abc=function(){
//     return "trappy";
// }
// console.log(hear.abc());

const band={
    vocals:"Robert Plant",
    guitar:"Jimmy Page",
    bass:"John Paul Jones",
    drums:"John Bonham"
}

//destructing objects

const {guitar : myVariable, bass: myBass} =band;
console.log(myVariable);
console.log(myBass);

// delete band.drums;
// console.log(band.hasOwnProperty("vocals")) //if the property in the object it print true otherwise false

// console.log(Object.keys(band));
// console.log(Object.values(band));

// for (let job in band){
//     band[job]=prompt(`${job} :`)
// }
 
//console.log(band)