class Pet {
    constructor(name, type){
        this._name = name;
        this._type = type;
    }
    get name(){
        return this._name;
    }
    get type(){
        return this._type;
    }

    _hunger = 50
    _thirst = 50
    _entertained = 50
    
}