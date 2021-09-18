// Player Stats
var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//Enemy Stats
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Game States
//"WIN" - pLayer robot has defeated all enemy-robots
// * Fight all robots
// * befeat each robot

//"LOSE" - player robot has zero or less HP


//Fight loop
var fight = function(enemyName) {
    //Loop while enemy has HP
    while(playerHealth > 0 && enemyHealth > 0) {
        //Ask to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //If skipping
        if (promptFight === "SKIP" || promptFight === "skip") {
            //Confim player wants to skip
            var confirmSkip = window.confirm("Are you sure you want to SKIP?");
            //if YES
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        
        //If fighting
        //Subtract 'playerAttack' from 'enemyHealth'
        enemyHealth = enemyHealth - playerAttack;

        //log above
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " HP.");

        //Check if enemy has died
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died.");
            playerMoney = playerMoney + 20;
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " HP left.");
        }

        //Subtract 'enemyAttack' from 'playerHealth'
        playerHealth = playerHealth - enemyAttack;

        //log above
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " HP.");

        //Check if player has died
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + "HP left.");
        }
    }
};

//Loop though each enemy
for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    }
    //If player dies, end game
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}