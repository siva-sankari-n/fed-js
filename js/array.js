// //scope -->  var ,let and const

// //main.js
// let oneAr = ["Sankari"];
// console.log(oneAr);

// oneAr[1]=34;
// oneAr[2]=true;

// console.log(oneAr);

// //push function
// oneAr.push("Siva") //add the element at last
// console.log(oneAr)

// oneAr.unshift(83); // add the element at the begining
// console.log(oneAr)

// //pop function
// oneAr.pop() // pops the last element
// console.log(oneAr)

// oneAr.shift()//pop the begining element
// console.log(oneAr)

// oneAr.splice(1,0,"Siva")//splicing is used to replace and delete the element in array Syntax : splice(position,no.of deleted values, n no.of elements)
// console.log(oneAr)

// console.log(oneAr.reverse()) //reverse the array elements

// let nstr=oneAr.join()
// console.log(nstr) //join all the elements in the array as a string

// //split function to convert str to array
// let Arr=nstr.split(",");
// console.log(Arr)

// //merge two arrays
// let arr1=['Siva','sankari',1]
// let arr2=['kalai','vani',2]

// let arr12=arr1.concat(arr2);
// console.log(arr12)

// //spread operator -- using three dots to define ...
// let arr13=[ ...arr2, ...arr1];
// console.log(arr13)

// //without spread operator it considered as a 2D array
// let ary1=[1,2,3,4];
// let ary2=[2,3,4,5];

// let ary3=[ary1,ary2];
// console.log(ary3[0][2])


// let n=3
// let patt=""

// for (let i=0;i<n;i++){
//     for (let j=0;j<n-i;j++){
//         patt+="*"        
//     }
//     patt+="\n"
// }
// console.log(patt)

let products = [
    { name: "Laptop", price: 1200 },
    { name: "Smartphone", price: 800 },
    { name: "Headphones", price: 150 }
  ];
  products.forEach((product, index) => {
    console.log(`Products : ${product.name} their index ${index}`)
  });