class pet{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }

    get feed(){
        hungerBar.value += 2;
        state.textContent = "OMG this tastes so good!"  
    }    

    get thirst(){
        thirstBar.value =+ 1;
        state.textContent = "I was really thirsty!"
    }

    get play(){
        playBar.value =+ 3;
        state.textContent = "I love tennis balls so much!"
    }

}

// class Puppy extends pet {
//     constructor(name) {
//         super(name)
//     }
// }








