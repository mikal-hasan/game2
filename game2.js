let user = "";
function startGame (){
    let answer=prompt("Do you want to play a game?");
        if (answer === "yes");
    user = prompt("Please enter your name");
    startCombat();
}
startGame();

function startCombat(){
        let userHealth = 40;
        let grantHealth = 10;
        let winCount = 0;
        
        while (winCount < 3){
            let newAnswer= prompt("Attack or Quit");
            if (newAnswer === "attack") {
                grantHealth = grantHealth - getDamage()
                userHealth = userHealth - getDamage();
            }
            else if (newAnswer === "quit"){
                break;
            }

            console.log(`${user} has ${userHealth} health remaining. 
            Grant the Mighty Chicken has ${grantHealth} health remaining.`);
 
            if (grantHealth <= 0) {
                winCount ++;
                console.log(`You killed Grant ${winCount} times`);
                grantHealth=10;
            }
            
            if (userHealth < 1) {
                console.log("Sorry you lose");
                break;
            }   
        }

}

function getDamage(){
    return Math.ceil(Math.random() * 5);
}

