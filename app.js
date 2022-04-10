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

// DEFINING FUNCTIONS
const decreaseBarsFunc = (petInstance) => { 
    console.log(petInstance) //for debugging
    setInterval(() => {
        petInstance.decreaseHunger
        petInstance.decreaseThirst
        petInstance.decreaseEntertained
        console.log(petInstance._hunger) //for debugging
        console.log(petInstance._thirst) //for debugging
        console.log(petInstance._entertained) //for debugging
        fedBar.style.width = String(petInstance._hunger)+"%";
        quenchedBar.style.width = String(petInstance._thirst)+"%";
        entertainedBar.style.width = String(petInstance._entertained)+"%";
        }, 1500)
}

// SELECING THE PET / INITIALISING INSTANCE / STARTING THE GAME

const initInstance = (petSubclass, petType) => // CREATES INSTANCE OF PET, AND KICKSTARTS THE GAME.
{
    homePage.style.display = "none"; // ERASES THE HOMEPAGE
    let name = window.prompt("Please pick the name of your new pet.");
    gamePage.removeAttribute("id"); // MAKES THE GAMEPAGE SHOW
    const chosenPetObj = new petSubclass(name,String(petType)); // CREATES A PET OBJ INSTANCE WITH NAME AND TYPE
    mainPetImage.style.backgroundImage = chosenPetObj.happyImg;
    petName.innerText = chosenPetObj._name;
    decreaseBarsFunc(chosenPetObj)

// INTERACT/CARE BUTTON FUNCTIONALITY
feedButton.addEventListener("click", () => {
    console.log(chosenPetObj._hunger) //logging the current hunger for debugging purposes
    fedBar.style.width = String(chosenPetObj.feed)+"%";
})

playButton.addEventListener("click", () => {
    console.log(chosenPetObj._entertained) //logging the current entertained for debugging purposes
    entertainedBar.style.width = String(chosenPetObj.play)+"%";
})

drinkButton.addEventListener("click", () => {
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