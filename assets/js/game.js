// Player Stats
var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log("Player Stats: " + playerName, playerAttack, playerHealth, playerMoney);

//Enemy Stats
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//Fight loop
var fight = function() {
    window.alert("Welcome to Robot Gladiators!")
    //Ask to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    //If fighting
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract 'playerAttack' from 'enemyHealth'
        enemyHealth = enemyHealth - playerAttack;

        //log above
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " HP.");

        //Check if enemy has died
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died.");
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
        }
        else {
            window.alert(playerName + " still has " + playerHealth + "HP left.");
        }
    }

    //If skipping
    else if (promptFight === "SKIP" || promptFight === "skip") {
        //Confim player wants to skip
        var confirmSkip = window.confirm("Are you sure you want to SKIP?");
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
    }

    //If invalid input
    else {
        window.alert("You need to choose a valid option. Try again!")
    }
};

fight();
