// GETTING / DEFINING ELEMENTS
const dog = document.querySelector("#puppy");
const cat = document.querySelector("#kitten");
const squirrel1 = document.querySelector("#squirrel");

const happy = document.querySelector("happy");
const again = document.querySelector("again");
const image1 = document.querySelector("image1")
const state = document.querySelector("state")

const feeding = document.querySelector("feeding");
const playing = document.querySelector("playing");
const drinking = document.querySelector("drinking");

let pet;
let petName;

//PET SELECTION
dog.addEventListener("click", () => {
    image1.src = "./images/puppy.png"
    pet = new Puppy(petName);
})

//GAMEPLAY
feeding.addEventListener("click", () => {
    state.style.display = "block";
    pet.feed();
})

playing.addEventListener("click", () => {
    state.style.display = "block";
    pet.play();
})

drinking.addEventListener("click", () => {
    state.style.display = "block";
    pet.drink();
})

// PAGE FUNCTIONALITY
drinking.addEventListener("click", () => {
    state.style.display = "block";
    pet.drink();
})



