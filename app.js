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

//THIS WILL STORE THE INSTANCE OF PET THAT THE USER ENDS UP CHOOSING
let name = 0

// DEFINING FUNCTIONS

const decreaseBarsFunc = (petInstance) => { 
    console.log(petInstance) //for debugging
    setInterval(() => {
        petInstance.decreaseHunger
        petInstance.decreaseThirst
        petInstance.decreaseEntertained
        BarMinRuleFunc(petInstance)
        console.log(petInstance._hunger) //for debugging
        console.log(petInstance._thirst) //for debugging
        console.log(petInstance._entertained) //for debugging
        fedBar.style.width = String(petInstance._hunger)+"%";
        quenchedBar.style.width = String(petInstance._thirst)+"%";
        entertainedBar.style.width = String(petInstance._entertained)+"%";
        }, 1500)
    }

const BarMinRuleFunc = (petInstance) => {
    if (petInstance._hunger < 0) {
        petInstance._hunger = 0
    }
    if (petInstance._thirst < 0) {
        petInstance._thirst = 0
    }
    if (petInstance._entertained < 0) {
        petInstance._entertained = 0
    }
}

// SELECING THE PET / INITIALISING INSTANCE / STARTING THE GAME

const initInstance = (petSubclass, petType) => // CREATES INSTANCE OF PET, AND KICKSTARTS THE GAME.
{
    let name = window.prompt("Your new pet's name:");

    while (name.length < 1) {
        name = window.prompt("Please choose a valid name:");
        }
    if (name == null) {
            return }
    homePage.style.display = "none"; // ERASES THE HOMEPAGE
    gamePage.removeAttribute("id"); // MAKES THE GAMEPAGE SHOW
    const chosenPetObj = new petSubclass(name,String(petType)); // CREATES A PET OBJ INSTANCE WITH NAME AND TYPE
    mainPetImage.style.backgroundImage = chosenPetObj.happyImg;
    petName.innerText = chosenPetObj._name;
    decreaseBarsFunc(chosenPetObj)

// INTERACT/CARE BUTTON FUNCTIONALITY
feedButton.addEventListener("click", () => {
    if (chosenPetObj._hunger >= 101) {
        chosenPetObj._hunger = 100;
        return}
    console.log(chosenPetObj._hunger) //logging the current hunger for debugging purposes
    fedBar.style.width = String(chosenPetObj.feed)+"%";
})

playButton.addEventListener("click", () => {
    if (chosenPetObj._entertained >= 101) {
        chosenPetObj._entertained = 100;
        return}
    console.log(chosenPetObj._entertained) //logging the current entertained for debugging purposes
    entertainedBar.style.width = String(chosenPetObj.play)+"%";
})

drinkButton.addEventListener("click", () => {
    if (chosenPetObj._thirst >= 101) {
        chosenPetObj._thirst = 100;
        return}
    console.log(chosenPetObj._thirst) //logging the current thirst for debugging purposes
    quenchedBar.style.width = String(chosenPetObj.quench)+"%";
})

}

//EVENT LISTENERS POINTING TO AN INITITIALISATION FUNCTION TO SETUP CHOSEN PET AND BEGIN GAMEPLAY
foxSelectorImage.addEventListener("click", () => {
    initInstance(Fox, "fox");
})

bearSelectorImage.addEventListener("click", () => {
    initInstance(Bear, "bear");
})

pandaSelectorImage.addEventListener("click", () => {
    initInstance(Panda, "panda");
})