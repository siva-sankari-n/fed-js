//EVENT LISTENER

// SYNTAX : addEventListener(event,function,useCapture)

const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

const doSomething = () => {
    alert("doing something");
}

h2.addEventListener("click",doSomething,false);
 h2.removeEventListener("click",doSomething,false);

h2.addEventListener("click",function(event) {
     console.log(event.target);
     event.target.textContent="Clicked";
});

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        console.log("readystate : complete");
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click",(event)=>{
        // event.stopPropagation();
        // view.style.backgroundColor="purple";
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    },false);
    div.addEventListener("click",(event)=>{
        // div.style.backgroundColor="black";
        div.classList.toggle("blue");
        div.classList.toggle("black")
    },false);
    h2.addEventListener("click",(event)=>{
        const myText = event.target.textContent;
        myText === "My 2nd View" ? 
        (event.target.textContent="Clicked") :
        (event.target.textContent="My 2nd View")
    },false);
};


const nav=document.querySelector("nav");
nav.addEventListener("mouseover",(event) => {
    event.target.classList.add("height100");
});
nav.addEventListener("mouseout",(event) =>{
    event.target.classList.remove("height100");
});