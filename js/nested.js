let n=3
let patt=""
for(let i=0;i<n;i++){
    for (let j=0;j<n;j++){
        patt+="*"
    }
    patt+="\n"
}
console.log(patt)

patt=""
for(let i=0;i<n;i++){
    for(let j=0;j<= i;j++){
        patt+="*"
    }
    patt+="\n"
}
console.log(patt)