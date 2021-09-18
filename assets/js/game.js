// PLayer Stats
var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;

console.log("Player Stats: " + playerName, playerAttack, playerHealth);

//Enemy Stats
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!")
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
};

fight();
