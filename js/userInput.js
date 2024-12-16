//console.log(confirm("Ok === True\nCancel === False"));
//alert("Hiii !!!!  I am sivasankari")
let nme =prompt("Please enter your name : ");
//console.log(nme) It prints the value of the pop up if we cancel the pop up it display none bcoz it's undefined
if(nme){
    console.log(nme.length);
    console.log(nme.trim().length)
    console.log(nme.trim())
}

console.log(nme ?? "No more values") //if the value is undefined it shows the output this is called knowledge kolaskin operator

