// IMPORTING THE CLASS FILE
// const {Pet} = require("./classes.js");


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

class Dog extends Pet {
    constructor(name) {
       super(name)
    }
    get play(){
        const playVal = 15;
        this._entertained += playVal;
        return this._entertained
        // state.textContent = "I love tennis balls so much!";
    }
    get quench(){
        const quenchVal = 5;
        this._thirst += quenchVal;
        return this._thirst
        // state.textContent = "I was really thirsty!";
    }
    get feed(){
        const feedVal = 8;
        this._hunger += feedVal;
        return this._hunger
        // state.textContent = "OMG this tastes so good!";
    }
 }

 class Cat extends Pet {
    constructor(name) {
       super(name)
    }
    get play(){
        const playVal = 5;
        this._entertained += playVal;
        return this._entertained
        // state.textContent = "I love tennis balls so much!";
 }  
    get quench(){
        const quenchVal = 15;
        this._thirst += quenchVal;
        return this._thirst
        // state.textContent = "I was really thirsty!";
    }
    get feed(){
        const feedVal = 8;
        this._hunger += feedVal;
        return this._hunger
        // state.textContent = "OMG this tastes so good!";
    }

}

class Squirrel extends Pet {
    constructor(name) {
       super(name)
    }
    get play(){
        const playVal = 10;
        this._entertained += playVal;
        return this._entertained
        // state.textContent = "I love tennis balls so much!";
    }
    get quench(){
        const quenchVal = 8;
        this._thirst += quenchVal;
        return this._thirst
        // state.textContent = "I was really thirsty!";
    }
    get feed(){
        const feedVal = 15;
        this._hunger += feedVal;
        return this._hunger
        // state.textContent = "OMG this tastes so good!";
    }
 }

// DEFINING ELEMENT... HOME/SELECTOR PAGE
const catSelectorImage = document.getElementById("catSelectorImage");
const dogSelectorImage = document.getElementById("dogSelectorImage");
const squirrelSelectorImage = document.getElementById("squirrelSelectorImage");
const homePage = document.getElementById("homePage");

// DEFINING ELEMENTS... MAIN GAME PAGE
const gamePage = document.getElementById("gamePage");

const petName = document.getElementById("petName");
const fedBar = document.getElementById("fedBar");
const entertainedBar = document.getElementById("entertainedBar");
const quenchedBar = document.getElementById("quenchedBar");

const mainPetImage = document.getElementById("mainPetImage");

const feedButton = document.getElementById("feedButton");
const drinkButton = document.getElementById("drinkButton");
const playButton = document.getElementById("playButton");

let chosenPetObj //THIS WILL STORE THE INSTANCE OF PET THAT THE USER ENDS UP CHOOSING


// const decreaseFed = () => {
//     const id = setInterval(reduceBar, 1000);
//     function reduceBar() {
//        fedBar.Dog--;
//     }
//  };

// SELECING THE PET / INITIALISING INSTANCE
dogSelectorImage.addEventListener("click", () => {
    homePage.style.display = "none"; // ERASES THE HOMEPAGE
    let name = window.prompt("Please pick the name of your new pet.");
    gamePage.removeAttribute("id") // MAKES THE GAMEPAGE SHOW
    chosenPetObj = new Dog(name,"dog"); // CREATES A PET OBJ INSTANCE WITH NAME AND TYPE
    mainPetImage.style.backgroundImage = "url(./images/puppy.png)";
    petName.innerText = chosenPetObj.name;
    decreaseFed()
})

catSelectorImage.addEventListener("click", () => {
    homePage.style.display = "none"; // ERASES THE HOMEPAGE
    let name = window.prompt("Please pick the name of your new pet.");
    gamePage.removeAttribute("id") // MAKES THE GAMEPAGE SHOW
    chosenPetObj = new Cat(name,"cat"); // CREATES A PET OBJ INSTANCE WITH NAME AND TYPE
    mainPetImage.style.backgroundImage = "url(./images/kitten.png)";
    petName.innerText = chosenPetObj.name;
})

squirrelSelectorImage.addEventListener("click", () => {
    homePage.style.display = "none"; // ERASES THE HOMEPAGE
    let name = window.prompt("Please pick the name of your new pet.");
    gamePage.removeAttribute("id") // MAKES THE GAMEPAGE SHOW
    chosenPetObj = new Squirrel(name,"squirrel"); // CREATES A PET OBJ INSTANCE WITH NAME AND TYPE
    mainPetImage.style.backgroundImage = "url(./images/squirrel.png)";
    petName.innerText = chosenPetObj.name;
})

// INTERACT/CARE BUTTON FUNCTIONALITY
feedButton.addEventListener("click", () => {
    fedBar.style.width = String(chosenPetObj.feed)+"%";
})

playButton.addEventListener("click", () => {
    entertainedBar.style.width = String(chosenPetObj.play)+"%";
})

drinkButton.addEventListener("click", () => {
    console.log("ok")
    quenchedBar.style.width = String(chosenPetObj.quench)+"%";
})

// feeding.addEventListener("click", () => {
//     state.style.display = "block";
//     Pet.feed();
// })

// playing.addEventListener("click", () => {
//     state.style.display = "block";
//     Pet.play();
// })

// drinking.addEventListener("click", () => {
//     state.style.display = "block";
//     Pet.drink();
// })