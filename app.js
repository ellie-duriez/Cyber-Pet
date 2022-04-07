const dog = document.querySelector("#puppy");
const cat = document.querySelector("#kitten");
const squirrel1 = document.querySelector("#squirrel");

const hungerBar = document.querySelector("hungerBar");
const playBar = document.querySelector("playBar");
const thirstBar = document.querySelector("thirstBar");
const again = document.querySelector("again");
const image1 = document.querySelector("pet-img")
const state = document.querySelector("state")
const oneName = document.querySelector("#one-name")


const feeding = document.querySelector("#hunger-button");
const playing = document.querySelector("#play-button");
const drinking = document.querySelector("#drink-button");


let pet;
let petNameHeader;

const getNameHeader = () => {
    petNameHeader = prompt("Please pick the name of your new pet.");
    }

dog.addEventListener("click", () => {
    getNameHeader();
    image1.src = "./images/puppy.png"
    oneName.textContent = pet.name
})

cat.addEventListener("click", () => {
    image1.src = "./images/kitten.png"   
})

squirrel1.addEventListener("click", () => {
    image1.src = "./images/squirell.png"    
})


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