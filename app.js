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

class Fox extends Pet {
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

 class Panda extends Pet {
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

class Bear extends Pet {
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
const pandaSelectorImage = document.getElementById("pandaSelectorImage");
const foxSelectorImage = document.getElementById("foxSelectorImage");
const bearSelectorImage = document.getElementById("bearSelectorImage");
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

// function decreaseFed(pet){
//     setInterval(() => {
//         pet._hunger -= 10
//         console.log(pet._hunger)
//     }, 1000)
// }  

// SELECING THE PET / INITIALISING INSTANCE
foxSelectorImage.addEventListener("click", () => {
    homePage.style.display = "none"; // ERASES THE HOMEPAGE
    let name = window.prompt("Please pick the name of your new pet.");
    gamePage.removeAttribute("id") // MAKES THE GAMEPAGE SHOW
    chosenPetObj = new Fox(name,"fox"); // CREATES A PET OBJ INSTANCE WITH NAME AND TYPE
    mainPetImage.style.backgroundImage = "url(./images/gifs/foxHappy.gif)";
    petName.innerText = chosenPetObj.name;
    // decreaseFed(chosenPetObj)
})

pandaSelectorImage.addEventListener("click", () => {
    homePage.style.display = "none"; // ERASES THE HOMEPAGE
    let name = window.prompt("Please pick the name of your new pet.");
    gamePage.removeAttribute("id") // MAKES THE GAMEPAGE SHOW
    chosenPetObj = new Panda(name,"panda"); // CREATES A PET OBJ INSTANCE WITH NAME AND TYPE
    mainPetImage.style.backgroundImage = "url(./images/gifs/pandaHappy.gif)";
    petName.innerText = chosenPetObj.name;
})

bearSelectorImage.addEventListener("click", () => {
    homePage.style.display = "none"; // ERASES THE HOMEPAGE
    let name = window.prompt("Please pick the name of your new pet.");
    gamePage.removeAttribute("id") // MAKES THE GAMEPAGE SHOW
    chosenPetObj = new Bear(name,"bear"); // CREATES A PET OBJ INSTANCE WITH NAME AND TYPE
    mainPetImage.style.backgroundImage = "url(./images/gifs/bearHappy.gif)";
    petName.innerText = chosenPetObj.name;
})

// INTERACT/CARE BUTTON FUNCTIONALITY
feedButton.addEventListener("click", () => {
    fedBar.style.width = String(chosenPetObj.feed)+"%";
    console.log("ok")
    console.log(chosenPetObj.feed)
})

playButton.addEventListener("click", () => {
    entertainedBar.style.width = String(chosenPetObj.play)+"%";
    console.log("ok")
    console.log(chosenPetObj.quench)
})

drinkButton.addEventListener("click", () => {
    console.log("ok")
    console.log(chosenPetObj.quench)
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