// Scoping within fuctions to avoid global variables
const game = () => {
    // Using destructuring to declare multiple variables at once
    let [pScore, cScore] = [0, 0];

    const startGame = () => {
        // Using querySelector instead of getElementsByClassName for performance
        const playBtn = document.querySelector('.intro button');
        const introScrn = document.querySelector('.intro');
        const matchScrn = document.querySelector('.match');
        // On play button click fades out intro screen and fades in match screen through adding css classes with opacity styling
        // Use addEventListener instead of onclick for better separation of concerns
        playBtn.addEventListener('click', () => {
            introScrn.classList.add('fadeOut');
            matchScrn.classList.add('fadeIn');
        });
    };

    // Play match 
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img')
        // Resets animation 
        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            })
        })

        // Using const instead of let for variables that don't need to be reassigned
        const computerOptions = ['rock', 'paper', 'scissors'];

        //  Checks for the user choice and decides the computers, it then passes the outcome to compareHands to decide a winner.
        options.forEach(option => {
            option.addEventListener('click', function() {
                //Computer choice
                const computerChoice = computerOptions[Math.floor(Math.random() * 3)];

                // Waits for animation to end before updating score & hand image
                setTimeout(() => {
                    // Here is where we call compare hands
                    compareHands(this.textContent, computerChoice);
                    //Update Images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                  }, 2000);

                // Hand animation runs on button click
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });
    };

    const updateScore = () => {
        const [playerScore, computerScore] = document.querySelectorAll('.score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    //Winner logic - swtich statement for increased readability 
    const compareHands = (playerChoice, computerChoice) => {
        // Winner variable
        const winner = document.querySelector('.winner');
        switch (playerChoice) {
          case computerChoice:
            winner.textContent = 'TIE';
            break;
          case 'rock':
            if (computerChoice === 'scissors') {
              winner.textContent = 'Player Wins';
              pScore++;
              updateScore();
            } else {
              winner.textContent = 'Computer Wins';
              cScore++;
              updateScore();
            }
            break;
          case 'paper':
            if (computerChoice === 'rock') {
              winner.textContent = 'Player Wins';
              pScore++;
              updateScore();
            } else {
              winner.textContent = 'Computer Wins';
              cScore++;
              updateScore();
            }
            break;
          case 'scissors':
            if (computerChoice === 'paper') {
              winner.textContent = 'Player Wins';
              pScore++;
              updateScore();
            } else {
              winner.textContent = 'Computer Wins';
              cScore++;
              updateScore();
            }
            break;
        }
      };

    // Call inner functions
    startGame()
    playMatch()
};

// Game start function
game();