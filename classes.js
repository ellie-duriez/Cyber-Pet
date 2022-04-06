class pet{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }

    get feed(){
        happy.value += 2;
        state.textContent = "OMG this tastes so good!"  
    }    

    get thirst(){
        happy.value =+ 1;
        state.textContent = "I was really thirsty!"
    }

    get play(){
        happy.value =+ 3;
        state.textContent = "I love tennis balls so much!"
    }

}

class Puppy extends pet {
    constructor(name) {
        super(name)
    }
}









