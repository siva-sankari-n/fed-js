class pizza{
    crust="original";
    size;
    constructor(pizzaSize){
        this.size=pizzaSize
    }

    getCrust(){
        return this.crust;
    }

    setCrust(pizzaCrust){
        this.crust=pizzaCrust;
    }

    hereYouGo(){
        console.log(`Here's your ${this.crust} ${this.size}`)
    }
}

const myPizza=new pizza("large");
myPizza.hereYouGo()
console.log(myPizza.crust)