class pizza{
    constructor(pizzaCrust,pizzaSize){
        // this.type=pizzaType;
        this.size=pizzaSize;
        this.crust=pizzaCrust;
        // this.toppings=[]
    }
    
    getCrust(){
        return this.crust;
    }

    setCrust(pizzaCrust){
        this.crust=pizzaCrust;
    }

    bake(){
        console.log(`Baking a ${this.size}  ${this.crust} crust pizza`)
    }
}

const mypizza =new pizza("pepperonni","small")
mypizza.setCrust("Sausage")
mypizza.bake()

// class SpecialtyPizza extends pizza{
//     constructor(pizzaSize){
//         super(pizzaSize)
//         this.type="The works";
//     }

//     slice(){
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices. `);
//     }
    
// }

// const mySpeciality=new SpecialtyPizza("small");
// mySpeciality.slice()


//By using private variables

// class pizza{
//     crust="original";
//     #sauce="traditional"  //private variable
//     #size;
//     constructor(pizzaSize){
//         this.#size=pizzaSize;
//     }

//     getCrust(){
//         return this.crust;
//     }

//     setCrust(pizzaCrust){
//         this.crust=pizzaCrust;
//     }

//     hereYouGo(){
//         console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`)
//     }
// }

// const myPizza =new pizza("large");
// myPizza.hereYouGo()
// console.log(myPizza.crust)
