// Getting all the Elements 
let r = document.getElementById("Rock")
let p = document.getElementById("Paper") 
let s = document.getElementById("Sissior")

// Stores player Pick
let player_Choice =  "" ; 
// Stores player Pick
let computer_Choice = "" ;

//add eventlisten on each object and updates the player option 
r.addEventListener("click", () => {
    player_Choice = "Rock"
    let aiValue = aiChoiceGenerator()

    switch(aiValue) {
        case 1 :
            computer_Choice ="Rock"
            break;
        case 2:
            computer_Choice ="Paper";
            break;
        case 3:
            computer_Choice ="Sissior"
            break;            
    }
    console.log(aiValue)
    // console.log(player_Choice)
    console.log(computer_Choice )
})

p.addEventListener("click", () => {
    player_choice = "Paper"
    console.log("paper")
})

s.addEventListener("click", () => {
    player_choice = "Sissor"
    console.log("sissior")
})
// get a number from 1 to 3 and round any decimal to the closet interger
function aiChoiceGenerator() {
 return Math.floor(Math.random()*3)+1
}
