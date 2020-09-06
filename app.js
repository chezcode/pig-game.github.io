/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 21 points on GLOBAL score wins the game

*/





// generating fundamental game variables


/* A more complex way of declaring variables in this situation
var score1 = 0
var score2 = 0
var roundScore= 0*/

var scores, roundScore, activePlayer, gamePlaying;
init();
var lastDice 
// keeps track of player currently playing; 0 is 1 Player and 1 is 2 player; We will use this variable to read the //scores out of the scores array...activeplayer 0 will read or write element 0 in scores array and activeplayer 2 will do so for //element 1 of the array


/*create the dice using Math.random method (produces a decimal number between 0-1). Multiply that time 6 to roll number 1-5 and use floor method to produce whole number ex. Math.floor(Math.random()*6)....then add 1 to produce random number 1-6...  */

//dice = Math.floor(Math.random()*6) + 1;

// for access to DOM use document.querySelector...you can change elements and values in Webpage...use # for selecting IDs
// set current score equal to random dice number
// ex...document.querySelector('#current-0').textContent = dice;
/* JS will use type coersion to toggle dice between active players...when activePlayer reads 1, the dice random number will appear in 'current-1', vice versa for when activePlayer reads 0...*/
// this ex of querySelector used as 'setter' of content to webpage
//document.querySelector('#current-' + activePlayer).textContent = dice;

// changing an element using innerhtml method... you must write using strings and not plain text... this ID change is italicized...
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


// using querySelector as a 'getter' or read content from Webpage and store into x
//var x = document.querySelector('#score-0').textContent;
//console.log(x);




//change CSS content using querySelector; 
// make dice display invisible at start of game by setting CSS display property to 'none'
/* the dice image is the class .dice in html file...style(method), display(CSSproperty, 'none'(CSS value))*/
/*document.querySelector('.dice').style.display = 'none';

//setting current and main score to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';*/

// adding
// callback funtion; using the eventlistener to call a function
//function btn();
//document.querySelector('.btn-roll').addEventListener('click', btn);

/* anonymous functions dont have a name so they can't be reused outside its scope...ex. below*/

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
    // what happens when someone clicks the button...
    
    // 1. Random Number
    var dice = Math.floor(Math.random()*6) + 1;
    
    
    // 2. Display the result( displaying dice img random number)
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    // 3. Update the score if the number rolled is NOT a 1
 if  (dice === 6 && lastDice === 6)  {
     scores[activePlayer] = 0;
     document.querySelector('#score-' + activePlayer).textContent = '0';
     nextPlayer;
     
 }else if(dice !== 1){
    //addscore
    roundScore += dice;  //roundScore = roundScore + dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
}else{
        //next player
        nextPlayer();
    
    lastDice = dice;
    
}
    }
    
    
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    
    //add current score to Global score
  scores[activePlayer] += roundScore; //score player already had plus round score    
                                                     
                                                     
     // Update the Ui
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];   
        
        var input= document.querySelector('.final-score').value; // recieve input from UI
        var winningScore;
    //undefined, 0, null or " are COERCED to false
        //anything else is coerced to true
        if(input){
            winningScore = input;
        }else{
            
            winningScore = 21;
        }
                                                     
     // check if player won the game
    if(scores[activePlayer] >= winningScore){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
}    else{
        //next player
         nextPlayer();
    }
    
    }
                                                     
    });

function nextPlayer(){
    
 activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //use this terenary operator in place of basic if/else statements
        /*if(activePlayer === 0)
            activePlayer = 1;
             }else {
                activePlayer = 0;*/
    
    roundScore = 0; // set current score to 0 when 1 is rolled
    
document.getElementById('current-0' ).textContent = '0'; 
document.getElementById('current-1' ).textContent = '0'; 
document.querySelector('.player-0-panel').classList.toggle('active');// remove and add active player icon(red dot and highlight)
document.querySelector('.player-1-panel').classList.toggle('active');
document.querySelector('.dice').style.display = 'none';
    
}
document.querySelector('.btn-new').addEventListener('click', init); /*this meanswhen somone uses the click btn, call the init function*/
    
    function init(){
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
document.querySelector('.dice').style.display = 'none';
//setting current and main score to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');





 }
    
  