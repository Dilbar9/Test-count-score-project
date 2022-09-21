let defaultScore = document.getElementById("home-score");
let firstButton = document.getElementById("add-btn-1");
let secondButton = document.getElementById("add-btn-2");
let thirdButton = document.getElementById("add-btn-3");
let homeScore = 0;


function addOne() {
   homeScore += 1;
   defaultScore.textContent = homeScore;

}

function addTwo() {
    homeScore += 2;
    defaultScore.textContent = homeScore;
 
}

function addThree() {
    homeScore += 3;
    defaultScore.textContent = homeScore;
 
}


let firstGuestButton = document.getElementById("add-btn-4");
let secondGuestButton = document.getElementById("add-btn-5");
let thirdGuestButton = document.getElementById("add-btn-6");
let defaultSecondScore = document.getElementById("guest-score");
let guestScore = 0;


function addOneAdd() {
    guestScore += 1;
    defaultSecondScore.textContent = guestScore;
 
 }
 
 function addTwoAdd() {
     guestScore += 2;
     defaultSecondScore.textContent = guestScore;
  
 }
 
 function addThreeAdd() {
     guestScore += 3;
     defaultSecondScore.textContent = guestScore;
  
 }