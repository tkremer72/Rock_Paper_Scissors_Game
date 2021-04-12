let computerScore = 1;
let playerScore = 1;

const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');

const buttons = document.querySelectorAll('.game-selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

//randomClass array shows the icons
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');

//Game functionality
const game = () => {
     buttons.forEach(btn => {
          btn.addEventListener('click', (e) => {
               //Random rock, paper, scissors for computer and player
               let clickedBtn = e.target.className;
               showIcon.className = clickedBtn;
               let randomNum = Math.floor(Math.random() * randomClasses.length);
               computerShowIcon.className = randomClasses[randomNum];
               //Game score
               //If game is a tie
               if(showIcon.className === computerShowIcon.className){
                    pScore.innerHTML = pScore.innerHTML;
                    cScore.innerHTML = cScore.innerHTML;
                    text.innerHTML = "It's a Tie ! ";
                    text.style.color = 'orange';
                   /* text2.innerHTML = text.innerHTML;
                    text2.style.color = 'orange';  */
                } 
               // if it's not a Tie.
                else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]){
                    pScore.innerHTML = playerScore;
                    playerScore++;
                    text.innerHTML = "It's a Win ! ";
                    text.style.color = 'rgb(1, 146, 1)';
                    /* text2.innerHTML = text.innerHTML;
                    text2.style.color = 'rgb(1, 146, 1)'; */
                }else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
                    cScore.innerHTML = computerScore;
                    computerScore++;
                    text.innerHTML = "You Lose ! ";
                    text.style.color = 'red';
                    /* text2.innerHTML = text.innerHTML;
                    text2.style.color = 'red'; */
                }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
                    cScore.innerHTML = computerScore;
                    computerScore++;
                    text.innerHTML = "You Lose ! ";
                    text.style.color = 'red';
                   /*  text2.innerHTML = text.innerHTML;
                    text2.style.color = 'red'; */
                }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]){
                    pScore.innerHTML = playerScore;
                    playerScore++;
                    text.innerHTML = "It's a Win ! ";
                    text.style.color = 'rgb(1, 146, 1)';
                   /*  text2.innerHTML = text.innerHTML;
                    text2.style.color = 'rgb(1, 146, 1)'; */
                }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]){
                    cScore.innerHTML = computerScore;
                    computerScore++;
                    text.innerHTML = "You Lose ! ";
                    text.style.color = 'red';
                    /* text2.innerHTML = text.innerHTML;
                    text2.style.color = 'red'; */
                }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]){
                    pScore.innerHTML = playerScore;
                    playerScore++;
                    text.innerHTML = "It's a Win ! ";
                    text.style.color = 'rgb(1, 146, 1)';
                   /*  text2.innerHTML = text.innerHTML;
                    text2.style.color = 'rgb(1, 146, 1)'; */
                }
          });
     });
}
//Calling the game function
game();