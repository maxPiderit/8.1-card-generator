

function generateCard() {
  let numberCard = document.getElementById('number');
  let currentNumber = Math.floor((Math.random()) * 13) + 1;
  let kind = Math.floor((Math.random()) * 4) + 1;
  let iconUp = document.getElementById('iconUp');
  let iconBottom = document.getElementById('iconBottom');
  let iconBox = document.getElementById('iconBox');
  if (currentNumber <= 10) {
    numberCard.innerHTML = currentNumber;
  }
  else if (currentNumber = 11) {
    numberCard.innerHTML = 'J';
  }
  else if (currentNumber = 12) {
    numberCard.innerHTML = 'Q';
  }
  else if (currentNumber = 13) {
    numberCard.innerHTML = 'K';    
  }
  
  if (kind == 1) {
    iconUp.classList.add("fa-solid", "fa-heart");
  }
  else if (kind == 2) {
    iconUp.classList.add("fa-solid", "fa-hand-middle-finger");
  }
  else if (kind == 3) {
    iconUp.classList.add("fa-solid", "fa-gem");
  }
  else if (kind == 4) {
    iconUp.classList.add("fa-solid", "fa-clover");
  }
  if (kind == 1) {
    iconBottom.classList.add("fa-solid", "fa-heart");
  }
  else if (kind == 2) {
    iconBottom.classList.add("fa-solid", "fa-hand-middle-finger");
  }
  else if (kind == 3) {
    iconBottom.classList.add("fa-solid", "fa-gem");
  }
  else if (kind == 4) {
    iconUp.classList.add("fa-solid", "fa-clover");
  }
}