// IMPORTING THE CLASS FILE
// const {Pet} = require("./classes.js");
class Pet{
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

    get feed(){
        hungerBar.value += 2;
        state.textContent = "OMG this tastes so good!";
    }    

    get thirst(){
        thirstBar.value =+ 1;
        state.textContent = "I was really thirsty!";
    }

    get play(){
        playBar.value =+ 3;
        state.textContent = "I love tennis balls so much!";
    }
}

// HOME/SELECTOR PAGE
const catSelectorImage = document.getElementById("catSelectorImage");
const dogSelectorImage = document.getElementById("dogSelectorImage");
const squirrelSelectorImage = document.getElementById("SquirrelSelectorImage");
const homePage = document.getElementById("homePage");

// MAIN GAME PAGE
const gamePage = document.getElementById("gamePage");

const petName = document.getElementById("petName");
const hungerBar = document.getElementById("hungerBar");
const playBar = document.getElementById("playBar");
const thirstBar = document.getElementById("thirstBar");

const mainPetImage = document.getElementById("mainPetImage")

dogSelectorImage.addEventListener("click", () => {
    homePage.style.display = "none"; // ERASES THE HOMEPAGE
    let name = window.prompt("Please pick the name of your new pet.");
    gamePage.removeAttribute("id") // MAKES THE GAMEPAGE SHOW
    let chosenPetObj = new Pet(name,"dog"); // CREATES A PET OBJ INSTANCE WITH NAME AND TYPE
    mainPetImage.style.backgroundImage = "url(./images/puppy.png)";
    
    petName.innerText = chosenPetObj.name;
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