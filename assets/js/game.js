// PLayer Stats
var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

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
    //Subtract 'enemyAttack' from 'playerHealth'
    playerHealth = playerHealth - enemyAttack;
    //log above
    console.log(enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " HP.");
};

fight();
