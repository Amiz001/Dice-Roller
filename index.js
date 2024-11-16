const cards = document.querySelectorAll('.card');
const rollBtn = document.getElementById('rollBtn');
const result = document.getElementById('result');
const dice = document.getElementById('dice');

const successSound = new Audio('audio/success.mp3');
const failedSound = new Audio('audio/failed.mp3');

let cardValue = 0;
let randomeValue;

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
      for (let j = 0; j < cards.length; j++) {
        cards[j].classList.remove('active'); 
      }
      cards[i].classList.add('active'); 
      cardValue = i+1;
    });
  }

  rollBtn.addEventListener('click', () => {
    randomeValue = Math.floor(Math.random() * 6) + 1;

    if(cardValue == 0){
        result.textContent = "Please guest a Number!";
    }
    else{
        dice.src = `images/${randomeValue}.png`;
        dice.classList.add("anime");

        dice.addEventListener('animationend', () => {
        dice.classList.remove("anime");
    });

        if(cardValue == randomeValue){
            result.textContent = "Correct Guess!";
            successSound.play();
        }
        else{
            result.textContent = `Wrong Guess!`;
            failedSound.play();
        }
    }
  });


