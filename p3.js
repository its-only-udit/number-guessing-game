/*
const minNum = 1;
const maxNum = 100;

let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempt = 0;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const newGameBtn = document.getElementById("newGameBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

guessBtn.onclick = function(){

    let guess = Number(guessInput.value);

    if(isNaN(guess)){
        message.textContent = "❌ Enter a valid number";
    }

    else if(guess < minNum || guess > maxNum){
        message.textContent = "❌ Number must be between 1 and 100";
    }

    else{

        attempt++;
        attemptsText.textContent = `Attempts: ${attempt}`;

        if(guess < answer){
            message.textContent = "🔻 Too Low!";
        }

        else if(guess > answer){
            message.textContent = "🔺 Too High!";
        }

        else{
            message.textContent = `🎉 Correct! The answer was ${answer}`;
        }
    }
};

newGameBtn.onclick = function(){

    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    attempt = 0;

    attemptsText.textContent = "Attempts: 0";
    message.textContent = "Start guessing!";
    guessInput.value = "";
};*/

const minNum = 1;
const maxNum = 100;

let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempt = 0;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const newGameBtn = document.getElementById("newGameBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

guessBtn.onclick = function(){

    let guess = Number(guessInput.value);

    if(isNaN(guess)){
        message.textContent = "❌ Enter a valid number";
    }

    else if(guess < minNum || guess > maxNum){
        message.textContent = "❌ Number must be between 1 and 100";
    }

    else{

        attempt++;
        attemptsText.textContent = `Attempts: ${attempt}`;

        if(guess < answer){
            message.textContent = "🔻 Too Low!";
        }

        else if(guess > answer){
            message.textContent = "🔺 Too High!";
        }

        else{

            message.textContent = `🎉 Correct! The answer was ${answer}`;

            let count = 10;

            const timer = setInterval(function(){

                if(count > 0){
                    message.textContent = `⏳ Countdown: ${count}`;
                    count--;
                }
                else{
                    clearInterval(timer);
                    message.textContent = "🎂 Happy Birthday! 🎉";
                }

            }, 1000);

        }
    }
};

newGameBtn.onclick = function(){

    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    attempt = 0;

    attemptsText.textContent = "Attempts: 0";
    message.textContent = "Start guessing!";
    guessInput.value = "";
};