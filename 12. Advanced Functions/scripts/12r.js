let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*
if(!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  localStorage.removeItem('score');

  updateScoreElement();
  document.querySelector('.js-result').innerHTML = '';
  document.querySelector('.js-moves').innerHTML = ''; 

};

document.querySelector('.js-auto-button').addEventListener('click', () => {
  resetScore();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') resetScore();
})

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins = ${score.wins}, Lost = ${score.losses}, Tie = ${score.ties}`;
}

let isAutoPlaying = false;
let intervalID;

/*
const autoPlay = () => {

};
*/

function autoPlay() {
  if(!isAutoPlaying) {
    document.querySelector('.js-auto-button').innerHTML = 'Stop Playing';
    intervalID = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;

  } else {
    document.querySelector('.auto-play-button').innerHTML = 'Auto Play';
    clearInterval(intervalID);
    isAutoPlaying = false;
  } 
}

document.querySelector('.js-auto-button').addEventListener('click', () => autoPlay());
document.addEventListener('keydown', (event) => {
  if (event.key === "a") autoPlay();
});


document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
      playGame('rock');
    });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
  playGame('scissors');
});

document.body.addEventListener('keydown', () => {
  console.log('keydown');
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'rock') {
      if (computerMove === 'rock') {
          result = 'Tie.';
      } else if (computerMove === 'paper') {
          result = 'You Lose.';
      } else if (computerMove === 'scissors') {
          result = 'You Win.';
      }
  } else if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
          result = 'You Lose.';
      } else if (computerMove === 'paper') {
          result = 'You Win.';
      } else if (computerMove === 'scissors') {
          result = 'Tie.';
      }
  } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
          result = 'You Win.';
      } else if (computerMove === 'paper') {
          result = 'Tie.';
      } else if (computerMove === 'scissors') {
          result = 'You Lose.';
      }
  }

  if (result === 'You Win.') {
    score.wins += 1;
  } else if(result === 'You Lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You 
                                                  <img src="images/${playerMove}-emoji.png" class="move-icon"> 
                                                  <img src="images/${computerMove}-emoji.png" class="move-icon"> 
                                                  Computer`;

  updateScoreElement();

}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}