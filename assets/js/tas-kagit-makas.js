let computer = 0;
let player = 0;

function getComputer() {
  let computerChoice = ['rock', 'paper', 'scissors'].at(
    Math.floor(Math.random() * 3)
  );
  return computerChoice
}

function selectWinner(userChoice,computerChoice) {
  if (
      (userChoice === 'rock' && computerChoice === 'rock') 
  ) {
      return 'berabere';
  } else if (userChoice === 'rock'&& computerChoice === 'paper') {
    return 'kaybettin';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'kazandın' 
  } 
  if (
    (userChoice === 'paper' && computerChoice === 'paper') 
) {
    return 'berabere';
} else if (userChoice === 'paper'&& computerChoice === 'rock') {
  return 'kazandın';
} else if (userChoice === 'paper' && computerChoice === 'scissors') {
  return 'kaybettin'
}   if (
  (userChoice === 'scissors' && computerChoice === 'rock') 
) {
  return 'kaybettin';
} else if (userChoice === 'scissors'&& computerChoice === 'paper') {
return 'kazandın';
} else if (userChoice === 'scissors' && computerChoice === 'scissors') {
return 'berabere'
}   

}

function handleAddBtn(userChoice) {
       const computerChoice = getComputer()
       computerChoiceBtn.innerText = computerChoice
       const result = selectWinner(userChoice,computerChoice)
       winnerBtn.innerText = result
       if( result === 'kazandın') {
         point()
         winnerBtn.style.backgroundColor = ('green');
       }
       if (result === 'kaybettin') {
        computerPoint()
        winnerBtn.style.backgroundColor = ('red');
       }
       if(result === 'berabere') {
        winnerBtn.style.backgroundColor = ('yellow');
       }
}

userChoiceBtnRock.addEventListener('click', () => handleAddBtn('rock'));
userChoiceBtnPaper.addEventListener('click', () => handleAddBtn('paper'));
userChoiceBtnScissors.addEventListener('click', () => handleAddBtn('scissors'));
resetBtn.addEventListener('click', handleClearBtn )

function point() {
      player++
         forPlayer.innerText = player
    }
    function computerPoint() {
      computer++
      forComputer.innerText = computer
    }
     function handleClearBtn() {
      player = 0;
      forPlayer.innerText = player
      computer = 0;
      forComputer.innerText = computer
      winnerBtn.innerText = 'Kazanan:Ben'
      computerChoiceBtn.innerText = ''
      winnerBtn.style.backgroundColor = ('');
    }