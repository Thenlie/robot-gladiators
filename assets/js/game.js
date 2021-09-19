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

//Function to start the game
var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {
                    shop();
                }
            }
        }
        //If player dies, end game
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //If game ends move to endGame function
    endGame();
};

//Function to end the game
var endGame = function() {
    if (playerHealth > 0) {
        window.alert("Great job, you have survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
    window.alert("You have lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
        if (playAgainConfirm) {
            startGame();
        }
        else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
};

//Shop function
var shop = function () {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the sotre? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    switch (shopOptionPrompt) {
        
        case "refill":
        case "REFILL":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!")
            }
            break;
        
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7) {
                window.alert("Upgrading players attack by 6 for 7 dollars.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!")
            }
            break;

        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");
            break;

        default:
            window.alert("You did not pick a valid option. Please try again.")
            shop();
            break;
    }
};
startGame();