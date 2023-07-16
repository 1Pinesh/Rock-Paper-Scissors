// Getting all the Elements 
let r = document.getElementById("Rock")
let p = document.getElementById("Paper") 
let s = document.getElementById("Sissior")

let player_Choice =  "" ; 

r.addEventListener("click", () => {
    player_choice = "Rock"
    console.log("rock")
})

p.addEventListener("click", () => {
    player_choice = "Paper"
    console.log("paper")
})

s.addEventListener("click", () => {
    player_choice = "Sissor"
    console.log("sissior")
})