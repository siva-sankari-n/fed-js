//exporting module way 1

// const playGuitar = () =>{
//     return "Playing guitar!";
// }

// const shredding = () =>{
//     return "Shredding some licks!";
// }

// const plucking  = () =>{
//     return "Plucking the strings....";
// }

// export default playGuitar;
// export {shredding,plucking};


export default function playGuitar(){
    return "Playing guitar!";
}

export function shredding(){
    return "Shredding some licks!";
}

export function plucking(){
    return "Plucking the strings....";
}