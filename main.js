const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScrn = document.querySelector('.intro');
        const matchScrn = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScrn.classList.add('fadeOut');
            matchScrn.classList.add('fadeIn');
        });
    };

    //start match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        //Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //console.log(option.textContent);
                //console.log(computerChoice);

                //Call compare hands
                compareHands(this.textContent, computerChoice)
                // Update image
                playerHand.src = `./assets/${this.textContent}.png`
                computerHand.src = `./assets/${computerChoice}.png`
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore
        computerScore.textContent = cScore
    };

    //Winner logic
    const compareHands = (playerChoice, computerChoice) => {
        //Update Text to display winner
        const winner = document.querySelector('.winner')
        //Check for tie
        if(playerChoice === computerChoice) {
            winner.textContent = 'TIE';
            return;
        }
        //Check for rock
        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'Player Wins';
                pScore++
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++
                updateScore();
                return;
            }
        };
        //Check for paper
        if(playerChoice === 'paper') {
            if(computerChoice === 'rock') {
                winner.textContent = 'Player Wins';
                pScore++
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++
                updateScore();
                return;
            }
        };
        //Check for scissors
        if(playerChoice === 'scissors') {
            if(computerChoice === 'paper') {
                winner.textContent = 'Player Wins';
                pScore++
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++
                updateScore();
                return;
            }
        };

    }





    // Call inner functions
    startGame()
    playMatch()
};

// Game start function
game();