class Pet {
    _playVal = 10;
    _quenchVal = 10;
    _feedVal = 10;
    _thirst = 50;
    _entertained = 50;
    _hunger = 50;

    constructor(name, type){
        this._name = name;
        this._type = type;
    }

    get name(){
        return this._name};
    get type(){
        return this._type};

    get play(){
        this._entertained += this._playVal;
        return this._entertained;
        // state.textContent = "I love tennis balls so much!";
    }
    get quench(){
        this._thirst += this._quenchVal;
        return this._thirst;
        // state.textContent = "I was really thirsty!";
    }
    get feed(){
        this._hunger += this._feedVal;
        return this._hunger;
        // state.textContent = "OMG this tastes so good!";
    }

    get decreaseHunger(){
        this._hunger--;
        return this._hunger;
    }

    get decreaseThirst(){
        this._thirst--;
        return this._thirst;
    }

    get decreaseEntertained(){
        this._entertained--;
        return this._entertained;
    }

}

class Fox extends Pet {

    happyImg = "url(./images/gifs/FoxHappy.gif";
    sadImg = "url(./images/gifs/FoxSad.gif";
    _playVal = 5;
    _quenchVal = 10;
    _feedVal = 15;

    constructor(name, type) {
       super(name, type);

    }
 }

 class Bear extends Pet {

    happyImg = "url(./images/gifs/BearHappy.gif";
    sadImg = "url(./images/gifs/BearSad.gif";
    _playVal = 15;
    _quenchVal = 5;
    _feedVal = 10;

    constructor(name, type) {
       super(name, type)
    }
 }

 class Panda extends Pet {

    happyImg = "url(./images/gifs/PandaHappy.gif";
    sadImg = "url(./images/gifs/PandaSad.gif";
    _playVal = 10;
    _quenchVal = 15;
    _feedVal = 5;

    constructor(name, type) {
       super(name, type)
    }
 }