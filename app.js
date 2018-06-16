/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//Valuses to game
var scores, roundScore, activePlayer,gamePlaying;
init();
//Download variables from HTML
//document.querySelector('#current-'+activePlayer).textContent = dice;

document.querySelector('.btn-roll').addEventListener('click',function(){
//function to change a  dice 
    if (gamePlaying){
   var dice = Math.floor(Math.random()*6)+1;
    var diceDOM=   document.querySelector('.dice');
   diceDOM.style.display = 'block';
   diceDOM.src = 'dice-'+dice+".png";
// function to chose a player turn
if (dice !==  1 ){
    // add score    
    roundScore += dice; 
    document.querySelector('#current-'+ activePlayer).textContent = roundScore;
}else{
nextPlayer();

}
}
});
//Hold button 
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
    //add current score to global score
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent= scores[activePlayer];
    //update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check if the player won the game
    if (scores[activePlayer] >= 10){
        document.querySelector('#name-'+activePlayer).textContent= 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' +activePlayer+ '-panel').classList.add('winner');
        document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
        gamePlaying= false;
    }else{
        nextPlayer();
    }
    }


});

function nextPlayer(){

     //next player turn
     activePlayer === 0 ?/*If activePlayer = 0 then set he on 1 or activePlayer = 1 then set 0
     */activePlayer = 1: activePlayer = 0;
     roundScore= 0;
     document.getElementById('current-0').textContent = 0;
     document.getElementById('current-1').textContent = 0;
     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');
     // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';




}


















