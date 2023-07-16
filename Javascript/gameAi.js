// Getting all object the Elements 
let r = document.getElementById("Rock")
let p = document.getElementById("Paper") 
let s = document.getElementById("Sissior")

// getting the score span Element
let pScore = document.getElementById("Player-score");
let cScore = document.getElementById("Computer-score");
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
            computer_Choice ="Scissor"
            break;            
    }
   gameRule(player_Choice,computer_Choice)
})

p.addEventListener("click", () => {
    player_choice = "Paper"
    
    let aiValue = aiChoiceGenerator()
    switch(aiValue) {
        case 1 :
            computer_Choice ="Rock"
            break;
        case 2:
            computer_Choice ="Paper";
            break;
        case 3:
            computer_Choice ="Scissor"
            break;            
    }
   gameRule(player_Choice,computer_Choice)
})

s.addEventListener("click", () => {
    player_choice = "Scissor"
    
    let aiValue = aiChoiceGenerator()
    switch(aiValue) {
        case 1 :
            computer_Choice ="Rock"
            break;
        case 2:
            computer_Choice ="Paper";
            break;
        case 3:
            computer_Choice ="Scissor"
            break;            
    }
   gameRule(player_Choice,computer_Choice)
})

// get a number from 1 to 3 and round any decimal to the closet interger
function aiChoiceGenerator() {
 return Math.floor(Math.random()*3)+1
}

function gameRule(pChoice,cChoice) { 
    if (pChoice == "Rock" && cChoice == "Scissor") {
        pScore.textContent = parseInt(pScore.textContent) + 1;
    } else if (pChoice == "Rock" && cChoice == "Paper") {
        cScore.textContent = parseInt(cScore.textContent) + 1;
    } else if (pChoice == "Paper" && cChoice == "Rock") {
        pScore.textContent = parseInt(pScore.textContent) + 1;
    } else if (pChoice == "Paper" && cChoice == "Scissor") {
        cScore.textContent = parseInt(cScore.textContent) + 1;
    } else if (pChoice == "Scissor" && cChoice == "Paper") {
        pScore.textContent = parseInt(pScore.textContent) + 1;
    } else if (pChoice == "Scissor" && cChoice == "Rock") {
        cScore.textContent = parseInt(cScore.textContent) + 1;
    }
}
