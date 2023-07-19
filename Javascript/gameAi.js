// Getting all object the Elements 
let r = document.getElementById("Rock")
let p = document.getElementById("Paper") 
let s = document.getElementById("Sissior")

// getting the score span Element
let pScore = document.getElementById("Player-score");
let cScore = document.getElementById("Computer-score");

// getting player and computer choice span
let spanPlayer = document.getElementById("player-choice");
let spanComputer = document.getElementById("computer-choice");
//getting winning msg
let win_msg = document.getElementById("win-msg");

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
    const comp = computer_Choice
    spanComputer.textContent = comp

   gameRule(player_Choice,computer_Choice)
   spanPlayer.textContent = "Rock"
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
    const comp = computer_Choice
    spanComputer.textContent = comp
   gameRule(player_Choice,computer_Choice)
   spanPlayer.textContent = "paper"
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
    const comp = computer_Choice
    spanComputer.textContent = comp
   gameRule(player_Choice,computer_Choice)
   spanPlayer.textContent = "Scissor"
})

// get a number from 1 to 3 and round any decimal to the closet interger
function aiChoiceGenerator() {
 return Math.floor(Math.random()*3)+1
}
//add the logic of who get the point
function gameRule(pChoice,cChoice) { 
    if ((pChoice == "Rock" && cChoice == "Scissor") || 
        (pChoice == "Paper" && cChoice == "Rock") || 
        (pChoice == "Scissor" && cChoice == "Paper"))
         {
        pScore.textContent = parseInt(pScore.textContent) + 1;
        win_msg.textContent = "you win this round"
        setTimeout (()=> {
            win_msg.textContent = ""
        },2000)
         } 
    else if ((pChoice == "Rock" && cChoice == "Paper") || 
             (pChoice == "Paper" && cChoice == "Scissor") || 
             (pChoice == "Scissor" && cChoice == "Rock") )
         {
        cScore.textContent = parseInt(cScore.textContent) + 1;
        win_msg.textContent = "Computer win this round"
        setTimeout (()=> {
            win_msg.textContent = ""
        },2000)
        
         } 
}
