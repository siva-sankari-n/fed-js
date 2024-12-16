// const view1 =  document.getElementById("view1");
// console.log(view1)
// const view2= document.querySelector("#view2")
// console.log(view2)

// view1.style.display="flex";
// // // view2.style.display="flex";

// const views=document.getElementsByClassName("view");
// console.log(views)
// const view3=document.querySelector(".view")
// console.log(view3)
// const sameviews=document.querySelectorAll(".view")
// console.log(sameviews)

// const divs=view1.querySelectorAll("div")
// console.log(divs)
// const sameDivs=view1.getElementsByTagName("div")
// console.log(sameDivs)

const evendivs=view1.querySelectorAll("div:nth-of-type(2n)");
// console.log(evendivs);
// console.log(evendivs[0])

for (let i=0;i<evendivs.length;i++){
    evendivs[i].style.backgroundColor="darkblue";
    // evendivs[i].style.width = "200px";
    // evendivs[i].style.height="200px"
} 



// const navText =document.querySelector("nav h1");
// navText.textContent="Hello World";
// const navbar=document.querySelector("nav");
// navbar.innerHTML="<h1>Hello</h1><p> this is siva</p>";
// navbar.style.display="flex";
// navbar.style.justifyContent = "space-around"

console.log(evendivs[0]);
console.log(evendivs[0].parentElement);
console.log(evendivs[0].parentElement.children)
console.log(evendivs[0].parentElement.childNodes)
console.log(evendivs[0].parentElement.hasChildNodes())
console.log(evendivs[0].parentElement.lastChild)
console.log(evendivs[0].parentElement.lastElementChild)
console.log(evendivs[0].parentElement.firstChild)
console.log(evendivs[0].parentElement.firstElementChild)
console.log(evendivs[0].nextSibling)
console.log(evendivs[0].nextElementSibling)
console.log(evendivs[0].previousSibling)
console.log(evendivs[0].previousElementSibling)

//  view1.style.display="none"
//  view2.style.display="flex"
//  view2.style.flexDirection = "row";
//  view2.style.flexWrap = "wrap";
//  view2.style.margin = "18px";

//  while(view2.lastChild){
//      view2.lastChild.remove()
//  }
// //console.log(view2)

// const createdivs=(parent,iter) => {
//     const newDiv = document.createElement("div");
//     newDiv.textContent=iter
//     newDiv.style.backgroundColor= "#fff";
//     newDiv.style.width= "100px";
//     newDiv.style.height= "100px";
//     newDiv.style.marginInline= "10px";
//     newDiv.style.display= "grid";
//     newDiv.style.color="#000";
//     newDiv.style.placeContent= "center";
//     parent.append(newDiv);
// }

// view2.style.width="500px"
// // navbar.style.width="500px"
// // navbar.style.alignSelf="center"

// for (let i =1;i<=12;i++){
//     createdivs(view2,i); 
// }