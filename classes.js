class pet{
    constructor(name){
        this._name = name;

        this._eat = 5;
        this._thirst = 5;
        this._play = 5;
    }
    get name(){
        return this._name;
    }

    get eat(){
        return this._eat;
        // console.log(`${this.name} is eating`);
        // this.hunger += hunger.eat;
    }    
    increaseEat(){
        this._eat++;
    }
}
const molly = new pet("Molly");

molly.increaseEat()
molly.increaseEat()
console.log(`${molly.name} is eating and has increase their total hunger to ${molly.eat}`)





// class cat extends pet{
//     constructor(name){
//         super(name)
//     }
//     eatingCat(){
//         console.log(`this ${this.name} is so greedy!`)
//     }
// }



