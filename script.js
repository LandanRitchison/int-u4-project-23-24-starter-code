// JavaScript goes here.
let UserTextOne = document.querySelector("#userResponseOne");
let UserTextTwo = document.querySelector("#userResponseTwo");
let submitButton = document.querySelector(".submitButton");
let Feedback = document.querySelector(".result");
// console logs all variables
console.log(UserTextOne);
console.log(UserTextTwo);
console.log(submitButton);
console.log(Feedback);

submitButton.addEventListener("click", function(){
    let AgeValue = parseInt(UserTextOne.value);
    let RunFar = UserTextTwo.value;

if (AgeValue <= 40 && RunFar === "yes" ) {
    Feedback.innerHTML = "You Should Try Football";
}else if (AgeValue <= 40 && RunFar === "no"){
  Feedback.innerHTML = "You Should Try Basketball";
} else if (AgeValue >= 40 && RunFar === "yes") {
    Feedback.innerHTML = "You Should Try Cross Country";
} else if (AgeValue >= 40 && RunFar === "no") {
    Feedback.innerHTML = "You Should Try a relaxed sport";
} else {
    Feedback.innerHTML = "Enter a valid answer"
}

});