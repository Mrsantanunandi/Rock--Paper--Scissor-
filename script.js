let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
let result = document.querySelector(".result");
let userscval=document.getElementById("user-score");
let compscval=document.getElementById("comp-score");

const showmasg = ((user, userchoice, compch) => {
    if (user == true) {
        userscore++;
        userscval.innerText=userscore;
        console.log(`You win! ${userchoice} beats ${compch}`);
        result.innerText = `You win! ${userchoice} beats ${compch}`;
        result.style.backgroundColor="purple";
    }
    else {
        compscore++;
        compscval.innerText=compscore;
        console.log(`Computer win! ${compch} beats ${userchoice}`);
        result.innerText = `Computer win! ${userchoice} beats ${compch}`;
        result.style.backgroundColor="red";
    }
})
const drawgame = (userchoice) => {
    console.log(`Game Draw! Both choice ${userchoice}`);
    result.innerText = `Game Draw! Both choice ${userchoice}`;
}
const computerchoice = () => {
    const arr = ["rock", "paper", "scissors"];
    let ranidx = Math.floor(Math.random() * 3);
    return arr[ranidx];
}
const playgame = ((userchoice) => {
    console.log("User choice is", userchoice);
    const compch = computerchoice();
    console.log("Computer choice is", compch);
    if (userchoice === compch) {
        drawgame(userchoice);
    }
    else {
        let user = true;
        if (userchoice === "rock") {
            user = (compch === "scissors") ? true : false;
        }
        if (userchoice === "paper") {
            user = (compch === "rock") ?
                true : false;
        }
        else {
            user = (compch === "paper") ?
                true : false;
        }
        showmasg(user, userchoice, compch);
    }
})
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        //console.log("Choice was clicked",userchoice);
        playgame(userchoice);
    })
});