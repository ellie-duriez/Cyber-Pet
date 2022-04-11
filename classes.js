class Pet {
    _playVal = 10;
    _quenchVal = 10;
    _feedVal = 10;
    _thirst = Math.floor(Math.random()*100);
    _entertained = Math.floor(Math.random()*100);
    _hunger = Math.floor(Math.random()*100);
    _happy = true;

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

    get happy(){
        this._happy = true;
        return this._happy;
    }

    get sad(){
        this._happy = false;
        return this._happy;
    }

}

class Fox extends Pet {

    happyImg = "url(./images/gifs/foxHappy.gif";
    sadImg = "url(./images/gifs/foxSad.gif";
    _playVal = 5;
    _quenchVal = 10;
    _feedVal = 15;

    constructor(name, type) {
       super(name, type);

    }
 }

 class Bear extends Pet {

    happyImg = "url(./images/gifs/bearHappy.gif";
    sadImg = "url(./images/gifs/bearSad.gif";
    _playVal = 15;
    _quenchVal = 5;
    _feedVal = 10;

    constructor(name, type) {
       super(name, type)
    }
 }

 class Panda extends Pet {

    happyImg = "url(./images/gifs/pandaHappy.gif";
    sadImg = "url(./images/gifs/pandaSad.gif";
    _playVal = 10;
    _quenchVal = 15;
    _feedVal = 5;

    constructor(name, type) {
       super(name, type)
    }
 }