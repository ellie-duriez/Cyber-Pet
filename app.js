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

    get feed(){
        const feedVal = 10;
        this._hunger += feedVal;
        return this._hunger
        // state.textContent = "OMG this tastes so good!";
    }

    get quench(){
        const quenchVal = 10;
        this._thirst += quenchVal;
        return this._thirst
        // state.textContent = "I was really thirsty!";
    }

    get play(){
        const playVal = 10;
        this._entertained += playVal;
        return this._entertained
        // state.textContent = "I love tennis balls so much!";
    }
}

// DEFINING ELEMENT... HOME/SELECTOR PAGE
const catSelectorImage = document.getElementById("catSelectorImage");
const dogSelectorImage = document.getElementById("dogSelectorImage");
const squirrelSelectorImage = document.getElementById("SquirrelSelectorImage");
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

// SELECING THE PET / INITIALISING INSTANCE
dogSelectorImage.addEventListener("click", () => {
    homePage.style.display = "none"; // ERASES THE HOMEPAGE
    let name = window.prompt("Please pick the name of your new pet.");
    gamePage.removeAttribute("id") // MAKES THE GAMEPAGE SHOW
    chosenPetObj = new Pet(name,"dog"); // CREATES A PET OBJ INSTANCE WITH NAME AND TYPE
    mainPetImage.style.backgroundImage = "url(./images/puppy.png)";
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